/* eslint-disable import/no-mutable-exports */

import { createBrowserHistory, createMemoryHistory, History } from 'history';

let history: History;

if (RUNTIME_ENV === 'server') {
  history = createMemoryHistory();
} else {
  history = createBrowserHistory();
}

export default history;
