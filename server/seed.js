const db = require("./database");

// Clear existing data
db.exec("DELETE FROM cars");

// Insert 10 cars
const insert = db.prepare(`
  INSERT INTO cars (name, year, origin, engine, power, description, image, featured)
  VALUES (@name, @year, @origin, @engine, @power, @description, @image, @featured)
`);

const cars = [
  {
    name: "Mazda RX-7 FD",
    year: 1992,
    origin: "Japan",
    engine: "1.3L Twin-Turbo Rotary",
    power: 255,
    description:
      "The rotary legend. Light, balanced, and unlike anything else on the road.",
    image: "car1.webp",
    featured: 1,
  },
  {
    name: "Nissan Skyline GT-R R33",
    year: 1995,
    origin: "Japan",
    engine: "2.6L Twin-Turbo RB26DETT",
    power: 276,
    description:
      "All-wheel drive, twin-turbo, and a reputation that precedes itself by decades.",
    image: "car2.webp",
    featured: 1,
  },
  {
    name: "Ford Mustang Fastback",
    year: 1967,
    origin: "USA",
    engine: "6.4L V8 390",
    power: 320,
    description:
      "Pure American muscle. The car that defined a generation and still turns heads today.",
    image: "car3.webp",
    featured: 1,
  },
  {
    name: "Toyota Supra MK4",
    year: 1994,
    origin: "Japan",
    engine: "3.0L Twin-Turbo 2JZ-GTE",
    power: 320,
    description:
      "The 2JZ engine became a legend on its own. Capable of insane power with minimal modifications.",
    image: "car4.webp",
    featured: 0,
  },
  {
    name: "Porsche 911 Carrera RS",
    year: 1973,
    origin: "Germany",
    engine: "2.7L Flat-Six",
    power: 210,
    description:
      "The purest driving experience ever put into production. A benchmark for all sports cars.",
    image: "car5.webp",
    featured: 0,
  },
  {
    name: "Honda NSX",
    year: 1990,
    origin: "Japan",
    engine: "3.0L V6 C30A",
    power: 274,
    description:
      "Built with input from Ayrton Senna. A supercar that anyone could drive every day.",
    image: "car6.webp",
    featured: 0,
  },
  {
    name: "BMW E30 M3",
    year: 1987,
    origin: "Germany",
    engine: "2.3L S14 Inline-Four",
    power: 200,
    description:
      "The original M3. Bred for touring car racing and refined for the road.",
    image: "car7.webp",
    featured: 0,
  },
  {
    name: "Dodge Viper GTS",
    year: 1996,
    origin: "USA",
    engine: "8.0L V10",
    power: 450,
    description:
      "Raw, unfiltered, and brutally fast. No traction control. No ABS. Just you and the road.",
    image: "car8.webp",
    featured: 0,
  },
  {
    name: "Lancia Delta Integrale",
    year: 1991,
    origin: "Italy",
    engine: "2.0L Turbocharged",
    power: 210,
    description:
      "Six consecutive WRC constructors titles. A rally legend brought to the street.",
    image: "car9.webp",
    featured: 0,
  },
  {
    name: "Mitsubishi Lancer Evolution VI",
    year: 1999,
    origin: "Japan",
    engine: "2.0L Turbocharged 4G63",
    power: 280,
    description:
      "The Evo vs STI rivalry defined an era. The VI is widely considered the purest of them all.",
    image: "car10.webp",
    featured: 0,
  },
];

// Insert all cars
const insertMany = db.transaction((cars) => {
  for (const car of cars) {
    insert.run(car);
  }
});

insertMany(cars);

console.log("Database seeded with 10 cars successfully!");
