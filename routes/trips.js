var express = require("express");
var router = express.Router();

const { getAllTrips } = require("../controllers/trips-controller");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/getall", getAllTrips);

module.exports = router;
