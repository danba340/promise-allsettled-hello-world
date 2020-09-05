var express = require("express");
var app = express();
var path = require("path");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/h", function (req, res) {
  setTimeout(() => {
    res.send({ payload: "H" });
  }, 2000);
});
app.get("/e", function (req, res) {
  setTimeout(() => {
    res.send({ payload: "e" });
  }, 2000);
});
app.get("/l", function (req, res) {
  setTimeout(() => {
    res.send({ payload: "l" });
  }, 2000);
});
app.get("/l", function (req, res) {
  setTimeout(() => {
    res.send({ payload: "l" });
  }, 2000);
});
app.get("/o", function (req, res) {
  setTimeout(() => {
    res.send({ payload: "o" });
  }, 2000);
});
app.listen(8080, () => {
  console.log("Server listening on localhost:8080");
});
