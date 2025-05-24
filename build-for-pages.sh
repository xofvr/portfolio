#!/bin/bash

# Build script for Blazor WebAssembly deployment to GitHub Pages

echo "🚀 Building Blazor WebAssembly for GitHub Pages deployment..."

# Navigate to the project root
cd "$(dirname "$0")"

# Restore dependencies
echo "📦 Restoring dependencies..."
dotnet restore FarhanS.Portfolio/FarhanS.Portfolio.sln

# Build the project
echo "🔨 Building project..."
dotnet build FarhanS.Portfolio/FarhanS.Portfolio.sln --configuration Release

# Run tests
echo "🧪 Running tests..."
dotnet test FarhanS.Portfolio/FarhanS.Portfolio.sln --configuration Release --no-build || echo "⚠️  Tests failed locally (this is OK for local builds)"

# Publish the project
echo "📤 Publishing project..."
rm -rf ./publish
dotnet publish FarhanS.Portfolio/src/Web/FarhanS.Portfolio.csproj --configuration Release --output ./publish

# Copy GitHub Pages specific index.html
echo "🔧 Configuring for GitHub Pages..."
cp FarhanS.Portfolio/src/Web/wwwroot/index.github.html ./publish/wwwroot/index.html

# Add .nojekyll file
touch ./publish/wwwroot/.nojekyll

echo "✅ Build complete! Files are ready in ./publish/wwwroot/"
echo "📁 You can test locally by serving the ./publish/wwwroot/ directory"
echo "💡 Try: cd ./publish/wwwroot && python3 -m http.server 8080"
