var express = require("express");
var router = express.Router();

const {
  getAllTrips,
  createTrip,
  editTrip,
  deleteTrip,
  getAllCars,
  getCarMetrics,
  getDriverMetrics
} = require("../controllers/trip-controller");

/* GET trips listing. */
router.get("/", (req, res) => res.status(200).send("success"), getAllTrips, getAllCars);

/* CREATE trip. */
router.post("/create", createTrip);

/* EDIT trip listing. */
router.put("/edit/:id", editTrip);

/* DELETE trip */
router.delete("/delete/:id", deleteTrip);

// Get metrics
router.get("/metrics", getCarMetrics, getDriverMetrics);

module.exports = router;
