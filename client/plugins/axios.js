/**
 * @file axios 配置
 * @author 小强赵
 */

import getIp from 'get-ip';
import axios from 'axios';
import message from 'element-ui/lib/message';
import 'element-ui/lib/theme-chalk/message.css';
import 'element-ui/lib/theme-chalk/icon.css';

let options = {};
// The server-side needs a full url to works
if (process.server) {
    const host = getIp() || '127.0.0.1';
    options.baseURL = `http://${host}:${process.env.PORT || 9090}`;
}

const $http = axios.create(options);

// 拦截响应response，并做一些错误处理
$http.interceptors.response.use(res => {
    const data = res.data;
    switch (data.status) {
        // 正确返回
        case 0:
            return data;
        case 1:
            message({
                type: 'error',
                message: data.statusInfo || '请求失败，请稍后重试 /(ㄒoㄒ)/~~'
            });
            return Promise.reject(data);
    }

}, err => {
    switch (err.response.status) {
        case 404:
            err.statusInfo = '接口调用失败，请稍后重试';
            break;
        case 500:
            err.statusInfo = '服务器内部错误';
            break;
    }
    message({
        type: 'error',
        message: err.statusInfo || '请求失败，请稍后重试 /(ㄒoㄒ)/~~'
    });
    return Promise.reject(err);
});

export default $http;
