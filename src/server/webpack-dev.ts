/* eslint-disable @typescript-eslint/no-unsafe-assignment,
@typescript-eslint/no-unsafe-call,
@typescript-eslint/no-unsafe-member-access */

import webpack from 'webpack';
import { Express } from 'express';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack';

export default (app: Express) => {
  const compiler = webpack(webpackConfig);

  app.use(
    devMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      headers: { 'Access-Control-Allow-Origin': '*' },
      stats: 'minimal',
    })
  );

  app.use(
    hotMiddleware(compiler, {
      log: false /* Turn it off for friendly-errors-webpack-plugin */,
    })
  );
};
