require('dotenv').config();
const express = require('express');

const connectDB = require('./config/db');
const orderRoutes = require('./routes');
const rateLimiter = require('./middlewares/rateLimiter');

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());

// Connect to the local MongoDB database
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send('Namaste');
});

app.use('/api/orders', rateLimiter, orderRoutes);

// Start the server
app.listen(port, () => {
  console.log(`The server is listening at http://localhost:${port}`);
});
