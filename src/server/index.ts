import applyMiddlewares from './middlewares';
import applyRouter from './router';
import server from './server';

global.RUNTIME_ENV = 'server';

server(process.env.PORT, applyMiddlewares, applyRouter);
