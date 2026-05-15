# Deployment Guide

Step-by-step: get your local code → GitHub → DigitalOcean App Platform.

---

## Part 1: Push to GitHub (from VS Code)

### Prerequisites
- A GitHub account
- Git installed locally (`git --version` to check; if missing, download from [git-scm.com](https://git-scm.com))
- VS Code with the **GitHub Pull Requests and Issues** extension (optional but recommended) — or just use the built-in Source Control panel

### Step 1.1 — Create the GitHub repo

1. Go to **github.com** → click **+** in the top-right → **New repository**
2. Repository name: `bookzync-website`
3. **Private** (unless you want it public)
4. **Do NOT** check "Add a README", "Add .gitignore", or "Choose a license" — we already have these locally
5. Click **Create repository**
6. Leave the next page open — you'll need the URL it shows you

### Step 1.2 — Initialize Git locally (VS Code terminal)

Open the project in VS Code. Open the terminal: **View → Terminal** (or `` Ctrl+` ``).

```bash
# Confirm you're in the project root
pwd
# Should output something like: /Users/you/projects/bookzync-website

# Initialize git
git init

# Set your name and email if you haven't before
git config user.name "Your Name"
git config user.email "you@example.com"

# Stage everything (respects .gitignore)
git add .

# First commit
git commit -m "Initial commit"

# Set the branch name to main (modern default)
git branch -M main

# Connect to your GitHub repo — paste the URL GitHub showed you
git remote add origin https://github.com/YOUR_USERNAME/bookzync-website.git

# Push
git push -u origin main
```

> **Authentication**: when you push, GitHub will ask you to authenticate. The easiest path is the **GitHub CLI** (`brew install gh` or [download here](https://cli.github.com/)) — run `gh auth login` once and it handles everything. Or use a **Personal Access Token** as the password when prompted.

### Step 1.3 — Verify

Refresh your GitHub repo page. You should see all your files.

### Daily workflow after this

In VS Code's **Source Control** panel (left sidebar, the branch icon):
1. See files you've changed
2. Stage them with the **+** icon (or "Stage All Changes")
3. Type a commit message
4. Click **Commit**
5. Click **Sync Changes** (or **Push**)

You almost never need to touch the terminal again for normal git work.

---

## Part 2: Deploy to DigitalOcean App Platform

App Platform is DigitalOcean's managed hosting for web apps. It builds and deploys directly from GitHub — push to `main`, the site rebuilds automatically.

### Step 2.1 — Sign in / create an account

Go to [cloud.digitalocean.com](https://cloud.digitalocean.com). New users typically get $200 in credits for 60 days.

### Step 2.2 — Create the app

1. Top-right → **Create** → **App Platform**
2. Source: **GitHub** → click **Authorize DigitalOcean** if it's your first time
3. Pick your `bookzync-website` repo and branch `main`
4. **Autodeploy**: check the box (so every push to `main` redeploys)
5. Click **Next**

### Step 2.3 — Configure the app

App Platform auto-detects Next.js and proposes settings. Confirm:

| Setting | Value |
|---|---|
| **Type** | Web Service |
| **Build Command** | `npm run build` |
| **Run Command** | `npm start` |
| **HTTP Port** | `3000` |
| **HTTP Routes** | `/` |

Click **Edit** under your service if you need to change anything. The defaults should work.

### Step 2.4 — Pick instance size

- **Basic XXS** ($5/mo, 512 MB RAM) — fine for the marketing site, low traffic
- **Basic XS** ($12/mo, 1 GB RAM) — recommended if you expect any real traffic
- You can scale up later without redeploying

### Step 2.5 — Environment variables (optional, for now)

Skip this section unless you've added API integrations. The marketing site doesn't need any.

When you wire up the chatbot to a real LLM later:
- Click **Edit** under "Environment Variables"
- Add `ANTHROPIC_API_KEY` or `OPENAI_API_KEY` as a **secret** type

### Step 2.6 — Pick a region

Closer to your users = faster. For US-focused traffic, **NYC** or **SFO** are good. For India, **BLR** (Bangalore).

### Step 2.7 — Name and create

- App name: `bookzync` (this becomes part of the temporary URL: `bookzync-xxxxx.ondigitalocean.app`)
- Click **Create Resources**

DigitalOcean now clones your repo, runs `npm install`, runs `npm run build`, and starts the service. **First build takes 3–5 minutes.**

Watch the build log live. When it says **"Your app is live"**, click the URL → your site is up.

### Step 2.8 — Custom domain

When you're ready to use `bookzync.com`:

1. App Platform → your app → **Settings** → **Domains**
2. **Add Domain** → enter `bookzync.com` and `www.bookzync.com`
3. DigitalOcean shows you DNS records to add — point them at your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.)
4. SSL is automatic — Let's Encrypt cert provisions in a few minutes

After the custom domain is live, update these two files and commit:

**`app/sitemap.ts`** and **`app/robots.ts`**:
```ts
const BASE_URL = "https://bookzync.com";
```
They're already set to this — confirm it matches your real domain.

---

## Part 3: Future updates

After both parts above are done, your workflow is:

1. Edit code locally in VS Code
2. Commit + push from the Source Control panel
3. DigitalOcean auto-detects the push, rebuilds, and deploys
4. New version is live in 2–4 minutes

No CLI, no FTP, no SSH. Just `git push`.

---

## Troubleshooting

### Build fails on DigitalOcean with "node version" error

App Platform defaults to a recent Node version, but if it picks something too old, add this to `package.json`:

```json
"engines": {
  "node": ">=20"
}
```

Push and rebuild.

### Build fails with "type error" or "tsc not found"

Local typecheck passes (`npx tsc --noEmit`) before each commit. If DO complains, your local and remote `package-lock.json` may have drifted. From the repo root:

```bash
rm -rf node_modules package-lock.json
npm install
git add package-lock.json
git commit -m "Refresh lockfile"
git push
```

### Site loads but images are broken

Make sure `public/` is committed to git (it should be — `.gitignore` doesn't exclude it). Check the GitHub repo directly to confirm `public/demos/*.png` exist.

### Site loads but pages show 404

If any specific page 404s but others work, the route folder may not have committed (Git ignores empty folders). Confirm in GitHub that `app/{the-broken-route}/page.tsx` exists.

### Site loads slow on first request

App Platform on Basic XXS goes idle after inactivity and takes 2–5 seconds to wake. Upgrade to Basic XS (always warm) or upper tiers for better cold-start performance.

---

## Cost summary

| Item | Cost |
|---|---|
| DigitalOcean App Platform (Basic XXS) | $5/mo |
| Custom domain (you bought it) | $10–15/yr |
| SSL certificate | Free (Let's Encrypt, auto-renewed) |
| GitHub repo | Free (public or private) |
| **Total to launch** | **~$5/mo + domain** |
