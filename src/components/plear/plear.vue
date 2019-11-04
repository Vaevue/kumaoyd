<template>
 
        <transition name ='plear' >
    <div class ='plearContainer'>
        <div class="bigplear" v-show = 'plflag'>
            <div class="bgc" :style="background()"></div>
            <div class="topa">
                <span class="back fa fa-chevron-down" @click ='back(playcontent)'></span>
                <div class="name">
                    <p class="gequname">{{currentSong.songname}}</p>
                    <p class="singername">{{currentSong.singername}}</p>
                </div>
            </div>
            <div class="cd">
                <div class="bg">
                    <img :src="currentSong.img">
                    
                </div>
            </div>

            <div class="geci">
                <p>{{text}}</p>
            </div>

            <div class="xian">
                <span class ='newtime'>{{currentTime}}</span>
                <div @click='gonewtime' class="old" ref ='oldtime'></div>
                <div class="new" ref ='newtime'></div>
                <span class ='oldtime' >{{zgtim}}</span>
            </div>

            <div class="caozuo">
                <span class ='prev fa fa-step-backward' @click ='prev'></span>
                <span :class ='playicon()' @click ='play'></span>
                <span class ='next fa fa-step-forward' @click ='next'></span>
            </div>

            <div class="gongn">
                <span :class ='iconfont' @click ='chanicon'></span>
                <span class ='mv fa fa-youtube-play'></span>
                <span @click ='pl' class ="pl fa fa-commenting-o"></span>
            </div>
        </div>
        <div class="smallplear" v-show ='!plflag' @click ='open'>
            <div class="img">
                <img :src="currentSong.img">
                <div class="next" @click.stop ='next'>
                    <span class ='fa fa-step-forward'></span>
                </div>
                <div class="pl">
                    <span :class ='playicon()' @click.stop ='play'></span>
                </div>
                <div class="prev" @click.stop ='prev'>
                    <span class ='fa fa-step-backward'></span>
                </div>
            </div>
            
        </div>
        <audio :src="currentSong.url" ref ='audio' @play ='ready' autoplay   @timeupdate="upd" @ended="end" @error ='error' ></audio>
    </div>
    
    </transition>
 
</template>  

<script>
import {mapGetters,mapMutations} from 'vuex'
import modes from '../../common/js/mode.js'
import {daluan} from '../../common/js/unli.js'
import Lyric from 'lyric-parser'
export default {
    computed: {
        ...mapGetters(['playcontent','playlist','currentSong','playing','current','mode','playlist']),
        toppwidth (){
            return this.nltime / this.oltime
        },
        iconfont(){
            return this.mode === modes.random ? 'bf fa fa-random' : this.mode === modes.selectplay ? 'bf fa fa-reorder ' : 'bf fa fa-retweet'
        }
    },
    data(){
        return {
            plflag : true,
            currentboole : false,
            currentTime : 0,
            zgtim : 0,
            currentLyric :null,
            ggeci : '',
            geci : '',
            text:'',
            nltime:'',
            oltime:'',
            newid : '',
            oldid : '',
            timer:''
        }
    },
    methods:{
        play(){ 
           this.toogleplay()
        },
        toogleplay(){
            this.setplaying(!this.playing)
            if(!this.playing){
                this.ggeci.stop()
            }else {
                this.ggeci.play()
            }
        },
        ready(){
            this.currentboole = true
        },
        chanicon(){
            const mode = (this.mode+1)%3
            this.setmode(mode)

            let list = null 

            if(mode === modes.random){
                list = daluan(this.playlist)
            }else {
                list = this.playlist
            }

            this.randomlist(list)
            this.setplaylist(list)


        },
        end(){
            console.log(this.mode ===0)
            if(this.mode === 0){
                this.loop()
            }else {
                this.next()
            }
        },
        error(){
            this.next()
        },
        prev(){
            
            if(!this.currentboole){
                return 
            }

            let index = this.current -1
            if(index === -1){
                index = this.playlist.length - 1
            }
            if(this.playlist.length == 1){
                this.loop()
            }
            this.setcurrent(index)
            this.currentboole = false
        },
        loop(){
            console.log(111)
            this.$refs.audio.currentTime = 0
            this.$refs.audio.play()
            this.setplaying(true)
            if(this.ggeci){
                this.ggeci.seek(0)
            }
        },
        next(){
            if(!this.currentboole){
                return 
            }
            if(this.playlist.length == 1){
                this.loop()
            }
            let index = this.current + 1

            if(index === this.playlist.length){
                index === 0
            }

            this.setcurrent(index)
            this.currentboole = false

        },
        randomlist(list){
            list.forEach((item)=>{
                return item.id === this.currentSong.id
            })
        },
         background(){
            return `background-image:url(${this.currentSong.img})`
        },
        back(playcontent){
            this.plflag = false
        },
        open(){
            this.plflag = true
        },
        playicon(){
            if(this.playing){
                return 'go fa fa-pause'
            }else {
                return 'go fa fa-play'
            }
        },
        gonewtime(e){
            let newxian = this.$refs.newtime.getBoundingClientRect()
            let width = e.pageX - newxian.left
            this.$refs.newtime.style.width = `${width}px`
            this.tooglepreve()
            this.newbar(width)
            if(!this.playing){
                this.toogleplay()
            }
        },
        pl(){
            this.$router.push('/pl')
        },
        tooglepreve(){
            const barwidth = this.$refs.oldtime.clientWidth
            const preve = this.$refs.newtime.clientWidth / barwidth
            this.onchanche(preve)
        },
         onchanche(preve) {
        const time = this.$refs.audio.duration
        const currenttime = time * preve
        this.$refs.audio.currentTime = currenttime
        if (this.ggeci) {
          this.ggeci.seek(currenttime * 1000)
        }
      },
      newbar(offset){
          this.$refs.newtime.style.width = `${offset}px`
      },
        upd(e){
         this.currentTime = this.timeout(e.target.currentTime)
         this.zgtim = this.timeout(e.target.duration)
         const ctm = e.target.currentTime
         this.nltime = ctm
         this.oltime = e.target.duration
        },
        timeout(result) {	
        var m = Math.floor((result / 60) % 60) < 10 ? '0' + Math.floor((result / 60) % 60) : Math.floor((result / 60) % 60)
        var s = Math.floor(result % 60) < 10 ? '0' + Math.floor(result % 60) : Math.floor(result % 60)
        return `${m}:${s}`
      },
      getlyric(){
          if(this.currentSong.lyric == null) return 
          this.$ajax.get('http://140.143.128.100:3000/lyric',{
              params:{
                  id:this.currentSong.id
              }
          }).then((res) => {
              this.currentSong.lyric = res.data.lrc.lyric
              console.log(this.currentSong)
              if(this.currentSong.lyric !== res.data.lrc.lyric){
                  return
              }
             this.ggeci = new Lyric(res.data.lrc.lyric, this.handleLyric)

             this.geci = this.ggeci.lines
             if(this.playing){
                  this.ggeci.play()
             }
          })
      },
      handleLyric({linenum,txt}){
          this.text = txt
      },
      ...mapMutations({
          setplaying : 'SET_PLAYING',
          setcurrent : 'SET_CURRENT',
          setmode :'SET_MODE',
          setplaylist : 'SET_PLAYLIST'
                })
    },
    mounted(){
        this.getlyric()
    },
    created() {
        this.getlyric()
    },
    watch: {
        toppwidth(newtime){
            const width = this.$refs.oldtime.clientWidth
            const offsetwidth = (newtime * width)
            this.newbar(offsetwidth)
        },
        plflag(newflag){
            if(newflag){
                document.body.style.width = '47%'
            }else {
                document.body.style.width = '100%'
            }
        },
        playing(flag){
            if(flag == false){
                this.$refs.audio.pause()
            }else if (flag == true){
                this.$refs.audio.play()
            }
        },
        currentSong(news,olds){
            this.newid = news.id
            this.oldid = olds.id

            if(!news.id){
                return 
            }

            if(news.id === olds.id){
                return 
            }

            if(this.ggeci){
                this.currentTime = 0
                this.ggeci.stop()
            }

            clearTimeout(this.timer)
            console.log('进来了')
            this.timer = setTimeout(()=>{
                this.$refs.audio.play()
                this.getlyric()
            },1000)
        },
    },
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
            overflow:hidden;
            .bgc{
                height: 100%;
                width: 100%;
                opacity: .9;
                position: absolute;
                filter: blur(24px);
                z-index: -1;
                background-repeat: no-repeat;
                background-size: cover;
            }
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
                                color:#aaddad;
                                margin-top:5px;
                            }
                    }
                }
                .cd {
                    .bg {
                        img {
                            height: 240px;
                            width: 240px;
                            border-radius: 50%;
                            margin: 50px auto;
                            display: block;
                            animation:rotate 20s linear infinite;
                        }
                    }
                }
                .geci{
                    color:#fff;
                    p{
                        font-size: 13px;
                        text-align: center;
                    }
                }
                .xian{
                    color:#fff;
                   width: 70%;
                   height: 3px;
                   margin: 20px auto;
                   .oldtime{
                        float: right;
                        margin-right: -50px;
                        margin-top: -10px;
                   }
                   .newtime{
                       float:left;
                       margin-left: -50px;
                       margin-top:-10px;
                   }
                    .old{
                        height: 3px;
                        background:#fff;
                        width: 70%;
                        position: absolute;
                    }
                    .new{
                        height: 3px;
                        width: 30px;
                        background:#31c27c;
                        position: absolute;
                        z-index: 2;
                    }
                }

                .caozuo{
                     text-align: center;
                     margin-top: 30px;
                    width: 100%;
                    color:#fff;
                    font-size:20px;
                    span{
                        padding:0 20px;
                    }
                }
                .gongn{
                     text-align: center;
                     margin-top: 30px;
                    width: 100%;
                    color:#fff;
                    font-size:20px;
                     span{
                        padding:0 20px;
                    }
                }
            }
            .smallplear{
                    position:fixed;
                    bottom:20px;
                    right:50px;
                    z-index: 9999999999999999999;
                    img{
                        height: 70px;
                        width: 70px;
                        border-radius:50%;
                        animation: rotate 30s linear forwards;
                    }
                    .img{
                        position:relative;
                        div{
                            position:absolute;
                            top:10px;
                            color:#31c27c;
                            font-size:20px;
                        }
                   .next {             
                    left: 84px;
                    top: 19px;
                    }
                    .pl{
                        left: 30px;
                        top: 20px;
                    }
                    .prev{
                    left:-26px;   
                    top:21px;
                    }
                    }
                   
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