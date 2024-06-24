const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));
app.get('/', (req, res) => {
  res.send('Welcome to the WarehouseTracker API');
});
const PORT = process.getenv('PORT') || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});