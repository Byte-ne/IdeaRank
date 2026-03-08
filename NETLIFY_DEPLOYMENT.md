# Netlify Deployment Guide for IdeaRank

## 🚀 Deployment Steps

### 1. **Connect Repository to Netlify**
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure build settings:

### 2. **Build Settings**
```
Branch to deploy: main
Build command: npm run build
Publish directory: public
Functions directory: netlify/functions
```

### 3. **Environment Variables**
Add these in Netlify dashboard (Site settings → Environment variables):
```
GROQ_API_KEY = your_primary_groq_api_key
GROQ_API_KEY_BACKUP = your_backup_groq_api_key (optional)
NODE_VERSION = 18
```

### 4. **Custom Domain (Optional)**
- Go to Site settings → Domain management
- Add custom domain: `idearank.netlify.app` (or your custom domain)
- Configure DNS if using custom domain

### 5. **Deploy**
- Netlify will automatically deploy when you push to your main branch
- Monitor deployment in the Netlify dashboard

## 🔧 Troubleshooting

### Common Issues:
1. **Functions not working**: Check function logs in Netlify dashboard
2. **CORS errors**: Functions include CORS headers
3. **API timeouts**: Netlify functions have 10-second timeout limit
4. **Environment variables**: Ensure they're set in Netlify dashboard

### Testing Locally:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Test functions locally
netlify dev
```

## 📊 Performance Optimization

### Netlify Features to Enable:
- **Asset optimization**: Enabled by default
- **Minification**: Enabled by default
- **Image optimization**: Consider using Netlify's image CDN
- **Edge functions**: For better performance (if needed)

### Monitoring:
- Use Netlify Analytics for performance metrics
- Set up uptime monitoring
- Monitor function execution times