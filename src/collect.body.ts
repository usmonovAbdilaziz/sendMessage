import { IncomingMessage } from "http";

export function bodyData(req: IncomingMessage): Promise<string> {
  return new Promise((res, rej) => {
    let body = "";

    // Collect data chunks from the request
    req.on("data", (chunk: Buffer) => {
      body += chunk.toString();
    });

    // When all data has been received, resolve the promise
    req.on("end", () => {
      res(body);
    });

    // Handle any possible errors during data reading
    req.on("error", (err: Object) => {
      rej(err);
    });
  });
}
