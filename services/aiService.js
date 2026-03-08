const Groq = require("groq-sdk");

const primaryGroq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const backupGroq = process.env.GROQ_API_KEY_BACKUP ? new Groq({ apiKey: process.env.GROQ_API_KEY_BACKUP }) : null;

async function analyzeIdea(idea) {
    const prompt = `
    Conduct a deep, professional startup analysis for this idea: "${idea}"
    
    Provide an exhaustive report in JSON format with exactly these fields:
    {
        "score": number (1-10, can be decimal e.g. 8.4),
        "summary": string (3-4 sentences),
        "demand": {
            "title": string,
            "description": string,
            "targetMarket": string,
            "frequency": "High" | "Medium" | "Low"
        },
        "marketAnalysis": {
            "tam": string (Total Addressable Market estimate),
            "sam": string (Serviceable Addressable Market),
            "som": string (Serviceable Obtainable Market)
        },
        "competition": {
            "landscape": "Crowded" | "Emerging" | "Blue Ocean",
            "directCompetitors": [string],
            "indirectCompetitors": [string]
        },
        "swot": {
            "strengths": [string],
            "weaknesses": [string],
            "opportunities": [string],
            "threats": [string]
        },
        "execution": {
            "roadmap": [string (3 key steps)],
            "monetization": string
        },
        "sources": [
            { "name": string, "url": string (Must be a specific, real URL to a report or article on the topic), "type": "Statista" | "Crunchbase" | "TechCrunch" | "Gartner" | "Niche Report" }
        ],
        "confidence": "Low" | "Medium" | "High",
        "why": string (Deep logic behind the score)
    }
    
    CRITICAL: The "sources" must not be generic. Provide specific links that validate the TAM/SAM or competitive landscape. If you don't have a specific link, provide a highly relevant one to the industry's top research bodies.
    
    Return ONLY the raw JSON content. Focus on being critical and realistic, not just supportive.
    `;

    try {
        const chatCompletion = await primaryGroq.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "llama-3.3-70b-versatile",
            response_format: { type: "json_object" }
        });
        return JSON.parse(chatCompletion.choices[0].message.content);
    } catch (error) {
        console.warn("Primary API failed, trying backup...", error.message);
        if (backupGroq) {
            const chatCompletion = await backupGroq.chat.completions.create({
                messages: [{ role: "user", content: prompt }],
                model: "llama-3.3-70b-versatile",
                response_format: { type: "json_object" }
            });
            return JSON.parse(chatCompletion.choices[0].message.content);
        }
        throw error;
    }
}

async function improveIdea(idea) {
    const prompt = `
    Analyze and pivot/improve this startup idea: "${idea}"
    
    The user is looking for a professional pivot or a significant improvement to a potentially weak concept.
    
    Provide a detailed professional response in exactly this JSON format:
    {
        "originalWeaknesses": ["string (3-4 points)"],
        "pivotStrategy": "string",
        "improvedIdeaTitle": "string",
        "improvedIdeaDescription": "string (long detail)",
        "newScore": 8.5,
        "keyChanges": ["string"],
        "marketFit": "string (Why this version will succeed)",
        "riskMitigation": ["string"],
        "nextSteps": ["Phase 1: ...", "Phase 2: ...", "Phase 3: ..."]
    }
    
    CRITICAL: Be extremely realistic. Suggest a viable pivot if needed. Ensure ALL fields are present.
    `;

    try {
        const chatCompletion = await primaryGroq.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "llama-3.3-70b-versatile",
            response_format: { type: "json_object" }
        });
        return JSON.parse(chatCompletion.choices[0].message.content);
    } catch (error) {
        console.warn("Primary API failed (Improve), trying backup...", error.message);
        if (backupGroq) {
            const chatCompletion = await backupGroq.chat.completions.create({
                messages: [{ role: "user", content: prompt }],
                model: "llama-3.3-70b-versatile",
                response_format: { type: "json_object" }
            });
            return JSON.parse(chatCompletion.choices[0].message.content);
        }
        throw error;
    }
}

module.exports = { analyzeIdea, improveIdea };
