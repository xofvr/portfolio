# Farhan's Personal Website

My personal portfolio website built with Blazor WebAssembly. This site showcases my projects, skills, and experience as a software developer.

## 🌐 Live Site

Visit my website at: [website](https://xofvr.github.io/portfolio/)

## 💻 Tech Stack

- **Frontend**: Blazor WebAssembly (C#)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Containerisation**: Docker + nginx

## 🚀 Development

### Prerequisites

- .NET 8.0 SDK
- Docker & Docker Compose (optional, for containerized development)

### Running Locally

**Option 1: Using .NET CLI**

```bash
cd FarhanS.Portfolio/src/Web
dotnet run
```

Then open https://localhost:5001

**Option 2: Using Docker**

```bash
docker-compose up --build
```

Then open http://localhost:8080

### Building for Production

```bash
./build-for-pages.sh
```

This creates optimised files in `./publish/wwwroot/` ready for deployment.

## 🏗️ Project Structure

```
├── FarhanS.Portfolio/              # Main Blazor solution
│   ├── src/
│   │   ├── Core/                   # Business logic & models
│   │   ├── Infrastructure/         # Data access
│   │   └── Web/                    # Blazor WebAssembly app
│   └── tests/                      # Unit & integration tests
├── build-for-pages.sh              # Production build script
└── docker-compose.yml              # Local development setup
```

## 🚀 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch. The deployment is handled by GitHub Actions which builds the Blazor app and publishes it as static files.

---

## 📧 Contact

Feel free to reach out if you'd like to connect or discuss potential opportunities!

- **Email**: farhan.shakeel1404@gmail.com
- **LinkedIn**: [linkedin.com/in/m-shakeel014](https://www.linkedin.com/in/m-shakeel014/)
- **GitHub**: [github.com/xofvr](https://github.com/xofvr)
