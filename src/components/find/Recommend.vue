<template>
    <div class ='RecommendContainer'>
       <div class="top">
            <p ref ='ttt' class ='title' v-html="title"></p>
            <p class ='smtitle'>{{smalltitle}}</p>
       </div>
       <div class="content">
           <ul>
               <li v-for ='item in result' :key ='item.id' @click ='goalbum(item)'>
                   <div class="img">
                       <!-- <span class ='tit'>217万</span> -->
                       <img v-lazy="item.picUrl" alt="">
                   </div>
                  <div class="text">
                      <p v-html="item.name"></p>
                  </div>
               </li>
           </ul>
       </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    props:['title','smalltitle','result'],
    data(){
        return {
          
        }
    },
    methods:{
        goalbum(item){
            this.setdj(item)
            this.$router.push('/dj')
        },
        qiehuan(){
            var that = this
            if(this.$refs.ttt){
            let arr = this.$refs.ttt.children[0].children
            for(let i =0;i<arr.length;i++){
                
                arr[i].onclick = function(){
                    that.$emit('cld',i)
                    arr[0].classList.remove('font')
                     arr[1].classList.remove('font')
                    this.classList.add('font')
                }
            }
            }

        },
        ...mapMutations({
            setdj : 'SET_DJ'
        })
    },
        mounted(){
            this.qiehuan()
        }
}
</script>

<style lang="less" >
  .RecommendContainer{
      margin-top:20px;
      .top{
          margin-left:28px;
          display: flex;
          justify-content:space-between;
        .title{
            font-size: 15px;
        }
        .smtitle{
            font-size:13px;
            min-width: 40px;
            padding: 0 15px;
            line-height: 25px;
            text-align:center;
            border-radius:15px 15px;
            border:1px solid rgb(230,230,230);
            margin-right: 27px;
        }
      }

      .content{
          margin-left: 25px;
          margin-top:10px;
          ul{
              display:flex;
              flex-wrap:wrap;
              li{
                  width: 33%;
                  margin-top:10px;
                   .img{
                  max-width: 100px;
                  max-height:100px;
                  img{
                width: 100px;
                height:100px;
                  }
              }
              .text{
                  max-width: 100px;
                  max-height: 35px;
                  overflow: hidden;
                  font-size: 13px;
                  display:-webkit-box;
                  -webkit-box-orient:vertical;
                  -webkit-line-clamp:2;
                
              }
              }

          }
      }
  }
  .font {
      font-size:20px;
      color:#000;
  }
</style>
