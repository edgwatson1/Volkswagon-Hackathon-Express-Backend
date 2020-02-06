const connection = require("../db/config");
const Car = {};

Car.getAll = (callback) => {
  connection.query(
    'SELECT * FROM car',
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

module.exports = Car;
