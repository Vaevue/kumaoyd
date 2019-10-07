<template>
    <transition name ='plear' >
    <div class ='plearContainer' v-show="playlist.length>0">
        <div class="bigplear" v-show = 'plflag'>
            <div class="topa">
                <span class="back fa fa-chevron-down" @click ='back(playcontent)'></span>
                <div class="name">
<!--                     <p class="gequname">{{currentSong.songname}}</p>
                    <p class="singername">{{currentSong.singername}}</p> -->
                    <p class="gequname">有何不可</p>
                    <p class="singername">许嵩</p>
                </div>
            </div>
            <div class="cd">
                <div class="bg">
                    <!-- <img :src="currentSong.img"> -->
                    <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1535363264,1263399125&fm=179&app=42&f=JPEG?w=300&h=300">
                </div>
            </div>
        </div>
        <div class="smallplear" v-show ='!plflag' @click ='open'>
            小播放器
        </div>
        <!-- <audio :src="currentSong.url" ref ='audio' autoplay></audio> -->
    </div>
    
    </transition>
</template>  

<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
    computed: {
        ...mapGetters(['playcontent','playlist','currentSong','playing']),
        
    },
    data(){
        return {
            plflag : true
        }
    },
    methods:{
        back(playcontent){
            this.plflag = false
        },
        open(){
            this.plflag = true
        }
    },
    mounted(){
        console.log(this.playcontent)
    },
    watch:{
      
    }
}
</script>

<style lang="less">
.plear-enter,
.plear-leave-to {
    transform: scale(1);
}

.plear-enter-active,
.plear-leave-active{
    transition: all .5s ease;
}
    .plearContainer{
           
            .bigplear{
                 position:fixed;
            top:0;
            left:0;
            right:0;
            bottom:0;
            z-index: 1000;
            background-color: #eee;
                .topa{
                    display:flex;
                    align-items:center;
                    height:50px;
                    padding:0 20px;
                    span{
                        font-size:30px;
                        color:#31c27c;
                    }
                    .name{
                        position:absolute;
                        left:50%;
                        transform:translateX(-50%);
                        p{
                            line-height:20px;
                            text-align:center;

                        }
                         .singername {
                                font-size:13px;
                                color:#999;
                                margin-top:5px;
                            }
                    }
                }
                .cd {
                    .bg {
                        img {
                            height: 300px;
                            width: 300px;
                            border-radius: 50%;
                            margin: 50px auto;
                            display: block;
                            animation:rotate 20s linear infinite;
                        }
                    }
                }
            }
            .smallplear{
height: 50px;
position: fixed;
bottom: 0;
            }
    }

  @keyframes rotate{
      form{
          transform: rotate(0)
      }
      to{
          transform: rotate(360deg)
      }
  }
</style>