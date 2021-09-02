import React from 'react';

import { CommonProps } from './types';

import App from './App';

const AppContainer = (props: CommonProps) => {
  return <App {...props} />;
};

export default AppContainer;
