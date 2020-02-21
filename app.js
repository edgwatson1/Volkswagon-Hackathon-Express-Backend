const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const tripRouter = require("./routes/tripRouter");

const app = express();

//view engine setup - EW: Not needed
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/trip", tripRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
//app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  //res.locals.message = err.message;
  //res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
 // res.status(err.status || 500);
  //res.render("error");
//});

module.exports = app;


// select car_id, month(end_trip), SUM(car_end_mileage - car_start_mileage) from trip group by car_id,  month(end_trip);
