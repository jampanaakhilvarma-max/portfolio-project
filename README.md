# Akhil V - Portfolio with AI Chatbot

A modern React portfolio website featuring an AI-powered chatbot integration using n8n. Built with TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **AI Chatbot Integration**: Powered by n8n with custom webhook
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Tech Stack**: React 18, TypeScript, Vite
- **Performance Optimized**: Code splitting and lazy loading
- **SEO Ready**: Meta tags and social media optimization

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Chat Integration**: n8n Webhook

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd akhil-portfolio-chatbot

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect the Vite configuration
5. Deploy!

### Environment Variables

No environment variables are required for this deployment. The n8n webhook URL is hardcoded in the application.

## 📁 Project Structure

```
src/
├── components/
│   ├── ChatbotPage.tsx      # Main chatbot page
│   ├── N8nChatWidget.tsx    # Chat widget component
│   ├── PortfolioPage.tsx    # Portfolio page
│   ├── HeroSection.tsx      # Hero section
│   ├── FlagshipProducts.tsx # Products showcase
│   └── SideProjects.tsx     # Side projects
├── App.tsx                  # Main app component
├── main.tsx                 # Entry point
└── index.css               # Global styles
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🔧 Configuration

### Vite Configuration
- Optimized for production builds
- Code splitting enabled
- Terser minification
- Manual chunk splitting for better caching

### Vercel Configuration
- Automatic framework detection
- Optimized headers for security and performance
- SPA routing support
- Asset caching configuration

## 📊 Performance

- **Bundle Size**: ~200KB (gzipped)
- **First Contentful Paint**: < 1.5s
- **Lighthouse Score**: 95+ across all metrics

## 🔒 Security

- Content Security Policy headers
- XSS Protection enabled
- Frame options configured
- Secure content type headers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 📞 Contact

For questions about this portfolio, reach out through the chatbot or contact Akhil V directly.

---

**Built with ❤️ using React, TypeScript, and Vite** 