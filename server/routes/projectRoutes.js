const express = require('express');
const router = express.Router();
const { PROJECTS } = require('../data/initialData');

// Get all projects
router.get('/', async (req, res) => {
  try {
    res.json(PROJECTS);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single project by slug
router.get('/:slug', async (req, res) => {
  try {
    const project = PROJECTS.find(p => p.slug === req.params.slug);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
