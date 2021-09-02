/* eslint-disable no-underscore-dangle, import/order */
import { Response } from 'express';
import chalk from 'chalk';

import matchRoutes from '../utils/matchRoutes';

import renderHead from '../utils/renderHead';
import { renderHtmlStart, renderHtmlEnd } from '../utils/renderHtml';

const handleRenderError = (res: Response, error: Error) => {
  res.send('Internal server error');
  console.error(chalk.red('==> 😭 Internal server error'));
  console.error(error);
};

export default (path: string, res: Response) => {
  try {
    const branch = matchRoutes(path);
    const { title } = branch.route;

    const head = renderHead(title);

    const htmlStart = renderHtmlStart(head);
    const htmlEnd = renderHtmlEnd({ js: '/main.js' }, {});

    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(`${htmlStart}<div id="react-view"></div>${htmlEnd}`);
  } catch (error) {
    handleRenderError(res, error);
  }
};
