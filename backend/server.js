const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); 

const dbPath = path.join(__dirname, "database.db");
let db;
const PORT = 5000;

// Initialize DB and server
const initializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDbAndServer();


// Get all users
app.get("/", async (req, res) => {
  try {
    const usersArray = await db.all("SELECT * FROM users");
    res.status(200).json(usersArray);
  } catch (e) {
    console.error("Error Fetching Users:", e.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get user by ID
app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db.get("SELECT * FROM users WHERE id = ?", [id]);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (e) {
    console.error("Error Fetching User:", e.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add new user
app.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      street,
      city,
      zip,
      latitude,
      longitude,
    } = req.body;

    
    if (!name || !email || !phone) {
      return res
        .status(400)
        .json({ error: "Name, email, and phone are required" });
    }

    const result = await db.run(
      `INSERT INTO users
      (name, email, phone, company, street, city, zip, latitude, longitude)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, email, phone, company || null, street || null, city || null, zip || null, latitude || null, longitude || null]
    );

    res.status(201).json({ userId: result.lastID });
  } catch (e) {
    console.error("Error Adding User:", e.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update user
app.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      email,
      phone,
      company,
      street,
      city,
      zip,
      latitude,
      longitude,
    } = req.body;

    if (!name || !email || !phone) {
      return res
        .status(400)
        .json({ error: "Name, email, and phone are required" });
    }

    const result = await db.run(
      `UPDATE users
      SET name = ?, email = ?, phone = ?, company = ?, street = ?, city = ?, zip = ?, latitude = ?, longitude = ?
      WHERE id = ?`,
      [name, email, phone, company || null, street || null, city || null, zip || null, latitude || null, longitude || null, id]
    );

    if (result.changes === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User updated successfully" });
  } catch (e) {
    console.error("Error Updating User:", e.message);
    res.status(500).json({ error: "Internal server error" });
  }
});


// Delete user
app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.run("DELETE FROM users WHERE id = ?", [id]);

    if (result.changes === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (e) {
    console.error("Error Deleting User:", e.message);
    res.status(500).json({ error: "Internal server error" });
  }
});
