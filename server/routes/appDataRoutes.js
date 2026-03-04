const express = require('express');
const router = express.Router();
const AppData = require('../models/AppData');

// Get all app data (should be a single document)
router.get('/', async (req, res) => {
  try {
    const appData = await AppData.findOne(); // Assuming only one app data document
    res.json(appData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
