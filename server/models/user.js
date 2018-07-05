/**
 * @file 资源集合项数据格式定义
 */
import mongoose from 'mongoose';
import BaseModel from './base-model';

const Schema = mongoose.Schema;
const userSchema = new Schema({
    // 姓名
    name: {type: String},
    // 创建时间
    createDate: {type: String},
    // 更新时间
    updateDate: {type: String}
});

userSchema.plugin(BaseModel);

// 插入一个用户时，初始化新建时间和更新时间两个字段
userSchema.pre('save', function (next) {
    this.initDate();
    next();
});

export default mongoose.model('user', userSchema);
