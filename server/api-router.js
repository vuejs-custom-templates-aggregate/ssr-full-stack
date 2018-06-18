/**
 * @file  API路由配置文件
 * @author 小强赵
 */

import {Router} from 'express';
import getList from './api/get-list';
import upload from './api/upload';

const router = new Router();

router.get('/get-list', getList);
router.post('/upload', upload);

export default router;
