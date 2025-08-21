#!/bin/bash
# Development script for Studio Bot Website
# Usage: ./dev.sh [simple|modern]

cd dev-tools

case "$1" in
  "simple")
    echo "🚀 Starting development mode (Simple SCSS)..."
    npm run dev:simple
    ;;
  "modern")
    echo "🚀 Starting development mode (Modern SCSS)..."
    npm run dev:modern
    ;;
  *)
    echo "🚀 Starting development mode (Default Simple SCSS)..."
    npm run dev:simple
    ;;
esac
