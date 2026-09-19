# Kaiming Yang — personal portfolio

A bilingual Astro portfolio for GitHub Pages, with a wide, restrained layout, light/dark themes and subtle motion. Independently implemented with visual references to Once UI Magic Portfolio and the information clarity of Minimal Light; no template source code copied.

## Preview and build

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Content and structure

The home page contains an introduction and research themes, education, professional experience, publications/projects, and other collaborations. All sections are directly readable by scrolling. English is the default at `/` (with `/en/` retained as an alias); Chinese lives at `/zh/`. Theme preference persists locally.

- `src/data/portfolio.ts`: bilingual copy, reader-facing project descriptions, publication badges and links.
- `src/components/Portfolio.astro`: home layout and section order.
- `src/components/ProjectCard.astro`: shared image and text layout for all six main and collaboration projects.
- `src/components/Shell.astro`: shared navigation, theme control and animation.
- `src/components/Blog.astro`: bilingual project articles with source notes, figures and an image dialog.
- `src/data/articles.json`: complete English and Chinese nl2spec++ / CriticGUI articles.
- `src/pages/blog/` and `src/pages/en/blog/`: CriticGUI and nl2spec++ article routes.
- `src/styles/global.css`: responsive layout and theme variables.
- `public/images/`: user-supplied personal assets.
- `public/resume/`: Chinese and English resume PDFs.

WorldGUI and CriticGUI use supplied figures; nl2spec++ uses a redesigned overview grounded in the repository. Remaining project images use explicit placeholders. Both blogs now contain source-grounded project notes. The personal-frame section is omitted pending the user's text.

Content was checked against the September 2026 experience library and General AI resumes. Huawei appears only in the introduction and internship section. Project cards omit institution and project-year fields; venue years remain in publication badges.

## Asset sources

Huawei and Yonyou logos are company trademarks, obtained from their official websites for identifying internship employers:

- https://www.huawei.com/-/media/hcomponent-header/1.0.1.20260908162100/component/img/huawei_logo.png
- https://www.yonyou.com/assets/images/version26/logo.png

Portrait and AI illustration are user-supplied personal assets, not reusable stock images.

## GitHub Pages

The included workflow builds on pushes to `main` and deploys `dist/` to GitHub Pages. In repository Settings → Pages, choose GitHub Actions as the source. The configured URL is https://kaiming-y.github.io.

This is a local review version; no push or public deployment has been performed.

## Source updates

Full author lists were checked against Dream.exe and WorldGUI on arXiv and the AdaHC coauthor faculty page; Libra remains abbreviated as requested.

- https://arxiv.org/abs/2606.04811
- https://arxiv.org/abs/2502.08047
- https://people.ucas.ac.cn/~0068742
- https://arxiv.org/abs/2607.23250

University logo sources (institutional trademarks):
- NUS: https://danzer1xxxxchan.github.io/images/organizations/nus.jpg (logo reference: https://nus.edu.sg/identity/elements-of-the-nus-logo)
- Xidian original JPG: https://github.com/note286/xdulogo/tree/main/org, sourced from https://xcb.xidian.edu.cn/info/1008/1094.htm

Article evidence: nl2spec++ README, backend.py, translation/prompting.py, translation/ambiguity.py and prompts from the cloned repository; CriticGUI FYP report Chapter 5 and Section 6.3. The active nl2spec++ figures are Python-built SVG/PNG assets. The AI-generated draft and original images remain available in /design/nl2spec/ for comparison. Prompt diagrams are condensed structure guides; source prompts remain unchanged. CriticGUI now uses the supplied data collection pipeline in its four-section bilingual article.
