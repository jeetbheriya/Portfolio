const mongoose = require('mongoose');

const StackItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
});

const StackSchema = new mongoose.Schema({
  frontend: [StackItemSchema],
  backend: [StackItemSchema],
  database: [StackItemSchema],
  tools: [StackItemSchema],
});

module.exports = mongoose.model('Stack', StackSchema);
