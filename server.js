// server.js
require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const EXPECTED_KEY = process.env.API_KEY || 'super-secret-token';

// Simple route that verifies the header and returns one key:value
app.get('/me', (req, res) => {
  const apiKey = req.header('x-api-key');

  if (!apiKey || apiKey !== EXPECTED_KEY) {
    // single key:value on failure
    return res.status(401).json({ ok: false });
  }

  // single key:value on success
  return res.status(200).json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
