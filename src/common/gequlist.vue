<template>
    <div class ='gequlistContainer'>
          <div class="to to2" id ='tonav'>
                        <div class ='vleft'>
                            <span class ='play fa fa-play-circle-o'></span>
                            <span>播放全部 <small>(共{{list.length}}首歌)</small></span>
                        </div>
                        <div class="vright">
                            <span class ='fa fa-plus'></span>
                            收藏(23.3万)
                        </div>
                    </div>
        <v-scroll ref= 'wwww' :data ='list' @scroll ='scroll'>
            
            <div class="wrappers" ref ='wrp'>
                <div class="contents" ref ='cont'>
                     <div class="to">
                        <div class ='vleft'>
                            <span class ='play fa fa-play-circle-o'></span>
                            <span>播放全部 <small>(共{{list.length}}首歌)</small></span>
                        </div>
                        <div class="vright">
                            <span class ='fa fa-plus'></span>
                            收藏(23.3万)
                        </div>
                    </div>

                  
                    <div class="lists">
                        <ul>
                            <li @click ='gogogo(item,index)' v-for ='(item,index) in list' :key ='item.id'>
                                   <div class="name">
                                       <p class ='gequname'>{{item.name}}</p>
                                       <p class ='singername'>{{item.ar[0].name}}</p>
                                   </div>
                                <p class="pright">
                                    <span class ='video fa fa-youtube-play'></span>
                                    <span class ='gengduo fa fa-ellipsis-v'></span>
                                </p>
                            </li>
                        </ul>

                        
                    </div>
                </div>
            </div>
        </v-scroll>
    </div>
</template>

<script>
import vScroll from './scroll'
import {createSong} from './js/Song'
import {mapActions,mapGetters} from 'vuex'
export default {
    props:['list'],
    data(){
        return {
         arr:[],
         lis:[]
        }
    },
    components:{vScroll},
   methods: {
       gogogo(item,index){
          let arr = this.list
          for(let i =0;i<arr.length;i++){
              this.lis.push(createSong(arr[i]))
          }
          console.log(this.lis)
          this.selectplay({
              list : this.lis,
              index : index
          })
       },
       scroll(obj){
           if(obj.y > -274){
                let tonav = document.getElementById('tonav')
               tonav.style.transform = 'translateY(-100%)'
               tonav.style.opacity = 0
           }  
           if(obj.y < -274){
               let tonav = document.getElementById('tonav')
               tonav.style.transform = 'translateY(0)'
               tonav.style.opacity = 1
           }
       },
      ...mapActions(['selectplay'])
   },
   computed : {
       ...mapGetters(['playlist'])
   },
   mounted(){
        setTimeout(() => {
        this.$refs.wwww._initScroll()
      }, 200)
   },
}
</script>

<style lang="less">
.to2 {
position: fixed;
top: 0;
background: #eee;
width: 100%;
border: 0;
border-radius: 0;
transform: translateY(-100%);
z-index: 999;
transition:all .5s ease;
opacity:0;
}
 .to{
                    height:40px;
                    display:flex;
                    justify-content:space-between;
                    align-items: center;
                    border-radius:20px;
                    background-color: #fff;
                    border-bottom-left-radius: 0px;
                    border-bottom-right-radius: 0px;
                    .vleft{
                    padding-left:20px;
                    font-size:13px;
                    line-height: 40px;
                    .play{
                        font-size:30px;
                        float:left;
                        margin-right: 10px;
                        margin-top:5px;
                    }
                    small{
                        font-size:13px;
                        color:#999;
                    }
                    }
                    .vright{
                        height: 30px;
                        min-width: 50px;
                        padding:0 10px;
                        background-color: rgb(255,58,58);
                        color:#fff;
                        border-radius:30px 30px;
                        text-align:center;
                        font-size:13px;
                        line-height: 30px;
                        margin-right: 5px;
                    }
                }
    .gequlistContainer{
        position:absolute;
        z-index:1000;
        width: 100%;
        .wrappers{
            position: absolute;
            width: 100%;
            .contents{
                width: 100%;
  
                .lists{
                    background-color: #fff;
                    ul{
                        li{
                            display:flex;
                            justify-content:space-between;
                            padding: 0 20px;
                            font-size:14px;
                            color:#999;
                            height: 50px;
                            align-items:center;
                            .name{
                                .gequname{
                                    font-size:13px;
                                }
                                .singername{
                                    font-size:12px;
                                    padding-top: 5px;
                                }
                            }
                        .pright{
                            font-size:20px;
                            .gengduo{
                                padding-left:10px;
                            }
                        }
                        }
                    }
                }
            }
        }
    }
</style>