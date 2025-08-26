#!/bin/bash
# Setup script to use Node.js 20 for this project
export PATH="/usr/local/opt/node@20/bin:$PATH"
echo "✅ Node.js 20 environment set up successfully"
echo "📦 Node version: $(node --version)"
echo "📦 NPM version: $(npm --version)"
echo ""
echo "You can now run:"
echo "  npm run dev     - Start development server"
echo "  npm run build   - Build for production"
echo "  npm run deploy-ssh - Deploy with SSH"
