<template>
    <el-container style="height: 100%" class="page-header">
        <el-header><MainMenu></MainMenu></el-header>
        <el-main>
            <div class="title">ScorpioPackageTool</div>
            <iframe src='https://ghbtns.com/github-btn.html?user=qingfeng346&repo=ScorpioPackageTool&type=star&count=true' frameborder='0' scrolling='0' width='100px' height='30px'></iframe>
            <div class="des">此工具用于解压反编译apk文件,完全开源,支持平台:</div>
            <div class="des">windows,mac</div>
            <div><button class="download" @click="OnClickSourceLink">下载地址</button></div>
            <div><img src="https://github.com/qingfeng346/ScorpioPackageTool/raw/master/screenshot/1.png"/></div>
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
        },
        data() {
            return {
            }
        },
        methods : {
            OnClickSourceLink : () => {
                window.open("https://github.com/qingfeng346/ScorpioPackageTool/releases");
            }
        }
    }
</script>
<style>
.title {
    margin-top: 60px;
    margin-bottom: 5px;
    color: white;
    font-size: 3.1em;
}
.des {
    color: white;
    font-size: 19px;
    max-width: 65%;
    margin: auto;
    margin-top: 20px;
    text-align: center;
}
.download {
    margin: 30px 0px;
    font-size: 20px;
    background-color: transparent;
    color: white;
    width: 200px;
    height: 60px;
    border: 1.2px solid white; /* Green */
}
.download:hover {
    background-color: white; /* Green */
    color: rgb(94, 93, 93);
    cursor: pointer;
}
.scriptconsole {
    margin: 0px;
    padding: 0px;
    border: 0px;
}
</style>