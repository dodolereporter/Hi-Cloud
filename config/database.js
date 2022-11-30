const mysql      = require('mysql2/promise');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'HICLOUDpass',
    database : 'hi-cloud',
    dateStrings: true
});

module.exports = connection;