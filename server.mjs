// Use a more strict check on the following script
// This is not actually needed because the MJS files have "strict mode" enabled by default
'use strict';

// Import the needed functions from the specified package
import { createServer } from "node:http";

// stringify converts a JS Object to JSON
const data = JSON.stringify([
  {
    id: "A1",
    name: "Vacuum Cleaner",
    rrp: "99.99",
    info: "The most powerful vacuum in the world.",
  },
  {
    id: "A2",
    name: "Leaf Blower",
    rrp: "303.33",
    info: "This product will blow your socks off.",
  },
  {
    id: "B1",
    name: "Chocolate Bar",
    rrp: "22.40",
    info: "Delicious overpriced chocolate.",
  },
]);

// Create the server to handle for requests
const server = await createServer((req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Set Content-Type header to JSON
  res.writeHead(200, { "Content-Type": "application/json" });
  // Send data
  res.end(data);
});

// The server listens to requests on port 3000
server.listen(3000);

// Just a console log message
console.log("Server listening on port http://localhost:3000/")