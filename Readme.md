## Environment Variables

This project uses environment variables for configuration:

- `.env.example` - Template file showing required environment variables
- `.env` - Actual environment configuration file (not committed to git)

The `.env` file should contain your webhook URL:

```
urlWEB="https://api.example.com/interview"
url="https://your-ngrok-url.ngrok-free.dev/webhook"
```

## Project Structure

- `app.ts`: Main application file that sets up the HTTP server and orchestrates the data collection process. Contains all functionality:
  - POST request handling to the interview endpoint
  - Request body data collection utility
  - GET request handling for final data retrieval
- `.env`: Configuration file containing the webhook URLs (not committed to git).
- `.env.example`: Template showing the required environment variables.

## Setup and Usage

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file based on `.env.example` and add your webhook URLs:

   ```bash
   cp .env.example .env
   ```

   Then edit the `.env` file to include your API endpoint and ngrok webhook URL.

3. Compile TypeScript to JavaScript:

   ```bash
   npx tsc
   ```

4. Run the application:

   ```bash
   node app.js
   ```

5. The server will start on port 4000 and begin the data collection process automatically.

## How It Works

1. The application sends an initial POST request to the API endpoint specified in `urlWEB`
2. The API responds with `part1` of a method code
3. The application sets up a webhook server listening on `/webhook` to receive `part2`
4. When both parts are collected, they are combined to form the complete method code
5. A final GET request is made to retrieve the challenge result

## Requirements

- Node.js (version 18 or higher recommended for native fetch support)
- npm

## Notes

- The webhook URL in `.env` should match your ngrok tunnel or deployment URL.
- The application listens on port 4000 by default.
- Both parts (part1 and part2) are required to complete the challenge successfully.
