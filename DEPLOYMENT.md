# Deployment Guide for GitHub Pages

This guide will help you deploy the Gabriel JM Event Management website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Node.js installed (for local testing)

## Steps to Deploy

### 1. Update Vite Configuration

The project is already configured for GitHub Pages deployment. The `vite.config.ts` file includes the necessary settings.

### 2. Create GitHub Repository

1. Go to GitHub and create a new repository named `gabrieljmevents.com` (or any name you prefer)
2. Initialize it as an empty repository (no README, .gitignore, or license)

### 3. Push Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Gabriel JM Event Management website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/gabrieljmevents.com.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"

### 5. Create GitHub Actions Workflow

Create a file `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 6. Deploy

Commit and push the workflow file:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

The website will automatically deploy! You can check the progress in the "Actions" tab of your repository.

### 7. Custom Domain Setup

To use your custom domain `gabrieljmevents.com`:

1. In your repository settings, go to Pages
2. Under "Custom domain", enter `gabrieljmevents.com`
3. Wait for DNS check to complete

#### DNS Configuration

Add these DNS records with your domain registrar:

**For apex domain (gabrieljmevents.com):**
- Type: A
- Name: @
- Value: 185.199.108.153
- Value: 185.199.109.153
- Value: 185.199.110.153
- Value: 185.199.111.153

**For www subdomain:**
- Type: CNAME
- Name: www
- Value: YOUR_USERNAME.github.io

Replace `YOUR_USERNAME` with your actual GitHub username.

## Alternative Free Hosting Options

### Netlify
1. Sign up at netlify.com
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Vercel
1. Sign up at vercel.com
2. Import your GitHub repository
3. Vercel will auto-detect Vite settings
4. Deploy!

### Cloudflare Pages
1. Sign up at pages.cloudflare.com
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

## Local Testing

Before deploying, test locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

### Images not loading
- Ensure all image imports use the correct paths
- Check that images are in `src/assets/` directory
- Verify image file names match the imports

### 404 on page refresh
- GitHub Pages doesn't support client-side routing by default
- For single-page apps, you may need to add a 404.html that redirects to index.html

### Build fails
- Check that all dependencies are listed in package.json
- Ensure Node.js version is compatible (v18 or higher recommended)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## Support

For issues with deployment, check:
- GitHub Actions logs in your repository
- GitHub Pages status at https://www.githubstatus.com/
- Vite documentation at https://vitejs.dev/guide/static-deploy.html

---

**Need help?** Contact Gabriel JM Event Management at +91 95661 44155
