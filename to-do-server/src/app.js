const express = require("express");
const app = express();


const index = require("./index")

const tasks = require("./routes/toDoRoutes");

app.use(express.json());

app.use("/", index);
app.use("/tarefas", tasks);

module.exports = app;


