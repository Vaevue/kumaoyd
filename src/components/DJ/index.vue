<template>
    <div class ='djContainer'>
        <!-- 轮播i图 -->
        <div class="swiper">
               <mt-swipe :auto="4000">  
    <mt-swipe-item v-for ='(item,index) in banners' :key = 'index'>
            <img :src="item.pic">
    </mt-swipe-item>  
    </mt-swipe> 
        </div>
        <!-- 分类列表 -->
       <div class="fl">
            <ul>
            <li @click ='flinfo'>
                <span class ='fa fa-navicon'></span>
                <p>电台分类</p>
            </li>
            
            <li>
                <span class ='fa fa-signal'></span>
                <p>电台排行</p>
            </li>
            
            <li @click ='fff'>
                <span class ='fa fa-rmb'></span>
                <p>付费精品</p>
            </li>
            
            <li>
                <span class ='fa fa-book'></span>
                <p>主播学院</p>
            </li>
        </ul>
       </div>
       <!-- 推荐电台 -->
       <div class="tjdt">
           <v-recommend :result ='list' :title ='title' :smalltitle ='smalltitle'></v-recommend>
       </div>
       <!-- 热门电台 -->
       <div class="jm">
           <v-recommend :result ='hot' :title ='"热门电台"'></v-recommend>
       </div>

       <!-- 电台分类 -->
       <div class="dtfl" v-show ='itee'>
            <v-info @fldj ='flsjinof'></v-info>
       </div>

       <!-- 付费精选 -->
       <div class="ffjx" v-show ='itww'>
            <v-ff @fh ='ff'></v-ff>
       </div>
    </div>
</template>

<script>
import vInfo from './components/dtinfo'
import vRecommend from '../find/Recommend'
import vFf from './components/ffjx'
export default {
    // http://140.143.128.100:3000
    components:{vRecommend,vInfo,vFf},
    data(){
        return {
            banners: [],
            list:[],
            title:[],
            smalltitle : '换一换',
            hot : [],
            itee:false,
            itww : false
        }
    },
    methods: {
        ff(){
            this.fff()
        },
        flinfo(){
            this.itee = !this.itee
        },
        fff(){
            this.itww = !this.itww
        },
        getbanner(){
            this.$ajax.get('http://140.143.128.100:3000/dj/banner').then((res) => {
             this.banners =  res.data.data
            })
        },
      gettjdt(){
          this.$ajax.get('http://140.143.128.100:3000/dj/recommend',{
              params:{
                  limit:6
              }
          }).then((res)=>{
              for(let i =0,len=res.data.djRadios;i<len.length;i++){
                    if(i<9){
                        this.list.push(len[i])
                    }
              }
           this.title =  res.data.name
          })
      },
      flsjinof(item){
          console.log(1110)
          console.log(item)
          this.flinfo()
          this.$ajax.get('http://140.143.128.100:3000/dj/recommend/type',{
              params:{
                  type:item.id
              }
          }).then((res) => {
              this.list = []
                for(let i =0,len=res.data.djRadios;i<len.length;i++){
                    if(i<9){
                        this.list.push(len[i])
                    }
              }
          })
      },
      getjiemu(){
          this.$ajax.get('http://140.143.128.100:3000/dj/hot').then((res)=>{
              this.hot = res.data.djRadios
          })
      },
    },
    created(){
        this.gettjdt()
        this.getjiemu()
        this.getbanner()
    }
}
</script>

<style lang="less" scoped>
.swiper{
    height: 200px;
    img{
    height: 150px;
    width:95%;
    margin:0 auto;
    display: block;
    border-radius:10px;
}
.swiperContainer{
    height: 150px;
}
}
    .djContainer{
        background: #eee;
        .fl{
            margin-top: 20px;
            padding: 0 20px;
            ul{
                display:flex;
                justify-content: space-between;
                height: 50px;
                align-items:center;
                text-align:center;
                li{
                    span{
                        height: 30px;
                        width: 30px;
                        border-radius: 50%;
                        background-color: rgb(255,52,38);
                        color:#fff;
                        line-height: 30px;
                        margin: 0 auto;
                        margin-bottom: 5px;
                        display: block;
                    }
                    p{
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>