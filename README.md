# Env Guard Demo

A simple Node.js project demonstrating the usage of [`@namansaini/env-guard-js`](https://www.npmjs.com/package/@namansaini/env-guard-js), a lightweight environment variable validation library.

## Installation

Clone this repository:

```bash
git clone https://github.com/Naman67780/env-guard-demo.git
cd env-guard-demo
```

Install dependencies:

```bash
npm install
```

## Usage

Run the demonstration:

```bash
node index.js
```

## Features Demonstrated

This project demonstrates how to use `@namansaini/env-guard-js` to:

- Validate environment variables.
- Convert string values into numbers and booleans.
- Apply default values when environment variables are missing.
- Create a validated configuration object.

## Example

```javascript
const { validateEnv } = require("@namansaini/env-guard-js");

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

console.log(config);
```

## Expected Output

```text
{
  PORT: 5000,
  NODE_ENV: 'production',
  DEBUG: true
}
```

## NPM Package

Install the package:

```bash
npm install @namansaini/env-guard-js
```

Package: https://www.npmjs.com/package/@namansaini/env-guard-js

## Author

Naman Saini

GitHub: https://github.com/Naman67780