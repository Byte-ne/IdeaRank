const express = require('express');
const router = express.Router();
const { analyzeIdea } = require('../services/aiService');

router.post('/', async (req, res) => {
    const { idea } = req.body;
    if (!idea) {
        return res.status(400).json({ error: 'Idea is required' });
    }

    try {
        const analysis = await analyzeIdea(idea);
        res.json(analysis);
    } catch (error) {
        console.error('Error analyzing idea:', error);
        res.status(500).json({ error: 'Failed to analyze idea' });
    }
});

module.exports = router;
