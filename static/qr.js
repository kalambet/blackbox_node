/*
 * PixelQR - tiny dependency-free QR code encoder for BLACKBOX NODE.
 * Byte mode only, error-correction level L, automatic version selection
 * (versions 1..13, enough for meshcore:// URIs up to ~425 chars).
 * Renders chunky pixel modules on a <canvas> to match the retro UI.
 */
(function () {
  "use strict";

  // ---- GF(256) arithmetic (polynomial 0x11d) -------------------------------
  const GF_EXP = new Uint8Array(512);
  const GF_LOG = new Uint8Array(256);
  (function initGf() {
    let x = 1;
    for (let i = 0; i < 255; i++) {
      GF_EXP[i] = x;
      GF_LOG[x] = i;
      x <<= 1;
      if (x & 0x100) x ^= 0x11d;
    }
    for (let i = 255; i < 512; i++) GF_EXP[i] = GF_EXP[i - 255];
  })();

  function gfMul(a, b) {
    if (a === 0 || b === 0) return 0;
    return GF_EXP[GF_LOG[a] + GF_LOG[b]];
  }

  // Reed-Solomon generator polynomial of the given degree (highest degree first,
  // leading coefficient omitted). Port of Nayuki's reference implementation.
  function rsDivisor(degree) {
    const result = [];
    for (let i = 0; i < degree - 1; i++) result.push(0);
    result.push(1);
    let root = 1;
    for (let i = 0; i < degree; i++) {
      for (let j = 0; j < result.length; j++) {
        result[j] = gfMul(result[j], root);
        if (j + 1 < result.length) result[j] ^= result[j + 1];
      }
      root = gfMul(root, 2);
    }
    return result;
  }

  function rsRemainder(data, divisor) {
    const result = divisor.map(() => 0);
    for (const b of data) {
      const factor = b ^ result.shift();
      result.push(0);
      for (let i = 0; i < divisor.length; i++) {
        result[i] ^= gfMul(divisor[i], factor);
      }
    }
    return result;
  }

  // ---- EC level L tables, versions 1..13 -----------------------------------
  // [ecCodewordsPerBlock, [dataCodewordsPerBlock...]]
  const EC_TABLE = {
    1: [7, [19]],
    2: [10, [34]],
    3: [15, [55]],
    4: [20, [80]],
    5: [26, [108]],
    6: [18, [68, 68]],
    7: [20, [78, 78]],
    8: [24, [97, 97]],
    9: [30, [116, 116]],
    10: [18, [68, 68, 69, 69]],
    11: [20, [81, 81, 81, 81]],
    12: [24, [92, 92, 93, 93]],
    13: [26, [107, 107, 107, 107]],
  };

  const ALIGN_POS = {
    1: [],
    2: [6, 18],
    3: [6, 22],
    4: [6, 26],
    5: [6, 30],
    6: [6, 34],
    7: [6, 22, 38],
    8: [6, 24, 42],
    9: [6, 26, 46],
    10: [6, 28, 52],
    11: [6, 30, 54],
    12: [6, 32, 58],
    13: [6, 34, 62],
  };

  function dataCapacityBytes(version) {
    const [, blocks] = EC_TABLE[version];
    const total = blocks.reduce((a, b) => a + b, 0);
    const countBits = version >= 10 ? 16 : 8;
    return total - Math.ceil((4 + countBits) / 8);
  }

  function pickVersion(byteLength) {
    for (let v = 1; v <= 13; v++) {
      if (dataCapacityBytes(v) >= byteLength) return v;
    }
    return null;
  }

  // ---- Bit buffer -----------------------------------------------------------
  function BitBuffer() {
    this.bits = [];
  }
  BitBuffer.prototype.append = function (value, length) {
    for (let i = length - 1; i >= 0; i--) {
      this.bits.push((value >>> i) & 1);
    }
  };

  function toUtf8Bytes(text) {
    if (typeof TextEncoder !== "undefined") {
      return Array.from(new TextEncoder().encode(text));
    }
    const out = [];
    const encoded = unescape(encodeURIComponent(text));
    for (let i = 0; i < encoded.length; i++) out.push(encoded.charCodeAt(i) & 0xff);
    return out;
  }

  // ---- Codeword construction ------------------------------------------------
  function buildCodewords(bytes, version) {
    const [ecPerBlock, blockSizes] = EC_TABLE[version];
    const totalData = blockSizes.reduce((a, b) => a + b, 0);

    const buffer = new BitBuffer();
    buffer.append(0x4, 4); // byte mode
    buffer.append(bytes.length, version >= 10 ? 16 : 8);
    for (const b of bytes) buffer.append(b, 8);

    const capacityBits = totalData * 8;
    const terminator = Math.min(4, capacityBits - buffer.bits.length);
    buffer.append(0, terminator);
    while (buffer.bits.length % 8 !== 0) buffer.bits.push(0);
    const padBytes = [0xec, 0x11];
    let padIdx = 0;
    while (buffer.bits.length < capacityBits) {
      buffer.append(padBytes[padIdx % 2], 8);
      padIdx++;
    }

    const dataCw = [];
    for (let i = 0; i < buffer.bits.length; i += 8) {
      let b = 0;
      for (let j = 0; j < 8; j++) b = (b << 1) | buffer.bits[i + j];
      dataCw.push(b);
    }

    // Split into blocks, compute EC, interleave.
    const divisor = rsDivisor(ecPerBlock);
    const dataBlocks = [];
    const ecBlocks = [];
    let offset = 0;
    for (const size of blockSizes) {
      const block = dataCw.slice(offset, offset + size);
      offset += size;
      dataBlocks.push(block);
      ecBlocks.push(rsRemainder(block, divisor));
    }

    const result = [];
    const maxData = Math.max.apply(null, blockSizes);
    for (let i = 0; i < maxData; i++) {
      for (const block of dataBlocks) {
        if (i < block.length) result.push(block[i]);
      }
    }
    for (let i = 0; i < ecPerBlock; i++) {
      for (const block of ecBlocks) {
        result.push(block[i]);
      }
    }
    return result;
  }

  // ---- Matrix construction ---------------------------------------------------
  function makeMatrix(version) {
    const size = 17 + version * 4;
    const modules = [];
    const isFunction = [];
    for (let y = 0; y < size; y++) {
      modules.push(new Array(size).fill(false));
      isFunction.push(new Array(size).fill(false));
    }
    return { size, modules, isFunction };
  }

  function setFunctionModule(m, x, y, dark) {
    m.modules[y][x] = dark;
    m.isFunction[y][x] = true;
  }

  function drawFinder(m, cx, cy) {
    for (let dy = -4; dy <= 4; dy++) {
      for (let dx = -4; dx <= 4; dx++) {
        const x = cx + dx;
        const y = cy + dy;
        if (x < 0 || y < 0 || x >= m.size || y >= m.size) continue;
        const dist = Math.max(Math.abs(dx), Math.abs(dy));
        setFunctionModule(m, x, y, dist !== 2 && dist !== 4);
      }
    }
  }

  function drawAlignment(m, cx, cy) {
    for (let dy = -2; dy <= 2; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        setFunctionModule(m, cx + dx, cy + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
      }
    }
  }

  function drawFormatBits(m, mask) {
    // EC level L = 0b01
    const data = (0b01 << 3) | mask;
    let rem = data;
    for (let i = 0; i < 10; i++) {
      rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
    }
    const bits = ((data << 10) | rem) ^ 0x5412;

    // First copy
    for (let i = 0; i <= 5; i++) setFunctionModule(m, 8, i, ((bits >>> i) & 1) !== 0);
    setFunctionModule(m, 8, 7, ((bits >>> 6) & 1) !== 0);
    setFunctionModule(m, 8, 8, ((bits >>> 7) & 1) !== 0);
    setFunctionModule(m, 7, 8, ((bits >>> 8) & 1) !== 0);
    for (let i = 9; i < 15; i++) setFunctionModule(m, 14 - i, 8, ((bits >>> i) & 1) !== 0);

    // Second copy
    for (let i = 0; i < 8; i++) setFunctionModule(m, m.size - 1 - i, 8, ((bits >>> i) & 1) !== 0);
    for (let i = 8; i < 15; i++) setFunctionModule(m, 8, m.size - 15 + i, ((bits >>> i) & 1) !== 0);
    setFunctionModule(m, 8, m.size - 8, true); // dark module
  }

  function drawVersionBits(m, version) {
    if (version < 7) return;
    let rem = version;
    for (let i = 0; i < 12; i++) {
      rem = (rem << 1) ^ ((rem >>> 11) * 0x1f25);
    }
    const bits = (version << 12) | rem;
    for (let i = 0; i < 18; i++) {
      const bit = ((bits >>> i) & 1) !== 0;
      const a = m.size - 11 + (i % 3);
      const b = Math.floor(i / 3);
      setFunctionModule(m, a, b, bit);
      setFunctionModule(m, b, a, bit);
    }
  }

  function drawFunctionPatterns(m, version) {
    // Timing patterns
    for (let i = 0; i < m.size; i++) {
      setFunctionModule(m, 6, i, i % 2 === 0);
      setFunctionModule(m, i, 6, i % 2 === 0);
    }
    // Finders
    drawFinder(m, 3, 3);
    drawFinder(m, m.size - 4, 3);
    drawFinder(m, 3, m.size - 4);
    // Alignment
    const positions = ALIGN_POS[version];
    for (let i = 0; i < positions.length; i++) {
      for (let j = 0; j < positions.length; j++) {
        const skip =
          (i === 0 && j === 0) ||
          (i === 0 && j === positions.length - 1) ||
          (i === positions.length - 1 && j === 0);
        if (!skip) drawAlignment(m, positions[i], positions[j]);
      }
    }
    // Reserve format + version areas (drawn for real later)
    drawFormatBits(m, 0);
    drawVersionBits(m, version);
  }

  function drawCodewords(m, codewords) {
    let bitIndex = 0;
    const totalBits = codewords.length * 8;
    for (let right = m.size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (let vert = 0; vert < m.size; vert++) {
        for (let j = 0; j < 2; j++) {
          const x = right - j;
          const upward = ((right + 1) & 2) === 0;
          const y = upward ? m.size - 1 - vert : vert;
          if (!m.isFunction[y][x] && bitIndex < totalBits) {
            m.modules[y][x] = ((codewords[bitIndex >>> 3] >>> (7 - (bitIndex & 7))) & 1) !== 0;
            bitIndex++;
          }
        }
      }
    }
  }

  function maskBit(mask, x, y) {
    switch (mask) {
      case 0: return (x + y) % 2 === 0;
      case 1: return y % 2 === 0;
      case 2: return x % 3 === 0;
      case 3: return (x + y) % 3 === 0;
      case 4: return (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0;
      case 5: return ((x * y) % 2) + ((x * y) % 3) === 0;
      case 6: return (((x * y) % 2) + ((x * y) % 3)) % 2 === 0;
      default: return (((x + y) % 2) + ((x * y) % 3)) % 2 === 0;
    }
  }

  function applyMask(m, mask) {
    for (let y = 0; y < m.size; y++) {
      for (let x = 0; x < m.size; x++) {
        if (!m.isFunction[y][x] && maskBit(mask, x, y)) {
          m.modules[y][x] = !m.modules[y][x];
        }
      }
    }
  }

  // Penalty score (full 4-rule evaluation per the spec).
  function penaltyScore(m) {
    let score = 0;
    const size = m.size;

    // Rule 1: runs in rows/columns
    for (let y = 0; y < size; y++) {
      let runColor = m.modules[y][0];
      let runLen = 1;
      for (let x = 1; x < size; x++) {
        if (m.modules[y][x] === runColor) {
          runLen++;
          if (runLen === 5) score += 3;
          else if (runLen > 5) score += 1;
        } else {
          runColor = m.modules[y][x];
          runLen = 1;
        }
      }
    }
    for (let x = 0; x < size; x++) {
      let runColor = m.modules[0][x];
      let runLen = 1;
      for (let y = 1; y < size; y++) {
        if (m.modules[y][x] === runColor) {
          runLen++;
          if (runLen === 5) score += 3;
          else if (runLen > 5) score += 1;
        } else {
          runColor = m.modules[y][x];
          runLen = 1;
        }
      }
    }

    // Rule 2: 2x2 blocks
    for (let y = 0; y < size - 1; y++) {
      for (let x = 0; x < size - 1; x++) {
        const c = m.modules[y][x];
        if (c === m.modules[y][x + 1] && c === m.modules[y + 1][x] && c === m.modules[y + 1][x + 1]) {
          score += 3;
        }
      }
    }

    // Rule 3: finder-like patterns 1011101 with 4 light modules on a side
    const P1 = [true, false, true, true, true, false, true, false, false, false, false];
    const P2 = [false, false, false, false, true, false, true, true, true, false, true];
    for (let y = 0; y < size; y++) {
      for (let x = 0; x + 10 < size; x++) {
        let m1 = true;
        let m2 = true;
        for (let k = 0; k < 11; k++) {
          if (m.modules[y][x + k] !== P1[k]) m1 = false;
          if (m.modules[y][x + k] !== P2[k]) m2 = false;
        }
        if (m1 || m2) score += 40;
      }
    }
    for (let x = 0; x < size; x++) {
      for (let y = 0; y + 10 < size; y++) {
        let m1 = true;
        let m2 = true;
        for (let k = 0; k < 11; k++) {
          if (m.modules[y + k][x] !== P1[k]) m1 = false;
          if (m.modules[y + k][x] !== P2[k]) m2 = false;
        }
        if (m1 || m2) score += 40;
      }
    }

    // Rule 4: dark module proportion
    let dark = 0;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (m.modules[y][x]) dark++;
      }
    }
    const percent = (dark * 100) / (size * size);
    score += Math.floor(Math.abs(percent - 50) / 5) * 10;
    return score;
  }

  // ---- Public API -------------------------------------------------------------
  function encode(text) {
    const bytes = toUtf8Bytes(String(text == null ? "" : text));
    const version = pickVersion(bytes.length);
    if (version == null) {
      return null; // too long for v13-L
    }
    const codewords = buildCodewords(bytes, version);
    const m = makeMatrix(version);
    drawFunctionPatterns(m, version);
    drawCodewords(m, codewords);

    let bestMask = 0;
    let bestScore = Infinity;
    for (let mask = 0; mask < 8; mask++) {
      applyMask(m, mask);
      drawFormatBits(m, mask);
      const score = penaltyScore(m);
      if (score < bestScore) {
        bestScore = score;
        bestMask = mask;
      }
      applyMask(m, mask); // undo (XOR mask is its own inverse)
    }
    applyMask(m, bestMask);
    drawFormatBits(m, bestMask);

    return {
      size: m.size,
      version,
      get(x, y) {
        return Boolean(m.modules[y] && m.modules[y][x]);
      },
    };
  }

  function cssVar(name, fallback) {
    try {
      const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
      return value || fallback;
    } catch {
      return fallback;
    }
  }

  // Renders the QR onto a canvas with chunky pixel modules and a quiet zone.
  function render(canvas, text, options = {}) {
    const qr = encode(text);
    const ctx = canvas.getContext("2d");
    if (!qr) {
      canvas.width = 160;
      canvas.height = 160;
      ctx.fillStyle = cssVar("--bg-2", "#1f2226");
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = cssVar("--danger", "#d34c4c");
      ctx.font = "8px monospace";
      ctx.fillText("DATA TOO LONG", 30, 80);
      return false;
    }
    const moduleSize = Math.max(2, Math.floor(options.moduleSize || 5));
    const quiet = 4;
    const px = (qr.size + quiet * 2) * moduleSize;
    canvas.width = px;
    canvas.height = px;
    ctx.fillStyle = options.light || cssVar("--ink", "#e3e6ea");
    ctx.fillRect(0, 0, px, px);
    ctx.fillStyle = options.dark || cssVar("--bg-2", "#101214");
    for (let y = 0; y < qr.size; y++) {
      for (let x = 0; x < qr.size; x++) {
        if (qr.get(x, y)) {
          ctx.fillRect((x + quiet) * moduleSize, (y + quiet) * moduleSize, moduleSize, moduleSize);
        }
      }
    }
    return true;
  }

  window.PixelQR = { encode, render };
})();
