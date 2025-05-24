# Portfolio Website - GitHub Pages Deployment

This repository contains a Blazor WebAssembly portfolio website with automated GitHub Pages deployment.

## 🚀 Deployment Process

### Automatic Deployment
- **Main Branch**: Automatically deploys to GitHub Pages on every push
- **Pull Requests**: Builds and tests without deploying
- **Manual**: Can be triggered manually via GitHub Actions

### 🔧 Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

2. **Repository Settings**:
   - Ensure the repository name matches the base href in `index.github.html` (`/portfolio/`)
   - If you want to use a custom domain, update the base href accordingly

3. **First Deployment**:
   - Push to the main branch
   - GitHub Actions will automatically build and deploy
   - Your site will be available at: `https://xofvr.github.io/portfolio/`

### 🛠️ Local Development

#### Prerequisites
- .NET 8.0 SDK
- Docker & Docker Compose
- Git

#### Option 1: Docker Development (Recommended)
```bash
# Build and run with Docker Compose
docker-compose up --build

# Your app will be available at http://localhost:8080
# nginx will handle routing properly for the SPA
```

#### Option 2: .NET Development Server
```bash
cd FarhanS.Portfolio/src/Web
dotnet run

# Development server at https://localhost:5001
```

#### Option 3: Build for GitHub Pages Testing
```bash
# Quick build for GitHub Pages
./build-for-pages.sh

# The published files will be in ./publish/wwwroot/
# Note: Use Docker or .NET dev server for local testing
# as static file servers don't handle SPA routing properly
```

### 📁 Project Structure
```
├── .github/
│   └── workflows/
│       └── deploy-to-pages.yml     # GitHub Actions workflow
├── FarhanS.Portfolio/              # Main Blazor solution
│   ├── src/
│   │   ├── Core/                   # Core business logic
│   │   ├── Infrastructure/         # Data access layer
│   │   └── Web/                    # Blazor WebAssembly project
│   │       ├── Dockerfile          # Multi-stage Docker build
│   │       └── nginx.conf          # nginx config for SPA routing
│   └── tests/                      # Unit and integration tests
├── build-for-pages.sh              # Local build script for GitHub Pages
├── docker-compose.yml              # Docker setup (for local dev)
└── README.md                       # This file
```

### 🐳 Docker vs GitHub Pages

**Docker (Local Development)**:
- ✅ Perfect for development with hot reload
- ✅ nginx handles SPA routing correctly
- ✅ Production-like environment
- ✅ Easy to share with team

**GitHub Pages (Production)**:
- ✅ Free hosting
- ✅ Automatic SSL/HTTPS
- ✅ CDN distribution
- ✅ Custom domain support
- ⚠️ Static hosting (limited backend features)

### 🚀 Deployment Options

#### For Development
```bash
docker-compose up --build
```

#### For Production (GitHub Pages)
```bash
git push origin main
# Automatic deployment via GitHub Actions
```

### 🔄 CI/CD Pipeline

The GitHub Actions workflow (`deploy-to-pages.yml`) performs:

1. **Build Stage**:
   - Checkout code
   - Setup .NET 8.0
   - Restore dependencies
   - Build solution
   - Run tests
   - Publish for production

2. **Deploy Stage** (main branch only):
   - Configure for GitHub Pages
   - Update base href
   - Add .nojekyll file
   - Deploy to GitHub Pages

### 🌐 Live Website

Once deployed, your portfolio will be available at:
**https://xofvr.github.io/portfolio/**

### 🔧 Customization

#### Changing the Repository Name
If you rename the repository, update:
1. `index.github.html` - Change the base href from `/portfolio/` to `/your-new-name/`
2. `deploy-to-pages.yml` - Update the sed command if using the alternate approach
3. This README - Update the live website URL

#### Custom Domain
If using a custom domain:
1. Add a `CNAME` file to `wwwroot/`
2. Update the base href to `/`
3. Configure DNS settings in your domain provider

### 🐛 Troubleshooting

#### Common Issues:
- **404 on assets**: Check the base href in index.html
- **Build failures**: Ensure all tests pass locally first
- **Deploy failures**: Check repository permissions for GitHub Pages

#### Debugging:
- Check GitHub Actions logs in the "Actions" tab
- Test the build locally using `./build-for-pages.sh`
- Verify the published files in `./publish/wwwroot/`

### 📝 Best Practices

- ✅ All changes go through the main branch
- ✅ Tests must pass before deployment
- ✅ Use semantic versioning for releases
- ✅ Review pull requests before merging
- ✅ Keep dependencies updated

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure tests pass
5. Submit a pull request

The automated pipeline will build and test your changes automatically.
