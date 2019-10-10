<template>
    <div class ='mvContainer'>
        <video :src="mvurl" autoplay controls></video>
        <div class="top">
            <p>{{da.name}}</p>
            <span class ='fa fa-caret-down' @click ='sho'></span>
        </div>
        <div class="biaoqian">
            <ul class ='o' id ='ul'>
                <p>{{shijian(da.playCount)}}次观看</p>
                <li>简介 : </li>
                <li v-html ='da.desc'></li>
                <li>{{da.publishTime}}发布</li>
            </ul>
            <ul class="caozuo">
                <li>
                    <span class ='fa fa-thumbs-o-up'></span>
                    <p>{{da.likeCount}}</p>
                </li>


                <li>
                    <span class ='fa fa-folder-open-o'></span>
                    <p>{{da.subCount}}</p>
                </li>


                <li>
                    <span class ='fa fa-comments-o'></span>
                    <p>{{da.commentCount}}</p>
                </li>


                <li>
                    <span class ='fa fa-share-alt'></span>
                    <p>{{da.shareCount}}</p>
                </li>
            </ul>
            <div class="user">
                <div class="tx">
                    <img src="" alt="">
                </div>
                <div class="gz">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['mv'])
    },
    data(){
        return {
            mvurl : '',
            da: []
        }
    },
    methods: {
        sho(){
            let ul = document.getElementById('ul')
            if(ul.classList.contains('o')){
                ul.classList.remove('o')
            }else {
                ul.classList.add('o')
            }
        },
        getmvurl(){
            this.$ajax.get('http://140.143.128.100:3000/mv/detail',{
                params:{
                    mvid : this.mv.id
                }
            }).then((res) => {
              this.mvurl =   res.data.data.brs[1080]
              this.da =  res.data.data
              console.log(this.da)
            })
        },
        shijian(time){
            let length =(time+ '').length
            if(length > 4){
                return Math.floor(time / 10000) + '万'
            }else {
                return time
            }
        },
    },
    created(){
        this.getmvurl()
    }
}
</script>

<style lang="less" scoped>
.o {
    overflow:hidden;
     height: 30px;
     transition:all .3s linear;
}
    .mvContainer{
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color: #fff;
        video{
            width: 100%;
            height: 224px;
        }
        .top{
            padding: 0 20px;
            display:flex;
            justify-content: space-between;
            span{
                color:#999;
                font-size:23px;
            }
        }
        .biaoqian{
            padding: 0 20px;
            #ul{
                display:flex;
                flex-wrap:wrap;
               transition:all .3s linear;
                p{
                    color:#999;
                    font-size:13px;
                    margin-top:10px;
                }
                li{
                    min-width: 30px;
                    padding: 0 10px;
                    border-radius:15px;
                    color:#000;
                    font-size:12px;
                    line-height: 20px;
                    margin-left:20px;
                    margin-top:10px;
                }
            }
            .caozuo{
                display:flex;
                justify-content: space-between;
                padding: 0 30px;
                margin-top:20px;
                li{
                    color:#999;
                    p{
                        font-size:12px;
                    }
                    span{
                        font-size:20px;
                    }
                }
            }
        }
    }
</style>