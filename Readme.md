
## Project Structure

- `app.ts`: Main application file that sets up the HTTP server and orchestrates the data collection process.
- `src/post.data.ts`: Handles the initial POST request to the interview endpoint.
- `src/collect.body.ts`: Utility function to collect the request body data from incoming HTTP requests.
- `src/get.data.ts`: Handles the final GET request with the combined parts.

## Setup and Usage

1. Install dependencies:
   ```bash
   npm install
   ```

2. Compile TypeScript to JavaScript:
   ```bash
   npx tsc
   ```

3. Run the application:
   ```bash
   node app.js
   ```

4. The server will start on port 4000 and begin the data collection process automatically.

## Requirements

- Node.js (version 18 or higher recommended for native fetch support)
- npm

## Notes

- The webhook URL in `post.data.ts` may need to be updated to match your ngrok tunnel or deployment URL.
- The application listens on port 4000 by default.
- Both parts (part1 and part2) are required to complete the challenge successfully.