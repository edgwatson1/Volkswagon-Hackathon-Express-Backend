var express = require("express");
var router = express.Router();

const {
  getAllTrips,
  createTrip,
  editTrip
} = require("../controllers/trip-controller");

/* GET trips listing. */
router.get("/", getAllTrips);

/* EDIT trip listing. */
router.put("/edit/:id", editTrip);

// router.get("/getall/create", createTrip);

module.exports = router;
