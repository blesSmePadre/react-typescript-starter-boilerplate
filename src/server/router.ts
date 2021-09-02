import { Express } from 'express';

import render from './render';
import renderDev from './render-dev';

import { routes } from '../routes';

export default (app: Express) => {
  routes
    .filter(({ path }) => path !== '*')
    .forEach(({ path }) =>
      app.get(path, (req, res) => {
        if (process.env.APP_ENV === 'development') {
          render(req.path, res);
        } else {
          render(req.path, res);
        }
      })
    );

  app.get('*', (req, res) => {
    res.status(404);

    if (process.env.APP_ENV === 'development') {
      renderDev(req.path, res);
    } else {
      render(req.path, res);
    }
  });
};
