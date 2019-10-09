<template>
    <div class ='findContainer'>
        <!--轮播图区域-->
        <v-swiper></v-swiper>
        <!-- 分类区块 -->
        <div class="fenlei">
            <ul>
                <router-link to ='/mrtj' tag ='li'>
                    <p>
                        <span class = 'fa fa-calendar-o'></span>
                    </p>
                    <p>每日推荐</p>
                </router-link>

                 <li>
                    <p>
                        <span class = 'fa fa-music'></span>
                    </p>
                    <p>歌单</p>
                </li>

                 <router-link to ='/toplist' tag ='li'>
                    <p>
                        <span class = 'fa fa-list-ol'></span>
                    </p>
                    <p>排行榜</p>
                </router-link>

                 <li>
                    <p>
                        <span class = 'fa fa-tv'></span>
                    </p>
                    <p>视频</p>
                </li>

                 <li>
                    <p>
                        <span class = 'fa fa-podcast'></span>
                    </p>
                    <p>电台</p>
                </li>
            </ul>
        </div>
        <v-recommend :title ='title' :result ='result' :smalltitle ='smalltitle'></v-recommend>

        <v-recommend :result ='result2' @cld ='cld' :title ='title2' :smalltitle = 'smalltitle2'></v-recommend>

        <v-tjmv></v-tjmv>
    </div>
</template>

<script>
import vSwiper from './swiper'
import vRecommend from './Recommend'
import vTjmv from './tjmv'
export default {
    data(){
        return {
            title : '推荐歌单',
            smalltitle:'歌单广场',
            result:[],
            smalltitle2:'更多新碟',
            title2: '<p style ="font-size:15px; color:#999;"><span data-id = "1" class ="tj font">新碟</span> <span data-id = "2"  class ="new">新歌</span> </p>',
            result2:[]
            }
    },
    methods: {
                getgedan(){
            this.$ajax.get('http://140.143.128.100:3000/personalized',{
                params:{
                    limit:6
                }
            }).then((res) => {
                this.result = res.data.result
            })
        },
        cld(i){
            
           if(i == 0){
               this.result2 = []
               this.$ajax.get('http://140.143.128.100:3000/top/album',{
                   params:{
                       limit:3
                   }
               }).then((res) => {
                   this.result2 = res.data.albums
               })
               this.smalltitle2 = '更多新碟'
           }else if(i == 1) {
              this.$ajax.get('http://140.143.128.100:3000/top/song',{
                    params:{
                        type:0
                    }
                }).then((res) => {
                    let data = res.data.data
                    this.result2 = []
                    for(let i =0;i<data.length;i++){

                        if(i <= 2){
                            let as = []
                            as.push(data[i])
                            for(let j = 0;j<as.length;j++){
                                let arr = {
                                    id : data[i].id,
                                    picUrl : data[i].album.picUrl,
                                    name : data[i].name
                                }
                                this.result2.push(arr)
                            }
                            
                        }
                    }
                })
                this.smalltitle2 = '更多新歌'
           } 
        },
        clds(){
            this.$ajax.get('http://140.143.128.100:3000/top/album',{
                   params:{
                       limit:3
                   }
               }).then((res) => {
                   this.result2 = res.data.albums
               })
        }
    },
    created(){
        this.getgedan()
        this.clds()
    },
    components:{vSwiper,vRecommend,vTjmv}
}
</script>

<style lang="less" scoped>
    .findContainer{

    }

    .fenlei{
        margin-top: 20px;
        border-bottom:1px solid rgb(230,230,230);
        padding-bottom:20px;
        ul{
            display: flex;

            li{
                width: 25%;
                text-align: center;
                line-height: 40px;
                span{
                    width: 50px;
                    height: 50px;
                    background: #ff1d12;
                    color: #fff;
                    border-radius: 50%;
                    line-height: 50px;
                    text-align: center;
                    font-size: 20px;
                }
                p{
                    font-size:12px;
                }
            }
        }
    }
</style>