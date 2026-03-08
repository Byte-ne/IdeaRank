document.addEventListener('DOMContentLoaded', () => {
    const ideaInput = document.getElementById('ideaInput');
    const rankBtn = document.getElementById('rankBtn');
    const loading = document.getElementById('loading');
    const toolView = document.getElementById('toolView');
    const navItems = document.querySelectorAll('.nav-item');

    // Handle Landing Page Ranking
    if (rankBtn) {
        rankBtn.addEventListener('click', async () => {
            const idea = ideaInput.value.trim();
            if (!idea) return alert('Please describe your idea in detail.');

            sessionStorage.setItem('lastIdea', idea);
            loading.style.display = 'flex';

            try {
                const response = await fetch('/api/rank', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ idea })
                });
                const data = await response.json();
                sessionStorage.setItem('lastResult', JSON.stringify(data));
                window.location.href = '/dashboard';
            } catch (error) {
                console.error('Error:', error);
                alert('Analysis failed. Please check your API key.');
            } finally {
                loading.style.display = 'none';
            }
        });
    }

    // Handle Dashboard Logic
    if (window.location.pathname.includes('dashboard')) {
        const lastResult = JSON.parse(sessionStorage.getItem('lastResult'));
        const lastIdea = sessionStorage.getItem('lastIdea');

        console.log('Dashboard Init - Result:', lastResult);
        loading.style.display = 'none'; // Ensure loading is hidden on load

        if (lastResult) {
            renderRankResult(lastIdea, lastResult);
        } else {
            renderRankerForm();
        }

        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                if (item.classList.contains('active')) return;

                const tool = item.dataset.tool;
                if (tool === 'problem') return;

                navItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                if (tool === 'ranker') renderRankerForm();
                else if (tool === 'improver') renderImproverForm();
            });
        });
    }

    function renderRankerForm() {
        toolView.innerHTML = `
            <div style="width: 100%;">
                <h2 style="font-size: 2.25rem; margin-bottom: 0.5rem;">Idea Ranker</h2>
                <p class="subtitle" style="margin-bottom: 2.5rem; text-align: left; margin-left: 0;">Enter a new idea for deep analysis.</p>
                <div class="input-group" style="max-width: 100%; margin-bottom: 3rem;">
                    <textarea id="dashboardIdeaInput" placeholder="Describe the idea..."></textarea>
                    <button id="dashboardRankBtn" class="primary-btn">Analyze Idea</button>
                </div>
                <div id="dashboardResultArea"></div>
            </div>
        `;
        document.getElementById('dashboardRankBtn').addEventListener('click', async () => {
            const idea = document.getElementById('dashboardIdeaInput').value.trim();
            if (!idea) return;
            await runAnalysis(idea, '/api/rank', 'rank');
        });
    }

    function renderImproverForm() {
        toolView.innerHTML = `
            <div style="width: 100%;">
                <h2 style="font-size: 2.25rem; margin-bottom: 0.5rem;">Idea Improver</h2>
                <p class="subtitle" style="margin-bottom: 2.5rem; text-align: left; margin-left: 0;">Transform a weak concept into a market-ready idea.</p>
                <div class="input-group" style="max-width: 100%; margin-bottom: 3rem;">
                    <textarea id="improveInput" placeholder="Enter a weak idea..."></textarea>
                    <button id="improveBtn" class="primary-btn">Optimize Idea</button>
                </div>
                <div id="dashboardResultArea"></div>
            </div>
        `;
        document.getElementById('improveBtn').addEventListener('click', async () => {
            const idea = document.getElementById('improveInput').value.trim();
            if (!idea) return;
            await runAnalysis(idea, '/api/improve', 'improve');
        });
    }

    async function runAnalysis(idea, endpoint, type) {
        loading.style.display = 'flex';
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ idea })
            });
            const data = await response.json();
            if (type === 'rank') {
                renderRankResult(idea, data);
            } else {
                renderImproveResult(idea, data);
            }

            // Re-bind copy button if it exists
            const copyBtn = document.getElementById('copyBtn');
            if (copyBtn) {
                copyBtn.addEventListener('click', () => {
                    const summary = type === 'rank' ? data.summary : data.improvedIdeaDescription;
                    navigator.clipboard.writeText(summary).then(() => {
                        const originalText = copyBtn.innerHTML;
                        copyBtn.innerHTML = '<span class="material-symbols-outlined">check</span> Copied!';
                        setTimeout(() => copyBtn.innerHTML = originalText, 2000);
                    });
                });
            }
        } catch (error) {
            console.error('Analysis Error:', error);
            alert('Analysis failed. Check console for details.');
        } finally {
            loading.style.display = 'none';
        }
    }

    function getScoreColor(score) {
        if (score >= 8) return '#10b981';
        if (score >= 5) return '#f59e0b';
        return '#ef4444';
    }

    function renderRankResult(idea, data) {
        const area = document.getElementById('dashboardResultArea') || toolView;
        const scoreColor = getScoreColor(data.score);
        const dashOffset = 339.29 * (1 - data.score / 10);

        area.innerHTML = `
            <div id="reportContainer" style="max-width: 1000px;">
                <div class="score-container" id="scoreHeader">
                    <div class="circular-score">
                        <svg width="120" height="120">
                            <circle class="bg" cx="60" cy="60" r="54"></circle>
                            <circle class="progress" cx="60" cy="60" r="54" 
                                    style="stroke: ${scoreColor}; stroke-dasharray: 339.29; stroke-dashoffset: ${dashOffset};"></circle>
                        </svg>
                        <div class="score-text">
                            <span class="val">${data.score}</span>
                            <span class="max">/ 10</span>
                        </div>
                    </div>
                    <div>
                        <h2 style="font-size: 2.5rem; line-height: 1.2; margin-bottom: 0.5rem;">${idea}</h2>
                        <p style="color: var(--secondary-text); font-weight: 500;">Analysis Confidence: <strong>${data.confidence}</strong></p>
                    </div>
                </div>

                <div class="report-grid">
                    <div class="card span-2">
                        <h3><span class="material-symbols-outlined">description</span> Summary</h3>
                        <p>${data.summary}</p>
                    </div>
                    <div class="card">
                        <h3><span class="material-symbols-outlined">trending_up</span> Demand & Frequency</h3>
                        <p><strong>${data.demand.title}</strong></p>
                        <p style="font-size: 0.875rem; margin-top: 0.5rem;">${data.demand.description}</p>
                        <div style="margin-top: 1rem; font-size: 0.875rem;">Frequency: <span style="font-weight: 700; color: var(--primary-color);">${data.demand.frequency}</span></div>
                    </div>

                    <div class="card span-2">
                        <h3><span class="material-symbols-outlined">analytics</span> Market Size (Estimated)</h3>
                        <div class="market-grid">
                            <div class="market-item"><span>TAM</span><strong>${data.marketAnalysis.tam}</strong></div>
                            <div class="market-item"><span>SAM</span><strong>${data.marketAnalysis.sam}</strong></div>
                            <div class="market-item"><span>SOM</span><strong>${data.marketAnalysis.som}</strong></div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <h3><span class="material-symbols-outlined">rule</span> Competitive Landscape</h3>
                        <p><strong>${data.competition.landscape}</strong></p>
                        <div style="margin-top: 1rem;">
                            <span style="font-size: 0.75rem; font-weight: 700; color: var(--secondary-text);">Primary Competitors:</span>
                            <p style="font-size: 0.875rem;">${data.competition.directCompetitors.join(', ')}</p>
                        </div>
                    </div>

                    <div class="card span-3">
                        <h3><span class="material-symbols-outlined">query_stats</span> Critical Analysis (SWOT)</h3>
                        <div class="swot-grid">
                            <div class="swot-item swot-S"><h4>Strengths</h4><ul>${(data.swot.strengths || []).map(s => `<li>${s}</li>`).join('')}</ul></div>
                            <div class="swot-item swot-W"><h4>Weaknesses</h4><ul>${(data.swot.weaknesses || []).map(w => `<li>${w}</li>`).join('')}</ul></div>
                            <div class="swot-item swot-O"><h4>Opportunities</h4><ul>${(data.swot.opportunities || []).map(o => `<li>${o}</li>`).join('')}</ul></div>
                            <div class="swot-item swot-T"><h4>Threats</h4><ul>${(data.swot.threats || []).map(t => `<li>${t}</li>`).join('')}</ul></div>
                        </div>
                    </div>

                    <div class="card span-2">
                        <h3><span class="material-symbols-outlined">psychology</span> Score Logic</h3>
                        <p>${data.why}</p>
                    </div>

                    <div class="card">
                        <h3><span class="material-symbols-outlined">payments</span> Monetization</h3>
                        <p>${data.execution.monetization}</p>
                    </div>
                </div>

                <div class="sources-bar">
                    <span class="sources-label">Research Intelligence Sources</span>
                    <div class="source-badges">
                        ${data.sources.map(s => `
                            <a href="${s.url}" class="source-badge" target="_blank" data-tooltip="${s.name}: ${new URL(s.url).hostname}">
                                <img src="https://www.google.com/s2/favicons?domain=${s.url}&sz=64" alt="${s.name}">
                            </a>
                        `).join('')}
                    </div>
                </div>

                <div class="share-section" style="margin-top: 4rem;">
                    <button id="copyBtn" class="share-btn">
                        <span class="material-symbols-outlined">content_copy</span> Copy Summary
                    </button>
                    <button id="downloadBtn" class="primary-btn" style="flex: 1.5;">
                        <span class="material-symbols-outlined">download</span> Download Scorecard
                    </button>
                </div>
            </div>
        `;

        document.getElementById('copyBtn').addEventListener('click', () => {
            const text = `IdeaRank Analysis: ${idea}\nScore: ${data.score}/10\nSummary: ${data.summary}\nFull report on IdeaRank.`;
            navigator.clipboard.writeText(text);
            alert('Summary copied!');
        });

        document.getElementById('downloadBtn').addEventListener('click', () => {
            html2canvas(document.getElementById('reportContainer'), {
                scale: 2,
                backgroundColor: '#ffffff',
                logging: false,
                useCORS: true
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = `idearank-${idea.toLowerCase().replace(/\s+/g, '-')}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
        });
    }

    function renderImproveResult(idea, data) {
        const area = document.getElementById('dashboardResultArea') || toolView;
        const scoreColor = getScoreColor(data.newScore);
        const dashOffset = 339.29 * (1 - data.newScore / 10);

        area.innerHTML = `
            <div id="reportContainer" style="max-width: 1000px;">
                <div class="score-container">
                    <div class="circular-score">
                        <svg width="120" height="120">
                            <circle class="bg" cx="60" cy="60" r="54"></circle>
                            <circle class="progress" cx="60" cy="60" r="54" 
                                    style="stroke: ${scoreColor}; stroke-dasharray: 339.29; stroke-dashoffset: ${dashOffset};"></circle>
                        </svg>
                        <div class="score-text">
                            <span class="val">${data.newScore}</span>
                            <span class="max">/ 10</span>
                        </div>
                    </div>
                    <div>
                        <h2 style="font-size: 2.25rem;">${data.improvedIdeaTitle}</h2>
                        <p style="color: var(--secondary-text);">Pivoted from: ${idea}</p>
                    </div>
                </div>

                <div class="report-grid">
                    <div class="card span-3">
                        <h3><span class="material-symbols-outlined">transformation</span> Strategic Pivot</h3>
                        <p><strong>The Strategy:</strong> ${data.pivotStrategy}</p>
                    </div>
                    <div class="card span-2">
                        <h3><span class="material-symbols-outlined">auto_fix_high</span> Improved Solution</h3>
                        <p>${data.improvedIdeaDescription}</p>
                    </div>
                    <div class="card">
                        <h3><span class="material-symbols-outlined">warning</span> Original Weaknesses</h3>
                        <ul style="font-size: 0.875rem;">${(data.originalWeaknesses || []).map(w => `<li style="margin-bottom: 0.5rem;">${w}</li>`).join('')}</ul>
                    </div>

                    <div class="card span-2">
                        <h3><span class="material-symbols-outlined">check_circle</span> Why It Fits (Market Fit)</h3>
                        <p>${data.marketFit || 'Deep market fit analysis not provided by engine.'}</p>
                    </div>
                    <div class="card">
                        <h3><span class="material-symbols-outlined">security</span> Risk Mitigation</h3>
                        <ul style="font-size: 0.875rem;">${(data.riskMitigation || ['No specific risks identified.']).map(r => `<li style="margin-bottom: 0.5rem;">${r}</li>`).join('')}</ul>
                    </div>

                    <div class="card span-3">
                        <h3><span class="material-symbols-outlined">route</span> Next Steps Roadmap</h3>
                        <div class="market-grid">
                            ${(data.nextSteps || []).map((step, i) => `
                                <div class="market-item">
                                    <span>Phase ${i + 1}</span>
                                    <strong style="font-size: 1rem;">${step}</strong>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="share-section" style="margin-top: 4rem;">
                    <button id="copyBtn" class="share-btn">
                        <span class="material-symbols-outlined">content_copy</span> Copy Summary
                    </button>
                    <button id="downloadBtn" class="primary-btn" style="flex: 1.5;">
                        <span class="material-symbols-outlined">download</span> Download Scorecard
                    </button>
                </div>
            </div>
        `;
    }
});
