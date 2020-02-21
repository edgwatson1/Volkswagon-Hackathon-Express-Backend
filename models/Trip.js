const connection = require("../db/config");
const Trip = {};

Trip.getAll = (callback) => {
    console.log(connection);
  connection.query(
    'SELECT trip.id AS id, driver, start_trip, end_trip, destination, car_start_mileage, car_end_mileage, car_id, car.plate, car.img_url, car.img_url_alternative, car.make, car.model FROM trip INNER JOIN car ON trip.car_id = car.id ORDER BY start_trip DESC ',
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Trip.create = (tripInfo, callback) => {
    connection.query(
        `INSERT INTO trip (driver, start_trip, end_trip, destination, car_start_mileage, car_end_mileage, car_id)
               VALUES (
                   ?,
                   ?,
                   ?,
                   ?,
                   ?,
                   ?,
                   ?
               )`,
        [
            tripInfo.driver,
            new Date(tripInfo.start_trip),
            new Date(tripInfo.end_trip),
            tripInfo.destination,
            0,
            0,
            +tripInfo.car_id
        ],
        (err, results, fields) => {
            callback(err, results, fields);
        }
    );
};

Trip.edit = (trip, id, callback) => {
    connection.query(
        `UPDATE trip
      SET
        driver = ?,
        start_trip = ?,
        end_trip = ?,
        destination = ?,
        car_start_mileage = ?,
        car_end_mileage = ?,
        car_id = ?
      WHERE
        id = ?`,
        [
            trip.driver,
            new Date(trip.start_trip),
            new Date(trip.end_trip),
            trip.destination,
            +trip.car_start_mileage,
            +trip.car_end_mileage,
            +trip.car_id,
            +id
        ],
        (err, results, fields) => {
            callback(err, results, fields);
        }
    );
};

Trip.delete = (id, callback) => {
    connection.query(
        "DELETE FROM trip WHERE id=?",
        [+id],
        (err, results, fields) => {
            callback(err, results, fields);
        }
    );
};

Trip.getMetricsByCar = (cb) => {
    connection.query(`
            SELECT car.plate plate, car_id carId, YEAR(end_trip) year, MONTH(end_trip) month, SUM(car_end_mileage - car_start_mileage) totalMileage FROM trip 
                JOIN car
                ON trip.car_id = car.id
            GROUP BY car_id,  
                YEAR(end_trip),
                MONTH(end_trip) 
        `, (err, results, fields) => {
            cb(err, results);
        }
    );
};

Trip.getMetricsByDriver = (cb) => {
    connection.query(`
            SELECT driver, YEAR(end_trip) year, MONTH(end_trip) month, SUM(car_end_mileage - car_start_mileage) totalMileage FROM trip 
            GROUP BY driver,
                YEAR(end_trip),
                MONTH(end_trip)
        `, (err, results, fields) => {
            cb(err, results);
        }
    );
};


module.exports = Trip;
