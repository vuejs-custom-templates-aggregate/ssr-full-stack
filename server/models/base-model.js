/**
 * @file 数据对象定义基础类
 * @author 小强赵
 */

// import utiles from '../utiles';

export default function (schema) {
    // 初始化新建时间和更新时间，通用
    schema.methods.initDate = function () {
        const date = new Date().getTime().toString();
        this.createDate = date;
        this.updateDate = date;
    };
}
