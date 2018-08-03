/**
 * @file dev 启动配置
 * @author 小强赵
 */
module.exports = {
    webpack(config, options, webpack) {
        config.entry.main = './server/index.js';
        return config;
    }
};
