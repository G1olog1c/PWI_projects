const Database = require("better-sqlite3");
const path = require("path");

//Create or connect to SQLite database file
const db = new Database(path.join(__dirname, "revline.db"));

//Create tables if they don't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS cars(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    year INTEGER NOT NULL,
    origin TEXT NOT NULL,
    engine TEXT NOT NULL,
    power INTEGER NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL,
    featured INTEGER DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS messages(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

module.exports = db;
