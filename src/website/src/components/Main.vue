<template>
    <el-container style="height: 100%;" class="page-header">
        <el-header><MainMenu></MainMenu></el-header>
        <el-main>
            <div class="title">Scorpio-CSharp</div>
            <div class="des">此脚本是用作Unity游戏热更新使用的脚本,纯c#实现,最低支持.net3.5,兼容.net3.5以上所有平台,语法类似 javascript</div>
            <button class="download" @click="OnClickSourceLink" >源码地址</button>
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
                aaa : navigator.userAgent,
                platform : navigator.platform
            }
        },
        methods : {
            handleSelect : function(index) {

            },
            OnClickSourceLink : () => {
                window.open("https://github.com/qingfeng346/Scorpio-CSharp");
            }
        }
    }
</script>
<style>
.title {
    margin-top: 100px;
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
    margin: 50px;
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
</style>