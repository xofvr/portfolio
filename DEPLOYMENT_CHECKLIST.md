# 🚀 GitHub Pages Deployment Checklist

## Pre-Deployment Setup

### 1. Repository Configuration
- [ ] Repository name is `portfolio` (matches base href in `index.github.html`)
- [ ] Repository is public (required for free GitHub Pages)
- [ ] All code is pushed to the `main` branch

### 2. GitHub Pages Settings
- [ ] Go to repository **Settings** → **Pages**
- [ ] Set **Source** to "GitHub Actions"
- [ ] Save settings

### 3. Verify Files
- [ ] `.github/workflows/deploy-to-pages.yml` exists
- [ ] `FarhanS.Portfolio/src/Web/wwwroot/index.github.html` has correct base href
- [ ] Build script `build-for-pages.sh` is executable

## Deployment Process

### First Deployment
```bash
# 1. Test build locally
./build-for-pages.sh

# 2. Commit all changes
git add .
git commit -m "Add GitHub Pages deployment"

# 3. Push to main branch
git push origin main

# 4. Check GitHub Actions
# Go to your repo → Actions tab
# Watch the "Deploy Blazor to GitHub Pages" workflow
```

### Expected Results
- [ ] GitHub Actions workflow completes successfully
- [ ] Site is available at: `https://xofvr.github.io/portfolio/`
- [ ] All assets load correctly (CSS, JS, images)
- [ ] Navigation works properly

## Troubleshooting

### Common Issues

**❌ 404 Not Found**
- Check base href in `index.github.html` matches repository name
- Verify GitHub Pages is enabled and source is set to "GitHub Actions"

**❌ Assets Not Loading**
- Ensure all asset paths are relative (no leading `/`)
- Check browser console for failed requests

**❌ Workflow Fails**
- Check Actions tab for error details
- Ensure .NET 8.0 SDK is specified in workflow
- Verify all file paths in workflow are correct

**❌ White Screen/Loading Forever**
- Check browser console for JavaScript errors
- Verify Blazor WebAssembly files are loading
- Check that `_framework` folder is deployed

### Debug Steps
1. **Local Docker Test**: `docker-compose up --build`
2. **Local Build Test**: `./build-for-pages.sh`
3. **Check Workflow Logs**: GitHub repo → Actions → Latest workflow run
4. **Browser DevTools**: F12 → Console/Network tabs

## Production Checklist

### Performance
- [ ] Enable gzip compression (handled by GitHub Pages)
- [ ] Optimize images and assets
- [ ] Remove development dependencies

### SEO & Accessibility
- [ ] Update meta descriptions
- [ ] Add proper favicon
- [ ] Test with screen readers
- [ ] Validate HTML

### Security
- [ ] Update Content Security Policy
- [ ] Remove sensitive information
- [ ] Enable HTTPS (automatic with GitHub Pages)

## Next Steps

### Custom Domain (Optional)
1. Add `CNAME` file to `wwwroot/` with your domain
2. Update base href to `/` in `index.github.html`
3. Configure DNS with your domain provider

### Advanced Features
- [ ] Add Google Analytics
- [ ] Set up contact form (using external service)
- [ ] Add blog functionality
- [ ] Implement PWA features

---

## 🎉 Success!

Once deployed, your portfolio will be live at:
**https://xofvr.github.io/portfolio/**

Share it with the world! 🌍
