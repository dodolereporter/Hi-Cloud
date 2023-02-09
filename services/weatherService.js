const {connection} = require("../config/database");
const {getById, getAll, getLastMean, getDayMean, create} = require("../dao/weatherDAO")
async function getWeatherFromId(id) {
    return await getById(id);
}

async function getDayWeatherMean(dayMinus) {
    return await getDayMean(dayMinus);
}
async function getWeathers() {
    return await getAll();
}
async function getLastWeatherMean() {
    return await getLastMean();
}
async function createWeather(temp, humidity, station_id) {
    const dateTime = new Date().toISOString();
    const date = dateTime.substring(0, 10);
    const time = dateTime.substring(11, 19);

    const id = await create(date, time, temp, humidity, station_id);
    return await getById(id);
}



module.exports = {
    getWeatherFromId,
    getLastWeatherMean,
    getDayWeatherMean,
    getWeathers,
    createWeather
}
