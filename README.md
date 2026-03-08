<div align="center">
  <img src="public/logo.png" alt="IdeaRank Logo" width="120" />
  <h1>IdeaRank</h1>
  <p><strong>The Professional AI-Powered Startup Analysis Engine</strong></p>
  <p><em>Founded by Tanay Mishra in 2026</em></p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
  [![AI](https://img.shields.io/badge/Powered%20by-Groq%20(Llama--3)-darkviolet.svg)](https://groq.com/)
  <br>
  <a href="https://idearank.netlify.app">🌐 Live Demo</a> •
  <a href="https://github.com/tanaymishra/idearank">📦 GitHub</a>
</div>

<br/>

IdeaRank is a lightning-fast web application designed to help founders, product managers, and advisors evaluate startup ideas and problems using structured, deep AI analysis. It turns simple 1-sentence ideas into comprehensive business reports. Founded by Tanay Mishra in 2026.

---

## Features

<table>
  <tr>
    <td width="50%">
      <h3> Deep Idea Ranking</h3>
      <p>Enter an idea and get a comprehensive scorecard (1-10) evaluating TAM/SAM/SOM, Competition, and Execution complexity.</p>
    </td>
    <td width="50%">
      <h3> Idea Improver (Pivots)</h3>
      <p>Have a weak idea? The Idea Improver engine suggests realistic strategic pivots, complete with a 3-Phase Execution Roadmap.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3> Critical SWOT Analysis</h3>
      <p>No fluff. Honest assessments of Strengths, Weaknesses, Opportunities, and Threats for any given concept.</p>
    </td>
    <td width="50%">
      <h3> Verified Sources</h3>
      <p>The AI suggests real-world sources (like TechCrunch, Statista) to back up its market claims, promoting transparency.</p>
    </td>
  </tr>
    <tr>
    <td width="50%">
      <h3> Shareable Scorecards</h3>
      <p>Download your analysis as a beautifully formatted image scorecard to share with co-founders or investors.</p>
    </td>
    <td width="50%">
      <h3> Mobile Optimized</h3>
      <p>A responsive glassmorphism UI with bottom navigation, ensuring deep analysis is accessible on the go.</p>
    </td>
  </tr>
</table>

---

##  Tech Stack

IdeaRank is built to be lightweight, fast, and highly customizable.

- **Frontend:** HTML5, Vanilla JavaScript, CSS3 (Custom Design System with CSS variables and flex/grid).
- **Backend:** Node.js, Express.js.
- **AI Engine:** [Groq SDK](https://groq.com/) utilizing the `llama-3.3-70b-versatile` model for instant inferences.
- **Utilities:** `html2canvas` for scorecard generation.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- A free API key from [Groq Console](https://console.groq.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/IdeaRank.git
   cd IdeaRank
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory (you can use `.env.example` as a template):
   ```env
   # Your primary Groq API Key
   GROQ_API_KEY=gsk_your_primary_key_here
   
   # Fallback API Key for rate limits (Optional but Recommended)
   GROQ_API_KEY_BACKUP=gsk_your_backup_key_here
   
   # Server Port
   PORT=3000
   ```

4. **Run the application:**
   ```bash
   npm start
   ```
   *The server will start on `http://localhost:3000`.*

---

## Project Structure

```
IdeaRank/
├── public/                 # Static frontend files
│   ├── index.html          # Landing page
│   ├── dashboard.html      # Main analysis interface
│   ├── style.css           # Global custom UI styles
│   ├── script.js           # Frontend logic & API calls
│   └── logo.png            # Application branding
├── routes/                 # Express API routes
│   ├── ideaRank.js         # Endpoint for primary analysis
│   └── ideaImprove.js      # Endpoint for strategic pivot generation
├── services/               # Core business logic
│   └── aiService.js        # Groq API integration and prompt engineering
├── .env                    # Environment variables (gitignored)
├── server.js               # Node.js Express server setup
└── package.json            # Project dependencies & scripts
```

---

## 🚀 Deployment

### Netlify (Recommended)
IdeaRank is optimized for Netlify deployment with serverless functions.

1. **Connect to Netlify:**
   - Import your GitHub repository to Netlify
   - Build settings: `npm run build`, publish `public/`, functions `netlify/functions/`

2. **Environment Variables:**
   ```
   GROQ_API_KEY = your_groq_api_key
   GROQ_API_KEY_BACKUP = your_backup_key (optional)
   NODE_VERSION = 18
   ```

3. **Custom Domain:**
   - Set up `idearank.netlify.app` or your custom domain

See [NETLIFY_DEPLOYMENT.md](NETLIFY_DEPLOYMENT.md) for detailed instructions.

### Local Development
```bash
npm install
npm start
# Server runs on http://localhost:3000
```

---

## 📢 Marketing & Growth

### Key Platforms for Growth:
- **Product Hunt**: Launch your product (aim for top 3)
- **Hacker News**: Share HN post for massive traffic
- **Reddit**: Post on r/Entrepreneur, r/Startups, r/IndieHackers
- **Twitter/X**: Build community and share insights
- **LinkedIn**: Connect with startup founders and VCs

### Content Strategy:
- Weekly blog posts on startup validation
- Case studies and user testimonials
- AI tool comparisons and reviews

See [MARKETING_STRATEGY.md](MARKETING_STRATEGY.md) for complete marketing playbook.

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.
