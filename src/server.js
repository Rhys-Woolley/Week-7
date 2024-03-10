const express = require("express");

const app = express();

const fakeArr = [];

app.use(express.json());

app.get("/books", (request, response) => {
  response.send({ message: "success", fakeArr: fakeArr });
});

app.get("/books", (req, res) => {
  const book = fakeArr[0];
  response.send({ message: "success", book: book });
});

app.post("/books", (request, response) => {
  fakeArr.push(request.body);
  console.log(fakeArr);
  response.send({ message: "success", newBook: fakeArr[fakeArr.length - 1] });
});

app.listen(5001, () => {
  console.log("Server is listening on Port 5001");
});
