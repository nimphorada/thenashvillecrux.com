# The Nashville Crux

Static website for **The Nashville Crux** climbing newsletter, ready for GitHub Pages hosting.

## File structure

```
/
├── index.html          ← Home page
├── newsletter.html     ← Newsletter archive page
├── resources.html      ← Resources page
├── subscribe.html      ← Subscribe page
├── styles.css          ← All styles
├── script.js           ← Interactivity (nav, subscribe form)
└── assets/             ← Your photos go here (see below)
```

## Adding your photos

The home page references these image paths. Add your own photos to an `assets/` folder:

| File path | Used for |
|-----------|----------|
| `assets/hero-climbing.jpg` | Large hero photo (indoor climbing wall) |
| `assets/collage-outdoor.jpg` | Stamp-style collage image |
| `assets/bouldering.jpg` | Right-column bouldering photo |
| `assets/community.jpg` | Bottom photo strip — community member |
| `assets/chalk-drawing.jpg` | Bottom photo strip — chalk/drawing image |

Images degrade gracefully if missing (gray placeholder), so the site works without them during development.

## Fonts

- **Chomsky** — loaded via jsDelivr CDN (open source blackletter, matches the Figma design)
- **Young Serif** — Google Fonts (section headings)
- **Inter** — Google Fonts (body text, nav)

If you have the actual font files, place them in an `assets/fonts/` folder and update the `@font-face` in `styles.css`.

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo (e.g. `nashville-crux`)
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Your site will be live at `https://<username>.github.io/nashville-crux/`

## Customizing the subscribe form

Since GitHub Pages is static, the subscribe button currently shows a confirmation message only. To wire up real email collection, replace the `subscribeBtn` handler in `script.js` with a call to:
- [Mailchimp embedded form](https://mailchimp.com/help/add-a-signup-form-to-your-website/)
- [Buttondown API](https://buttondown.email/features/api)
- [Formspree](https://formspree.io/)
