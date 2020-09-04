var express = require("express");
var app = express();
var path = require("path");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/h", function (req, res) {
  res.send({ payload: "H" });
});
app.get("/e", function (req, res) {
  res.send({ payload: "e" });
});
app.get("/l", function (req, res) {
  res.send({ payload: "l" });
});
app.get("/l", function (req, res) {
  res.send({ payload: "l" });
});
app.get("/o", function (req, res) {
  res.send({ payload: "o" });
});
app.listen(8080, () => {
  console.log("Server listening on localhost:8080");
});
