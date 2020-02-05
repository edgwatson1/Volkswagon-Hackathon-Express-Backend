const connection = require('./config');

// drop tables
connection.query('DROP TABLE car', (err) => {
  if (err) console.log(err);
  console.log('query complete');
  connection.query('DROP TABLE trip', (error) => {
    if (error) console.log(err);
    console.log('query complete');
    connection.end();
    });
});
          

