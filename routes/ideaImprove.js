const express = require('express');
const router = express.Router();
const { improveIdea } = require('../services/aiService');

router.post('/', async (req, res) => {
    const { idea } = req.body;
    if (!idea) {
        return res.status(400).json({ error: 'Idea is required' });
    }

    try {
        const result = await improveIdea(idea);
        res.json(result);
    } catch (error) {
        console.error('Error improving idea:', error);
        res.status(500).json({ error: 'Failed to improve idea' });
    }
});

module.exports = router;
