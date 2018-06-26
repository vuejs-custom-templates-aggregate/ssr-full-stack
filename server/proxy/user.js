/**
 * @file 用户代理层
 * @author 小强赵
 */

import models from '../models';

const user = models.user;

export default {
    getUserList() {
        return user.find();
    },
    getSourceById() {

    }
};
