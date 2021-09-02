/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { Provider } from 'react-redux';
import { EnhancedStore } from '@reduxjs/toolkit';
import { StaticRouter } from 'react-router-dom';
import { renderToNodeStream, renderToString } from 'react-dom/server';

import { ServerStyleSheet } from 'styled-components';

import { routes } from '../routes';
import App from '../components/App';

const renderRoot = (store: EnhancedStore, path: string) => (
  <div id="react-view">
    <Provider store={store}>
      <StaticRouter location={path}>
        <App routes={routes} />
      </StaticRouter>
    </Provider>
  </div>
);

export const toStream = (store: EnhancedStore, path: string) => {
  const sheet = new ServerStyleSheet();
  const root = sheet.collectStyles(renderRoot(store, path));

  return sheet.interleaveWithNodeStream(renderToNodeStream(root));
};

export const toString = (store: EnhancedStore, path: string) =>
  renderToString(renderRoot(store, path));
