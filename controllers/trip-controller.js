const Trip = require("../models/Trip");
const Car = require("../models/Car");

const getAllTrips = (req, res, next) => {
  Trip.getAll((err, results) => {
    if (err) return next(err);
    req.trip = results;
    next();
  });
};

const getAllCars = (req, res, next) => {
  Car.getAll((err, results) => {
    if (err) return next(err);
    return res.status(200).json({ trips: req.trip, cars: results });
  });
};


const createTrip = (req, res, next) => {
  console.log(req.body);
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

const deleteTrip = (req, res, next) => {
  id = req.params.id;
  Trip.delete(id, err => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const getCarMetrics = (req, res, next) => {
  Trip.getMetricsByCar((err, results) => {
    if (err) next(err);
    req.carMetrics = results;
    next();
  })
};

const getDriverMetrics = (req, res, next) => {
  Trip.getMetricsByDriver((err, results) => {
    if (err) return next(err);
    return res.status(200).json({
      carMetrics: req.carMetrics,
      driverMetrics: results
    });
  });
};


module.exports = {
  getAllTrips,
  createTrip,
  editTrip,
  deleteTrip,
  getAllCars, 
  getCarMetrics, 
  getDriverMetrics
};
