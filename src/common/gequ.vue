<template>
    <div class ='gequlistContainers'>
                <div class="contents" ref ='cont'>
                    <div class="lists">
                        <v-loading v-show ='list.length ==0'></v-loading>
                        <ul>
                            <li :class ='current == index ? "red" : ""' @click ='gogogo(item,index)' v-for ='(item,index) in list' :key ='item.id'>
                                   <div class="name">
                                       <p class ='gequname'>{{item.name}}</p>
                                       <p class ='singername'>{{item.ar[0].name || item.name}}</p>
                                   </div>
                                <p class="pright">
                                    <span @click.stop ='gomv(item)' :class ='item.mv == 0 ? "" : "video fa fa-youtube-play"'></span>
                                    <span class ='gengduo fa fa-ellipsis-v'></span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
</template>

<script>
import {createSong} from './js/Song'
import {mapActions,mapGetters,mapMutations} from 'vuex'
import vLoading from './loading'
export default {
    components:{vLoading},
    props:{
        list:{
            type:Array,
            default : []
        },
        flag : {
            type: Boolean,
            default : true
        }
    },
    data(){
        return {
         arr:[],
         lis:[],
         bflist:[]
        }
    },
   methods: {
 gomv(item){
        let mv = {
            id: item.mv
        }
         this.setmv(mv)
         this.$router.push('/mv')
       },
       gogogo(item,index){
        this.lis = []
          let arr = this.list
          for(let i =0;i<arr.length;i++){
              this.lis.push(createSong(arr[i]))
              console.log(111)
          }
          console.log('播放')
          console.log(createSong(item))
         
          this.selectplay({
              list : this.lis,
              index : index
          })   
          this.bflist.push(item)
          console.log(this.bflist)
          localStorage.setItem('bflist',JSON.stringify(this.bflist))
       },
      ...mapActions(['selectplay']),
       ...mapMutations({
            setplct : 'SET_PLAYCONTENT'
        })
   },
   computed : {
       ...mapGetters(['playlist','playcontent','current','currentSong'])
   }
}
</script>

<style lang="less">
.red{
    color:#31c27c !important;
}
    .gequlistContainers{
        width: 100%;
            .contents{
                width: 100%;
                .lists{
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
                                    color:#31c27c;
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
</style>