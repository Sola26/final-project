const express = require("express");
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/static"));
app.get("*", function(req, res) {
  console.log("req.url", req.url);
  res.sendfile(__dirname + "/index.html");
});

app.listen(port);
console.log("server started!");
