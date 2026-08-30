# Yaserabulaban.github.io

Personal portfolio — static site, no build step, no dependencies.
Live at **https://Yaserabulaban.github.io**

## Structure

```
.
├── index.html                  # everything: hero, selected work, full project index,
│                               # experience, skills, credentials, contact
├── 404.html
├── .nojekyll                   # tells GitHub Pages to serve files as-is
├── work/
│   ├── parkviewrt.html         # FYP — vision-based parking occupancy
│   ├── fifa-sentiment.html     # NLP — 20,050 Steam reviews
│   ├── sti-dashboard.html      # D3 — six linked views
│   ├── cartly.html             # full stack — PHP marketplace
│   ├── fraud-detection.html    # data mining — explainable fraud detection
│   └── fer-study.html          # computer vision — preprocessing ablation
└── assets/
    ├── css/site.css            # single stylesheet, CSS custom properties
    ├── js/site.js              # theme toggle only (~40 lines)
    ├── favicon.svg
    └── img/                    # figures and screenshots from my own submitted work
```

## Deploying

GitHub Pages serves this repo directly from the default branch. Nothing to build.

1. Repo must be named exactly `Yaserabulaban.github.io` (case-insensitive) and be **public**.
2. Settings → Pages → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. First publish takes a minute or two; after that a push goes live in seconds.

## Local preview

Open `index.html` directly in a browser, or serve it to get clean absolute paths:

```bash
python3 -m http.server 8000
# then http://localhost:8000
```

## Theme

Light, dark and auto. Auto follows the OS via `prefers-color-scheme`; the toggle in the
header stores an explicit override in `localStorage`. All colours are CSS custom
properties defined in three blocks at the top of `site.css` — change them there and
both themes follow.

## Editing checklist

- **Adding a project to the index table** — one `<tr>` in the `#index` section of
  `index.html`. Keep the four columns: project + role, course, stack, what it measured.
- **Adding a featured project** — copy an `<article class="record">` block, alternate
  `record--flip` so the figure sides alternate down the page.
- **Adding a case study** — copy any file in `work/`, keep the `topbar`, `cs__head`
  and `prose` structure. Relative asset paths are `../assets/...`.
- **Images** — resize to ~1400 px wide before committing; JPEG for photographs,
  PNG for charts and diagrams. Always set `width`, `height` and a real `alt`.
- `assets/img/` also holds two spares not currently placed on any page —
  `kwazam-uml.jpg` and `survey-support.png` — kept for when those projects get
  their own write-ups.

## Content rules I followed

- Every figure is from my own submitted work.
- Every number traces back to a report, notebook, results CSV or test run.
- Limitations are stated on every case study, because a claim that cannot survive a
  follow-up question is worth less than no claim.
- Nothing about the UniPin internship names a partner, an internal service or an
  architecture detail.

## Licence

Code in this repository: MIT. Figures, screenshots and written content: © Yaser E. H.
Abulaban, all rights reserved.
