import { createServer, IncomingMessage } from "http";
import { postData } from "./src/post.data";
import { bodyData } from "./src/collect.body";
import { getData } from "./src/get.data";

let success = false;
let parts = { part1: "", part2: "" };

const server = createServer(async (req: IncomingMessage, res: any) => {
  // Allow requests from any origin (CORS)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  // Handle POST requests to the /webhook endpoint
  if (req.method === "POST" && req.url === "/webhook") {
    // Collect body data from the request
    const body = await bodyData(req);
    try {
      // Parse the JSON body and extract part2
      parts.part2 = (await JSON.parse(body)).part2;
      success = true;
      console.log("part2 received:", parts.part2);

      // Send success response
      res.end(JSON.stringify({ success: true }));
    } catch (error) {
      console.log("Error in POST method:", error);
    }
  } else {
    // Handle any other endpoints
    console.log("Not found");
  }
});

// Immediately execute an async function to send the initial POST request
(async function () {
  try {
    // Send data and extract part1 from the response
    parts.part1 = (await postData()).part1;
    console.log("part1 received:", parts.part1);
  } catch (error) {
    console.log("Error while getting part1:", error);
  }
})();

// Check every second if both parts are received
const timer = setInterval(() => {
  if (success) {
    if (!parts.part1 || !parts.part2) {
      console.log("Please try again, missing parts.");
    }

    clearInterval(timer);

    // Combine part1 and part2 to form the final method string
    const method = parts.part1 + parts.part2;
    console.log("Combined method:", method);

    // Fetch data using the combined method
    (async function () {
      try {
        const data = await getData(method);
        console.log("Result:", data);
      } catch (error) {
        console.log("Error while fetching data:", error);
      }
    })();
  }
}, 1000);

// Start the server
server.listen(4000, () => console.log("Server running on port 4000"));
