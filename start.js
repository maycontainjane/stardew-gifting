const path = require("path");
const express = require("express");

const app = express();
const static = path.join(__dirname, "build");

const port = process.env.PORT || 3000;

app.use(express.static(static));

app.get("/", (req, res) => res.sendFile(path.join(static, "index.js")));

app.listen(port, () => {console.log("Stardew gift guide is running.")})