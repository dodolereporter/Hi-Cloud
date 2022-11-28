const express = require("express");
const app = express()
const port = 8080

const indexRoute = require("./routes/index")
const apiRoute = require("./routes/api")

app.use("/", indexRoute)
app.use("/api", apiRoute)

app.listen(port, () => {  console.log("Application démarée sur le port : " + port)});