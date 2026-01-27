
const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'secret_key_123';

// Middleware to verify token (simplified for migration)
const verifyToken = (req, res, next) => {
  // In Firebase, auth is passed as query param ?auth=...
  // We need to support that or change frontend to use Headers.
  // Frontend currently uses query param.
  const token = req.query.auth || req.headers.authorization?.split(' ')[1];
  
  if (!token) return res.status(403).json({ message: 'No token provided' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });
    req.userId = decoded.id;
    req.userEmail = decoded.email;
    next();
  });
};

// Create Booking
router.post('/:emailId', verifyToken, async (req, res) => {
  // The frontend passes emailId (sanitized email) in URL
  // And body contains { user: { ...data } }
  try {
    const bookingData = req.body.user;
    const newBooking = new Booking({
      ...bookingData,
      ticketId: bookingData.id, // Map frontend 'id' to schema 'ticketId'
      userEmail: req.userEmail // Ensure we use the authenticated user's email
    });
    
    await newBooking.save();
    res.status(201).json({ name: newBooking._id }); // Firebase returns { name: "id" }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Bookings
router.get('/:emailId', verifyToken, async (req, res) => {
    // Frontend expects object of bookings
    try {
        const bookings = await Booking.find({ userEmail: req.userEmail });
        const bookingsObject = {};
        bookings.forEach(booking => {
            bookingsObject[booking._id] = {
                user: booking // Frontend structure nesting
            };
        });
        res.json(bookingsObject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
