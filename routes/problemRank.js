const express = require('express');
const router = express.Router();
const { analyzeIdea } = require('../services/aiService');

router.post('/', async (req, res) => {
    const { problem } = req.body;
    if (!problem) {
        return res.status(400).json({ error: 'Problem description is required' });
    }

    try {
        // For now, we'll use the same AI service but with a problem-focused prompt
        // In the future, this could be a separate AI function
        const analysis = await analyzeIdea(`Problem to solve: ${problem}`);
        res.json(analysis);
    } catch (error) {
        console.error('Error analyzing problem:', error);
        res.status(500).json({ error: 'Failed to analyze problem' });
    }
});

module.exports = router;
