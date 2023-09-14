// models/Client.js
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  source: String,
  status: String,
  email: String,
  notes: String,
});

module.exports = mongoose.model('Client', clientSchema);
