# Cloudflare hosting

Production hostname: `https://docs.releaseloop.com`. Worker: `releaseloop-docs`.

Cloudflare Workers Builds should follow `main`, use Node 24, build with `npm run build`, and deploy with `npm run deploy:cloudflare`.

The Netlify project and configuration are retained for rollback. Pause automatic Netlify builds after production verification. Cloudflare owns the custom domain and HTTPS certificate after cutover.
