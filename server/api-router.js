/**
 * @file  API路由配置文件
 * @author 小强赵
 */

import {Router} from 'express';
import user from './api/user';
import upload from './api/upload';

const router = new Router();

router.get('/users', user.getUserList);
router.delete('/users/:id', user.deleteUserItem);
router.post('/users', user.addUserItem);

router.post('/upload', upload);

export default router;
