<template>
    <div class ='headerContainer'>
        <ul>
            <li><span class ='fa fa-navicon'></span></li>
            <router-link tag ='li' to="/My">我的</router-link>
            <router-link tag ='li' to="/find">发现</router-link> 
            <router-link tag ='li' to="/yuncun">电台</router-link>
            <router-link tag ='li' to="/video">视频</router-link>
            <li><span class ='fa fa-plus'></span></li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'header'
}
</script>
<style lang="less">
.router-link-active{
    color:#000;
}
    .headerContainer{
        height: 70px;
        ul{
            height: 100%;
            display:flex;
            font-size:15px;
            align-items:center;
            justify-content:space-between;
            color:rgb(177,177,177);
            }
            li{
                width: 25%;
                text-align:center;
            }
    }
</style>