const connection = require("./config");
// drop tables
connection.query("DROP TABLE trip", err => {
  if (err) console.log(err);
  console.log("query complete");
  connection.query("DROP TABLE car", error => {
    if (error) console.log(err);
    console.log("query complete");
    connection.end();
  });
});
