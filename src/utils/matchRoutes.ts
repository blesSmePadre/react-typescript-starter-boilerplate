import { matchRoutes } from 'react-router-config';
import { routes } from '../routes';

export default (path: string) => {
  const branch = matchRoutes(routes, path);

  return (
    branch[0] || {
      route: {
        sagasToRun: [],
        title: '404 - Not found',
        cache: true,
      },
      match: { params: {} },
    }
  );
};
