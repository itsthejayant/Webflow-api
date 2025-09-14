// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = process.env.PORT || 3000;
const EXPECTED_KEY = process.env.API_KEY || 'super-secret-token';

app.use(cors());

// Simple route that verifies the header and returns one key:value
app.get('/me', (req, res) => {
  const apiKey = req.header('x-api-key');

  if (!apiKey || apiKey !== EXPECTED_KEY) {
    return res.status(401).json({ ok: false });
  }

  return res.status(200).json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
