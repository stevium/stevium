/**
 * @flow
 */

import formatTitle from '../../common/formatTitle';
import raw from '../raw';
import template from '../template';

export default function renderIndex(locals: {
  alternate: ?string,
  cjs: string,
  cache: string,
  canonical: Promise<?string>,
  description: ?string,
  home: ?string,
  mjs: string,
  pageContent: string,
  styles: Promise<?string>,
  title: ?string,
}) {
  const {
    alternate,
    cjs,
    cache,
    canonical,
    description,
    home,
    mjs,
    pageContent,
    styles,
    title,
  } = locals;
  return template`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        ${styles.then(s => (s ? template`<style>${raw(s)}</style>` : null))}
        <link rel="icon" type="image/x-icon" href="/favicon.ico">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${formatTitle(title)}</title>
        <meta property="og:title" content="${title}">
        <meta property="og:type" content="article">
        <meta property="og:image" content="https://wincent.com/assets/static/wincent.jpg">
        ${
          description
            ? template`<meta property="og:description" content="${description}">`
            : null
        }
        ${canonical.then(c =>
          c
            ? template`
              <link rel="canonical" href="${canonical}">
              <meta property="og:url" content="${canonical}">
            `
            : null,
        )}
        ${
          alternate
            ? template`<link rel="alternate" type="application/rss+xml" href="${alternate}">`
            : null
        }
        ${
          home
            ? template`<link rel="home" type="application/rss+xml" href="${home}">`
            : null
        }
      </head>
      <body>
        <div id="relay-root">${pageContent}</div>
        <script>var MasochistCache = ${raw(cache)};</script>
        <script type="module" src="${mjs}" /></script>
        <script nomodule src="${cjs}" /></script>
  `;
}
