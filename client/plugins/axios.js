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

export default axios.create(options);
