
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

const create = async (date, time, temp, humidity, station_id) => {
    const conn = await connection;
    const [result] = await conn.query(`INSERT INTO weather (\`date\`, \`time\`, temp, humidity, station_id) VALUES ('${date}', '${time}', '${temp}', '${humidity}', '${station_id}')`);
    return result.insertId;
}

module.exports = {
    getById,
    getAll,
    create
}