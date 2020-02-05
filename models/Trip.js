const connection = require("../db/config");

const Trip = {};

Trip.getAll = callback => {
  connection.query("SELECT * FROM trip", (err, results, fields) => {
    callback(err, results, fields);
  });
};

// Trip.create = (tripInfo, callback) => {
//   connection.query(
//     `INSERT INTO trip (name, start_trip, end_trip, destination, car_start_mileage, car_end_mileage, car_id)
//               VALUES (
//                   ?,
//                   ?,
//                   ?,
//                   ?,
//                   ?,
//                   ?,
//                   ?
//               )`,
//     [
//       tripInfo.name,
//       +tripInfo.startTrip,
//       +tripInfo.endTrip,
//       +tripInfo.destination,
//       +tripInfo.carStartMileage,
//       +tripInfo.carEndMileage,
//       +tripInfo.carID
//     ],
//     (err, results, fields) => {
//       callback(err, results, fields);
//     }
//   );
// };

Trip.edit = (trip, params, callback) => {
  connection.query(
    `UPDATE trip
      SET
        name = ?,
        start_trip = ?,
        end_trip = ?,
        destination = ?,
        car_start_mileage = ?,
        car_end_mileage = ?,
        car_id = ?
      WHERE
        id = ?`,
    [
      trip.name,
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

// Trip.delete = (tripInfo, callback) => {
//   connection.query(
//     "DELETE FROM trip WHERE id=?",
//     [+tripInfo.id],
//     (err, results, fields) => {
//       callback(err, results, fields);
//     }
//   );
// };

module.exports = Trip;
