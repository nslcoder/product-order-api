require('dotenv').config();
const { resolve } = require('path');
const { readFile } = require('fs/promises');
const mongoose = require('mongoose');
const Order = require('../../models/order');

const seeder = async () => {
  // Connect to the local MongoDB database
  await mongoose.connect(process.env.DB_URL);
  console.log('Database connected');

  // Read the file and store its contents
  const data = await readFile(resolve(__dirname, 'orders.json'), 'utf-8');

  // Deserialize JSON into JavaScript array
  const parsedData = JSON.parse(data);

  console.log('Seeding...');

  // Create the orders in the database at once
  await Order.create(parsedData);
  console.log('Seeding is complete');

  process.exit();
};

seeder();
