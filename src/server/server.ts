import express, { Express } from 'express';
import chalk from 'chalk';

export default (
  port: string | undefined,
  ...middlewares: Array<(app: Express) => void>
) => {
  const app = express();

  middlewares.forEach((middleware) => middleware(app));

  if (port) {
    app.listen(port, (err) => {
      const url = `http://localhost:${port}`;

      if (err) {
        /* eslint-disable @typescript-eslint/restrict-template-expressions */
        console.error(`==> 😭  OMG!!! ${err}`);
      }

      console.info(chalk.green(`==> 🌎  Listening at ${url}`));
    });
  } else {
    console.error(
      chalk.red(
        '==> 😭  OMG!!! No PORT environment variable has been specified'
      )
    );
  }
};
