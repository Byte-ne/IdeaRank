require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const ideaRankRouter = require('./routes/ideaRank');
const ideaImproveRouter = require('./routes/ideaImprove');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/rank', ideaRankRouter);
app.use('/api/improve', ideaImproveRouter);

// Fallback for SPA (though we are using simple HTML files)
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.listen(PORT, () => {
    console.log(`IdeaRank server running on http://localhost:${PORT}`);
});
