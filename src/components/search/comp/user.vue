<template>
    <div class ='userContainer'>
        <ul>
            <li v-for ='item in user' :key ='item.userId'>
                <div class="img">
                    <img v-lazy="item.avatarUrl" alt="">
                    <span v-show ='item.userType == 2'></span>
                </div>
                <div class="mingbai">
                    <p class ='singer'>{{item.nickname}}</p>
                    <p class ='ququ'>{{item.description}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['user']
}
</script>

<style lang="less" scoped>
    .userContainer{
        padding:20px;
            ul{
                li{
                    margin-top:20px;
                    display:flex;
                    align-items:center;
                    img{
                        width: 50px;
                        height: 50px;
                        border-radius:50%;
                    }
                    .img{
                        position:relative;
                        span{
                        position: absolute;
                        top:17px;
                        right:-7px;
                        height: 33px;
                        width: 21px;
                        background-image: url('https://s2.music.126.net/style/web2/img/icon.png?5ea8759743707a0a86e278cd7ed0d2c5');
                        background-position: -46px 10px;
                        background-repeat: no-repeat;
                        }
                    }
                    .mingbai{
                        margin-left:20px;
                        .singer{
                            font-size:15px;
                        }
                        .ququ{
                            font-size:12px;
                            margin-top:10px;
                            color:#999;
                        }
                    }
                }
            }
    }
</style>