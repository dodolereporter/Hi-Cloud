const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();
const connection = require("../config/database")
const {getWeatherFromId, getWeathers, createWeather} = require("../services/weatherService");

router.get("/", async (req, res, next) => {
    router.use(express.json());
    res.json(await getWeathers());
})

router.get("/:id",  async (req, res) => {
    router.use(express.json());
    res.json(await getWeatherFromId(req.params.id));
})
router.post("/",  async (req, res) => {
    const newWeather = req.body;
    res.json(await createWeather(newWeather.temp, newWeather.humidity, newWeather.station_id));
})
module.exports = router;