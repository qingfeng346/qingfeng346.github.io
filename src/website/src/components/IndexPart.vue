<template>
    <el-container>
        <h1>22222222222222</h1>
        <el-col :span="4" v-for="project in projects" :key="project.name" style="margin: 0px 10px 20px">
            <el-card :body-style="{ padding: '0px' }">
                <img src="/static/projects/com.scorpio.agileman/icon.png" class="image">
                <div style="padding: 14px;">
                    <span>{{ project.name }}</span>
                    <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-container>
</template>
<script>
import project from '../config/project';
export default {
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
        
    }
}
</script>
<style>
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
