import { Express } from 'express';

const setCacheExts = [/\.(woff2?|ttf|eot)$/, /\.(gif|png|svg|jpe?g|webp)$/];

export default (app: Express) => {
  app.use('/', (req, res, next) => {
    if (setCacheExts.some(item => item.test(req.path))) {
      console.info('set cache control', req.path);
      res.setHeader('Cache-Control', 'max-age=31536000');
    }
    next();
  });
};
