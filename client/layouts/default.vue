<template>
    <div>
        <nuxt></nuxt>
        <my-footer></my-footer>
    </div>
</template>

<script>
/**
 * @file 默认页面布局
 * @author zxq
 */
import MyFooter from '../components/Footer.vue';

export default {
    components: {
        MyFooter
    }
};
</script>

<style>
.container {
    margin: 0;
    padding: 5px;
}

</style>
