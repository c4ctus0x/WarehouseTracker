const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const warehouseTrackerApp = express();

warehouseTrackerApp.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(error => {
      console.error('Database Connection Failed:', error);
      process.exit(1);
  });

warehouseTrackerApp.get('/', (request, response) => {
  response.send('Welcome to the WarehouseTracker API!');
});

warehouseTrackerApp.use((error, request, response, next) => {
  console.error('Internal Server Error:', error.stack);
  response.status(500).send('Internal Server Error');
});

const serverPort = process.env.PORT || 3000;
warehouseTracker:App.listen(serverPort, () => {
  console.log(`WarehouseTracker Server is running on port ${serverPort}`);
});