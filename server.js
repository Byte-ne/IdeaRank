require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const ideaRankRouter = require('./routes/ideaRank');
const ideaImproveRouter = require('./routes/ideaImprove');
const problemRankRouter = require('./routes/problemRank');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Docs (path-based deep links)
// Important: this must run BEFORE express.static, but must not block asset requests under /docs.
app.get(/^\/docs(?:\/.*)?$/, (req, res, next) => {
    // If the URL looks like a file request (has an extension), let static middleware handle it.
    if (path.extname(req.path)) return next();
    res.sendFile(path.join(__dirname, 'public', 'docs.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/rank', ideaRankRouter);
app.use('/api/improve', ideaImproveRouter);
app.use('/api/problem', problemRankRouter);

// Static HTML routes
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.listen(PORT, () => {
    console.log(`IdeaRank server running on http://localhost:${PORT}`);
});
