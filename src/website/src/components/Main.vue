<template>
    <el-container style="height: 100%;" class="page-header">
        <el-header>
            <ul class="menu">
                <li><a href="">首页</a></li>
                <li><a href="">项目</a></li>
                <li><a href="">关于</a></li>
            </ul>
        </el-header>
        <el-main >
            
            <h1>wwwwwwwwwwwwww</h1>
            <!-- <IndexPart v-show="activeIndex == 'index'"></IndexPart> -->
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
    .menu {
        font-family:'Hiragino Sans GB', 'Segoe UI', 'Sans-serif', 'Microsoft Yahei', Arial, sans-serif;
        font-size: 18px;
    }
    .menu a {
        cursor: pointer;
        text-decoration: none;
        text-decoration-color: #fff;
        text-decoration-style: solid;
        color: #fff;
        display:inline-block;
        line-height: 35px;
        padding-bottom: 0px;
        margin-bottom: 0px;
    }
    .menu a:hover {
        border-bottom: 3px solid #fff;
    }
    .menu li {
        list-style: none;
        float: left;
        margin-right: 30px;
    }
    .page-header {
        background-image:linear-gradient(120deg, #155799, #159957)
    }
</style>