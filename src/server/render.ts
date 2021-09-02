/* eslint-disable no-underscore-dangle, import/order */
import { Response } from 'express';
import memoryCache from 'memory-cache';
import chalk from 'chalk';
import { minify } from 'html-minifier';

import { Route } from '@types';

import matchRoutes from '../utils/matchRoutes';

import renderHead from '../utils/renderHead';
import { renderHtmlStart, renderHtmlEnd } from '../utils/renderHtml';
import { loadBranchData } from './loadBranchData';

import config from '../config';
import { store } from '../store/server';
import * as render from '../utils/renderRootComponent';

/* eslint-disable import/extensions */
// @ts-ignore
import assets from '../../public/webpack-assets.json';
/* eslint-disable import/extensions */

const handleRenderError = (res: Response, error: Error) => {
  res.end('Internal server error');

  if (process.env.APP_ENV === 'development') {
    console.error(chalk.red('==> 😭 Internal server error'));
    console.error(error);
  }
};

const sendAppStream = (
  res: Response<ReadableStream>,
  path: string,
  cache: boolean
) => {
  const appContentStream = render.toStream(store, path);

  appContentStream.on('error', (error) => {
    handleRenderError(res, error);
  });

  appContentStream.pipe(res, { end: false });

  appContentStream.on('end', () => {
    const htmlEnd = renderHtmlEnd(
      assets,
      // @ts-ignore
      store.getState()
    );

    res.write(htmlEnd);
    res.end();

    if (cache) {
      const html = `${res.locals.HTML_START}${render.toString(
        store,
        path
      )}${htmlEnd}`;

      memoryCache.put(path, minify(html, config.htmlMinifier));
    }
  });
};

export default (path: string, res: Response) => {
  try {
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    const cachedHtml = memoryCache.get(path);
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */

    if (cachedHtml === null || cachedHtml === undefined) {
      /* TODO initial state */
      const branch = matchRoutes(path);

      const { thunksToRun, title, cache } = branch.route as Route;
      const { params } = branch.match;

      const head = renderHead(title);

      const htmlStart = renderHtmlStart(head);

      res.set('Content-Type', 'text/html; charset=utf-8');
      res.locals.HTML_START = htmlStart;
      res.write(htmlStart);

      if (thunksToRun && thunksToRun.length > 0) {
        loadBranchData(store, params, thunksToRun)
          .then(() => {
            return sendAppStream(res, path, cache);
          })
          .catch((error: Error) => handleRenderError(res, error));
      }
    } else {
      res.send(cachedHtml);
    }
  } catch (error) {
    handleRenderError(res, error);
  }
};
