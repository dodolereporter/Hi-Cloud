const express = require("express");
const app = express()
const port = 80

const indexRoute = require("./routes/index")

app.use("/", indexRoute)

app.listen(port);
console.log("Application démarée sur le port :" + port)