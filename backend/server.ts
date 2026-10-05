// server.js
import http from 'http';

const hostname = "localhost"; // localhost
const port = 3000;



const server = http.createServer((req, res) => {
    const dummyData = [
    {
        name: "John Doe",
        age: 30,
        email: "johndoe@doey.com"
    },
    {
        name: "Jane Doe",
        age: 25,
        email: "janny@doey.com"
    }
]
  try {

    res.setHeader("Content-Type", "application/json");

  console.log(`Received ${req.method} request for ${req.url}`);

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200);
    return res.end(JSON.stringify({ message: "Server is running" }));
  }

  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200); // Status code
    return res.end(JSON.stringify({ status: "ok" }));
  }

  if (req.method === "GET" && req.url === "/data") {
    res.writeHead(200);
    return res.end(JSON.stringify({ data: dummyData }));
  }

  if (req.method === "POST" && req.url === "/add-data") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
      console.log(`Received data chunk: ${chunk}`);
    });

    req.on("end", () => {
      try {
        const newData = JSON.parse(body);
        dummyData.push(newData);
        body = JSON.stringify(body);
      } catch (error) {
        res.writeHead(400);
        return res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });

    console.log(`Received POST request with body: ${body}`);
    const newData = JSON.parse(body);
    dummyData.push(newData);
    res.writeHead(200);
    return res.end(JSON.stringify({ message: "Data added successfully", data: [...dummyData] }));
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "Route not found" }));

  } catch(error) {
    res.writeHead(500);
    res.end(JSON.stringify({ error: "Internal Server Error", errorMessage: error instanceof Error ? error.message : String(error) }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
