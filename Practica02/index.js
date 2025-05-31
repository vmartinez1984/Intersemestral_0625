const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
const dirFiles = path.join(__dirname, "public");
const staticFiles = express.static(dirFiles);

app.use(staticFiles);

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
