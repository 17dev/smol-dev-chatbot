const mongoose = require('mongoose');

const DatabaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  host: {
    type: String,
    required: true,
  },
  port: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  database: {
    type: String,
    required: true,
  },
  chatThreads: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chat',
  }],
});

module.exports = mongoose.model('Database', DatabaseSchema);