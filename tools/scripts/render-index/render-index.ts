/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment */

import fs from 'fs';
import path from 'path';
import { minify } from 'html-minifier';
import { renderHtmlStart, renderHtmlEnd } from 'utils/renderHtml';

import renderHead from 'utils/renderHead';
import config from '@config';

// @ts-ignore
import assets from '../../../public/webpack-assets.json';

/* TODO Replace "react-view" with common solution for all the cases */
const html = `${renderHtmlStart(
  renderHead(config.app.title)
)}<div id="react-view"></div>${renderHtmlEnd(assets, {})}`;

fs.writeFileSync(
  path.resolve(process.cwd(), 'public/index.html'),
  minify(html, config.htmlMinifier),
  'utf8'
);
