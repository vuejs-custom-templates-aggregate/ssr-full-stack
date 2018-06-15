/**
 * @file  API路由配置文件
 * @author 小强赵
 */

import express from 'express';
import getList from './api/get-list';

const router = express.Router();

router.get('/get-list', getList);

export default router;
