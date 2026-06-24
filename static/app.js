const logBox = document.getElementById("log");
const deviceStatus = document.getElementById("deviceStatus");
const deviceStatusTitle = document.getElementById("deviceStatusTitle");
const deviceStatusText = document.getElementById("deviceStatusText");
const modelSelect = document.getElementById("modelSelect");
const modelStatusText = document.getElementById("modelStatusText");
const openModelManagerButton = document.getElementById("openModelManagerButton");
const openAiSettingsButton = document.getElementById("openAiSettingsButton");
const openHelpButton = document.getElementById("openHelpButton");
const openWalletButton = document.getElementById("openWalletButton");
const nodesList = document.getElementById("nodesList");
const nodesPanel = document.querySelector(".nodes-panel");
const leftColumn = document.querySelector(".left-column");
const leftColumnResizeHandle = document.getElementById("leftColumnResizeHandle");
const clearLogButton = document.getElementById("clearLogButton");
const copyAllLogButton = document.getElementById("copyAllLogButton");
const chatForm = document.getElementById("chatForm");
const chatReplyText = document.getElementById("chatReplyText");
const chatText = document.getElementById("chatText");
const chatCommandButton = document.getElementById("chatCommandButton");
const chatCommandMenu = document.getElementById("chatCommandMenu");
const chatCommandLauncher = chatCommandButton ? chatCommandButton.closest(".chat-command-launcher") : null;
const chatCommandItems = Array.from(document.querySelectorAll("[data-chat-command]"));
const chatSubtitle = document.getElementById("chatSubtitle");
const chatModeAiButton = document.getElementById("chatModeAiButton");
const chatModeDmButton = document.getElementById("chatModeDmButton");
const chatModeChansButton = document.getElementById("chatModeChansButton");
const clearChatButton = document.getElementById("clearChatButton");
const chatPeerRow = document.getElementById("chatPeerRow");
const chatPeerSelect = document.getElementById("chatPeerSelect");
const chatPeerDropdown = document.getElementById("chatPeerDropdown");
const chatPeerTrigger = document.getElementById("chatPeerTrigger");
const chatPeerLabel = document.getElementById("chatPeerLabel");
const chatPeerCashuButton = document.getElementById("chatPeerCashuButton");
const chatPeerLocateButton = document.getElementById("chatPeerLocateButton");
const chatPeerInfoButton = document.getElementById("chatPeerInfoButton");
const chatPeerFilterButtons = Array.from(document.querySelectorAll("[data-chat-peer-filter]"));
const chatChannelRow = document.getElementById("chatChannelRow");
const chatChannelSelect = document.getElementById("chatChannelSelect");
const chatChannelDropdown = document.getElementById("chatChannelDropdown");
const chatChannelTrigger = document.getElementById("chatChannelTrigger");
const chatChannelLabel = document.getElementById("chatChannelLabel");
const chatChannelList = document.getElementById("chatChannelList");
const nodesMapModal = document.getElementById("nodesMapModal");
const nodesMapClose = document.getElementById("nodesMapClose");
const nodesMapContainer = document.getElementById("nodesMapContainer");
const nodesPanelOnlineWindow = document.getElementById("nodesPanelOnlineWindow");
const mapNodeOnlineWindowControl = document.getElementById("mapNodeOnlineWindowControl");
const mapNodeOnlineWindow = document.getElementById("mapNodeOnlineWindow");
const openNodesMapButton = document.getElementById("openNodesMapButton");
const nodeModal = document.getElementById("nodeModal");
const nodeModalClose = document.getElementById("nodeModalClose");
const nodeModalDot = document.getElementById("nodeModalDot");
const nodeModalFavoriteButton = document.getElementById("nodeModalFavoriteButton");
const nodeModalPositionButton = document.getElementById("nodeModalPositionButton");
const nodeModalChatButton = document.getElementById("nodeModalChatButton");
const nodeModalSendButton = document.getElementById("nodeModalSendButton");
const nodeModalSubtitle = document.getElementById("nodeModalSubtitle");
const nodeModalIdentity = document.getElementById("nodeModalIdentity");
const nodeModalStatus = document.getElementById("nodeModalStatus");
const nodeModalMetrics = document.getElementById("nodeModalMetrics");
const nodeModalWeather = document.getElementById("nodeModalWeather");
const nodeModalRaw = document.getElementById("nodeModalRaw");
const modelManagerModal = document.getElementById("modelManagerModal");
const modelManagerClose = document.getElementById("modelManagerClose");
const modelManagerStatusText = document.getElementById("modelManagerStatusText");
const installedModelsList = document.getElementById("installedModelsList");
const catalogModelsList = document.getElementById("catalogModelsList");
const aiSettingsModal = document.getElementById("aiSettingsModal");
const aiSettingsClose = document.getElementById("aiSettingsClose");
const aiSettingsForm = document.getElementById("aiSettingsForm");
const aiSettingsStatusText = document.getElementById("aiSettingsStatusText");
const aiSettingsCurrentModel = document.getElementById("aiSettingsCurrentModel");
const aiSettingsEnableInstructions = document.getElementById("aiSettingsEnableInstructions");
const aiSettingsUseTelemetry = document.getElementById("aiSettingsUseTelemetry");
const aiSettingsInstructions = document.getElementById("aiSettingsInstructions");
const aiSettingsLocalTemperature = document.getElementById("aiSettingsLocalTemperature");
const aiSettingsLocalTopP = document.getElementById("aiSettingsLocalTopP");
const aiSettingsLocalMaxTokens = document.getElementById("aiSettingsLocalMaxTokens");
const aiSettingsMeshTemperature = document.getElementById("aiSettingsMeshTemperature");
const aiSettingsMeshTopP = document.getElementById("aiSettingsMeshTopP");
const aiSettingsMeshMaxTokens = document.getElementById("aiSettingsMeshMaxTokens");
const aiSettingsCommandChannels = document.getElementById("aiSettingsCommandChannels");
let aiCommandChannelsLoaded = [];
const helpModal = document.getElementById("helpModal");
const helpModalClose = document.getElementById("helpModalClose");
const helpDonateButton = document.getElementById("helpDonateButton");
const helpDefaultView = document.getElementById("helpDefaultView");
const helpDonateView = document.getElementById("helpDonateView");
const helpModalTitle = document.getElementById("helpModalTitle");
const helpModalSubtitle = document.getElementById("helpModalSubtitle");
const walletModal = document.getElementById("walletModal");
const walletModalClose = document.getElementById("walletModalClose");
const walletEngineStatus = document.getElementById("walletEngineStatus");
const walletMeshtasticStatus = document.getElementById("walletMeshtasticStatus");
const walletSendForm = document.getElementById("walletSendForm");
const walletSendStatus = document.getElementById("walletSendStatus");
const walletRecipientInput = document.getElementById("walletRecipientInput");
const walletAmountInput = document.getElementById("walletAmountInput");
const walletUnitSelect = document.getElementById("walletUnitSelect");
const walletTransportSelect = document.getElementById("walletTransportSelect");
const walletMemoInput = document.getElementById("walletMemoInput");
const walletReceiveId = document.getElementById("walletReceiveId");
const walletCopyReceiveIdButton = document.getElementById("walletCopyReceiveIdButton");
const walletHistoryBody = document.getElementById("walletHistoryBody");
const walletHistoryEmpty = document.getElementById("walletHistoryEmpty");
const walletPreferredUnitSelect = document.getElementById("walletPreferredUnitSelect");
const walletDefaultTransportSelect = document.getElementById("walletDefaultTransportSelect");
const walletInitButton = document.getElementById("walletInitButton");
const walletHomeCreateButton = document.getElementById("walletHomeCreateButton");
const walletResetButton = document.getElementById("walletResetButton");
const walletSettingsStatus = document.getElementById("walletSettingsStatus");
const walletBalanceValue = document.getElementById("walletBalanceValue");
const walletBalanceSub = document.getElementById("walletBalanceSub");
const walletRefreshBalance = document.getElementById("walletRefreshBalance");
const walletReceivePreview = document.getElementById("walletReceivePreview");
const walletHomeActivity = document.getElementById("walletHomeActivity");
const walletQrImage = document.getElementById("walletQrImage");
const walletQrLoading = document.getElementById("walletQrLoading");
const walletReceiveNoWallet = document.getElementById("walletReceiveNoWallet");
const walletReceiveContent = document.getElementById("walletReceiveContent");
const walletCreateBlock = document.getElementById("walletCreateBlock");
const walletMnemonicBlock = document.getElementById("walletMnemonicBlock");
const walletMnemonicGrid = document.getElementById("walletMnemonicGrid");
const walletMnemonicDoneButton = document.getElementById("walletMnemonicDoneButton");
const walletInfoBlock = document.getElementById("walletInfoBlock");
const walletInfoKv = document.getElementById("walletInfoKv");
const walletHomeNoWallet = document.getElementById("walletHomeNoWallet");
const walletHomeSummary = document.getElementById("walletHomeSummary");
const cashuBalanceValue = document.getElementById("cashuBalanceValue");
const cashuBalanceSub = document.getElementById("cashuBalanceSub");
const cashuPendingRow = document.getElementById("cashuPendingRow");
const cashuPendingValue = document.getElementById("cashuPendingValue");
const cashuSwapPendingBtn = document.getElementById("cashuSwapPendingBtn");
// Fund
const cashuMintUrlInput = document.getElementById("cashuMintUrlInput");
const cashuSetMintButton = document.getElementById("cashuSetMintButton");
const cashuMintStatus = document.getElementById("cashuMintStatus");
const cashuMintInfo = document.getElementById("cashuMintInfo");
const cashuInvoiceAmount = document.getElementById("cashuInvoiceAmount");
const cashuCreateInvoiceButton = document.getElementById("cashuCreateInvoiceButton");
const cashuInvoiceStatus = document.getElementById("cashuInvoiceStatus");
const cashuInvoiceBlock = document.getElementById("cashuInvoiceBlock");
const cashuInvoiceQr = document.getElementById("cashuInvoiceQr");
const cashuInvoicePr = document.getElementById("cashuInvoicePr");
const cashuCopyInvoiceButton = document.getElementById("cashuCopyInvoiceButton");
const cashuCheckInvoiceButton = document.getElementById("cashuCheckInvoiceButton");
const cashuCheckStatus = document.getElementById("cashuCheckStatus");
const cashuPendingList = document.getElementById("cashuPendingList");
// Send
const cashuSendNoMint = document.getElementById("cashuSendNoMint");
const cashuSendContent = document.getElementById("cashuSendContent");
const cashuSendAvailable = document.getElementById("cashuSendAvailable");
const cashuChangeForm = document.getElementById("cashuChangeForm");
const cashuChangeAmount = document.getElementById("cashuChangeAmount");
const cashuChangePreset = document.getElementById("cashuChangePreset");
const cashuCompactButton = document.getElementById("cashuCompactButton");
const cashuChangeStatus = document.getElementById("cashuChangeStatus");
const swapChangeAvailable = document.getElementById("swapChangeAvailable");
const cashuSendInventoryEmpty = document.getElementById("cashuSendInventoryEmpty");
const cashuSendSliderWrap = document.getElementById("cashuSendSliderWrap");
const cashuSendSlider = document.getElementById("cashuSendSlider");
const walletSendSubmitButton = document.getElementById("walletSendSubmitButton");
const cashuReadyInventoryDetails = document.getElementById("cashuReadyInventoryDetails");
const cashuReadyInventorySummary = document.getElementById("cashuReadyInventorySummary");
const cashuReadyInventoryList = document.getElementById("cashuReadyInventoryList");
const cashuSendTokenBlock = document.getElementById("cashuSendTokenBlock");
const cashuSendTokenOutput = document.getElementById("cashuSendTokenOutput");
const cashuCopyTokenButton = document.getElementById("cashuCopyTokenButton");
const cashuMeltForm = document.getElementById("cashuMeltForm");
const cashuMeltInput = document.getElementById("cashuMeltInput");
const cashuMeltStatus = document.getElementById("cashuMeltStatus");
// Receive
const cashuReceiveForm = document.getElementById("cashuReceiveForm");
const cashuReceiveInput = document.getElementById("cashuReceiveInput");
const cashuReceiveStatus = document.getElementById("cashuReceiveStatus");
const receiveBtcTab = document.getElementById("receiveBtcTab");
const receiveCashuTab = document.getElementById("receiveCashuTab");
const receiveBtcPanel = document.getElementById("receiveBtcPanel");
const receiveCashuPanel = document.getElementById("receiveCashuPanel");
const walletCopyAddressButton = document.getElementById("walletCopyAddressButton");
const walletShowSeedButton = document.getElementById("walletShowSeedButton");
const walletSeedRevealGrid = document.getElementById("walletSeedRevealGrid");
const walletSeedNotAvailable = document.getElementById("walletSeedNotAvailable");
const walletSeedEyeIcon = document.getElementById("walletSeedEyeIcon");
const walletSeedEyeOffIcon = document.getElementById("walletSeedEyeOffIcon");
const walletTestModeToggle = document.getElementById("walletTestModeToggle");
const walletTestModeBadge = document.getElementById("walletTestModeBadge");
const walletTestModeWarningModal = document.getElementById("walletTestModeWarningModal");
const walletTestModeWarningClose = document.getElementById("walletTestModeWarningClose");
const walletTestModeWarningCancel = document.getElementById("walletTestModeWarningCancel");
const walletTestModeWarningConfirm = document.getElementById("walletTestModeWarningConfirm");
const walletFaucetCard = document.getElementById("walletFaucetCard");
const faucetAddressButton = document.getElementById("faucetAddressButton");
const faucetInvoiceButton = document.getElementById("faucetInvoiceButton");
const faucetStatus = document.getElementById("faucetStatus");
// Swap panel
const swapBtcToCashuForm = document.getElementById("swapBtcToCashuForm");
const swapBtcAmount = document.getElementById("swapBtcAmount");
const swapBtcStatus = document.getElementById("swapBtcStatus");
const swapBtcOnchainBalance = document.getElementById("swapBtcOnchainBalance");
const swapCashuToBtcForm = document.getElementById("swapCashuToBtcForm");
const swapCashuAmount = document.getElementById("swapCashuAmount");
const swapCashuBtcAddr = document.getElementById("swapCashuBtcAddr");
const swapCashuStatus = document.getElementById("swapCashuStatus");
const swapCashuAvailable = document.getElementById("swapCashuAvailable");
const swapCashuReceiveForm = document.getElementById("swapCashuReceiveForm");
const swapCashuReceiveInput = document.getElementById("swapCashuReceiveInput");
const swapCashuReceiveStatus = document.getElementById("swapCashuReceiveStatus");
const swapCashuSendForm = document.getElementById("swapCashuSendForm");
const swapCashuSendAmount = document.getElementById("swapCashuSendAmount");
const swapCashuSendRecipient = document.getElementById("swapCashuSendRecipient");
const swapCashuSendStatus = document.getElementById("swapCashuSendStatus");
const swapCashuSendResult = document.getElementById("swapCashuSendResult");
const swapCashuSendToken = document.getElementById("swapCashuSendToken");
const swapCashuCopyTokenBtn = document.getElementById("swapCashuCopyTokenBtn");
const swapLnAmount = document.getElementById("swapLnAmount");
const swapLnInvoiceButton = document.getElementById("swapLnInvoiceButton");
const swapLnStatus = document.getElementById("swapLnStatus");
const swapLnBlock = document.getElementById("swapLnBlock");
const swapLnQr = document.getElementById("swapLnQr");
const swapLnPr = document.getElementById("swapLnPr");
const swapLnCopyBtn = document.getElementById("swapLnCopyBtn");
const swapLnCheckButton = document.getElementById("swapLnCheckButton");
const swapLnCheckStatus = document.getElementById("swapLnCheckStatus");
const activeSwapsCard = document.getElementById("activeSwapsCard");
const activeSwapsList = document.getElementById("activeSwapsList");
const clearSwapsButton = document.getElementById("clearSwapsButton");
const meshAiReplyToggle = document.getElementById("meshAiReplyToggle");
const setupScreen = document.getElementById("setupScreen");
const setupMenuEl = document.getElementById("setupMenu");
const setupSubEl = document.getElementById("setupSub");
const setupLinkState = document.getElementById("setupLinkState");
const setupCloseButton = document.getElementById("setupCloseButton");
const tracePanel = document.getElementById("tracePanel");
const tracePanelBody = document.getElementById("tracePanelBody");
const tracePanelClose = document.getElementById("tracePanelClose");
const settingsMintUrlInput = document.getElementById("settingsMintUrlInput");
const settingsSetMintButton = document.getElementById("settingsSetMintButton");
const settingsMintStatus = document.getElementById("settingsMintStatus");
// Send tab BTC/Cashu switcher
const sendBtcTab = document.getElementById("sendBtcTab");
const sendCashuTab = document.getElementById("sendCashuTab");
const sendBtcPanel = document.getElementById("sendBtcPanel");
const sendCashuPanel = document.getElementById("sendCashuPanel");
const sendBtcContent = document.getElementById("sendBtcContent");
const sendBtcNoWallet = document.getElementById("sendBtcNoWallet");
const sendBtcBalance = document.getElementById("sendBtcBalance");
const sendBtcForm = document.getElementById("sendBtcForm");
const sendBtcAddress = document.getElementById("sendBtcAddress");
const sendBtcAmount = document.getElementById("sendBtcAmount");
const sendBtcFeeRate = document.getElementById("sendBtcFeeRate");
const sendBtcStatus = document.getElementById("sendBtcStatus");
const sendBtcLnForm = document.getElementById("sendBtcLnForm");
const sendBtcLnInvoice = document.getElementById("sendBtcLnInvoice");
const sendBtcLnStatus = document.getElementById("sendBtcLnStatus");
const walletViewButtons = Array.from(document.querySelectorAll("[data-wallet-view]"));
const walletQuickButtons = Array.from(document.querySelectorAll(".wallet-quick-button"));
const walletViewPanels = {
  home: document.getElementById("walletPanelHome"),
  receive: document.getElementById("walletPanelReceive"),
  send: document.getElementById("walletPanelSend"),
  swap: document.getElementById("walletPanelSwap"),
  history: document.getElementById("walletPanelHistory"),
  settings: document.getElementById("walletPanelSettings"),
  fund: document.getElementById("walletPanelFund"), // legacy, hidden
};
let currentSelectedModel = "";
const LOCAL_CHAT_PEER_ID = "local-ui-user";
let latestModelManagerPayload = null;
let modelManagerOperationActive = false;
let latestAiSettingsPayload = null;
let swapLnPollInterval = null;
let showingDonateView = false;
let latestMeshtasticConnected = false;
let latestMeshStatus = {};
let latestLlmStatus = {};
let latestMessages = [];
let latestLogs = [];
let latestNodes = [];
const unreadPeers = new Set(); // peer IDs with unread incoming messages
let lastUnreadPeer = ""; // most recently received unread DM sender
const HELP_MODAL_TITLE_DEFAULT = "About BLACKBOX NODE";
const HELP_MODAL_TITLE_DONATE = "DONATE";
const CHAT_MODE_AI = "ai";
const CHAT_MODE_DM = "dm";
const CHAT_MODE_CHANS = "chans";
const CHAT_LAST_PEER_STORAGE_KEY = "blackbox.chat.lastPeer";
const CHAT_LAST_CHANNEL_STORAGE_KEY = "blackbox.chat.lastChannel";
const CHAT_CHANNELS_STORAGE_KEY = "blackbox.chat.channels";
const CHAT_PLACEHOLDER_AI = "Write a message. Enter to send, Shift+Enter for new line.";
const CHAT_PLACEHOLDER_DM = "Write a DM to selected node. Ctrl+Enter to send, Enter for new line.";
const CHAT_PLACEHOLDER_CHANS = "Write a channel message. Ctrl+Enter to send, Enter for new line.";
const CHAT_AI_COMMANDS = new Set(["/summary", "/weather", "/activity", "/battery", "/nodecheck"]);
const DEFAULT_CHAT_CHANNELS = [
  { id: "primary", name: "Primary Channel", channelIndex: 0 },
];
const chatState = {
  mode: CHAT_MODE_AI,
  selectedPeer: readStoredChatPeer(),
  channels: readStoredChatChannels(),
  selectedChannel: readStoredChatChannel(),
  localHistory: [],
  dmLoadingPeer: "",
  peerFilters: {
    unread: false,
    active: false,
    // MeshCore "online" = recent advert; contacts advertise rarely, so a
    // reachable peer often looks offline. Default to showing everyone.
    online: false,
  },
};
const cashuState = {
  configured: false,
  mintUrl: null,
  balance: 0,
  generalBalance: 0,
  offgridBalance: 0,
  pendingBalance: 0,
  pendingInvoices: [],
  inventory: {
    confirmed: [],
    general: [],
    offgrid: [],
    pending: [],
    confirmedProofCount: 0,
    generalProofCount: 0,
    offgridProofCount: 0,
    pendingProofCount: 0,
  },
  currentInvoiceHash: null,
  sendOptions: [],
  sendOptionIndex: 0,
};

// Tracks tokens already redeemed in this session so the button stays disabled
// across re-renders of renderDmChat().
const redeemedCashuTokens = new Set();

const walletState = {
  walletConfigured: false,
  meshtasticConnected: false,
  activeView: "home",
  history: [],
  address: null,
  mnemonic: null,
  balance: null,
  qrLoaded: false,
  testMode: false,
  network: "mainnet",
  settings: {
    preferredUnit: "sats",
    defaultTransport: "MeshCore DM",
  },
  lastFocused: null,
};
let walletTestModeTogglePending = false;

async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.error || `${response.status} ${response.statusText}`);
  }
  return payload;
}

if (cashuCompactButton) {
  cashuCompactButton.addEventListener("click", async () => {
    const submitBtn = cashuChangeForm?.querySelector("button[type=submit]");
    if (cashuChangeStatus) cashuChangeStatus.textContent = "Compacting inventory via mint...";
    cashuCompactButton.disabled = true;
    if (submitBtn) submitBtn.disabled = true;
    try {
      const data = await fetchJson("/api/cashu/compact", { method: "POST" });
      await loadCashuState();
      if (cashuChangeStatus) {
        cashuChangeStatus.textContent = data.compacted
          ? `Inventory compacted${data.fee ? `, fee ${data.fee} sats` : ""}`
          : "Inventory is already compact.";
      }
    } catch (e) {
      if (cashuChangeStatus) cashuChangeStatus.textContent = e.message;
    } finally {
      cashuCompactButton.disabled = false;
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

const COPY_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
const CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

function copyWithFeedback(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    btn.innerHTML = CHECK_SVG;
    btn.style.color = "var(--success)";
    btn.style.opacity = "1";
    setTimeout(() => {
      btn.innerHTML = COPY_SVG;
      btn.style.color = "";
      btn.style.opacity = "";
    }, 1500);
  }).catch(() => {});
}

function setChatCommandMenuOpen(open) {
  if (!chatCommandButton || !chatCommandMenu) {
    return;
  }
  const isAiMode = chatState.mode === CHAT_MODE_AI;
  const next = Boolean(open && isAiMode);
  chatCommandMenu.hidden = !next;
  chatCommandButton.classList.toggle("is-active", next);
  chatCommandButton.setAttribute("aria-expanded", String(next));
}

function syncChatCommandUi() {
  if (!chatCommandButton) {
    return;
  }
  const isAiMode = chatState.mode === CHAT_MODE_AI;
  if (chatCommandLauncher) {
    chatCommandLauncher.classList.toggle("hidden", !isAiMode);
  }
  chatCommandButton.classList.toggle("hidden", !isAiMode);
  chatCommandButton.disabled = !isAiMode;
  if (!isAiMode) {
    setChatCommandMenuOpen(false);
  }
}

function applyAiSlashCommand(command) {
  const value = String(command || "").trim();
  if (!chatText || !chatForm || !CHAT_AI_COMMANDS.has(value) || chatState.mode !== CHAT_MODE_AI) {
    return;
  }
  if (value === "/nodecheck") {
    setChatCommandMenuOpen(false);
    openNodeCheckPicker();
    return;
  }
  chatText.value = value;
  setChatCommandMenuOpen(false);
  chatForm.requestSubmit();
}

function openNodeCheckPicker() {
  const picker = document.getElementById("nodecheckPicker");
  const searchEl = document.getElementById("nodecheckSearch");
  const listEl = document.getElementById("nodecheckList");
  if (!picker || !listEl) return;

  function renderPickerList(filter) {
    const q = (filter || "").toLowerCase();
    const nodes = getSelectableNodes().filter((n) => {
      if (!q) return true;
      return (
        (n.shortName || "").toLowerCase().includes(q) ||
        (n.longName  || "").toLowerCase().includes(q) ||
        (n.userId    || "").toLowerCase().includes(q) ||
        (n.id        || "").toLowerCase().includes(q)
      );
    });
    listEl.innerHTML = "";
    if (!nodes.length) {
      listEl.innerHTML = '<div class="chat-peer-empty">No nodes found</div>';
      return;
    }
    nodes.forEach((node) => {
      const addr = getNodeAddress(node);
      const item = document.createElement("div");
      item.className = "chat-peer-item" + (node.online ? "" : " offline-node");
      item.innerHTML = `<span class="chat-peer-item-text"><span class="chat-peer-item-name">${getNodeSlashLabel(node)}</span></span>`;
      item.addEventListener("click", () => {
        closeNodeCheckPicker();
        if (chatText) chatText.value = `/nodecheck ${addr}`;
        if (chatForm) chatForm.requestSubmit();
      });
      listEl.appendChild(item);
    });
  }

  if (searchEl) {
    searchEl.value = "";
    searchEl.oninput = () => renderPickerList(searchEl.value);
  }
  renderPickerList("");
  picker.hidden = false;
  if (searchEl) setTimeout(() => searchEl.focus(), 50);
}

function closeNodeCheckPicker() {
  const picker = document.getElementById("nodecheckPicker");
  if (picker) picker.hidden = true;
}

function appendLog(message) {
  const item = document.createElement("article");
  item.className = `log-item ${message.direction || "system"}`;
  const meta = `${message.createdAt || new Date().toLocaleTimeString()} | ${message.transport || "n/a"} | ${message.sender} -> ${message.recipient || "-"}`;
  item.innerHTML = `<button class="log-copy-btn" title="Copy">${COPY_SVG}</button><div class="log-meta">${meta}</div><div class="log-text"></div>`;
  item.querySelector(".log-text").textContent = message.text || "";
  item.querySelector(".log-copy-btn").addEventListener("click", (e) => {
    copyWithFeedback(e.currentTarget, `${meta}\n${message.text || ""}`);
  });
  logBox.appendChild(item);
  while (logBox.children.length > 120) {
    logBox.removeChild(logBox.firstChild);
  }
  logBox.scrollTop = logBox.scrollHeight;
}

function readStoredChatPeer() {
  try {
    return String(localStorage.getItem(CHAT_LAST_PEER_STORAGE_KEY) || "").trim();
  } catch {
    return "";
  }
}

function persistChatPeer(peerId) {
  try {
    const value = String(peerId || "").trim();
    if (value) {
      localStorage.setItem(CHAT_LAST_PEER_STORAGE_KEY, value);
    } else {
      localStorage.removeItem(CHAT_LAST_PEER_STORAGE_KEY);
    }
  } catch {}
}

function normalizeChannelIndex(value, fallback = 0) {
  const parsed = Number.parseInt(String(value ?? fallback), 10);
  return Number.isInteger(parsed) && parsed >= 0 && parsed <= 7 ? parsed : fallback;
}

function normalizeStoredChannelEntry(entry, usedIndexes = new Set()) {
  if (!entry || typeof entry !== "object") {
    return null;
  }
  const channelIndex = normalizeChannelIndex(entry.channelIndex, -1);
  if (channelIndex < 0 || usedIndexes.has(channelIndex)) {
    return null;
  }
  const id = String(entry.id || `ch-${channelIndex}`).trim() || `ch-${channelIndex}`;
  const name = String(entry.name || "").trim().slice(0, 32);
  if (!name) {
    return null;
  }
  usedIndexes.add(channelIndex);
  return { id, name, channelIndex };
}

function readStoredChatChannels() {
  try {
    const raw = localStorage.getItem(CHAT_CHANNELS_STORAGE_KEY);
    if (!raw) {
      return [...DEFAULT_CHAT_CHANNELS];
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [...DEFAULT_CHAT_CHANNELS];
    }
    const usedIndexes = new Set();
    const normalized = parsed
      .map((entry) => normalizeStoredChannelEntry(entry, usedIndexes))
      .filter(Boolean);
    if (!normalized.length) {
      return [...DEFAULT_CHAT_CHANNELS];
    }
    if (!normalized.some((item) => item.channelIndex === 0)) {
      return [...DEFAULT_CHAT_CHANNELS, ...normalized];
    }
    return normalized;
  } catch {
    return [...DEFAULT_CHAT_CHANNELS];
  }
}

function persistChatChannels(channels) {
  try {
    localStorage.setItem(CHAT_CHANNELS_STORAGE_KEY, JSON.stringify(channels));
  } catch {}
}

function readStoredChatChannel() {
  try {
    return String(localStorage.getItem(CHAT_LAST_CHANNEL_STORAGE_KEY) || "").trim();
  } catch {
    return "";
  }
}

function persistChatChannel(channelId) {
  try {
    const value = String(channelId || "").trim();
    if (value) {
      localStorage.setItem(CHAT_LAST_CHANNEL_STORAGE_KEY, value);
    } else {
      localStorage.removeItem(CHAT_LAST_CHANNEL_STORAGE_KEY);
    }
  } catch {}
}

function getSelectedChatChannel() {
  const preferredId = String(chatState.selectedChannel || "").trim();
  const preferred = chatState.channels.find((channel) => channel.id === preferredId);
  if (preferred) {
    return preferred;
  }
  return chatState.channels[0] || null;
}

function setChatChannelSelection(channelId, { persist = true } = {}) {
  const requested = String(channelId || "").trim();
  const hasRequested = chatState.channels.some((channel) => channel.id === requested);
  const resolved = hasRequested ? requested : (chatState.channels[0]?.id || "");
  chatState.selectedChannel = resolved;
  if (chatChannelSelect) {
    chatChannelSelect.value = resolved;
  }
  if (persist) {
    persistChatChannel(resolved);
  }
}

function formatChatChannelLabel(channel) {
  if (!channel) {
    return "Select channel";
  }
  return `${channel.name} (ch${channel.channelIndex})`;
}

function ensureSelectedChatChannel() {
  const storedId = readStoredChatChannel();
  const preferredId = chatState.selectedChannel || storedId || chatState.channels[0]?.id || "";
  setChatChannelSelection(preferredId, { persist: true });
}

function syncWalletRecipientFromChatPeer(peerId) {
  const value = String(peerId || "").trim();
  if (!value || !walletRecipientInput) {
    return;
  }
  const hasOption = Array.from(walletRecipientInput.options).some((option) => option.value === value);
  if (hasOption) {
    walletRecipientInput.value = value;
  }
}

function setChatPeerSelection(peerId, { syncWallet = true, persist = true } = {}) {
  const requested = String(peerId || "").trim();
  if (chatPeerSelect) {
    const hasOption = Array.from(chatPeerSelect.options).some((option) => option.value === requested);
    chatPeerSelect.value = hasOption ? requested : "";
    chatState.selectedPeer = requested;
  } else {
    chatState.selectedPeer = requested;
  }
  if (persist) {
    persistChatPeer(chatState.selectedPeer);
  }
  if (syncWallet && chatState.selectedPeer) {
    syncWalletRecipientFromChatPeer(chatState.selectedPeer);
  }
  if (chatPeerCashuButton) {
    chatPeerCashuButton.disabled = !chatState.selectedPeer;
  }
  if (chatPeerLocateButton) {
    chatPeerLocateButton.disabled = !chatState.selectedPeer;
  }
  if (chatPeerInfoButton) {
    chatPeerInfoButton.disabled = !chatState.selectedPeer;
  }
  updateChatRoomJoinUi();
}

function getNodeAddress(node) {
  return String(node?.userId || node?.id || "").trim();
}

function getNodeDisplayLabel(node) {
  const address = getNodeAddress(node);
  const prefix = address.slice(0, 8);
  const name = String(node?.longName || node?.shortName || "").trim();
  if (!name) {
    return prefix || "unknown";
  }
  return prefix ? `${name} [${prefix}]` : name;
}

function isFavoriteNode(node) {
  return Boolean(node?.favorite);
}

function compareNodesForUi(a, b, { unreadFirst = false } = {}) {
  const aFavorite = isFavoriteNode(a) ? 1 : 0;
  const bFavorite = isFavoriteNode(b) ? 1 : 0;
  if (aFavorite !== bFavorite) return bFavorite - aFavorite;

  if (unreadFirst) {
    const aUnread = unreadPeers.has(getNodeAddress(a)) ? 1 : 0;
    const bUnread = unreadPeers.has(getNodeAddress(b)) ? 1 : 0;
    if (aUnread !== bUnread) return bUnread - aUnread;
  }

  const aOnline = a?.online ? 1 : 0;
  const bOnline = b?.online ? 1 : 0;
  if (aOnline !== bOnline) return bOnline - aOnline;

  return getNodeDisplayLabel(a).localeCompare(getNodeDisplayLabel(b));
}

function sortNodesForUi(nodes, options = {}) {
  return (Array.isArray(nodes) ? nodes.slice() : []).sort((a, b) => compareNodesForUi(a, b, options));
}

function getNodeSlashLabel(node) {
  const addr = getNodeAddress(node);
  const short = node?.shortName || "";
  const long = node?.longName || "";
  return [short, long, addr].filter(Boolean).join(" / ");
}

function getSelectableNodes({ includeRepeaters = false } = {}) {
  const map = new Map();
  latestNodes.forEach((node) => {
    const address = getNodeAddress(node);
    if (!address || map.has(address)) return;
    if (!includeRepeaters && String(node.contactType || "") === "repeater") return; // repeaters take admin CLI, not DMs
    map.set(address, node);
  });
  return sortNodesForUi(Array.from(map.values()));
}

function peerHasDmHistory(peerId) {
  return latestMessages.some((message) => isPeerDmMessage(message, peerId));
}

function passesChatPeerFilters(node) {
  const peerId = getNodeAddress(node);
  if (!peerId) {
    return false;
  }
  if (chatState.peerFilters.unread && !unreadPeers.has(peerId)) {
    return false;
  }
  if (chatState.peerFilters.active && !peerHasDmHistory(peerId)) {
    return false;
  }
  if (chatState.peerFilters.online && !node.online) {
    return false;
  }
  return true;
}

function renderChatPeerFilters() {
  chatPeerFilterButtons.forEach((button) => {
    const filterName = button.dataset.chatPeerFilter;
    const enabled = Boolean(chatState.peerFilters[filterName]);
    button.classList.toggle("is-active", enabled);
    button.setAttribute("aria-pressed", enabled ? "true" : "false");
  });
}

function populateNodeSelect(selectEl, preferredValue = "") {
  if (!selectEl) {
    return;
  }
  const selectedBefore = preferredValue || selectEl.value || "";
  const nodes = getSelectableNodes();
  const favorites = nodes.filter((n) => isFavoriteNode(n));
  const favoriteIds = new Set(favorites.map(getNodeAddress));
  const online = nodes.filter((n) => n.online && !favoriteIds.has(getNodeAddress(n)));
  const offline = nodes.filter((n) => !n.online && !favoriteIds.has(getNodeAddress(n)));
  selectEl.innerHTML = '<option value="">Select node</option>';
  if (favorites.length) {
    const group = document.createElement("optgroup");
    group.label = "Favorites";
    favorites.forEach((node) => {
      const option = document.createElement("option");
      option.value = getNodeAddress(node);
      option.textContent = getNodeDisplayLabel(node);
      group.appendChild(option);
    });
    selectEl.appendChild(group);
  }
  if (online.length) {
    const group = document.createElement("optgroup");
    group.label = "Online";
    online.forEach((node) => {
      const option = document.createElement("option");
      option.value = getNodeAddress(node);
      option.textContent = getNodeDisplayLabel(node);
      group.appendChild(option);
    });
    selectEl.appendChild(group);
  }
  if (offline.length) {
    const group = document.createElement("optgroup");
    group.label = "Offline";
    offline.forEach((node) => {
      const option = document.createElement("option");
      option.value = getNodeAddress(node);
      option.textContent = getNodeDisplayLabel(node);
      group.appendChild(option);
    });
    selectEl.appendChild(group);
  }
  const hasSelected = Array.from(selectEl.options).some((option) => option.value === selectedBefore);
  selectEl.value = hasSelected ? selectedBefore : "";
}

function syncNodeSelectors() {
  populateNodeSelect(walletRecipientInput, walletRecipientInput?.value || "");
  populateNodeSelect(swapCashuSendRecipient, swapCashuSendRecipient?.value || "");
  const preferredChatPeer = chatState.selectedPeer || readStoredChatPeer();
  populateNodeSelect(chatPeerSelect, preferredChatPeer || chatPeerSelect?.value || "");
  if (chatPeerSelect && preferredChatPeer) {
    setChatPeerSelection(preferredChatPeer, { syncWallet: true, persist: true });
  } else if (chatPeerSelect) {
    setChatPeerSelection(chatPeerSelect.value, { syncWallet: true, persist: true });
  }
  populateChatChannelSelect();
  ensureSelectedChatChannel();
  renderChatPeerList();
  renderChatChannelList();
}

function setFavoriteButtonState(button, favorite) {
  if (!button) return;
  button.classList.toggle("is-favorite", Boolean(favorite));
  button.setAttribute("aria-pressed", favorite ? "true" : "false");
  button.title = favorite ? "Remove from favorites" : "Add to favorites";
  button.setAttribute("aria-label", favorite ? "Remove node from favorites" : "Add node to favorites");
}

function updateFavoriteNodeLocal(nodeId, favorite) {
  const id = String(nodeId || "").trim();
  latestNodes = latestNodes.map((node) => (
    getNodeAddress(node) === id ? { ...node, favorite: Boolean(favorite) } : node
  ));
  latestNodes = sortNodesForUi(latestNodes);
  syncNodeSelectors();
  syncWalletClientNodeSelect();
}

async function toggleNodeFavorite(nodeId, favorite) {
  const id = String(nodeId || "").trim();
  if (!id) return;
  const data = await fetchJson("/api/node-favorite", {
    method: "POST",
    body: JSON.stringify({ nodeId: id, favorite }),
  });
  updateFavoriteNodeLocal(id, Boolean(data.favorite));
}

function renderChatPeerList() {
  const listEl = document.getElementById("chatPeerList");
  if (!listEl) return;
  // Repeaters are listed (greyed) so the picker visibly covers every contact,
  // but they route to the admin console — MeshCore repeaters take no DMs.
  const nodes = getSelectableNodes({ includeRepeaters: true });
  if (!nodes.length) {
    listEl.innerHTML = '<div class="chat-peer-empty">No nodes found</div>';
    return;
  }
  const filteredNodes = nodes.filter(passesChatPeerFilters);
  if (!filteredNodes.length) {
    const activeFilters = Object.entries(chatState.peerFilters)
      .filter(([, enabled]) => enabled)
      .map(([name]) => name.toUpperCase())
      .join(" + ");
    listEl.innerHTML = `<div class="chat-peer-empty">No nodes match filters${activeFilters ? ` (${activeFilters})` : ""}</div>`;
    const activeNode = nodes.find((node) => getNodeAddress(node) === chatState.selectedPeer);
    if (chatPeerLabel) {
      chatPeerLabel.textContent = activeNode ? getNodeSlashLabel(activeNode) : "Select node";
    }
    return;
  }
  const sorted = sortNodesForUi(filteredNodes, { unreadFirst: true });
  listEl.innerHTML = "";
  sorted.forEach((node) => {
    const addr = getNodeAddress(node);
    const label = getNodeDisplayLabel(node);
    const isRepeater = String(node.contactType || "") === "repeater";
    const isActive = addr === chatState.selectedPeer;
    const hasUnread = unreadPeers.has(addr);
    const isFavorite = isFavoriteNode(node);
    const item = document.createElement("div");
    item.className = "chat-peer-item" + (isActive ? " is-active" : "") + (isFavorite ? " is-favorite" : "") + (isRepeater ? " chat-peer-item--repeater" : "");
    item.dataset.peer = addr;
    const typeChip = isRoomNode(node)
      ? `<span class="node-type-chip node-type-chip--room">ROOM</span>`
      : isRepeater
        ? `<span class="node-type-chip node-type-chip--repeater">RPT·ADM</span>`
        : "";
    item.innerHTML = `<span class="chat-peer-item-text">${typeChip}<span class="chat-peer-item-name">${label}</span></span>` +
      (isFavorite ? `<span class="node-favorite-indicator" title="Favorite"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 3z"/></svg></span>` : "") +
      (hasUnread ? `<span class="chat-peer-unread" title="Unread messages"><svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="13" height="10" rx="1" stroke="currentColor"/><path d="M1 1l6 5 6-5" stroke="currentColor" stroke-linecap="round"/></svg></span>` : "");
    if (isRepeater) {
      item.title = "Repeater — no direct messages; opens admin console";
      item.addEventListener("click", () => {
        listEl.hidden = true;
        openAdminConsole(addr);
      });
    } else {
      item.addEventListener("click", () => {
        unreadPeers.delete(addr);
        updateDmTabUnreadGlow();
        setChatPeerSelection(addr, { syncWallet: true, persist: true });
        listEl.hidden = true;
        renderChatPeerList();
        if (chatState.mode === CHAT_MODE_DM) {
          refreshActiveDmChat();
        }
      });
    }
    listEl.appendChild(item);
  });
  // Update trigger label
  const activeNode = nodes.find((node) => getNodeAddress(node) === chatState.selectedPeer);
  if (chatPeerLabel) {
    chatPeerLabel.textContent = activeNode ? getNodeSlashLabel(activeNode) : "Select node";
  }
  updateChatPeerTriggerUnread();
}

function updateDmTabUnreadGlow() {
  if (!chatModeDmButton) return;
  const hasAny = unreadPeers.size > 0 && chatState.mode !== CHAT_MODE_DM;
  chatModeDmButton.classList.toggle("has-unread", hasAny);
  updateChatPeerTriggerUnread();
}

function updateChatPeerTriggerUnread() {
  const indicator = document.getElementById("chatPeerTriggerUnread");
  if (!indicator) return;
  const peers = [...unreadPeers].filter((p) => p !== chatState.selectedPeer);
  indicator.hidden = peers.length === 0;
}

function populateChatChannelSelect() {
  if (!chatChannelSelect) {
    return;
  }
  const selectedBefore = String(chatState.selectedChannel || chatChannelSelect.value || "").trim();
  chatChannelSelect.innerHTML = "";
  chatState.channels.forEach((channel) => {
    const option = document.createElement("option");
    option.value = channel.id;
    option.textContent = formatChatChannelLabel(channel);
    chatChannelSelect.appendChild(option);
  });
  const hasSelected = chatState.channels.some((channel) => channel.id === selectedBefore);
  chatChannelSelect.value = hasSelected ? selectedBefore : (chatState.channels[0]?.id || "");
}

function renderChatChannelList() {
  if (!chatChannelList) {
    return;
  }
  if (!chatState.channels.length) {
    chatChannelList.innerHTML = '<div class="chat-peer-empty">No channels configured</div>';
    if (chatChannelLabel) {
      chatChannelLabel.textContent = "Select channel";
    }
    return;
  }
  chatChannelList.innerHTML = "";
  chatState.channels.forEach((channel) => {
    const item = document.createElement("div");
    const isActive = channel.id === chatState.selectedChannel;
    item.className = "chat-peer-item" + (isActive ? " is-active" : "");
    item.dataset.channelId = channel.id;
    item.innerHTML = `<span class="chat-peer-item-name">${formatChatChannelLabel(channel)}</span>`;
    item.addEventListener("click", () => {
      setChatChannelSelection(channel.id, { persist: true });
      if (chatChannelList) {
        chatChannelList.hidden = true;
      }
      renderChatChannelList();
      if (chatState.mode === CHAT_MODE_CHANS) {
        renderChannelChat();
      }
    });
    chatChannelList.appendChild(item);
  });

  if (chatChannelLabel) {
    chatChannelLabel.textContent = formatChatChannelLabel(getSelectedChatChannel());
  }
}

// Mirror the radio's configured channel slots into the CHANS selector so a
// channel added in SETUP shows up here. The radio is the source of truth when
// connected; if it reports no configured channels we leave the current list.
function applyRadioChannelsToChat(radioChannels) {
  if (!Array.isArray(radioChannels)) {
    return;
  }
  const seen = new Set();
  const mapped = radioChannels
    .filter(channelIsConfigured)
    .map((ch) => {
      const channelIndex = normalizeChannelIndex(ch.index, -1);
      if (channelIndex < 0 || seen.has(channelIndex)) {
        return null;
      }
      seen.add(channelIndex);
      const name = String(ch.name || "").trim().slice(0, 32) || `Channel ${channelIndex}`;
      return { id: `ch-${channelIndex}`, name, channelIndex };
    })
    .filter(Boolean);
  if (!mapped.length) {
    return;
  }
  const previous = getSelectedChatChannel();
  chatState.channels = mapped;
  persistChatChannels(chatState.channels);
  const keep = previous && mapped.find((c) => c.channelIndex === previous.channelIndex);
  setChatChannelSelection(keep ? keep.id : (mapped[0]?.id || ""), { persist: true });
  populateChatChannelSelect();
  renderChatChannelList();
  if (chatState.mode === CHAT_MODE_CHANS) {
    renderChannelChat();
  }
  // Keep the AI-settings command-channel toggles in sync if that modal is open.
  if (aiSettingsModal && !aiSettingsModal.classList.contains("hidden")) {
    const hasToggles = aiSettingsCommandChannels?.querySelector("button[data-channel-index]");
    renderAiCommandChannels(hasToggles ? getAiCommandChannelSelection() : aiCommandChannelsLoaded);
  }
}

function renderChatEmpty(message) {
  chatReplyText.innerHTML = "";
  const empty = document.createElement("div");
  empty.className = "chat-empty";
  empty.textContent = message;
  chatReplyText.appendChild(empty);
}

function renderChatLoading(message = "Loading DM history...") {
  chatReplyText.innerHTML = "";
  const loading = document.createElement("div");
  loading.className = "chat-loading";
  loading.textContent = message;
  chatReplyText.appendChild(loading);
}

function formatChatTime(value) {
  if (!value) {
    return "";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return date.toLocaleTimeString();
}

function renderLocalChatHistory() {
  chatReplyText.innerHTML = "";
  chatState.localHistory.forEach(({ userText, replyText }) => {
    const userBubble = document.createElement("div");
    userBubble.className = "chat-bubble user";
    userBubble.textContent = userText;
    chatReplyText.appendChild(userBubble);

    const aiBubble = document.createElement("div");
    if (replyText === null) {
      aiBubble.className = "chat-bubble ai chat-bubble--loader";
      aiBubble.innerHTML = '<span class="llm-loader"><span></span><span></span><span></span></span>';
    } else {
      aiBubble.className = "chat-bubble ai";
      aiBubble.textContent = replyText;
    }
    chatReplyText.appendChild(aiBubble);
  });
  chatReplyText.scrollTop = chatReplyText.scrollHeight;
}

function renderLocalChat(userText, replyText) {
  const safeReply = replyText || "No reply";
  const last = chatState.localHistory[chatState.localHistory.length - 1];
  if (last && last.userText === userText && last.replyText === null) {
    last.replyText = safeReply;
  } else {
    chatState.localHistory.push({ userText, replyText: safeReply });
  }
  renderLocalChatHistory();
}

function renderPendingLocalChat(userText) {
  chatState.localHistory.push({ userText, replyText: null });
  renderLocalChatHistory();
}

async function clearActiveChat() {
  if (chatState.mode === CHAT_MODE_DM) {
    const peerId = String(chatState.selectedPeer || "").trim();
    if (!peerId) {
      renderChatEmpty("Select a node to start DM chat.");
      return;
    }
    await fetchJson("/api/messages/clear", {
      method: "POST",
      body: JSON.stringify({ scope: "peer", peerId }),
    });
    await loadMessages();
    return;
  }
  if (chatState.mode === CHAT_MODE_CHANS) {
    const channel = getSelectedChatChannel();
    if (!channel) {
      renderChatEmpty("Select a channel to clear.");
      return;
    }
    await fetchJson("/api/messages/clear", {
      method: "POST",
      body: JSON.stringify({ scope: "channel", channelIndex: channel.channelIndex }),
    });
    await loadMessages();
    return;
  }

  await fetchJson("/api/messages/clear", {
    method: "POST",
    body: JSON.stringify({ scope: "local" }),
  });
  chatState.localHistory = [];
  renderLocalChatFromState();
  await loadMessages();
}

function renderLocalChatFromState() {
  if (!chatState.localHistory.length) {
    renderChatEmpty("Write a prompt to test the offline model.");
    return;
  }
  renderLocalChatHistory();
}

function isPeerDmMessage(message, peerId) {
  if (!message || !peerId) {
    return false;
  }
  const direction = String(message.direction || "");
  if (direction !== "in" && direction !== "out") {
    return false;
  }
  const hasDirectFlag = Object.hasOwn(message, "isDirectMessage");
  const isDirectMessage = hasDirectFlag
    ? Boolean(message.isDirectMessage)
    : String(message.recipient || "") === "local-ai";
  const sender = String(message.sender || "");
  const recipient = String(message.recipient || "");
  if (direction === "in") {
    return isDirectMessage && sender === peerId;
  }
  return recipient === peerId && (sender === "local-ui" || sender === "local-wallet");
}

function isChannelThreadMessage(message, channelIndex) {
  if (!message) {
    return false;
  }
  const direction = String(message.direction || "");
  if (direction !== "in" && direction !== "out") {
    return false;
  }
  const msgChannelIndex = normalizeChannelIndex(message.channelIndex, -1);
  if (msgChannelIndex !== channelIndex) {
    return false;
  }
  if (direction === "in") {
    const hasDirectFlag = Object.hasOwn(message, "isDirectMessage");
    const isDirectMessage = hasDirectFlag
      ? Boolean(message.isDirectMessage)
      : String(message.recipient || "") !== "^all";
    return !isDirectMessage;
  }
  return String(message.recipient || "") === "^all";
}

function isIncomingDmMessage(message) {
  if (!message || String(message.direction || "") !== "in") {
    return false;
  }
  const sender = String(message.sender || "").trim();
  if (!sender || sender === "local-ui-user" || sender === "local-ai") {
    return false;
  }
  const hasDirectFlag = Object.hasOwn(message, "isDirectMessage");
  const isDirectMessage = hasDirectFlag
    ? Boolean(message.isDirectMessage)
    : String(message.recipient || "") === "local-ai";
  return isDirectMessage;
}

function normalizeIncomingCashuTokenInput(rawInput) {
  const text = String(rawInput || "").trim();
  if (!text) return "";

  const sanitize = (candidate) => String(candidate || "")
    .replace(/\s+/g, "")
    .replace(/^[`'"]+|[`'"]+$/g, "")
    .replace(/[),.;:!?]+$/g, "")
    .trim();

  const direct = /(?:\[\d+\s*sats?\]\s*)?(cashu[AB][^\s]+)/i.exec(text);
  if (direct?.[1]) return sanitize(direct[1]);

  const joinedFragments = text
    .split(/\r?\n+/)
    .map((line) => String(line || "").replace(/^\s*\[\d+\/\d+\]\s*/g, "").trim())
    .filter(Boolean)
    .join("");
  const fromFragments = /(?:\[\d+\s*sats?\]\s*)?(cashu[AB][^\s]+)/i.exec(joinedFragments);
  if (fromFragments?.[1]) return sanitize(fromFragments[1]);

  const compact = text.replace(/\s+/g, "");
  const fromCompact = /(cashu[AB][A-Za-z0-9_\-+=/]+)/i.exec(compact);
  if (fromCompact?.[1]) return sanitize(fromCompact[1]);

  return sanitize(text);
}

// Parse optional "[250 sats] cashuA..." wrapper, returns { token, sats } or null
function parseCashuMessage(text) {
  const t = (text || "").trim();
  const token = normalizeIncomingCashuTokenInput(t);
  if (!token || !/^cashu[AB]/i.test(token)) return null;
  const prefixed = /^\[(\d+)\s*sats?\]/i.exec(t);
  return { token, sats: prefixed ? Number(prefixed[1]) : null };
}

// Detect if a string is a Cashu token (with or without amount prefix)
function isCashuTokenText(text) {
  return parseCashuMessage(text) !== null;
}

// Parse [N/T] prefix from a message text. Returns { partNum, total, content } or null.
function parseMeshPart(text) {
  const m = /^\[(\d+)\/(\d+)\]\s*/.exec(text || "");
  if (!m) return null;
  return { partNum: Number(m[1]), total: Number(m[2]), content: text.slice(m[0].length) };
}

// Extract sats from the first fragment's content, e.g. "[250 sats] cashuA..." Р Р†РІР‚В РІР‚в„ў 250
function extractSatsFromFragment(content) {
  const m = /^\[(\d+)\s*sats?\]/i.exec((content || "").trim());
  return m ? Number(m[1]) : null;
}

// Group sequential [N/T] mesh fragments from the same sender into one virtual message.
// - All parts present + assembled is a Cashu token Р Р†РІР‚В РІР‚в„ў { isCashuToken: true, fragmentCount }
// - Starts at [1/T] but incomplete Р Р†РІР‚В РІР‚в„ў { isCashuFragment: true, receivedParts, totalParts, sats }
// - Orphaned fragments (no [1/T]) fall through as regular messages
function groupCashuFragments(thread) {
  const result = [];
  const consumed = new Set();

  for (let i = 0; i < thread.length; i++) {
    if (consumed.has(i)) continue;
    const msg = thread[i];
    const part = parseMeshPart(msg.text);
    const startsLikeCashu = part
      ? /^(\[\d+\s*sats?\]\s*)?cashu[AB]/i.test(String(part.content || "").trim())
      : false;

    if (part && part.partNum === 1 && part.total > 1 && startsLikeCashu) {
      // Collect by part number (supports out-of-order and duplicate packets).
      const partsByNum = new Map();
      partsByNum.set(1, part.content);
      const indices = [i];

      for (let j = i + 1; j < thread.length; j++) {
        if (consumed.has(j)) continue;
        const next = thread[j];
        if (next.sender !== msg.sender) continue;
        const np = parseMeshPart(next.text);
        if (!np) continue;
        if (np.total !== part.total) continue;
        if (np.partNum === 1) {
          const sameStartDuplicate = String(np.content || "") === String(part.content || "");
          if (!sameStartDuplicate) break;
          indices.push(j);
          continue;
        }
        if (np.partNum < 1 || np.partNum > part.total) continue;
        indices.push(j);
        if (!partsByNum.has(np.partNum)) {
          partsByNum.set(np.partNum, np.content);
          if (partsByNum.size === part.total) break;
        }
      }

      for (const idx of indices) consumed.add(idx);

      if (partsByNum.size === part.total) {
        const assembled = Array.from({ length: part.total }, (_, n) => partsByNum.get(n + 1) || "").join("");
        if (isCashuTokenText(assembled)) {
          result.push({ ...msg, text: assembled, isCashuToken: true, fragmentCount: part.total });
          continue;
        }
      }

      const sats = extractSatsFromFragment(part.content);
      result.push({ ...msg, isCashuFragment: true, receivedParts: partsByNum.size, totalParts: part.total, sats });
      continue;
    }

    // Single-message cashu token (short enough to fit in one packet)
    if (isCashuTokenText(msg.text)) {
      result.push({ ...msg, isCashuToken: true, fragmentCount: 1 });
      continue;
    }

    result.push(msg);
  }
  return result;
}

function renderDmChat() {
  const peerId = chatState.selectedPeer;
  if (!peerId) {
    renderChatEmpty("Select a node to start DM chat.");
    return;
  }
  if (chatState.dmLoadingPeer === peerId) {
    renderChatLoading();
    return;
  }
  const raw = latestMessages.filter((message) => isPeerDmMessage(message, peerId));
  if (!raw.length) {
    if (roomJoinNotices.has(peerId)) {
      chatReplyText.innerHTML = "";
      appendRoomJoinNotice(peerId);
      return;
    }
    renderChatEmpty("No DM history with this node yet.");
    return;
  }

  const thread = groupCashuFragments(raw);

  chatReplyText.innerHTML = "";
  thread.forEach((message) => {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${message.direction === "out" ? "user" : "node"}`;
    if (message.id != null) bubble.dataset.msgId = message.id;

    const meta = document.createElement("div");
    meta.className = "chat-bubble-meta";
    const author = message.direction === "out" ? "You" : (message.sender || "Node");
    const stamp = formatChatTime(message.createdAt);
    let metaText = stamp ? `${author} | ${stamp}` : author;
    if (message.direction === "out" && Number.isFinite(Number(message.rttMs))) {
      metaText += ` | ▸▸ ${Math.round(message.rttMs)}ms`;
    }
    meta.textContent = metaText;

    if (message.direction === "out") {
      const ackIcon = document.createElement("span");
      ackIcon.className = `chat-bubble-ack chat-bubble-ack--${message.ack || "pending"}`;
      ackIcon.title = message.ack === "delivered" ? "Delivered" : message.ack === "failed" ? "Not delivered" : message.ack === "sent" ? "Sent to mesh" : "Sending...";
      bubble.appendChild(ackIcon);
    }

    const body = document.createElement("div");
    body.className = "chat-bubble-body";

    if (message.isCashuFragment) {
      const { receivedParts, totalParts, sats } = message;
      const isOutgoingFragment = message.direction === "out";

      if (sats !== null) {
        const amountBadge = document.createElement("div");
        amountBadge.style.cssText = `font-size:1.1em;font-weight:bold;color:${isOutgoingFragment ? "#aaa" : "#7ecfaa"};margin-bottom:6px`;
        amountBadge.textContent = isOutgoingFragment ? `-${sats} sats` : `+${sats} sats`;
        body.appendChild(amountBadge);
      }

      const label = document.createElement("div");
      label.style.cssText = "font-size:0.75em;opacity:0.65;margin-bottom:7px";
      label.textContent = isOutgoingFragment
        ? `Sending... ${receivedParts} / ${totalParts} parts`
        : `Receiving Cashu token... ${receivedParts} / ${totalParts} parts`;
      body.appendChild(label);

      const BLOCK_COUNT = 20;
      const filledBlocks = Math.round((receivedParts / totalParts) * BLOCK_COUNT);
      const blockTrack = document.createElement("div");
      blockTrack.style.cssText = "display:flex;gap:2px;align-items:center;margin-top:2px";
      for (let b = 0; b < BLOCK_COUNT; b++) {
        const block = document.createElement("div");
        const filled = b < filledBlocks;
        block.style.cssText = [
          "width:7px",
          "height:13px",
          "flex-shrink:0",
          filled
            ? "background:#7ecfaa;box-shadow:inset 0 1px 0 rgba(255,255,255,0.35),inset 0 -1px 0 rgba(0,0,0,0.35),inset 1px 0 0 rgba(255,255,255,0.15),inset -1px 0 0 rgba(0,0,0,0.2)"
            : "background:rgba(255,255,255,0.08);box-shadow:inset 0 1px 0 rgba(255,255,255,0.06),inset 0 -1px 0 rgba(0,0,0,0.25)",
        ].join(";");
        blockTrack.appendChild(block);
      }
      body.appendChild(blockTrack);

    } else if (message.isCashuToken) {
      const parsed = parseCashuMessage(message.text.trim());
      const tokenRaw = parsed ? parsed.token : message.text.trim();
      const token = normalizeIncomingCashuTokenInput(tokenRaw);
      const sats = parsed ? parsed.sats : null;
      // Amount badge
      if (sats !== null) {
        const amountBadge = document.createElement("div");
        amountBadge.style.cssText = "font-size:1.1em;font-weight:bold;color:#7ecfaa;margin-bottom:6px";
        amountBadge.textContent = `+${sats} sats`;
        body.appendChild(amountBadge);
      }

      const tokenHint = document.createElement("div");
      tokenHint.style.cssText = "font-size:0.72em;opacity:0.5;margin-bottom:8px";
      tokenHint.textContent = `Cashu token${message.fragmentCount > 1 ? ` - ${message.fragmentCount} parts` : ""}`;
      body.appendChild(tokenHint);

      const redeemBtn = document.createElement("button");
      redeemBtn.className = "wallet-action-button";
      redeemBtn.style.cssText = "padding:7px 22px;font-size:0.88em;";
      const statusSpan = document.createElement("span");
      statusSpan.style.cssText = "display:block;font-size:0.8em;margin-top:6px;opacity:0.8";

      const alreadyRedeemed = redeemedCashuTokens.has(token);
      if (alreadyRedeemed) {
        redeemBtn.textContent = "Redeemed";
        redeemBtn.disabled = true;
        bubble.style.opacity = "0.45";
        bubble.style.pointerEvents = "none";
        bubble.style.filter = "grayscale(0.4)";
      } else {
        redeemBtn.textContent = "Redeem";
      }

      redeemBtn.addEventListener("click", async () => {
        if (!token) {
          statusSpan.textContent = "Token parse failed (empty token).";
          return;
        }
        redeemBtn.disabled = true;
        statusSpan.textContent = "Redeeming...";
        try {
          const data = await fetchJson("/api/cashu/receive", {
            method: "POST",
            body: JSON.stringify({ token }),
          });
          redeemedCashuTokens.add(token);
          statusSpan.textContent = data.unverified
            ? `+${data.amount} sats (offline, unverified; confirm when online)`
            : `+${data.amount} sats added to balance`;
          redeemBtn.textContent = "Redeemed";
          if (cashuState) { cashuState.balance = data.balance; applyCashuState(); }
          bubble.style.opacity = "0.45";
          bubble.style.pointerEvents = "none";
          bubble.style.filter = "grayscale(0.4)";
        } catch (e) {
          statusSpan.textContent = e.message || "Failed";
          redeemBtn.disabled = false;
        }
      });

      body.append(redeemBtn, statusSpan);
    } else {
      body.textContent = message.text || "";
    }

    bubble.append(meta, body);
    chatReplyText.appendChild(bubble);
  });
  appendRoomJoinNotice(peerId);
  chatReplyText.scrollTop = chatReplyText.scrollHeight;
}

function renderChannelChat() {
  const channel = getSelectedChatChannel();
  if (!channel) {
    renderChatEmpty("Create or select a channel first.");
    return;
  }
  const thread = latestMessages.filter((message) => isChannelThreadMessage(message, channel.channelIndex));
  if (!thread.length) {
    renderChatEmpty(`No channel messages in ${formatChatChannelLabel(channel)} yet.`);
    return;
  }
  chatReplyText.innerHTML = "";
  thread.forEach((message) => {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${message.direction === "out" ? "user" : "node"}`;
    if (message.id != null) bubble.dataset.msgId = message.id;

    const meta = document.createElement("div");
    meta.className = "chat-bubble-meta";
    const author = message.direction === "out" ? "You" : (message.sender || "Node");
    const stamp = formatChatTime(message.createdAt);
    let metaText = stamp ? `${author} | ch${channel.channelIndex} | ${stamp}` : `${author} | ch${channel.channelIndex}`;
    if (message.direction === "out" && Number.isFinite(Number(message.rttMs))) {
      metaText += ` | ▸▸ ${Math.round(message.rttMs)}ms`;
    }
    meta.textContent = metaText;

    if (message.direction === "out") {
      const ackIcon = document.createElement("span");
      ackIcon.className = `chat-bubble-ack chat-bubble-ack--${message.ack || "pending"}`;
      ackIcon.title = message.ack === "delivered" ? "Delivered" : message.ack === "failed" ? "Not delivered" : message.ack === "sent" ? "Sent to mesh" : "Sending...";
      bubble.appendChild(ackIcon);
    }

    const body = document.createElement("div");
    body.className = "chat-bubble-body";
    body.textContent = message.text || "";
    bubble.append(meta, body);
    chatReplyText.appendChild(bubble);
  });
  chatReplyText.scrollTop = chatReplyText.scrollHeight;
}

async function refreshActiveDmChat() {
  const peerId = String(chatState.selectedPeer || "").trim();
  if (!peerId) {
    renderDmChat();
    return;
  }
  chatState.dmLoadingPeer = peerId;
  renderDmChat();
  try {
    await loadMessages();
  } finally {
    if (chatState.dmLoadingPeer === peerId) {
      chatState.dmLoadingPeer = "";
    }
    if (chatState.mode === CHAT_MODE_DM && chatState.selectedPeer === peerId) {
      renderDmChat();
    }
  }
}

function setChatMode(mode, { focusInput = false } = {}) {
  chatState.mode = mode === CHAT_MODE_DM
    ? CHAT_MODE_DM
    : mode === CHAT_MODE_CHANS
      ? CHAT_MODE_CHANS
      : CHAT_MODE_AI;
  const isDm = chatState.mode === CHAT_MODE_DM;
  const isChans = chatState.mode === CHAT_MODE_CHANS;
  if (chatForm) {
    chatForm.classList.toggle("chat-form-dm", isDm || isChans);
  }

  if (chatModeAiButton) {
    const isActive = chatState.mode === CHAT_MODE_AI;
    chatModeAiButton.classList.toggle("is-active", isActive);
    chatModeAiButton.setAttribute("aria-selected", String(isActive));
  }
  if (chatModeDmButton) {
    chatModeDmButton.classList.toggle("is-active", isDm);
    chatModeDmButton.setAttribute("aria-selected", String(isDm));
  }
  if (chatModeChansButton) {
    chatModeChansButton.classList.toggle("is-active", isChans);
    chatModeChansButton.setAttribute("aria-selected", String(isChans));
  }
  if (chatPeerRow) {
    chatPeerRow.classList.toggle("hidden", !isDm);
  }
  if (chatChannelRow) {
    chatChannelRow.classList.toggle("hidden", !isChans);
  }
  if (chatPeerCashuButton) {
    chatPeerCashuButton.classList.toggle("hidden", !isDm);
  }
  if (chatSubtitle) {
    chatSubtitle.textContent = isDm
      ? "Direct messages with mesh nodes"
      : isChans
        ? "Group channels over mesh broadcast"
        : "Offline AI";
  }
  if (chatText) {
    chatText.placeholder = isDm
      ? CHAT_PLACEHOLDER_DM
      : isChans
        ? CHAT_PLACEHOLDER_CHANS
        : CHAT_PLACEHOLDER_AI;
  }
  syncChatCommandUi();

  if (isDm && !chatState.selectedPeer && chatPeerSelect) {
    const firstPeer = Array.from(chatPeerSelect.options).find((option) => option.value);
    if (firstPeer) {
      setChatPeerSelection(firstPeer.value, { syncWallet: true, persist: true });
    }
  }
  if (isChans) {
    ensureSelectedChatChannel();
    renderChatChannelList();
    // Pull the radio's current channel slots so the list reflects the device.
    if (latestMeshtasticConnected) {
      meshCommand("get_channels").catch(() => {});
    }
  }

  if (isDm) {
    renderDmChat();
  } else if (isChans) {
    renderChannelChat();
  } else {
    renderLocalChatFromState();
  }
  updateDmTabUnreadGlow();

  if (focusInput && chatText) {
    chatText.focus();
  }
}

function openDmForNode(peerId) {
  const value = String(peerId || "").trim();
  if (!value) {
    return;
  }
  setChatPeerSelection(value, { syncWallet: true, persist: true });
  setChatMode(CHAT_MODE_DM, { focusInput: true });
  refreshActiveDmChat();
}

function openCashuSendForNode(peerId) {
  const value = String(peerId || "").trim();
  if (!value) {
    return;
  }
  setChatPeerSelection(value, { syncWallet: true, persist: true });
  if (chatState.mode === CHAT_MODE_DM) {
    renderDmChat();
  }
  openWalletModal();
  setWalletView("send");
  if (walletRecipientInput) {
    walletRecipientInput.focus();
  }
}

function formatBytes(bytes) {
  const value = Number(bytes || 0);
  if (!Number.isFinite(value) || value <= 0) {
    return "unknown size";
  }
  if (value >= 1024 ** 3) {
    return `${(value / (1024 ** 3)).toFixed(2)} GB`;
  }
  return `${Math.round(value / (1024 ** 2))} MB`;
}

function createTag(label, extraClass = "") {
  const tag = document.createElement("span");
  tag.className = `model-tag ${extraClass}`.trim();
  tag.textContent = label;
  return tag;
}

function getModelCardAccent(model = {}) {
  const haystack = [model.family, model.name, model.filename]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (haystack.includes("deepseek")) return "#4a9eff";
  if (haystack.includes("mistral") || haystack.includes("ministral")) return "#ff9a3c";
  if (haystack.includes("qwen")) return "#39c78d";
  if (haystack.includes("smollm")) return "#b8ef4e";
  if (haystack.includes("tinyllama") || haystack.includes("llama")) return "#ff6b57";
  if (haystack.includes("stable code") || haystack.includes("stable-code")) return "#b18cff";
  return "#6a7a8a";
}

function applyModelCardAccent(card, model = {}) {
  if (!card) return;
  card.style.setProperty("--model-accent", getModelCardAccent(model));
}

function findModelCardById(list, modelId) {
  if (!list || !modelId) return null;
  return Array.from(list.querySelectorAll("[data-model-id]"))
    .find((card) => card.dataset.modelId === String(modelId)) || null;
}

function keepModelCardVisible(list, card) {
  if (!list || !card) return;
  const listTop = list.scrollTop;
  const listBottom = listTop + list.clientHeight;
  const cardTop = card.offsetTop;
  const cardBottom = cardTop + card.offsetHeight;
  if (cardTop < listTop) {
    list.scrollTop = cardTop;
  } else if (cardBottom > listBottom) {
    list.scrollTop = Math.max(0, cardBottom - list.clientHeight);
  }
}

async function selectModelFromManager(filename) {
  await fetchJson("/api/models/select", {
    method: "POST",
    body: JSON.stringify({ model: filename }),
  });
  await loadStatus();
}

async function installModelFromManager(modelId) {
  await fetchJson("/api/models/install", {
    method: "POST",
    body: JSON.stringify({ modelId }),
  });
}

async function deleteModelFromManager(filename) {
  await fetchJson("/api/models/delete", {
    method: "POST",
    body: JSON.stringify({ filename }),
  });
  await loadStatus();
}

function renderInstalledModels(models = [], operation = {}) {
  installedModelsList.innerHTML = "";
  if (!models.length) {
    installedModelsList.innerHTML = '<div class="model-empty">No installed models</div>';
    return;
  }

  models.forEach((model) => {
    const card = document.createElement("article");
    card.className = "model-card";
    card.dataset.modelId = model.filename || model.id || "";
    applyModelCardAccent(card, model);

    const head = document.createElement("div");
    head.className = "model-card-head";

    const titleWrap = document.createElement("div");
    const title = document.createElement("div");
    title.className = "model-card-title";
    title.textContent = model.name || model.filename;
    const meta = document.createElement("div");
    meta.className = "model-card-meta";
    meta.textContent = `${model.filename} | ${formatBytes(model.sizeBytes)} | ${model.family}`;
    titleWrap.appendChild(title);
    titleWrap.appendChild(meta);

    const tags = document.createElement("div");
    tags.className = "model-card-tags";
    if (model.current) {
      tags.appendChild(createTag("Current", "current"));
    }
    tags.appendChild(createTag("Installed"));
    head.appendChild(titleWrap);
    head.appendChild(tags);
    card.appendChild(head);

    if (model.notes) {
      const notes = document.createElement("div");
      notes.className = "model-card-meta";
      notes.textContent = model.notes;
      card.appendChild(notes);
    }

    const actions = document.createElement("div");
    actions.className = "model-actions";
    const busy = Boolean(operation.active);

    if (!model.current) {
      const selectButton = document.createElement("button");
      selectButton.type = "button";
      selectButton.textContent = "Select";
      selectButton.disabled = busy;
      selectButton.addEventListener("click", async () => {
        try {
          await selectModelFromManager(model.filename);
          await loadModelManager();
        } catch (error) {
          modelManagerStatusText.textContent = `Select failed: ${error.message}`;
        }
      });
      actions.appendChild(selectButton);
    }

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.disabled = busy;
    deleteButton.addEventListener("click", async () => {
      try {
        await deleteModelFromManager(model.filename);
        await loadModelManager();
      } catch (error) {
        modelManagerStatusText.textContent = `Delete failed: ${error.message}`;
      }
    });
    actions.appendChild(deleteButton);
    card.appendChild(actions);
    installedModelsList.appendChild(card);
  });
}

function renderCatalogModels(models = [], operation = {}) {
  catalogModelsList.innerHTML = "";
  const installable = models.filter((model) => !model.installed);
  if (!installable.length) {
    catalogModelsList.innerHTML = '<div class="model-empty">Everything from the catalog is already installed</div>';
    return;
  }

  installable.forEach((model) => {
    const card = document.createElement("article");
    card.className = "model-card model-card--catalog";
    card.dataset.modelId = model.filename || model.id || "";
    applyModelCardAccent(card, model);

    const head = document.createElement("div");
    head.className = "model-card-head";

    const titleWrap = document.createElement("div");
    const title = document.createElement("div");
    title.className = "model-card-title";
    title.textContent = model.name;
    const meta = document.createElement("div");
    meta.className = "model-card-meta";
    const metaParts = [model.filename, formatBytes(model.sizeBytes), model.family];
    if (model.notes) metaParts.push(model.notes);
    meta.textContent = metaParts.join(" | ");
    titleWrap.appendChild(title);
    titleWrap.appendChild(meta);

    const tags = document.createElement("div");
    tags.className = "model-card-tags";
    head.appendChild(titleWrap);
    head.appendChild(tags);
    card.appendChild(head);

    const actions = document.createElement("div");
    actions.className = "model-actions";
    const installButton = document.createElement("button");
    installButton.type = "button";
    installButton.textContent = "Install";
    if (operation.active) installButton.style.display = "none";
    installButton.addEventListener("click", async () => {
      try {
        await installModelFromManager(model.id);
      } catch (error) {
        modelManagerStatusText.textContent = `Install failed: ${error.message}`;
      }
    });
    actions.appendChild(installButton);
    card.appendChild(actions);
    catalogModelsList.appendChild(card);
  });
}

function renderModelManager(payload) {
  latestModelManagerPayload = payload;
  const operation = payload?.operation || {};
  const activeId = operation.modelName || operation.modelId || "";
  if (String(latestLlmStatus.mode || "").startsWith("remote")) {
    // Model lifecycle lives on the remote host; local install/switch/delete 409.
    modelManagerStatusText.textContent = `Remote inference - model managed on host (${latestLlmStatus.currentModel || latestLlmStatus.model || "n/a"})`;
    renderInstalledModels(payload?.installed || [], operation);
    renderCatalogModels(payload?.available || [], operation);
    return;
  }
  if (operation.active) {
    modelManagerStatusText.textContent = `${operation.action === "install" ? "Installing" : "Deleting"} ${operation.modelName || operation.modelId || "model"}...`;
  } else if (operation.error) {
    modelManagerStatusText.textContent = operation.error;
  } else {
    modelManagerStatusText.textContent = `Current model: ${payload?.currentModel || "n/a"}`;
  }

  const installedScroll = installedModelsList.scrollTop;
  const catalogScroll = catalogModelsList.scrollTop;
  renderInstalledModels(payload?.installed || [], operation);
  renderCatalogModels(payload?.available || [], operation);
  modelManagerOperationActive = Boolean(operation.active);
  installedModelsList.scrollTop = installedScroll;
  catalogModelsList.scrollTop = catalogScroll;

  if (operation.active && activeId) {
    requestAnimationFrame(() => {
      keepModelCardVisible(installedModelsList, findModelCardById(installedModelsList, activeId));
      keepModelCardVisible(catalogModelsList, findModelCardById(catalogModelsList, activeId));
    });
  }
}

async function loadModelManager() {
  const payload = await fetchJson("/api/models/manager");
  renderModelManager(payload);
}

function openModelManager() {
  modelManagerModal.classList.remove("hidden");
  modelManagerModal.setAttribute("aria-hidden", "false");
  if (latestModelManagerPayload) {
    renderModelManager(latestModelManagerPayload);
  }
  loadModelManager().catch((error) => {
    modelManagerStatusText.textContent = `Manager error: ${error.message}`;
  });
}

function closeModelManager() {
  modelManagerModal.classList.add("hidden");
  modelManagerModal.setAttribute("aria-hidden", "true");
}

function toggleAiInstructionsInput() {
  aiSettingsInstructions.disabled = aiSettingsEnableInstructions.getAttribute("aria-pressed") !== "true";
}

function setAiSettingsToggle(button, enabled) {
  button.textContent = enabled ? "on" : "off";
  button.setAttribute("aria-pressed", enabled ? "true" : "false");
  button.classList.toggle("ai-reply-btn--on", enabled);
}

// Render an ON/OFF toggle per configured radio channel for command-listening,
// matching the PROMPT/TELEMETRY toggle style.
function renderAiCommandChannels(selected) {
  if (!aiSettingsCommandChannels) {
    return;
  }
  const selectedSet = new Set((selected || []).map((n) => Number(n)).filter((n) => Number.isInteger(n)));
  const channels = (chatState.channels || []).filter((c) => Number.isInteger(c.channelIndex));
  aiSettingsCommandChannels.innerHTML = "";
  if (!channels.length) {
    const empty = document.createElement("div");
    empty.className = "device-status-text";
    empty.textContent = latestMeshtasticConnected
      ? "No channels configured. Add them in SETUP → Channels."
      : "Connect the radio to list channels.";
    aiSettingsCommandChannels.appendChild(empty);
    return;
  }
  channels.forEach((ch) => {
    const row = document.createElement("div");
    row.className = "ai-reply-row ai-reply-row--settings ai-settings-channel-toggle";
    const span = document.createElement("span");
    span.className = "ai-reply-label";
    span.textContent = `CH${ch.channelIndex} ${ch.name || ""}`.trim();
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "ai-reply-btn";
    btn.dataset.channelIndex = String(ch.channelIndex);
    setAiSettingsToggle(btn, selectedSet.has(ch.channelIndex));
    btn.addEventListener("click", () => {
      const next = btn.getAttribute("aria-pressed") !== "true";
      setAiSettingsToggle(btn, next);
    });
    row.append(span, btn);
    aiSettingsCommandChannels.appendChild(row);
  });
}

function getAiCommandChannelSelection() {
  if (!aiSettingsCommandChannels) {
    return [];
  }
  return Array.from(aiSettingsCommandChannels.querySelectorAll("button[data-channel-index]"))
    .filter((btn) => btn.getAttribute("aria-pressed") === "true")
    .map((btn) => Number(btn.dataset.channelIndex))
    .filter((n) => Number.isInteger(n));
}

function renderAiSettings(payload) {
  latestAiSettingsPayload = payload;
  const settings = payload?.settings || {};
  aiSettingsCurrentModel.textContent = "Current model: " + (payload?.currentModel || currentSelectedModel || "n/a");
  setAiSettingsToggle(aiSettingsEnableInstructions, Boolean(settings.sendCustomInstructions));
  setAiSettingsToggle(aiSettingsUseTelemetry, settings.useTelemetry !== false);
  aiSettingsInstructions.value = settings.customInstructions || "";
  aiSettingsLocalTemperature.value = settings.localTemperature ?? 0.1;
  aiSettingsLocalTopP.value = settings.localTopP ?? 0.7;
  aiSettingsLocalMaxTokens.value = settings.localMaxTokens ?? 384;
  aiSettingsMeshTemperature.value = settings.meshTemperature ?? 0.1;
  aiSettingsMeshTopP.value = settings.meshTopP ?? 0.6;
  aiSettingsMeshMaxTokens.value = settings.meshMaxTokens ?? 120;
  aiCommandChannelsLoaded = Array.isArray(settings.commandChannels) ? settings.commandChannels : [];
  renderAiCommandChannels(aiCommandChannelsLoaded);
  toggleAiInstructionsInput();
}

async function loadAiSettings() {
  const payload = await fetchJson("/api/ai-settings");
  renderAiSettings(payload);
  return payload;
}

function openAiSettingsModal() {
  aiSettingsModal.classList.remove("hidden");
  aiSettingsModal.setAttribute("aria-hidden", "false");
  aiSettingsStatusText.textContent = "Loading AI settings...";
  // Refresh the radio's channel slots so the command-channel list is current.
  if (latestMeshtasticConnected) {
    meshCommand("get_channels").catch(() => {});
  }
  if (latestAiSettingsPayload) {
    renderAiSettings(latestAiSettingsPayload);
    aiSettingsStatusText.textContent = "Choose custom instructions, telemetry context, and generation controls.";
  }
  loadAiSettings().then(() => {
    aiSettingsStatusText.textContent = "Choose custom instructions, telemetry context, and generation controls.";
  }).catch((error) => {
    aiSettingsStatusText.textContent = `Settings error: ${error.message}`;
  });
}

function closeAiSettingsModal() {
  aiSettingsModal.classList.add("hidden");
  aiSettingsModal.setAttribute("aria-hidden", "true");
}

function collectAiSettingsForm() {
  return {
    sendCustomInstructions: aiSettingsEnableInstructions.getAttribute("aria-pressed") === "true",
    useTelemetry: aiSettingsUseTelemetry.getAttribute("aria-pressed") === "true",
    customInstructions: aiSettingsInstructions.value,
    localTemperature: Number(aiSettingsLocalTemperature.value),
    localTopP: Number(aiSettingsLocalTopP.value),
    localMaxTokens: Number(aiSettingsLocalMaxTokens.value),
    meshTemperature: Number(aiSettingsMeshTemperature.value),
    meshTopP: Number(aiSettingsMeshTopP.value),
    meshMaxTokens: Number(aiSettingsMeshMaxTokens.value),
    commandChannels: getAiCommandChannelSelection(),
  };
}

function renderHelpView() {
  helpDefaultView.classList.toggle("hidden", showingDonateView);
  helpDonateView.classList.toggle("hidden", !showingDonateView);
  helpModalTitle.textContent = showingDonateView ? HELP_MODAL_TITLE_DONATE : HELP_MODAL_TITLE_DEFAULT;
  helpModalSubtitle.classList.toggle("hidden", showingDonateView);
}

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const input = document.createElement("textarea");
  input.value = value;
  input.setAttribute("readonly", "true");
  input.style.position = "absolute";
  input.style.left = "-9999px";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

function openHelpModal() {
  showingDonateView = false;
  renderHelpView();
  helpModal.classList.remove("hidden");
  helpModal.setAttribute("aria-hidden", "false");
}

function closeHelpModal() {
  showingDonateView = false;
  renderHelpView();
  helpModal.classList.add("hidden");
  helpModal.setAttribute("aria-hidden", "true");
}

function applyMeshAiReply(enabled) {
  meshAiReplyToggle.textContent = enabled ? "on" : "off";
  meshAiReplyToggle.setAttribute("aria-pressed", String(enabled));
  meshAiReplyToggle.classList.toggle("ai-reply-btn--on", enabled);
}

async function loadMapNodeOnlineWindow() {
  if (!mapNodeOnlineWindow && !nodesPanelOnlineWindow) return;
  try {
    const data = await fetchJson("/api/device-meta");
    const value = data.nodeOnlineWindowMinutes != null ? String(data.nodeOnlineWindowMinutes) : "30";
    if (mapNodeOnlineWindow) {
      mapNodeOnlineWindow.value = value;
      mapNodeOnlineWindow.dataset.currentValue = value;
    }
    if (nodesPanelOnlineWindow) {
      nodesPanelOnlineWindow.value = value;
      nodesPanelOnlineWindow.dataset.currentValue = value;
    }
  } catch {
    if (mapNodeOnlineWindow) {
      mapNodeOnlineWindow.value = "30";
      mapNodeOnlineWindow.dataset.currentValue = "30";
    }
    if (nodesPanelOnlineWindow) {
      nodesPanelOnlineWindow.value = "30";
      nodesPanelOnlineWindow.dataset.currentValue = "30";
    }
  }
}

function describeSerialPortOption(port) {
  const device = String(port?.device || "").trim();
  const description = String(port?.description || port?.product || port?.manufacturer || "").trim();
  const sourceTag = port?.isDetected ? "detected" : (port?.isFallback ? "fallback" : "serial");
  const labelParts = [device];
  if (description) labelParts.push(description);
  labelParts.push(`[${sourceTag}]`);
  return labelParts.join(" - ");
}

function openWalletTestModeWarningModal() {
  if (!walletTestModeWarningModal) return;
  walletTestModeWarningModal.classList.remove("hidden");
  walletTestModeWarningModal.setAttribute("aria-hidden", "false");
  if (walletTestModeWarningCancel) walletTestModeWarningCancel.focus();
}

function closeWalletTestModeWarningModal() {
  if (!walletTestModeWarningModal) return;
  walletTestModeWarningModal.classList.add("hidden");
  walletTestModeWarningModal.setAttribute("aria-hidden", "true");
}

function cancelWalletTestModeWarning() {
  if (walletTestModeTogglePending) return;
  if (walletTestModeToggle) {
    walletTestModeToggle.checked = true;
  }
  closeWalletTestModeWarningModal();
}
function getFocusableElements(container) {
  return Array.from(container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter((element) => {
    return !element.disabled && element.offsetParent !== null;
  });
}

function applyTestMode() {
  const tm = walletState.testMode;
  if (walletTestModeBadge) walletTestModeBadge.hidden = !tm;
  if (walletFaucetCard) walletFaucetCard.hidden = !tm;
  if (walletTestModeToggle) walletTestModeToggle.checked = tm;

  // Show locked signet mint row in test mode, configurable row in prod mode
  const cashuMintTestRow = document.getElementById("cashuMintTestRow");
  const cashuMintProdRow = document.getElementById("cashuMintProdRow");
  const settingsMintTestRow = document.getElementById("settingsMintTestRow");
  const settingsMintProdRow = document.getElementById("settingsMintProdRow");
  if (cashuMintTestRow) cashuMintTestRow.hidden = !tm;
  if (cashuMintProdRow) cashuMintProdRow.hidden = tm;
  if (settingsMintTestRow) settingsMintTestRow.hidden = !tm;
  if (settingsMintProdRow) settingsMintProdRow.hidden = tm;

  // Update invoice input hints based on network
  if (swapCashuBtcAddr) {
    swapCashuBtcAddr.placeholder = tm ? "lntbs... (mutinynet/signet invoice)" : "lnbc... (mainnet invoice)";
  }
  if (cashuMeltInput) {
    cashuMeltInput.placeholder = tm ? "lntbs... (mutinynet/signet invoice)" : "lnbc... (mainnet invoice)";
  }
  const swapLnTestHint = document.getElementById("swapLnTestHint");
  const swapCashuTestHint = document.getElementById("swapCashuTestHint");
  if (swapLnTestHint) swapLnTestHint.hidden = !tm;
  if (swapCashuTestHint) swapCashuTestHint.hidden = !tm;

  // BTC Р Р†РІР‚В РІР‚в„ў Lightning via Boltz: not available on testnet/mutinynet
  const sendBtcLnTestNotice = document.getElementById("sendBtcLnTestNotice");
  const sendBtcLnProdBlock = document.getElementById("sendBtcLnProdBlock");
  if (sendBtcLnTestNotice) sendBtcLnTestNotice.hidden = !tm;
  if (sendBtcLnProdBlock) sendBtcLnProdBlock.hidden = tm;
}

function setWalletStatusRow() {
  walletState.meshtasticConnected = latestMeshtasticConnected;
  const engineOk = walletState.walletConfigured;
  const meshOk = walletState.meshtasticConnected;
  walletEngineStatus.textContent = engineOk ? "Ready" : "No wallet";
  walletEngineStatus.className = engineOk ? "status-ok" : "status-err";
  walletMeshtasticStatus.textContent = meshOk ? "Connected" : "Disconnected";
  walletMeshtasticStatus.className = meshOk ? "status-ok" : "status-err";
  applyTestMode();
}

function formatSats(sats) {
  if (sats === null || sats === undefined) return "-";
  const unit = walletState.settings.preferredUnit;
  if (unit === "BTC") {
    return `${(sats / 1e8).toFixed(8)} BTC`;
  }
  return `${sats.toLocaleString()} sats`;
}

function updateWalletBalanceDisplay() {
  if (!walletState.walletConfigured) {
    walletBalanceValue.textContent = "-";
    walletBalanceSub.textContent = "No wallet created";
    walletRefreshBalance.hidden = true;
    return;
  }
  if (!walletState.balance) {
    walletBalanceValue.textContent = "-";
    walletBalanceSub.textContent = "Balance unavailable (offline?)";
    walletRefreshBalance.hidden = false;
    return;
  }
  walletRefreshBalance.hidden = false;
  const b = walletState.balance;
  walletBalanceValue.textContent = formatSats(b.confirmed);
  const pendingText = b.unconfirmed !== 0 ? ` | ${b.unconfirmed >= 0 ? "+" : ""}${b.unconfirmed} pending` : "";
  walletBalanceSub.textContent = `confirmed${pendingText}`;
  if (swapBtcOnchainBalance) swapBtcOnchainBalance.textContent = formatSats(b.confirmed);
}

async function loadWalletBalance() {
  if (!walletState.walletConfigured) return;
  walletBalanceSub.textContent = "Refreshing...";
  try {
    const data = await fetchJson("/api/wallet/balance");
    walletState.balance = data;
    updateWalletBalanceDisplay();
  } catch {
    walletBalanceSub.textContent = "Balance fetch failed (offline?)";
  }
}

async function loadWalletTransactions() {
  if (!walletState.walletConfigured) return;
  try {
    const data = await fetchJson("/api/wallet/transactions");
    walletState.history = (data.transactions || []).map((tx) => ({
      id: tx.txid,
      direction: tx.direction,
      peer: tx.txid ? tx.txid.slice(0, 12) + "..." : "-",
      amount: tx.amount,
      unit: "sats",
      status: tx.confirmed ? "Confirmed" : "Pending",
      timestamp: tx.blockTime,
    }));
    renderWalletHistory();
    renderWalletHomeActivity();
  } catch {
    // offline Р Р†Р вЂљРІР‚Сњ keep existing history
  }
}

async function loadWalletQr() {
  if (!walletState.walletConfigured || walletState.qrLoaded) return;
  walletQrLoading.hidden = false;
  walletQrImage.hidden = true;
  try {
    const data = await fetchJson("/api/wallet/qr");
    walletQrImage.src = data.qr;
    walletQrImage.hidden = false;
    walletQrLoading.hidden = true;
    walletState.qrLoaded = true;
  } catch {
    walletQrLoading.textContent = "QR unavailable";
  }
}

function renderWalletSettingsInfo() {
  if (!walletState.walletConfigured || !walletInfoKv) return;
  walletInfoKv.innerHTML = "";
  const tm = walletState.testMode;
  const rows = [
    ["Type", "BIP84 HD Wallet (P2WPKH)"],
    ["Network", tm ? "Bitcoin Testnet (Mutinynet)" : "Bitcoin Mainnet"],
    ["Address", walletState.address ? walletState.address.slice(0, 20) + "..." : "-"],
    ["Path", tm ? "m/84'/1'/0'/0/0" : "m/84'/0'/0'/0/0"],
    ["Storage", tm ? "./data/test_wallet.json" : "./data/wallet.json"],
  ];
  rows.forEach(([k, v]) => {
    const row = document.createElement("div");
    row.className = "wallet-kv-row";
    row.innerHTML = `<span class="wallet-k">${k}</span><span class="wallet-v"></span>`;
    row.querySelector(".wallet-v").textContent = v;
    walletInfoKv.appendChild(row);
  });
}

function applyWalletConfiguredState({ showInfoBlock = true } = {}) {
  const configured = walletState.walletConfigured;
  // Home panel
  if (walletHomeNoWallet) walletHomeNoWallet.hidden = configured;
  if (walletHomeSummary) walletHomeSummary.hidden = !configured;
  // Settings panel
  if (walletCreateBlock) walletCreateBlock.classList.toggle("hidden", configured);
  if (showInfoBlock && walletInfoBlock) walletInfoBlock.classList.toggle("hidden", !configured);
  // Receive panel
  if (walletReceiveNoWallet) walletReceiveNoWallet.hidden = configured;
  if (walletReceiveContent) walletReceiveContent.hidden = !configured;
  // Address
  if (walletState.address) {
    if (walletReceiveId) walletReceiveId.value = walletState.address;
    if (walletReceivePreview) walletReceivePreview.textContent = walletState.address;
  }
  setWalletStatusRow();
  updateWalletBalanceDisplay();
  renderWalletSettingsInfo();
}

async function loadWalletState() {
  try {
    const data = await fetchJson("/api/wallet");
    walletState.walletConfigured = data.configured;
    walletState.address = data.address || null;
    walletState.mnemonic = data.mnemonic || null;
    walletState.testMode = Boolean(data.testMode);
    walletState.network = data.network || "mainnet";
    walletState.qrLoaded = false;
    applyWalletConfiguredState();
    applyTestMode();
    if (data.configured) loadWalletBalance();
  } catch { /* keep defaults */ }
  // Also load cashu state and swap list
  loadCashuState();
  fetchJson("/api/swap/list").then((data) => renderActiveSwaps(data || [])).catch(() => {});
}

// Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ Cashu UI Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ

function applyCashuPayloadData(data) {
  const payload = data?.wallet || data;
  if (!payload || typeof payload !== "object") return;
  if (Object.hasOwn(payload, "configured")) cashuState.configured = Boolean(payload.configured);
  if (Object.hasOwn(payload, "mintUrl")) cashuState.mintUrl = payload.mintUrl || null;
  if (Object.hasOwn(payload, "balance")) cashuState.balance = Number(payload.balance || 0);
  if (Object.hasOwn(payload, "generalBalance")) cashuState.generalBalance = Number(payload.generalBalance || 0);
  if (Object.hasOwn(payload, "offgridBalance")) cashuState.offgridBalance = Number(payload.offgridBalance || 0);
  if (Object.hasOwn(payload, "pendingBalance")) cashuState.pendingBalance = Number(payload.pendingBalance || 0);
  if (Object.hasOwn(payload, "pendingInvoices")) cashuState.pendingInvoices = Array.isArray(payload.pendingInvoices) ? payload.pendingInvoices : [];
  if (Object.hasOwn(payload, "inventory")) {
    const inventory = payload.inventory || {};
    cashuState.inventory = {
      confirmed: Array.isArray(inventory.confirmed) ? inventory.confirmed : [],
      general: Array.isArray(inventory.general) ? inventory.general : [],
      offgrid: Array.isArray(inventory.offgrid) ? inventory.offgrid : [],
      pending: Array.isArray(inventory.pending) ? inventory.pending : [],
      confirmedProofCount: Number(inventory.confirmedProofCount || payload.proofCount || 0),
      generalProofCount: Number(inventory.generalProofCount || 0),
      offgridProofCount: Number(inventory.offgridProofCount || 0),
      pendingProofCount: Number(inventory.pendingProofCount || 0),
    };
  }
}

function getCashuOffgridBuckets() {
  return Array.isArray(cashuState.inventory?.offgrid) ? cashuState.inventory.offgrid : [];
}

function getExpandedCashuOffgridAmounts() {
  const amounts = [];
  getCashuOffgridBuckets().forEach((bucket) => {
    const amount = Number(bucket.amount || 0);
    const count = Number(bucket.count || 0);
    for (let i = 0; i < count; i += 1) {
      if (amount > 0) amounts.push(amount);
    }
  });
  return amounts.sort((a, b) => a - b);
}

function buildCashuSendOptions() {
  const proofs = getExpandedCashuOffgridAmounts();
  const sums = new Map([[0, []]]);
  for (const proofAmount of proofs) {
    const snapshot = [...sums.entries()].sort((a, b) => a[0] - b[0]);
    snapshot.forEach(([sum, parts]) => {
      const nextSum = sum + proofAmount;
      if (!sums.has(nextSum)) {
        sums.set(nextSum, [...parts, proofAmount].sort((a, b) => a - b));
      }
    });
  }
  sums.delete(0);
  return [...sums.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([amount, parts]) => {
      const counts = new Map();
      parts.forEach((part) => counts.set(part, (counts.get(part) || 0) + 1));
      const entries = [...counts.entries()]
        .sort((a, b) => a[0] - b[0])
        .map(([partAmount, count]) => ({ amount: partAmount, count }));
      return { amount, parts, entries };
    });
}

function clampCashuSendOptionIndex() {
  const options = buildCashuSendOptions();
  cashuState.sendOptions = options;
  if (!options.length) {
    cashuState.sendOptionIndex = 0;
    return options;
  }
  const maxIndex = options.length - 1;
  cashuState.sendOptionIndex = Math.max(0, Math.min(Number(cashuState.sendOptionIndex || 0), maxIndex));
  return options;
}

function renderCashuSendSelection() {
  if (!walletAmountInput) return;
  const options = clampCashuSendOptionIndex();
  const current = options[cashuState.sendOptionIndex] || null;
  walletAmountInput.value = current ? String(current.amount) : "";
  if (walletSendSubmitButton) {
    walletSendSubmitButton.textContent = current
      ? `Send ${current.amount} sats off-grid`
      : "Send off-grid";
  }
  if (cashuSendInventoryEmpty) cashuSendInventoryEmpty.hidden = options.length > 0;
  if (cashuSendSliderWrap) cashuSendSliderWrap.hidden = options.length === 0;
  if (cashuSendSlider) {
    cashuSendSlider.disabled = options.length === 0;
    cashuSendSlider.min = "0";
    cashuSendSlider.max = String(Math.max(0, options.length - 1));
    cashuSendSlider.value = String(Math.max(0, cashuState.sendOptionIndex || 0));
  }
}

function renderCashuReadyInventory() {
  if (!cashuReadyInventoryList) return;
  const buckets = getCashuOffgridBuckets().slice().sort((a, b) => Number(a.amount || 0) - Number(b.amount || 0));
  const totalReady = buckets.reduce((sum, bucket) => sum + Number(bucket.count || 0), 0);
  if (cashuReadyInventorySummary) {
    cashuReadyInventorySummary.textContent = buckets.length ? `${totalReady} ready` : "0 ready";
  }
  if (cashuReadyInventoryDetails && !buckets.length) cashuReadyInventoryDetails.open = false;
  cashuReadyInventoryList.innerHTML = buckets.length ? "" : '<div class="wallet-hint">No ready off-grid amounts yet.</div>';
  buckets.forEach((bucket) => {
    const amount = Number(bucket.amount || 0);
    const count = Number(bucket.count || 0);
    const row = document.createElement("div");
    row.className = "cashu-coin-row";
    row.innerHTML = `
      <div class="cashu-coin-main">
        <span class="cashu-coin-amount">${formatSats(amount)}</span>
        <span class="cashu-coin-meta">ready ${count}</span>
      </div>
      <div class="cashu-coin-total">total ${formatSats(bucket.total || (amount * count))}</div>
      <div class="cashu-coin-actions">
        <button type="button" class="wallet-inline-action cashu-coin-icon-button" data-cashu-prepare-more="${amount}" title="Prepare more ${amount} sats" aria-label="Prepare more ${amount} sats">
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10M3 8h10"/></svg>
        </button>
        <button type="button" class="wallet-inline-action cashu-coin-icon-button" data-cashu-remove-one="${amount}" title="Remove one ${amount} sats from off-grid" aria-label="Remove one ${amount} sats from off-grid">
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10"/></svg>
        </button>
      </div>
    `;
    cashuReadyInventoryList.appendChild(row);
  });
}

function applyCashuState() {
  const cfg = cashuState.configured;
  const spendableLabel = `Spendable off-grid: ${formatSats(cashuState.offgridBalance)}`;
  // Send tab
  if (cashuSendNoMint) cashuSendNoMint.hidden = cfg;
  if (cashuSendContent) cashuSendContent.hidden = !cfg;
  // Home balances
  if (cashuBalanceValue) cashuBalanceValue.textContent = cfg ? formatSats(cashuState.balance) : "-";
  if (cashuBalanceSub) cashuBalanceSub.textContent = cfg ? spendableLabel : "No mint configured - go to Settings";
  if (cashuSendAvailable) cashuSendAvailable.textContent = formatSats(cashuState.offgridBalance);
  if (swapCashuAvailable) swapCashuAvailable.textContent = formatSats(cashuState.balance);
  if (swapChangeAvailable) swapChangeAvailable.textContent = formatSats(cashuState.generalBalance);
  // Pending (offline) balance row
  if (cashuPendingRow) {
    const hasPending = cashuState.pendingBalance > 0;
    cashuPendingRow.hidden = !hasPending;
    if (hasPending && cashuPendingValue) cashuPendingValue.textContent = cashuState.pendingBalance;
  }
  if (walletRefreshBalance) walletRefreshBalance.hidden = false;
  // Mint input sync
  if (cashuMintUrlInput && cashuState.mintUrl && !cashuMintUrlInput.value) {
    cashuMintUrlInput.value = cashuState.mintUrl;
  }
  if (settingsMintUrlInput && cashuState.mintUrl && !settingsMintUrlInput.value) {
    settingsMintUrlInput.value = cashuState.mintUrl;
  }
  renderCashuPending();
  renderCashuSendSelection();
  renderCashuReadyInventory();
}

function renderCashuPending() {
  if (!cashuPendingList) return;
  const pending = cashuState.pendingInvoices || [];
  if (!pending.length) {
    cashuPendingList.innerHTML = '<div class="wallet-hint">No pending invoices</div>';
    return;
  }
  cashuPendingList.innerHTML = "";
  pending.forEach((inv) => {
    const row = document.createElement("div");
    row.className = "cashu-pending-row";
    row.innerHTML = `<span class="cashu-pending-amount">${inv.amount} sats</span><span class="cashu-pending-time">${new Date(inv.createdAt).toLocaleTimeString()}</span><button type="button" class="wallet-inline-action cashu-check-btn" data-hash="${inv.hash}">Check</button>`;
    cashuPendingList.appendChild(row);
  });
}

async function loadCashuState() {
  try {
    const data = await fetchJson("/api/cashu");
    applyCashuPayloadData(data);
    // Merge blockchain history with cashu history
    if (data.history && data.history.length) {
      const existing = new Set(walletState.history.map((h) => h.id));
      data.history.forEach((tx) => {
        const id = `cashu-${tx.timestamp}-${tx.amount}`;
        if (!existing.has(id)) {
          walletState.history.push({ ...tx, id, unit: "sats" });
          existing.add(id);
        }
      });
      walletState.history.sort((a, b) => String(b.timestamp).localeCompare(String(a.timestamp)));
      renderWalletHistory();
    }
    applyCashuState();
    if (cashuState.pendingBalance > 0) startSwapPendingPoller();
  } catch { /* offline */ }
}

// Swap pending offline proofs at the mint and update UI
async function trySwapPending() {
  if (!cashuState.pendingBalance) return;
  try {
    const data = await fetchJson("/api/cashu/swap-pending", { method: "POST" });
    await loadCashuState();
    if (data.swapped > 0) {
      walletState.history.unshift({ id: `cashu-confirm-${Date.now()}`, direction: "Confirmed", peer: "Pending proofs", amount: data.swapped, unit: "sats", status: "Confirmed", timestamp: new Date().toLocaleString() });
      renderWalletHistory();
    }
  } catch (e) {
    const message = String(e?.message || e || "Pending proof confirmation failed.");
    if (cashuReceiveStatus) {
      cashuReceiveStatus.textContent = `Pending proof confirmation failed: ${message}`;
    }
    const lower = message.toLowerCase();
    if (
      lower.includes("no mint configured") ||
      lower.includes("token is invalid") ||
      lower.includes("mint returned no spendable proofs") ||
      lower.includes("empty token payload")
    ) {
      stopSwapPendingPoller();
    }
  }
}

// Auto-poll: try to confirm pending proofs every 30s when there are any
let _swapPendingInterval = null;
function startSwapPendingPoller() {
  if (_swapPendingInterval) return;
  _swapPendingInterval = setInterval(() => {
    if (cashuState.pendingBalance > 0) trySwapPending();
    else stopSwapPendingPoller();
  }, 30000);
}
function stopSwapPendingPoller() {
  if (_swapPendingInterval) { clearInterval(_swapPendingInterval); _swapPendingInterval = null; }
}

if (cashuSwapPendingBtn) {
  cashuSwapPendingBtn.addEventListener("click", async () => {
    cashuSwapPendingBtn.disabled = true;
    await trySwapPending();
    cashuSwapPendingBtn.disabled = false;
  });
}

if (cashuSendSlider) {
  cashuSendSlider.addEventListener("input", () => {
    cashuState.sendOptionIndex = Number(cashuSendSlider.value || 0);
    renderCashuSendSelection();
  });
}

if (cashuReadyInventoryList) {
  cashuReadyInventoryList.addEventListener("click", async (event) => {
    const prepareButton = event.target.closest("[data-cashu-prepare-more]");
    if (prepareButton) {
      if (cashuChangeAmount) {
        cashuChangeAmount.value = String(prepareButton.getAttribute("data-cashu-prepare-more") || "");
        cashuChangeAmount.focus();
      }
      return;
    }
    const removeButton = event.target.closest("[data-cashu-remove-one]");
    if (!removeButton) return;
    const amount = Number(removeButton.getAttribute("data-cashu-remove-one") || 0);
    removeButton.disabled = true;
    if (cashuChangeStatus) cashuChangeStatus.textContent = `Removing 1 x ${amount} sats from ready off-grid amounts...`;
    try {
      await fetchJson("/api/cashu/offgrid/remove", {
        method: "POST",
        body: JSON.stringify({ amount, count: 1 }),
      });
      await loadCashuState();
      if (cashuChangeStatus) cashuChangeStatus.textContent = `Removed 1 x ${amount} sats from ready off-grid amounts.`;
    } catch (e) {
      if (cashuChangeStatus) cashuChangeStatus.textContent = e.message;
    } finally {
      removeButton.disabled = false;
    }
  });
}

if (cashuChangeForm) {
  cashuChangeForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const amount = Number(cashuChangeAmount?.value || 0);
    const submitBtn = cashuChangeForm.querySelector("button[type=submit]");
    if (!amount || amount <= 0) {
      if (cashuChangeStatus) cashuChangeStatus.textContent = "Enter amount.";
      return;
    }
    if (cashuChangeStatus) cashuChangeStatus.textContent = "Preparing off-grid amount via mint...";
    if (submitBtn) submitBtn.disabled = true;
    try {
      const data = await fetchJson("/api/cashu/offgrid/prepare", {
        method: "POST",
        body: JSON.stringify({ amount }),
      });
      await loadCashuState();
      if (cashuChangeStatus) {
        cashuChangeStatus.textContent = `Prepared ${amount} sats for off-grid${data.fee ? `, fee ${data.fee} sats` : ""}`;
      }
      if (cashuChangeAmount) cashuChangeAmount.value = "";
    } catch (e) {
      if (cashuChangeStatus) cashuChangeStatus.textContent = e.message;
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

// Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ End Cashu UI Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ

function renderWalletHistory() {
  walletHistoryBody.innerHTML = "";
  updateWalletBalanceDisplay();
  const hasItems = walletState.history.length > 0;
  walletHistoryEmpty.classList.toggle("hidden", hasItems);
  if (!hasItems) {
    return;
  }

  walletState.history.forEach((item) => {
    const row = document.createElement("tr");
    row.className = String(item.direction).toLowerCase() === "received" ? "wallet-row-in" : "wallet-row-out";
    const cells = [item.direction, item.peer, formatSats(item.amount), item.status, item.timestamp];
    cells.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = String(value ?? "");
      row.appendChild(cell);
    });
    walletHistoryBody.appendChild(row);
  });
}

function renderWalletHomeActivity() {
  if (walletState.address) {
    walletReceivePreview.textContent = walletState.address;
  }
  if (!walletState.history.length) {
    walletHomeActivity.innerHTML = "<p>No transactions yet.</p>";
    return;
  }

  const item = walletState.history[0];
  walletHomeActivity.innerHTML = "";
  const summary = document.createElement("p");
  summary.textContent = `${item.direction} ${formatSats(item.amount)} ${item.status ? `| ${item.status}` : ""}`;
  const peer = document.createElement("p");
  peer.textContent = `TxID: ${item.peer} | ${item.timestamp}`;
  walletHomeActivity.append(summary, peer);
}

function setWalletView(viewName, options = {}) {
  if (!walletViewPanels[viewName]) {
    return;
  }
  walletState.activeView = viewName;

  walletViewButtons.forEach((button) => {
    const isActive = button.getAttribute("data-wallet-view") === viewName;
    if (button.classList.contains("wallet-quick-button")) {
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-current", isActive ? "page" : "false");
    }
    if (isActive && options.focusButton) {
      button.focus();
    }
  });

  Object.entries(walletViewPanels).forEach(([key, panel]) => {
    if (!panel) return;
    const isActive = key === viewName;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });

  renderWalletHomeActivity();
  if (viewName === "receive" && walletState.walletConfigured) {
    loadWalletQr();
  }
  if (viewName === "settings") {
    loadWalletClients();
  }
}



function queueMeshSend() {
  const recipient = walletRecipientInput.value.trim();
  const amount = walletAmountInput.value.trim();
  const unit = "sats";
  const transport = "MeshCore DM";
  const memo = walletMemoInput.value.trim();

  if (!recipient) {
    walletSendStatus.textContent = "Recipient required.";
    walletRecipientInput.focus();
    return;
  }
  if (!amount || Number(amount) <= 0) {
    walletSendStatus.textContent = "Amount required.";
    walletAmountInput.focus();
    return;
  }

  walletState.history.unshift({
    id: `mesh-${Date.now()}`,
    direction: "Sent",
    peer: recipient,
    amount: Number(amount),
    unit,
    status: "Queued",
    timestamp: new Date().toLocaleString(),
    memo,
    transport,
  });

  renderWalletHistory();
  renderWalletHomeActivity();
  walletSendStatus.textContent = "Payment queued for mesh delivery.";
  walletAmountInput.value = "";
  walletMemoInput.value = "";
}

function openWalletModal() {
  walletState.lastFocused = document.activeElement;
  walletModal.classList.remove("hidden");
  walletModal.setAttribute("aria-hidden", "false");
  setWalletView(walletState.activeView || "home");
  const focusTarget = walletQuickButtons[0] || walletModalClose;
  if (focusTarget) focusTarget.focus();
  loadWalletState();
}

function closeWalletModal() {
  walletModal.classList.add("hidden");
  walletModal.setAttribute("aria-hidden", "true");
  if (walletState.lastFocused && typeof walletState.lastFocused.focus === "function") {
    walletState.lastFocused.focus();
  }
}

function handleWalletModalFocusTrap(event) {
  if (event.key !== "Tab" || walletModal.classList.contains("hidden")) {
    return;
  }

  const focusables = getFocusableElements(walletModal);
  if (!focusables.length) {
    return;
  }

  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  const current = document.activeElement;

  if (event.shiftKey && current === first) {
    event.preventDefault();
    last.focus();
    return;
  }

  if (!event.shiftKey && current === last) {
    event.preventDefault();
    first.focus();
  }
}

function shortPubkey(node) {
  return getNodeAddress(node).slice(0, 8);
}

function formatAdvertAge(lastHeardEpochSecs) {
  const ts = Number(lastHeardEpochSecs);
  if (!Number.isFinite(ts) || ts <= 0) return "";
  const ageSecs = Math.max(0, Math.floor(Date.now() / 1000 - ts));
  if (ageSecs < 60) return "ADV <1m AGO";
  if (ageSecs < 3600) return `ADV ${Math.floor(ageSecs / 60)}m AGO`;
  if (ageSecs < 86400) return `ADV ${Math.floor(ageSecs / 3600)}h AGO`;
  return `ADV ${Math.floor(ageSecs / 86400)}d AGO`;
}

const CONTACT_TYPE_LABELS = {
  chat: "CHAT",
  repeater: "RPTR",
  room: "ROOM",
  sensor: "SENS",
};

// Room server sessions (admin_login to a room contact). Tracked client-side so
// the chat UI can offer JOIN and show the "joined" notice in the thread.
const roomSessions = new Set();
const roomJoinNotices = new Map();
let roomJoinPendingId = "";

function isRoomNode(node) {
  return String(node?.contactType || "").toLowerCase() === "room";
}

function isAdminTargetNode(node) {
  const type = String(node?.contactType || "").toLowerCase();
  return type === "repeater" || type === "room";
}

function contactTypeChipHtml(node) {
  const type = String(node?.contactType || "").toLowerCase();
  if (!CONTACT_TYPE_LABELS[type]) return "";
  return `<span class="node-type-chip node-type-chip--${type}">${CONTACT_TYPE_LABELS[type]}</span>`;
}

// Display name: contact name first, 8-hex pubkey prefix when the name is
// empty or duplicated across contacts.
function buildNodeNameMap(nodes) {
  const counts = new Map();
  for (const node of nodes) {
    const name = String(node?.longName || node?.shortName || "").trim();
    if (name) counts.set(name, (counts.get(name) || 0) + 1);
  }
  const labels = new Map();
  for (const node of nodes) {
    const address = getNodeAddress(node);
    const name = String(node?.longName || node?.shortName || "").trim();
    const prefix = shortPubkey(node) || address || "unknown";
    if (!name) {
      labels.set(address, prefix);
    } else if ((counts.get(name) || 0) > 1) {
      labels.set(address, `${name} [${prefix}]`);
    } else {
      labels.set(address, name);
    }
  }
  return labels;
}

function requestNodeTelemetry(nodeId, statusCallback) {
  return fetchJson("/api/mesh/command", {
    method: "POST",
    body: JSON.stringify({ type: "request_telemetry", payload: { contactId: nodeId } }),
  }).then(() => {
    if (statusCallback) statusCallback("TLM requested...");
  }).catch((error) => {
    if (statusCallback) statusCallback(`TLM failed: ${error.message}`);
  });
}

function renderNodes(nodes = []) {
  const displayNodes = sortNodesForUi(nodes);
  const nameLabels = buildNodeNameMap(displayNodes);
  latestNodes = displayNodes;
  const onlineCount = latestNodes.filter((n) => n.online).length;
  const countEl = document.getElementById("nodesOnlineCount");
  if (countEl) countEl.innerHTML = onlineCount > 0
    ? `<span class="nodes-online-dot"></span>${onlineCount}`
    : "";
  syncNodeSelectors();
  syncWalletClientNodeSelect();
  nodesList.innerHTML = "";
  if (!displayNodes.length) {
    nodesList.innerHTML = '<div class="node-empty">No nodes yet</div>';
    if (chatState.mode === CHAT_MODE_DM) {
      renderDmChat();
    }
    return;
  }

  displayNodes.forEach((node) => {
    const item = document.createElement("article");
    item.className = `node-item ${node.online ? "online" : "offline"} ${node.role === "weather" ? "weather" : ""} ${node.live ? "live" : "snapshot"} ${isFavoriteNode(node) ? "favorite" : ""}`;
    const nodeAddress = getNodeAddress(node);

    const name = nameLabels.get(nodeAddress) || shortPubkey(node) || "unknown";
    const metaParts = [];
    if (nodeAddress) {
      metaParts.push(shortPubkey(node));
    }
    const advertAge = formatAdvertAge(node.lastHeard);
    if (advertAge) {
      metaParts.push(advertAge);
    }
    if (node.hopsAway != null) {
      metaParts.push(`PATH ${node.hopsAway} HOP${node.hopsAway === 1 ? "" : "S"}`);
    } else if (node.isFlood) {
      metaParts.push("FLOOD");
    }
    if (node.batteryLevel !== null && node.batteryLevel !== undefined) {
      metaParts.push(`${node.batteryLevel}%`);
    }

    item.innerHTML = `
      <span class="node-dot"></span>
      <div class="node-main">
        <div class="node-name"></div>
        <div class="node-meta"></div>
      </div>
      <div class="node-actions">
        <button type="button" class="node-action-btn node-action-favorite" title="Add to favorites" aria-label="Add node to favorites" aria-pressed="false">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 3z"></path>
          </svg>
        </button>
        <button type="button" class="node-action-btn node-action-tlm" title="Request telemetry" aria-label="Request telemetry from node">TLM</button>
        <button type="button" class="node-action-btn node-action-admin" title="Remote admin console" aria-label="Open remote admin console">ADM</button>
        <button type="button" class="node-action-btn node-action-message" title="Send message" aria-label="Send message to node">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M4 5h16v10H8l-4 4V5z"></path>
          </svg>
        </button>
        <button type="button" class="node-action-btn node-action-cashu" title="Send Cashu" aria-label="Send Cashu to node">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="12" cy="12" r="7"></circle>
            <path d="M12 8v8M9 10h6M9 14h6"></path>
          </svg>
        </button>
      </div>
    `;
    const nameEl = item.querySelector(".node-name");
    nameEl.innerHTML = contactTypeChipHtml(node);
    nameEl.appendChild(document.createTextNode(name));
    item.querySelector(".node-meta").textContent = metaParts.join(" | ") || (node.online ? "online" : "offline");

    const favoriteButton = item.querySelector(".node-action-favorite");
    const tlmButton = item.querySelector(".node-action-tlm");
    if (!nodeAddress) {
      tlmButton.disabled = true;
    } else {
      tlmButton.addEventListener("click", (event) => {
        event.stopPropagation();
        tlmButton.disabled = true;
        requestNodeTelemetry(nodeAddress, () => {}).finally(() => {
          setTimeout(() => { tlmButton.disabled = false; }, 3000);
        });
      });
    }
    const adminButton = item.querySelector(".node-action-admin");
    if (!isAdminTargetNode(node) || !nodeAddress) {
      adminButton.remove();
    } else {
      adminButton.addEventListener("click", (event) => {
        event.stopPropagation();
        openAdminConsole(nodeAddress);
      });
    }
    const messageButton = item.querySelector(".node-action-message");
    const cashuButton = item.querySelector(".node-action-cashu");
    const isUnmessagable = String(node.contactType || "") === "repeater";
    setFavoriteButtonState(favoriteButton, isFavoriteNode(node));
    if (!nodeAddress) {
      favoriteButton.disabled = true;
    } else {
      favoriteButton.addEventListener("click", async (event) => {
        event.stopPropagation();
        favoriteButton.disabled = true;
        try {
          await toggleNodeFavorite(nodeAddress, !isFavoriteNode(node));
          renderNodes(latestNodes);
        } catch (e) {
          favoriteButton.disabled = false;
        }
      });
    }
    if (isUnmessagable) { messageButton.remove(); cashuButton.remove(); }
    if (!nodeAddress) {
      if (messageButton.isConnected) messageButton.disabled = true;
      cashuButton.disabled = true;
    } else {
      messageButton.addEventListener("click", (event) => {
        event.stopPropagation();
        openDmForNode(nodeAddress);
      });
      cashuButton.addEventListener("click", (event) => {
        event.stopPropagation();
        openCashuSendForNode(nodeAddress);
      });
    }

    item.addEventListener("click", () => openNodeModal(node.id || node.userId));
    nodesList.appendChild(item);
  });

  if (chatState.mode === CHAT_MODE_DM) {
    renderDmChat();
  }
}

function renderKv(container, rows) {
  container.innerHTML = "";
  rows.forEach(([label, value]) => {
    if (value === null || value === undefined || value === "") {
      return;
    }
    const row = document.createElement("div");
    row.className = "modal-kv-row";
    row.innerHTML = `<span class="modal-k">${label}</span><span class="modal-v"></span>`;
    row.querySelector(".modal-v").textContent = String(value);
    container.appendChild(row);
  });
  if (!container.children.length) {
    container.innerHTML = '<div class="node-empty">No data</div>';
  }
}

function formatMetric(label, value) {
  if (value === null || value === undefined || value === "") {
    return value;
  }
  if (label === "Voltage") {
    return `${value} V`;
  }
  if (label === "Battery") {
    return `${value}%`;
  }
  if (label === "Uptime") {
    const seconds = Number(value);
    if (Number.isFinite(seconds)) {
      if (seconds >= 86400) {
        return `${Math.round(seconds / 86400)} d`;
      }
      if (seconds >= 3600) {
        return `${Math.round(seconds / 3600)} h`;
      }
      if (seconds >= 60) {
        return `${Math.round(seconds / 60)} min`;
      }
    }
  }
  if (label === "SNR") {
    return `${value} dB`;
  }
  if (label === "Channel util" || label === "Air util tx") {
    return `${value}%`;
  }
  return value;
}

const WEATHER_SVGS = {
  temp: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="8.5" y="2" width="3" height="10.5" rx="1.5"/><circle cx="10" cy="15.5" r="2.5" fill="currentColor" stroke="none" opacity="0.85"/><line x1="11.5" y1="5" x2="14" y2="5"/><line x1="11.5" y1="7.5" x2="14" y2="7.5"/><line x1="11.5" y1="10" x2="14" y2="10"/></svg>`,
  humidity: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3C10 3 4 10 4 14a6 6 0 0 0 12 0c0-4-6-11-6-11z" fill="currentColor" opacity="0.25"/><path d="M10 3C10 3 4 10 4 14a6 6 0 0 0 12 0c0-4-6-11-6-11z"/></svg>`,
  pressure: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="10" cy="11" r="6.5"/><path d="M10 11L13.5 7"/><circle cx="10" cy="11" r="1" fill="currentColor" stroke="none"/><path d="M7 4.5L10 3l3 1.5" stroke-linejoin="round"/></svg>`,
  wind: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 7h8.5a2.5 2.5 0 1 0-2.5-2.5"/><path d="M3 11h10.5a2.5 2.5 0 1 1-2.5 2.5"/><line x1="3" y1="9" x2="8" y2="9"/></svg>`,
  direction: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="7.5"/><path d="M10 4v2M10 14v2M4 10h2M14 10h2"/><path d="M10 10l2.5-3.5" stroke-width="2"/></svg>`,
  iaq: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3a7 7 0 1 1 0 14A7 7 0 0 1 10 3z"/><path d="M7 10.5s.8 2 3 2 3-2 3-2"/><circle cx="7.5" cy="8" r="1" fill="currentColor" stroke="none"/><circle cx="12.5" cy="8" r="1" fill="currentColor" stroke="none"/></svg>`,
  gas: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M5 17V8a5 5 0 0 1 10 0v9"/><line x1="3" y1="17" x2="17" y2="17"/><path d="M8 8h4"/></svg>`,
};

function windDirLabel(deg) {
  const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return dirs[Math.round(deg / 45) % 8] + ` ${Math.round(deg)}°`;
}

function renderWeatherBlock(env) {
  const items = [];
  if (env.temperature != null) items.push({ key: "temp", val: `${Number(env.temperature).toFixed(1)}°C`, lbl: "Temp" });
  if (env.relativeHumidity != null) items.push({ key: "humidity", val: `${Math.round(env.relativeHumidity)}%`, lbl: "Humidity" });
  if (env.barometricPressure != null) items.push({ key: "pressure", val: `${Math.round(env.barometricPressure)} hPa`, lbl: "Pressure" });
  if (env.windSpeed != null) items.push({ key: "wind", val: `${Number(env.windSpeed).toFixed(1)} m/s`, lbl: "Wind" });
  if (env.windDirection != null) items.push({ key: "direction", val: windDirLabel(env.windDirection), lbl: "Direction" });
  if (env.iaq != null) items.push({ key: "iaq", val: `${env.iaq}`, lbl: "IAQ" });
  if (env.gasResistance != null) items.push({ key: "gas", val: `${Math.round(env.gasResistance)} Ω`, lbl: "Gas" });
  if (!items.length) return "";
  const cards = items.map(({ key, val, lbl }) => `
    <div class="node-weather-card">
      <div class="node-weather-icon">${WEATHER_SVGS[key] || ""}</div>
      <div class="node-weather-val">${val}</div>
      <div class="node-weather-lbl">${lbl}</div>
    </div>`).join("");
  return `<div class="modal-label">Weather</div><div class="node-weather-grid">${cards}</div>`;
}

async function openNodeModal(nodeId) {
  try {
    const payload = await fetchJson(`/api/node-raw?id=${encodeURIComponent(nodeId)}`);
    const isOnline = !!payload.online;
    nodeModalDot.className = `node-dot${isOnline ? " node-dot--online" : " node-dot--offline"}`;
    const advertAge = formatAdvertAge(payload.lastHeard);
    nodeModalSubtitle.textContent = [
      String(payload.contactType || "contact").toUpperCase(),
      advertAge || "no advert seen",
    ].join(" | ");
    setFavoriteButtonState(nodeModalFavoriteButton, Boolean(payload.favorite));

    const lat = payload.latitude;
    const lon = payload.longitude;
    const pubkey = String(payload.userId || payload.id || "");

    renderKv(nodeModalIdentity, [
      ["Name", payload.longName || payload.shortName || pubkey.slice(0, 8)],
      ["Pubkey", pubkey],
      ["Type", String(payload.contactType || "unknown").toUpperCase()],
      ...(lat != null && lat !== 0 && lon != null ? [["Lat", Number(lat).toFixed(5)], ["Lon", Number(lon).toFixed(5)]] : []),
    ]);

    const lastHeardStr = payload.lastHeard
      ? new Date(payload.lastHeard * 1000).toLocaleString([], { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit" })
      : null;
    const pathLabel = payload.hopsAway != null
      ? `${payload.hopsAway} hop${payload.hopsAway === 1 ? "" : "s"} (direct)`
      : "flood";

    renderKv(nodeModalStatus, [
      ["Online", isOnline ? "yes" : "no"],
      ["Routing", pathLabel],
      ...(payload.outPath ? [["Out path", payload.outPath]] : []),
      ["SNR", formatMetric("SNR", payload.snr ?? null)],
      ...(advertAge ? [["Advert", advertAge]] : []),
      ...(lastHeardStr ? [["Last advert", lastHeardStr]] : []),
    ]);

    renderKv(nodeModalMetrics, [
      ...(payload.batteryLevel != null ? [["Battery", formatMetric("Battery", payload.batteryLevel)]] : []),
      ...(payload.voltage != null ? [["Voltage", formatMetric("Voltage", payload.voltage)]] : []),
      ...(payload.lastTelemetryAt ? [["Telemetry at", new Date(payload.lastTelemetryAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })]] : []),
    ]);
    // On-demand telemetry pull (MeshCore telemetry is pull-based).
    const tlmRow = document.createElement("div");
    tlmRow.style.marginTop = "6px";
    const tlmBtn = document.createElement("button");
    tlmBtn.type = "button";
    tlmBtn.className = "setup-btn";
    tlmBtn.textContent = "REQUEST TELEMETRY";
    tlmBtn.addEventListener("click", () => {
      tlmBtn.disabled = true;
      tlmBtn.textContent = "REQUESTED...";
      requestNodeTelemetry(pubkey, () => {}).finally(() => {
        setTimeout(() => {
          tlmBtn.disabled = false;
          tlmBtn.textContent = "REQUEST TELEMETRY";
        }, 5000);
      });
    });
    tlmRow.appendChild(tlmBtn);
    nodeModalMetrics.appendChild(tlmRow);

    const env = payload.environmentMetrics || {};
    const hasWeather = env.temperature != null || env.relativeHumidity != null || env.barometricPressure != null || env.windSpeed != null || env.iaq != null;
    if (hasWeather) {
      nodeModalWeather.classList.remove("hidden");
      nodeModalWeather.innerHTML = renderWeatherBlock(env);
    } else {
      nodeModalWeather.classList.add("hidden");
    }

    nodeModalRaw.textContent = JSON.stringify(payload, null, 2);

    const peerId = pubkey;
    const modalUnmessagable = String(payload.contactType || "") === "repeater";
    if (nodeModalFavoriteButton) {
      nodeModalFavoriteButton.disabled = !peerId;
      nodeModalFavoriteButton.onclick = async () => {
        if (!peerId) return;
        nodeModalFavoriteButton.disabled = true;
        try {
          await toggleNodeFavorite(peerId, !Boolean(payload.favorite));
          payload.favorite = !Boolean(payload.favorite);
          setFavoriteButtonState(nodeModalFavoriteButton, Boolean(payload.favorite));
          renderNodes(latestNodes);
        } catch (e) {
          setFavoriteButtonState(nodeModalFavoriteButton, Boolean(payload.favorite));
        } finally {
          nodeModalFavoriteButton.disabled = false;
        }
      };
    }
    nodeModalChatButton.classList.toggle("hidden", modalUnmessagable);
    nodeModalSendButton.classList.toggle("hidden", modalUnmessagable);
    nodeModalChatButton.onclick = () => { closeNodeModal(); closeNodesMap(); openDmForNode(peerId); };
    nodeModalSendButton.onclick = () => { closeNodeModal(); closeNodesMap(); openCashuSendForNode(peerId); };

    // Location request button
    const hasPos = lat != null && lat !== 0;
    _setupLocateButton(nodeId, peerId, hasPos);

    nodeModal.classList.remove("hidden");
    nodeModal.setAttribute("aria-hidden", "false");
  } catch (error) {
    appendLog({ sender: "system", recipient: "-", text: `Node modal error: ${error.message}`, transport: "system" });
  }
}

function closeNodeModal() {
  nodeModal.classList.add("hidden");
  nodeModal.setAttribute("aria-hidden", "true");
}

function _setupLocateButton(nodeId, peerId, hasPos) {
  const btn = nodeModalPositionButton;
  const label = btn.querySelector("svg + *") || btn.lastChild;

  btn.disabled = false;
  btn.classList.remove("node-modal-action-btn--pending", "node-modal-action-btn--success");
  btn.title = "Show node on map";
  if (label) label.textContent = " Locate";

  btn.onclick = () => {
    closeNodeModal();
    openNodesMap();
    setTimeout(() => {
      const pos = _renderedPosById.get(peerId) || _renderedPosById.get(nodeId);
      if (pos && _mapInstance) {
        _mapInstance.setView([pos.lat, pos.lon], 14, { animate: true });
      }
    }, 400);
  };
}

// Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ Nodes Map Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ
let _mapInstance = null;
let _mapMarkers = [];
let _renderedPosById = new Map(); // nodeId/userId → {lat, lon} for all rendered markers
let _mapCircles = [];
let _mapLines = [];
let _hoverLines = [];
let _mapShowRadius = false;
let _mapRadiusStyle = "fill"; // "fill" = current | "rings" = concentric bands
let _mapShowLinks = false;
let _mapColorByRole = false;
let _mapRoleFilter = new Set(); // empty = show all
let _mapHoverMaxHops = 3;
let _mapShowTooltips = true;
const MAP_PREFS_STORAGE_KEY = "nodesMapPrefs";
let _mapPrefsSaveTimer = null;
let _mapSavedView = null;

// Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ Map layer visibility Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ
// Online/offline node layer visibility (map "Network Layers" panel)
let _mapAutoLayerVis = { online: true, offline: true };
// Р Р†Р вЂљРІР‚Сњ dblclick handling uses pop-2 phantom point removal instead
function _loadMapPrefs() {
  try {
    const raw = localStorage.getItem(MAP_PREFS_STORAGE_KEY);
    if (!raw) return;
    const prefs = JSON.parse(raw) || {};
    if (typeof prefs.showTooltips === "boolean") _mapShowTooltips = prefs.showTooltips;
    if (typeof prefs.showRadius === "boolean") _mapShowRadius = prefs.showRadius;
    if (prefs.radiusStyle === "fill" || prefs.radiusStyle === "rings") _mapRadiusStyle = prefs.radiusStyle;
    if (typeof prefs.showLinks === "boolean") _mapShowLinks = prefs.showLinks;
    if (typeof prefs.colorByRole === "boolean") _mapColorByRole = prefs.colorByRole;
    if (Number.isFinite(Number(prefs.hoverMaxHops))) {
      _mapHoverMaxHops = Math.max(1, Math.min(9, Number(prefs.hoverMaxHops)));
    }
    if (prefs.autoLayers && typeof prefs.autoLayers === "object") {
      _mapAutoLayerVis = {
        online: prefs.autoLayers.online !== false,
        offline: prefs.autoLayers.offline !== false,
      };
    }
    const center = Array.isArray(prefs.view?.center) ? prefs.view.center : null;
    const zoom = Number(prefs.view?.zoom);
    if (center && center.length >= 2 && Number.isFinite(Number(center[0])) && Number.isFinite(Number(center[1])) && Number.isFinite(zoom)) {
      _mapSavedView = { center: [Number(center[0]), Number(center[1])], zoom };
    }
  } catch {}
}

function _saveMapPrefs() {
  try {
    let view = _mapSavedView;
    if (_mapInstance) {
      const center = _mapInstance.getCenter();
      view = { center: [center.lat, center.lng], zoom: _mapInstance.getZoom() };
      _mapSavedView = view;
    }
    localStorage.setItem(MAP_PREFS_STORAGE_KEY, JSON.stringify({
      showTooltips: _mapShowTooltips,
      showRadius: _mapShowRadius,
      radiusStyle: _mapRadiusStyle,
      showLinks: _mapShowLinks,
      colorByRole: _mapColorByRole,
      hoverMaxHops: _mapHoverMaxHops,
      autoLayers: {
        online: _mapAutoLayerVis.online !== false,
        offline: _mapAutoLayerVis.offline !== false,
      },
      view,
    }));
  } catch {}
}

function _scheduleSaveMapPrefs() {
  if (_mapPrefsSaveTimer) clearTimeout(_mapPrefsSaveTimer);
  _mapPrefsSaveTimer = setTimeout(() => {
    _mapPrefsSaveTimer = null;
    _saveMapPrefs();
  }, 150);
}

function _syncMapControls() {
  const tooltipsBtn = document.getElementById("mapToggleTooltips");
  if (tooltipsBtn) tooltipsBtn.classList.toggle("nodes-map-toggle-btn--active", _mapShowTooltips);

  const radiusBtn = document.getElementById("mapToggleRadius");
  if (radiusBtn) radiusBtn.classList.toggle("nodes-map-toggle-btn--active", _mapShowRadius);
  const radiusStyleControl = document.getElementById("mapRadiusStyleControl");
  if (radiusStyleControl) radiusStyleControl.classList.toggle("hidden", !_mapShowRadius);
  const radiusStyleBtn = document.getElementById("mapRadiusStyleBtn");
  if (radiusStyleBtn) {
    radiusStyleBtn.classList.toggle("nodes-map-style-btn--fill", _mapRadiusStyle === "fill");
    radiusStyleBtn.classList.toggle("nodes-map-style-btn--rings", _mapRadiusStyle === "rings");
  }

  const linksBtn = document.getElementById("mapToggleLinks");
  if (linksBtn) linksBtn.classList.toggle("nodes-map-toggle-btn--active", _mapShowLinks);
  const linksLegend = document.getElementById("mapLinksLegend");
  if (linksLegend) linksLegend.style.display = _mapShowLinks ? "" : "none";
  const hopsControl = document.getElementById("mapHopsControl");
  if (hopsControl) hopsControl.classList.toggle("hidden", !_mapShowLinks);
  const hopsValue = document.getElementById("mapHopsVal");
  if (hopsValue) hopsValue.textContent = String(_mapHoverMaxHops);
  const hopsSlider = document.getElementById("mapHopsSlider");
  if (hopsSlider) hopsSlider.value = String(_mapHoverMaxHops);

  const roleBtn = document.getElementById("mapToggleRole");
  if (roleBtn) roleBtn.classList.toggle("nodes-map-toggle-btn--active", _mapColorByRole);
  const roleLegend = document.getElementById("mapRoleLegend");
  if (roleLegend) roleLegend.style.display = _mapColorByRole ? "" : "none";
}

_loadMapPrefs();

function _mapEscapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function _mapFormatDistance(meters) {
  const value = Number(meters);
  if (!Number.isFinite(value) || value <= 0) return "-";
  if (value >= 1000) return `${(value / 1000).toFixed(value >= 10000 ? 0 : 2)} km`;
  return `${Math.round(value)} m`;
}

// MeshCore contact types drive the map "type" coloring.
const _MAP_ROLE_CONFIG = {
  "chat":     { color: "#4a9eff", label: "Chat" },
  "repeater": { color: "#e8c030", label: "Repeater" },
  "room":     { color: "#b06aff", label: "Room" },
  "sensor":   { color: "#26c6a6", label: "Sensor" },
  "weather":  { color: "#26c6a6", label: "Weather" },
  "":         { color: "#8a9aaa", label: "Unknown" },
};

function _getNodeRoleKey(node) {
  const type = String(node.contactType || "").toLowerCase();
  if (_MAP_ROLE_CONFIG[type]) return type;
  if (node.role === "weather") return "weather";
  return "";
}

function _getRoleColor(node) {
  const key = _getNodeRoleKey(node);
  return (_MAP_ROLE_CONFIG[key] || _MAP_ROLE_CONFIG[""]).color;
}

function _snrToColor(snr) {
  if (snr == null) return "#4a9eff";
  if (snr >= 5)   return "#4caf50";
  if (snr >= 0)   return "#ffc107";
  return "#ff7043";
}

function _clearHoverLines() {
  _hoverLines.forEach((l) => l.remove());
  _hoverLines = [];
}

function openNodesMap() {
  nodesMapModal.classList.remove("hidden");
  nodesMapModal.setAttribute("aria-hidden", "false");
  loadMapNodeOnlineWindow();

  if (!_mapInstance) {
    const initialCenter = _mapSavedView?.center || [20, 0];
    const initialZoom = Number.isFinite(_mapSavedView?.zoom) ? _mapSavedView.zoom : 2;
    _mapInstance = L.map(nodesMapContainer, {
      center: initialCenter,
      zoom: initialZoom,
      zoomControl: true,
      attributionControl: true,
      scrollWheelZoom: true,
      wheelPxPerZoomLevel: 120,
      wheelDebounceTime: 40,
      zoomSnap: 0.25,
      zoomDelta: 0.25,
    });
    _mapInstance.attributionControl.setPrefix('<a href="https://leafletjs.com" target="_blank">Leaflet</a>');
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
      subdomains: "abcd",
      maxZoom: 19,
    }).addTo(_mapInstance);

    const toggleControl = L.control({ position: "bottomleft" });
    toggleControl.onAdd = function () {
      const div = L.DomUtil.create("div", "nodes-map-toggle-control");
      div.innerHTML =
        `<button id="mapToggleTooltips" class="nodes-map-toggle-btn nodes-map-toggle-btn--active" title="Node tooltips on hover">` +
          `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>` +
        `</button>` +
        `<button id="mapToggleRadius" class="nodes-map-toggle-btn" title="Estimated radio range">radius</button>` +
        `<button id="mapToggleLinks" class="nodes-map-toggle-btn" title="Connection lines">links</button>` +
        `<button id="mapToggleRole" class="nodes-map-toggle-btn" title="Color by role">role</button>` +
        `<div id="mapRadiusStyleControl" class="nodes-map-hops-control hidden" title="Radius style">` +
          `<span class="nodes-map-hops-label">style</span>` +
          `<button id="mapRadiusStyleBtn" class="nodes-map-style-btn nodes-map-style-btn--fill" title="Switch radius style"></button>` +
        `</div>` +
        `<div id="mapHopsControl" class="nodes-map-hops-control hidden" title="Hover hops depth">` +
          `<span class="nodes-map-hops-label">hops <span id="mapHopsVal">${_mapHoverMaxHops}</span></span>` +
          `<input id="mapHopsSlider" class="nodes-map-hops-slider" type="range" min="1" max="9" value="${_mapHoverMaxHops}">` +
        `</div>`;
      L.DomEvent.disableClickPropagation(div);
      return div;
    };
    toggleControl.addTo(_mapInstance);

    const legendControl = L.control({ position: "bottomright" });
    legendControl.onAdd = function () {
      const div = L.DomUtil.create("div", "nodes-map-legend");
      div.id = "mapLinksLegend";
      div.style.display = "none";
      div.innerHTML =
        `<div class="nodes-map-legend-row"><span class="nodes-map-legend-line" style="background:#4caf50"></span> Strong SNR (>=5 dB)</div>` +
        `<div class="nodes-map-legend-row"><span class="nodes-map-legend-line" style="background:#ffc107"></span> Medium SNR (0-5 dB)</div>` +
        `<div class="nodes-map-legend-row"><span class="nodes-map-legend-line" style="background:#ff7043"></span> Weak SNR (&lt;0 dB)</div>` +
        `<div class="nodes-map-legend-row"><span class="nodes-map-legend-line" style="background:#4a9eff"></span> No SNR data</div>` +
        `<div class="nodes-map-legend-divider"></div>` +
        `<div class="nodes-map-legend-row"><span class="nodes-map-legend-line--dashed" style="border-color:#4a9eff"></span> Inferred path (1 hop step)</div>` +
        `<div class="nodes-map-legend-row"><span class="nodes-map-legend-line--dashed" style="border-color:#b06fff"></span> Inferred path (2 hops)</div>` +
        `<div class="nodes-map-legend-row"><span class="nodes-map-legend-line--dashed" style="border-color:#ff8a65"></span> Inferred path (3+ hops)</div>`;
      L.DomEvent.disableClickPropagation(div);
      return div;
    };
    legendControl.addTo(_mapInstance);

    const roleLegendControl = L.control({ position: "topright" });
    roleLegendControl.onAdd = function () {
      const div = L.DomUtil.create("div", "nodes-map-legend nodes-map-role-legend");
      div.id = "mapRoleLegend";
      div.style.display = "none";
      L.DomEvent.disableClickPropagation(div);
      return div;
    };
    roleLegendControl.addTo(_mapInstance);

    const networkLayersControl = L.DomUtil.create("div", "nodes-map-network-layers");
    networkLayersControl.id = "mapNetworkLayers";
    nodesMapContainer.appendChild(networkLayersControl);
    L.DomEvent.disableClickPropagation(networkLayersControl);
    L.DomEvent.disableScrollPropagation(networkLayersControl);

    document.getElementById("mapToggleTooltips").addEventListener("click", function () {
      _mapShowTooltips = !_mapShowTooltips;
      this.classList.toggle("nodes-map-toggle-btn--active", _mapShowTooltips);
      if (!_mapShowTooltips) {
        _mapMarkers.forEach(m => m.closePopup());
      }
      _scheduleSaveMapPrefs();
    });
    document.getElementById("mapToggleRadius").addEventListener("click", function () {
      _mapShowRadius = !_mapShowRadius;
      this.classList.toggle("nodes-map-toggle-btn--active", _mapShowRadius);
      document.getElementById("mapRadiusStyleControl").classList.toggle("hidden", !_mapShowRadius);
      _scheduleSaveMapPrefs();
      _renderMapNodes(false);
    });
    document.getElementById("mapRadiusStyleBtn").addEventListener("click", function () {
      _mapRadiusStyle = _mapRadiusStyle === "fill" ? "rings" : "fill";
      this.classList.toggle("nodes-map-style-btn--fill", _mapRadiusStyle === "fill");
      this.classList.toggle("nodes-map-style-btn--rings", _mapRadiusStyle === "rings");
      _scheduleSaveMapPrefs();
      _renderMapNodes(false);
    });
    document.getElementById("mapToggleLinks").addEventListener("click", function () {
      _mapShowLinks = !_mapShowLinks;
      this.classList.toggle("nodes-map-toggle-btn--active", _mapShowLinks);
      const legend = document.getElementById("mapLinksLegend");
      if (legend) legend.style.display = _mapShowLinks ? "" : "none";
      document.getElementById("mapHopsControl").classList.toggle("hidden", !_mapShowLinks);
      _scheduleSaveMapPrefs();
      _renderMapNodes(false);
    });
    document.getElementById("mapToggleRole").addEventListener("click", function () {
      _mapColorByRole = !_mapColorByRole;
      this.classList.toggle("nodes-map-toggle-btn--active", _mapColorByRole);
      const legend = document.getElementById("mapRoleLegend");
      if (legend) legend.style.display = _mapColorByRole ? "" : "none";
      if (!_mapColorByRole) _mapRoleFilter = new Set();
      _scheduleSaveMapPrefs();
      _renderMapNodes(false);
    });
    document.getElementById("mapHopsSlider").addEventListener("input", function () {
      _mapHoverMaxHops = parseInt(this.value);
      document.getElementById("mapHopsVal").textContent = _mapHoverMaxHops;
      _scheduleSaveMapPrefs();
    });
    _mapInstance.on("moveend zoomend", () => {
      _scheduleSaveMapPrefs();
    });
    _syncMapControls();
    _renderNetworkLayersPanel();
  }

  // Force Leaflet to recalculate size after the modal becomes visible
  requestAnimationFrame(() => {
    _mapInstance.invalidateSize();
    _syncMapControls();
    _renderMapNodes(!_mapSavedView);
  });
}

function closeNodesMap() {
  nodesMapModal.classList.add("hidden");
  nodesMapModal.setAttribute("aria-hidden", "true");
  const panel = nodesMapModal.querySelector(".modal-panel--map");
  if (panel) panel.classList.remove("modal-panel--fullscreen");
  const icon = document.getElementById("nodesMapExpandIcon");
  if (icon) icon.innerHTML = '<path d="M1 1h4v1.5H2.5V4H1V1zm6 0h4v3h-1.5V2.5H7V1zM1 8h1.5v2.5H5V12H1V8zm8.5 2.5H7V12h4V8H9.5v2.5z"/>';
}

// Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ Network layers Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ

function _isNodeLayerVisible(node) {
  const statusKey = node?.online ? "online" : "offline";
  return _mapAutoLayerVis[statusKey] !== false;
}




function _renderNetworkLayersPanel() {
  const autoEl = document.getElementById("mapNetworkLayers");
  if (!autoEl) return;
  autoEl.innerHTML = "";
  if (mapNodeOnlineWindowControl) {
    const windowRow = document.createElement("div");
    windowRow.className = "nodes-map-network-layer-row nodes-map-network-window-row";
    windowRow.appendChild(mapNodeOnlineWindowControl);
    autoEl.appendChild(windowRow);
  }
  const autoLayers = [
    { key: "online",  label: "Online Nodes",  color: "#4caf50" },
    { key: "offline", label: "Offline Nodes", color: "#8b4a4a" },
  ];
  autoLayers.forEach(al => {
    const vis = _mapAutoLayerVis[al.key] !== false;
    const row = document.createElement("div");
    row.className = "nodes-map-network-layer-row";
    row.innerHTML =
      `<div class="nodes-map-layer-color" style="background:${al.color}"></div>` +
      `<span class="nodes-map-layer-name${vis ? "" : " nodes-map-layer-name--hidden"}">${al.label}</span>` +
      `<button class="nodes-map-layer-vis" title="${vis ? "Hide" : "Show"}">${_mapEyeIcon(vis)}</button>`;
    row.querySelector(".nodes-map-layer-vis").addEventListener("click", (e) => {
      if (e && typeof e.stopPropagation === "function") e.stopPropagation();
      _mapAutoLayerVis[al.key] = !vis;
      _scheduleSaveMapPrefs();
      _renderMapNodes(false);
      _renderNetworkLayersPanel();
    });
    autoEl.appendChild(row);
  });
}

function _mapEyeIcon(visible) {
  if (visible) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
}

function _renderMapNodes(fitBounds = true) {
  if (!_mapInstance) return;

  _mapMarkers.forEach((m) => m.remove());
  _mapMarkers = [];
  _renderedPosById = new Map();
  _mapCircles.forEach((c) => c.remove());
  _mapCircles = [];
  _mapLines.forEach((l) => l.remove());
  _mapLines = [];

  // Lookup tables for estimated positioning
  const visibleNodes = latestNodes.filter((node) => _isNodeLayerVisible(node));
  const allByMeshNum = {};
  for (const n of latestNodes) {
    if (n.meshNum != null) allByMeshNum[String(n.meshNum)] = n;
  }
  const reverseLookup = {};
  for (const n of latestNodes) {
    if (!n.latitude || !n.longitude || n.latitude === 0 || n.longitude === 0) continue;
    for (const nb of (n.neighbors || [])) {
      const key = String(nb.nodeId || "");
      if (!key) continue;
      if (!reverseLookup[key]) reverseLookup[key] = [];
      reverseLookup[key].push({ anchorNode: n, snr: nb.snr ?? null });
    }
  }

  const withPos = visibleNodes.filter(
    (n) => n.latitude != null && n.longitude != null && n.latitude !== 0 && n.longitude !== 0
  );
  const estimationAnchors = latestNodes.filter(
    (n) => n.latitude != null && n.longitude != null && n.latitude !== 0 && n.longitude !== 0
  );

  _clearHoverLines();

  if (_mapShowRadius) _renderMapRadius(withPos, allByMeshNum, reverseLookup);

  // Built after renderEntries is ready (closures read these by reference at call-time)
  let _renderedPos = null; // Map<meshNumStr, {lat,lon}>
  let _nodeEdges = null;   // Map<meshNumStr, [{to, snr}]>

  function _addMapMarker(lat, lon, node, estimated) {
    // Role filter Р Р†Р вЂљРІР‚Сњ skip node if active filter doesn't include its role
    if (_mapColorByRole && _mapRoleFilter.size > 0) {
      if (!_mapRoleFilter.has(_getNodeRoleKey(node))) return;
    }

    const online = !!node.online;

    if (!_isNodeLayerVisible(node)) return;
    const shortName = node.shortName || (node.userId || node.id || "?").slice(0, 8);
    const label = node.longName || node.shortName || node.userId || node.id || "?";
    const status = online ? "online" : "offline";
    const battery = node.batteryLevel != null ? `${node.batteryLevel}%` : "-";
    const nodeId = node.userId || node.id;

    const dotClass = estimated
      ? (online ? "nodes-map-marker-online-est" : "nodes-map-marker-offline-est")
      : (online ? "nodes-map-marker-online" : "nodes-map-marker-offline");
    const wrapClass = estimated ? "nodes-map-marker-wrap nodes-map-marker-wrap--est" : "nodes-map-marker-wrap";
    const displayName = estimated ? `~${shortName}` : shortName;

    const roleColorStyle = _mapColorByRole
      ? ` style="background:${_getRoleColor(node)};border-color:rgba(255,255,255,0.25);box-shadow:0 0 6px ${_getRoleColor(node)}"`
      : "";
    const rangeEstimate = _estimateNodeRadioRange(node, allByMeshNum, reverseLookup);
    const rangeLabel = _mapEscapeHtml(_mapFormatDistance(rangeEstimate.radiusMeters));
    const rangeSourceLabel = rangeEstimate.source === "observed"
      ? `observed + ${_mapEscapeHtml(rangeEstimate.presetLabel)}`
      : _mapEscapeHtml(rangeEstimate.presetLabel);

    const icon = L.divIcon({
      className: "",
      html: `<div class="${wrapClass}">` +
            `<div class="${dotClass}"${roleColorStyle}></div>` +
            `<span class="nodes-map-label">${displayName}</span>` +
            `</div>`,
      iconSize: [90, 14],
      iconAnchor: [5, 7],
      popupAnchor: [10, -6],
    });

    const advertAge = formatAdvertAge(node.lastHeard);
    const popupHtml =
      `<div class="nodes-map-popup">` +
      `<div class="nodes-map-popup-name">${label}</div>` +
      `<div class="nodes-map-popup-row">${status}${node.batteryLevel != null ? ` | battery: ${battery}` : ""}</div>` +
      (advertAge ? `<div class="nodes-map-popup-row node-advert-age">${advertAge}</div>` : "") +
      `<div class="nodes-map-popup-row">range est: ${rangeLabel} | ${rangeSourceLabel}</div>` +
      (estimated ? `<div class="nodes-map-popup-row nodes-map-popup-row--est">~ position estimated</div>` : "") +
      `</div>`;

    const marker = L.marker([lat, lon], { icon })
      .bindPopup(popupHtml, { closeButton: false, autoPan: false })
      .addTo(_mapInstance);

    const myMeshNum = String(node.meshNum ?? "");

    function drawHoverLinks() {
      _clearHoverLines();
      if (!_mapShowLinks || !myMeshNum || !_renderedPos || !_nodeEdges) return;

      // BFS from this node through all known edges, draw each hop with fading opacity
      const visited = new Set([myMeshNum]);
      // queue entries: { from, to, snr, hop }
      let queue = (_nodeEdges.get(myMeshNum) || []).map((e) => ({ from: myMeshNum, to: e.to, snr: e.snr, hop: 1 }));

      while (queue.length > 0) {
        const next = [];
        for (const { from, to, snr, hop } of queue) {
          if (visited.has(to) || hop > _mapHoverMaxHops) continue;
          visited.add(to);
          const fromPos = _renderedPos.get(from);
          const toPos = _renderedPos.get(to);
          if (fromPos && toPos) {
            const opacity = Math.max(0.15, 0.9 - (hop - 1) * 0.18);
            const weight = Math.max(1, 2.5 - (hop - 1) * 0.4);
            const color = hop === 1 ? _snrToColor(snr) : "#7ab8ff";
            const line = L.polyline(
              [[fromPos.lat, fromPos.lon], [toPos.lat, toPos.lon]],
              { color, weight, opacity, interactive: false }
            ).addTo(_mapInstance);
            const el = line.getElement();
            if (el) {
              el.style.setProperty("--link-opacity", String(opacity));
              el.classList.add("map-link-hover-flow");
            }
            _hoverLines.push(line);
          }
          // queue neighbors of `to` for next hop
          for (const e of (_nodeEdges.get(to) || [])) {
            if (!visited.has(e.to)) next.push({ from: to, to: e.to, snr: e.snr, hop: hop + 1 });
          }
        }
        queue = next;
      }
    }

    let _closeTimer = null;
    marker.on("mouseover", function () {
      clearTimeout(_closeTimer);
      if (_mapShowTooltips) this.openPopup();
      drawHoverLinks();
    });
    marker.on("mouseout", function () {
      const m = this;
      _closeTimer = setTimeout(() => { m.closePopup(); _clearHoverLines(); }, 250);
    });
    marker.on("popupopen", function () {
      const popupEl = this.getPopup().getElement();
      if (!popupEl) return;
      popupEl.addEventListener("mouseenter", () => clearTimeout(_closeTimer));
      popupEl.addEventListener("mouseleave", () => {
        _closeTimer = setTimeout(() => { marker.closePopup(); _clearHoverLines(); }, 250);
      });
    });
    marker.on("click", function () {
      openNodeModal(nodeId);
    });
    _mapMarkers.push(marker);
  }

  // Collect all render entries: GPS nodes + estimated nodes
  const renderEntries = [];
  withPos.forEach((node) => renderEntries.push({ lat: node.latitude, lon: node.longitude, node, estimated: false }));
  const noGpsNodes = visibleNodes.filter(
    (n) => !(n.latitude != null && n.longitude != null && n.latitude !== 0 && n.longitude !== 0)
  );
  for (const node of noGpsNodes) {
    const est = _estimateNodePosition(node, estimationAnchors, allByMeshNum, reverseLookup);
    if (!est) continue;
    renderEntries.push({ lat: est.latitude, lon: est.longitude, node, estimated: true });
  }

  renderEntries.sort((a, b) => {
    const aOnline = a.node?.online ? 1 : 0;
    const bOnline = b.node?.online ? 1 : 0;
    if (aOnline !== bOnline) {
      return aOnline - bOnline;
    }
    const aEstimated = a.estimated ? 1 : 0;
    const bEstimated = b.estimated ? 1 : 0;
    return aEstimated - bEstimated;
  });

  // Group by rounded position (~11m grid) and spread overlapping nodes in a small circle
  const SPREAD_R_M = 70; // spread radius in meters
  const posGroups = {};
  for (const entry of renderEntries) {
    const key = `${entry.lat.toFixed(4)}|${entry.lon.toFixed(4)}`;
    if (!posGroups[key]) posGroups[key] = [];
    posGroups[key].push(entry);
  }
  for (const group of Object.values(posGroups)) {
    if (group.length < 2) continue;
    const baseLat = group[0].lat;
    const baseLon = group[0].lon;
    const mPerDegLat = 111320;
    const mPerDegLon = 111320 * Math.cos(baseLat * Math.PI / 180);
    group.forEach((entry, i) => {
      const angle = (2 * Math.PI * i) / group.length;
      entry.lat = baseLat + (SPREAD_R_M / mPerDegLat) * Math.sin(angle);
      entry.lon = baseLon + (SPREAD_R_M / mPerDegLon) * Math.cos(angle);
    });
  }

  const topology = _buildMapTopology(renderEntries);
  if (_mapShowLinks) _renderMapLinks(renderEntries, topology);

  // Build position map and edge map for rendered nodes (used by hover links)
  _renderedPos = new Map();
  _renderedPosById = new Map();
  for (const { lat, lon, node } of renderEntries) {
    if (node.meshNum != null) _renderedPos.set(String(node.meshNum), { lat, lon });
    if (node.id) _renderedPosById.set(String(node.id), { lat, lon });
    if (node.userId) _renderedPosById.set(String(node.userId), { lat, lon });
  }

  _nodeEdges = new Map();
  for (const [fromMeshNum, neighbors] of (topology.adjacency || new Map()).entries()) {
    _nodeEdges.set(
      String(fromMeshNum),
      [...neighbors].map((toMeshNum) => {
        const edgeKey = String(fromMeshNum) < String(toMeshNum)
          ? `${fromMeshNum}|${toMeshNum}`
          : `${toMeshNum}|${fromMeshNum}`;
        const edge = (topology.edges || []).find((item) => item.key === edgeKey);
        return { to: String(toMeshNum), snr: edge?.snr ?? null };
      }),
    );
  }

  for (const { lat, lon, node, estimated } of renderEntries) {
    _addMapMarker(lat, lon, node, estimated);
  }

  // Update role legend
  const roleLegendEl = document.getElementById("mapRoleLegend");
  if (roleLegendEl && _mapColorByRole) {
    // Collect present roles across ALL nodes (not just rendered ones, so legend stays stable)
    const presentRoles = new Map(); // roleKey Р Р†РІР‚В РІР‚в„ў label
    for (const node of latestNodes) {
      const key = _getNodeRoleKey(node);
      if (!presentRoles.has(key)) {
        const cfg = _MAP_ROLE_CONFIG[key] || _MAP_ROLE_CONFIG[""];
        presentRoles.set(key, cfg);
      }
    }
    roleLegendEl.innerHTML = '<div class="nodes-map-legend-title">ROLE</div>';
    for (const [key, cfg] of presentRoles) {
      const isActive = _mapRoleFilter.size === 0 || _mapRoleFilter.has(key);
      const item = document.createElement("div");
      item.className = `nodes-map-legend-row nodes-map-role-item${isActive ? "" : " nodes-map-role-item--dim"}`;
      item.dataset.roleKey = key;
      item.innerHTML =
        `<span class="nodes-map-role-dot" style="background:${cfg.color}"></span>` +
        `<span>${cfg.label}</span>`;
      item.addEventListener("click", () => {
        if (_mapRoleFilter.size === 0) {
          // First click: show ONLY this role
          _mapRoleFilter = new Set([key]);
        } else if (_mapRoleFilter.has(key)) {
          _mapRoleFilter.delete(key);
          // If all gone Р Р†РІР‚В РІР‚в„ў show all
          if (_mapRoleFilter.size === 0) _mapRoleFilter = new Set();
        } else {
          _mapRoleFilter.add(key);
        }
        _renderMapNodes(false);
      });
      roleLegendEl.appendChild(item);
    }
  }

  if (fitBounds && withPos.length > 0) {
    const bounds = L.latLngBounds(withPos.map((n) => [n.latitude, n.longitude]));
    _mapInstance.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
  }
}

const _MODEM_PRESET_BASE_RANGE_M = Object.freeze({
  SHORT_TURBO: 1800,
  SHORT_FAST: 3200,
  SHORT_SLOW: 4600,
  MEDIUM_FAST: 6500,
  MEDIUM_SLOW: 9000,
  LONG_FAST: 14000,
  LONG_MODERATE: 20000,
  LONG_SLOW: 28000,
  VERY_LONG_SLOW: 40000,
});

function _clampNumber(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function _normalizeModemPresetName(value) {
  return String(value || "").trim().toUpperCase().replace(/[\s-]+/g, "_");
}

function _getNetworkModemPreset(allByMeshNum) {
  const localNode = Object.values(allByMeshNum || {}).find((node) => Number(node?.hopsAway) === 0 && node?.modemPreset);
  return _normalizeModemPresetName(localNode?.modemPreset || "");
}

function _getBaseRangeFromPreset(modemPreset, networkPreset = "") {
  const preset = _normalizeModemPresetName(modemPreset) || networkPreset || "LONG_FAST";
  if (_MODEM_PRESET_BASE_RANGE_M[preset]) {
    return { preset, meters: _MODEM_PRESET_BASE_RANGE_M[preset] };
  }
  if (preset.includes("VERY_LONG")) return { preset, meters: _MODEM_PRESET_BASE_RANGE_M.VERY_LONG_SLOW };
  if (preset.includes("LONG") && preset.includes("SLOW")) return { preset, meters: _MODEM_PRESET_BASE_RANGE_M.LONG_SLOW };
  if (preset.includes("LONG") && preset.includes("MOD")) return { preset, meters: _MODEM_PRESET_BASE_RANGE_M.LONG_MODERATE };
  if (preset.includes("LONG")) return { preset, meters: _MODEM_PRESET_BASE_RANGE_M.LONG_FAST };
  if (preset.includes("MEDIUM") && preset.includes("SLOW")) return { preset, meters: _MODEM_PRESET_BASE_RANGE_M.MEDIUM_SLOW };
  if (preset.includes("MEDIUM")) return { preset, meters: _MODEM_PRESET_BASE_RANGE_M.MEDIUM_FAST };
  if (preset.includes("SHORT") && preset.includes("TURBO")) return { preset, meters: _MODEM_PRESET_BASE_RANGE_M.SHORT_TURBO };
  if (preset.includes("SHORT") && preset.includes("SLOW")) return { preset, meters: _MODEM_PRESET_BASE_RANGE_M.SHORT_SLOW };
  if (preset.includes("SHORT")) return { preset, meters: _MODEM_PRESET_BASE_RANGE_M.SHORT_FAST };
  return { preset: preset || "LONG_FAST", meters: _MODEM_PRESET_BASE_RANGE_M.LONG_FAST };
}

function _toFiniteNumber(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : null;
}

function _getNodeRssi(node) {
  return (
    _toFiniteNumber(node?.lastPacket?.rxRssi)
    ?? _toFiniteNumber(node?.raw?.rxRssi)
    ?? _toFiniteNumber(node?.raw?.lastPacket?.rxRssi)
  );
}

function _getNodeTrafficMetrics(node) {
  const metrics =
    node?.raw?.deviceMetrics ||
    node?.lastDecoded?.deviceMetrics ||
    node?.lastDecoded?.localStats ||
    {};
  return {
    channelUtilization: _toFiniteNumber(metrics.channelUtilization),
    airUtilTx: _toFiniteNumber(metrics.airUtilTx),
  };
}

function _estimateLinkBudgetRangeMeters({
  snr = null,
  rssi = null,
  modemPreset = "",
  hopsAway = null,
  online = true,
  channelUtilization = null,
  airUtilTx = null,
  networkPreset = "",
} = {}) {
  const { preset, meters: presetMeters } = _getBaseRangeFromPreset(modemPreset, networkPreset);
  const snrValue = _toFiniteNumber(snr);
  const rssiValue = _toFiniteNumber(rssi);
  const hopsValue = _toFiniteNumber(hopsAway);
  const channelUtil = _toFiniteNumber(channelUtilization);
  const airUtil = _toFiniteNumber(airUtilTx);

  const snrFactor = snrValue == null
    ? 0.96
    : _clampNumber(0.45 + ((snrValue + 20) / 32) * 0.95, 0.35, 1.45);
  const rssiFactor = rssiValue == null
    ? 1
    : _clampNumber(0.55 + ((rssiValue + 125) / 45) * 0.75, 0.45, 1.2);
  const congestionPenalty = _clampNumber(
    1
      - Math.max(0, channelUtil == null ? 0 : (channelUtil / 100) * 0.22)
      - Math.max(0, airUtil == null ? 0 : (airUtil / 100) * 0.12),
    0.68,
    1,
  );
  const hopPenalty = hopsValue == null
    ? 1
    : (hopsValue <= 0 ? 1 : hopsValue === 1 ? 0.92 : hopsValue === 2 ? 0.78 : 0.64);
  const onlinePenalty = online ? 1 : 0.85;

  return {
    radiusMeters: _clampNumber(
      presetMeters * snrFactor * rssiFactor * congestionPenalty * hopPenalty * onlinePenalty,
      1200,
      60000,
    ),
    preset,
    presetMeters,
  };
}

function _collectObservedNeighborDistances(node, allByMeshNum, reverseLookup) {
  const distances = [];
  const nodeLat = _toFiniteNumber(node?.latitude);
  const nodeLon = _toFiniteNumber(node?.longitude);
  const myKey = String(node?.meshNum ?? "");

  if (nodeLat != null && nodeLon != null && nodeLat !== 0 && nodeLon !== 0) {
    for (const nb of (node?.neighbors || [])) {
      const anchor = allByMeshNum[String(nb?.nodeId || "")];
      const anchorLat = _toFiniteNumber(anchor?.latitude);
      const anchorLon = _toFiniteNumber(anchor?.longitude);
      if (anchorLat == null || anchorLon == null || anchorLat === 0 || anchorLon === 0) continue;
      distances.push({
        distanceMeters: _haversineDistance(nodeLat, nodeLon, anchorLat, anchorLon),
        snr: _toFiniteNumber(nb?.snr),
      });
    }
  }

  for (const entry of (myKey ? (reverseLookup?.[myKey] || []) : [])) {
    const anchorNode = entry?.anchorNode;
    const anchorLat = _toFiniteNumber(anchorNode?.latitude);
    const anchorLon = _toFiniteNumber(anchorNode?.longitude);
    if (anchorLat == null || anchorLon == null || anchorLat === 0 || anchorLon === 0) continue;
    if (nodeLat != null && nodeLon != null && nodeLat !== 0 && nodeLon !== 0) {
      distances.push({
        distanceMeters: _haversineDistance(nodeLat, nodeLon, anchorLat, anchorLon),
        snr: _toFiniteNumber(entry?.snr),
      });
    }
  }

  return distances.filter((item) => item.distanceMeters > 0 && Number.isFinite(item.distanceMeters));
}

function _estimateNodeRadioRange(node, allByMeshNum = {}, reverseLookup = {}) {
  const networkPreset = _getNetworkModemPreset(allByMeshNum);
  const traffic = _getNodeTrafficMetrics(node);
  const linkBudget = _estimateLinkBudgetRangeMeters({
    snr: node?.snr,
    rssi: _getNodeRssi(node),
    modemPreset: node?.modemPreset,
    hopsAway: node?.hopsAway,
    online: !!node?.online,
    channelUtilization: traffic.channelUtilization,
    airUtilTx: traffic.airUtilTx,
    networkPreset,
  });
  const observations = _collectObservedNeighborDistances(node, allByMeshNum, reverseLookup);
  if (!observations.length) {
    return {
      radiusMeters: linkBudget.radiusMeters,
      source: "preset",
      presetLabel: linkBudget.preset,
      observedSamples: 0,
    };
  }

  const sortedDistances = observations
    .map((item) => item.distanceMeters)
    .sort((left, right) => left - right);
  const maxObserved = sortedDistances[sortedDistances.length - 1];
  const percentile75 = sortedDistances[Math.floor((sortedDistances.length - 1) * 0.75)];
  let weightedSum = 0;
  let totalWeight = 0;
  for (const observation of observations) {
    const snrWeight = observation.snr == null
      ? 1
      : _clampNumber(0.9 + ((observation.snr + 10) / 20), 0.65, 2.1);
    weightedSum += observation.distanceMeters * snrWeight;
    totalWeight += snrWeight;
  }
  const weightedAverage = totalWeight > 0 ? weightedSum / totalWeight : maxObserved;
  const observedRadius = Math.max(maxObserved * 1.08, percentile75 * 1.18, weightedAverage * 1.15);
  const observedBlend = observations.length >= 3 ? 0.74 : observations.length === 2 ? 0.66 : 0.58;

  return {
    radiusMeters: _clampNumber(
      (observedRadius * observedBlend) + (linkBudget.radiusMeters * (1 - observedBlend)),
      1200,
      60000,
    ),
    source: "observed",
    presetLabel: linkBudget.preset,
    observedSamples: observations.length,
  };
}

function _snrToRadius(snr, modemPreset = "", options = {}) {
  return _estimateLinkBudgetRangeMeters({
    snr,
    modemPreset,
    hopsAway: options.hopsAway,
    online: options.online ?? true,
    networkPreset: options.networkPreset || "",
  }).radiusMeters;
}

function _renderMapRadius(withPos, allByMeshNum = {}, reverseLookup = {}) {
  if (_mapRadiusStyle === "rings") {
    _renderMapRadiusRings(withPos, allByMeshNum, reverseLookup);
  } else {
    _renderMapRadiusFill(withPos, allByMeshNum, reverseLookup);
  }
}

function _renderMapRadiusFill(withPos, allByMeshNum = {}, reverseLookup = {}) {
  for (const node of withPos) {
    const radius = _estimateNodeRadioRange(node, allByMeshNum, reverseLookup).radiusMeters;
    const online = !!node.online;
    const circle = L.circle([node.latitude, node.longitude], {
      radius,
      color: online ? "#4caf50" : "#8b4a4a",
      weight: 1,
      opacity: 0.45,
      fillOpacity: 0.06,
      interactive: false,
    }).addTo(_mapInstance);
    _mapCircles.push(circle);
  }
}

function _renderMapRadiusRings(withPos, allByMeshNum = {}, reverseLookup = {}) {
  // Concentric signal-zone bands: strong (inner) Р Р†РІР‚В РІР‚в„ў medium Р Р†РІР‚В РІР‚в„ў weak (outer)
  const BANDS = [
    { scale: 1.0, color: "#ff7043", fillOpacity: 0.04, weight: 1, dashArray: "6 5", opacity: 0.55 }, // weak/outer
    { scale: 0.6, color: "#ffc107", fillOpacity: 0.05, weight: 1, dashArray: null,  opacity: 0.55 }, // medium
    { scale: 0.28, color: "#4caf50", fillOpacity: 0.10, weight: 1.5, dashArray: null, opacity: 0.75 }, // strong/inner
  ];
  const OFFLINE_BANDS = [
    { scale: 1.0, color: "#6a3a3a", fillOpacity: 0.03, weight: 1, dashArray: "6 5", opacity: 0.35 },
    { scale: 0.6, color: "#7a4a2a", fillOpacity: 0.03, weight: 1, dashArray: null,  opacity: 0.35 },
    { scale: 0.28, color: "#5a4a2a", fillOpacity: 0.06, weight: 1, dashArray: null, opacity: 0.45 },
  ];

  for (const node of withPos) {
    const baseRadius = _estimateNodeRadioRange(node, allByMeshNum, reverseLookup).radiusMeters;
    const online = !!node.online;
    const bands = online ? BANDS : OFFLINE_BANDS;

    for (const band of bands) {
      const circle = L.circle([node.latitude, node.longitude], {
        radius: baseRadius * band.scale,
        color: band.color,
        weight: band.weight,
        opacity: band.opacity,
        fillColor: band.color,
        fillOpacity: band.fillOpacity,
        dashArray: band.dashArray || undefined,
        interactive: false,
      }).addTo(_mapInstance);
      _mapCircles.push(circle);
    }
  }
}

function _haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function _haversineDistance(lat1, lon1, lat2, lon2) {
  return _haversineKm(lat1, lon1, lat2, lon2) * 1000;
}

function _deterministicAngle(str) {
  let h = 0;
  for (let i = 0; i < (str || "").length; i++)
    h = (Math.imul(31, h) + (str || "").charCodeAt(i)) | 0;
  return ((h >>> 0) % 360) * (Math.PI / 180);
}

function _estimateNodePosition(node, withPos, allByMeshNum, reverseLookup) {
  const networkPreset = _getNetworkModemPreset(allByMeshNum);
  // ourNode (hopsAway=0) Р Р†РІР‚В РІР‚в„ў place at centroid of all GPS nodes
  if (node.hopsAway === 0) {
    if (withPos.length === 0) return null;
    const lat = withPos.reduce((s, n) => s + n.latitude, 0) / withPos.length;
    const lon = withPos.reduce((s, n) => s + n.longitude, 0) / withPos.length;
    return { latitude: lat, longitude: lon };
  }

  const myKey = String(node.meshNum ?? "");
  const angle = _deterministicAngle(node.userId || node.id || myKey || "x");
  const seenKey = new Set();
  const anchors = [];

  function addAnchor(lat, lon, snr) {
    const k = `${lat.toFixed(5)}|${lon.toFixed(5)}`;
    if (seenKey.has(k)) return;
    seenKey.add(k);
    anchors.push({ lat, lon, snr: snr ?? null });
  }

  // Forward: this node's own neighbors that have GPS
  for (const nb of (node.neighbors || [])) {
    const anchor = allByMeshNum[String(nb.nodeId || "")];
    if (!anchor || !anchor.latitude || !anchor.longitude || anchor.latitude === 0 || anchor.longitude === 0) continue;
    addAnchor(anchor.latitude, anchor.longitude, nb.snr ?? null);
  }

  // Reverse: GPS nodes that list this node in their neighbors
  for (const entry of (myKey ? (reverseLookup[myKey] || []) : [])) {
    addAnchor(entry.anchorNode.latitude, entry.anchorNode.longitude, entry.snr);
  }

  // Weighted average of anchor-based estimates
  if (anchors.length > 0) {
    let totalWeight = 0, sumLat = 0, sumLon = 0;
    for (const a of anchors) {
      const distM = _snrToRadius(a.snr, node?.modemPreset, {
        hopsAway: node?.hopsAway,
        online: node?.online,
        networkPreset,
      });
      const dLat = (distM / 111320) * Math.sin(angle);
      const dLon = (distM / (111320 * Math.cos(a.lat * Math.PI / 180))) * Math.cos(angle);
      const w = Math.max(1, (a.snr ?? -10) + 15);
      sumLat += (a.lat + dLat) * w;
      sumLon += (a.lon + dLon) * w;
      totalWeight += w;
    }
    return { latitude: sumLat / totalWeight, longitude: sumLon / totalWeight };
  }

  // hopsAway fallback: use ourNode as anchor
  if (node.hopsAway != null && node.hopsAway > 0) {
    const ourNode = withPos.find((n) => n.hopsAway === 0);
    let anchorLat = ourNode?.latitude ?? null;
    let anchorLon = ourNode?.longitude ?? null;
    if (anchorLat == null || anchorLon == null || anchorLat === 0 || anchorLon === 0) {
      const localNode = Object.values(allByMeshNum || {}).find((n) => n?.hopsAway === 0);
      const localEstimate = localNode ? _estimateNodePosition(localNode, withPos, allByMeshNum, reverseLookup) : null;
      anchorLat = localEstimate?.latitude ?? null;
      anchorLon = localEstimate?.longitude ?? null;
    }
    if (anchorLat == null || anchorLon == null || anchorLat === 0 || anchorLon === 0) return null;
    const syntheticSnr = 10 - node.hopsAway * 8;
    const distM = _snrToRadius(syntheticSnr, node?.modemPreset, {
      hopsAway: node?.hopsAway,
      online: node?.online,
      networkPreset,
    });
    const dLat = (distM / 111320) * Math.sin(angle);
    const dLon = (distM / (111320 * Math.cos(anchorLat * Math.PI / 180))) * Math.cos(angle);
    return { latitude: anchorLat + dLat, longitude: anchorLon + dLon };
  }

  return null;
}

function _getNodeLastSeenMs(node) {
  const stamp = node?.lastSeenAt ?? node?.lastHeard ?? null;
  if (!stamp) return 0;
  const value = typeof stamp === "number" ? stamp * 1000 : new Date(stamp).getTime();
  return Number.isFinite(value) ? value : 0;
}

function _getTopologyHopColor(hopsAway) {
  const hops = Math.max(1, Math.round(_toFiniteNumber(hopsAway) ?? 1));
  if (hops <= 1) return "#4a9eff";
  if (hops === 2) return "#b06fff";
  if (hops === 3) return "#ff8a65";
  if (hops === 4) return "#ffd54f";
  return "#8bc34a";
}

function _buildMapTopology(renderEntries = []) {
  const entries = Array.isArray(renderEntries)
    ? renderEntries.filter((entry) => entry?.node?.meshNum != null)
    : [];
  const byMeshNum = new Map();
  for (const entry of entries) {
    byMeshNum.set(String(entry.node.meshNum), entry);
  }

  const edgesByKey = new Map();
  const realAdjacency = new Map();

  function addAdjacency(map, left, right) {
    if (!map.has(left)) map.set(left, new Set());
    map.get(left).add(right);
  }

  function edgeKey(left, right) {
    return left < right ? `${left}|${right}` : `${right}|${left}`;
  }

  function addEdge(leftEntry, rightEntry, options = {}) {
    const left = String(leftEntry?.node?.meshNum ?? "");
    const right = String(rightEntry?.node?.meshNum ?? "");
    if (!left || !right || left === right) return;

    const next = {
      key: edgeKey(left, right),
      from: left,
      to: right,
      snr: options.snr ?? null,
      color: options.color || "#4a9eff",
      dashed: Boolean(options.dashed),
      kind: options.kind || "inferred",
      priority: Number(options.priority || 0),
      score: Number(options.score || 0),
    };
    const prev = edgesByKey.get(next.key);
    if (!prev || next.priority > prev.priority || (next.priority === prev.priority && next.score > prev.score)) {
      edgesByKey.set(next.key, next);
    }
    if (options.real) {
      addAdjacency(realAdjacency, left, right);
      addAdjacency(realAdjacency, right, left);
    }
  }

  for (const entry of entries) {
    const node = entry.node;
    if (!node?.online) continue;
    for (const nb of (node.neighbors || [])) {
      const otherEntry = byMeshNum.get(String(nb?.nodeId || ""));
      if (!otherEntry?.node?.online) continue;
      addEdge(entry, otherEntry, {
        kind: "neighbor",
        real: true,
        priority: 50,
        snr: nb?.snr ?? null,
        color: _snrToColor(nb?.snr),
      });
    }
  }

  function buildAdjacencyFromEdges() {
    const adjacency = new Map();
    for (const edge of edgesByKey.values()) {
      addAdjacency(adjacency, edge.from, edge.to);
      addAdjacency(adjacency, edge.to, edge.from);
    }
    return adjacency;
  }

  function getConnectedMeshNums(adjacency) {
    const roots = entries
      .filter((entry) => _toFiniteNumber(entry?.node?.hopsAway) === 0)
      .map((entry) => String(entry.node.meshNum));
    const visited = new Set(roots);
    const queue = roots.slice();
    while (queue.length > 0) {
      const current = queue.shift();
      for (const next of (adjacency.get(current) || [])) {
        if (visited.has(next)) continue;
        visited.add(next);
        queue.push(next);
      }
    }
    return visited;
  }

  function scoreParent(entry, candidate, connected) {
    const entryHop = _toFiniteNumber(entry?.node?.hopsAway);
    const candidateHop = _toFiniteNumber(candidate?.node?.hopsAway);
    if (entryHop == null || candidateHop == null || candidateHop >= entryHop) return -Infinity;

    const entryMesh = String(entry.node.meshNum);
    const candidateMesh = String(candidate.node.meshNum);
    const hopDelta = Math.max(1, entryHop - candidateHop);
    let score = 0;

    score += hopDelta === 1 ? 240 : Math.max(-80, 60 - (hopDelta * 70));
    if (connected.has(candidateMesh)) score += 40;
    if (realAdjacency.get(entryMesh)?.has(candidateMesh)) score += 220;
    if (candidate.node?.online) score += 18;
    if (!candidate.estimated) score += 8;

    const distanceKm = _haversineKm(entry.lat, entry.lon, candidate.lat, candidate.lon);
    if (Number.isFinite(distanceKm)) {
      score -= Math.min(distanceKm, 250) * 0.8;
    }

    const ageMinutes = Math.min(Math.max(0, (Date.now() - _getNodeLastSeenMs(candidate.node)) / 60000), 720);
    score -= ageMinutes * 0.08;
    return score;
  }

  const inferTargets = entries
    .filter((entry) => {
      const hops = _toFiniteNumber(entry?.node?.hopsAway);
      return entry?.node?.online && hops != null && hops > 0;
    })
    .sort((left, right) => {
      const leftHop = _toFiniteNumber(left?.node?.hopsAway) ?? 999;
      const rightHop = _toFiniteNumber(right?.node?.hopsAway) ?? 999;
      if (leftHop !== rightHop) return leftHop - rightHop;
      return _getNodeLastSeenMs(right?.node) - _getNodeLastSeenMs(left?.node);
    });

  let adjacency = buildAdjacencyFromEdges();
  let connected = getConnectedMeshNums(adjacency);
  const resolving = new Set();

  function ensurePathToRoot(entry) {
    const entryMesh = String(entry.node.meshNum);
    if (!entryMesh || connected.has(entryMesh) || resolving.has(entryMesh)) return;
    resolving.add(entryMesh);

    let bestCandidate = null;
    let bestScore = -Infinity;
    for (const candidate of entries) {
      const score = scoreParent(entry, candidate, connected);
      if (score > bestScore) {
        bestScore = score;
        bestCandidate = candidate;
      }
    }
    if (!bestCandidate || !Number.isFinite(bestScore)) {
      resolving.delete(entryMesh);
      return;
    }

    const candidateMesh = String(bestCandidate.node.meshNum);
    if (!connected.has(candidateMesh)) {
      ensurePathToRoot(bestCandidate);
    }

    addEdge(entry, bestCandidate, {
      kind: "inferred",
      dashed: true,
      color: _getTopologyHopColor(entry.node?.hopsAway),
      snr: entry.node?.snr ?? null,
      priority: 10,
      score: bestScore,
    });
    adjacency = buildAdjacencyFromEdges();
    connected = getConnectedMeshNums(adjacency);
    resolving.delete(entryMesh);
  }

  for (const entry of inferTargets) {
    ensurePathToRoot(entry);
  }

  return {
    edges: [...edgesByKey.values()].sort((left, right) => {
      if (left.dashed !== right.dashed) return left.dashed ? -1 : 1;
      return (right.priority || 0) - (left.priority || 0);
    }),
    adjacency: buildAdjacencyFromEdges(),
  };
}

// Link color by SNR quality:
//   green  (#4caf50) Р Р†Р вЂљРІР‚Сњ strong  (Р Р†РІР‚В°РўС’ 5 dB)
//   yellow (#ffc107) Р Р†Р вЂљРІР‚Сњ medium  (0..5 dB)
//   orange (#ff7043) Р Р†Р вЂљРІР‚Сњ weak    (< 0 dB)
//   blue   (#4a9eff) Р Р†Р вЂљРІР‚Сњ no SNR data
// Inferred topology fallback:
//   dashed blue/purple/orange/yellow/green lines show estimated path segments by hop depth
function _renderMapLinks(renderEntries, topology = null) {
  const byMeshNum = new Map();
  for (const entry of (renderEntries || [])) {
    if (entry?.node?.meshNum != null) {
      byMeshNum.set(String(entry.node.meshNum), entry);
    }
  }

  const resolvedTopology = topology || _buildMapTopology(renderEntries);
  for (const edge of (resolvedTopology.edges || [])) {
    const fromEntry = byMeshNum.get(String(edge.from));
    const toEntry = byMeshNum.get(String(edge.to));
    if (!fromEntry || !toEntry) continue;
    const opacity = edge.dashed
      ? 0.5
      : (edge.snr == null ? 0.5 : Math.max(0.3, Math.min(0.9, 0.45 + edge.snr / 20)));
    const line = L.polyline(
      [[fromEntry.lat, fromEntry.lon], [toEntry.lat, toEntry.lon]],
      {
        color: edge.color || "#4a9eff",
        weight: edge.dashed ? 1.5 : 2,
        opacity,
        interactive: false,
        dashArray: edge.dashed ? "6 5" : undefined,
      },
    ).addTo(_mapInstance);
    _mapLines.push(line);
  }
}

async function loadStatus() {
  try {
    const status = await fetchJson("/api/status");
    renderDeviceStatus(status);
  } catch (error) {
    deviceStatus.className = "device-status offline";
    deviceStatusTitle.textContent = "Device not connected";
    deviceStatusText.textContent = `Status error: ${error.message}`;
    latestMeshtasticConnected = false;
    setWalletStatusRow();
  }
}

function renderDeviceStatus(status) {
  const mesh = status.meshtastic || {};
  const connected = Boolean(mesh.connected);
  const isConnecting = !connected && ["starting", "detecting", "connecting"].includes(String(mesh.mode || ""));
  const transport = String(mesh.transport || "serial");
  const address = mesh.address || mesh.selectedPort || "";
  const linkLabel = address ? `${transport} ${address}` : transport;
  const nodeName = String(mesh.name || "").trim();
  deviceStatus.className = `device-status ${connected ? "online" : (isConnecting ? "loading" : "offline")}`;
  deviceStatusTitle.textContent = connected
    ? `MeshCore${nodeName ? ` | ${nodeName}` : ""}`
    : (isConnecting ? "Connecting MeshCore" : "Radio not connected");
  deviceStatusText.textContent = connected
    ? `Linked via ${linkLabel}`
    : (
      isConnecting
        ? "Link check in progress..."
        : (mesh.error || (address ? `Saved ${transport} ${address} is unavailable.` : "Open SETUP to connect a radio."))
    );

  deviceStatus.style.cursor = "pointer";
  deviceStatus.title = "Open SETUP";
  const wasConnected = latestMeshtasticConnected;
  latestMeshtasticConnected = connected;
  latestMeshStatus = mesh;
  // On a fresh connection, pull channel slots so the CHANS list is ready.
  if (connected && !wasConnected && typeof meshCommand === "function") {
    meshCommand("get_channels").catch(() => {});
  }
  if (typeof setupOnStatus === "function") setupOnStatus(mesh);
  if (typeof status.meshAiReply === "boolean") {
    applyMeshAiReply(status.meshAiReply);
  }
  if (typeof status.walletTestMode === "boolean") {
    walletState.testMode = status.walletTestMode;
  }
  setWalletStatusRow();
  renderModelStatus(status.llm || {});
}

function renderModelStatus(llm) {
  latestLlmStatus = llm || {};
  const remote = String(llm.mode || "").startsWith("remote");
  // The host owns the model in remote mode: disable model management (the dropdown
  // is handled below). AI Settings (the gear) stays enabled - its generation params
  // and command-channel config still apply to remote inference.
  if (openModelManagerButton) {
    openModelManagerButton.disabled = remote;
  }
  const availableModels = llm.availableModels || [];
  const currentModel = llm.currentModel || llm.model || "";
  modelSelect.innerHTML = "";
  // In remote mode the host owns the model; show it as a single, non-switchable entry.
  const optionModels = remote ? (currentModel ? [currentModel] : []) : availableModels;
  optionModels.forEach((model) => {
    const option = document.createElement("option");
    option.value = model;
    option.textContent = model;
    option.selected = model === currentModel;
    modelSelect.appendChild(option);
  });
  currentSelectedModel = currentModel;
  aiSettingsCurrentModel.textContent = "Current model: " + (currentModel || "n/a");

  if (remote) {
    modelSelect.disabled = true;
    modelStatusText.textContent = llm.connected
      ? `Remote inference - ${currentModel || "n/a"}`
      : `Remote unreachable - ${llm.error || llm.health?.error || "no connection"}`;
    if (typeof setupInferenceLive === "function") setupInferenceLive();
    return;
  }

  if (llm.switching) {
    modelStatusText.textContent = `Switching to ${currentModel}...`;
    modelSelect.disabled = true;
    return;
  }

  modelSelect.disabled = false;
  modelStatusText.textContent = llm.connected
    ? `Current model: ${currentModel}`
    : (llm.error || llm.health?.error || `Model: ${currentModel || "n/a"}`);
  if (setupState.open && setupState.group === "inference") setupRenderInference();
}

function rebuildLocalHistory(messages) {
  const userMsgs = messages.filter(
    (m) => String(m.sender || "") === "local-ui-user" && String(m.recipient || "") === "local-ai"
  );
  const aiMsgs = messages.filter(
    (m) => String(m.sender || "") === "local-ai" && String(m.recipient || "") === "local-ui-user"
  );
  const history = [];
  userMsgs.forEach((userMsg, i) => {
    const aiMsg = aiMsgs[i];
    history.push({
      userText: String(userMsg.text || ""),
      replyText: aiMsg ? String(aiMsg.text || "") : null,
    });
  });
  return history;
}

async function loadMessages() {
  if (chatState.mode === CHAT_MODE_AI) {
    renderChatEmpty("Loading chat history...");
  }
  try {
    latestMessages = await fetchJson("/api/messages");
    if (!Array.isArray(latestMessages)) {
      latestMessages = [];
    }
    latestMessages = latestMessages.slice(-300);
    chatState.localHistory = rebuildLocalHistory(latestMessages);
    renderChatPeerList();
    renderChatChannelList();
    if (chatState.mode === CHAT_MODE_DM) {
      renderDmChat();
    } else if (chatState.mode === CHAT_MODE_CHANS) {
      renderChannelChat();
    } else if (chatState.mode === CHAT_MODE_AI) {
      renderLocalChatFromState();
    }
  } catch (error) {
    appendLog({ sender: "system", recipient: "-", text: error.message, transport: "system" });
  }
}

async function loadLogs() {
  try {
    latestLogs = await fetchJson("/api/logs");
    if (!Array.isArray(latestLogs)) {
      latestLogs = [];
    }
    latestLogs = latestLogs.slice(-300);
    logBox.innerHTML = "";
    latestLogs.forEach(appendLog);
  } catch (error) {
    appendLog({ sender: "system", recipient: "-", text: error.message, transport: "system" });
  }
}

async function loadNodes() {
  try {
    const payload = await fetchJson("/api/nodes");
    renderNodes(payload.nodes || []);
  } catch (error) {
    latestNodes = [];
    syncNodeSelectors();
    nodesList.innerHTML = `<div class="node-empty">${error.message}</div>`;
    if (chatState.mode === CHAT_MODE_DM) {
      renderDmChat();
    } else if (chatState.mode === CHAT_MODE_CHANS) {
      renderChannelChat();
    }
  }
}

modelSelect.addEventListener("change", async () => {
  const model = modelSelect.value;
  if (!model || model === currentSelectedModel) {
    return;
  }
  modelSelect.disabled = true;
  modelStatusText.textContent = `Switching to ${model}...`;
  try {
    await fetchJson("/api/models/select", {
      method: "POST",
      body: JSON.stringify({ model }),
    });
    await loadStatus();
  } catch (error) {
    modelStatusText.textContent = `Switch failed: ${error.message}`;
    modelSelect.disabled = false;
  }
});

chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const text = chatText.value.trim();
  if (!text) {
    return;
  }
  if (chatState.mode === CHAT_MODE_DM) {
    const destinationId = String(chatState.selectedPeer || chatPeerSelect?.value || "").trim();
    if (!destinationId) {
      renderChatEmpty("Select a node to send DM.");
      return;
    }
    try {
      await fetchJson("/api/mesh/send", {
        method: "POST",
        body: JSON.stringify({ destinationId, text }),
      });
      chatText.value = "";
      await loadMessages();
    } catch (error) {
      appendLog({ sender: "system", recipient: destinationId, text: error.message, transport: "system" });
      renderDmChat();
    }
    return;
  }
  if (chatState.mode === CHAT_MODE_CHANS) {
    const channel = getSelectedChatChannel();
    if (!channel) {
      renderChatEmpty("Select or create a channel.");
      return;
    }
    try {
      await fetchJson("/api/mesh/send", {
        method: "POST",
        body: JSON.stringify({ destinationId: "^all", channelIndex: channel.channelIndex, text }),
      });
      chatText.value = "";
      await loadMessages();
    } catch (error) {
      appendLog({ sender: "system", recipient: `ch${channel.channelIndex}`, text: error.message, transport: "system" });
      renderChannelChat();
    }
    return;
  }

  chatText.value = "";
  renderPendingLocalChat(text);
  try {
    const result = await fetchJson("/api/chat", {
      method: "POST",
      body: JSON.stringify({ peerId: LOCAL_CHAT_PEER_ID, text }),
    });
    renderLocalChat(text, result.reply || "No reply");
  } catch (error) {
    renderLocalChat(text, `Error: ${error.message}`);
    appendLog({ sender: "system", recipient: "-", text: error.message, transport: "system" });
  }
});

clearLogButton.addEventListener("click", async () => {
  if (!confirm("Clear the event log? This cannot be undone.")) return;
  clearLogButton.disabled = true;
  try {
    await fetchJson("/api/logs/clear", {
      method: "POST",
    });
    latestLogs = [];
    logBox.innerHTML = "";
  } catch (error) {
    appendLog({ sender: "system", recipient: "-", text: error.message, transport: "system" });
  } finally {
    clearLogButton.disabled = false;
  }
});

copyAllLogButton.addEventListener("click", () => {
  const lines = [...logBox.querySelectorAll(".log-item")].map(item => {
    const meta = item.querySelector(".log-meta")?.textContent || "";
    const text = item.querySelector(".log-text")?.textContent || "";
    return `${meta}\n${text}`;
  });
  copyWithFeedback(copyAllLogButton, lines.join("\n\n"));
});

if (clearChatButton) {
  clearChatButton.addEventListener("click", async () => {
    if (!confirm("Clear this chat? This cannot be undone.")) return;
    clearChatButton.disabled = true;
    try {
      await clearActiveChat();
    } catch (error) {
      appendLog({ sender: "system", recipient: "-", text: error.message, transport: "system" });
    } finally {
      clearChatButton.disabled = false;
    }
  });
}

chatText.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && chatCommandMenu && !chatCommandMenu.hidden) {
    event.preventDefault();
    setChatCommandMenuOpen(false);
    return;
  }
  if (event.key === "Escape") {
    closeNodeCheckPicker();
  }
  if (event.key === "Enter" && !event.shiftKey) {
    // Mesh (DM/CHANS) messages can't be unsent — require Ctrl/Cmd+Enter; AI keeps Enter-to-send
    if (chatState.mode !== CHAT_MODE_AI && !(event.ctrlKey || event.metaKey)) {
      return;
    }
    event.preventDefault();
    chatForm.requestSubmit();
  }
});

if (chatCommandButton) {
  chatCommandButton.addEventListener("click", (event) => {
    event.preventDefault();
    setChatCommandMenuOpen(chatCommandMenu?.hidden);
  });
}

chatCommandItems.forEach((item) => {
  item.addEventListener("click", () => {
    applyAiSlashCommand(item.dataset.chatCommand || "");
  });
});

document.addEventListener("click", (event) => {
  if (!chatCommandMenu || chatCommandMenu.hidden) {
    return;
  }
  const target = event.target;
  if (!(target instanceof Node)) {
    return;
  }
  const insideLauncher = chatCommandMenu.contains(target) || chatCommandButton?.contains(target);
  if (!insideLauncher) {
    setChatCommandMenuOpen(false);
  }
});

document.addEventListener("click", (event) => {
  const picker = document.getElementById("nodecheckPicker");
  if (!picker || picker.hidden) return;
  const launcher = chatCommandLauncher;
  if (launcher && !launcher.contains(event.target)) {
    closeNodeCheckPicker();
  }
});

if (chatModeAiButton) {
  chatModeAiButton.addEventListener("click", () => {
    setChatMode(CHAT_MODE_AI, { focusInput: true });
  });
}

if (chatModeDmButton) {
  chatModeDmButton.addEventListener("click", () => {
    setChatMode(CHAT_MODE_DM, { focusInput: true });
    // Clear unread for currently selected peer when entering DM mode
    if (chatState.selectedPeer) {
      unreadPeers.delete(chatState.selectedPeer);
      renderChatPeerList();
    }
    updateDmTabUnreadGlow();
    refreshActiveDmChat();
  });
}

if (chatModeChansButton) {
  chatModeChansButton.addEventListener("click", () => {
    setChatMode(CHAT_MODE_CHANS, { focusInput: true });
  });
}

if (chatPeerSelect) {
  chatPeerSelect.addEventListener("change", () => {
    setChatPeerSelection(chatPeerSelect.value, { syncWallet: true, persist: true });
    if (chatState.mode === CHAT_MODE_DM) {
      refreshActiveDmChat();
    }
  });
}

if (chatChannelSelect) {
  chatChannelSelect.addEventListener("change", () => {
    setChatChannelSelection(chatChannelSelect.value, { persist: true });
    if (chatState.mode === CHAT_MODE_CHANS) {
      renderChannelChat();
    }
  });
}

if (chatPeerTrigger) {
  chatPeerTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const listEl = document.getElementById("chatPeerList");
    if (listEl) listEl.hidden = !listEl.hidden;
    if (chatChannelList) chatChannelList.hidden = true;
  });
}

if (chatPeerLocateButton) {
  chatPeerLocateButton.addEventListener("click", () => {
    const peerId = chatState.selectedPeer;
    if (!peerId) return;
    openNodesMap();
    setTimeout(() => {
      const pos = _renderedPosById.get(peerId);
      if (pos && _mapInstance) {
        _mapInstance.setView([pos.lat, pos.lon], 14, { animate: true });
      }
    }, 400);
  });
}

if (chatPeerInfoButton) {
  chatPeerInfoButton.addEventListener("click", () => {
    const peerId = chatState.selectedPeer;
    if (!peerId) return;
    openNodeModal(peerId);
  });
}

const chatPeerTriggerUnread = document.getElementById("chatPeerTriggerUnread");
if (chatPeerTriggerUnread) {
  chatPeerTriggerUnread.addEventListener("click", (e) => {
    e.stopPropagation();
    const peerId = lastUnreadPeer || [...unreadPeers][unreadPeers.size - 1];
    if (!peerId) return;
    unreadPeers.delete(peerId);
    updateDmTabUnreadGlow();
    setChatPeerSelection(peerId, { syncWallet: true, persist: true });
    const listEl = document.getElementById("chatPeerList");
    if (listEl) listEl.hidden = true;
    renderChatPeerList();
    if (chatState.mode === CHAT_MODE_DM) {
      refreshActiveDmChat();
    }
  });
}

if (chatChannelTrigger) {
  chatChannelTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    if (chatChannelList) {
      chatChannelList.hidden = !chatChannelList.hidden;
    }
    const peerList = document.getElementById("chatPeerList");
    if (peerList) peerList.hidden = true;
  });
}


if (chatPeerCashuButton) {
  chatPeerCashuButton.addEventListener("click", () => {
    if (!chatState.selectedPeer) {
      return;
    }
    openCashuSendForNode(chatState.selectedPeer);
  });
}

chatPeerFilterButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const filterName = button.dataset.chatPeerFilter;
    if (!filterName || !(filterName in chatState.peerFilters)) {
      return;
    }
    chatState.peerFilters[filterName] = !chatState.peerFilters[filterName];
    renderChatPeerFilters();
    renderChatPeerList();
  });
});

document.addEventListener("click", (e) => {
  if (!chatPeerDropdown?.contains(e.target)) {
    const listEl = document.getElementById("chatPeerList");
    if (listEl) listEl.hidden = true;
  }
  if (!chatChannelDropdown?.contains(e.target) && chatChannelList) {
    chatChannelList.hidden = true;
  }
});

renderChatPeerFilters();
persistChatChannels(chatState.channels);
populateChatChannelSelect();
ensureSelectedChatChannel();
renderChatChannelList();

openModelManagerButton.addEventListener("click", openModelManager);
openAiSettingsButton.addEventListener("click", openAiSettingsModal);
openHelpButton.addEventListener("click", openHelpModal);
openWalletButton.addEventListener("click", openWalletModal);
helpDonateButton.addEventListener("click", () => {
  showingDonateView = true;
  renderHelpView();
});
helpDonateView.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-address]");
  if (!button) {
    return;
  }
  const address = button.getAttribute("data-copy-address") || "";
  if (!address) {
    return;
  }
  const originalLabel = button.getAttribute("aria-label") || "Copy address";
  try {
    await copyText(address);
    button.classList.add("copied");
    button.setAttribute("aria-label", "Copied");
    setTimeout(() => {
      button.classList.remove("copied");
      button.setAttribute("aria-label", originalLabel);
    }, 1200);
  } catch (error) {
    button.setAttribute("aria-label", "Copy failed");
    setTimeout(() => {
      button.setAttribute("aria-label", originalLabel);
    }, 1200);
  }
});
walletViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const viewName = button.getAttribute("data-wallet-view") || "home";
    setWalletView(viewName);
  });
});

if (receiveBtcTab) {
  receiveBtcTab.addEventListener("click", () => {
    receiveBtcTab.classList.add("is-active");
    receiveCashuTab.classList.remove("is-active");
    receiveBtcPanel.classList.remove("hidden");
    receiveCashuPanel.classList.add("hidden");
  });
}
if (receiveCashuTab) {
  receiveCashuTab.addEventListener("click", () => {
    receiveCashuTab.classList.add("is-active");
    receiveBtcTab.classList.remove("is-active");
    receiveCashuPanel.classList.remove("hidden");
    receiveBtcPanel.classList.add("hidden");
  });
}

// Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ Send tab: Cashu / Bitcoin switcher Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ
async function loadSendBtcPanel() {
  if (!walletState.walletConfigured) {
    if (sendBtcNoWallet) sendBtcNoWallet.hidden = false;
    if (sendBtcContent) sendBtcContent.hidden = true;
    return;
  }
  if (sendBtcNoWallet) sendBtcNoWallet.hidden = true;
  if (sendBtcContent) sendBtcContent.hidden = false;
  if (sendBtcBalance) sendBtcBalance.textContent = "Loading...";
  try {
    const bal = await fetchJson("/api/wallet/balance");
    if (sendBtcBalance) {
      sendBtcBalance.textContent = formatSats(bal.confirmed) +
        (bal.unconfirmed ? ` (+${formatSats(bal.unconfirmed)} unconfirmed)` : "");
    }
  } catch { if (sendBtcBalance) sendBtcBalance.textContent = "-"; }
  try {
    const fees = await fetchJson("/api/wallet/fees");
    if (sendBtcFeeRate && !sendBtcFeeRate.value) sendBtcFeeRate.value = fees.halfHourFee || 5;
  } catch { /* ignore */ }
}

if (sendBtcTab) {
  sendBtcTab.addEventListener("click", () => {
    sendBtcTab.classList.add("is-active");
    if (sendCashuTab) sendCashuTab.classList.remove("is-active");
    if (sendBtcPanel) sendBtcPanel.hidden = false;
    if (sendCashuPanel) sendCashuPanel.hidden = true;
    loadSendBtcPanel();
  });
}
if (sendCashuTab) {
  sendCashuTab.addEventListener("click", () => {
    sendCashuTab.classList.add("is-active");
    if (sendBtcTab) sendBtcTab.classList.remove("is-active");
    if (sendCashuPanel) sendCashuPanel.hidden = false;
    if (sendBtcPanel) sendBtcPanel.hidden = true;
  });
}

if (sendBtcForm) {
  sendBtcForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const toAddress = sendBtcAddress ? sendBtcAddress.value.trim() : "";
    const amountSats = Number(sendBtcAmount ? sendBtcAmount.value : 0);
    const feeRate = Number(sendBtcFeeRate ? sendBtcFeeRate.value : 5) || 5;
    if (!toAddress) { if (sendBtcStatus) sendBtcStatus.textContent = "Enter a Bitcoin address"; return; }
    if (!amountSats || amountSats < 546) { if (sendBtcStatus) sendBtcStatus.textContent = "Minimum amount is 546 sats"; return; }
    if (sendBtcStatus) sendBtcStatus.textContent = "Broadcasting...";
    try {
      const data = await fetchJson("/api/wallet/send", {
        method: "POST",
        body: JSON.stringify({ toAddress, amountSats, feeRate }),
      });
      const explorer = walletState.testMode ? "https://mutinynet.com/tx/" : "https://mempool.space/tx/";
      if (sendBtcStatus) sendBtcStatus.innerHTML = `Sent! <a href="${explorer}${data.txid}" target="_blank" rel="noopener">${data.txid.slice(0, 12)}...</a> | fee: ${formatSats(data.fee)}`;
      if (sendBtcAddress) sendBtcAddress.value = "";
      if (sendBtcAmount) sendBtcAmount.value = "";
      setTimeout(loadSendBtcPanel, 2000);
    } catch (err) { if (sendBtcStatus) sendBtcStatus.textContent = err.message; }
  });
}

if (sendBtcLnForm) {
  sendBtcLnForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const invoice = sendBtcLnInvoice ? sendBtcLnInvoice.value.trim() : "";
    if (!invoice) { if (sendBtcLnStatus) sendBtcLnStatus.textContent = "Enter a Lightning invoice"; return; }
    const tm = walletState.testMode;
    const lower = invoice.toLowerCase();
    if (tm && !lower.startsWith("lntbs")) { if (sendBtcLnStatus) sendBtcLnStatus.textContent = "Test mode: use an lntbs... (signet) invoice"; return; }
    if (!tm && !lower.startsWith("lnbc")) { if (sendBtcLnStatus) sendBtcLnStatus.textContent = "Use an lnbc... (mainnet) invoice"; return; }
    if (sendBtcLnStatus) sendBtcLnStatus.textContent = "Creating swap...";
    try {
      const data = await fetchJson("/api/wallet/pay-lightning", {
        method: "POST",
        body: JSON.stringify({ invoice }),
      });
      if (sendBtcLnStatus) sendBtcLnStatus.textContent = `Swap created | ${formatSats(data.expectedAmount)} BTC sent | waiting for Lightning payment...`;
      if (sendBtcLnInvoice) sendBtcLnInvoice.value = "";
      setTimeout(loadSendBtcPanel, 2000);
    } catch (err) { if (sendBtcLnStatus) sendBtcLnStatus.textContent = err.message; }
  });
}
// Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ End Send BTC Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ

walletCopyReceiveIdButton.addEventListener("click", async () => {
  if (!walletReceiveId.value) return;
  try {
    await copyText(walletReceiveId.value);
    walletCopyReceiveIdButton.classList.add("copied");
    setTimeout(() => walletCopyReceiveIdButton.classList.remove("copied"), 1200);
  } catch { /* silent */ }
});

walletPreferredUnitSelect.addEventListener("change", () => {
  walletState.settings.preferredUnit = walletPreferredUnitSelect.value;
  updateWalletBalanceDisplay();
  renderWalletHistory();
  renderWalletHomeActivity();
});

if (walletDefaultTransportSelect) {
  walletDefaultTransportSelect.addEventListener("change", () => {
    walletState.settings.defaultTransport = walletDefaultTransportSelect.value;
    if (walletTransportSelect) walletTransportSelect.value = walletState.settings.defaultTransport;
  });
}

walletRefreshBalance.addEventListener("click", () => {
  loadWalletBalance();
  loadCashuState();
});

// Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ Cashu event handlers Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ

cashuSetMintButton.addEventListener("click", async () => {
  const url = cashuMintUrlInput.value.trim();
  if (!url) { cashuMintStatus.textContent = "Enter a mint URL."; return; }
  cashuSetMintButton.disabled = true;
  cashuMintStatus.textContent = "Connecting to mint...";
  try {
    const data = await fetchJson("/api/cashu/mint", { method: "POST", body: JSON.stringify({ mintUrl: url }) });
    cashuState.configured = true;
    cashuState.mintUrl = data.mintUrl;
    cashuMintStatus.textContent = "Connected!";
    if (cashuMintInfo) {
      cashuMintInfo.textContent = data.name ? `${data.name}${data.description ? " - " + data.description : ""}` : data.mintUrl;
      cashuMintInfo.hidden = false;
    }
    applyCashuState();
  } catch (e) {
    cashuMintStatus.textContent = e.message;
  } finally {
    cashuSetMintButton.disabled = false;
  }
});

cashuCreateInvoiceButton.addEventListener("click", async () => {
  const amount = Number(cashuInvoiceAmount.value);
  if (!amount || amount <= 0) { cashuInvoiceStatus.textContent = "Enter amount."; return; }
  if (!cashuState.configured) { cashuInvoiceStatus.textContent = "Set a mint first."; return; }
  cashuCreateInvoiceButton.disabled = true;
  cashuInvoiceStatus.textContent = "Creating invoice...";
  try {
    const data = await fetchJson("/api/cashu/invoice", { method: "POST", body: JSON.stringify({ amount }) });
    cashuState.currentInvoiceHash = data.hash;
    cashuInvoicePr.value = data.pr;
    cashuInvoiceQr.src = data.qr;
    cashuInvoiceBlock.hidden = false;
    cashuInvoiceStatus.textContent = `Invoice for ${amount} sats - pay with Lightning`;
    // Add to pending
    cashuState.pendingInvoices = cashuState.pendingInvoices || [];
    cashuState.pendingInvoices.push({ hash: data.hash, amount, pr: data.pr, createdAt: new Date().toISOString() });
    renderCashuPending();
  } catch (e) {
    cashuInvoiceStatus.textContent = e.message;
  } finally {
    cashuCreateInvoiceButton.disabled = false;
  }
});

cashuCheckInvoiceButton.addEventListener("click", async () => {
  const hash = cashuState.currentInvoiceHash;
  if (!hash) { cashuCheckStatus.textContent = "No invoice to check."; return; }
  cashuCheckInvoiceButton.disabled = true;
  cashuCheckStatus.textContent = "Checking...";
  try {
    const data = await fetchJson("/api/cashu/check", { method: "POST", body: JSON.stringify({ hash }) });
    await loadCashuState();
    cashuCheckStatus.textContent = `Paid! +${data.amount} sats. Balance: ${data.balance} sats`;
    cashuInvoiceBlock.hidden = true;
    cashuState.currentInvoiceHash = null;
    cashuState.pendingInvoices = cashuState.pendingInvoices.filter((i) => i.hash !== hash);
    renderCashuPending();
    applyCashuState();
  } catch (e) {
    cashuCheckStatus.textContent = `Not paid yet: ${e.message}`;
  } finally {
    cashuCheckInvoiceButton.disabled = false;
  }
});

cashuCopyInvoiceButton.addEventListener("click", async () => {
  try { await copyText(cashuInvoicePr.value); cashuInvoiceStatus.textContent = "Copied!"; } catch { /* silent */ }
});

if (cashuPendingList) {
  cashuPendingList.addEventListener("click", async (e) => {
    const btn = e.target.closest(".cashu-check-btn");
    if (!btn) return;
    const hash = btn.getAttribute("data-hash");
    btn.disabled = true;
    btn.textContent = "...";
    try {
      const data = await fetchJson("/api/cashu/check", { method: "POST", body: JSON.stringify({ hash }) });
      await loadCashuState();
      cashuState.pendingInvoices = cashuState.pendingInvoices.filter((i) => i.hash !== hash);
      renderCashuPending();
      applyCashuState();
    } catch (e) {
      btn.textContent = "Check";
      btn.disabled = false;
      cashuInvoiceStatus.textContent = `Not paid: ${e.message}`;
    }
  });
}

walletSendForm.removeEventListener("submit", null);
walletSendForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const options = clampCashuSendOptionIndex();
  const current = options[cashuState.sendOptionIndex] || null;
  const amount = Number(current?.amount || 0);
  const recipient = walletRecipientInput.value.trim();
  const memo = walletMemoInput.value.trim();
  const submitBtn = walletSendForm.querySelector("button[type=submit]");
  if (!amount || amount <= 0 || !current) { walletSendStatus.textContent = "Choose a ready off-grid amount with the slider."; return; }
  if (!recipient) { walletSendStatus.textContent = "Select recipient node."; return; }
  walletSendStatus.textContent = "Preparing off-grid token...";
  if (submitBtn) submitBtn.disabled = true;
  try {
    const data = await fetchJson("/api/cashu/send", {
      method: "POST",
      body: JSON.stringify({ amount, selection: current.entries, peer: recipient, memo, exactOfflineOnly: true }),
    });
    const issuedToken = normalizeIncomingCashuTokenInput(data.token);
    if (!issuedToken) {
      throw new Error("Mint returned an empty token.");
    }
    applyCashuPayloadData(data);
    applyCashuState();
    cashuSendTokenOutput.textContent = issuedToken;
    cashuSendTokenBlock.hidden = false;
    let historyStatus = "Sent via MeshCore";
    try {
      await fetchJson("/api/mesh/send", {
        method: "POST",
        body: JSON.stringify({ destinationId: recipient, text: `[${amount} sats] ${issuedToken}` }),
      });
      walletSendStatus.textContent = `Sent ${amount} sats to ${recipient} via MeshCore`;
    } catch (meshErr) {
      historyStatus = "Token created; mesh delivery failed";
      walletSendStatus.textContent = `Token created, but MeshCore delivery failed (${meshErr?.message || "unknown"}). Copy token and resend manually.`;
    }
    renderCashuSendSelection();
    walletMemoInput.value = "";
    walletState.history.unshift({
      id: `cashu-send-${Date.now()}`,
      direction: "Sent",
      peer: recipient,
      amount,
      unit: "sats",
      status: historyStatus,
      timestamp: new Date().toLocaleString(),
    });
    renderWalletHistory();
  } catch (e) {
    walletSendStatus.textContent = e.message;
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }
});

cashuCopyTokenButton.addEventListener("click", async () => {
  try { await copyText(cashuSendTokenOutput.textContent); cashuCopyTokenButton.textContent = "Copied!"; setTimeout(() => { cashuCopyTokenButton.textContent = "Copy"; }, 1200); } catch { /* silent */ }
});

cashuMeltForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const pr = cashuMeltInput.value.trim();
  const submitBtn = cashuMeltForm.querySelector("button[type=submit]");
  if (!pr) { cashuMeltStatus.textContent = "Paste a Lightning invoice."; return; }
  const prLower = pr.toLowerCase();
  if (walletState.testMode && prLower.startsWith("lnbc")) {
    cashuMeltStatus.textContent = "Test mode uses mutinynet (signet). Use a signet invoice (starts with lntbs).";
    return;
  }
  if (!walletState.testMode && prLower.startsWith("lntbs")) {
    cashuMeltStatus.textContent = "This looks like a signet invoice. For mainnet, use an invoice starting with lnbc.";
    return;
  }
  cashuMeltStatus.textContent = "Paying...";
  if (submitBtn) submitBtn.disabled = true;
  try {
    const data = await fetchJson("/api/cashu/melt", { method: "POST", body: JSON.stringify({ pr }) });
    await loadCashuState();
    cashuMeltStatus.textContent = data.isPaid ? `Paid ${data.amount} sats (fee: ${data.fee})` : "Payment failed";
    cashuMeltInput.value = "";
    applyCashuState();
  } catch (e) {
    cashuMeltStatus.textContent = e.message;
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }
});

cashuReceiveForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const token = normalizeIncomingCashuTokenInput(cashuReceiveInput.value);
  if (!token) { cashuReceiveStatus.textContent = "Paste a cashuA... token."; return; }
  cashuReceiveStatus.textContent = "Redeeming...";
  try {
    const data = await fetchJson("/api/cashu/receive", { method: "POST", body: JSON.stringify({ token }) });
    await loadCashuState();
    cashuReceiveStatus.textContent = data.unverified
      ? `Accepted ${data.amount} sats offline (unverified; redeem online to confirm)`
      : `Received ${data.amount} sats! Balance: ${data.balance} sats`;
    cashuReceiveInput.value = "";
    applyCashuState();
    const recvStatus = data.unverified ? "Unverified (offline)" : "Confirmed";
    walletState.history.unshift({ id: `cashu-recv-${Date.now()}`, direction: "Received", peer: "Cashu token", amount: data.amount, unit: "sats", status: recvStatus, timestamp: new Date().toLocaleString() });
    renderWalletHistory();
  } catch (e) {
    cashuReceiveStatus.textContent = e.message;
  }
});

// Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ End Cashu event handlers Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ

// Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ Swap panel handlers Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ

function renderActiveSwaps(swaps) {
  if (!activeSwapsCard || !activeSwapsList) return;
  const active = (swaps || []).filter((s) => !["done", "failed", "expired"].includes(s.status));
  activeSwapsCard.hidden = active.length === 0;
  if (active.length === 0) return;
  activeSwapsList.innerHTML = "";
  active.forEach((s) => {
    const el = document.createElement("div");
    el.className = "wallet-pending-item";
    const dir = s.type === "btc-to-cashu" ? "BTC -> Cashu" : "Cashu -> BTC";
    const amt = s.amount ? `${s.amount} sats` : "";
    el.innerHTML = `<span class="wallet-pending-label">${dir} ${amt}</span><span class="wallet-pending-status">${s.status}</span>`;
    activeSwapsList.appendChild(el);
  });
}

if (clearSwapsButton) {
  clearSwapsButton.addEventListener("click", async () => {
    try {
      await fetchJson("/api/swap/clear", { method: "POST" });
      renderActiveSwaps([]);
    } catch { /* ignore */ }
  });
}

// Settings mint button Р Р†Р вЂљРІР‚Сњ same API as Fund panel
// External wallet clients
const walletExternalClientsToggle = document.getElementById("walletExternalClientsToggle");
const walletExternalClientsCard = document.getElementById("walletExternalClientsCard");
const walletClientNodeSelect = document.getElementById("walletClientNodeSelect");
const walletClientAddButton = document.getElementById("walletClientAddButton");
const walletClientList = document.getElementById("walletClientList");
const walletClientStatus = document.getElementById("walletClientStatus");

let walletClients = [];
let walletClientsEnabled = false;

function renderWalletClients() {
  if (!walletClientList) return;
  walletClientList.innerHTML = "";
  if (!walletClients.length) {
    walletClientList.innerHTML = '<div class="wallet-hint">No approved clients.</div>';
    return;
  }
  const sortedClients = walletClients.slice().sort((a, b) => {
    const nodeA = latestNodes.find((n) => getNodeAddress(n) === a);
    const nodeB = latestNodes.find((n) => getNodeAddress(n) === b);
    if (nodeA && nodeB) return compareNodesForUi(nodeA, nodeB);
    if (nodeA) return -1;
    if (nodeB) return 1;
    return String(a).localeCompare(String(b));
  });
  sortedClients.forEach((nodeId) => {
    const node = latestNodes.find((n) => getNodeAddress(n) === nodeId);
    const label = node
      ? `${isFavoriteNode(node) ? "Favorite - " : ""}${node.shortName || node.longName || nodeId} (${nodeId})`
      : nodeId;
    const row = document.createElement("div");
    row.className = `wallet-client-row${node && isFavoriteNode(node) ? " is-favorite" : ""}`;
    row.innerHTML = `<span class="wallet-client-label">${label}</span><button type="button" class="wallet-inline-action wallet-client-remove" data-id="${nodeId}">Remove</button>`;
    row.querySelector(".wallet-client-remove").addEventListener("click", async () => {
      try {
        const data = await fetchJson("/api/wallet-clients/remove", { method: "POST", body: JSON.stringify({ nodeId }) });
        walletClients = data.clients;
        renderWalletClients();
      } catch (e) {
        if (walletClientStatus) walletClientStatus.textContent = e.message;
      }
    });
    walletClientList.appendChild(row);
  });
}

function syncWalletClientNodeSelect() {
  if (!walletClientNodeSelect) return;
  const current = walletClientNodeSelect.value;
  walletClientNodeSelect.innerHTML = '<option value="">Select a node...</option>';
  getSelectableNodes().forEach((n) => {
    const id = n.userId || n.id;
    if (!id || walletClients.includes(id)) return;
    const label = `${isFavoriteNode(n) ? "Favorite - " : ""}${n.shortName || n.longName || id} (${id})`;
    const opt = document.createElement("option");
    opt.value = id;
    opt.textContent = label;
    walletClientNodeSelect.appendChild(opt);
  });
  if (current) walletClientNodeSelect.value = current;
}

function applyWalletClientsEnabled() {
  if (walletExternalClientsToggle) walletExternalClientsToggle.checked = walletClientsEnabled;
  if (walletExternalClientsCard) walletExternalClientsCard.hidden = !walletClientsEnabled;
}

async function loadWalletClients() {
  try {
    const data = await fetchJson("/api/wallet-clients");
    walletClients = data.clients || [];
    walletClientsEnabled = Boolean(data.enabled);
    applyWalletClientsEnabled();
    renderWalletClients();
    syncWalletClientNodeSelect();
  } catch { /* ignore */ }
}

if (walletExternalClientsToggle) {
  walletExternalClientsToggle.addEventListener("change", async () => {
    const enabled = walletExternalClientsToggle.checked;
    try {
      await fetchJson("/api/wallet-clients/enabled", { method: "POST", body: JSON.stringify({ enabled }) });
      walletClientsEnabled = enabled;
      applyWalletClientsEnabled();
    } catch (e) {
      walletExternalClientsToggle.checked = !enabled;
    }
  });
}

if (walletClientAddButton) {
  walletClientAddButton.addEventListener("click", async () => {
    const nodeId = walletClientNodeSelect?.value;
    if (!nodeId) { if (walletClientStatus) walletClientStatus.textContent = "Select a node first."; return; }
    try {
      const data = await fetchJson("/api/wallet-clients/add", { method: "POST", body: JSON.stringify({ nodeId }) });
      walletClients = data.clients;
      renderWalletClients();
      syncWalletClientNodeSelect();
      if (walletClientStatus) walletClientStatus.textContent = "";
    } catch (e) {
      if (walletClientStatus) walletClientStatus.textContent = e.message;
    }
  });
}

if (settingsSetMintButton) {
  settingsSetMintButton.addEventListener("click", async () => {
    const url = (settingsMintUrlInput?.value || "").trim();
    if (!url) { if (settingsMintStatus) settingsMintStatus.textContent = "Enter a mint URL."; return; }
    settingsSetMintButton.disabled = true;
    if (settingsMintStatus) settingsMintStatus.textContent = "Connecting to mint...";
    try {
      const data = await fetchJson("/api/cashu/mint", { method: "POST", body: JSON.stringify({ mintUrl: url }) });
      cashuState.configured = true;
      cashuState.mintUrl = data.mintUrl;
      if (settingsMintStatus) settingsMintStatus.textContent = "Connected!";
      // keep Fund panel input in sync
      if (cashuMintUrlInput) cashuMintUrlInput.value = url;
      applyCashuState();
    } catch (e) {
      if (settingsMintStatus) settingsMintStatus.textContent = e.message;
    } finally {
      settingsSetMintButton.disabled = false;
    }
  });
}

// Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ Swap panel Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ

function clearSwapLnPoll() {
  if (swapLnPollInterval !== null) {
    clearInterval(swapLnPollInterval);
    swapLnPollInterval = null;
  }
}

function startSwapLnPoll(hash) {
  clearSwapLnPoll();
  let attempts = 0;
  const MAX_ATTEMPTS = 120; // 120 Р вЂњРІР‚вЂќ 5s = 10 min
  swapLnPollInterval = setInterval(async () => {
    attempts++;
    if (attempts > MAX_ATTEMPTS) {
      clearSwapLnPoll();
      if (swapLnCheckStatus) swapLnCheckStatus.textContent = "Invoice expired after 10 min. Create a new one.";
      if (swapLnBlock) swapLnBlock.hidden = true;
      return;
    }
    try {
      const data = await fetchJson("/api/cashu/check", { method: "POST", body: JSON.stringify({ hash }) });
      clearSwapLnPoll();
      cashuState.balance = data.balance;
      cashuState.currentInvoiceHash = null;
      cashuState.pendingInvoices = (cashuState.pendingInvoices || []).filter((i) => i.hash !== hash);
      if (swapLnCheckStatus) swapLnCheckStatus.textContent = `Paid! +${data.amount} sats - balance updated.`;
      if (swapLnBlock) swapLnBlock.hidden = true;
      if (swapLnAmount) swapLnAmount.value = "";
      if (swapLnStatus) swapLnStatus.textContent = "";
      applyCashuState();
    } catch {
      // 402 = not paid yet, keep polling silently
    }
  }, 5000);
}

function showSwapLnInvoice(pr, qr, hash, amount) {
  cashuState.currentInvoiceHash = hash;
  cashuState.pendingInvoices = cashuState.pendingInvoices || [];
  if (!cashuState.pendingInvoices.find((i) => i.hash === hash)) {
    cashuState.pendingInvoices.push({ hash, amount, pr, createdAt: new Date().toISOString() });
  }
  if (swapLnPr) swapLnPr.value = pr;
  if (swapLnQr && qr) swapLnQr.src = qr;
  if (swapLnBlock) swapLnBlock.hidden = false;
  if (swapLnCheckStatus) swapLnCheckStatus.textContent = "Waiting for payment... (auto-checking every 5s)";
  startSwapLnPoll(hash);
}

if (swapLnInvoiceButton) {
  swapLnInvoiceButton.addEventListener("click", async () => {
    const amount = Number(swapLnAmount?.value);
    if (!amount || amount <= 0) { if (swapLnStatus) swapLnStatus.textContent = "Enter an amount."; return; }
    if (!cashuState.configured) { if (swapLnStatus) swapLnStatus.textContent = "Set a Cashu mint in Settings first."; return; }
    swapLnInvoiceButton.disabled = true;
    if (swapLnStatus) swapLnStatus.textContent = "Creating invoice...";
    try {
      const data = await fetchJson("/api/cashu/invoice", { method: "POST", body: JSON.stringify({ amount }) });
      if (swapLnStatus) swapLnStatus.textContent = walletState.testMode
        ? `Signet invoice for ${amount} sats - pay at faucet.mutinynet.com (Lightning tab)`
        : `Invoice for ${amount} sats - pay with any Lightning wallet`;
      showSwapLnInvoice(data.pr, data.qr, data.hash, amount);
    } catch (e) {
      if (swapLnStatus) swapLnStatus.textContent = e.message;
    } finally {
      swapLnInvoiceButton.disabled = false;
    }
  });
}

if (swapLnCopyBtn) {
  swapLnCopyBtn.addEventListener("click", async () => {
    try { await copyText(swapLnPr?.value || ""); if (swapLnStatus) swapLnStatus.textContent = "Copied!"; } catch { /* silent */ }
  });
}

if (swapLnCheckButton) {
  swapLnCheckButton.addEventListener("click", async () => {
    const hash = cashuState.currentInvoiceHash;
    if (!hash) { if (swapLnCheckStatus) swapLnCheckStatus.textContent = "No invoice to check."; return; }
    swapLnCheckButton.disabled = true;
    if (swapLnCheckStatus) swapLnCheckStatus.textContent = "Checking...";
    try {
      const data = await fetchJson("/api/cashu/check", { method: "POST", body: JSON.stringify({ hash }) });
      clearSwapLnPoll();
      cashuState.balance = data.balance;
      cashuState.currentInvoiceHash = null;
      cashuState.pendingInvoices = (cashuState.pendingInvoices || []).filter((i) => i.hash !== hash);
      if (swapLnCheckStatus) swapLnCheckStatus.textContent = `Paid! +${data.amount} sats`;
      if (swapLnBlock) swapLnBlock.hidden = true;
      if (swapLnAmount) swapLnAmount.value = "";
      if (swapLnStatus) swapLnStatus.textContent = "";
      applyCashuState();
    } catch (e) {
      if (swapLnCheckStatus) swapLnCheckStatus.textContent = `Not paid yet: ${e.message}`;
    } finally {
      swapLnCheckButton.disabled = false;
    }
  });
}

// Hidden stub form Р Р†Р вЂљРІР‚Сњ no-op
if (swapBtcToCashuForm) {
  swapBtcToCashuForm.addEventListener("submit", (e) => e.preventDefault());
}

// Cashu Р Р†РІР‚В РІР‚в„ў Lightning: show amount preview when invoice pasted
if (swapCashuBtcAddr) {
  swapCashuBtcAddr.addEventListener("input", () => {
    const inv = (swapCashuBtcAddr.value || "").trim().toLowerCase();
    const previewRow = document.getElementById("swapCashuAmountPreviewRow");
    const previewEl = document.getElementById("swapCashuAmountPreview");
    if (inv.length > 50 && inv.startsWith("ln")) {
      if (previewRow) previewRow.style.display = "";
      if (previewEl) previewEl.textContent = "Amount will be read from invoice by server";
    } else {
      if (previewRow) previewRow.style.display = "none";
    }
  });
}

// Cashu Р Р†РІР‚В РІР‚в„ў Lightning: pay invoice (no manual amount)
if (swapCashuToBtcForm) {
  swapCashuToBtcForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const address = (swapCashuBtcAddr?.value || "").trim();
    if (!address) { if (swapCashuStatus) swapCashuStatus.textContent = "Paste a Lightning invoice."; return; }
    if (!cashuState.configured) { if (swapCashuStatus) swapCashuStatus.textContent = "Set a Cashu mint in Settings first."; return; }
    const addrLower = address.toLowerCase();
    if (walletState.testMode && addrLower.startsWith("lnbc")) {
      if (swapCashuStatus) swapCashuStatus.textContent = "Test mode uses mutinynet. Paste a signet invoice (starts with lntbs).";
      return;
    }
    if (!walletState.testMode && addrLower.startsWith("lntbs")) {
      if (swapCashuStatus) swapCashuStatus.textContent = "This looks like a signet invoice (lntbs). For mainnet, use an invoice starting with lnbc.";
      return;
    }
    const btn = swapCashuToBtcForm.querySelector("button[type=submit]");
    if (btn) btn.disabled = true;
    if (swapCashuStatus) swapCashuStatus.textContent = "Paying Lightning invoice...";
    try {
      const data = await fetchJson("/api/swap/cashu-to-btc", { method: "POST", body: JSON.stringify({ address }) });
      cashuState.balance = data.balance ?? cashuState.balance;
      applyCashuState();
      if (swapCashuStatus) swapCashuStatus.textContent = data.isPaid
        ? `Paid ${data.amount} sats over Lightning.`
        : (data.statusLabel || "Lightning payment started.");
      if (swapCashuBtcAddr) swapCashuBtcAddr.value = "";
      const previewRow = document.getElementById("swapCashuAmountPreviewRow");
      if (previewRow) previewRow.style.display = "none";
    } catch (e) {
      if (swapCashuStatus) swapCashuStatus.textContent = e.message;
    } finally {
      if (btn) btn.disabled = false;
    }
  });
}

// Receive Cashu token (Swap panel)
if (swapCashuReceiveForm) {
  swapCashuReceiveForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const token = normalizeIncomingCashuTokenInput(swapCashuReceiveInput?.value || "");
    if (!token) { if (swapCashuReceiveStatus) swapCashuReceiveStatus.textContent = "Paste a cashuA... token."; return; }
    if (swapCashuReceiveStatus) swapCashuReceiveStatus.textContent = "Redeeming...";
    try {
      const data = await fetchJson("/api/cashu/receive", { method: "POST", body: JSON.stringify({ token }) });
      cashuState.balance = data.balance;
      if (swapCashuReceiveStatus) swapCashuReceiveStatus.textContent = data.unverified
        ? `Accepted ${data.amount} sats offline (unverified; redeem online to confirm)`
        : `Received ${data.amount} sats! Balance: ${data.balance} sats`;
      if (swapCashuReceiveInput) swapCashuReceiveInput.value = "";
      applyCashuState();
      const swapStatus = data.unverified ? "Unverified (offline)" : "Confirmed";
      walletState.history.unshift({ id: `cashu-recv-${Date.now()}`, direction: "Received", peer: "Cashu token", amount: data.amount, unit: "sats", status: swapStatus, timestamp: new Date().toLocaleString() });
      renderWalletHistory();
    } catch (e) {
      if (swapCashuReceiveStatus) swapCashuReceiveStatus.textContent = e.message;
    }
  });
}

// Send Cashu token (Swap panel)
if (swapCashuSendForm) {
  swapCashuSendForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const amount = Number(swapCashuSendAmount?.value);
    const recipient = (swapCashuSendRecipient?.value || "").trim();
    const btn = swapCashuSendForm.querySelector("button[type=submit]");
    if (!amount || amount <= 0) { if (swapCashuSendStatus) swapCashuSendStatus.textContent = "Enter amount."; return; }
    if (swapCashuSendStatus) swapCashuSendStatus.textContent = "Creating token...";
    if (btn) btn.disabled = true;
    try {
      const data = await fetchJson("/api/cashu/send", { method: "POST", body: JSON.stringify({ amount, peer: recipient || "manual", memo: "" }) });
      const issuedToken = normalizeIncomingCashuTokenInput(data.token);
      if (!issuedToken) {
        throw new Error("Mint returned an empty token.");
      }
      cashuState.balance = Math.max(0, cashuState.balance - amount);
      if (swapCashuSendToken) swapCashuSendToken.value = issuedToken;
      if (swapCashuSendResult) swapCashuSendResult.hidden = false;
      if (swapCashuSendStatus) swapCashuSendStatus.textContent = `Token created: ${amount} sats`;
      if (recipient) {
        try {
          await fetchJson("/api/mesh/send", { method: "POST", body: JSON.stringify({ destinationId: recipient, text: issuedToken }) });
          if (swapCashuSendStatus) swapCashuSendStatus.textContent = `Sent ${amount} sats to ${recipient} via mesh`;
        } catch (meshErr) {
          if (swapCashuSendStatus) {
            swapCashuSendStatus.textContent = `Token ready, mesh send failed (${meshErr?.message || "unknown"}). Copy token and resend manually.`;
          }
        }
      }
      if (swapCashuSendAmount) swapCashuSendAmount.value = "";
      walletState.history.unshift({ id: `cashu-send-${Date.now()}`, direction: "Sent", peer: recipient || "manual", amount, unit: "sats", status: "Token created", timestamp: new Date().toLocaleString() });
      renderWalletHistory();
    } catch (e) {
      if (swapCashuSendStatus) swapCashuSendStatus.textContent = e.message;
    } finally {
      if (btn) btn.disabled = false;
    }
  });
}

if (swapCashuCopyTokenBtn) {
  swapCashuCopyTokenBtn.addEventListener("click", async () => {
    try {
      await copyText(swapCashuSendToken?.value || "");
      swapCashuCopyTokenBtn.textContent = "Copied!";
      setTimeout(() => { swapCashuCopyTokenBtn.textContent = "Copy"; }, 1200);
    } catch { /* silent */ }
  });
}

// Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ End Swap panel handlers Р Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљР Р†РІР‚СњР вЂљ

function fillMnemonicGrid(container, mnemonic) {
  container.innerHTML = "";
  (mnemonic || "").split(" ").forEach((word, i) => {
    const el = document.createElement("div");
    el.className = "wallet-mnemonic-word";
    el.innerHTML = `<span class="wallet-mnemonic-num">${i + 1}</span><span></span>`;
    el.querySelector("span:last-child").textContent = word;
    container.appendChild(el);
  });
}

function updateSeedRevealState(visible) {
  if (!walletSeedRevealGrid || !walletSeedEyeIcon || !walletSeedEyeOffIcon) return;
  walletSeedRevealGrid.classList.toggle("hidden", !visible);
  walletSeedEyeIcon.classList.toggle("hidden", visible);
  walletSeedEyeOffIcon.classList.toggle("hidden", !visible);
  if (walletSeedNotAvailable) walletSeedNotAvailable.classList.toggle("hidden", visible);
  if (visible && walletSeedRevealGrid.children.length === 0) {
    if (walletState.mnemonic) {
      fillMnemonicGrid(walletSeedRevealGrid, walletState.mnemonic);
    } else {
      walletSeedRevealGrid.innerHTML = '<div style="grid-column:1/-1;color:var(--muted);font-size:9px">Seed not available - page was reloaded. Check data/wallet.json</div>';
    }
  }
}

if (walletShowSeedButton) {
  walletShowSeedButton.addEventListener("click", () => {
    const isHidden = walletSeedRevealGrid.classList.contains("hidden");
    updateSeedRevealState(isHidden);
  });
}

if (walletCopyAddressButton) {
  walletCopyAddressButton.addEventListener("click", async () => {
    const addr = walletState.address;
    if (!addr) return;
    try {
      await copyText(addr);
      walletCopyAddressButton.classList.add("copied");
      setTimeout(() => walletCopyAddressButton.classList.remove("copied"), 1200);
    } catch { /* silent */ }
  });
}

async function doCreateWallet(triggerButton, statusEl) {
  if (triggerButton) triggerButton.disabled = true;
  if (statusEl) statusEl.textContent = "Creating wallet...";
  try {
    const data = await fetchJson("/api/wallet/create", { method: "POST" });
    walletState.walletConfigured = true;
    walletState.address = data.address;
    walletState.mnemonic = data.mnemonic || null;
    walletState.qrLoaded = false;
    walletMnemonicGrid.innerHTML = "";
    fillMnemonicGrid(walletMnemonicGrid, data.mnemonic);
    walletCreateBlock.classList.add("hidden");
    walletMnemonicBlock.classList.remove("hidden");
    if (walletInfoBlock) walletInfoBlock.classList.add("hidden");
    if (statusEl) statusEl.textContent = "";
    applyWalletConfiguredState({ showInfoBlock: false });
  } catch (err) {
    if (statusEl) statusEl.textContent = `Error: ${err.message}`;
    if (triggerButton) triggerButton.disabled = false;
  }
}

async function saveWalletTestMode(enable) {
  if (walletTestModeTogglePending) return;
  walletTestModeTogglePending = true;
  if (walletSettingsStatus) {
    walletSettingsStatus.textContent = enable ? "Enabling test mode..." : "Disabling test mode...";
  }
  if (walletTestModeToggle) {
    walletTestModeToggle.disabled = true;
  }
  if (walletTestModeWarningConfirm) {
    walletTestModeWarningConfirm.disabled = true;
  }
  try {
    const result = await fetchJson("/api/wallet/testmode", { method: "POST", body: JSON.stringify({ enabled: enable }) });
    walletState.testMode = result.testMode;
    walletState.walletConfigured = false;
    walletState.address = null;
    walletState.mnemonic = null;
    walletState.balance = null;
    walletState.qrLoaded = false;
    walletState.history = [];
    renderWalletHistory();
    applyTestMode();
    applyWalletConfiguredState();
    if (walletSettingsStatus) {
      walletSettingsStatus.textContent = "";
    }
    closeWalletTestModeWarningModal();
    loadWalletState();
  } catch (err) {
    if (walletSettingsStatus) {
      walletSettingsStatus.textContent = `Error: ${err.message}`;
    }
    if (walletTestModeToggle) {
      walletTestModeToggle.checked = !enable;
    }
  } finally {
    walletTestModeTogglePending = false;
    if (walletTestModeToggle) {
      walletTestModeToggle.disabled = false;
    }
    if (walletTestModeWarningConfirm) {
      walletTestModeWarningConfirm.disabled = false;
    }
  }
}

if (walletTestModeToggle) {
  walletTestModeToggle.addEventListener("change", async () => {
    const enable = walletTestModeToggle.checked;
    if (!enable) {
      openWalletTestModeWarningModal();
      return;
    }
    closeWalletTestModeWarningModal();
    await saveWalletTestMode(enable);
  });
}


if (faucetAddressButton) {
  faucetAddressButton.addEventListener("click", async () => {
    const address = walletState.address || "your test wallet address";
    if (faucetStatus) {
      faucetStatus.textContent = `Open faucet.mutinynet.com and fund ${address}. Direct app requests are blocked by the faucet's browser token requirement.`;
    }
  });
}


walletInitButton.addEventListener("click", () => {
  doCreateWallet(walletInitButton, walletSettingsStatus);
});

if (walletHomeCreateButton) {
  walletHomeCreateButton.addEventListener("click", () => {
    doCreateWallet(walletHomeCreateButton, null);
  });
}

if (walletMnemonicDoneButton) {
  walletMnemonicDoneButton.addEventListener("click", () => {
    walletMnemonicBlock.classList.add("hidden");
    walletInfoBlock.classList.remove("hidden");
    renderWalletSettingsInfo();
    updateSeedRevealState(false);
    walletSettingsStatus.textContent = "Wallet ready.";
    loadWalletBalance();
    loadWalletTransactions();
  });
}

walletResetButton.addEventListener("click", async () => {
  if (!confirm("Delete wallet? This cannot be undone. Back up your seed phrase first.")) return;
  try {
    await fetchJson("/api/wallet/reset", { method: "POST" });
    walletState.walletConfigured = false;
    walletState.address = null;
    walletState.mnemonic = null;
    walletState.balance = null;
    walletState.qrLoaded = false;
    walletState.history = [];
    renderWalletHistory();
    renderWalletHomeActivity();
    applyWalletConfiguredState();
    walletSettingsStatus.textContent = "Wallet deleted.";
  } catch (err) {
    walletSettingsStatus.textContent = `Error: ${err.message}`;
  }
});
aiSettingsEnableInstructions.addEventListener("click", () => {
  const next = aiSettingsEnableInstructions.getAttribute("aria-pressed") !== "true";
  setAiSettingsToggle(aiSettingsEnableInstructions, next);
  toggleAiInstructionsInput();
});
aiSettingsUseTelemetry.addEventListener("click", () => {
  const next = aiSettingsUseTelemetry.getAttribute("aria-pressed") !== "true";
  setAiSettingsToggle(aiSettingsUseTelemetry, next);
});
aiSettingsForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  aiSettingsStatusText.textContent = "Saving AI settings...";
  try {
    const payload = await fetchJson("/api/ai-settings", {
      method: "POST",
      body: JSON.stringify({ settings: collectAiSettingsForm() }),
    });
    renderAiSettings(payload);
    aiSettingsStatusText.textContent = "AI settings saved.";
    closeAiSettingsModal();
  } catch (error) {
    aiSettingsStatusText.textContent = `Save failed: ${error.message}`;
  }
});
modelManagerClose.addEventListener("click", closeModelManager);
aiSettingsClose.addEventListener("click", closeAiSettingsModal);
helpModalClose.addEventListener("click", closeHelpModal);
walletModalClose.addEventListener("click", closeWalletModal);
if (walletTestModeWarningClose) {
  walletTestModeWarningClose.addEventListener("click", () => {
    cancelWalletTestModeWarning();
  });
}
if (walletTestModeWarningCancel) {
  walletTestModeWarningCancel.addEventListener("click", () => {
    cancelWalletTestModeWarning();
  });
}
if (walletTestModeWarningConfirm) {
  walletTestModeWarningConfirm.addEventListener("click", async () => {
    await saveWalletTestMode(false);
  });
}
deviceStatus.addEventListener("click", () => {
  openSetupScreen(latestMeshtasticConnected ? null : "connection");
});
meshAiReplyToggle.addEventListener("click", () => {
  const next = meshAiReplyToggle.getAttribute("aria-pressed") !== "true";
  fetchJson("/api/mesh-ai-reply", { method: "POST", body: JSON.stringify({ enabled: next }) })
    .then((data) => applyMeshAiReply(data.meshAiReply))
    .catch(() => {});
});
if (walletTestModeWarningModal) {
  walletTestModeWarningModal.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-close-wallet-testmode-warning")) {
      cancelWalletTestModeWarning();
    }
  });
}
modelManagerModal.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-close-model-manager")) {
    closeModelManager();
  }
});
helpModal.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-close-help-modal")) {
    closeHelpModal();
  }
});
aiSettingsModal.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-close-ai-settings")) {
    closeAiSettingsModal();
  }
});
walletModal.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-close-wallet-modal")) {
    closeWalletModal();
  }
});

openNodesMapButton.addEventListener("click", openNodesMap);
nodesMapClose.addEventListener("click", closeNodesMap);
nodesMapModal.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-close-nodes-map")) {
    closeNodesMap();
  }
});
if (mapNodeOnlineWindow) {
  mapNodeOnlineWindow.addEventListener("change", async () => {
    const previousValue = mapNodeOnlineWindow.dataset.currentValue || "30";
    const nextValue = mapNodeOnlineWindow.value;
    mapNodeOnlineWindow.disabled = true;
    if (nodesPanelOnlineWindow) nodesPanelOnlineWindow.disabled = true;
    try {
      await fetchJson("/api/device-meta", {
        method: "POST",
        body: JSON.stringify({ nodeOnlineWindowMinutes: parseInt(nextValue, 10) }),
      });
      mapNodeOnlineWindow.dataset.currentValue = nextValue;
      if (nodesPanelOnlineWindow) {
        nodesPanelOnlineWindow.value = nextValue;
        nodesPanelOnlineWindow.dataset.currentValue = nextValue;
      }
    } catch (error) {
      mapNodeOnlineWindow.value = previousValue;
      mapNodeOnlineWindow.dataset.currentValue = previousValue;
      if (nodesPanelOnlineWindow) {
        nodesPanelOnlineWindow.value = previousValue;
        nodesPanelOnlineWindow.dataset.currentValue = previousValue;
      }
    } finally {
      mapNodeOnlineWindow.disabled = false;
      if (nodesPanelOnlineWindow) nodesPanelOnlineWindow.disabled = false;
    }
  });
}
if (nodesPanelOnlineWindow) {
  nodesPanelOnlineWindow.addEventListener("change", async () => {
    const previousValue = nodesPanelOnlineWindow.dataset.currentValue || "30";
    const nextValue = nodesPanelOnlineWindow.value;
    nodesPanelOnlineWindow.disabled = true;
    if (mapNodeOnlineWindow) mapNodeOnlineWindow.disabled = true;
    try {
      await fetchJson("/api/device-meta", {
        method: "POST",
        body: JSON.stringify({ nodeOnlineWindowMinutes: parseInt(nextValue, 10) }),
      });
      nodesPanelOnlineWindow.dataset.currentValue = nextValue;
      if (mapNodeOnlineWindow) {
        mapNodeOnlineWindow.value = nextValue;
        mapNodeOnlineWindow.dataset.currentValue = nextValue;
      }
    } catch (error) {
      nodesPanelOnlineWindow.value = previousValue;
      nodesPanelOnlineWindow.dataset.currentValue = previousValue;
      if (mapNodeOnlineWindow) {
        mapNodeOnlineWindow.value = previousValue;
        mapNodeOnlineWindow.dataset.currentValue = previousValue;
      }
    } finally {
      nodesPanelOnlineWindow.disabled = false;
      if (mapNodeOnlineWindow) mapNodeOnlineWindow.disabled = false;
    }
  });
}

document.getElementById("nodesMapExpand").addEventListener("click", () => {
  const panel = nodesMapModal.querySelector(".modal-panel--map");
  const isFullscreen = panel.classList.toggle("modal-panel--fullscreen");
  const icon = document.getElementById("nodesMapExpandIcon");
  if (icon) {
    icon.innerHTML = isFullscreen
      ? '<path d="M4 1v1.5H2.5V4H1V1h3zm4 0h3v3h-1.5V2.5H7V1zM1 8h1.5v2.5H4V12H1V8zm6 2.5V12h3V8h-1.5v2.5H7z"/>'
      : '<path d="M1 1h4v1.5H2.5V4H1V1zm6 0h4v3h-1.5V2.5H7V1zM1 8h1.5v2.5H5V12H1V8zm8.5 2.5H7V12h4V8H9.5v2.5z"/>';
  }
  setTimeout(() => { if (_mapInstance) _mapInstance.invalidateSize(); }, 220);
});

nodeModalClose.addEventListener("click", closeNodeModal);
nodeModal.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-close-node-modal")) {
    closeNodeModal();
  }
});
document.addEventListener("keydown", (event) => {
  handleWalletModalFocusTrap(event);
  if (event.key === "Escape" && walletTestModeWarningModal && !walletTestModeWarningModal.classList.contains("hidden")) {
    cancelWalletTestModeWarning();
    return;
  }
  if (event.key === "Escape" && !walletModal.classList.contains("hidden")) {
    closeWalletModal();
    return;
  }
  if (event.key === "Escape" && !aiSettingsModal.classList.contains("hidden")) {
    closeAiSettingsModal();
    return;
  }
  if (event.key === "Escape" && !helpModal.classList.contains("hidden")) {
    closeHelpModal();
    return;
  }
  if (event.key === "Escape" && !modelManagerModal.classList.contains("hidden")) {
    closeModelManager();
    return;
  }
  if (event.key === "Escape" && !nodeModal.classList.contains("hidden")) {
    closeNodeModal();
    return;
  }
});

function connectEvents() {
  const source = new EventSource("/events");
  source.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    latestMessages.push(message);
    latestMessages = latestMessages.slice(-300);
    latestLogs.push(message);
    latestLogs = latestLogs.slice(-300);
    appendLog(message);
    // Track unread incoming DM messages
    if (isIncomingDmMessage(message)) {
      const isCurrentPeer = message.sender === chatState.selectedPeer && chatState.mode === CHAT_MODE_DM;
      if (!isCurrentPeer) {
        unreadPeers.add(message.sender);
        lastUnreadPeer = message.sender;
        renderChatPeerList();
        updateDmTabUnreadGlow();
      }
    }
    if (chatState.mode === CHAT_MODE_DM) {
      renderDmChat();
    } else if (chatState.mode === CHAT_MODE_CHANS) {
      renderChannelChat();
    }
  });
  source.addEventListener("status", () => {
    loadStatus();
  });
  source.addEventListener("nodes", (event) => {
    const payload = JSON.parse(event.data);
    renderNodes(payload.nodes || []);
    if (_mapInstance && !nodesMapModal.classList.contains("hidden")) {
      _renderMapNodes(false);
    }
    if (setupState.open && setupState.group === "contacts") {
      setupRenderGroup();
    }
  });
  // MeshCore bridge events for the SETUP console + delivery/trace UI.
  [
    "advert", "pending_contact", "telemetry", "admin_reply", "admin_session",
    "admin_cmd_sent", "path_reset", "advert_sent", "contact_shared",
    "contact_uri", "channels", "default_flood_scope", "device_stats", "node_status", "time_set",
    "rebooting", "factory_reset_done", "private_key", "private_key_imported",
    "device_meta_saved",
  ].forEach((name) => {
    source.addEventListener(name, (event) => {
      let payload = {};
      try { payload = JSON.parse(event.data || "{}"); } catch {}
      setupHandleSseEvent(name, payload);
    });
  });
  source.addEventListener("path", (event) => {
    let payload = {};
    try { payload = JSON.parse(event.data || "{}"); } catch {}
    setupHandleSseEvent("path", payload);
    showTracePanel(payload);
  });
  source.addEventListener("delivered", (event) => {
    let payload = {};
    try { payload = JSON.parse(event.data || "{}"); } catch {}
    handleDeliveredEvent(payload);
  });
  source.addEventListener("model-manager", (event) => {
    renderModelManager(JSON.parse(event.data));
  });
  source.addEventListener("swaps", (event) => {
    renderActiveSwaps(JSON.parse(event.data) || []);
  });
  source.addEventListener("ack_update", (event) => {
    const { id, ack } = JSON.parse(event.data);
    // Update in-memory latestMessages
    const msg = latestMessages.find((m) => m.id === id);
    if (msg) msg.ack = ack;
    // Update bubble in DOM if visible
    const bubble = chatReplyText.querySelector(`[data-msg-id="${id}"]`);
    if (bubble) {
      const icon = bubble.querySelector(".chat-bubble-ack");
      if (icon) {
        icon.className = `chat-bubble-ack chat-bubble-ack--${ack}`;
        icon.title = ack === "delivered" ? "Delivered" : ack === "failed" ? "Not delivered" : ack === "sent" ? "Sent to mesh" : "Sending...";
      }
    }
  });
  source.onerror = () => {
    setTimeout(() => {
      source.close();
      connectEvents();
    }, 1500);
  };
}

function initLeftColumnPanelResize() {
  if (!leftColumn || !nodesPanel || !leftColumnResizeHandle) return;

  const mobileQuery = window.matchMedia("(max-width: 1120px)");
  const storageKey = "leftColumnNodesPanelHeight";
  const minNodesHeight = 140;
  const minLogHeight = 140;
  let dragState = null;

  const applyNodesHeight = (height) => {
    const value = Math.max(minNodesHeight, Math.round(height));
    leftColumn.style.setProperty("--nodes-panel-height", `${value}px`);
    try {
      localStorage.setItem(storageKey, String(value));
    } catch (_) {}
  };

  const clearNodesHeight = () => {
    leftColumn.style.removeProperty("--nodes-panel-height");
  };

  const positionHandle = () => {
    const nodesRect = nodesPanel.getBoundingClientRect();
    const leftRect = leftColumn.getBoundingClientRect();
    const top = nodesRect.bottom - leftRect.top;
    leftColumn.style.setProperty("--left-resizer-top", `${Math.round(top)}px`);
  };

  const onPointerMove = (event) => {
    if (!dragState || mobileQuery.matches) return;
    const offset = event.clientY - dragState.startY;
    const target = dragState.startHeight + offset;
    const maxHeight = dragState.maxHeight();
    const clamped = Math.max(minNodesHeight, Math.min(maxHeight, target));
    leftColumn.style.setProperty("--nodes-panel-height", `${Math.round(clamped)}px`);
    positionHandle();
  };

  const stopDrag = () => {
    if (!dragState) return;
    document.body.classList.remove("is-resizing-panels");
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", stopDrag);
    window.removeEventListener("pointercancel", stopDrag);
    const current = parseFloat(getComputedStyle(nodesPanel).height);
    if (Number.isFinite(current)) applyNodesHeight(current);
    dragState = null;
  };

  leftColumnResizeHandle.addEventListener("pointerdown", (event) => {
    if (mobileQuery.matches) return;
    const nodesRect = nodesPanel.getBoundingClientRect();
    const leftRect = leftColumn.getBoundingClientRect();
    const logRect = document.querySelector(".log-panel")?.getBoundingClientRect();
    dragState = {
      startY: event.clientY,
      startHeight: nodesRect.height,
      maxHeight: () => {
        if (logRect) {
          const maxByLogTop = logRect.bottom - nodesRect.top - minLogHeight - 8;
          return Math.max(minNodesHeight, maxByLogTop);
        }
        return Math.max(minNodesHeight, leftRect.bottom - nodesRect.top - minLogHeight);
      },
    };
    document.body.classList.add("is-resizing-panels");
    leftColumnResizeHandle.setPointerCapture(event.pointerId);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", stopDrag);
    window.addEventListener("pointercancel", stopDrag);
  });

  const restoreStoredHeight = () => {
    if (mobileQuery.matches) {
      clearNodesHeight();
      leftColumn.style.removeProperty("--left-resizer-top");
      return;
    }
    let saved = null;
    try {
      saved = localStorage.getItem(storageKey);
    } catch (_) {
      saved = null;
    }
    const parsed = Number.parseFloat(saved || "");
    if (Number.isFinite(parsed)) {
      applyNodesHeight(parsed);
    }
    positionHandle();
  };

  restoreStoredHeight();
  window.addEventListener("resize", positionHandle);
  mobileQuery.addEventListener("change", restoreStoredHeight);
}

setWalletStatusRow();
renderWalletHistory();
if (walletPreferredUnitSelect) walletPreferredUnitSelect.value = walletState.settings.preferredUnit;
if (walletDefaultTransportSelect) walletDefaultTransportSelect.value = walletState.settings.defaultTransport;
if (walletUnitSelect) walletUnitSelect.value = walletState.settings.preferredUnit;
if (walletTransportSelect) walletTransportSelect.value = walletState.settings.defaultTransport;
applyWalletConfiguredState();
setChatMode(CHAT_MODE_AI);
setWalletView("home");
renderHelpView();
loadMapNodeOnlineWindow();
loadStatus();
loadMessages();
loadLogs();
loadNodes();
loadWalletClients();
initLeftColumnPanelResize();
connectEvents();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/static/map-sw.js", { scope: "/" }).catch(() => {});
}

/* ============================================================
   MeshCore delivery confirmations
   ============================================================ */
function handleDeliveredEvent(payload) {
  const to = String(payload?.to || "").trim();
  const rttMs = Number(payload?.rttMs);
  if (!to) return;
  for (let i = latestMessages.length - 1; i >= 0; i--) {
    const msg = latestMessages[i];
    if (msg && msg.direction === "out" && String(msg.recipient || "") === to) {
      msg.ack = "delivered";
      if (Number.isFinite(rttMs)) msg.rttMs = rttMs;
      const bubble = msg.id != null ? chatReplyText.querySelector(`[data-msg-id="${msg.id}"]`) : null;
      if (bubble) {
        const icon = bubble.querySelector(".chat-bubble-ack");
        if (icon) {
          icon.className = "chat-bubble-ack chat-bubble-ack--delivered";
          icon.title = Number.isFinite(rttMs) ? `Delivered | RTT ${Math.round(rttMs)}ms` : "Delivered";
        }
        const meta = bubble.querySelector(".chat-bubble-meta");
        if (meta && Number.isFinite(rttMs) && !meta.textContent.includes("▸▸")) {
          meta.textContent += ` | ▸▸ ${Math.round(rttMs)}ms`;
        }
      }
      break;
    }
  }
}

/* ============================================================
   Trace path result panel (hop list + SNR bars)
   ============================================================ */
function showTracePanel(payload) {
  if (!tracePanel || !tracePanelBody) return;
  tracePanelBody.innerHTML = "";
  const contactId = String(payload?.contactId || "");
  const node = latestNodes.find((n) => getNodeAddress(n) === contactId);
  const who = node ? getNodeDisplayLabel(node) : contactId.slice(0, 8);

  const meta = document.createElement("div");
  meta.className = "trace-meta";

  if (!payload?.ok) {
    meta.textContent = `${who}: TRACE FAILED${payload?.reason ? ` - ${payload.reason}` : ""}`;
    tracePanelBody.appendChild(meta);
  } else if (payload.trace && Array.isArray(payload.trace.path)) {
    const hops = payload.trace.path;
    meta.textContent = `${who} | ${hops.length} HOP${hops.length === 1 ? "" : "S"}`;
    tracePanelBody.appendChild(meta);
    hops.forEach((hop, index) => {
      const row = document.createElement("div");
      row.className = "trace-hop";
      const snr = Number(hop?.snr);
      const hasSnr = Number.isFinite(snr);
      // Map SNR -20..+10 dB to 0..100%
      const pct = hasSnr ? Math.max(4, Math.min(100, ((snr + 20) / 30) * 100)) : 4;
      const tier = !hasSnr || snr < 0 ? "is-weak" : snr < 5 ? "is-mid" : "";
      const idx = document.createElement("span");
      idx.className = "trace-hop-idx";
      idx.textContent = String(index + 1).padStart(2, "0");
      const hash = document.createElement("span");
      hash.className = "trace-hop-hash";
      hash.textContent = String(hop?.hash ?? "??");
      const bar = document.createElement("span");
      bar.className = "trace-hop-bar";
      const fill = document.createElement("span");
      if (tier) fill.className = tier;
      fill.style.width = `${pct}%`;
      bar.appendChild(fill);
      const snrLabel = document.createElement("span");
      snrLabel.className = "trace-hop-snr";
      snrLabel.textContent = hasSnr ? `${snr.toFixed(1)} dB` : "-";
      row.append(idx, hash, bar, snrLabel);
      tracePanelBody.appendChild(row);
    });
  } else if (payload.discovery) {
    meta.textContent = `${who}: PATH DISCOVERY OK`;
    tracePanelBody.appendChild(meta);
    const pre = document.createElement("pre");
    pre.className = "setup-pre";
    pre.textContent = JSON.stringify(payload.discovery, null, 2);
    tracePanelBody.appendChild(pre);
  } else {
    meta.textContent = `${who}: PATH EVENT`;
    tracePanelBody.appendChild(meta);
  }

  tracePanel.classList.remove("hidden");
  tracePanel.setAttribute("aria-hidden", "false");
}

if (tracePanelClose) {
  tracePanelClose.addEventListener("click", () => {
    tracePanel.classList.add("hidden");
    tracePanel.setAttribute("aria-hidden", "true");
  });
}

/* ============================================================
   SETUP screen - full MeshCore settings console
   ============================================================ */
const SETUP_GROUPS = [
  { id: "connection", label: "CONNECTION", desc: "radio link" },
  { id: "identity", label: "IDENTITY", desc: "name / position / keys" },
  { id: "radio", label: "RADIO", desc: "freq / sf / power" },
  { id: "channels", label: "CHANNELS", desc: "group slots + QR" },
  { id: "contacts", label: "CONTACTS", desc: "mesh address book" },
  { id: "inference", label: "INFERENCE", desc: "local / remote LLM" },
  { id: "device", label: "DEVICE", desc: "stats / reboot" },
  { id: "advanced", label: "ADVANCED", desc: "telemetry / acks" },
];

// Mirrors the non-deprecated entries of api.meshcore.nz/api/v1/config
// (the source behind config.meshcore.io), as of 2026-06-11.
const RADIO_PRESETS = [
  { id: "EU_NARROW", label: "EU/UK 869.618 SF8 NARROW", frequency: 869.618, bandwidth: 62.5, spreadingFactor: 8, codingRate: 8 },
  { id: "EU_433_LONG", label: "EU 433.650 SF11 LONG RANGE", frequency: 433.65, bandwidth: 250, spreadingFactor: 11, codingRate: 5 },
  { id: "EU_433_NARROW", label: "EU 433.650 SF8 NARROW", frequency: 433.65, bandwidth: 62.5, spreadingFactor: 8, codingRate: 8 },
  { id: "NL", label: "NETHERLANDS 869.618 SF7", frequency: 869.618, bandwidth: 62.5, spreadingFactor: 7, codingRate: 5 },
  { id: "CZ", label: "CZECHIA 869.432 SF7 NARROW", frequency: 869.432, bandwidth: 62.5, spreadingFactor: 7, codingRate: 5 },
  { id: "CH", label: "SWITZERLAND 869.618 SF8", frequency: 869.618, bandwidth: 62.5, spreadingFactor: 8, codingRate: 8 },
  { id: "PT_868", label: "PORTUGAL 869.618 SF7", frequency: 869.618, bandwidth: 62.5, spreadingFactor: 7, codingRate: 6 },
  { id: "PT_433", label: "PORTUGAL 433.375 SF9", frequency: 433.375, bandwidth: 62.5, spreadingFactor: 9, codingRate: 6 },
  { id: "EU_LEGACY", label: "EU/UK 869.525 SF11 (DEPRECATED)", frequency: 869.525, bandwidth: 250, spreadingFactor: 11, codingRate: 5 },
  { id: "US", label: "USA/CA 910.525 SF7", frequency: 910.525, bandwidth: 62.5, spreadingFactor: 7, codingRate: 5 },
  { id: "ANZ", label: "AUS 915.8 SF10", frequency: 915.8, bandwidth: 250, spreadingFactor: 10, codingRate: 5 },
  { id: "NZ", label: "NZ 917.375 SF11", frequency: 917.375, bandwidth: 250, spreadingFactor: 11, codingRate: 5 },
  { id: "CUSTOM", label: "CUSTOM" },
];

const setupState = {
  open: false,
  cursor: 0,
  group: null,
  ports: [],
  detected: [],
  selectedPort: "",
  deviceMeta: null,
  channels: null,
  deviceStats: null,
  exportedKey: null,
  lastContactUri: null,
  inferenceCfg: null,
  floodScope: null,
  channelAddOpen: false,
  statusText: "",
};

function meshCommand(type, payload = {}) {
  return fetchJson("/api/mesh/command", {
    method: "POST",
    body: JSON.stringify({ type, payload }),
  });
}

function setupEl(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function setupButton(label, onClick, variant = "") {
  const btn = setupEl("button", `setup-btn${variant ? ` setup-btn--${variant}` : ""}`, label);
  btn.type = "button";
  btn.addEventListener("click", onClick);
  return btn;
}

function setupField(labelText, inputEl) {
  const field = setupEl("label", "setup-field");
  field.appendChild(setupEl("span", "", labelText));
  field.appendChild(inputEl);
  return field;
}

function setupInput(type, value, placeholder, attrs = {}) {
  const input = document.createElement("input");
  input.type = type;
  if (value != null && value !== "") input.value = value;
  if (placeholder) input.placeholder = placeholder;
  Object.entries(attrs).forEach(([k, v]) => input.setAttribute(k, String(v)));
  return input;
}

function setupSetStatus(text) {
  setupState.statusText = String(text || "");
  const line = document.getElementById("setupStatusLine");
  if (line) line.textContent = setupState.statusText;
}

function setupConfirmBlock(text, confirmLabel, onConfirm) {
  const wrap = setupEl("div", "setup-confirm");
  wrap.appendChild(setupEl("div", "setup-confirm-text", text));
  const row = setupEl("div", "setup-btn-row");
  row.appendChild(setupButton(confirmLabel, () => { wrap.remove(); onConfirm(); }, "danger"));
  row.appendChild(setupButton("CANCEL", () => wrap.remove()));
  wrap.appendChild(row);
  return wrap;
}

function setupShowQr(container, uri, title) {
  container.innerHTML = "";
  const block = setupEl("div", "setup-qr-block");
  if (title) block.appendChild(setupEl("div", "setup-section-label", title));
  const canvas = document.createElement("canvas");
  block.appendChild(canvas);
  const uriEl = setupEl("div", "setup-qr-uri", uri);
  block.appendChild(uriEl);
  const row = setupEl("div", "setup-btn-row");
  row.appendChild(setupButton("COPY", async () => {
    try { await copyText(uri); setupSetStatus("URI copied."); } catch { setupSetStatus("Copy failed."); }
  }));
  row.appendChild(setupButton("CLOSE", () => { container.innerHTML = ""; }));
  block.appendChild(row);
  container.appendChild(block);
  if (window.PixelQR) {
    const ok = window.PixelQR.render(canvas, uri, { moduleSize: 4 });
    if (!ok) setupSetStatus("URI too long for QR; use COPY.");
  } else {
    setupSetStatus("QR module missing; use COPY.");
  }
}

function openSetupScreen(groupId = null) {
  setupState.open = true;
  setupState.group = null;
  setupState.inferenceCfg = null;
  setupScreen.classList.remove("hidden");
  setupScreen.setAttribute("aria-hidden", "false");
  setupRenderLinkState();
  setupRenderMenu();
  fetchJson("/api/device-meta").then((meta) => {
    setupState.deviceMeta = meta;
    if (setupState.open && setupState.group) setupRenderGroup();
  }).catch(() => {});
  if (groupId) setupEnterGroup(groupId);
}

function closeSetupScreen() {
  setupState.open = false;
  setupState.group = null;
  setupScreen.classList.add("hidden");
  setupScreen.setAttribute("aria-hidden", "true");
}

function setupRenderLinkState() {
  if (!setupLinkState) return;
  const connected = Boolean(latestMeshStatus?.connected);
  const transport = String(latestMeshStatus?.transport || "serial").toUpperCase();
  const address = latestMeshStatus?.address || latestMeshStatus?.selectedPort || "";
  setupLinkState.textContent = connected
    ? `LINK: ${transport}${address ? ` ${address}` : ""}`
    : "LINK: OFFLINE";
  setupLinkState.classList.toggle("is-online", connected);
}

function setupOnStatus(mesh) {
  if (!setupState.open) return;
  setupRenderLinkState();
  const live = document.getElementById("setupConnLive");
  if (live) {
    const connected = Boolean(mesh?.connected);
    live.textContent = connected
      ? `STATE: CONNECTED (${mesh.transport || "serial"}${mesh.address ? ` ${mesh.address}` : ""})`
      : `STATE: ${String(mesh?.mode || "offline").toUpperCase()}${mesh?.error ? ` - ${mesh.error}` : ""}`;
    live.style.color = connected ? "var(--success)" : "var(--danger)";
  }
}

function setupRenderMenu() {
  setupMenuEl.classList.remove("hidden");
  setupSubEl.classList.add("hidden");
  setupMenuEl.innerHTML = "";
  SETUP_GROUPS.forEach((group, index) => {
    const item = setupEl("button", `setup-menu-item${index === setupState.cursor ? " is-active" : ""}`);
    item.type = "button";
    item.setAttribute("role", "menuitem");
    item.appendChild(setupEl("span", "setup-cursor", ">"));
    item.appendChild(setupEl("span", "", group.label));
    item.appendChild(setupEl("span", "setup-menu-item-desc", group.desc));
    item.addEventListener("mouseenter", () => {
      setupState.cursor = index;
      setupRenderMenu();
    });
    item.addEventListener("click", () => setupEnterGroup(group.id));
    setupMenuEl.appendChild(item);
  });
}

function setupEnterGroup(groupId) {
  setupState.group = groupId;
  setupState.cursor = Math.max(0, SETUP_GROUPS.findIndex((g) => g.id === groupId));
  setupRenderGroup();
  if (groupId === "connection") setupLoadPorts();
  if (groupId === "channels") {
    setupState.channelAddOpen = false;
    if (latestMeshtasticConnected) {
      meshCommand("get_channels").catch((e) => setupSetStatus(e.message));
    }
  }
}

function setupExitGroup() {
  setupState.group = null;
  setupRenderMenu();
}

function setupGroupShell(title) {
  setupMenuEl.classList.add("hidden");
  setupSubEl.classList.remove("hidden");
  setupSubEl.innerHTML = "";
  const head = setupEl("div", "setup-sub-title", `> ${title}`);
  setupSubEl.appendChild(head);
  return setupSubEl;
}

function setupFooterRow(buttons) {
  const row = setupEl("div", "setup-btn-row");
  buttons.forEach((b) => row.appendChild(b));
  const status = setupEl("div", "setup-status", setupState.statusText);
  status.id = "setupStatusLine";
  row.appendChild(status);
  return row;
}

function setupRenderGroup() {
  setupSetStatus("");
  switch (setupState.group) {
    case "connection": return setupRenderConnection();
    case "identity": return setupRenderIdentity();
    case "radio": return setupRenderRadio();
    case "channels": return setupRenderChannels();
    case "contacts": return setupRenderContacts();
    case "inference": return setupRenderInference();
    case "device": return setupRenderDevice();
    case "advanced": return setupRenderAdvanced();
    default: return setupRenderMenu();
  }
}

/* ---- CONNECTION ---- */
async function setupLoadPorts() {
  try {
    const payload = await fetchJson("/api/mesh/ports");
    setupState.ports = Array.isArray(payload.ports) ? payload.ports : [];
    setupState.detected = Array.isArray(payload.detectedPorts) ? payload.detectedPorts : [];
    setupState.selectedPort = String(payload.selectedPort || "");
    if (setupState.group === "connection") setupRenderConnection();
  } catch (error) {
    setupSetStatus(`Port scan failed: ${error.message}`);
  }
}

function setupRenderConnection() {
  const root = setupGroupShell("CONNECTION");

  const live = setupEl("div", "setup-section-label", "");
  live.id = "setupConnLive";
  root.appendChild(live);
  setupOnStatus(latestMeshStatus);

  const section = setupEl("div", "setup-section");
  section.appendChild(setupEl("div", "setup-section-label", "TRANSPORT"));

  const currentTransport = String(latestMeshStatus?.transport || "serial");
  let transport = currentTransport === "tcp" ? "tcp" : "serial";

  const toggle = setupEl("div", "setup-toggle");
  const serialBtn = setupEl("button", "", "SERIAL");
  serialBtn.type = "button";
  const tcpBtn = setupEl("button", "", "TCP");
  tcpBtn.type = "button";
  const applyToggle = () => {
    serialBtn.classList.toggle("is-active", transport === "serial");
    tcpBtn.classList.toggle("is-active", transport === "tcp");
    serialWrap.style.display = transport === "serial" ? "" : "none";
    tcpWrap.style.display = transport === "tcp" ? "" : "none";
  };
  serialBtn.addEventListener("click", () => { transport = "serial"; applyToggle(); });
  tcpBtn.addEventListener("click", () => { transport = "tcp"; applyToggle(); });
  toggle.append(serialBtn, tcpBtn);
  section.appendChild(toggle);

  // Serial picker
  const serialWrap = setupEl("div", "");
  serialWrap.style.marginTop = "10px";
  const portSelect = document.createElement("select");
  const autoOption = document.createElement("option");
  autoOption.value = "";
  autoOption.textContent = "AUTO-DETECT";
  portSelect.appendChild(autoOption);
  setupState.ports.forEach((port) => {
    const device = String(port?.device || "").trim();
    if (!device) return;
    const option = document.createElement("option");
    option.value = device;
    const detected = setupState.detected.includes(device) || port?.isDetected;
    option.textContent = `${describeSerialPortOption(port)}${detected ? " *" : ""}`;
    if (device === setupState.selectedPort) option.selected = true;
    portSelect.appendChild(option);
  });
  if (setupState.selectedPort && !Array.from(portSelect.options).some((o) => o.value === setupState.selectedPort)) {
    const saved = document.createElement("option");
    saved.value = setupState.selectedPort;
    saved.textContent = `${setupState.selectedPort} - saved`;
    saved.selected = true;
    portSelect.appendChild(saved);
  }
  const serialGrid = setupEl("div", "setup-grid");
  serialGrid.appendChild(setupField("SERIAL PORT", portSelect));
  serialWrap.appendChild(serialGrid);
  const refreshRow = setupEl("div", "setup-btn-row");
  refreshRow.appendChild(setupButton("RESCAN PORTS", () => {
    setupSetStatus("Scanning ports...");
    setupLoadPorts();
  }));
  serialWrap.appendChild(refreshRow);
  section.appendChild(serialWrap);

  // TCP input
  const tcpWrap = setupEl("div", "");
  tcpWrap.style.marginTop = "10px";
  const tcpInput = setupInput("text", currentTransport === "tcp" ? (latestMeshStatus?.address || "") : "", "192.168.1.50:5000");
  const tcpGrid = setupEl("div", "setup-grid");
  tcpGrid.appendChild(setupField("HOST:PORT", tcpInput));
  tcpWrap.appendChild(tcpGrid);
  section.appendChild(tcpWrap);
  applyToggle();

  root.appendChild(section);

  const connectBtn = setupButton("CONNECT", async () => {
    const address = transport === "tcp" ? tcpInput.value.trim() : String(portSelect.value || "").trim();
    if (transport === "tcp" && !address) {
      setupSetStatus("Enter host:port for TCP.");
      return;
    }
    connectBtn.disabled = true;
    setupSetStatus(`Connecting via ${transport}${address ? ` ${address}` : " (auto)"}...`);
    try {
      await fetchJson("/api/mesh/connect", {
        method: "POST",
        body: JSON.stringify({ transport, address }),
      });
      setupSetStatus("Bridge restarting; watch link state above.");
      await loadStatus();
    } catch (error) {
      setupSetStatus(`Connect failed: ${error.message}`);
    } finally {
      connectBtn.disabled = false;
    }
  }, "primary");

  root.appendChild(setupFooterRow([
    connectBtn,
    setupButton("BACK", setupExitGroup),
  ]));
}

/* ---- INFERENCE ---- */
// Updates only the live status line (called on every status tick) so it never
// clobbers the URL field while the user is typing.
function setupInferenceLive() {
  const line = document.getElementById("setupInferLive");
  if (!line) return;
  const llm = latestLlmStatus || {};
  const mode = String(llm.mode || "");
  const model = llm.currentModel || llm.model || "?";
  let text;
  if (mode === "remote-llama") text = `REMOTE OK - ${model}`;
  else if (mode === "remote-connecting") text = "REMOTE CONNECTING...";
  else if (mode === "remote-unreachable") text = `REMOTE UNREACHABLE - ${llm.error || llm.health?.error || "no connection"}`;
  else if (mode === "local-llama") text = `LOCAL OK - ${model}`;
  else text = `LLM: ${mode || "starting"}`;
  line.textContent = text;
}

function setupRenderInference() {
  const root = setupGroupShell("INFERENCE");

  const live = setupEl("div", "setup-section-label", "");
  live.id = "setupInferLive";
  root.appendChild(live);
  setupInferenceLive();

  const cfg = setupState.inferenceCfg;
  if (!cfg) {
    root.appendChild(setupEl("div", "setup-section", "Loading inference config..."));
    root.appendChild(setupFooterRow([setupButton("BACK", setupExitGroup)]));
    fetchJson("/api/inference-mode").then((payload) => {
      setupState.inferenceCfg = payload.inference || {};
      if (setupState.open && setupState.group === "inference") setupRenderInference();
    }).catch((error) => setupSetStatus(`Load failed: ${error.message}`));
    return;
  }

  let mode = cfg.mode === "remote" ? "remote" : "local";
  const envForced = Boolean(cfg.envForcedMode || cfg.envForcedUrl);

  const section = setupEl("div", "setup-section");
  section.appendChild(setupEl("div", "setup-section-label", "INFERENCE MODE"));

  const toggle = setupEl("div", "setup-toggle");
  const localBtn = setupEl("button", "", "LOCAL");
  localBtn.type = "button";
  const remoteBtn = setupEl("button", "", "REMOTE");
  remoteBtn.type = "button";
  const remoteWrap = setupEl("div", "");
  const applyToggle = () => {
    localBtn.classList.toggle("is-active", mode === "local");
    remoteBtn.classList.toggle("is-active", mode === "remote");
    remoteWrap.style.display = mode === "remote" ? "" : "none";
  };
  localBtn.addEventListener("click", () => { if (!envForced) { mode = "local"; applyToggle(); } });
  remoteBtn.addEventListener("click", () => { if (!envForced) { mode = "remote"; applyToggle(); } });
  toggle.append(localBtn, remoteBtn);
  section.appendChild(toggle);

  // Remote URL block
  remoteWrap.style.marginTop = "10px";
  const urlInput = setupInput("text", cfg.settingRemoteUrl || cfg.remoteUrl || "", "https://mac-mini.tailnet.ts.net");
  if (envForced) urlInput.disabled = true;
  const grid = setupEl("div", "setup-grid");
  grid.appendChild(setupField("REMOTE URL", urlInput));
  remoteWrap.appendChild(grid);
  remoteWrap.appendChild(setupEl("div", "setup-section-label", `LOCAL ENDPOINT ${cfg.localBaseUrl || ""}`));
  section.appendChild(remoteWrap);
  applyToggle();
  root.appendChild(section);

  if (envForced) {
    root.appendChild(setupEl("div", "setup-section-label", "SET BY ENVIRONMENT (LLM_MODE / LLM_REMOTE_URL) - READ ONLY"));
  }

  const saveBtn = setupButton("SAVE", async () => {
    if (mode === "remote" && !urlInput.value.trim()) {
      setupSetStatus("Enter a remote URL (http:// or https://).");
      return;
    }
    saveBtn.disabled = true;
    setupSetStatus("Applying inference config...");
    try {
      const resp = await fetchJson("/api/inference-mode", {
        method: "POST",
        body: JSON.stringify({ mode, remoteUrl: urlInput.value.trim() }),
      });
      setupState.inferenceCfg = resp.inference || setupState.inferenceCfg;
      setupSetStatus("Saved. Watch live status above.");
      await loadStatus();
    } catch (error) {
      setupSetStatus(`Save failed: ${error.message}`);
    } finally {
      saveBtn.disabled = false;
    }
  }, "primary");
  if (envForced) saveBtn.disabled = true;

  root.appendChild(setupFooterRow([
    saveBtn,
    setupButton("BACK", setupExitGroup),
  ]));
}

/* ---- IDENTITY ---- */
function setupRenderIdentity() {
  const root = setupGroupShell("IDENTITY");
  const meta = setupState.deviceMeta || {};

  const section = setupEl("div", "setup-section");
  section.appendChild(setupEl("div", "setup-section-label", "NODE"));
  const nameInput = setupInput("text", meta.name || "", "node name", { maxlength: 32 });
  const latInput = setupInput("number", meta.latitude != null ? meta.latitude : "", "55.7558", { step: "any" });
  const lonInput = setupInput("number", meta.longitude != null ? meta.longitude : "", "37.6173", { step: "any" });
  const grid = setupEl("div", "setup-grid");
  grid.appendChild(setupField("NAME", nameInput));
  grid.appendChild(setupField("ADVERT LAT", latInput));
  grid.appendChild(setupField("ADVERT LON", lonInput));
  section.appendChild(grid);
  const locRow = setupEl("div", "setup-btn-row");
  locRow.appendChild(setupButton("USE BROWSER LOCATION", () => {
    if (!navigator.geolocation) {
      setupSetStatus("Geolocation unsupported.");
      return;
    }
    setupSetStatus("Locating...");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        latInput.value = pos.coords.latitude.toFixed(6);
        lonInput.value = pos.coords.longitude.toFixed(6);
        setupSetStatus("Located.");
      },
      (err) => setupSetStatus(`Location error: ${err.message}`),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
    );
  }));
  section.appendChild(locRow);
  root.appendChild(section);

  const clockSection = setupEl("div", "setup-section");
  clockSection.appendChild(setupEl("div", "setup-section-label", "CLOCK / BLE"));
  const pinInput = setupInput("number", "", "123456", { min: 0, max: 999999, step: 1 });
  const clockGrid = setupEl("div", "setup-grid");
  clockGrid.appendChild(setupField("BLE PIN", pinInput));
  clockSection.appendChild(clockGrid);
  const clockRow = setupEl("div", "setup-btn-row");
  clockRow.appendChild(setupButton("SYNC CLOCK", async () => {
    try {
      await meshCommand("set_time", { epoch: Math.floor(Date.now() / 1000) });
      setupSetStatus("Clock sync sent.");
    } catch (error) {
      setupSetStatus(`set_time failed: ${error.message}`);
    }
  }));
  clockRow.appendChild(setupButton("APPLY PIN", async () => {
    const pin = pinInput.value.trim();
    if (!pin) {
      setupSetStatus("Enter a BLE pin first.");
      return;
    }
    try {
      await meshCommand("set_device_meta", { blePin: parseInt(pin, 10) });
      setupSetStatus("BLE pin sent to device.");
    } catch (error) {
      setupSetStatus(`set pin failed: ${error.message}`);
    }
  }));
  clockSection.appendChild(clockRow);
  root.appendChild(clockSection);

  const keySection = setupEl("div", "setup-section");
  keySection.appendChild(setupEl("div", "setup-section-label", "IDENTITY KEY"));
  const keyOut = setupEl("div", "");
  keyOut.id = "setupKeyOut";
  const importInput = setupInput("text", "", "private key hex");
  const keyGrid = setupEl("div", "setup-grid");
  keyGrid.appendChild(setupField("IMPORT KEY (HEX)", importInput));
  const keyRow = setupEl("div", "setup-btn-row");
  keyRow.appendChild(setupButton("EXPORT KEY", () => {
    keySection.appendChild(setupConfirmBlock(
      "EXPORT PRIVATE KEY? ANYONE WITH IT CAN IMPERSONATE THIS NODE.",
      "YES, EXPORT",
      async () => {
        try {
          await meshCommand("export_private_key");
          setupSetStatus("Export requested; key will appear below.");
        } catch (error) {
          setupSetStatus(`export failed: ${error.message}`);
        }
      },
    ));
  }, "danger"));
  keyRow.appendChild(setupButton("IMPORT KEY", () => {
    const keyHex = importInput.value.trim();
    if (!keyHex) {
      setupSetStatus("Paste a private key hex first.");
      return;
    }
    keySection.appendChild(setupConfirmBlock(
      "IMPORT KEY? THIS REPLACES THE NODE IDENTITY PERMANENTLY.",
      "YES, IMPORT",
      async () => {
        try {
          await meshCommand("import_private_key", { key: keyHex });
          setupSetStatus("Import sent.");
        } catch (error) {
          setupSetStatus(`import failed: ${error.message}`);
        }
      },
    ));
  }, "danger"));
  keySection.appendChild(keyGrid);
  keySection.appendChild(keyRow);
  keySection.appendChild(keyOut);
  if (setupState.exportedKey) {
    const pre = setupEl("pre", "setup-pre", JSON.stringify(setupState.exportedKey, null, 2));
    keyOut.appendChild(pre);
  }
  root.appendChild(keySection);

  root.appendChild(setupFooterRow([
    setupButton("APPLY", async () => {
      const payload = {};
      if (nameInput.value.trim() !== "") payload.name = nameInput.value.trim();
      const lat = latInput.value.trim();
      const lon = lonInput.value.trim();
      if (lat !== "" && lon !== "") {
        payload.latitude = parseFloat(lat);
        payload.longitude = parseFloat(lon);
      }
      if (!Object.keys(payload).length) {
        setupSetStatus("Nothing to apply.");
        return;
      }
      try {
        await meshCommand("set_device_meta", payload);
        setupSetStatus("Saving to device...");
      } catch (error) {
        setupSetStatus(`save failed: ${error.message}`);
      }
    }, "primary"),
    setupButton("REVERT", () => {
      fetchJson("/api/device-meta").then((data) => {
        setupState.deviceMeta = data;
        setupRenderIdentity();
        setupSetStatus("Reverted to device values.");
      }).catch((error) => setupSetStatus(error.message));
    }),
    setupButton("BACK", setupExitGroup),
  ]));
}

/* ---- RADIO ---- */
function setupRenderRadio() {
  const root = setupGroupShell("RADIO");
  const meta = setupState.deviceMeta || {};
  const radio = meta.radio || {};

  const section = setupEl("div", "setup-section");
  section.appendChild(setupEl("div", "setup-section-label", "REGION CARTRIDGE"));

  const presetSelect = document.createElement("select");
  RADIO_PRESETS.forEach((preset) => {
    const option = document.createElement("option");
    option.value = preset.id;
    option.textContent = preset.label;
    presetSelect.appendChild(option);
  });
  const matching = RADIO_PRESETS.find((p) => p.frequency != null &&
    Number(radio.frequency) === p.frequency &&
    Number(radio.bandwidth) === p.bandwidth &&
    Number(radio.spreadingFactor) === p.spreadingFactor &&
    Number(radio.codingRate) === p.codingRate);
  presetSelect.value = matching ? matching.id : "CUSTOM";

  const freqInput = setupInput("number", radio.frequency != null ? radio.frequency : "", "869.525", { step: "0.001", min: 100, max: 2500 });
  const bwInput = setupInput("number", radio.bandwidth != null ? radio.bandwidth : "", "250", { step: "0.01", min: 7, max: 500 });
  const sfInput = setupInput("number", radio.spreadingFactor != null ? radio.spreadingFactor : "", "11", { step: 1, min: 5, max: 12 });
  const crInput = setupInput("number", radio.codingRate != null ? radio.codingRate : "", "5", { step: 1, min: 5, max: 8 });

  presetSelect.addEventListener("change", () => {
    const preset = RADIO_PRESETS.find((p) => p.id === presetSelect.value);
    if (preset && preset.frequency != null) {
      freqInput.value = preset.frequency;
      bwInput.value = preset.bandwidth;
      sfInput.value = preset.spreadingFactor;
      crInput.value = preset.codingRate;
    }
  });
  [freqInput, bwInput, sfInput, crInput].forEach((input) => {
    input.addEventListener("input", () => { presetSelect.value = "CUSTOM"; });
  });

  const grid = setupEl("div", "setup-grid");
  grid.appendChild(setupField("PRESET", presetSelect));
  grid.appendChild(setupField("FREQ MHZ", freqInput));
  grid.appendChild(setupField("BW KHZ", bwInput));
  grid.appendChild(setupField("SF", sfInput));
  grid.appendChild(setupField("CR 4/x", crInput));
  section.appendChild(grid);
  root.appendChild(section);

  const powerSection = setupEl("div", "setup-section");
  powerSection.appendChild(setupEl("div", "setup-section-label", "TX POWER"));
  const maxTx = Number(radio.maxTxPower) || 30;
  const slider = setupInput("range", radio.txPower != null ? radio.txPower : 1, "", { min: 1, max: maxTx, step: 1 });
  const sliderValue = setupEl("span", "setup-slider-value", `${slider.value} dBm`);
  slider.addEventListener("input", () => { sliderValue.textContent = `${slider.value} dBm`; });
  const sliderRow = setupEl("div", "setup-slider-row");
  sliderRow.append(slider, sliderValue);
  powerSection.appendChild(sliderRow);
  powerSection.appendChild(setupEl("div", "setup-row-meta", `MAX ${maxTx} dBm (from device)`));
  root.appendChild(powerSection);

  const repeatSection = setupEl("div", "setup-section");
  repeatSection.appendChild(setupEl("div", "setup-section-label", "REPEATER MODE"));
  const repeatSupported = (meta.deviceInfo || {}).repeat !== undefined;
  let repeatEnabled = Boolean((meta.deviceInfo || {}).repeat);
  const repeatToggle = setupEl("div", "setup-toggle");
  const repeatOffBtn = setupEl("button", "", "OFF");
  repeatOffBtn.type = "button";
  const repeatOnBtn = setupEl("button", "", "ON");
  repeatOnBtn.type = "button";
  const applyRepeatToggle = () => {
    repeatOffBtn.classList.toggle("is-active", !repeatEnabled);
    repeatOnBtn.classList.toggle("is-active", repeatEnabled);
  };
  const sendRepeatMode = async (enabled) => {
    if (!repeatSupported || enabled === repeatEnabled) return;
    repeatEnabled = enabled;
    applyRepeatToggle();
    try {
      await meshCommand("set_repeater_mode", { enabled });
      setupSetStatus(`Repeater mode ${enabled ? "ON" : "OFF"} sent.`);
    } catch (error) {
      repeatEnabled = !enabled;
      applyRepeatToggle();
      setupSetStatus(`repeater mode failed: ${error.message}`);
    }
  };
  repeatOffBtn.addEventListener("click", () => sendRepeatMode(false));
  repeatOnBtn.addEventListener("click", () => sendRepeatMode(true));
  repeatToggle.append(repeatOffBtn, repeatOnBtn);
  applyRepeatToggle();
  if (!repeatSupported) {
    repeatOffBtn.disabled = true;
    repeatOnBtn.disabled = true;
  }
  repeatSection.appendChild(repeatToggle);
  repeatSection.appendChild(setupEl(
    "div",
    "setup-row-meta",
    repeatSupported
      ? "NODE RELAYS MESH TRAFFIC WHILE ON (MORE AIRTIME + POWER)"
      : "REQUIRES COMPANION FIRMWARE V9+",
  ));
  root.appendChild(repeatSection);

  const scopeSection = setupEl("div", "setup-section");
  scopeSection.appendChild(setupEl("div", "setup-section-label", "DEFAULT SCOPE (REGION)"));
  const scopeInput = setupInput("text", setupState.floodScope || "", "de-bebb (blank = global)", { maxlength: 30 });
  scopeInput.id = "setupScopeInput";
  const scopeGrid = setupEl("div", "setup-grid");
  scopeGrid.appendChild(setupField("SCOPE", scopeInput));
  scopeSection.appendChild(scopeGrid);
  const scopeRow = setupEl("div", "setup-btn-row");
  scopeRow.appendChild(setupButton("SET SCOPE", async () => {
    try {
      await meshCommand("set_default_flood_scope", { scope: scopeInput.value.trim() });
      setupSetStatus("Scope sent.");
    } catch (error) {
      setupSetStatus(`scope failed: ${error.message}`);
    }
  }));
  scopeSection.appendChild(scopeRow);
  scopeSection.appendChild(setupEl("div", "setup-row-meta",
    "LIMITS HOW FAR YOUR FLOODS PROPAGATE; REPEATERS ALLOW-LIST REGIONS. BLANK = GLOBAL."));
  root.appendChild(scopeSection);
  // Load the device's current scope once (the event updates the field by id).
  if (setupState.floodScope === null && latestMeshtasticConnected) {
    meshCommand("get_default_flood_scope").catch(() => {});
  }

  const advanced = setupEl("details", "setup-fold");
  advanced.appendChild(setupEl("summary", "", "ADVANCED TUNING"));
  const advSection = setupEl("div", "setup-section");
  const rxDelayInput = setupInput("number", "", "0", { min: 0, step: 1 });
  const airtimeInput = setupInput("number", "", "0", { min: 0, step: 1 });
  const advGrid = setupEl("div", "setup-grid");
  advGrid.appendChild(setupField("RX DELAY", rxDelayInput));
  advGrid.appendChild(setupField("AIRTIME FACTOR", airtimeInput));
  advSection.appendChild(advGrid);
  advanced.appendChild(advSection);
  root.appendChild(advanced);

  root.appendChild(setupFooterRow([
    setupButton("APPLY", async () => {
      const payload = {};
      const freq = parseFloat(freqInput.value);
      const bw = parseFloat(bwInput.value);
      const sf = parseInt(sfInput.value, 10);
      const cr = parseInt(crInput.value, 10);
      if ([freq, bw, sf, cr].every((v) => Number.isFinite(v))) {
        payload.radio = { frequency: freq, bandwidth: bw, spreadingFactor: sf, codingRate: cr };
      }
      payload.txPower = parseInt(slider.value, 10);
      const rxDelay = rxDelayInput.value.trim();
      const airtime = airtimeInput.value.trim();
      if (rxDelay !== "" || airtime !== "") {
        payload.tuning = { rxDelay: parseInt(rxDelay || "0", 10), airtimeFactor: parseInt(airtime || "0", 10) };
      }
      try {
        await meshCommand("set_device_meta", payload);
        setupSetStatus("Radio config sent.");
      } catch (error) {
        setupSetStatus(`save failed: ${error.message}`);
      }
    }, "primary"),
    setupButton("REVERT", () => {
      fetchJson("/api/device-meta").then((data) => {
        setupState.deviceMeta = data;
        setupRenderRadio();
        setupSetStatus("Reverted to device values.");
      }).catch((error) => setupSetStatus(error.message));
    }),
    setupButton("BACK", setupExitGroup),
  ]));
}

/* ---- CHANNELS ---- */
function buildChannelUri(name, secretHex) {
  return `meshcore://channel?name=${encodeURIComponent(name || "")}&secret=${secretHex || ""}`;
}

// A slot counts as configured if it has a name or a non-zero secret.
function channelIsConfigured(channel) {
  const name = String(channel?.name || "").trim();
  const secret = String(channel?.secret || "").replace(/0/g, "");
  return name !== "" || secret !== "";
}

function setupRenderChannels() {
  if (setupState.channelAddOpen) {
    return setupRenderChannelAdd();
  }
  const root = setupGroupShell("CHANNELS");

  const qrSlot = setupEl("div", "");
  qrSlot.id = "setupChannelsQr";

  if (!Array.isArray(setupState.channels)) {
    root.appendChild(setupEl("div", "setup-row-meta", latestMeshtasticConnected
      ? "Loading channel slots from device..."
      : "Radio offline - connect first to edit channels."));
  } else {
    const configured = setupState.channels.filter(channelIsConfigured);
    if (!configured.length) {
      root.appendChild(setupEl("div", "setup-row-meta", "No channels configured. Use ADD CHANNEL."));
    }
    configured.forEach((channel) => {
      const row = setupEl("div", "setup-row");
      row.appendChild(setupEl("span", "setup-row-name", `CH${channel.index}`));
      const nameInput = setupInput("text", channel.name || "", "channel name", { maxlength: 32 });
      const secretHex = typeof channel.secret === "string" ? channel.secret : "";
      const secretInput = setupInput("text", secretHex, "secret (hex, 32 chars)");
      nameInput.style.width = "140px";
      secretInput.style.width = "220px";
      row.appendChild(nameInput);
      row.appendChild(secretInput);
      const actions = setupEl("div", "setup-row-actions");
      actions.appendChild(setupButton("SET", async () => {
        try {
          await meshCommand("set_channel", {
            index: channel.index,
            name: nameInput.value.trim(),
            secret: secretInput.value.trim(),
          });
          setupSetStatus(`CH${channel.index} update sent.`);
        } catch (error) {
          setupSetStatus(`set_channel failed: ${error.message}`);
        }
      }, "primary"));
      actions.appendChild(setupButton("SHARE", () => {
        const uri = buildChannelUri(nameInput.value.trim(), secretInput.value.trim());
        setupShowQr(qrSlot, uri, `CH${channel.index} ${nameInput.value.trim() || "(unnamed)"}`);
      }));
      actions.appendChild(setupButton("REMOVE", async () => {
        try {
          // Clear the slot: empty name + zero key marks it unused.
          await meshCommand("set_channel", { index: channel.index, name: "", secret: "0".repeat(32) });
          setupSetStatus(`CH${channel.index} removed.`);
        } catch (error) {
          setupSetStatus(`remove failed: ${error.message}`);
        }
      }, "danger"));
      row.appendChild(actions);
      root.appendChild(row);
    });
  }

  root.appendChild(qrSlot);

  root.appendChild(setupFooterRow([
    setupButton("ADD CHANNEL", () => {
      if (!Array.isArray(setupState.channels)) {
        setupSetStatus("Channel slots not loaded yet - connect the radio.");
        return;
      }
      if (!setupState.channels.some((ch) => !channelIsConfigured(ch))) {
        setupSetStatus("No free channel slots.");
        return;
      }
      setupState.channelAddOpen = true;
      setupRenderChannels();
    }, "primary"),
    setupButton("RELOAD SLOTS", () => {
      setupState.channels = null;
      setupRenderChannels();
      meshCommand("get_channels").catch((e) => setupSetStatus(e.message));
    }),
    setupButton("BACK", setupExitGroup),
  ]));
}

function setupRenderChannelAdd() {
  const root = setupGroupShell("CHANNELS / ADD");
  const freeSlot = (setupState.channels || []).find((ch) => !channelIsConfigured(ch));

  const section = setupEl("div", "setup-section");
  const nameInput = setupInput("text", "", "#dwebcamp", { maxlength: 32 });
  const nameGrid = setupEl("div", "setup-grid");
  nameGrid.appendChild(setupField("NAME", nameInput));
  section.appendChild(nameGrid);

  // Key mode: DERIVE (hash channel, key from name) | PRIVATE (explicit secret).
  let mode = "derive";
  const toggle = setupEl("div", "setup-toggle");
  const deriveBtn = setupEl("button", "", "DERIVE KEY");
  deriveBtn.type = "button";
  const privateBtn = setupEl("button", "", "PRIVATE KEY");
  privateBtn.type = "button";
  const privateWrap = setupEl("div", "");
  privateWrap.style.marginTop = "10px";
  const deriveHint = setupEl("div", "setup-row-meta",
    "KEY = sha256(NAME)[:16] ON THE DEVICE. COMMUNITY CHANNELS START WITH '#' - USE THE EXACT NAME.");
  const applyToggle = () => {
    deriveBtn.classList.toggle("is-active", mode === "derive");
    privateBtn.classList.toggle("is-active", mode === "private");
    privateWrap.style.display = mode === "private" ? "" : "none";
    deriveHint.style.display = mode === "derive" ? "" : "none";
  };
  deriveBtn.addEventListener("click", () => { mode = "derive"; applyToggle(); });
  privateBtn.addEventListener("click", () => { mode = "private"; applyToggle(); });
  toggle.append(deriveBtn, privateBtn);
  section.appendChild(setupEl("div", "setup-section-label", "KEY"));
  section.appendChild(toggle);

  const secretInput = setupInput("text", "", "secret (hex, 32 chars)");
  const privateGrid = setupEl("div", "setup-grid");
  privateGrid.appendChild(setupField("PRIVATE KEY", secretInput));
  privateWrap.appendChild(privateGrid);
  section.appendChild(privateWrap);
  section.appendChild(deriveHint);
  applyToggle();
  root.appendChild(section);

  root.appendChild(setupEl("div", "setup-row-meta",
    freeSlot ? `WILL USE SLOT CH${freeSlot.index}` : "NO FREE SLOT"));

  const addBtn = setupButton("ADD", async () => {
    const name = nameInput.value.trim();
    if (!name) { setupSetStatus("Enter a channel name."); return; }
    if (!freeSlot) { setupSetStatus("No free channel slots."); return; }
    let secret = "";
    if (mode === "private") {
      secret = secretInput.value.trim().toLowerCase();
      if (!/^[0-9a-f]{32}$/.test(secret)) {
        setupSetStatus("Private key must be 32 hex characters.");
        return;
      }
    }
    addBtn.disabled = true;
    try {
      // Derive mode sends a blank secret; the bridge passes None so the device
      // derives the key from the name.
      await meshCommand("set_channel", { index: freeSlot.index, name, secret });
      setupState.channelAddOpen = false;
      setupRenderChannels();
      setupSetStatus(`Added ${name} to CH${freeSlot.index}.`);
    } catch (error) {
      setupSetStatus(`add failed: ${error.message}`);
    } finally {
      addBtn.disabled = false;
    }
  }, "primary");

  root.appendChild(setupFooterRow([
    addBtn,
    setupButton("BACK", () => { setupState.channelAddOpen = false; setupRenderChannels(); }),
  ]));
}

/* ---- CONTACTS ---- */
// outPath is a hex string, one byte (2 hex chars) per hop hash.
function formatContactPath(node) {
  if (node?.hopsAway == null) return "PATH: FLOOD";
  const hex = String(node?.outPath || "").replace(/[^0-9a-fA-F]/g, "").toLowerCase();
  const hops = hex.length >= 2 ? hex.match(/.{2}/g) : null;
  if (!hops || !hops.length) {
    return node.hopsAway === 0
      ? "PATH: DIRECT (0 HOPS)"
      : `PATH: ${node.hopsAway} HOP${node.hopsAway === 1 ? "" : "S"}`;
  }
  return `PATH: ${hops.join(" > ")} (${hops.length} HOP${hops.length === 1 ? "" : "S"})`;
}

function setupRenderContacts() {
  const root = setupGroupShell("CONTACTS");

  const qrSlot = setupEl("div", "");
  qrSlot.id = "setupContactsQr";

  const advertRow = setupEl("div", "setup-btn-row");
  advertRow.appendChild(setupButton("SEND ADVERT (ZERO-HOP)", async () => {
    try { await meshCommand("send_advert", { flood: false }); setupSetStatus("Advert sent."); }
    catch (error) { setupSetStatus(error.message); }
  }));
  advertRow.appendChild(setupButton("SEND ADVERT (FLOOD)", async () => {
    try { await meshCommand("send_advert", { flood: true }); setupSetStatus("Flood advert sent."); }
    catch (error) { setupSetStatus(error.message); }
  }));
  advertRow.appendChild(setupButton("REFRESH", async () => {
    try { await meshCommand("refresh_contacts"); setupSetStatus("Refreshing contacts..."); }
    catch (error) { setupSetStatus(error.message); }
  }));
  root.appendChild(advertRow);

  const nodes = sortNodesForUi(latestNodes);
  if (!nodes.length) {
    root.appendChild(setupEl("div", "setup-row-meta", "No contacts yet. Send an advert and wait for replies."));
  }
  const nameLabels = buildNodeNameMap(nodes);
  nodes.forEach((node) => {
    const address = getNodeAddress(node);
    if (!address) return;
    const row = setupEl("div", "setup-row");

    const star = setupEl("button", `setup-fav-star${isFavoriteNode(node) ? " is-favorite" : ""}`, isFavoriteNode(node) ? "★" : "☆");
    star.type = "button";
    star.title = "Toggle favorite";
    star.addEventListener("click", async () => {
      try {
        await toggleNodeFavorite(address, !isFavoriteNode(node));
      } catch {}
    });
    row.appendChild(star);

    const type = String(node.contactType || "unknown").toLowerCase();
    row.appendChild(setupEl("span", `setup-chip setup-chip--${CONTACT_TYPE_LABELS[type] ? type : "unknown"}`, (CONTACT_TYPE_LABELS[type] || "UNKN")));
    row.appendChild(setupEl("span", "setup-row-name", nameLabels.get(address) || address.slice(0, 8)));
    const metaBits = [address.slice(0, 8)];
    const advertAge = formatAdvertAge(node.lastHeard);
    if (advertAge) metaBits.push(advertAge);
    metaBits.push(node.hopsAway != null ? `${node.hopsAway} HOP${node.hopsAway === 1 ? "" : "S"}` : "FLOOD");
    row.appendChild(setupEl("span", "setup-row-meta", metaBits.join(" | ")));

    const actions = setupEl("div", "setup-row-actions");
    if (isAdminTargetNode(node)) {
      actions.appendChild(setupButton("ADMIN", () => openAdminConsole(address), "primary"));
    }
    actions.appendChild(setupButton("TELEMETRY", () => {
      setupSetStatus(`Telemetry requested from ${address.slice(0, 8)}...`);
      requestNodeTelemetry(address, setupSetStatus);
    }));
    actions.appendChild(setupButton("TRACE", async () => {
      setupSetStatus("Trace sent; result opens in TRACE PATH panel.");
      try { await meshCommand("trace_path", { contactId: address }); }
      catch (error) { setupSetStatus(error.message); }
    }));
    actions.appendChild(setupButton("DISCOVER PATH", async () => {
      setupSetStatus(`Path discovery sent to ${address.slice(0, 8)}...`);
      try { await meshCommand("path_discovery", { contactId: address }); }
      catch (error) { setupSetStatus(error.message); }
    }));
    actions.appendChild(setupButton("RESET PATH", async () => {
      try { await meshCommand("reset_path", { contactId: address }); setupSetStatus("Path reset sent."); }
      catch (error) { setupSetStatus(error.message); }
    }));
    actions.appendChild(setupButton("SHARE", async () => {
      try { await meshCommand("share_contact", { contactId: address }); setupSetStatus("Contact shared zero-hop."); }
      catch (error) { setupSetStatus(error.message); }
    }));
    actions.appendChild(setupButton("EXPORT QR", async () => {
      setupSetStatus("Export requested; QR appears below.");
      try { await meshCommand("export_contact", { contactId: address }); }
      catch (error) { setupSetStatus(error.message); }
    }));
    actions.appendChild(setupButton("REMOVE", () => {
      row.appendChild(setupConfirmBlock(
        `REMOVE ${address.slice(0, 8)} FROM CONTACTS?`,
        "YES, REMOVE",
        async () => {
          try { await meshCommand("remove_contact", { contactId: address }); setupSetStatus("Remove sent."); }
          catch (error) { setupSetStatus(error.message); }
        },
      ));
    }, "danger"));
    row.appendChild(actions);
    row.appendChild(setupEl("div", "setup-row-path", formatContactPath(node)));
    root.appendChild(row);
  });

  root.appendChild(qrSlot);
  if (setupState.lastContactUri) {
    setupShowQr(qrSlot, setupState.lastContactUri.uri, `CONTACT ${String(setupState.lastContactUri.contactId || "").slice(0, 8)}`);
  }

  root.appendChild(setupFooterRow([
    setupButton("EXPORT SELF QR", async () => {
      setupSetStatus("Exporting own contact card...");
      try { await meshCommand("export_contact", { contactId: "self" }); }
      catch (error) { setupSetStatus(error.message); }
    }),
    setupButton("BACK", setupExitGroup),
  ]));
}

/* ---- DEVICE ---- */
function setupRenderDevice() {
  const root = setupGroupShell("DEVICE");
  const meta = setupState.deviceMeta || {};
  const info = meta.deviceInfo || {};
  const battery = meta.battery || {};

  const section = setupEl("div", "setup-section");
  section.appendChild(setupEl("div", "setup-section-label", "HARDWARE"));
  const kv = setupEl("div", "setup-kv");
  const addKv = (k, v) => {
    if (v == null || v === "") return;
    kv.appendChild(setupEl("span", "setup-k", k));
    kv.appendChild(setupEl("span", "setup-v", String(v)));
  };
  addKv("PUBKEY", meta.localPubkey);
  addKv("FIRMWARE", info.ver || info.firmware_version || info.version);
  addKv("BUILD", info.fw_build || info.firmware_build_date);
  addKv("MODEL", info.model || info.manufacturer_name);
  addKv("MAX CONTACTS", info.max_contacts);
  addKv("MAX CHANNELS", info.max_channels);
  addKv("BATTERY", battery.level != null ? `${battery.level} mV` : null);
  addKv("STORAGE", battery.used_kb != null ? `${battery.used_kb} / ${battery.total_kb} KB` : null);
  if (!kv.children.length) addKv("STATE", "no device info yet - connect the radio");
  section.appendChild(kv);
  root.appendChild(section);

  const statsSlot = setupEl("div", "");
  statsSlot.id = "setupDeviceStats";
  if (setupState.deviceStats) {
    const pre = setupEl("pre", "setup-pre", JSON.stringify(setupState.deviceStats, null, 2));
    statsSlot.appendChild(pre);
  }
  root.appendChild(statsSlot);

  const dangerSection = setupEl("div", "setup-section");
  dangerSection.appendChild(setupEl("div", "setup-section-label", "POWER"));
  const dangerRow = setupEl("div", "setup-btn-row");
  dangerRow.appendChild(setupButton("STATS", async () => {
    setupSetStatus("Requesting core/radio/packet stats...");
    try { await meshCommand("get_device_info"); }
    catch (error) { setupSetStatus(error.message); }
  }));
  dangerRow.appendChild(setupButton("REBOOT", () => {
    dangerSection.appendChild(setupConfirmBlock(
      "REBOOT THE RADIO NOW?",
      "YES, REBOOT",
      async () => {
        try { await meshCommand("reboot"); setupSetStatus("Reboot sent."); }
        catch (error) { setupSetStatus(error.message); }
      },
    ));
  }, "danger"));
  dangerRow.appendChild(setupButton("FACTORY RESET", () => {
    dangerSection.appendChild(setupConfirmBlock(
      "FACTORY RESET WIPES KEYS, CONTACTS AND CONFIG.",
      "I UNDERSTAND",
      () => {
        dangerSection.appendChild(setupConfirmBlock(
          "HOLD ON. REALLY?",
          "YES, WIPE IT",
          async () => {
            try { await meshCommand("factory_reset", { confirm: true }); setupSetStatus("Factory reset sent."); }
            catch (error) { setupSetStatus(error.message); }
          },
        ));
      },
    ));
  }, "danger"));
  dangerSection.appendChild(dangerRow);
  root.appendChild(dangerSection);

  root.appendChild(setupFooterRow([
    setupButton("BACK", setupExitGroup),
  ]));
}

/* ---- ADVANCED ---- */
function setupRenderAdvanced() {
  const root = setupGroupShell("ADVANCED");
  const meta = setupState.deviceMeta || {};
  const advanced = meta.advanced || {};

  const section = setupEl("div", "setup-section");
  section.appendChild(setupEl("div", "setup-section-label", "PROTOCOL"));

  const telemetrySelect = document.createElement("select");
  [["0", "0 - ALWAYS"], ["1", "1 - DEVICE"], ["2", "2 - NEVER"]].forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    telemetrySelect.appendChild(option);
  });
  if (advanced.telemetryModeBase != null) telemetrySelect.value = String(advanced.telemetryModeBase);

  const advertLocSelect = document.createElement("select");
  [["0", "0 - NO LOCATION"], ["1", "1 - SHARE LOCATION"]].forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    advertLocSelect.appendChild(option);
  });
  if (advanced.advertLocPolicy != null) advertLocSelect.value = String(advanced.advertLocPolicy);

  const makeOnOff = (initial) => {
    let on = Boolean(initial);
    const toggle = setupEl("div", "setup-toggle");
    const offBtn = setupEl("button", "", "OFF");
    offBtn.type = "button";
    const onBtn = setupEl("button", "", "ON");
    onBtn.type = "button";
    const sync = () => {
      onBtn.classList.toggle("is-active", on);
      offBtn.classList.toggle("is-active", !on);
    };
    onBtn.addEventListener("click", () => { on = true; sync(); });
    offBtn.addEventListener("click", () => { on = false; sync(); });
    sync();
    return { el: toggle, get: () => on, append: () => { toggle.append(offBtn, onBtn); return toggle; } };
  };
  const multiAcks = makeOnOff(Number(advanced.multiAcks) > 0);
  multiAcks.append();
  const manualAdd = makeOnOff(Boolean(advanced.manualAddContacts));
  manualAdd.append();

  const grid = setupEl("div", "setup-grid");
  grid.appendChild(setupField("TELEMETRY MODE (BASE)", telemetrySelect));
  grid.appendChild(setupField("ADVERT LOC POLICY", advertLocSelect));
  const multiField = setupEl("div", "setup-field");
  multiField.appendChild(setupEl("span", "", "MULTI ACKS"));
  multiField.appendChild(multiAcks.el);
  grid.appendChild(multiField);
  const manualField = setupEl("div", "setup-field");
  manualField.appendChild(setupEl("span", "", "MANUAL ADD CONTACTS"));
  manualField.appendChild(manualAdd.el);
  grid.appendChild(manualField);
  section.appendChild(grid);
  root.appendChild(section);

  root.appendChild(setupFooterRow([
    setupButton("APPLY", async () => {
      try {
        await meshCommand("set_device_meta", {
          telemetryModeBase: parseInt(telemetrySelect.value, 10),
          advertLocPolicy: parseInt(advertLocSelect.value, 10),
          multiAcks: multiAcks.get() ? 1 : 0,
          manualAddContacts: manualAdd.get(),
        });
        setupSetStatus("Advanced settings sent.");
      } catch (error) {
        setupSetStatus(`save failed: ${error.message}`);
      }
    }, "primary"),
    setupButton("REVERT", () => {
      fetchJson("/api/device-meta").then((data) => {
        setupState.deviceMeta = data;
        setupRenderAdvanced();
        setupSetStatus("Reverted to device values.");
      }).catch((error) => setupSetStatus(error.message));
    }),
    setupButton("BACK", setupExitGroup),
  ]));
}

/* ---- SSE plumbing ---- */
function setupHandleSseEvent(name, payload) {
  switch (name) {
    case "channels":
      setupState.channels = Array.isArray(payload?.channels) ? payload.channels : [];
      applyRadioChannelsToChat(setupState.channels);
      if (setupState.open && setupState.group === "channels") setupRenderChannels();
      break;
    case "default_flood_scope": {
      setupState.floodScope = typeof payload?.scope === "string" ? payload.scope : "";
      const el = document.getElementById("setupScopeInput");
      if (el && document.activeElement !== el) el.value = setupState.floodScope;
      break;
    }
    case "contact_uri":
      setupState.lastContactUri = payload || null;
      if (setupState.open && setupState.group === "contacts") setupRenderContacts();
      break;
    case "device_stats":
      setupState.deviceStats = payload || null;
      if (setupState.open && setupState.group === "device") setupRenderDevice();
      break;
    case "private_key":
      setupState.exportedKey = payload?.key ?? payload;
      if (setupState.open && setupState.group === "identity") setupRenderIdentity();
      break;
    case "private_key_imported":
      if (setupState.open) setupSetStatus("Private key imported. Reboot the radio to apply.");
      break;
    case "device_meta_saved":
      if (setupState.open) {
        setupSetStatus("Saved to device.");
        fetchJson("/api/device-meta").then((data) => { setupState.deviceMeta = data; }).catch(() => {});
      }
      break;
    case "time_set":
      if (setupState.open) setupSetStatus("Device clock synced.");
      break;
    case "rebooting":
      if (setupState.open) setupSetStatus("Radio rebooting...");
      break;
    case "factory_reset_done":
      if (setupState.open) setupSetStatus("Factory reset done.");
      break;
    case "advert_sent":
      if (setupState.open) setupSetStatus(payload?.flood ? "Flood advert sent." : "Zero-hop advert sent.");
      break;
    case "contact_shared":
      if (setupState.open) setupSetStatus(payload?.ok ? "Contact shared." : "Contact share failed.");
      break;
    case "path_reset":
      if (setupState.open) {
        setupSetStatus(`Path reset for ${String(payload?.contactId || "").slice(0, 8)}.`);
        if (setupState.group === "contacts") setupRenderGroup();
      }
      break;
    case "path":
      if (setupState.open) {
        const pathWho = String(payload?.contactId || "").slice(0, 8);
        setupSetStatus(payload?.ok === false
          ? `Path discovery failed for ${pathWho}.`
          : `Path updated for ${pathWho}.`);
        if (setupState.group === "contacts") setupRenderGroup();
      }
      break;
    case "telemetry":
      if (setupState.open) {
        const who = payload?.name || String(payload?.contactId || "").slice(0, 8);
        setupSetStatus(payload?.ok ? `Telemetry received from ${who}.` : `Telemetry failed for ${who}.`);
      }
      break;
    case "pending_contact":
      if (setupState.open) setupSetStatus(`Pending contact: ${payload?.name || String(payload?.id || "").slice(0, 8)} (manual-add mode).`);
      break;
    case "advert":
      // Contacts refresh follows via the nodes event; nothing to do here.
      break;
    case "node_status":
      adminHandleNodeStatusEvent(payload);
      if (setupState.open) setupSetStatus(payload?.ok ? "Node status received (see log)." : "Node status request failed.");
      break;
    case "admin_session":
      adminHandleSessionEvent(payload);
      if (setupState.open) {
        setupSetStatus(payload?.loggedOut
          ? "Admin logged out."
          : (payload?.success ? `Admin login OK${payload?.isAdmin ? " (admin)" : ""}.` : "Admin login failed."));
      }
      break;
    case "admin_cmd_sent":
      adminHandleCmdSentEvent(payload);
      if (setupState.open) setupSetStatus(payload?.ok ? "Admin command sent." : "Admin command failed.");
      break;
    case "admin_reply":
      // Replies also land in the server log; the admin console renders them live.
      adminHandleReplyEvent(payload);
      break;
    default:
      break;
  }
}

/* ---- open/close + keyboard nav ---- */
if (setupCloseButton) {
  setupCloseButton.addEventListener("click", closeSetupScreen);
}

document.addEventListener("keydown", (event) => {
  if (!setupState.open) return;
  const tag = String(event.target?.tagName || "").toLowerCase();
  const inField = tag === "input" || tag === "textarea" || tag === "select";

  if (event.key === "Escape") {
    event.preventDefault();
    event.stopPropagation();
    if (inField) {
      event.target.blur();
      return;
    }
    if (setupState.group) {
      setupExitGroup();
    } else {
      closeSetupScreen();
    }
    return;
  }
  if (inField || setupState.group) return;

  if (event.key === "ArrowUp") {
    event.preventDefault();
    setupState.cursor = (setupState.cursor + SETUP_GROUPS.length - 1) % SETUP_GROUPS.length;
    setupRenderMenu();
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    setupState.cursor = (setupState.cursor + 1) % SETUP_GROUPS.length;
    setupRenderMenu();
  } else if (event.key === "Enter") {
    event.preventDefault();
    setupEnterGroup(SETUP_GROUPS[setupState.cursor].id);
  }
}, true);

/* ============================================================
   Remote admin console - terminal panel for repeater/room nodes
   ============================================================ */
const adminConsoleEl = document.getElementById("adminConsole");
const adminConsoleTargetEl = document.getElementById("adminConsoleTarget");
const adminConsoleCloseBtn = document.getElementById("adminConsoleClose");
const adminLoginView = document.getElementById("adminLoginView");
const adminLoginWho = document.getElementById("adminLoginWho");
const adminLoginForm = document.getElementById("adminLoginForm");
const adminLoginPassword = document.getElementById("adminLoginPassword");
const adminLoginStatus = document.getElementById("adminLoginStatus");
const adminTermView = document.getElementById("adminTermView");
const adminTermChips = document.getElementById("adminTermChips");
const adminTermScroll = document.getElementById("adminTermScroll");
const adminTermConfirmSlot = document.getElementById("adminTermConfirmSlot");
const adminTermForm = document.getElementById("adminTermForm");
const adminTermInput = document.getElementById("adminTermInput");
const adminLogoutButton = document.getElementById("adminLogoutButton");

const adminConsoleState = {
  open: false,
  contactId: "",
  label: "",
  stage: "login", // login | pending | terminal
  history: [],
  histIdx: -1,
  draft: "",
};

function adminFindNode(contactId) {
  return latestNodes.find((n) => getNodeAddress(n) === contactId) || null;
}

function adminShowStage(stage) {
  adminConsoleState.stage = stage;
  if (adminLoginView) adminLoginView.classList.toggle("hidden", stage === "terminal");
  if (adminTermView) adminTermView.classList.toggle("hidden", stage !== "terminal");
}

function openAdminConsole(contactId) {
  if (!adminConsoleEl) return;
  const id = String(contactId || "").trim();
  if (!id) return;
  const node = adminFindNode(id);
  adminConsoleState.open = true;
  adminConsoleState.contactId = id;
  adminConsoleState.label = node ? getNodeDisplayLabel(node) : id.slice(0, 8);
  adminConsoleState.history = [];
  adminConsoleState.histIdx = -1;
  adminConsoleState.draft = "";
  if (adminConsoleTargetEl) adminConsoleTargetEl.textContent = adminConsoleState.label;
  if (adminLoginWho) adminLoginWho.textContent = adminConsoleState.label;
  if (adminLoginStatus) {
    adminLoginStatus.textContent = "";
    adminLoginStatus.classList.remove("is-denied");
  }
  if (adminLoginPassword) adminLoginPassword.value = "";
  if (adminTermScroll) adminTermScroll.innerHTML = "";
  if (adminTermConfirmSlot) adminTermConfirmSlot.innerHTML = "";
  if (adminTermInput) adminTermInput.value = "";
  adminShowStage("login");
  adminConsoleEl.classList.remove("hidden");
  adminConsoleEl.setAttribute("aria-hidden", "false");
  if (adminLoginPassword) adminLoginPassword.focus();
}

function closeAdminConsole() {
  if (!adminConsoleEl) return;
  adminConsoleState.open = false;
  adminConsoleState.contactId = "";
  adminConsoleEl.classList.add("hidden");
  adminConsoleEl.setAttribute("aria-hidden", "true");
}

function adminAppendLine(text, kind = "in") {
  if (!adminTermScroll) return;
  const line = document.createElement("div");
  line.className = `admin-term-line admin-term-line--${kind}`;
  line.textContent = String(text ?? "");
  adminTermScroll.appendChild(line);
  // Cap scrollback so long sessions stay light.
  while (adminTermScroll.children.length > 600) {
    adminTermScroll.removeChild(adminTermScroll.firstChild);
  }
  adminTermScroll.scrollTop = adminTermScroll.scrollHeight;
}

async function adminSendCommand(command) {
  const cmd = String(command || "").trim();
  if (!cmd || !adminConsoleState.contactId) return;
  adminAppendLine(`> ${cmd}`, "out");
  if (adminConsoleState.history[adminConsoleState.history.length - 1] !== cmd) {
    adminConsoleState.history.push(cmd);
    if (adminConsoleState.history.length > 100) adminConsoleState.history.shift();
  }
  adminConsoleState.histIdx = -1;
  adminConsoleState.draft = "";
  try {
    await meshCommand("admin_cmd", { contactId: adminConsoleState.contactId, command: cmd });
  } catch (error) {
    adminAppendLine(`SEND FAILED: ${error.message}`, "err");
  }
}

async function adminRequestStats() {
  if (!adminConsoleState.contactId) return;
  adminAppendLine("> [STATS] requesting node status...", "out");
  try {
    await meshCommand("request_status", { contactId: adminConsoleState.contactId });
  } catch (error) {
    adminAppendLine(`STATUS REQUEST FAILED: ${error.message}`, "err");
  }
}

function adminConfirmReboot() {
  if (!adminTermConfirmSlot) return;
  adminTermConfirmSlot.innerHTML = "";
  adminTermConfirmSlot.appendChild(setupConfirmBlock(
    `REBOOT ${adminConsoleState.label}?`,
    "YES, REBOOT",
    () => adminSendCommand("reboot"),
  ));
}

const ADMIN_QUICK_COMMANDS = [
  { label: "VER", run: () => adminSendCommand("ver") },
  { label: "NEIGHBORS", run: () => adminSendCommand("neighbors") },
  { label: "GET RADIO", run: () => adminSendCommand("get radio") },
  { label: "STATS", run: () => adminRequestStats() },
  { label: "CLOCK SYNC", run: () => adminSendCommand("clock sync") },
  { label: "ADVERT", run: () => adminSendCommand("advert") },
  { label: "REBOOT", run: () => adminConfirmReboot(), danger: true },
];

if (adminTermChips) {
  ADMIN_QUICK_COMMANDS.forEach((entry) => {
    adminTermChips.appendChild(setupButton(entry.label, entry.run, entry.danger ? "danger" : ""));
  });
}

if (adminLoginForm) {
  adminLoginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!adminConsoleState.contactId || adminConsoleState.stage === "pending") return;
    const password = adminLoginPassword ? adminLoginPassword.value : "";
    adminConsoleState.stage = "pending";
    if (adminLoginStatus) {
      adminLoginStatus.textContent = "AUTHENTICATING OVER MESH...";
      adminLoginStatus.classList.remove("is-denied");
    }
    try {
      await meshCommand("admin_login", { contactId: adminConsoleState.contactId, password });
    } catch (error) {
      adminConsoleState.stage = "login";
      if (adminLoginStatus) adminLoginStatus.textContent = `LOGIN SEND FAILED: ${error.message}`;
    }
  });
}

if (adminTermForm) {
  adminTermForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!adminTermInput) return;
    const cmd = adminTermInput.value;
    adminTermInput.value = "";
    adminSendCommand(cmd);
  });
}

if (adminTermInput) {
  adminTermInput.addEventListener("keydown", (event) => {
    const history = adminConsoleState.history;
    if (event.key === "ArrowUp") {
      if (!history.length) return;
      event.preventDefault();
      if (adminConsoleState.histIdx === -1) {
        adminConsoleState.draft = adminTermInput.value;
        adminConsoleState.histIdx = history.length - 1;
      } else if (adminConsoleState.histIdx > 0) {
        adminConsoleState.histIdx -= 1;
      }
      adminTermInput.value = history[adminConsoleState.histIdx] || "";
    } else if (event.key === "ArrowDown") {
      if (adminConsoleState.histIdx === -1) return;
      event.preventDefault();
      if (adminConsoleState.histIdx < history.length - 1) {
        adminConsoleState.histIdx += 1;
        adminTermInput.value = history[adminConsoleState.histIdx] || "";
      } else {
        adminConsoleState.histIdx = -1;
        adminTermInput.value = adminConsoleState.draft || "";
      }
    }
  });
}

if (adminLogoutButton) {
  adminLogoutButton.addEventListener("click", async () => {
    const id = adminConsoleState.contactId;
    closeAdminConsole();
    if (id) {
      try { await meshCommand("admin_logout", { contactId: id }); } catch {}
    }
  });
}

if (adminConsoleCloseBtn) {
  adminConsoleCloseBtn.addEventListener("click", closeAdminConsole);
}

/* ---- SSE handlers (called from setupHandleSseEvent) ---- */
function adminHandleSessionEvent(payload) {
  const contactId = String(payload?.contactId || "");
  if (contactId) {
    if (payload?.success) roomSessions.add(contactId);
    else roomSessions.delete(contactId);
  }
  handleRoomSessionEvent(payload);
  if (!adminConsoleState.open || contactId !== adminConsoleState.contactId) return;
  if (payload?.success) {
    adminShowStage("terminal");
    adminAppendLine(`ACCESS GRANTED - ${payload?.isAdmin ? "ADMIN" : "GUEST"} SESSION @ ${adminConsoleState.label}`, "sys");
    if (payload?.permissions != null) {
      adminAppendLine(`PERMISSIONS: ${typeof payload.permissions === "object" ? JSON.stringify(payload.permissions) : payload.permissions}`, "sys");
    }
    adminAppendLine("TYPE A CLI COMMAND OR USE THE CHIPS ABOVE.", "sys");
    if (adminTermInput) adminTermInput.focus();
  } else if (payload?.loggedOut) {
    if (adminConsoleState.stage === "terminal") {
      adminAppendLine("SESSION CLOSED - LOGGED OUT", "err");
      adminShowStage("login");
      if (adminLoginStatus) adminLoginStatus.textContent = "LOGGED OUT.";
    }
  } else {
    adminShowStage("login");
    if (adminLoginStatus) {
      adminLoginStatus.textContent = "ACCESS DENIED";
      adminLoginStatus.classList.remove("is-denied");
      void adminLoginStatus.offsetWidth; // restart blink animation
      adminLoginStatus.classList.add("is-denied");
    }
    if (adminLoginPassword) {
      adminLoginPassword.value = "";
      adminLoginPassword.focus();
    }
  }
}

function adminHandleCmdSentEvent(payload) {
  if (!adminConsoleState.open) return;
  if (String(payload?.contactId || "") !== adminConsoleState.contactId) return;
  if (!payload?.ok) {
    adminAppendLine(`COMMAND NOT ACCEPTED BY RADIO: ${payload?.command || ""}`, "err");
  }
}

function adminHandleReplyEvent(payload) {
  if (!adminConsoleState.open || adminConsoleState.stage !== "terminal") return;
  const sender = String(payload?.sender || "");
  const text = String(payload?.text || "");
  if (!text) return;
  const lines = text.split(/\r?\n/);
  if (sender === adminConsoleState.contactId) {
    lines.forEach((line) => adminAppendLine(line, "in"));
  } else {
    const who = payload?.senderName || sender.slice(0, 8) || "?";
    lines.forEach((line) => adminAppendLine(`[${who}] ${line}`, "other"));
  }
}

function adminFormatNodeStatusLines(status) {
  const lines = [];
  const seconds = (v) => {
    const n = Number(v);
    if (!Number.isFinite(n)) return String(v);
    if (n >= 86400) return `${Math.floor(n / 86400)}d ${Math.floor((n % 86400) / 3600)}h`;
    if (n >= 3600) return `${Math.floor(n / 3600)}h ${Math.floor((n % 3600) / 60)}m`;
    if (n >= 60) return `${Math.floor(n / 60)}m ${Math.floor(n % 60)}s`;
    return `${n}s`;
  };
  Object.entries(status || {}).forEach(([key, value]) => {
    if (value == null || typeof value === "object") return;
    const k = String(key);
    const label = k.toUpperCase().replace(/_/g, " ");
    let shown = String(value);
    if (/^bat/i.test(k)) shown = `${value} mV`;
    else if (/uptime/i.test(k)) shown = seconds(value);
    else if (/airtime/i.test(k)) shown = seconds(value);
    else if (/snr/i.test(k)) shown = `${value} dB`;
    else if (/rssi|noise/i.test(k)) shown = `${value} dBm`;
    lines.push(`${label.padEnd(18, " ")} ${shown}`);
  });
  return lines;
}

function adminHandleNodeStatusEvent(payload) {
  if (!adminConsoleState.open || adminConsoleState.stage !== "terminal") return;
  if (String(payload?.contactId || "") !== adminConsoleState.contactId) return;
  if (!payload?.ok || !payload.status) {
    adminAppendLine("STATUS REQUEST FAILED OR TIMED OUT", "err");
    return;
  }
  adminAppendLine(`--- NODE STATUS: ${adminConsoleState.label} ---`, "sys");
  adminFormatNodeStatusLines(payload.status).forEach((line) => adminAppendLine(line, "in"));
}

/* ============================================================
   Room servers as chat threads (JOIN / session notices)
   ============================================================ */
const chatRoomJoinButton = document.getElementById("chatRoomJoinButton");
const chatRoomJoinBar = document.getElementById("chatRoomJoinBar");
const chatRoomJoinPassword = document.getElementById("chatRoomJoinPassword");
const chatRoomJoinSubmit = document.getElementById("chatRoomJoinSubmit");
const chatRoomJoinCancel = document.getElementById("chatRoomJoinCancel");
const chatRoomJoinStatus = document.getElementById("chatRoomJoinStatus");

function updateChatRoomJoinUi() {
  if (!chatRoomJoinButton) return;
  const peerId = String(chatState.selectedPeer || "");
  const node = peerId ? latestNodes.find((n) => getNodeAddress(n) === peerId) : null;
  const show = Boolean(node && isRoomNode(node) && !roomSessions.has(peerId));
  chatRoomJoinButton.classList.toggle("hidden", !show);
  if (!show && chatRoomJoinBar) {
    chatRoomJoinBar.classList.add("hidden");
  }
}

function appendRoomJoinNotice(peerId) {
  const text = roomJoinNotices.get(String(peerId || ""));
  if (!text || !chatReplyText) return;
  const line = document.createElement("div");
  line.className = "chat-room-notice";
  line.textContent = `*** ${text} ***`;
  chatReplyText.appendChild(line);
  chatReplyText.scrollTop = chatReplyText.scrollHeight;
}

function setRoomJoinStatus(text, denied = false) {
  if (!chatRoomJoinStatus) return;
  chatRoomJoinStatus.textContent = String(text || "");
  chatRoomJoinStatus.classList.toggle("is-denied", Boolean(denied));
}

function handleRoomSessionEvent(payload) {
  const contactId = String(payload?.contactId || "");
  const node = contactId ? latestNodes.find((n) => getNodeAddress(n) === contactId) : null;
  if (node && isRoomNode(node)) {
    if (payload?.success) {
      roomJoinNotices.set(contactId, "JOINED - SERVER WILL PUSH UNSEEN MESSAGES");
      if (roomJoinPendingId === contactId) {
        roomJoinPendingId = "";
        setRoomJoinStatus("");
        if (chatRoomJoinBar) chatRoomJoinBar.classList.add("hidden");
        if (chatRoomJoinPassword) chatRoomJoinPassword.value = "";
      }
      if (chatState.mode === CHAT_MODE_DM && chatState.selectedPeer === contactId) {
        renderDmChat();
      }
    } else if (payload?.loggedOut) {
      roomJoinNotices.delete(contactId);
    } else if (roomJoinPendingId === contactId) {
      roomJoinPendingId = "";
      setRoomJoinStatus("ACCESS DENIED", true);
    }
  }
  updateChatRoomJoinUi();
}

async function submitRoomJoin() {
  const peerId = String(chatState.selectedPeer || "");
  if (!peerId) return;
  const password = chatRoomJoinPassword ? chatRoomJoinPassword.value : "";
  roomJoinPendingId = peerId;
  setRoomJoinStatus("JOINING...");
  try {
    await meshCommand("admin_login", { contactId: peerId, password });
  } catch (error) {
    roomJoinPendingId = "";
    setRoomJoinStatus(`JOIN FAILED: ${error.message}`, true);
  }
}

if (chatRoomJoinButton) {
  chatRoomJoinButton.addEventListener("click", () => {
    if (!chatRoomJoinBar) return;
    chatRoomJoinBar.classList.remove("hidden");
    setRoomJoinStatus("");
    if (chatRoomJoinPassword) chatRoomJoinPassword.focus();
  });
}

if (chatRoomJoinSubmit) {
  chatRoomJoinSubmit.addEventListener("click", submitRoomJoin);
}

if (chatRoomJoinPassword) {
  chatRoomJoinPassword.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitRoomJoin();
    }
  });
}

if (chatRoomJoinCancel) {
  chatRoomJoinCancel.addEventListener("click", () => {
    if (chatRoomJoinBar) chatRoomJoinBar.classList.add("hidden");
    setRoomJoinStatus("");
  });
}
