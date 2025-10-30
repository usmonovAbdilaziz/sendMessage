const url = "https://test.icorp.uz/interview.php"; // Target API endpoint for POST request
const myUrl = "https://unsoftening-quadrumanous-gerald.ngrok-free.dev/webhook"; // Webhook callback URL

export const postData = async () => {
  try {
    // Send POST request with JSON body
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ msg: "Hello world", url: myUrl }),
    });

    // Parse the JSON response from the server
    const res = await data.json();

    // Return the response
    return res;
  } catch (error) {
    // Handle and log any errors that occur during the request
    console.log("Error occurred while sending POST request");
  }
};
