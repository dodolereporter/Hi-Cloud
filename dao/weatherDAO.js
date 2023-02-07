
const connection = require("../config/database")


const getById = async (id) => {
    const conn = await connection;
    const [rows] = await conn.query("SELECT * FROM weather WHERE id = " + id);
    return rows[0];
}

const getAll = async () => {
    const conn = await connection;
    const [rows] = await conn.query("SELECT * FROM weather");
    return rows;
}


const getLastMean = async () => {
    const conn = await connection;
    const [rows] = await conn.query("SELECT" +
        " AVG(temp) AS temps, " +
        " AVG(humidity) AS humids " +
        " FROM " +
        " weather w " +
        " WHERE " +
        " w.date = ( " +
        " SELECT " +
        " MAX(w2.date) " +
        " FROM " +
        " weather w2) " +
        " AND w.time > DATE_ADD(NOW(), INTERVAL -3 HOUR)");
    return rows[0];
}

const getDayMean = async (dayMinus) => {
    const conn = await connection;
    const [rows] = await conn.query("SELECT " +
        " AVG(temp) AS temps, " +
        " AVG(humidity) AS humids " +
        "FROM " +
        " weather w " +
        "WHERE " +
        " w.date = DATE_FORMAT(DATE_ADD(NOW(), INTERVAL -"+dayMinus+" DAY) , '%Y%m%d')");
    return rows[0];
}
const create = async (date, time, temp, humidity, station_id) => {
    const conn = await connection;
    const [result] = await conn.query(`INSERT INTO weather (\`date\`, \`time\`, temp, humidity, station_id) VALUES ('${date}', '${time}', '${temp}', '${humidity}', '${station_id}')`);
    return result.insertId;
}

module.exports = {
    getById,
    getLastMean,
    getDayMean,
    getAll,
    create
}
