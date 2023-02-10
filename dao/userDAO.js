
const connection = require("../config/database")
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

const getById = async (id) => {
    const conn = await connection;
    const [rows] = await conn.query("SELECT * FROM users WHERE id = " + id);
    return rows[0];
}

const getByUsernamePass = async (username, password) => {
    const conn = await connection;
    const [rows] = await conn.query("SELECT * FROM users WHERE username = '" + username +"' AND password = '" + password +"'");
    return rows[0];
}

const getByUsername = async (username) => {
    const conn = await connection;
    const [rows] = await conn.query("SELECT * FROM users WHERE username = '" + username +"'");
    return rows[0];
}

const isCorrect = async (username, password) => {
    const conn = await connection;
    const [rows] = await conn.query("SELECT * FROM users WHERE username = '" + username +"' AND password = '" + password +"'");
    if (rows[0]) {
        return true;
    };
    return false;
}



const create = async (username, email, password) => {
    const conn = await connection;


    password = encrypt(password);

    const [result] = await conn.query(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`);
    return result.insertId;
}

module.exports = {
    getById,
    getByUsername,
    getByUsernamePass,
    create,
    isCorrect
}
