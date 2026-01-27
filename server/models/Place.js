
const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  info: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true }
});

module.exports = mongoose.model('Place', placeSchema);
