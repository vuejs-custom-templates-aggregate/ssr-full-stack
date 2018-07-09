/**
 * @file 工具函数集合
 * @author 小强赵
 */

import moment from 'moment';

export default {

    /**
     * 格式化时间
     *
     * @param {string} date 时间
     * @param {boolean} friendly 是否开启友好模式(一天内、一小时内等)
     * @return {string} 格式化后的时间字符串
     */
    formatDate(date, friendly) {
        date = moment(+date);

        if (friendly) {
            return date.fromNow();
        }

        return date.format('YYYY-MM-DD HH:mm');
    },

    /**
     * 去除字符串前后空格
     *
     * @param {string} str 字符串
     * @return {string} 处理后的字符串
     */
    trim(str) {
        return str.replace(/^\s+|\s+$/g, '');
    }
};
