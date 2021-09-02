import serialize from 'serialize-javascript';

import { Head } from './renderHead';

export const renderHtmlStart = (head: Head) =>
  `<!doctype html>
    <html ${head.htmlAttributes}>
      <head>
        <noscript>Javascript is disabled!</noscript>
        <meta charset="utf-8">
        <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
        <![endif]-->

        <link rel="manifest" href="/manifest.json">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <meta name="theme-color" content="#317EFB"/>

        ${head.meta}

        ${head.link}

        ${head.title}
      </head>
      <body>
  `;

/* TODO Look how to properly use an unknown type */
/* eslint-disable @typescript-eslint/ban-types */
export const renderHtmlEnd = (
  assets: Record<string, string>,
  initialState: Record<string, object>
) => `
    <!-- Store the initial state into window -->
    <script>
      // Use serialize-javascript for mitigating XSS attacks. See the following security issues:
      // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
      window.__INITIAL_STATE__=${serialize(initialState)};
    </script>

    <!-- Insert bundled scripts into <script> tag -->
    ${Object.keys(assets)
      .map((key) =>
        key.substr(key.length - 2) === 'js'
          ? `<script src="${assets[key]}"></script>`
          : ''
      )
      .join('')}
  </body>
</html>`;

export default (
  head: Head,
  assets: Record<string, string>,
  htmlContent: string,
  initialState: Record<string, object>
) => {
  return `${renderHtmlStart(head)}${htmlContent}${renderHtmlEnd(
    assets,
    initialState
  )}`;
};
