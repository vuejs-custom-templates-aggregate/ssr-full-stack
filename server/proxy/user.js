/**
 * @file 用户代理层
 * @author 小强赵
 */

import models from '../models';

const UserModel = models.UserModel;

export default {

    /**
     * 获取用户列表
     *
     * @return {Object} 数据查询操作结果，Promise 对象
     */
    getUserList() {
        return UserModel.find();
    },

    /**
     * 通过 ID 删除用户
     *
     * @param {string} id 用户 ID
     * @return {Object} 数据删除操作结果，Promise 对象
     */
    deleteUserItem(id) {
        return UserModel.remove({
            _id: id
        });
    },

    /**
     * 插入一条用户数据
     *
     * @param {Object} user 用户数据
     * @return {Object} 插入后的数据，Promise 对象
     */
    addUserItem(user) {
        // 格式校验
        let valid = true;
        let statusInfo;
        if (user.name === '') {
            valid = false;
            statusInfo = '用户名不可为空';
        }

        if (!valid) {
            return Promise.reject({
                statusInfo
            });
        }

        // 对象
        const userModel = new UserModel(user);
        return userModel.save();
    }
};
