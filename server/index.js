/**
 * @file 服务端入口文件
 * @author 小强赵
 */

import express from 'express';
import {
    Nuxt,
    Builder
} from 'nuxt';

import apiRouter from './api-router';
import config from '../nuxt.config.js';

const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 4000;

app.set('port', port);

// Import API Routes
app.use('/api', apiRouter);

config.dev = !(process.env.NODE_ENV === 'production');

// Init Nuxt.js
const nuxt = new Nuxt(config);

// Build only in dev mode
if (config.dev) {
    const builder = new Builder(nuxt);
    builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console
