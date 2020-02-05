const Trip = require("../models/Trip");

const getAllTrips = (req, res, next) => {
  Trip.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ trips: results });
  });
};

const createTrip = (req, res, next) => {
  Trip.create(req.body, err => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const editTrip = (req, res, next) => {
  id = req.params.id;
  Trip.edit(req.body, id, err => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

module.exports = {
  getAllTrips,
  createTrip,
  editTrip
};
