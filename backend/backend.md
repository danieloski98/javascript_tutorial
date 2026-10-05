### What is nodejs
Nodejs is a javascript runtime that enable us run javascript code outside of our browser.

### What does HTTP stand for
HTTP stands for Hyper Text Transfer Protocol

### HTTP Methods
#### GET -> used for getting data
#### PUT -> used for updating data
#### PATCH -> used for updating data
#### POST -> used for creating data
#### DELETE -> used for deleting data
#### OPTION -> used for asking the server for the method it supports

### Basic http server in nodejs

```ts

// server.js
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200);
    return res.end(JSON.stringify({ message: "Server is running" }));
  }

  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200);
    return res.end(JSON.stringify({ status: "ok" }));
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "Route not found" }));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

```

### setting up a server in express

```ts

// server.js
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Express server is running" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "name and email are required",
    });
  }

  res.status(201).json({
    message: "User created",
    user: { name, email },
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

```