const express = require("express");
const app = express();
app.use(express.static("./dist/frontend"));
app.get("/*", function (req, res) {
  res.sendFile("index.html");
});
app.listen(process.env.PORT || 8080);
