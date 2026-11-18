
const { validateEnv } = require("@namansaini/env-guard-js");

// Define the environment variables and their validation rules
const config = validateEnv(
  {
    PORT: {
      type: "number",
      default: 3000,
    },

    NODE_ENV: {
      type: "string",
      default: "development",
    },

    DEBUG: {
      type: "boolean",
      default: false,
    },
  },
  {
    env: {
      PORT: "5000",
      NODE_ENV: "production",
      DEBUG: "true",
    },
  }
);

// Display the validated configuration
console.log("Environment configuration validated successfully!");
console.log(config);
