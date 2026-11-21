
const http = require("node:http");

const { validateEnv } = require("@namansaini/env-guard-js");

// Validate environment variables using our published npm package
const config = validateEnv(
  {
    PORT: {
      type: "number",
      default: 3000,
    },
    NODE_ENV: {
      type: "string",
      default: "production",
    },
    DEBUG: {
      type: "boolean",
      default: false,
    },
  },
  {
    env: process.env,
  }
);

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200);

    res.end(
      JSON.stringify({
        message: "Environment configuration validated successfully!",
        package: "@namansaini/env-guard-js",
        configuration: config,
      }, null, 2)
    );
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(config.PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${config.PORT}`);
});
