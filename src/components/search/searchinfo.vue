<template>
    <div class ='searchinfoContainer'>
    
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
              <img :src="info.album.albums[0].picUrl" ref ='img'>
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
      <p @click ='itt'>歌单</p>
      <ul>
        <li v-for ='item in info.playList.playLists' :key ='item.id'>
          <img :src="item.coverImgUrl" alt="">
           <div class="shuom">
            <p class="title">{{item.name}}</p>
            <p class="jieshao">{{item.description}}</p>
        </div>
        </li>
       
      </ul>
  </div>

  <div class="xiangguan">
      <p>相关搜索</p>
      <ul>
        <li v-for ='items in infos.sim_query.sim_querys' :key ='items.keyword'>
          <span>{{items.keyword}}</span>
        </li>
      </ul>
  </div>
  </div>
  <!--搜索单曲页面-->
  <div class="danqus">
    <v-danqu v-show ='types == 1' :danqu ='danqu'></v-danqu>
  </div>

  <!--搜索视频页面-->

  <div class="video">
      <v-shipin v-show ='types == 1014' :videos ='videos'></v-shipin>
  </div>

  <!--歌手-->
  <div class="singer" v-show ='types == 100' >
      <v-singer :singerlist = 'singer'></v-singer>
  </div>

  <!-- 专辑 -->
  <div class="zhuan" v-show ='types == 10'>
      <v-zhuanji :album ='album'></v-zhuanji>
  </div>
  <!-- 歌单 -->
  <div class="gedan" v-show ='types == 1000'>
     <v-gedan :gedan ='gedan'></v-gedan>
  </div>
  
  <!-- 用户 -->
  <div class="user">
    <v-user :user ='user'></v-user>
  </div>
          </div>
</template>

<script>
import BScroll from "better-scroll";
import vGequlist from '../../common/gequ'
import vLoading from '../../common/loading'
import vScroll from '../../common/scroll'
import vDanqu from './comp/danqu'
import vShipin from './comp/shipin'
import vSinger from './comp/singer'
import vZhuanji from './comp/zhuanji'
import vGedan from './comp/gedan'
import vUser from './comp/user'
export default {
    props:['infos','searchWord'],
    components:{vGequlist,vLoading,vScroll,vDanqu,vShipin,vSinger,vZhuanji,vGedan,vUser},
    data(){
        return {
            types:1018,
            info : this.infos,
            firstalb: [],
            fff : false,
            danqu: [],
            videos : [],
            singer:[],
            album:[],
            gedan:[],
            user : []
        }
    },
    methods:{
        itt(){
            console.log()
            console.log(this.info)
        },
         personScroll() {
      this.$nextTick(() => {
        this.fff = false
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
        this.fff =true
      })
         },
        getitem(){
          if(typeof this.$refs.personTab == 'undefined'){return}
           if(typeof this.$refs.personTab == 'null'){return}
           this.fff = true
             let ul = this.$refs.personTab
             console.log(ul)
             console.log(111)
             console.log(this.infos.song.songs) 
            let li = ul.children
            var that  = this
            for(let i =0;i<li.length;i++){
                li[i].addEventListener('click',function(){
                   let type = this.attributes[1].value
                    that.types = type
                    for(let j =0;j<li.length;j++){
                        li[j].classList.remove('active')
                    }
                    this.classList.add('active')
                    console.log(this.attributes[1].value)
                   

              let id = that.info.artist.artists[0].id
              let uid = that.info.artist.artists[0].accountId
              if(that.types == 1){
                that.$ajax.get('http://140.143.128.100:3000/artists',{
                  params:{
                    id: id
                  }
                }).then((res) => {
                that.danqu =  res.data.hotSongs
                })
              }else if (that.types == 1014){
                that.$ajax.get('http://140.143.128.100:3000/artist/mv',{
                  params:{
                    id:id
                  }
                }).then((res) => {
                 that.videos = res.data.mvs
                 console.log(111)
                 console.log(that.videos)
                })
              }else if (that.types == 100){
                               that.$ajax.get('http://140.143.128.100:3000/search',{
                    params:{
                        keywords : that.searchWord,
                        limit:10,
                        type:that.types
                    }
                }).then((res) => {
                   that.singer =  res.data.result.artists
                   console.log(that.singer)
                })
              }else if (that.types == 10){
                that.$ajax.get('http://140.143.128.100:3000/artist/album',{
                  params:{
                    id : id,
                    limit:20
                  }
                }).then((res) => {
                  that.album = res.data.hotAlbums
                })
              }else{
                that.$ajax.get('http://140.143.128.100:3000/search',{
                  params:{
                    keywords : that.searchWord,
                    type : that.types
                  }
                }).then((res) => {
                  if(that.types == 1000){
                    that.gedan = res.data.result.playlists
                  }else if (that.types == 1002){
                    that.user = res.data.result.userprofiles
                    console.log(that.user)
                  }
                })
              }
            
                    that.fff = false

                })
               
            }
        },
    },
    watch:{
        infos(ne){
            this.info = ne
        },
    },
    created(){
      setTimeout(()=>{this.$nextTick(() => {
      this.personScroll()
    })},1000)
    },

    mounted(){
      setTimeout(()=>{this.getitem()},1000)
    },
}
</script>

<style lang="less" scoped>
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
        width: 550px;
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
      height: 140vh;
      p{
        font-size:13px;
        color:#999;
        padding-left:20px;
      }
 
    }

    }
    p.text{
        color:#000;
        text-align:center;
        font-size:13px;
        line-height:30px;
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
    .gedan{
      padding: 0 20px;
      ul{
        li{
          margin-top:15px;
          display:flex;
          img{
            width: 140px;
            height: 100px;
            border-radius:15px;
            margin-right: 20px;
          }
          font-size:13px;
          align-items: center;
          .shuom{
            .title{
              margin-bottom:5px;
            }
            .jieshao{
              text-overflow:ellipsis;
              overflow:hidden;
              white-space:nowrap;
              width: 210px;
            }
          }
        }
      }
    }

    .xiangguan{
      padding: 0 20px;
      p{
        margin-bottom:15px;
      }
      ul{
        clear:left;
        li{
          float:left;
          margin-top:10px;
          span{
          min-width: 30px;
          padding:0 20px;
          border-radius:15px;
          background-color: #fff;
          color:#999;
          line-height: 30px;
          margin-right: 15px;
          }
        }
      }
    }
</style>