const express = require("express");
const app = express()
const port = 4000

const { connection } = require("./config/database");

const indexRoute = require("./routes/index")
const weatherRoute = require("./routes/weather")
const userRoute = require("./routes/user")

app.use("/", indexRoute)
app.use(express.json());
app.use("/api/weather", weatherRoute)
app.use("/api/users", userRoute)


app.listen(port, () => {  console.log("Application démarée sur le port : " + port)});
