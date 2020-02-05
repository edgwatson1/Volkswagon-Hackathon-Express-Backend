const Trips = require("../models/Trips");

const getAllTrips = (req, res, next) => {
  Trips.GetAll(req.body, err => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const createTrip = (req, res, next) => {
  Trips.create(req.body, err => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

module.exports = {
  getAllTrips,
  createTrip
};
