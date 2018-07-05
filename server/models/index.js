/**
 * @file 数据库操作入口文件
 * @author 小强赵
 */

import mongoose from 'mongoose';
import bluebird from 'bluebird';

import UserModel from './user';

mongoose.Promise = bluebird;
const db = 'mongodb://127.0.0.1:27017/test';

mongoose.connect(db).then(() => {
    console.log('数据库链接成功');
}, err => {
    console.log('数据库链接失败:', err);
});

export default {
    UserModel
};
