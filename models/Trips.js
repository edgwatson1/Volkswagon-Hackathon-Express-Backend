const connection = require("../db/config");

const Trips = {};

Trips.getAll = callback => {
  connection.query("SELECT * FROM trip", (err, results, fields) =>
    callback(err, results, fields)
  );
};

// Trips.create = (tripInfo, callback) => {
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

// Trips.edit = (tripInfo, callback) => {
//   connection.query(
//     `UPDATE trip
//       SET
//         name = ?,
//         user_type_id = ?,
//         language_id = ?,
//         product_id = ?
//       WHERE
//         id = ?`,
//     [
//       trips.name,
//       +trips.user_type_id,
//       +trips.language_id,
//       +trips.product_id,
//       +trips.id
//     ],
//     (err, results, fields) => {
//       callback(err, results, fields);
//     }
//   );
// };

// Trip.delete = (tripInfo, callback) => {
//   connection.query(
//     "DELETE FROM trip WHERE id=?",
//     [+tripInfo.id],
//     (err, results, fields) => {
//       callback(err, results, fields);
//     }
//   );
// };

module.exports = Trips;
