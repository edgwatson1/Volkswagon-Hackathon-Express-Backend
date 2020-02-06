const Trip = require("../models/Trip");

const getAllTrips = (req, res, next) => {
  Trip.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ trips: results });
  });
};

const sendAllTrips = (req, res, next) => {
  const tripsWithCars = req.trip.map((tr) => {
    const cars = req.cars.filter((cr) => cr.trip_id === tr.id);
    return {
      ...tr,
      cars,
    };
  });

return res.json({
  trips: tripsWithCars,
});
};

const createTrip = (req, res, next) => {
  console.log(req.body)
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

module.exports = {
  getAllTrips,
  createTrip,
  editTrip,
  deleteTrip,
  sendAllTrips
};
