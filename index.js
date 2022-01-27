require('dotenv').config();
const express = require('express');

const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 5000;

// Connect to the local MongoDB database
connectDB();

app.get('/', (req, res) => {
  res.send('Namaste');
});

app.listen(port, () => {
  console.log(`The server is listening at http://localhost:${port}`);
});
