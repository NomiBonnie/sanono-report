#!/bin/bash
# deploy.sh — Deploy sanono-report to both Cloudflare Pages and GitHub Pages
# Usage: ./deploy.sh [cf|gh|both]  (default: both)
set -euo pipefail

cd "$(dirname "$0")"
TARGET="${1:-both}"

deploy_cf() {
  echo "🔶 Building for Cloudflare Pages (base=/)..."
  CF_PAGES=1 npm run build
  
  # Verify base path is correct
  if grep -q 'src="/sanono-report/' dist/index.html; then
    echo "❌ ERROR: Cloudflare build has wrong base path! Aborting."
    exit 1
  fi
  echo "  ✅ Base path verified: /"
  
  TOKEN=$(python3 -c "import json; print(json.load(open('$HOME/.config/cloudflare/config.json'))['api_token'])")
  echo "🚀 Deploying to Cloudflare..."
  CLOUDFLARE_API_TOKEN="$TOKEN" npx wrangler pages deploy dist --project-name=sanono-report
  echo "✅ Cloudflare deployed!"
}

deploy_gh() {
  echo "🔷 Building for GitHub Pages (base=/sanono-report/)..."
  npm run build
  
  # Verify base path is correct
  if grep -q 'src="/assets/' dist/index.html; then
    echo "❌ ERROR: GitHub Pages build has wrong base path! Aborting."
    exit 1
  fi
  echo "  ✅ Base path verified: /sanono-report/"
  
  echo "🚀 Pushing to GitHub..."
  git add -A
  git diff --cached --quiet && echo "  No changes to commit" || {
    git commit -m "deploy: update site"
    git pull --rebase origin main
    git push origin main
  }
  echo "✅ GitHub Pages deployed (Actions will build)!"
}

case "$TARGET" in
  cf)   deploy_cf ;;
  gh)   deploy_gh ;;
  both)
    deploy_cf
    echo ""
    deploy_gh
    ;;
  *)
    echo "Usage: ./deploy.sh [cf|gh|both]"
    exit 1
    ;;
esac

echo ""
echo "🎉 Done! Check:"
echo "  Cloudflare: https://report.sanono.xyz"
echo "  GitHub:     https://nomibonnie.github.io/sanono-report/"
