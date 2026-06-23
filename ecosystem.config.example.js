// pm2 process config for Blackbox Node.
//
// Quick start:
//   npm install -g pm2
//   cp ecosystem.config.example.js ecosystem.config.js   # your copy is gitignored
//   # edit `cwd` (and `env` if this is a remote-inference field node), then:
//   pm2 start ecosystem.config.js
//
// Day-to-day (manual control):
//   pm2 status            # uptime, restart count, memory
//   pm2 logs blackbox     # tail stdout + stderr
//   pm2 restart blackbox  # manual restart
//   pm2 stop blackbox     # stop (stays in list, won't relaunch)
//   pm2 delete blackbox   # remove entirely
//
// NOTE: pm2 restarts the process on crash by itself. It only auto-starts at
// BOOT if you additionally run `pm2 startup` + `pm2 save`. Skip those two to
// keep startup fully manual.

module.exports = {
  apps: [
    {
      name: "blackbox",

      // `npm start` just runs `node server.js`; calling node directly avoids an
      // extra npm wrapper process so pm2's stop/restart signals reach the server
      // (whose SIGTERM handler reaps the llama-server + bridge.py children).
      script: "server.js",

      // Absolute path to YOUR checkout — pm2 requires it absolute. CHANGE THIS.
      cwd: "/absolute/path/to/blackbox_node",

      // --- restart policy -----------------------------------------------------
      autorestart: true,        // relaunch on crash (the whole point)
      max_restarts: 10,         // give up after 10 crash-loops in a row
      restart_delay: 3000,      // wait 3s between restarts (don't hammer)
      max_memory_restart: "2G", // restart if memory grows past 2 GB (leak guard)

      // --- logs ---------------------------------------------------------------
      // Tail with `pm2 logs blackbox`. By default pm2 writes to ~/.pm2/logs.
      // Uncomment to pin them into the repo's ./logs (gitignored) instead:
      // out_file: "./logs/blackbox.out.log",
      // error_file: "./logs/blackbox.err.log",

      // --- environment --------------------------------------------------------
      env: {
        // INFERENCE HOST (e.g. a Mac Mini): leave this empty. With no LLM_MODE
        // the app defaults to LOCAL inference and spawns the bundled
        // llama-server on 127.0.0.1:8080.

        // THIN FIELD NODE (e.g. a Raspberry Pi) offloading inference to a home
        // machine over Tailscale: uncomment and fill these. (You can also set
        // them live from the dashboard under SETUP -> INFERENCE instead.)
        //
        // LLM_MODE: "remote",
        // LLM_REMOTE_URL: "https://mac-mini.tailnet.ts.net", // host llama-server fronted by `tailscale serve`
        // HOST: "100.x.y.z",                // bind the dashboard to THIS node's tailnet IP (tailnet-only access)
        // PORT: "7860",                     // web UI port (default 7860)
        // MESHCORE_ADDRESS: "/dev/ttyACM0", // radio serial device; omit to auto-detect
        // BLACKBOX_NO_BROWSER: "1",         // headless: don't try to open a browser
        // BLACKBOX_SKIP_BOOTSTRAP is an INSTALL-time flag (set before `npm install`),
        // not a runtime env — it skips downloading the local llama runtime + model.
      },
    },
  ],
};
