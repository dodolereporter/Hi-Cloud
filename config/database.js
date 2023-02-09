const mysql      = require('mysql2/promise');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'HiCloudAPI',
    password : 'HiCloud69',
    database : 'hi-cloud',
    dateStrings: true
});

module.exports = connection;
