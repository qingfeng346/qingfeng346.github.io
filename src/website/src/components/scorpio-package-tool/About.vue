<template>
    <el-container style="height: 100%;">
        <el-header class="page-header">
            <MainMenu></MainMenu>
        </el-header>
        <el-main><div class="about" v-html="about"></div></el-main>
    </el-container>
</template>
<script>
import MainMenu from './MainMenu';
import axios from 'axios'
import marked from 'marked';
export default {
    components : { MainMenu },
    async mounted() {
        //var result = await axios.get("/static/about.md")
        var result = await axios.get("https://raw.githubusercontent.com/qingfeng346/ScorpioPackageTool/master/README.md")
        this.about = marked(result.data)
    },
    data() {
        return {
            about : "正在载入..."
        }
    },
}
</script>
<style>
.about {
    margin: 50px 0px 0px 100px;
    width: calc(100% - 200px);
    text-align: left;
    float: left;
    word-break: break-all;
}
</style>


