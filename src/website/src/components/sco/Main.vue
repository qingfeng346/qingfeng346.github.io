<template>
    <el-container style="height: 100%" class="page-header">
        <el-header><MainMenu></MainMenu></el-header>
        <el-main>
            <div class="title">Scorpio-CSharp</div>
            <iframe src='https://ghbtns.com/github-btn.html?user=qingfeng346&repo=Scorpio-CSharp&type=star&count=true' frameborder='0' scrolling='0' width='100px' height='30px'></iframe>
            <div class="des">此脚本是用作Unity游戏热更新脚本,纯c#实现,最低支持.net3.5,兼容.net3.5以上所有平台,语法类似 javascript,支持平台:</div>
            <div class="des">Android,IOS,UWP,Windows,Mac,Linux,WebGL等所有平台</div>
            <div class="des">sco可以用作脚本单独运行</div>
            <div><button class="download" @click="OnClickSourceLink">源码地址</button></div>
            <!-- <iframe class="scriptconsole" src="https://qingfeng346.github.io/static/projects/Scorpio-CSharp/scriptconsole/index.html" 
                frameborder="0" border="0" width="850" height="560" scrolling="no"></iframe> -->
        </el-main>
    </el-container>
</template>
<script>
    import MainMenu from './MainMenu';
    // import IndexPart from './IndexPart';
    import axios from 'axios'
    export default {
        components : { MainMenu },
        async mounted() {
            // var str = await axios.get("/static/projects/com.scorpio.agileman/des.md1")
            // console.log("====== " + JSON.stringify(str, null, 2))
        },
        data() {
            return {
                //aaa : navigator.userAgent,
                //platform : navigator.platform
            }
        },
        methods : {
            OnClickSourceLink : () => {
                window.open("https://github.com/qingfeng346/Scorpio-CSharp/releases");
            }
        }
    }
</script>
<style>
@import url("../../assets/css/style.css");
.scriptconsole {
    margin: 0px;
    padding: 0px;
    border: 0px;
}
</style>