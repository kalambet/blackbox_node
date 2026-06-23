// pm2 config for a Blackbox Node FIELD NODE (e.g. Raspberry Pi).
//
// This node runs the dashboard + MeshCore radio bridge locally and OFFLOADS all
// LLM inference to a home machine over Tailscale. It needs no local llama
// runtime or GGUF model.
//
// Setup on the Pi:
//   1. Tailscale:   curl -fsSL https://tailscale.com/install.sh | sh && sudo tailscale up
//   2. Install app: BLACKBOX_SKIP_BOOTSTRAP=1 npm install   (skips llama runtime + model)
//                   pip install --target ./pydeps meshcore   (or let it install lazily)
//   3. pm2:         npm install -g pm2
//   4. cp ecosystem.pi.example.js ecosystem.config.js   # your copy is gitignored
//      edit: cwd, HOST, LLM_REMOTE_URL, MESHCORE_ADDRESS  (the <...> placeholders)
//   5. pm2 start ecosystem.config.js
//      pm2 logs blackbox   /   pm2 restart blackbox   /   pm2 status
//
// (pm2 restarts on crash by itself; only run `pm2 startup` + `pm2 save` if you
//  want it to auto-start at boot too.)

module.exports = {
  apps: [
    {
      name: "blackbox",
      script: "server.js",

      // Absolute checkout path ON THE PI. CHANGE THIS.
      cwd: "/home/pi/blackbox_node",

      // --- restart policy -----------------------------------------------------
      autorestart: true,
      max_restarts: 10,
      restart_delay: 3000,
      max_memory_restart: "1G", // the Pi runs no LLM, so keep this tight

      // --- environment (remote inference field node) --------------------------
      env: {
        LLM_MODE: "remote",

        // Home machine's llama-server, fronted by `tailscale serve` (TLS+MagicDNS).
        // CHANGE THIS to your host's tailnet name (or http://100.x.y.z:8080).
        LLM_REMOTE_URL: "https://<your-host>.<your-tailnet>.ts.net",

        // Bind the dashboard to THIS Pi's tailnet IP (tailnet-only access).
        // Find it with: tailscale ip -4   ->   CHANGE THIS.
        HOST: "<pi-tailnet-ip>",
        PORT: "7860",

        // WisMesh / MeshCore radio over USB. Find it with:
        //   ls /dev/ttyACM* /dev/ttyUSB*   (usually /dev/ttyACM0)
        // Omit this line entirely to let the bridge auto-detect.
        MESHCORE_ADDRESS: "/dev/ttyACM0",

        // Headless: don't try to open a browser.
        BLACKBOX_NO_BROWSER: "1",
      },
    },
  ],
};
