<template>
    <section class="container">
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
import 'element-ui/lib/theme-default/icon.css';
import axios from '@/plugins/axios';

export default {
    components: {
        elTable,
        elTableColumn
    },
    async asyncData({req}) {
        const res = await axios.get('/api/users');
        return {
            tableData: res.data.data
        };
    }
};
</script>
<style scoped>
.title
{
    margin: 50px 0;
}
</style>
