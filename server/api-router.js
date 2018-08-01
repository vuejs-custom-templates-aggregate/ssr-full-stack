/**
 * @file  API路由配置文件
 * @author 小强赵
 */

import {Router} from 'express';
import user from './api/user';
import upload from './api/upload';
import logger from './logger.js';

const router = new Router();
router.all('/*', (req, res, next) => {
    logger.trace(`API request, URL:${req.originalUrl}, method:${req.method}, body:${JSON.stringify(req.body)}`);
    next();
});

router.get('/users', user.getUserList);
router.delete('/users/:id', user.deleteUserItem);
router.post('/users', user.addUserItem);

router.post('/upload', upload);

export default router;
