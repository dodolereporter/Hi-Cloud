const express = require("express");
const app = express()
const port = 4000

const { connection } = require("./config/database");

const indexRoute = require("./routes/index")
const weatherRoute = require("./routes/weather")
const {getWeatherFromId} = require("./services/weatherService");

app.use("/", indexRoute)
app.use(express.json());
app.use("/weather", weatherRoute)


app.listen(port, () => {  console.log("Application démarée sur le port : " + port)});
