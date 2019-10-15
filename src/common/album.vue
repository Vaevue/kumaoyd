<template>
    <div class ='albumContainer'>
      <div class="ss">
           <div class="bg"></div>
      </div>
        <div class="nn">
            <div class="top" ref ='tops'>
            <div class="let" style ='display:flex;'>
                <span class = 'fa fa-arrow-left' @click ='fanhui'></span>
                <span ref ='ttts'>专辑</span>
            </div>
            <span class ='fa fa-share-alt'></span>
        </div>
        <div class="cd">
            <img :src="album.list.picUrl">
            <div class="right">
                   <div class="rtop">
                     <p>{{album.list.name}}</p>
                    <p>{{album.list.artists[0].name}}</p>
                   </div>
                   <div class="rbottom">
                       <p>发行时间:{{time(album.list.publishTime)}}</p>
                       <p>2018年许嵩发表最新专辑寻宝游戏</p>
                   </div>
                    
            </div>
        </div>
        <ul>
            <li>
                <span class ='fa fa-comment-o'></span>
            </li>
            <li>
                <span class ='fa fa-download'></span>
            </li>
            <li>
                <span class ='fa fa-share-alt'></span>
            </li>
        </ul>
        </div>
        <div class="gequ">
            <div class="lis" ref ='gqs'>
                <div class="left" > <span class ='fa fa-play-circle'></span> 播放全部</div>
            </div>
            <div class="l" ref ='lists'>
                <v-gequ  :list ='songs'></v-gequ>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import vGequ from './gequ'
export default {
    props:['songs'],
    components:{vGequ},
    computed: {
        ...mapGetters(['album'])
    },
    data(){
        return {
            albums:[]
        }
    },
    methods: {
        time(value){
            let date = new Date(value);
                    let y = date.getFullYear();// 年
                    let MM = date.getMonth() + 1;// 月
                    MM = MM < 10 ? ('0' + MM) : MM;
                    let d = date.getDate();// 日
                    d = d < 10 ? ('0' + d) : d;
                    return y + '-' + MM + '-' + d 
        },
    fanhui(){
        this.$emit('fff')
        console.log(111)
    }
    },
    created(){
        this.getlist()
    },
    mounted(){
        window.onscroll =  ()=> {
var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(scroll >= 188){
        this.$refs.ttt.style.display = 'block'
        this.$refs.top.style.color = '#000'
        this.$refs.top.style.transition = 'all .5s ease'
        this.$refs.top.style.background = '#fff'
    }else {
    }
    console.log(scroll)
    if(scroll <= 10){
this.$refs.tops.style.background = 'transparent'
 this.$refs.tops.style.color = '#999'
   this.$refs.tops.style.transition = 'all .5s ease'
    }
    if(scroll >= 188){
        this.$refs.gqs.style.position = 'fixed'
        this.$refs.gqs.style.zIndex ='99'
        this.$refs.gqs.style.top = '30px'
        this.$refs.lists.style.marginTop ='35px'
        console.log()
         this.$refs.ttts.innerTEXT =`${this.album.list.name}`
    }else {
         this.$refs.gqs.style.position = 'static'
        this.$refs.gqs.style.top = '0'
        this.$refs.lists.style.marginTop = '0'
        this.$refs.ttts.style.innerTEXT ='专辑'
    }
}
    },
}
</script>

<style lang="less" scoped>
.gequ{
    margin-top: 220px;
    background-color: #fff;
    
    .lis{
    height: 50px;
    line-height: 50px;
    padding-left: 17px;
    color: #000;
    background: #fff;
    border-radius: 15px;
    color: #31c27c;
    width: 100%;
    }
}
    .albumContainer{
        background:#fff;
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index: 99999;
        .nn{
            position:absolute;
            width: 100%;
            z-index: 100;
        }
        .bg{
            position:absolute;
            top:0;
            height: 200px;
            width: 100%;
            background-image: url('https://p2.music.126.net/BUFZLieG5a6E3ZVpkHP6fA==/109951163402069754.jpg');
            background-repeat:no-repeat;
            background-size:cover;
            filter: blur(50px);
            background-position-y: -143px;
        }
        .top{
            color:#999;
            display: flex;
            height: 30px;
            justify-content: space-between;
            align-items:center;
            padding: 0 20px;
            position: fixed;
    width: 100%;
    box-sizing: border-box;
        }
        .cd{
            display:flex;
            font-size:12px;
            margin: 50px;
            margin-bottom:10px;
            color:#aaa;
            img{
                min-width: 100px;
                height: 100px;
                display:block;
            }
            .right{
                margin-left: 20px;
                .rtop{
                    margin-bottom:20px;
                    font-size: 14px;
                    color:#f5f5f5;
                }
                p{
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                }
            }
        }
        ul{
            display:flex;
            justify-content: space-between;
            height: 30px;
            align-items:center;
            color:#fff;
            padding:0 20px;
            font-size:20px;
        }
        }
</style>