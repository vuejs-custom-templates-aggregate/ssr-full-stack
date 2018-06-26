/**
 * @file 用户实体相关的接口
 * @author 小强赵
 */

import user from '../proxy/user.js';

export default {
    getUserList(req, res, next) {
        user.getUserList().then(data => {
            res.send({
                status: 0,
                statusInfo: '',
                data
            });
        });
    }
};
