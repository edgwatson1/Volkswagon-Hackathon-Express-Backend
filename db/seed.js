const connection = require("./config");
connection.query(
  `
  INSERT INTO car(plate, img_url, img_url_alternative, make, model) 
  VALUES (
    'PG-08-70', 
    'https://res.cloudinary.com/drm2ot7ge/image/upload/v1580913034/Volkswagen/Captura_de_ecr%C3%A3_2020-02-05_%C3%A0s_10.23.25_AM_jvl8ub.png',
    'https://res.cloudinary.com/edwardwatson/image/upload/v1581007347/Volkswagon%20Hackathon/Captura_de_ecrã_2020-02-06_às_4.24.37_PM_wy3j6a.png',
    'Volkswagen',
    'T-Roc'
    ),
  (
    'PG-09-77', 
    'https://res.cloudinary.com/drm2ot7ge/image/upload/v1580913034/Volkswagen/Captura_de_ecr%C3%A3_2020-02-05_%C3%A0s_10.24.23_AM_nxoeww.png', 
    'https://res.cloudinary.com/edwardwatson/image/upload/v1581007347/Volkswagon%20Hackathon/Captura_de_ecrã_2020-02-06_às_4.24.56_PM_cp8xzo.png',
    'Volkswagen',
    'Polo'
    )`,
  err => {
    console.log(err);
    console.log("car table seeded");
  }
);
connection.query(
  `
  INSERT INTO trip
  (driver, start_trip, end_trip, destination, car_start_mileage, car_end_mileage, car_id) 
  VALUES 
  ('Ed Watson', '2019-12-01 12:00:00', '2019-12-01 14:00:00', 'Porto', 40672, 40677, 1), 
  ('Nuno Lima', '2019-12-01 10:00:00', '2019-12-01 16:00:00', 'Alameda', 50667, 50677, 2), 
  ('Carolina Viero', '2019-12-02 10:00:00', '2019-12-03 10:00:00', 'Porto', 50677, 50682, 2), 
  ('Angélina Riet', '2019-12-02 12:00:00', '2019-12-02 14:00:00', 'Porto', 40677, 40682, 1), 
  ('Johnathon Broom', '2019-12-04 11:00:00', '2019-12-04 12:00:00', 'Alverca do Ribatejo', 50682, 50695, 2), 
  ('Carolina Viero', '2019-12-09 09:00:00', '2019-12-09 11:00:00', 'Vila Nova de Mil Fontes', 50695, 50705, 2), 
  ('Angélina Riet', '2019-12-09 12:00:00', '2019-12-09 14:00:00', 'Porto', 40682, 40750, 1),
  ('Ed Watson', '2019-12-10 12:00:00', '2019-12-10 14:00:00', 'Porto', 40750, 40800, 1), 
  ('Nuno Lima', '2019-12-10 12:00:00', '2019-12-10 16:00:00', 'Alameda', 50705, 50805, 2), 
  ('Carolina Viero', '2019-12-11 12:00:00', '2019-12-11 16:00:00', 'Alameda', 50805, 50808, 2), 
  ('Angélina Riet', '2019-12-11 13:00:00', '2019-12-11 14:00:00', 'Porto', 40800, 40850, 1), 
  ('Ed Watson', '2019-12-12 12:00:00', '2019-12-14 14:00:00', 'Aveiro', 40850, 40900, 1), 
  ('Nuno Lima', '2019-12-13 09:00:00', '2019-12-13 16:00:00', 'Alameda', 50808, 50809, 2), 
  ('Carolina Viero', '2019-12-14 18:00:00', '2019-12-15 17:00:00', 'Alameda', 50809, 50810, 2), 
  ('Angélina Riet', '2019-12-15 12:00:00', '2019-12-18 14:00:00', 'Porto', 40900, 40952, 1),
  ('Ed Watson', '2019-12-19 10:00:00', '2019-12-19 14:00:00', 'Porto', 40952, 41077, 1), 
  ('Nuno O’Brien', '2019-12-19 15:00:00', '2019-12-19 17:00:00', 'Alameda', 50810, 50907, 2), 
  ('Carolina Viero', '2019-12-20 11:00:00', '2019-12-21 10:00:00', 'Porto', 50907, 50920, 2), 
  ('Angélina Riet', '2019-12-21 11:00:00', '2020-01-03 14:00:00', 'Ericeira', 40952, 40982, 1), 
  ('Javaline Scripto', '2019-12-22 15:00:00', '2019-12-23 17:00:00', 'Sintra', 50907, 50919, 2), 
  ('Angélina Riet', '2020-01-09 12:00:00', '2020-01-09 14:00:00', 'Porto', 40982, 40992, 1) ,
  ('Ed Watson', '2020-01-09 16:00:00', '2020-01-10 14:00:00', 'Porto', 40992, 41007, 1), 
  ('Nuno Lima', '2020-01-09 14:00:00', '2020-01-10 17:00:00', 'Sintra', 50919, 50930, 2), 
  ('Carolina Viero', '2020-01-10 11:00:00', '2020-01-10 16:00:00', 'Alameda', 50930, 51000, 2), 
  ('Johnathon Broom', '2020-01-10 10:00:00', '2020-01-11 14:00:00', 'Porto', 41007, 41016, 1), 
  ('Javaline Scripto', '2020-01-11 12:00:00', '2020-01-12 14:00:00', 'Faro', 41016, 41030, 1), 
  ('Codi Scrool', '2020-01-11 14:00:00', '2020-01-11 16:00:00', 'Alameda', 50930, 51000, 2), 
  ('Ed Watson', '2020-01-12 11:00:00', '2020-01-14 16:00:00', 'Porto', 51000, 51010, 2), 
  ('Carolina Viero', '2020-01-13 11:00:00', '2020-01-14 12:00:00', 'Aveiro', 41030, 41050, 1), 
  ('Angélina Riet', '2020-01-15 11:00:00', '2020-01-16 15:00:00', 'Porto', 41055, 41060, 1),
  ('Angélina Riet', '2020-01-19 12:00:00', '2020-01-23 14:00:00', 'Faro', 41060, 41070, 1), 
  ('Nuno Lima', '2020-01-20 15:00:00', '2020-01-21 18:00:00', 'Porto', 51010, 51015, 2), 
  ('Nuno O’Brien', '2020-01-24 12:00:00', '2020-02-04 14:00:00', 'Porto', 41070, 41079, 1),
  ('Codi Scrool', '2020-02-05 12:00:00', '2020-02-05 15:00:00', 'Porto', 41079,  41085, 1), 
  ('Johnathon Broom', '2020-02-01 14:00:00', '2020-02-05 16:00:00', 'Porto', 51015, 51025, 2), 
  ('Carolina Viero', '2020-02-06 12:00:00', '2020-02-07 16:00:00', 'Porto', 51025, 51025, 2), 
  ('Angélina Riet', '2020-02-06 12:00:00', '2020-02-09 14:00:00', 'Porto', 41085, 41085, 1), 
  ('Ed Watson', '2020-02-10 12:00:00', '2020-02-10 16:00:00', 'Sintra', 0, 0, 1), 
  ('Nuno Lima', '2020-02-08 14:00:00', '2020-02-13 16:00:00', 'Porto', 0, 0, 2), 
  ('Carolina Viero', '2020-02-14 12:00:00', '2020-02-14 15:00:00', 'Alameda', 0, 0, 2), 
  ('Javaline Scripto', '2020-02-11 12:00:00', '2020-02-13 14:00:00', 'Porto', 0, 0, 1),
  ('Angélina Riet', '2020-02-15 12:00:00', '2020-02-16 14:00:00', 'Estarreja', 0, 0, 1), 
  ('Nuno Lima', '2020-02-15 11:00:00', '2020-02-15 16:00:00', 'Alameda', 0, 0, 2), 
  ('Carolina Viero', '2020-02-16 11:00:00', '2020-02-17 12:00:00', 'Golega', 0, 0, 2), 
  ('Ed Watson', '2020-02-17 12:00:00', '2020-02-18 14:00:00', 'Porto', 0, 0, 1)    
`,
  err => {
    console.log(err);
    console.log("trip table seeded");
    connection.end();
  }
);