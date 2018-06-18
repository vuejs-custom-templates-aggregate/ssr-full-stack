<template>
    <section class="container">
        <el-upload
            action="/api/upload"
            ref="uploadComp"
            class="upload-zip"
            accept="*/*"
            :multiple="true">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
    </section>
</template>
<script>
import elUpload from 'element-ui/lib/upload';
import 'element-ui/lib/theme-default/upload.css';
import 'element-ui/lib/theme-default/icon.css';

export default {
    components: {
        elUpload
    },
    asyncData({req}) {
        return {
            name: req ? 'server' : 'client'
        };
    },
    head() {
        return {
            title: `About Page (${this.name}-side)`
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
