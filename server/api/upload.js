/**
 * @file 上传文件接口
 *
 * @author 小强赵
 */

import {IncomingForm} from 'formidable';
import path from 'path';

export default (req, res, next) => {
    const form = new IncomingForm();
    form.keepExtensions = true;
    // 此处是启动路径
    let uploadDir = path.normalize('./upload-files/');
    form.uploadDir = uploadDir;

    form.parse(req, (err, fields, file) => {
        res.send({
            status: 0,
            statusInfo: '上传成功',
            data: {}
        });
    });
};
