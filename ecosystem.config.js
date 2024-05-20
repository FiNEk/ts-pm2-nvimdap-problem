module.exports = {
  apps: [
    {
      name: "ts-hello-world",
      script: "./dist/main.js",
      watch: true,
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      restart_delay: 1000,
      node_args: "--inspect=9229", // Debugger port
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
