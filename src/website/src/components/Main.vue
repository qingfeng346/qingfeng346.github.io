<template>
    <el-container style="height: 100%" class="page-header">
        <el-header><MainMenu></MainMenu></el-header>
        <el-carousel :interval="4000" height="500px" indicator-position="outside" @click="OnClickTest">
            <el-carousel-item v-for="project in projects" :key="project.name" >
                <h1>{{ project.name }}</h1>
                <div v-html="formater(project.des)"></div>
                <div><button class="download" @click="OnClickSourceLink(project)">打开网站</button></div>
            </el-carousel-item>
        </el-carousel>
    </el-container>
</template>
<script>
import MainMenu from './MainMenu';
import project from '../config/project';
import marked from 'marked';
export default {
    components : { MainMenu },
    mounted() {
        this.projects = project.projects;
    },
    data() {
        return {
            projects : [],
            currentDate: new Date()
        }
    },
    methods : {
        OnClickTest : function() {
            console.log("1111111111111111111")
        },
        formater : function(des) {
            return des
        },
        OnClickSourceLink : function(project) {
            location.href = "/#/" + project.link + "/"
        }
    }
}
</script>
<style>
@import url("../assets/css/style.css");

.el-carousel {
    margin-top: 100px;
}
.el-carousel__item {
    margin: 0px;
}
.el-carousel__item > h1 {
    color: white;
    font-size: 30px;
}
.el-carousel__item > div {
    color: white;
}
</style>
