<template>
    <el-container style="height: 100%; border: 1px solid #eee">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="index">主页</el-menu-item>
            <el-submenu index="project">
                <template slot="title">项目</template>
                <el-menu-item v-for="item of projects" :key="item" :index="item">
                    {{ item }}
                </el-menu-item>
            </el-submenu>
        </el-menu>
        <el-main>
            <IndexPart v-show="activeIndex == 'index'"></IndexPart>
        </el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>
<script>
    import IndexPart from './IndexPart';
    export default {
        components : { IndexPart },
        mounted() {
            
        },
        data() {
            return {
                projects: ["1111","22222"],
                activeIndex: 'index',
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
    html, body {
      height: 100%;
      margin: 0;
    }
</style>