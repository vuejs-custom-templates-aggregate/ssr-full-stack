<template>
    <section class="container">
        about page
    </section>
</template>
<script>
export default {
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

</style>
