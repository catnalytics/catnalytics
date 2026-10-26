# Catnalytics website

Static GitHub Pages website for `catnalytics.com`. The site uses plain HTML, CSS, and JavaScript without a build step.

## Files

- `index.html`: landing page, SEO metadata, and existing Google Forms signup.
- `colors_and_type.css`, `site.css`, `site.js`: design tokens, layout, and responsive behavior.
- `fonts/`: locally hosted Pretendard font files.
- `assets/screens/`: static captures of app design screens used to illustrate the planned experience.

## Product messaging

The website describes app and IoT releases as planned for 2027. App screen images are design examples. AI record lookup is presented as a planned experience; model and delivery details are not promised. IoT hardware is described as under development and testing.

## Local preview

Run `python3 -m http.server 8000` and open `http://localhost:8000`.

The signup form submits to the existing Google Forms endpoint in a new tab. A live form submission is not part of local preview.

## Publishing

The custom domain is configured in `CNAME`. Keep the canonical URL, search verification tags, `robots.txt`, and sitemap aligned with `https://catnalytics.com/`. The static site is served from the GitHub Pages source branch; confirm the Pages deployment after pushing to `main`.
