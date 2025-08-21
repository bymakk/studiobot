#!/bin/bash
# Build script for Studio Bot Website
# Usage: ./build.sh [simple|modern|expanded]

cd dev-tools

case "$1" in
  "simple")
    echo "🔨 Building SCSS (Simple version)..."
    npm run build:simple
    ;;
  "modern")
    echo "🔨 Building SCSS (Modern version)..."
    npm run build:modern
    ;;
  "expanded")
    echo "🔨 Building SCSS (Expanded version)..."
    npm run build:expanded
    ;;
  *)
    echo "🔨 Building SCSS (Default compressed)..."
    npm run build:simple
    ;;
esac

echo "✅ Build complete! CSS file updated."
