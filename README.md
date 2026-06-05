# Life Is A Life Benefit Website

React/Vite landing page for the "A life is a life, no matter how small" benefit concept supporting Hope House Colorado.

## 🚨 IMPORTANT: Vercel Deployment Issue (CHECK THIS FIRST!)

**If Vercel deployments are blocked with "Deployment Blocked" errors:**

**PROBLEM**: Vercel blocks deployments when git commit author doesn't match the repository owner account.

**SYMPTOMS**:
- Red "Deployment Blocked" status in Vercel dashboard
- Error: "iccredman is not a member of your team"
- Error: "Hobby Plan does not support collaboration"

**QUICK CHECK**:
```bash
git log --format=fuller -1
# Should show: Author: mrmccloudfox <mrmccloudfox@users.noreply.github.com>
# NOT: Author: Matt McClain <...iccredman...> or Author: iccredman <...>
```

**QUICK FIX**:
```bash
# Set correct git author for this repo
git config user.name "mrmccloudfox"
git config user.email "mrmccloudfox@users.noreply.github.com"

# Reset and recommit with correct author
git reset --soft HEAD~1
git commit -m "Your commit message"
git push origin main --force
```

**ROOT CAUSE**: This happens when commits are made from `iccredman` account but repository is owned by `mrmccloudfox`. Vercel sees this as unauthorized collaboration.

## Local Development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

The local Express/Vite server runs on `http://localhost:3000` by default. Use `PORT=3001 npm run dev` if port 3000 is busy.

## Production Preview

```bash
npm run build
PORT=3001 npm run start
```

## Vercel Deployment

**Live URL**: https://alifeisalife.vercel.app/

This repo includes `vercel.json` and serverless functions under `api/`.

Vercel settings:

- Framework preset: `Vite`
- Build command: `npm run build:client`
- Output directory: `dist`
- Node version: `20.x`

Optional environment variable:

- `GEMINI_API_KEY`: enables Gemini-generated support-board responses. Without it, the app returns a local fallback response.

## Source Links

- What happened: https://x.com/libsoftiktok/status/2056919525107355654?s=20
- Why it is personal: https://x.com/libsoftiktok/status/2056937291919041009?s=20
- Poem reading: https://x.com/libsoftiktok/status/2056927043099459792?s=20
- Rocky Mountain Voice article: https://rockymountainvoice.com/2026/05/21/jeffco-student-barred-from-reading-pro-life-poem-after-school-calls-it-too-politically-charged/
- Hope House Colorado: https://hopehousecolorado.org/
