import server from '../server';
import webpackDev from '../webpack-dev';
import logger from '../logger';
import middlewares from '../middlewares';
import router from '../router';
import proxy from '../proxy';
import cache from '../cache';

server(
  process.env.PORT,
  logger,
  proxy,
  cache,
  webpackDev,
  proxy,
  middlewares,
  router
);
