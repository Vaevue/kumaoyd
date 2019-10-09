<template>
    <div class ='searchinfoContainer'>
      <v-loading v-show ='info.code != 200'></v-loading>
    <div class="toplist" >
    <div class="select-person">
      <div class="person-wrap" ref="personWrap">
        <ul class="person-list" ref="personTab" id ='ul'>
          <li class="person-item active" data-id ='1018'>综合</li>
          <li class="person-item" data-id ='1'>单曲</li>
          <li class="person-item" data-id ='1014'>视频</li>
          <li class="person-item" data-id = '100'>歌手</li>
          <li class="person-item" data-id ='10'>专辑</li>
          <li class="person-item" data-id ='1000'>歌单</li>
          <li class="person-item" data-id ='1009'>主播电台</li>
          <li class="person-item" data-id ='1002'>用户</li>
        </ul>
      </div>
    </div>
  </div>
            <div class="zonghe" v-show ='types == 1018'>
      <div class="nkngxq">
      <p @click ='itt'>你可能感兴趣</p>
      <ul>
          <li class ='zj' v-if ='info'>
              <img :src="info.album.albums[0].picUrl">
              <div class="name">
                  <p class ='name'>专辑 : {{info.album.albums[0].name}}</p>
                  <p class ='singername'>{{info.album.albums[0].artist.name}}</p>
              </div>
          </li>

          <li class ='singer'>
              <img :src="info.artist.artists[0].img1v1Url" alt="">
              <div class="name">
                  <p class ='singername'>{{info.artist.artists[0].name}}</p>
              </div>
          </li>
      </ul>
  </div>

  <div class="danqu">
    <p style ='font-size:16px;color:#000;'>单曲</p>
    <v-gequlist :list ='infos.song.songs'></v-gequlist>
    <p class ='text'>{{infos.song.moreText}} ></p>
  </div>
  <div class="zhuti">
    <p>主题</p>
    <ul>
      <li v-for ='item in info.talk.talks' :key ='item.talkId'>
          <img :src="item.shareCover.url" alt="">
              <div class="guanz">
                <p class="title">#{{item.talkName}}</p>
                <p>
                  <span class ='aaa'>{{item.follows}}关注</span>
                  <span class ='ttt'>{{item.participations}}参与</span>
                </p>
        </div>
      </li>
    </ul>
    <p class ='text'>{{info.talk.moreText}} > </p>
  </div>

  <div class="gedan">
      <p>歌单</p>
      <ul>
        <li>
          <img :src="info.playList.playLists.coverImgUrl" alt="">
        </li>
        <div class="shuom">
            <p class="title">{{info.playList.playLists.name}}</p>
            <p class="jieshao">{{info.playList.playLists.description}}</p>
        </div>
      </ul>
  </div>
  </div>
          </div>
</template>

<script>
import BScroll from "better-scroll";
import vGequlist from '../../common/gequ'
import vLoading from '../../common/loading'
import vScroll from '../../common/scroll'
export default {
    props:['infos'],
    components:{vGequlist,vLoading,vScroll},
    data(){
        return {
            types:1018,
            info : this.infos,
            firstalb: [],
            fff : false
        }
    },
    methods:{
        itt(){
            console.log(this.infos)
            console.log(this.info)
        },
         personScroll() {
      this.$nextTick(() => {
        
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.personWrap, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh()
        }
      })
         },
        getitem(){
          if(typeof this.$refs.personTab == 'undefined'){return}
           if(typeof this.$refs.personTab == 'null'){return}
             let ul = this.$refs.personTab
             console.log(ul)
             console.log(111)
             console.log(this.infos.song.songs) 
            let li = ul.children
            var that  = this
            for(let i =0;i<li.length;i++){
                li[i].addEventListener('click',function(){
                    for(let j =0;j<li.length;j++){
                        li[j].classList.remove('active')
                    }
                    this.classList.add('active')    
                         
                })
               
            }
        },
    },
    watch:{
        infos(ne){
            this.info = ne
            this.fff =true
        }
    },
    created(){
      setTimeout(()=>{this.$nextTick(() => {
      this.personScroll()
    })},1000)
    },
    mounted(){
      setTimeout(()=>{this.getitem()},1000)
    }
}
</script>

<style lang="less">
.active {
    border-bottom:2px solid #C20C0C;
    transition: all .4s linear;
}
  .select-person {
    padding: 10px 20px;
    .select-h1 {
      font-size: 18px;
      font-weight: 500;
      color: rgba(74, 74, 74, 1);
      margin: 10px 0;
    }
    .person-wrap {
      .person-list {
        width: 770px;
        overflow:hidden;
        .person-item {
          display: inline-block;
          min-width: 30px;
          padding:0 20px;
          text-align:center;
          line-height: 40px;
          transition:all .4s linear;
          font-size:13px;
        }
      }
    }
  }
*{
  touch-action:pan-y;
}
    .searchinfoContainer{
      position:relative;
      overflow:hidden;
            .nkngxq{
                padding: 0 20px;
                p{
                    font-size:12px;
                    color:#999;
                }
                ul{
                    .zj{
                    
                      img{
                        border-radius:10px;
                      }
                    }
                    .singer{
                      img{
                        border-radius:50%;
                      }
                    }
                    li{
                      display:flex;
                      margin:20px 0;
                      align-items:center;
                      p:first-child{
                        font-size:15px;
                      }
                      img{
                        height: 60px;
                        width: 60px;
                    }
                    div.name{
                      margin-left: 20px;
                     
                    }

                }
            }
    }
    .danqu{
      p{
        font-size:13px;
        color:#999;
        padding-left:20px;
      }
 
    }
    .zhuti{
      padding: 0 20px;
     ul{
       margin-top:10px;
       li{
         display: flex;
         margin-top:10px;
         align-items:center;
       img{
        height: 100px;
        width: 140px;
        border-radius:15px;
      }
      .guanz{
        margin-left:10px;
        .title{
          margin-bottom:5px;
          width:130px;
          text-overflow: ellipsis;
          white-space:nowrap;
          overflow:hidden;
        }
        p{
          span{
            font-size:13px;
            color:#999;
          }
          .aaa{
              padding-right: 15px;
          }
          .ttt{

          }
        }
      }
       }
     }
    }
    }
    p.text{
        color:#000;
        text-align:center;
        font-size:13px;
        line-height:30px;
      }
</style>