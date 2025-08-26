# Dhaneshkumar Prajapati - Portfolio Website

This is a personal portfolio website built with React and Vite, showcasing my experience as a Software Developer and Machine Learning Engineer.

## 🚀 Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Framer Motion** - Smooth animations and interactions
- **CSS3** - Custom styling with modern CSS features

## 📋 Prerequisites

- **Node.js 20+** (Required for Vite)
- **npm 10+**

## 🛠️ Setup Instructions

### 1. Node.js Setup
This project requires Node.js 20 or higher. If you have an older version:

```bash
# Install Node.js 20 via Homebrew (macOS)
brew install node@20

# Add to your PATH
echo 'export PATH="/usr/local/opt/node@20/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### 2. Project Setup
```bash
# Clone the repository
git clone <repository-url>
cd dhanesh.dev

# Set up Node.js 20 environment (if needed)
source setup-node.sh

# Install dependencies
npm install
```

## 🏃‍♂️ Available Scripts

### Development
```bash
npm run dev     # Start development server at http://localhost:3000
npm start       # Alternative to npm run dev
```

### Production
```bash
npm run build   # Build for production to `dist/` folder
npm run preview # Preview production build locally
```

### Deployment
```bash
npm run deploy-ssh    # Deploy to GitHub Pages with SSH authentication
npm run deploy        # Deploy to GitHub Pages (standard)
npm run clean         # Clean build directory
```

## 🚀 Deployment

The project is configured to deploy to GitHub Pages. The `deploy-ssh` script ensures secure deployment using SSH keys:

- **Build output**: `dist/` folder (Vite default)
- **Deploy branch**: `gh-pages`
- **SSH authentication**: Uses `~/.ssh/id_ed25519` key

## 🔧 Migration Notes

This project has been migrated from Create React App to Vite for:
- ⚡ Faster development server
- 🚀 Quicker builds
- 📦 Smaller bundle sizes
- 🛠️ Better developer experience

### Key Changes:
- Entry point: `src/index.js` → `src/main.jsx`
- Build output: `build/` → `dist/`
- All components converted to `.jsx` extensions
- Vite configuration replaces CRACO setup

## 📁 Project Structure

```
src/
├── main.jsx              # Application entry point
├── App.jsx               # Main application component
├── components/           # Reusable React components
│   ├── CodeSection.jsx
│   ├── ExperienceCard.jsx
│   ├── Footer.jsx
│   └── ...
└── styles/              # CSS modules
    ├── variables.css
    ├── base.css
    └── ...
```

## 🌟 Features

- **Responsive Design** - Works on all devices
- **Smooth Animations** - Powered by Framer Motion
- **Code-like Interface** - Unique developer-themed design
- **Performance Optimized** - Fast loading and smooth interactions
- **SEO Friendly** - Proper meta tags and structure

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
