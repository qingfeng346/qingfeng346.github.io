<template>
    <el-container style="height: 100%" class="page-header">
        <el-header><MainMenu></MainMenu></el-header>
        <el-carousel :interval="4000" type="card" height="500px" indicator-position="outside" @click="OnClickTest">
            <el-carousel-item v-for="item in 6" :key="item" >
                <h3>{{ item }}</h3>
                <h1>ffffffffffffffffffff</h1>
                <div>fewafaewfaewfaewfawefwaefwaef</div>
            </el-carousel-item>
        </el-carousel>
    </el-container>
</template>
<script>
import MainMenu from './MainMenu';
export default {
    components : { MainMenu },
    mounted() {
        //this.projects = project.projects;
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
        }
    }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
