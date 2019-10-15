<template>
    <div class ='singerinfoContainer' >
        <div class="ss"  ref ='bg'>
            <div class="bg" :style ='background'>
            <div class="top" ref ='top' >
                <div class="d">
                    <span class="bk fa fa-arrow-left" @click ='back'></span>
                <span class ='title' ref ='ttt'>{{singer.name}}</span>
                </div>
                <span class="fx fa fa-share-alt"></span>
            </div>
            <div class="center">
                <ul class='one'>
                    <li class ='title'>{{singer.name}}</li>
                    <li>~~~~~~~~~~</li>
                    <li>昵称 {{singer.name}}</li>
                    <li class ='fs'>
                        <span>关注</span>
                        <span>粉丝</span>
                    </li>
                    <li>入驻艺人</li>
                </ul>
                <ul class="two">
                    <li class ='gz'>已关注1天</li>
                    <li>
                        <span class ='gzt'>关注+</span>
                        <span class ='fsx'>发私信</span>
                    </li>
                </ul>
            </div>
            <div class="bottom">
                    <span class ='fa fa-ticket'></span>
                    <div class="centesr">
                        <p>10月19日 【秀动呈献】2019云南抚仙湖演出</p>
                        <p>2019.10.19 玉溪市抚仙湖国际度假小镇湖畔森林公园</p>
                    </div>
            </div>
        </div>
        <div class="content">
            <div class="nav">
                <ul ref ='gq' id ='uls'>
                    <li class ='active' data-id ='1'>主页</li>
                    <li data-id ='2'>歌曲</li>
                    <li data-id ='3'>专辑<small>31</small></li>
                    <li data-id ='4'>视频</li>
                    <li data-id ='5'>动态</li>
                </ul>
                <div class="ref" ref='list'>
                    <v-gequ :list = 'guqulist'></v-gequ>
                </div>
            </div>
        </div>
        <div class="xinxi">
            <p>基本信息</p>
            <ul>
                <li>昵称: {{singer.name}}</li>
                <li class ='jj'>简介: {{miaoshu.briefDesc}}</li>
            </ul>
            <p>更多信息 > </p>
        </div>
        <div class="cj">
            <div class="diantai">
                <p>{{singer.name}}创建的电台</p>
                <ul>
                    <li v-show ='dj.length == 0'>电台空空的~</li>
                    <li v-for ='list in dj' :key ='list.id'>
                        <img v-lazy="list.coverUrl">
                        <p>{{list.name}}</p>
                    </li>
                </ul>
            </div>
            <div class="gedan">
                <p>{{singer.name}}创建的歌单</p>
                <ul>
                    <li v-for ='item in gedan' :key ='item.id'>
                        <img v-lazy="item.coverImgUrl" alt="">
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import vGequ from '../../common/gequ'
export default {
    components:{vGequ},
    data(){
        return {
            guqulist : [],
            dj:[],
            miaoshu : [],
            gedan:[],
            scrolltop: 0 
        }
    },
    computed: {
        ...mapGetters(['singer']),
        background(){
            return `background-image:url('${this.singer.img1v1Url}')`
        }
    },
    methods: {
        getdanqu(){
            this.$ajax.get('http://140.143.128.100:3000/artists',{
                params:{
                    id:this.singer.id,
                    limit:5
                }
            }).then((res) => {
                let arr =res.data.hotSongs
                for(let i =0;i<arr.length;i++){
                    if(i<5){
                        this.guqulist.push(arr[i])
                    }
                }
            })
        },
        getmiaoshu () {
            this.$ajax.get('http://140.143.128.100:3000/artist/desc',{
                params:{
                    id:this.singer.id
                }
            }).then((res) => {
              this.miaoshu =  res.data
            })
        },
        getuserinfo(){
            this.$ajax.get('http://140.143.128.100:3000/user/dj',{
                params:{
                    uid:this.singer.accountId
                }
            }).then((res) =>{
                this.dj = res.data.programs
            })
        },
        getusergedan(){
            this.$ajax.get('http://140.143.128.100:3000/user/playlist',{
                params:{
                    uid:this.singer.accountId
                }
            }).then((res) => {
                this.gedan = res.data.playlist
            })
        },
        back(){
            this.$router.back()
        },

        xianshi(){
                let ul = document.getElementById('uls')
                let li = ul.children
                let that =this
                for(let i =0;i<li.length;i++){
                    li[i].addEventListener('click',function(){
                        console.log(this)
                        for(let j =0;j<li.length;j++){
                            console.log(111)
                            li[j].classList.remove('active')
                        }
                        this.classList.add('active')
                    })
                }
        },
    },
    created(){
        this.getdanqu()
        this.getmiaoshu()
        this.getuserinfo()
        this.getusergedan()
    },
    mounted(){
        this.xianshi()
window.onscroll =  ()=> {
var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(scroll >= 249){
        this.$refs.ttt.style.display = 'block'
        this.$refs.top.style.color = '#000'
        this.$refs.top.style.background = '#fff'
         this.$refs.top.style.transition = 'all .5s ease'
    }else {
    }
    if(scroll <= 10){
this.$refs.top.style.background = 'transparent'
 this.$refs.top.style.color = '#999'
   this.$refs.ttt.style.display = 'none'
   this.$refs.top.style.transition = 'all .5s ease'
    }
    if(scroll >= 266){
        this.$refs.gq.style.position = 'fixed'
        this.$refs.gq.style.top = '60px'
        this.$refs.list.style.marginTop ='35px'
    }else {
         this.$refs.gq.style.position = 'static'
        this.$refs.gq.style.top = '0'
        this.$refs.list.style.marginTop = '0'
    }
}
           },
}
</script>

<style lang="less" scoped>
.jj{
        display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
    -webkit-box-orient: vertical;
}
     .singerinfoContainer{
         position:absolute;
         top:0;
         left:0;
         right:0;
         bottom:0;
         background-color: #fff;
         z-index: 10;
         height: 100%;
         .bg{
             width: 100%;
             height: 330px;
             position:relative;
             background-size:100%;
             .top{
                 padding: 20px;
                 font-size:20px;
                 color:#999;
                 display:flex;
                 justify-content: space-between;
                 position:fixed;
                 width: 100%;
                 z-index: 9999;
                 box-sizing: border-box;
                 .d{
                     display:flex;
                     .bk{
                         margin-right:20px;
                     }
                 }

                 .title {
                     display:none;
                 }
             }
             .center{
                 position: absolute;;
                 bottom: 70px;
                 color:rgb(166, 166, 167);
                 font-size:12px;
                 display:flex;
                 justify-content: space-between;
                 width: 100%;
                 padding:0 20px;
                 box-sizing: border-box;
                 ul{
                     li{
                         padding: 5px 0;
                     }
                      .title{
                             font-size:14px;
                             color:#fff;
                         }
                         .fs {
                             span{
                                width: 50px;
                                text-align:center;
                             }
                             span:first-child{
                                 padding-right: 10px;
                                border-right:1px solid rgb(166, 166, 167)
                             }
                             span:last-child{
                                padding-left: 10px;
                             }
                         }
                 }
                 .two{
                     margin-top: 70px;
                     .gz{
                         text-align: right;
                         font-size:12px;
                     }
                     li{
                         .gzt{
                             width: 50px;
                             
                         }
                         span{
                             line-height: 30px;
                             background-color: rgba(200, 200, 221,.5);
                             color:#fff;
                             text-align: center;
                             display: inline-block;
                             border-radius:15px;
                         }
                         .fsx{
                             width: 70px;
                         }
                     }
                 }

             }
             .bottom{
                     height: 60px;
                     position:absolute;
                     bottom: 0px;
                     background-color: #fff;
                     opacity:.5;
                     width: 100%;
                     display:flex;
                     span{
                         padding-top: 20px;
                         color:rgb(255,68,68);
                         font-size:20px;
                         margin-left: 20px;
                     }
                     .centesr{
                         font-size:12px;
                         color:#999;
                         padding:15px;
                     }
                 }
         }
         .content{
             .nav{
                 background-color: #fff;
                 ul{
                     display:flex;
                     justify-content: space-between;
                     line-height: 30px;
                     padding: 0 10px;
                     border-bottom:1px solid rgb(230, 230, 230);
                     font-size: 12px;
                     width: 100%;
                     background: #fff;
                     box-sizing: border-box;
                     li{
                        
                     }
                     li.active{
                         color:rgb(255,68,68);
                         border-bottom:2px solid rgb(255,68,68);
                     }
                 }
             }
         }
         .xinxi{
             background-color: #fff;
             margin-top: 20px;
             padding: 0 20px;
             ul{
                 margin-top:20px;
                 li{
                     font-size:12px;
                     color:#999;
                     line-height: 20px;
                 }
             }
             p:last-child{
    text-align: center;
    margin: 15px;
    color: #000;
    font-size: 13px;
             }
         }
         .cj{
             padding: 0 20px;
             background-color: #fff;
             .diantai{
                 margin: 15px 0;
                 ul{
                     margin-top: 15px;
                     li{
                         display:flex;
                         align-items:center;
                         color:#888;
                         img{
                             width: 70px;
                             height: 70px;
                             margin-right: 15px;
                         }
                     }
                 }
             }
             .gedan{
                 ul{
                     margin-top: 15px;
                     li{
                         display:flex;
                         align-items:center;
                         color:#888;
                         img{
                             width: 70px;
                             height: 70px;
                             margin-right:15px;
                         }
                     }
                 }
             }
         }
     }
</style>