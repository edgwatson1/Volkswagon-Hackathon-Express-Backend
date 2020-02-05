var express = require("express");
var router = express.Router();

const {
  getAllTrips,
  createTrip,
  editTrip
} = require("../controllers/trip-controller");

/* GET trips listing. */
router.get("/", getAllTrips);

/* CREATE trip. */
router.post("/create", createTrip);

/* EDIT trip listing. */
router.put("/edit/:id", editTrip);

/* DELETE trip */
//router.put("/edit/:id", editTrip);


module.exports = router;
