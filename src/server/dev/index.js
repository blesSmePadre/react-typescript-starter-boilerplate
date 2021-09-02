/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-call */

require('@babel/register')({ extensions: ['.js', '.ts', '.tsx'] });
require('../../../tools/hooks')();

global.RUNTIME_ENV = 'server';

require('./dev');
