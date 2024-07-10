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
const express = require('express');
const connectDB = require('./dbConnection'); // Adjust path as necessary

// Connect to Database
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Example Route Handler with Error Handling
app.post('/operations', async (req, res, next) => {
  try {
    // Replace 'Operation' with your mongoose model imported at the top
    const operation = await Operation.create(req.body);
    res.status(201).json(operation);
  } catch (error) {
    // Passing errors to the error-handling middleware
    next(error);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err); // For detailed error logging

    // Enhanced response with error details
    res.status(500).json({
      status: 'error',
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined // Consider removing stack in production
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));