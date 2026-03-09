// ... existing code ...
// Language translations
const translations = {
    en: {
        // Navigation
        'nav.ranker': 'Idea Ranker',
        'nav.improver': 'Idea Improver',
        'nav.history': 'History',
        'nav.problem': 'Problem Ranker',
        'nav.settings': 'Settings',

        // Landing Page
        'landing.title': 'IdeaRank',
        'landing.subtitle': 'Get expert-level, transparent analysis of your startup ideas. We use deep data and critical logic to rank your potential.',
        'landing.placeholder': 'Describe your startup idea in detail... (e.g., A vertical SaaS for local plumbing businesses to automate dispatching and billing via AI)',
        'landing.analyze': 'Analyze Idea',
        'landing.features.data.title': 'Real-World Data',
        'landing.features.data.desc': 'We analyze live market reports and competitive landscapes to give you genuine, cited insights.',
        'landing.features.logic.title': 'Critical Logic',
        'landing.features.logic.desc': 'No generic praise. Our AI is tuned to find the holes in your strategy and help you pivot.',
        'landing.features.share.title': 'Shareable Proof',
        'landing.features.share.desc': 'Generate high-quality scorecards to share with co-founders or investors instantly.',
        'landing.footer': '© 2024 IdeaRank Analysis Engine. Transparent. Critical. Data-Driven.',

        // Ranker
        'ranker.title': 'Idea Ranker',
        'ranker.subtitle': 'Enter a new idea for deep analysis.',
        'ranker.placeholder': 'Describe your idea...',
        'ranker.analyze': 'Analyze Idea',

        // Improver
        'improver.title': 'Idea Improver',
        'improver.subtitle': 'Transform a weak concept into a market-ready idea.',
        'improver.placeholder': 'Enter a weak idea...',
        'improver.optimize': 'Optimize Idea',

        // Settings
        'settings.title': 'Settings',
        'settings.subtitle': 'Configure your IdeaRank experience.',
        'settings.appearance': 'Appearance',
        'settings.theme': 'Theme',
        'settings.theme.light': 'Light',
        'settings.theme.dark': 'Dark',
        'settings.theme.auto': 'Auto (System)',
        'settings.theme.desc': 'Choose your preferred color scheme',
        'settings.language': 'Language',
        'settings.language.interface': 'Interface Language',
        'settings.language.desc': 'Select your preferred language',
        'settings.preferences': 'Preferences',
        'settings.notifications': 'Enable notifications',
        'settings.notifications.desc': 'Get notified when analysis completes',
        'settings.autosave': 'Auto-save analysis results',
        'settings.autosave.desc': 'Automatically save results to history',
        'settings.data': 'Data Management',
        'settings.data.desc': 'Manage your stored analysis history and application data.',
        'settings.export': 'Export History',
        'settings.clear': 'Clear History',
        'settings.save': 'Save Settings',
        'settings.reset': 'Reset to Defaults',

        // History
        'history.title': 'Analysis History',
        'history.subtitle': 'Review your past idea analyses and improvements.',
        'history.empty.title': 'No Analysis History',
        'history.empty.desc': 'Your analyzed ideas will appear here for easy reference.',
        'history.empty.action': 'Analyze Your First Idea',
        'history.filter.all': 'All Analyses',
        'history.filter.rank': 'Idea Rankings',
        'history.filter.improve': 'Idea Improvements',
        'history.search': 'Search ideas...',
        'history.ranked': 'Ranked',
        'history.improved': 'Improved',
        'history.view': 'View',
        'history.delete': 'Delete',

        // Analysis Results
        'analysis.confidence': 'Analysis Confidence',
        'analysis.summary': 'Summary',
        'analysis.demand': 'Demand & Frequency',
        'analysis.market': 'Market Size (Estimated)',
        'analysis.competition': 'Competitive Landscape',
        'analysis.competitors': 'Primary Competitors',
        'analysis.swot': 'Critical Analysis (SWOT)',
        'analysis.swot.strengths': 'Strengths',
        'analysis.swot.weaknesses': 'Weaknesses',
        'analysis.swot.opportunities': 'Opportunities',
        'analysis.swot.threats': 'Threats',
        'analysis.logic': 'Score Logic',
        'analysis.monetization': 'Monetization',
        'analysis.sources': 'Research Intelligence Sources',
        'analysis.copy': 'Copy Summary',
        'analysis.download': 'Download Scorecard',
        'analysis.pivot': 'Strategic Pivot',
        'analysis.improved': 'Improved Solution',
        'analysis.weaknesses': 'Original Weaknesses',
        'analysis.fit': 'Why It Fits (Market Fit)',
        'analysis.risks': 'Risk Mitigation',
        'analysis.roadmap': 'Next Steps Roadmap',
        'analysis.pivoted': 'Pivoted from',

        // Messages
        'msg.idea.required': 'Please describe your idea in detail.',
        'msg.analysis.failed': 'Analysis failed. Please check your API key.',
        'msg.settings.saved': 'Settings saved successfully!',
        'msg.settings.reset': 'Reset all settings to defaults?',
        'msg.settings.reset.success': 'Settings reset to defaults',
        'msg.history.clear': 'Delete all analysis history? This cannot be undone.',
        'msg.history.cleared': 'History cleared',
        'msg.history.delete': 'Delete this analysis?',
        'msg.history.deleted': 'Analysis deleted',
        'msg.summary.copied': 'Summary copied!',

        // Loading
        'loading.text': 'Assembling Market Intelligence...'
    },
    es: {
        // Navigation
        'nav.ranker': 'Clasificador de Ideas',
        'nav.improver': 'Mejorador de Ideas',
        'nav.history': 'Historial',
        'nav.problem': 'Clasificador de Problemas',
        'nav.settings': 'Configuraciones',

        // Landing Page
        'landing.title': 'IdeaRank',
        'landing.subtitle': 'Obtén análisis transparente de nivel experto de tus ideas de startup. Usamos datos profundos y lógica crítica para clasificar tu potencial.',
        'landing.placeholder': 'Describe tu idea de startup en detalle... (ej., Un SaaS vertical para empresas de plomería locales para automatizar despacho y facturación via IA)',
        'landing.analyze': 'Analizar Idea',
        'landing.features.data.title': 'Datos del Mundo Real',
        'landing.features.data.desc': 'Analizamos informes de mercado en vivo y paisajes competitivos para darte insights genuinos y citados.',
        'landing.features.logic.title': 'Lógica Crítica',
        'landing.features.logic.desc': 'Sin elogios genéricos. Nuestra IA está ajustada para encontrar los agujeros en tu estrategia y ayudarte a pivotar.',
        'landing.features.share.title': 'Prueba Compartible',
        'landing.features.share.desc': 'Genera tarjetas de puntuación de alta calidad para compartir con cofundadores o inversores al instante.',
        'landing.footer': '© 2024 Motor de Análisis IdeaRank. Transparente. Crítico. Basado en Datos.',

        // Ranker
        'ranker.title': 'Clasificador de Ideas',
        'ranker.subtitle': 'Ingresa una nueva idea para análisis profundo.',
        'ranker.placeholder': 'Describe la idea...',
        'ranker.analyze': 'Analizar Idea',

        // Improver
        'improver.title': 'Mejorador de Ideas',
        'improver.subtitle': 'Transforma un concepto débil en una idea lista para el mercado.',
        'improver.placeholder': 'Ingresa una idea débil...',
        'improver.optimize': 'Optimizar Idea',

        // Settings
        'settings.title': 'Configuración',
        'settings.subtitle': 'Configura tu experiencia IdeaRank.',
        'settings.appearance': 'Apariencia',
        'settings.theme': 'Tema',
        'settings.theme.light': 'Claro',
        'settings.theme.dark': 'Oscuro',
        'settings.theme.auto': 'Auto (Sistema)',
        'settings.theme.desc': 'Elige tu esquema de colores preferido',
        'settings.language': 'Idioma',
        'settings.language.interface': 'Idioma de Interfaz',
        'settings.language.desc': 'Selecciona tu idioma preferido',
        'settings.preferences': 'Preferencias',
        'settings.notifications': 'Habilitar notificaciones',
        'settings.notifications.desc': 'Recibe notificaciones sobre finalización de análisis',
        'settings.autosave': 'Guardar automáticamente resultados de análisis',
        'settings.autosave.desc': 'Guardar automáticamente resultados en historial',
        'settings.data': 'Gestión de Datos',
        'settings.data.desc': 'Gestiona tu historial de análisis almacenado y datos de aplicación.',
        'settings.export': 'Exportar Historial',
        'settings.clear': 'Limpiar Historial',
        'settings.save': 'Guardar Configuración',
        'settings.reset': 'Restablecer a Predeterminados',

        // History
        'history.title': 'Historial de Análisis',
        'history.subtitle': 'Revisa tus análisis y mejoras de ideas pasadas.',
        'history.empty.title': 'Sin Historial de Análisis',
        'history.empty.desc': 'Tus ideas analizadas aparecerán aquí para referencia fácil.',
        'history.empty.action': 'Analiza Tu Primera Idea',
        'history.filter.all': 'Todos los Análisis',
        'history.filter.rank': 'Clasificaciones de Ideas',
        'history.filter.improve': 'Mejoras de Ideas',
        'history.search': 'Buscar ideas...',
        'history.ranked': 'Clasificada',
        'history.improved': 'Mejorada',
        'history.view': 'Ver',
        'history.delete': 'Eliminar',

        // Analysis Results
        'analysis.confidence': 'Confianza del Análisis',
        'analysis.summary': 'Resumen',
        'analysis.demand': 'Demanda y Frecuencia',
        'analysis.market': 'Tamaño de Mercado (Estimado)',
        'analysis.competition': 'Panorama Competitivo',
        'analysis.competitors': 'Concurrents Principales',
        'analysis.swot': 'Análisis Crítico (SWOT)',
        'analysis.swot.strengths': 'Fortalezas',
        'analysis.swot.weaknesses': 'Debilidades',
        'analysis.swot.opportunities': 'Oportunidades',
        'analysis.swot.threats': 'Amenazas',
        'analysis.logic': 'Lógica del Puntaje',
        'analysis.monetization': 'Monetización',
        'analysis.sources': 'Fuentes de Inteligencia de Investigación',
        'analysis.copy': 'Copiar Resumen',
        'analysis.download': 'Descargar Tarjeta',
        'analysis.pivot': 'Pivot Estratégico',
        'analysis.improved': 'Solución Mejorada',
        'analysis.weaknesses': 'Debilidades Originales',
        'analysis.fit': 'Por qué encaja (Ajuste de mercado)',
        'analysis.risks': 'Mitigación de Riesgos',
        'analysis.roadmap': 'Hoja de ruta de pasos siguientes',
        'analysis.pivoted': 'Pivotado de',

        // Messages
        'msg.idea.required': 'Por favor describe tu idea en detalle.',
        'msg.analysis.failed': 'Fallo en análisis. Verifique su clave API.',
        'msg.settings.saved': '¡Configuración guardada correctamente!',
        'msg.settings.reset': '¿Restablecer toda la configuración a los valores predeterminados?',
        'msg.settings.reset.success': 'Configuración restablecida a cambios predeterminados',
        'msg.history.clear': '¿Eliminar toda la historia de análisis? Esto no puede deshacerse.',
        'msg.history.cleared': 'Historial borrado',
        'msg.history.delete': '¿Eliminar este análisis?',
        'msg.history.deleted': 'Análisis eliminado',
        'msg.summary.copied': 'Resumen copiado!',

        // Loading
        'loading.text': 'Montando inteligencia de mercado...'
    },
    zh: {
        // Navigation
        'nav.ranker': '创意排名器',
        'nav.improver': '创意改进器',
        'nav.history': '历史记录',
        'nav.problem': '问题排名器',
        'nav.settings': '设置',

        // Landing Page
        'landing.title': 'IdeaRank',
        'landing.subtitle': '获得专家级别的透明创业想法分析。我们使用深度数据和批判性逻辑来评估您的潜力。',
        'landing.placeholder': '详细描述您的创业想法...（例如，为本地管道企业提供的垂直SaaS，通过AI自动化调度和计费）',
        'landing.analyze': '分析创意',
        'landing.features.data.title': '真实世界数据',
        'landing.features.data.desc': '我们分析实时市场报告和竞争格局，为您提供真实、有引用的见解。',
        'landing.features.logic.title': '批判性逻辑',
        'landing.features.logic.desc': '没有泛泛的赞美。我们的AI经过调整，能找出您策略中的漏洞并帮助您转向。',
        'landing.features.share.title': '可分享证明',
        'landing.features.share.desc': '生成高质量的记分卡，可立即与联合创始人或投资者分享。',
        'landing.footer': '© 2024 IdeaRank分析引擎。透明。批判。数据驱动。',

        // Ranker
        'ranker.title': '创意排名器',
        'ranker.subtitle': '深度分析的新创意输入。',
        'ranker.placeholder': '描述创意...',
        'ranker.analyze': '分析创意',

        // Improver
        'improver.title': '创意改善器',
        'improver.subtitle': '将薄弱概念转变为市场准备的创意。',
        'improver.placeholder': '输入薄弱创意...',
        'improver.optimize': '优化创意',

        // Settings
        'settings.title': '设置',
        'settings.subtitle': '配置您的IdeaRank体验。',
        'settings.appearance': '外观',
        'settings.theme': '主题',
        'settings.theme.light': '浅色',
        'settings.theme.dark': '深色',
        'settings.theme.auto': '自动（系统）',
        'settings.theme.desc': '选择你偏好配色方案',
        'settings.language': '语言',
        'settings.language.interface': '界面语言',
        'settings.language.desc': '选择你偏好的语言',
        'settings.preferences': '偏好设置',
        'settings.notifications': '开启通知',
        'settings.notifications.desc': '接受分析完成通知',
        'settings.autosave': '自动保存分析结果',
        'settings.autosave.desc': '自动将结果保存到历史',
        'settings.data': '数据管理',
        'settings.data.desc': '管理你的分析历史和应用数据。',
        'settings.export': '导出历史',
        'settings.clear': '清除历史',
        'settings.save': '保存设置',
        'settings.reset': '还原到默认',

        // History
        'history.title': '分析历史',
        'history.subtitle': '回顾过去的创意分析和改进。',
        'history.empty.title': '无分析历史',
        'history.empty.desc': '你的分析想法会在这里显示以便参考。',
        'history.empty.action': '分析你的第一个创意',
        'history.filter.all': '所有分析',
        'history.filter.rank': '创意排名',
        'history.filter.improve': '创意改进',
        'history.search': '搜索创意...',
        'history.ranked': '已排名',
        'history.improved': '已改进',
        'history.view': '查看',
        'history.delete': '删除',

        // Analysis Results
        'analysis.confidence': '分析可信度',
        'analysis.summary': '摘要',
        'analysis.demand': '需求与频率',
        'analysis.market': '市场规模（估算）',
        'analysis.competition': '竞争格局',
        'analysis.competitors': '主要竞争者',
        'analysis.swot': '批判性分析（SWOT）',
        'analysis.swot.strengths': '优势',
        'analysis.swot.weaknesses': '劣势',
        'analysis.swot.opportunities': '机会',
        'analysis.swot.threats': '威胁',
        'analysis.logic': '评分逻辑',
        'analysis.monetization': '货币化',
        'analysis.sources': '研究情报来源',
        'analysis.copy': '复制摘要',
        'analysis.download': '下载名片',
        'analysis.pivot': '战略转折',
        'analysis.improved': '改进方案',
        'analysis.weaknesses': '原始弱点',
        'analysis.fit': '为什么适合（市场契合）',
        'analysis.risks': '风险缓解',
        'analysis.roadmap': '下一步路线图',
        'analysis.pivoted': '由...转变',

        // Messages
        'msg.idea.required': '请详细描述您的创意。',
        'msg.analysis.failed': '分析失败。请检查您的API密钥。',
        'msg.settings.saved': '设置已成功保存！',
        'msg.settings.reset': '全部设定恢复默认值？',
        'msg.settings.reset.success': '设定已恢复至默认值',
        'msg.history.clear': '删除所有分析历史？此操作无法撤销。',
        'msg.history.cleared': '历史已清除',
        'msg.history.delete': '删除此分析？',
        'msg.history.deleted': '分析已删除',
        'msg.summary.copied': '摘要已复制！',

        // Loading
        'loading.text': '正在组装市场情报...'
    }
};

// Global variables
let currentLanguage = 'en';
let currentTool = 'ranker';
let analysisHistory = JSON.parse(localStorage.getItem('ideaRankHistory') || '[]');
let settings = JSON.parse(localStorage.getItem('ideaRankSettings') || '{}');

// Default settings
const defaultSettings = {
    theme: 'auto',
    language: 'en',
    notifications: true,
    autosave: true
};

// Merge with defaults
settings = { ...defaultSettings, ...settings };

// Validate saved language exists in translations, fallback to default if not
if (!translations[settings.language]) {
    settings.language = defaultSettings.language;
}

// Translation function
function translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[currentLanguage]?.[key];
        if (translation) {
            element.textContent = translation;
        }
    });

    // Handle placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = translations[currentLanguage]?.[key];
        if (translation) {
            element.placeholder = translation;
        }
    });
}

// Set language function
function setLanguage(lang) {
    // Validate language exists in translations, fallback to 'en' if not
    if (!translations[lang]) {
        lang = 'en';
    }
    currentLanguage = lang;
    settings.language = lang;
    localStorage.setItem('ideaRankSettings', JSON.stringify(settings));
    translatePage();

    // Update language selector if it exists
    const currentLangElement = document.getElementById('currentLang');
    if (currentLangElement) {
        currentLangElement.textContent = lang.toUpperCase();
    }
}

// Apply theme function
function applyTheme(theme, shouldSave = false) {
    // Remove all theme classes
    document.body.classList.remove('theme-dark', 'theme-light', 'theme-auto');

    // Apply the selected theme
    if (theme === 'dark') {
        document.body.classList.add('theme-dark');
    } else if (theme === 'light') {
        document.body.classList.add('theme-light');
    } else {
        // Auto theme
        document.body.classList.add('theme-auto');
    }

    // Update settings if requested
    if (shouldSave) {
        settings.theme = theme;
        localStorage.setItem('ideaRankSettings', JSON.stringify(settings));
    }
}

// Show loading function
function showLoading() {
    document.getElementById('loading').style.display = 'flex';
}

// Hide loading function
function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

// Show toast notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type} show`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

// Save to history
function saveToHistory(data, type) {
    if (!settings.autosave) return;

    const historyItem = {
        id: Date.now(),
        type: type,
        timestamp: new Date().toISOString(),
        data: data
    };

    analysisHistory.unshift(historyItem);
    if (analysisHistory.length > 50) {
        analysisHistory = analysisHistory.slice(0, 50);
    }

    localStorage.setItem('ideaRankHistory', JSON.stringify(analysisHistory));
}

// Analyze idea function
async function analyzeIdea(idea, type = 'rank') {
    if (!idea.trim()) {
        showToast(translations[currentLanguage]['msg.idea.required'], 'info');
        return;
    }

    showLoading();

    try {
        const endpoint = type === 'improve' ? '/api/improve' : '/api/rank';
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ idea: idea.trim() })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const analysis = await response.json();

        // Transform API response to match frontend expectations
        let transformedAnalysis;
        if (type === 'improve') {
            transformedAnalysis = {
                score: analysis.newScore || 8.5,
                summary: analysis.improvedIdeaDescription || analysis.pivotStrategy || "Improved idea analysis complete",
                demand: {
                    title: "Improved Market Opportunity",
                    description: "Analysis of the pivoted concept",
                    targetMarket: "To be determined",
                    frequency: "High"
                },
                marketAnalysis: {
                    tam: "To be calculated",
                    sam: "To be calculated",
                    som: "To be calculated"
                },
                competition: {
                    landscape: "To be analyzed",
                    directCompetitors: [],
                    indirectCompetitors: []
                },
                swot: {
                    strengths: analysis.keyChanges || [],
                    weaknesses: analysis.originalWeaknesses || [],
                    opportunities: [],
                    threats: []
                },
                execution: {
                    roadmap: analysis.nextSteps || [],
                    monetization: "To be determined"
                },
                sources: [],
                confidence: "High",
                why: analysis.marketFit || "Strategic pivot implemented",
                improved: analysis.improvedIdeaTitle || analysis.pivotStrategy || "Improved Solution",
                originalWeaknesses: analysis.originalWeaknesses || [],
                fit: analysis.marketFit || "Better market fit achieved",
                risks: analysis.riskMitigation || [],
                pivoted: idea
            };
        } else {
            // Transform ranking analysis
            transformedAnalysis = {
                score: analysis.score || 7.0,
                summary: analysis.summary || "Analysis complete",
                demand: analysis.demand || {
                    title: "Market Demand Analysis",
                    description: "To be determined",
                    targetMarket: "To be determined",
                    frequency: "Medium"
                },
                marketAnalysis: analysis.marketAnalysis || {
                    tam: "To be calculated",
                    sam: "To be calculated",
                    som: "To be calculated"
                },
                competition: analysis.competition || {
                    landscape: "Emerging",
                    directCompetitors: [],
                    indirectCompetitors: []
                },
                swot: analysis.swot || {
                    strengths: [],
                    weaknesses: [],
                    opportunities: [],
                    threats: []
                },
                execution: analysis.execution || {
                    roadmap: [],
                    monetization: "To be determined"
                },
                sources: analysis.sources || [],
                confidence: analysis.confidence || "Medium",
                why: analysis.why || "Analysis completed"
            };
        }

        hideLoading();
        saveToHistory(transformedAnalysis, type);
        displayAnalysis(transformedAnalysis, type);

        // Track successful analysis
        if (typeof trackIdeaAnalysis === 'function') {
            trackIdeaAnalysis(type);
        }

    } catch (error) {
        hideLoading();
        console.error('Analysis failed:', error);
        showToast(translations[currentLanguage]['msg.analysis.failed'], 'error');
    }
}

// Analyze problem function
async function analyzeProblem(problem) {
    if (!problem.trim()) {
        showToast('Please describe the problem in detail.', 'info');
        return;
    }

    showLoading();

    try {
        const response = await fetch('/api/problem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ problem: problem.trim() })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const analysis = await response.json();

        // Transform the analysis for problem ranking display
        const transformedAnalysis = {
            score: analysis.score || 6.5,
            summary: analysis.summary || "Problem analysis complete",
            demand: analysis.demand || {
                title: "Problem Impact Assessment",
                description: "Analysis of the problem's market significance",
                targetMarket: "To be determined",
                frequency: "Medium"
            },
            marketAnalysis: analysis.marketAnalysis || {
                tam: "To be calculated",
                sam: "To be calculated",
                som: "To be calculated"
            },
            competition: analysis.competition || {
                landscape: "Emerging",
                directCompetitors: [],
                indirectCompetitors: []
            },
            swot: analysis.swot || {
                strengths: [],
                weaknesses: [],
                opportunities: [],
                threats: []
            },
            execution: analysis.execution || {
                roadmap: [],
                monetization: "To be determined"
            },
            sources: analysis.sources || [],
            confidence: analysis.confidence || "Medium",
            why: analysis.why || "Problem analysis completed"
        };

        hideLoading();
        saveToHistory(transformedAnalysis, 'problem');
        displayAnalysis(transformedAnalysis, 'problem');

        // Track successful problem analysis
        if (typeof trackIdeaAnalysis === 'function') {
            trackIdeaAnalysis('problem');
        }

    } catch (error) {
        hideLoading();
        console.error('Problem analysis failed:', error);
        showToast('Problem analysis failed. Please check your API key.', 'error');
    }
}

// Display analysis results
function displayAnalysis(analysis, type = 'rank') {
    const toolView = document.getElementById('toolView');

    const isImprover = type === 'improve';
    const scoreColor = analysis.score >= 8 ? 'var(--success-color)' :
        analysis.score >= 6 ? 'var(--warning-color)' : 'var(--danger-color)';

    const circumference = 2 * Math.PI * 54;
    const strokeDashoffset = circumference - (analysis.score / 10) * circumference;

    // Score tier label
    const tierInfo = analysis.score >= 8.5 ? { label: 'Excellent', cls: 'tier-excellent' } :
        analysis.score >= 7 ? { label: 'Good', cls: 'tier-good' } :
            analysis.score >= 5 ? { label: 'Average', cls: 'tier-average' } :
                { label: 'Needs Work', cls: 'tier-weak' };

    // Competition landscape CSS class
    const rawLandscape = (analysis.competition && analysis.competition.landscape) ? analysis.competition.landscape : '';
    const landscapeCls = rawLandscape.toLowerCase().replace(/\s+/g, '-');

    toolView.innerHTML = `
        <div class="score-container">
            <div class="circular-score">
                <svg width="120" height="120">
                    <circle class="bg" cx="60" cy="60" r="54"></circle>
                    <circle class="progress" cx="60" cy="60" r="54"
                            style="stroke: ${scoreColor}; stroke-dasharray: ${circumference}; stroke-dashoffset: ${strokeDashoffset};"></circle>
                </svg>
                <div class="score-text">
                    <span class="val">${analysis.score}</span>
                    <span class="max">/10</span>
                </div>
            </div>
            <div class="score-info">
                <h2 class="score-title">${isImprover ? translations[currentLanguage]['analysis.improved'] : 'Analysis Complete'}</h2>
                <p class="score-confidence-label">${analysis.confidence} ${translations[currentLanguage]['analysis.confidence']}</p>
                <span class="score-tier-badge ${tierInfo.cls}">${tierInfo.label}</span>
            </div>
        </div>

        <div class="report-grid">
            <div class="card span-full">
                <h3><span class="material-symbols-outlined">summarize</span> ${translations[currentLanguage]['analysis.summary']}</h3>
                <p class="card-summary-text">${analysis.summary}</p>
            </div>

            ${isImprover ? `
                <div class="card span-full">
                    <h3><span class="material-symbols-outlined">pivot_table_chart</span> ${translations[currentLanguage]['analysis.pivot']}</h3>
                    <p class="card-summary-text">${analysis.improved}</p>
                </div>

                <div class="card">
                    <h3><span class="material-symbols-outlined">warning</span> ${translations[currentLanguage]['analysis.weaknesses']}</h3>
                    <ul class="styled-list">
                        ${analysis.originalWeaknesses.map(w => `<li>${w}</li>`).join('')}
                    </ul>
                </div>

                <div class="card">
                    <h3><span class="material-symbols-outlined">check_circle</span> ${translations[currentLanguage]['analysis.fit']}</h3>
                    <p class="card-summary-text">${analysis.fit}</p>
                </div>

                <div class="card span-full">
                    <h3><span class="material-symbols-outlined">security</span> ${translations[currentLanguage]['analysis.risks']}</h3>
                    <p>${analysis.risks}</p>
                </div>

                <div class="card span-full">
                    <h3><span class="material-symbols-outlined">route</span> ${translations[currentLanguage]['analysis.roadmap']}</h3>
                    <ol class="roadmap-steps">
                        ${analysis.execution.roadmap.map((step, i) => `
                            <li class="roadmap-step">
                                <span class="roadmap-num">${i + 1}</span>
                                <span>${step}</span>
                            </li>
                        `).join('')}
                    </ol>
                </div>

                <div class="card">
                    <h3><span class="material-symbols-outlined">transform</span> ${translations[currentLanguage]['analysis.pivoted']}</h3>
                    <p style="font-style: italic; color: var(--secondary-text);">"${analysis.pivoted}"</p>
                </div>

                <div class="card">
                    <h3><span class="material-symbols-outlined">psychology</span> ${translations[currentLanguage]['analysis.logic']}</h3>
                    <p>${analysis.why}</p>
                </div>
            ` : `
                <div class="card">
                    <h3><span class="material-symbols-outlined">trending_up</span> ${translations[currentLanguage]['analysis.demand']}</h3>
                    <div class="freq-badge freq-${(analysis.demand.frequency || 'medium').toLowerCase()}">${analysis.demand.frequency} Demand</div>
                    <p class="demand-title">${analysis.demand.title}</p>
                    <p class="demand-description">${analysis.demand.description}</p>
                    <div class="demand-meta">
                        <div class="demand-meta-row">
                            <span class="meta-label">Target</span>
                            <span class="meta-value">${analysis.demand.targetMarket}</span>
                        </div>
                        <div class="demand-meta-row">
                            <span class="meta-label">Freq.</span>
                            <span class="meta-value">${analysis.demand.frequency}</span>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3><span class="material-symbols-outlined">pie_chart</span> ${translations[currentLanguage]['analysis.market']}</h3>
                    <div class="market-grid">
                        <div class="market-item">
                            <span>TAM</span>
                            <strong>${analysis.marketAnalysis.tam}</strong>
                        </div>
                        <div class="market-item">
                            <span>SAM</span>
                            <strong>${analysis.marketAnalysis.sam}</strong>
                        </div>
                        <div class="market-item">
                            <span>SOM</span>
                            <strong>${analysis.marketAnalysis.som}</strong>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3><span class="material-symbols-outlined">groups</span> ${translations[currentLanguage]['analysis.competition']}</h3>
                    ${rawLandscape ? `<div class="landscape-badge landscape-${landscapeCls}">${rawLandscape}</div>` : ''}
                    ${analysis.competition.directCompetitors && analysis.competition.directCompetitors.length > 0 ? `
                        <div class="competitor-section">
                            <p class="competitor-label">Direct</p>
                            <div class="competitor-tags">
                                ${analysis.competition.directCompetitors.map(c => `<span class="competitor-tag direct">${c}</span>`).join('')}
                            </div>
                        </div>
                    ` : ''}
                    ${analysis.competition.indirectCompetitors && analysis.competition.indirectCompetitors.length > 0 ? `
                        <div class="competitor-section">
                            <p class="competitor-label">Indirect</p>
                            <div class="competitor-tags">
                                ${analysis.competition.indirectCompetitors.map(c => `<span class="competitor-tag indirect">${c}</span>`).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>

                <div class="card">
                    <h3><span class="material-symbols-outlined">psychology</span> ${translations[currentLanguage]['analysis.logic']}</h3>
                    <p>${analysis.why}</p>
                </div>

                <div class="card span-full">
                    <h3><span class="material-symbols-outlined">analytics</span> ${translations[currentLanguage]['analysis.swot']}</h3>
                    <div class="swot-grid">
                        <div class="swot-item swot-S">
                            <h4>${translations[currentLanguage]['analysis.swot.strengths']}</h4>
                            <ul>${analysis.swot.strengths.map(item => `<li>${item}</li>`).join('')}</ul>
                        </div>
                        <div class="swot-item swot-W">
                            <h4>${translations[currentLanguage]['analysis.swot.weaknesses']}</h4>
                            <ul>${analysis.swot.weaknesses.map(item => `<li>${item}</li>`).join('')}</ul>
                        </div>
                        <div class="swot-item swot-O">
                            <h4>${translations[currentLanguage]['analysis.swot.opportunities']}</h4>
                            <ul>${analysis.swot.opportunities.map(item => `<li>${item}</li>`).join('')}</ul>
                        </div>
                        <div class="swot-item swot-T">
                            <h4>${translations[currentLanguage]['analysis.swot.threats']}</h4>
                            <ul>${analysis.swot.threats.map(item => `<li>${item}</li>`).join('')}</ul>
                        </div>
                    </div>
                </div>

                <div class="card span-full">
                    <h3><span class="material-symbols-outlined">payments</span> ${translations[currentLanguage]['analysis.monetization']}</h3>
                    <p>${analysis.execution.monetization}</p>
                </div>
            `}
        </div>

        <div class="sources-bar">
            <span class="sources-label">${translations[currentLanguage]['analysis.sources']}</span>
            <div class="source-badges">
                ${analysis.sources.map(source => `
                    <div class="source-badge" data-tooltip="${source.name}" onclick="window.open('${source.url}', '_blank')">
                        <span class="material-symbols-outlined">link</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="share-section">
            <button class="share-btn" onclick="copyAnalysisSummary()">
                <span class="material-symbols-outlined">content_copy</span>
                ${translations[currentLanguage]['analysis.copy']}
            </button>
            <button class="share-btn" onclick="downloadScorecard()">
                <span class="material-symbols-outlined">download</span>
                ${translations[currentLanguage]['analysis.download']}
            </button>
        </div>
    `;
}

// Copy analysis summary
function copyAnalysisSummary() {
    const summary = document.querySelector('.report-grid .card p').textContent;
    navigator.clipboard.writeText(summary).then(() => {
        showToast(translations[currentLanguage]['msg.summary.copied'], 'success');
    });
}

// Download scorecard
function downloadScorecard() {
    // Create a simple scorecard image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;

    // Fill background with gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(0, '#2563eb');
    gradient.addColorStop(1, '#1d4ed8');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add white overlay for content
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.fillRect(20, 20, canvas.width - 40, canvas.height - 40);

    // Add title
    ctx.fillStyle = '#1a1a1a';
    ctx.font = 'bold 32px Inter, sans-serif';
    ctx.fillText('IdeaRank Analysis', 50, 80);

    // Add score
    const scoreElement = document.querySelector('.score-text .val');
    if (scoreElement) {
        ctx.fillStyle = '#2563eb';
        ctx.font = 'bold 48px Inter, sans-serif';
        ctx.fillText(`Score: ${scoreElement.textContent}/10`, 50, 140);
    }

    // Add summary
    const summaryElement = document.querySelector('.report-grid .card p');
    if (summaryElement) {
        ctx.fillStyle = '#1a1a1a';
        ctx.font = '16px Inter, sans-serif';
        const summary = summaryElement.textContent;
        const words = summary.split(' ');
        let line = '';
        let y = 200;
        const maxWidth = 700;
        const lineHeight = 25;

        for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                ctx.fillText(line, 50, y);
                line = words[n] + ' ';
                y += lineHeight;
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, 50, y);
    }

    // Add footer
    ctx.fillStyle = '#6b7280';
    ctx.font = '14px Inter, sans-serif';
    ctx.fillText('Generated by IdeaRank - Transparent. Critical. Data-Driven.', 50, canvas.height - 50);

    // Download the canvas as image
    const link = document.createElement('a');
    link.download = 'idearank-scorecard.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// Tool switching functions
function showRanker() {
    const toolView = document.getElementById('toolView');
    toolView.innerHTML = `
        <div style="max-width: 600px; margin: 0 auto;">
            <h2 data-i18n="ranker.title">Idea Ranker</h2>
            <p data-i18n="ranker.subtitle" style="color: var(--secondary-text); margin-bottom: 2rem;">Enter a new idea for deep analysis.</p>
            
            <div class="input-group">
                <textarea id="rankerInput" data-i18n-placeholder="ranker.placeholder" placeholder="Describe the idea..."></textarea>
                <button class="primary-btn" onclick="analyzeIdea(document.getElementById('rankerInput').value, 'rank')" data-i18n="ranker.analyze">Analyze Idea</button>
            </div>
        </div>
    `;
    translatePage();
}

function showImprover() {
    const toolView = document.getElementById('toolView');
    toolView.innerHTML = `
        <div style="max-width: 600px; margin: 0 auto;">
            <h2 data-i18n="improver.title">Idea Improver</h2>
            <p data-i18n="improver.subtitle" style="color: var(--secondary-text); margin-bottom: 2rem;">Transform a weak concept into a market-ready idea.</p>
            
            <div class="input-group">
                <textarea id="improverInput" data-i18n-placeholder="improver.placeholder" placeholder="Enter a weak idea..."></textarea>
                <button class="primary-btn" onclick="analyzeIdea(document.getElementById('improverInput').value, 'improve')" data-i18n="improver.optimize">Optimize Idea</button>
            </div>
        </div>
    `;
    translatePage();
}

function showProblem() {
    const toolView = document.getElementById('toolView');
    toolView.innerHTML = `
        <div style="max-width: 600px; margin: 0 auto;">
            <h2>Problem Ranker</h2>
            <p style="color: var(--secondary-text); margin-bottom: 2rem;">Analyze and rank problems to understand their market potential and solution viability.</p>
            
            <div class="input-group">
                <textarea id="problemInput" placeholder="Describe the problem you want to solve..."></textarea>
                <button class="primary-btn" onclick="analyzeProblem(document.getElementById('problemInput').value)">Analyze Problem</button>
            </div>
        </div>
    `;
    translatePage();
}

function renderHistoryCards(list) {
    const typeLabel = (t) =>
        t === 'rank' ? translations[currentLanguage]['history.ranked'] :
            t === 'improve' ? translations[currentLanguage]['history.improved'] : 'Problem';

    return list.map(item => {
        const score = item.data.score;
        const scoreColor = score >= 8 ? 'var(--success-color)' :
            score >= 6 ? 'var(--warning-color)' : 'var(--danger-color)';
        const summary = (item.data.summary || '').substring(0, 100);
        const date = new Date(item.timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
        return `
            <div class="history-card">
                <div class="hc-score-wrap">
                    <div class="hc-score" style="color: ${scoreColor}; border-color: ${scoreColor};">${score}</div>
                </div>
                <div class="hc-body">
                    <div class="hc-top">
                        <span class="hc-summary">${summary}${(item.data.summary || '').length > 100 ? '…' : ''}</span>
                        <span class="hc-type-badge ${item.type}">${typeLabel(item.type)}</span>
                    </div>
                    <div class="hc-meta">
                        <span class="hc-meta-item">
                            <span class="material-symbols-outlined">star</span> ${score}/10
                        </span>
                        <span class="hc-meta-item">
                            <span class="material-symbols-outlined">calendar_today</span> ${date}
                        </span>
                    </div>
                </div>
                <div class="hc-actions">
                    <button class="hc-btn hc-view" onclick="viewHistoryItem(${item.id})">
                        <span class="material-symbols-outlined">visibility</span>
                        ${translations[currentLanguage]['history.view']}
                    </button>
                    <button class="hc-btn hc-delete" onclick="deleteHistoryItem(${item.id})" title="${translations[currentLanguage]['history.delete']}">
                        <span class="material-symbols-outlined">delete</span>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function showHistory() {
    const toolView = document.getElementById('toolView');

    if (analysisHistory.length === 0) {
        toolView.innerHTML = `
            <div class="empty-state">
                <span class="material-symbols-outlined">history</span>
                <h3 data-i18n="history.empty.title">No Analysis History</h3>
                <p data-i18n="history.empty.desc">Your analyzed ideas will appear here for easy reference.</p>
                <button class="primary-btn" onclick="switchTool('ranker')" data-i18n="history.empty.action">Analyze Your First Idea</button>
            </div>
        `;
        translatePage();
        return;
    }

    toolView.innerHTML = `
        <div class="tool-header">
            <h2 data-i18n="history.title">Analysis History</h2>
            <p class="tool-subtitle" data-i18n="history.subtitle">Review your past idea analyses and improvements.</p>
        </div>
        <div class="filter-row">
            <button class="filter-pill active" onclick="filterHistory('all')" data-i18n="history.filter.all">All Analyses</button>
            <button class="filter-pill" onclick="filterHistory('rank')" data-i18n="history.filter.rank">Idea Rankings</button>
            <button class="filter-pill" onclick="filterHistory('improve')" data-i18n="history.filter.improve">Idea Improvements</button>
        </div>
        <div class="history-list" id="historyGrid">
            ${renderHistoryCards(analysisHistory)}
        </div>
    `;
    translatePage();
}

function showSettings() {
    const toolView = document.getElementById('toolView');
    toolView.innerHTML = `
        <div class="tool-header">
            <h2 data-i18n="settings.title">Settings</h2>
            <p class="tool-subtitle" data-i18n="settings.subtitle">Configure your IdeaRank experience.</p>
        </div>

        <div class="settings-stack">

            <!-- Appearance -->
            <div class="settings-card">
                <div class="settings-card-header">
                    <span class="material-symbols-outlined">palette</span>
                    <h3 data-i18n="settings.appearance">Appearance</h3>
                </div>
                <div class="settings-row">
                    <div class="settings-row-info">
                        <label data-i18n="settings.theme">Theme</label>
                        <p class="tool-subtitle" data-i18n="settings.theme.desc">Choose your preferred color scheme</p>
                    </div>
                    <div class="settings-row-control">
                        <select class="setting-select" id="themeSelect">
                            <option value="light" data-i18n="settings.theme.light">Light</option>
                            <option value="dark" data-i18n="settings.theme.dark">Dark</option>
                            <option value="auto" data-i18n="settings.theme.auto">Auto (System)</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Language -->
            <div class="settings-card">
                <div class="settings-card-header">
                    <span class="material-symbols-outlined">language</span>
                    <h3 data-i18n="settings.language">Language</h3>
                </div>
                <div class="settings-row">
                    <div class="settings-row-info">
                        <label data-i18n="settings.language.interface">Interface Language</label>
                        <p class="tool-subtitle" data-i18n="settings.language.desc">Select your preferred language</p>
                    </div>
                    <div class="settings-row-control">
                        <select class="setting-select" id="languageSelect">
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                            <option value="de">Deutsch</option>
                            <option value="pt">Português</option>
                            <option value="it">Italiano</option>
                            <option value="zh">中文</option>
                            <option value="ja">日本語</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Preferences -->
            <div class="settings-card">
                <div class="settings-card-header">
                    <span class="material-symbols-outlined">tune</span>
                    <h3 data-i18n="settings.preferences">Preferences</h3>
                </div>
                <div class="settings-row settings-row-toggle">
                    <div class="settings-row-info">
                        <label data-i18n="settings.notifications">Enable notifications</label>
                        <p class="tool-subtitle" data-i18n="settings.notifications.desc">Get notified when analysis completes</p>
                    </div>
                    <div class="settings-row-control">
                        <label class="toggle-label">
                            <input type="checkbox" id="notificationsToggle">
                            <div class="toggle-slider"></div>
                        </label>
                    </div>
                </div>
                <div class="settings-row-divider"></div>
                <div class="settings-row settings-row-toggle">
                    <div class="settings-row-info">
                        <label data-i18n="settings.autosave">Auto-save analysis results</label>
                        <p class="tool-subtitle" data-i18n="settings.autosave.desc">Automatically save results to history</p>
                    </div>
                    <div class="settings-row-control">
                        <label class="toggle-label">
                            <input type="checkbox" id="autosaveToggle">
                            <div class="toggle-slider"></div>
                        </label>
                    </div>
                </div>
            </div>

            <!-- Data Management -->
            <div class="settings-card">
                <div class="settings-card-header">
                    <span class="material-symbols-outlined">database</span>
                    <h3 data-i18n="settings.data">Data Management</h3>
                </div>
                <p class="tool-subtitle" style="margin-bottom: 1.25rem;" data-i18n="settings.data.desc">Manage your stored analysis history and application data.</p>
                <div class="setting-actions">
                    <button class="secondary-btn" onclick="exportHistory()">
                        <span class="material-symbols-outlined">download</span>
                        <span data-i18n="settings.export">Export History</span>
                    </button>
                    <button class="danger-btn" onclick="clearHistory()">
                        <span class="material-symbols-outlined">delete_forever</span>
                        <span data-i18n="settings.clear">Clear History</span>
                    </button>
                </div>
            </div>

        </div>

        <div class="settings-footer">
            <button class="secondary-btn" onclick="resetSettings()" data-i18n="settings.reset">Reset to Defaults</button>
            <button class="primary-btn" onclick="saveSettings()" data-i18n="settings.save">Save Settings</button>
        </div>
    `;

    // Set current values
    document.getElementById('themeSelect').value = settings.theme;
    document.getElementById('languageSelect').value = settings.language;
    document.getElementById('notificationsToggle').checked = settings.notifications;
    document.getElementById('autosaveToggle').checked = settings.autosave;

    // Add event listeners
    document.getElementById('languageSelect').addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    document.getElementById('themeSelect').addEventListener('change', (e) => {
        applyTheme(e.target.value, true);
    });

    translatePage();
}

// History functions
function filterHistory(type) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    let filteredHistory = analysisHistory;
    if (type !== 'all') {
        filteredHistory = analysisHistory.filter(item => item.type === type);
    }

    const historyGrid = document.getElementById('historyGrid');
    historyGrid.innerHTML = renderHistoryCards(filteredHistory);
}

function viewHistoryItem(id) {
    const item = analysisHistory.find(h => h.id === id);
    if (item) {
        displayAnalysis(item.data, item.type);
    }
}

function deleteHistoryItem(id) {
    if (confirm(translations[currentLanguage]['msg.history.delete'])) {
        analysisHistory = analysisHistory.filter(item => item.id !== id);
        localStorage.setItem('ideaRankHistory', JSON.stringify(analysisHistory));
        showHistory();
        showToast(translations[currentLanguage]['msg.history.deleted'], 'success');
    }
}

// Settings functions
function saveSettings() {
    settings.theme = document.getElementById('themeSelect').value;
    settings.language = document.getElementById('languageSelect').value;
    settings.notifications = document.getElementById('notificationsToggle').checked;
    settings.autosave = document.getElementById('autosaveToggle').checked;

    localStorage.setItem('ideaRankSettings', JSON.stringify(settings));
    // Theme and language are already saved by their change listeners
    showToast(translations[currentLanguage]['msg.settings.saved'], 'success');
}

function resetSettings() {
    if (confirm(translations[currentLanguage]['msg.settings.reset'])) {
        settings = { ...defaultSettings };
        localStorage.setItem('ideaRankSettings', JSON.stringify(settings));
        applyTheme(settings.theme, false);
        setLanguage(settings.language);
        showSettings();
        showToast(translations[currentLanguage]['msg.settings.reset.success'], 'success');
    }
}

function exportHistory() {
    const dataStr = JSON.stringify(analysisHistory, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'idearank-history.json';
    link.click();
    URL.revokeObjectURL(url);
}

function clearHistory() {
    if (confirm(translations[currentLanguage]['msg.history.clear'])) {
        analysisHistory = [];
        localStorage.setItem('ideaRankHistory', JSON.stringify(analysisHistory));
        showHistory();
        showToast(translations[currentLanguage]['msg.history.cleared'], 'success');
    }
}

// Tool switching
function switchTool(tool) {
    currentTool = tool;

    // Track tool switch
    if (typeof trackToolSwitch === 'function') {
        trackToolSwitch(tool);
    }

    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-tool="${tool}"]`).classList.add('active');

    // Show appropriate tool
    switch (tool) {
        case 'ranker':
            showRanker();
            break;
        case 'improver':
            showImprover();
            break;
        case 'problem':
            showProblem();
            break;
        case 'history':
            showHistory();
            break;
        case 'settings':
            showSettings();
            break;
    }

    // Close mobile menu if open
    const sidebar = document.querySelector('.sidebar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const overlay = document.querySelector('.mobile-overlay');

    if (sidebar && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
    // Apply saved settings
    applyTheme(settings.theme);
    setLanguage(settings.language);

    // Check if we're on the dashboard page
    if (document.querySelector('.dashboard-container')) {
        // Set up navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const tool = item.getAttribute('data-tool');
                if (tool) { // All tools are now enabled
                    switchTool(tool);
                }
            });
        });

        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const sidebar = document.querySelector('.sidebar');

        if (mobileMenuBtn && sidebar) {
            // Create overlay
            const overlay = document.createElement('div');
            overlay.className = 'mobile-overlay';
            document.body.appendChild(overlay);

            mobileMenuBtn.addEventListener('click', () => {
                sidebar.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');
                overlay.classList.toggle('active');
            });

            overlay.addEventListener('click', () => {
                sidebar.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                overlay.classList.remove('active');
            });
        }

        // Show default tool
        showRanker();
    } else {
        // Mark body for landing-page gradient
        document.body.classList.add('landing-page');

        // Landing page functionality
        const rankBtn = document.getElementById('rankBtn');
        const ideaInput = document.getElementById('ideaInput');

        if (rankBtn && ideaInput) {
            rankBtn.addEventListener('click', () => {
                const idea = ideaInput.value.trim();
                if (idea) {
                    // Redirect to dashboard with the idea
                    localStorage.setItem('pendingIdea', idea);
                    window.location.href = 'dashboard.html';
                }
            });

            // Handle enter key
            ideaInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && e.ctrlKey) {
                    rankBtn.click();
                }
            });
        }

        // Language selector functionality
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');

        if (languageBtn && languageDropdown) {
            languageBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                languageDropdown.classList.toggle('show');
            });

            document.addEventListener('click', () => {
                languageDropdown.classList.remove('show');
            });

            languageDropdown.addEventListener('click', (e) => {
                e.stopPropagation();
            });

            document.querySelectorAll('.language-option').forEach(option => {
                option.addEventListener('click', () => {
                    const lang = option.getAttribute('data-lang');
                    setLanguage(lang);
                    languageDropdown.classList.remove('show');
                });
            });
        }
    }

    // Check for pending idea from landing page
    const pendingIdea = localStorage.getItem('pendingIdea');
    if (pendingIdea && document.querySelector('.dashboard-container')) {
        localStorage.removeItem('pendingIdea');
        setTimeout(() => {
            analyzeIdea(pendingIdea, 'rank');
        }, 500);
    }

    // Initial translation
    translatePage();
});
