<template>
    <section class="container">
        <!-- 头部按钮行 -->
        <header class="button-line">
            <el-button
                type="primary"
                icon="el-icon-circle-plus-outline"
                @click="dialogVisible = true">
                新增资源
            </el-button>
        </header>
        <!-- 资源列表 -->
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="name"
                label="用户姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="createDate"
                label="创建时间">
            </el-table-column>
            <el-table-column
                prop="updateDate"
                label="更新时间">
            </el-table-column>
        </el-table>
        <!-- 添加资源的弹框 -->
        <el-dialog
            title="添加资源"
            :visible.sync="dialogVisible"
            width="500px">
            <el-form ref="form" :model="form" :rules="formRules" label-width="95px">
                <el-form-item label="用户名:" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            </el-form>
            <section slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">
                    取 消
                </el-button>
                <el-button type="primary" @click="addUser">
                    确 定
                </el-button>
            </section>
        </el-dialog>
    </section>
</template>
<script>
/**
 * @file 上传接口测试页面
 * @author 小强赵
 */
import elTable from 'element-ui/lib/table';
import elTableColumn from 'element-ui/lib/table-column';
import 'element-ui/lib/theme-default/table.css';
import 'element-ui/lib/theme-chalk/icon.css';
import elButton from 'element-ui/lib/button';
import 'element-ui/lib/theme-chalk/button.css';
import messageBox from 'element-ui/lib/message-box';
import 'element-ui/lib/theme-chalk/message-box.css';
import message from 'element-ui/lib/message';
import 'element-ui/lib/theme-chalk/message.css';
import elDialog from 'element-ui/lib/dialog';
import 'element-ui/lib/theme-chalk/dialog.css';
import elForm from 'element-ui/lib/form';
import 'element-ui/lib/theme-chalk/form.css';
import elFormItem from 'element-ui/lib/form-item';
import 'element-ui/lib/theme-chalk/form-item.css';
import elInput from 'element-ui/lib/input';

import axios from '@/plugins/axios';

export default {
    components: {
        elTable,
        elTableColumn,
        elButton,
        elDialog,
        elForm,
        elFormItem,
        elInput
    },
    async asyncData({req}) {
        const res = await axios.get('/api/users');
        return {
            tableData: res.data.data
        };
    },
    data() {
        return {
            dialogVisible: false,
            form: {
                name: ''
            },
            formRules: {
                name: [
                    {
                        required: true,
                        message: '必填项',
                        trigger: 'blur'
                    }
                ]
            }
        };
    },
    methods: {

        /**
         * 删除用户
         *
         * @param {Object} userItem 一条用户数据
         */
        deleteUser(userItem) {
            messageBox.confirm('此操作将永久删除该资源, 是否继续?', '提示', {
                confirmButtonText: '继续',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => axios.delete('/api/source/' + userItem._id)
            ).then(res => {
                // 移除页面中的数据
                this.tableData.some((item, index) => {
                    if (item._id === userItem._id) {
                        this.tableData.splice(index, 1);
                        return true;
                    }
                });
                message({
                    type: 'success',
                    message: '删除成功!'
                });
            });
        },

        /**
         * 添加一条资源数据
         */
        addUser() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    debugger
                    axios.post('/api/user', this.form).then(res => {

                    });
                    this.dialogVisible = false;
                }
                else {
                    console.log('error submit!!');
                    return false;
                }
            });
            

        }
    }
};
</script>
<style scoped>
.button-line {
    text-align: right;
    padding: 5px 0;
}
</style>
