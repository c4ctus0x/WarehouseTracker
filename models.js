const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connection successful'))
  .catch((err) => console.error('MongoDB connection error:', err));

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  quantity: { type: Number, required: true },
  category: String
}, { timestamps: true });

const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  position: { type: String, required: true },
  salary: Number,
  startDate: { type: Date, default: Date.now },
  contactInfo: {
    email: String,
    phone: String
  }
}, { timestamps: true });

const operationSchema = new Schema({
  type: { type: String, required: true, enum: ['Import', 'Export', 'Inventory', 'Maintenance'] },
  item: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
  quantity: { type: Number, required: true },
  operator: { type: Schema.Types.ObjectId, ref: 'Employee' },
  operationDate: { type: Date, default: Date.now }
}, { timestamps: true });

const Item = mongoose.model('Item', itemSchema);
const Employee = mongoose.model('Employee', employeeDispatcherSchema);
const Operation = mongoose.model('Operation', operationSchema);

module.exports = { Item, Employee, Operation };