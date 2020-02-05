const connection = require('./config');


connection.query(
  `
  INSERT INTO car(plate, img_url) 
  VALUES ('PG-08-70', 'https://res.cloudinary.com/drm2ot7ge/image/upload/v1580913034/Volkswagen/Captura_de_ecr%C3%A3_2020-02-05_%C3%A0s_10.23.25_AM_jvl8ub.png' ), 
  ('PG-09-77', 'https://res.cloudinary.com/drm2ot7ge/image/upload/v1580913034/Volkswagen/Captura_de_ecr%C3%A3_2020-02-05_%C3%A0s_10.24.23_AM_nxoeww.png')`,
  (err) => {
    console.log(err);
    console.log('car table seeded');
  },
);

connection.query(
  `
  INSERT INTO trip
  (name, start_trip, end_trip, destination, car_start_mileage, car_end_mileage, car_id) 
  VALUES 
  ('Ed Watson', '2020-02-02 12:00:00', '2020-02-02 14:00:00', 'Rato', '40672', '40677', 1), 
  ('Nuno Lima', '2020-02-03 14:00:00', '2020-02-03 16:00:00', 'Alameda', '50672', '50677', 2), 
  ('Carolina Viero', '2020-02-03 18:00:00', '2020-02-03 20:00:00', 'Alameda', '50677', '50682', 2), 
  ('Angélina Riet', '2020-02-04 12:00:00', '2020-02-04 14:00:00', 'Rato', '40677', '40682', 1), 
`,
  (err) => {
    console.log(err);
    console.log('trip table seeded');
    connection.end();
},
);
