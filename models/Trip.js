const connection = require("../db/config");
const Trip = {};

Trip.getAll = (callback) => {
  connection.query(
    'SELECT trip.id AS id, driver, start_trip, end_trip, destination, car_start_mileage, car_end_mileage, car_id, car.plate, car.img_url FROM trip INNER JOIN car ON trip.car_id = car.id ORDER BY start_trip DESC ',
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
       +tripInfo.car_start_mileage,
       +tripInfo.car_end_mileage,
       +tripInfo.car_id
     ],
     (err, results, fields) => {
       callback(err, results, fields);
     }
   );
 };
Trip.edit = (trip, params, callback) => {
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
      +params
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    }
  );
};

Trip.delete = (id, callback) => {
  connection.query(
    "DELETE FROM trip WHERE id=?",
    [
      +id
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    }
  );
};
module.exports = Trip;
