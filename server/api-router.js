/**
 * @file  API路由配置文件
 * @author 小强赵
 */

import {Router} from 'express';
import user from './api/user';
import upload from './api/upload';

const router = new Router();

router.get('/source', user.getUserList);
router.post('/upload', upload);

export default router;
