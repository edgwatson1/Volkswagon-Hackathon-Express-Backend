const mysql = require("mysql");
// const keys = require("../keys");

// const connection = mysql.createConnection({
//   host: keys.MYSQL_HOST,
//   user: keys.MYSQL_USER,
//   password: keys.MYSQL_PASSWORD,
//   database: keys.MYSQL_DATABASE
// });

require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

module.exports = connection;
