const express = require('express');
const router = express.Router();
const { MY_STACK } = require('../data/initialData');

// Get all stack data
router.get('/', async (req, res) => {
  try {
    res.json(MY_STACK);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
