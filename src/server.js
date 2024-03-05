const express = require("express");

const app = express();

// HTTP Verbs - GET, POST, PUT, DELETE
// Sends GET request
// const response = await fetch("http://someaddress.com");

// Receives GET request
app.get("/example", (request, response) => {
  response.send("Hello there!");
});

app.listen(5001, () => {
  console.log("Server is listening on Port 5001");
});
