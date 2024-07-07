const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('MongoDB connection successful');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
```
```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const operationSchema = new Schema({
    type: { type: String, required: true, enum: ['Import', 'Export', 'Inventory', 'Maintenance'] },
    item: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
    quantity: { type: Number, required: true },
    operator: { type: Schema.Types.ObjectId, ref: 'Employee' },
    operationDate: { type: Date, default: Date.now }
}, { timestamps: true });

const Operation = mongoose.model('Operation', operationSchema); // Corrected the typo here

module.exports = Operation;
```
```javascript
const express = require('express');
const connectDB = require('./dbConnection'); // Adjust path as necessary

// Connect to Database
connectDB();

const app = express();

// Middleware to parse json
app.use(express.json());

// Insert your route handlers here

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));