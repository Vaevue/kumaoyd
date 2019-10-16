<template>
    <div class ='ffjxContainer'>
       <div class="top">
            <span class ='fa fa-arrow-left'></span>
        付费精品
       </div>
       <div class="cont">
           <ul>
               <li>
                   <img src="https://p2.music.126.net/9HtWLExzL3foUEABILecog==/109951163287033746.jpg" alt="">
                   <div class="right">
                       <p class="name">听歌学英文</p>
                       <p class="jieshao">【完结】Story - 主讲老师：兴东Ollie（附获奖名单）</p>
                       <p class="money">￥28</p>
                   </div>
               </li>
           </ul>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            page:1
        }
    },
    methods: {
        getffjp () {
            this.$ajax.get('http://140.143.128.100:3000/dj/paygift',{
                params:{
                    limit: 20 ,
                    offset : this.page * 20
                }
            }).then((res) => {
                console.log(res.data.data.list)
            })
        }
    },
    created() {
        this.getffjp()
    },
}
</script>

<style lang="less" scoped>
    .ffjxContainer{
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #fff;
        top: 0;
        padding: 0 20px;
        .cont{
            ul{
                li{
                    display:flex;
                    margin-top: 20px;
                    img{
                        width: 150px;
                        height: 200px;
                    }
                    .right{}
                    
                }
            }
        }
    }
</style>