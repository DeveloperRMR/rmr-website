const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// Database path from environment or default
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data', 'registrations.db');

// Ensure data directory exists
const dbDir = path.dirname(DB_PATH);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Initialize database connection
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database at:', DB_PATH);
  }
});

// Create registrations table if it doesn't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS registrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      consent BOOLEAN NOT NULL DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    } else {
      console.log('Registrations table ready');
    }
  });
});

/**
 * Add a new SMS registration
 * @param {Object} data - Registration data (name, email, phone, consent)
 * @returns {Promise<Object>} - Inserted registration with ID
 */
function addRegistration(data) {
  return new Promise((resolve, reject) => {
    const { name, email, phone, consent } = data;
    
    const query = `
      INSERT INTO registrations (name, email, phone, consent)
      VALUES (?, ?, ?, ?)
    `;
    
    db.run(query, [name, email, phone, consent ? 1 : 0], function(err) {
      if (err) {
        reject(err);
      } else {
        resolve({
          id: this.lastID,
          name,
          email,
          phone,
          consent,
          created_at: new Date().toISOString()
        });
      }
    });
  });
}

/**
 * Get all registrations
 * @returns {Promise<Array>} - Array of all registrations
 */
function getAllRegistrations() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM registrations ORDER BY created_at DESC', [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

/**
 * Check if phone number already registered
 * @param {string} phone - Phone number to check
 * @returns {Promise<boolean>} - True if exists
 */
function phoneExists(phone) {
  return new Promise((resolve, reject) => {
    db.get('SELECT id FROM registrations WHERE phone = ?', [phone], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(!!row);
      }
    });
  });
}

/**
 * Check if email already registered
 * @param {string} email - Email to check
 * @returns {Promise<boolean>} - True if exists
 */
function emailExists(email) {
  return new Promise((resolve, reject) => {
    db.get('SELECT id FROM registrations WHERE email = ?', [email], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(!!row);
      }
    });
  });
}

/**
 * Close database connection
 */
function closeDatabase() {
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message);
    } else {
      console.log('Database connection closed');
    }
  });
}

module.exports = {
  db,
  addRegistration,
  getAllRegistrations,
  phoneExists,
  emailExists,
  closeDatabase
};
