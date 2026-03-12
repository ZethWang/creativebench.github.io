# CreativeBench Project Homepage

This repository contains the source code for the CreativeBench project website:

**CreativeBench: Benchmarking and Enhancing Machine Creativity via Self-Evolving Challenges**

Homepage: https://zethwang.github.io/creativebench.github.io/

The homepage introduces the benchmark motivation, the two creativity modes, benchmark comparison, main experimental results, analysis, EvoRePE, and contact information.

## Project Structure

- Homepage source: `public/index_home.html`
- Local React preview: `src/index.tsx`
- Shared homepage styles: `public/css/index.css` and `src/index.css`
- Static assets: `public/images/creativebench/`
- Build output: `build/`

## Local Development

Start the local preview server:

```bash
npm start
```

Build the static website:

```bash
npm run build
```

After building, the final deployable homepage is:

- `build/index.html`

The build script also renames the React output so that:

- `build/index.html` is the project homepage
- `build/leaderboard.html` is the React page output

## Deployment

This repository is intended to be deployed with GitHub Pages.

Publish the latest `build/` output with:

```bash
npx gh-pages -d build
```

If GitHub Pages is configured to deploy from the `gh-pages` branch, the site will update after the new build is published.

## Acknowledgment

This website is adapted from the LiveCodeBench project page template.

## Website License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
