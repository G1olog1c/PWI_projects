const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./database");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

//Serve static files (images) from the project root
app.use("/images", express.static(path.resolve(__dirname, "..", "images")));

// // Debug: log the images path
// console.log("Images path:", path.join(__dirname, "..", "images"));

// ================
// API Endpoints
// ================

// Get all cars
app.get("/api/cars", (req, res) => {
  try {
    const cars = db.prepare("SELECT * FROM cars").all();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cars" });
  }
});

// Get featured cars only
app.get("/api/cars/featured", (req, res) => {
  try {
    const cars = db.prepare("SELECT * FROM cars WHERE featured = 1").all();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch featured cars" });
  }
});

// Get single car by ID
app.get("/api/cars/:id", (req, res) => {
  try {
    const car = db
      .prepare("SELECT * FROM cars WHERE id = ?")
      .get(req.params.id);
    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch car" });
  }
});

// POST new message from contact from
app.post("/api/messages", (req, res) => {
  try {
    const { name, email, message } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    if (name.length < 2) {
      return res
        .status(400)
        .json({ error: "Name must be at least 2 characters" });
    }

    if (message.length < 10) {
      return res
        .status(400)
        .json({ error: "Message must be at least 10 characters" });
    }

    const insert = db.prepare(
      "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
    );
    const result = insert.run(name, email, message);

    res.status(201).json({
      success: true,
      id: result.lastInsertRowid,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to save message" });
  }
});

// Get all messages
app.get("/api/messages", (req, res) => {
  try {
    const messages = db
      .prepare("SELECT * FROM messages ORDER BY created_at DESC")
      .all();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// ================
// Start Server
// ================
app.listen(PORT, () => {
  console.log(`Revline server running at http://localhost:${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api/cars`);
});
