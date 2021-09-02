import { Express } from 'express';
import morgan from 'morgan';

export default (app: Express) => {
  app.use(morgan('dev', { skip: (req, res) => res.statusCode < 400 }));
};
