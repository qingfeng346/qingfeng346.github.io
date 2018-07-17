<template>
    <ul class="menu">
        <li><a href="/">首页</a></li>
        <li><a href="/projects">项目</a></li>
        <li><a href="/about">关于</a></li>
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

