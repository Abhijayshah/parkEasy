
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'secret_key_123';

// Signup
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: { message: 'User already exists' } });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ 
      message: 'User created successfully',
      idToken: token,
      email: user.email,
      expiresIn: '3600',
      localId: user._id
    });
  } catch (error) {
    res.status(500).json({ error: { message: 'Something went wrong' } });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: { message: 'User not found' } });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: { message: 'Invalid credentials' } });
    }

    const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      idToken: token,
      email: user.email,
      expiresIn: '3600', // 1 hour in seconds
      localId: user._id
    });
  } catch (error) {
    res.status(500).json({ error: { message: 'Something went wrong' } });
  }
});

module.exports = router;
