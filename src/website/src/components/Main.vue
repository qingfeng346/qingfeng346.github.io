<template>
    <el-container style="height: 100%;" class="page-header">
        <el-header><MainMenu></MainMenu></el-header>
        <el-main>
            <h1 class="title">Scorpio-CSharp</h1>
            <div>{{ aaa }}</div>
            <div>{{ platform }}</div>
        </el-main>
        <el-footer></el-footer>
    </el-container>
</template>
<script>
    import MainMenu from './MainMenu';
    import IndexPart from './IndexPart';
    export default {
        components : { MainMenu, IndexPart },
        mounted() {
            
        },
        data() {
            return {
                projects: ["1111","22222"],
                activeIndex: 'index',
                aaa : navigator.userAgent,
                platform : navigator.platform
            }
        },
        methods : {
            handleSelect : function(index) {
                console.log("==========1111111111111111 " + index)
            }
        }
    }
</script>
<style>
.title {
    color: white;
    font-size: 3em;
}
</style>