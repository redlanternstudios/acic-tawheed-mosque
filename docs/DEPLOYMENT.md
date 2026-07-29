# Deployment

## Vercel

Import `redlanternstudios/acic-tawheed-mosque` into the RedLantern Studios Vercel team.

Recommended settings:

- Framework: Next.js
- Production branch: `main`
- Install command: `npm install`
- Build command: `npm run build`
- Output: Next.js default
- Node.js: current Vercel-supported LTS

## Required before production launch

- Add approved hero and logo files to `public/`
- Configure official domain
- Configure Supabase project and environment variables
- Add administrator authentication and RLS
- Verify mosque phone, email, prayer calculation method, Jumu’ah schedule, donation accounts, leadership, board, social channels, parking, and accessibility information
- Complete board and religious review

The current repository is safe for a preview deployment but not yet approved for public production use.
