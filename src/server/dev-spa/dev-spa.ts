import server from '../server';
import webpackDev from '../webpack-dev';
import logger from '../logger';
import spaRouter from '../spa-router';
import proxy from '../proxy';

server(process.env.PORT, webpackDev, logger, proxy, spaRouter);
