# SportFX Website

A modern sports analytics website built with Astro and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Yarn package manager

### Installation
```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## 🌐 Deployment to Cloudflare Pages

### Automatic Deployment (Recommended)
1. Connect your GitHub repository to Cloudflare Pages
2. Set build settings:
   - **Build command**: `yarn build`
   - **Build output directory**: `dist`
   - **Node.js version**: `18`

### Manual Deployment
```bash
# Build the project
yarn build

# Deploy using Wrangler
yarn deploy
```

### Environment Variables
Make sure to set these in your Cloudflare Pages dashboard:
- `NODE_VERSION`: `18`

## 🔧 Configuration

### Astro Config
The project is configured for Cloudflare Pages with:
- Server-side rendering enabled
- Cloudflare adapter configured
- Tailwind CSS with Vite integration

### Wrangler Config
Located in `wrangler.json` with:
- Pages build output directory: `dist`
- KV namespace for sessions
- Node.js compatibility enabled

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── content/        # Markdown content (blog, store, work)
├── layouts/        # Page layouts
├── pages/          # Route pages
└── styles/         # Global styles and Tailwind CSS
```

## 🎨 Styling

- **Tailwind CSS 4.0**: Modern utility-first CSS framework
- **Custom Components**: Built with Astro components
- **Responsive Design**: Mobile-first approach

## 🚨 Troubleshooting

### Build Issues
- Ensure Node.js version is 18+
- Clear `node_modules` and reinstall: `rm -rf node_modules && yarn install`
- Check for lockfile conflicts: `rm yarn.lock && yarn install`

### Cloudflare Deployment Issues
- Verify `@astrojs/cloudflare` integration is configured
- Check build output directory matches `dist`
- Ensure Node.js version is set to 18 in Cloudflare Pages

### Video Issues
- Cloudflare Stream videos are configured for background display
- Check video UIDs and customer codes in component props
- Ensure proper iframe permissions and CORS settings

## 📝 License

Private project - All rights reserved.