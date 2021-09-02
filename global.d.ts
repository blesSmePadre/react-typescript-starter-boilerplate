/* eslint-disable no-var */
/* eslint-disable vars-on-top */

import 'axios';
import 'express';
import 'react-router-config';

declare global {
  var RUNTIME_ENV: 'server' | 'client';

  namespace NodeJS {
    interface Global {
      RUNTIME_ENV: 'server' | 'client';
    }
  }

  interface Window {
    initMap: VoidFunction;
    __INITIAL_STATE__: Record<string, any>;
    __MAP_LOADED__: boolean | undefined;
  }
}

declare module 'axios' {
  interface AxiosRequestConfig {
    stubData?: Array<Record<string, any>> | Record<string, any>;
    stubDelay?: number;
  }
}

declare module 'express' {
  interface Response {
    locals: { HTML_START: string };
  }
}
