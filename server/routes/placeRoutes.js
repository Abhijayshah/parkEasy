
const express = require('express');
const Place = require('../models/Place');
const router = express.Router();

// Get all places
router.get('/', async (req, res) => {
  try {
    const places = await Place.find();
    // Convert array to object keyed by ID to match Firebase structure if needed by frontend
    // But frontend iterates over object keys in AppContext.js:112
    // "for (const key in data)"
    // So we should return an object where keys are IDs.
    
    const placesObject = {};
    places.forEach(place => {
      placesObject[place._id] = place;
    });
    
    res.json(placesObject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
