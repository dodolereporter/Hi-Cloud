const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();
const connection = require("../config/database")
const {getWeatherFromId, getWeathers, getLastWeatherMean, getDayWeatherMean, createWeather} = require("../services/weatherService");

router.get("/", async (req, res, next) => {
    router.use(express.json());
    res.json(await getWeathers());
})

router.get("/lastMean",  async (req, res) => {
    router.use(express.json());
    res.json(await getLastWeatherMean());
})

router.get("/dayMean/:dayMinus",  async (req, res) => {
    router.use(express.json());
    res.json(await getDayWeatherMean(req.params.dayMinus));
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
