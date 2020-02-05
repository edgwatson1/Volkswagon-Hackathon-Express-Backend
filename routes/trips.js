var express = require("express");
var router = express.Router();

const { getAllTrips, createTrip } = require("../controllers/trips-controller");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/getall", getAllTrips);

router.get("/getall", createTrip);

module.exports = router;
