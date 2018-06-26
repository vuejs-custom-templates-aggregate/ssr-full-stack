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

// 保存前执行
userSchema.pre('save', next => {
    const now = new Date();
    this.createDate = now;
    this.updateDate = now;
    next();
});

mongoose.model('user', userSchema);

export default mongoose.model('user');
