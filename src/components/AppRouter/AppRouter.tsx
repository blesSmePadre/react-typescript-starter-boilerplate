import React from 'react';
import { Switch, Route as AppRoute } from 'react-router-dom';

import { Route } from '@types';

import NotFound from 'pages/NotFound';

type Props = { routes: Route[] };

const AppRouter = ({ routes }: Props) => (
  <Switch>
    {routes.map(({ path, exact, component }) => (
      <AppRoute key={path} exact={exact} path={path} component={component} />
    ))}
    <AppRoute path="*" exact component={NotFound} />
  </Switch>
);

export default AppRouter;
