// dbConnection.js
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
  }
};

module.exports = connectDB;
```
```javascript
// Item.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    quantity: { type: Number, required: true },
    category: String
}, { timestamps: true });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
```
```javascript
// Employee.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required:  true },
    position: { type: String, required: true },
    salary: Number,
    startDate: { type: Date, default: Date.now },
    contactInfo: {
        email: String,
        phone: String
    }
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
```
```javascript
// Operation.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const operationSchema = new Schema({
    type: { type: String, required: true, enum: ['Import', 'Export', 'Inventory', 'Maintenance'] },
    item: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
    quantity: { type: Number, required: true },
    operator: { type: Schema.Types.ObjectId, ref: 'Employee' },
    operationDate: { type: Date, default: Date.now }
}, { timestamps: true });

const Operation = mongoose.model('Operation', operationWhatSchema);

module.exports = Operation;
```
```javascript
// index.js or app.js
const express = require('express');
const connectDB = require('./dbConnection'); // Adjust path as necessary

// Connect to Database
connectDB();

const app = express();

// Express application logic here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));