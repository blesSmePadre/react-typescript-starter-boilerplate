import express from 'express';
import chalk from 'chalk';
import path from 'path';
import proxy from '../proxy';

const app = express();

proxy(app);

app.use(express.static(path.resolve(process.cwd(), 'public')));

app.get('*', (_, res) => {
  res.sendFile(path.resolve(process.cwd(), 'public/index.html'));
});

if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    /* eslint-disable @typescript-eslint/restrict-template-expressions */
    console.info(
      chalk.green(`==> 🌎  Listening at http://localhost:${process.env.PORT}`)
    );
  });
} else {
  console.error(
    chalk.red('==> 😭  OMG!!! No PORT environment variable has been specified')
  );
}
