/**
 * @file 用户实体相关的接口
 * @author 小强赵
 */

import user from '../proxy/user.js';

export default {

    /**
     * 获取用户列表
     *
     * @param {Object} req 请求
     * @param {Object} res 返回
     */
    getUserList(req, res, next) {
        user.getUserList().then(data => {
            res.send({
                status: 0,
                statusInfo: '',
                data
            });
        });
    },


    /**
     * 按 ID 删除某个用户
     *
     * @param {Object} req 请求
     * @param {Object} res 返回
     */
    deleteUserItem(req, res) {
        user.deleteUserItem(req.params.id).then(data => {
            res.send({
                status: 0,
                statusInfo: '',
                data
            });
        }, err => {
            res.send({
                status: 1,
                statusInfo: '删除失败',
                data: err
            });
        });
    },

    /**
     * 添加一个用户
     *
     * @param {Object} req 请求
     * @param {Object} res 返回
     */
    addUserItem(req, res) {
        user.addUserItem(req.body).then(data => {
            res.send({
                status: 0,
                statusInfo: '',
                data
            });
        }, err => {
            res.send({
                status: 1,
                ...err
            });
        });
    }
};
