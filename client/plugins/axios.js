/**
 * @file axios 配置
 * @author 小强赵
 */
import axios from 'axios';

let options = {};
// The server-side needs a full url to works
if (process.server) {
    options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 9090}`;
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
            alert('错误提示');
    }

}, err => {
    switch (err.response.status) {
        case 404:
            err.statusInfo = `请求地址出错: ${err.response.config.url}`;
            break;
        case 500:
            err.statusInfo = '服务器内部错误';
            break;
    }
    return Promise.reject(err);
});

export default $http;
