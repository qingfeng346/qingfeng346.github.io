<template>
    <ul class="menu">
        <li><router-link to="/sco/">首页</router-link></li>
        <li><router-link to="/sco/changelog">更新日志</router-link></li>
        <li><router-link to="/sco/releasenote">版本日志</router-link></li>
        <li><router-link to="/sco/about">关于</router-link></li>
    </ul>
</template>
<script>
export default {
    
}
</script>
<style>
.menu {
    font-family:'Hiragino Sans GB', 'Segoe UI', 'Sans-serif', 'Microsoft Yahei', Arial, sans-serif;
    font-size: 18px;
    float: left;
}
.menu li {
    list-style: none;
    float: left;
    margin-right: 30px;
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
</style>

