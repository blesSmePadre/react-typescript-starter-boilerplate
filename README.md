## Getting Started

**1. You can start by cloning the repository on your local machine by running:**

```bash
git clone https://github.com/blesSmePadre/react-typescript-starter-boilerplate
cd react-starter-boilerplate
```

**2. Install all of the dependencies:**

```bash
yarn
```

**3. Start to run dev mode:**

```bash
yarn start:dev
```

Now the app should be running at [http://localhost:5000/](http://localhost:5000/)

## NPM Main Script Commands

| `yarn <script>`        | Description                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| `start:dev`            | Run your app on the development server at `localhost:5000`. HMR will be enabled.                             |
| `start:staging`        | Bundle assets to `./public` and run it on the staging server with server environment at `localhost:8080`.    |
| `start:production`     | Bundle assets to `./public` and run it on the staging server with staging environment at `localhost:8080`.   |
| `start:spa:staging`    | Bundle assets to `./public` and run it on the static server with staging environment at `localhost:8080`.    |
| `start:spa:production` | Bundle assets to `./public` and run it on the static server with production environment at `localhost:8080`. |
