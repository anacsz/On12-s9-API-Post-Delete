const express = require("express");
const app = express();

const index = require("./index")
const tasks = require("./routes/toDoRoutes");

app.use(express.json());


module.exports = app;