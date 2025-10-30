## Environment Variables

This project uses environment variables for configuration:

- `.env.example` - Template file showing required environment variables
- `.env` - Actual environment configuration file (not committed to git)

The `.env` file should contain your webhook URL:

```
url="https://your-ngrok-url.ngrok-free.dev/webhook"
```

## Project Structure

- `app.ts`: Main application file that sets up the HTTP server and orchestrates the data collection process.
- `src/post.data.ts`: Handles the initial POST request to the interview endpoint, using the webhook URL from environment variables.
- `src/collect.body.ts`: Utility function to collect the request body data from incoming HTTP requests.
- `src/get.data.ts`: Handles the final GET request with the combined parts.
- `.env`: Configuration file containing the webhook URL (not committed to git).
- `.env.example`: Template showing the required environment variables.

## Setup and Usage

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file based on `.env.example` and add your webhook URL:

   ```bash
   cp .env.example .env
   ```

   Then edit the `.env` file to include your ngrok webhook URL.

3. Compile TypeScript to JavaScript:

   ```bash
   npx tsc
   ```

4. Run the application:

   ```bash
   node app.js
   ```

5. The server will start on port 4000 and begin the data collection process automatically.

## Requirements

- Node.js (version 18 or higher recommended for native fetch support)
- npm

## Notes

- The webhook URL in `.env` should match your ngrok tunnel or deployment URL.
- The application listens on port 4000 by default.
- Both parts (part1 and part2) are required to complete the challenge successfully.
