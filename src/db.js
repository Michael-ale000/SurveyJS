// db.js
const { Pool } = require('pg');  // Use require instead of import
const pool = new Pool({
  user: "postgres", // Replace with your PostgreSQL username
  host: "localhost", // Host (default: localhost)
  database: "survey_app", // Replace with your database name
  password: "Peace@12", // Replace with your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

module.exports = { pool };  // Export pool using CommonJS
