# The Nashville Crux — Static Site

A static website for The Nashville Crux monthly climbing newsletter,
designed for hosting on **GitHub Pages** with a custom domain connected
through Squarespace DNS.

---

## 📁 Project Structure

```
/
├── index.html          ← Home page
├── newsletter.html     ← Newsletter page
├── CNAME               ← Your custom domain (add this — see setup below)
├── css/
│   └── styles.css      ← Shared stylesheet (all pages)
├── images/
│   └── background.jpg  ← Full-screen hero background (add your photo here)
└── README.md           ← This file
```

---

## 🚀 GitHub Pages Setup (Step-by-Step)

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create a free account).
2. Click **New repository** (the `+` button in the top-right).
3. Name it anything, e.g. `nashville-crux` or `nashville-crux-site`.
4. Set visibility to **Public** (required for free GitHub Pages).
5. Leave "Initialize with README" **unchecked** — you already have files.
6. Click **Create repository**.

### Step 2 — Upload Your Files

**Option A — GitHub web interface (easiest):**
1. In your new repo, click **uploading an existing file**.
2. Drag and drop all your project files and folders.
   - Make sure the folder structure is preserved:
     `css/styles.css` and `images/background.jpg`
3. Scroll down, add a commit message like `Initial site upload`, click **Commit changes**.

**Option B — Git CLI:**
```bash
git init
git add .
git commit -m "Initial site upload"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. In your repo, go to **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment**, set:
   - Source: **Deploy from a branch**
   - Branch: `main` / `/ (root)`
3. Click **Save**.
4. After ~60 seconds, your site will be live at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`

---

## 🌐 Custom Domain Setup

### Step 4 — Add Your Domain in GitHub Pages

1. In **Settings → Pages**, find the **Custom domain** field.
2. Enter your domain (e.g. `www.thenashvillecrux.com`) and click **Save**.
3. GitHub will create a DNS check — it will show a green checkmark once DNS is configured.
4. Check **Enforce HTTPS** once the domain is verified (takes up to 24h).

### Step 5 — Add a CNAME File to Your Repo

Create a file named exactly `CNAME` (no extension) in the **root** of your repo.
Its entire contents should be just your domain, one line, no extra spaces:

```
www.thenashvillecrux.com
```

> If you're using an apex/naked domain (no `www`), use that instead, e.g. `thenashvillecrux.com`.

### Step 6 — Configure DNS in Squarespace

In your **Squarespace Domains** panel, go to your domain → **DNS Settings**.

**Add these 4 A Records** (for apex/naked domain, e.g. `thenashvillecrux.com`):

| Type | Host | Value            | TTL  |
|------|------|------------------|------|
| A    | @    | 185.199.108.153  | 3600 |
| A    | @    | 185.199.109.153  | 3600 |
| A    | @    | 185.199.110.153  | 3600 |
| A    | @    | 185.199.111.153  | 3600 |

**Add this CNAME Record** (for `www` subdomain):

| Type  | Host | Value                          | TTL  |
|-------|------|--------------------------------|------|
| CNAME | www  | YOUR_USERNAME.github.io        | 3600 |

> Replace `YOUR_USERNAME` with your actual GitHub username.
> Do **not** include the repo name in the CNAME value.

DNS propagation takes anywhere from a few minutes to 48 hours.
Once live, both `thenashvillecrux.com` and `www.thenashvillecrux.com`
will serve your GitHub Pages site.

---

## ✏️ How to Add a New Page

1. **Copy** `newsletter.html` and rename it (e.g. `events.html`).
2. Update the `<title>` tag and `<meta name="description">` for the new page.
3. In the `<nav>` block, move the `is-active` class to the new page's link,
   and add a new `<li>` for it.
4. Update the nav on **all other pages** to include the new link too.
5. Write your new content between the nav and footer.
6. That's it — `styles.css` and the nav/footer pattern handle the rest.

---

## 🔡 Fonts

- **Darumadrop One** — logo/site name — loaded via Google Fonts
- **News Cycle** — body text and navigation — loaded via Google Fonts
- **Datatype** — accent labels and callouts — self-hosted
  - Place your font files at `fonts/Datatype.woff2` and `fonts/Datatype.woff`
  - Then uncomment the `@font-face` block near the top of `css/styles.css`
  - Until then, a monospace fallback is used

---

## 🔗 Substack Integration

All Substack buttons currently use `href="#"` as a placeholder.
To activate them, do a find-and-replace across both HTML files:

- Find: `href="#"`  
- Replace: `href="https://YOUR_SUBSTACK_URL.substack.com"`

---

## 🖼️ Background Image

Place your hero photo at `images/background.jpg`.

Recommended specs for best performance:
- **Size:** 2400 × 1600 px (or similar 3:2 landscape)
- **File size:** Under 400 KB (compress with [Squoosh](https://squoosh.app))
- **Subject:** Something that evokes Nashville climbing — rock walls, gym,
  chalk hands, Tennessee crags, etc.

---

*Built with plain HTML, CSS, and no dependencies.*
