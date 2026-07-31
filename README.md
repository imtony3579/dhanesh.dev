# Dhaneshkumar Prajapati - Portfolio Website

This is a personal portfolio website built with React and Vite, showcasing my experience as a Software Developer and Machine Learning Engineer.

## ⚡ Quick Start

```bash
# Clone and setup
git clone <repository-url>
cd dhanesh.dev
npm install

# Start development server with Vite
npm run dev
# 🚀 Server will start at http://localhost:3000
```

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

## 🏃‍♂️ Running the Development Server

### Start Development Server with Vite
```bash
# Start the Vite development server
npm run dev     # Primary command - starts Vite dev server at http://localhost:3000
npm start       # Alternative command (also uses Vite)
```

The Vite development server provides:
- ⚡ **Hot Module Replacement (HMR)** - Instant updates without page reload
- 🚀 **Fast startup** - Server starts in milliseconds
- 🔥 **Optimized bundling** - ES modules for faster development
- 🛠️ **Built-in TypeScript support** - No additional configuration needed

### Other Available Scripts

### Production
```bash
npm run build   # Build for production to `dist/` folder
npm run preview # Preview production build locally
```

### Deployment
```bash
npm run deploy        # Deploy to GitHub Pages (standard)
npm run deploy-ssh    # Deploy to GitHub Pages with SSH authentication
npm run clean         # Clean build directory
```

> **Tip:** Use `[deploy]` in your commit message to trigger automatic deployment via GitHub Actions instead of running these manually.

## 🚀 Deployment

The project is configured to deploy to GitHub Pages.

### Automatic Deployment (GitHub Actions)

A CI/CD workflow (`.github/workflows/deploy.yml`) automatically builds and deploys to the `gh-pages` branch when you push to `main` — but **only if your commit message contains `[deploy]`**.

```bash
git commit -m "your message [deploy]"
git push origin main
```

Without `[deploy]` in the commit message, the push goes through normally but the deployment is skipped.

- **Workflow file**: `.github/workflows/deploy.yml`
- **Trigger**: Push to `main` with `[deploy]` in the commit message
- **Build output**: `dist/` folder
- **Deploy branch**: `gh-pages`

### Manual Deployment

```bash
npm run deploy        # Deploy to GitHub Pages (standard)
npm run deploy-ssh    # Deploy using SSH authentication
npm run clean         # Clean build directory
```

- **Build output**: `dist/` folder (Vite default)
- **Deploy branch**: `gh-pages`
- **SSH authentication**: Uses `~/.ssh/id_ed25519` key

## 🔧 Vite Migration & Benefits

This project has been migrated from Create React App to **Vite** for superior performance:

### Why Vite?
- ⚡ **Lightning-fast dev server** - Starts in milliseconds vs seconds
- 🚀 **Instant Hot Module Replacement** - See changes immediately
- � **Optimized builds** - Smaller bundle sizes with Rollup
- 🛠️ **Better developer experience** - Native ES modules support
- 🔥 **No bundling in development** - Serves modules directly to browser

### Development Server Features
- **Port**: Configured to run on `http://localhost:3000`
- **Auto-reload**: Browser automatically opens on server start
- **HMR**: Preserves component state during code changes
- **Error overlay**: Clear error messages directly in browser

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
