/**
 * @file 列表示例接口
 * @author 小强赵
 */

export default (req, res, next) => {
    res.send({
        status: 0,
        statusInfo: '',
        data: [{
            name: 'aaa'
        },
        {
            name: 'bbb'
        }]
    });
    next();
};
