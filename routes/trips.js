var express = require("express");
var router = express.Router();

const { getAllTrips, createTrip } = require("../controllers/trips-controller");

/* GET trips listing. */
router.get("/", getAllTrips);

// router.get("/getall/create", createTrip);

module.exports = router;
