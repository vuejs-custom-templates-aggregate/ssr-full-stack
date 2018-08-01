/**
 * @file 日志模块
 * @author 小强赵
 */

import log4js from 'log4js';
log4js.configure({
    appenders: {
        'app-trace': {
            // 直接写文件，适合日质量比较大的情况，日志文件超过某个数值就拆分新文件
            type: 'file',
            maxLogSize: 2000000, // bytes
            backups: 10, // 最多留几个
            filename: 'logs/app-trace-log'
        },
        'app-error': {
            // 日期拆分日志，适合量较小的日志，比如日小与 100M
            type: 'dateFile',
            pattern: '.yyyy-MM-dd-hh-mm',
            backups: 10, // 最多留几个
            filename: 'logs/app-error-log'
        }
    },
    categories: {
        'default': {
            appenders: ['app-trace'],
            level: 'trace'
        },
        'error': {
            appenders: ['app-error'],
            level: 'error'
        }
    }
});

const loggerTrace = log4js.getLogger();
const loggerError = log4js.getLogger('error');

export default {
    trace(str) {
        loggerTrace.trace(str);
    },
    error(str) {
        loggerError.error(str);
    }
};
