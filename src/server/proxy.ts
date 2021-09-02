import { Express } from 'express';
import config from '@config';
import { createProxyMiddleware } from 'http-proxy-middleware';

export default (app: Express) => {
  app.use(
    config.baseUrl,
    createProxyMiddleware({
      target: config.remoteApiUrl,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
