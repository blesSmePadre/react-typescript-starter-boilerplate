/* eslint-disable no-underscore-dangle */

import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import { render, hydrate, unmountComponentAtNode } from 'react-dom';
import history from './utils/history';

import { routes } from './routes';
import { store } from './store/client';

const renderDom = process.env.APP_ENV === 'development' ? render : hydrate;
const mountNode = document.getElementById('react-view');

const renderApp = () => {
  unmountComponentAtNode(mountNode as Element);

  /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
  const App = require('./components/App').default;

  renderDom(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App routes={routes} />
      </ConnectedRouter>
    </Provider>,
    mountNode
  );
};

if (module.hot) {
  module.hot.accept();
}

renderApp();
