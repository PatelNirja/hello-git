// index.js
require('dotenv').config();  // load .env variables

const express = require('express');
const app = express();

// Get variables from .env
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;
const DB_URL = process.env.DB_URL;

app.get('/', (req, res) => {
  res.send(`
    <h2>Hello from Express!</h2>
    <p>Your API Key: ${API_KEY}</p>
    <p>Your DB URL: ${DB_URL}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
