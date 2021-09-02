import express, { Express } from 'express';
import path from 'path';

export default (app: Express) => {
  app.use(express.static(path.resolve(process.cwd(), 'public')));

  app.get('*', (_, res) => {
    res.sendFile(path.resolve(process.cwd(), 'public/index.html'));
  });
};
