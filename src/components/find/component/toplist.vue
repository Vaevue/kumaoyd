<template>

   <transition name ='top'>

        <div class ='toplistContainer'>
        <div class="top">
            <i @click ='back' class =' fa fa-arrow-left'></i>
            <span>排行榜</span>
            
        </div>
        <v-scroll :data ='lists'>
                <div class="wrapper">
                    <v-loading v-if = 'flag == false'></v-loading>
                                   <div class="ccc">
                                      <div class="content" v-for ='(item,index) in lists' :key ='index' >
                                                  <p @click ='ceshi()'>111</p>
            <ul v-for ='list in item' :key ='list.id' @click ='gotoplist(list)'>
                


                <li>
                   <img v-lazy ="list.coverImgUrl"> 
                   <div class="right">
                       <ul>
                           <li>{{list.name}}</li>
                           <li>{{list.updateFrequency}}</li>
                           <li>最近更新({{timestampToTime(list.updateTime)}})</li>
                       </ul>
                   </div>
                </li>
            </ul>
        </div>
                </div>
                </div>
        </v-scroll>
        <v-toplistinfo @bck ='bak' :name ='name' v-show = 'toplistFlag' :arr ='arr'></v-toplistinfo>
    </div>
    
   </transition>
</template>

<script>
import vScroll from '../../../common/scroll'
import vLoading from '../../../common/loading'
import vToplistinfo from './toplistinfo'
export default {
    components:{vScroll,vLoading,vToplistinfo},
    data(){
        return {
            lists : [[],[],[]],
            flag : false,
            toplistFlag:false,
            name: '',
            arr:[]
        }
    },
    methods: {
        ceshi(){
            this.toplistFlag = true
        },
        back(){
            this.$router.back()
        },
        bak(fl){
            this.toplistFlag = false
        },
        gotoplist(list){
            this.name = list.name
            let id = list.id
            this.getlist(id)
            this.toplistFlag = true
        },
        gettoplist(){
            this.$ajax.get('api/toplist').then((res)=>{
                let arr = res.data.list
                if(arr){
                    this.flag = true
                }
                for(let i =0;i<arr.length;i++){
                   if(i<9){
                       this.lists[0].push(arr[i])
                   }else if (i>9 && i < 19){
                       this.lists[1].push(arr[i])
                   }else {
                       this.lists[2].push(arr[i])
                   }
                }
                
            })
        },
        getlist(id){
            this.$ajax.get('api/playlist/detail',{
                params:{
                    id: id,
                    limit:10
                }
            }).then((res) => {
                this.arr = res.data.playlist.tracks
            })
        },
     timestampToTime(timestamp) {
        var date = new Date(timestamp)//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '/'
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '/'
        var D = date.getDate() + ' '
        D = D > 10 ? D : '0'+D
        var h = date.getHours() + ':'
        var m = date.getMinutes() + ':'
        var s = date.getSeconds()
        s = s > 10 ? s : '0'+s
        return Y+M+D+h+m+s;
    }
    },
    created(){
        this.gettoplist()
    }
}
</script>

<style lang="less">


.wrapper{
  height:400vh;
  position: absolute;
  width: 100%;
}
.top-enter,
.top-leave-to {
    transform:translateX(100%);
}
.top-enter-active,
.top-leave-active{
    transition:all .5s ease;
}
    .toplistContainer{
        position:fixed;
        top:0;
        right:0;
        left: 0;
        bottom:0;
        background-color: #eee;
        .top{
            height: 40px;
            line-height: 40px;
            font-size:15px;
            padding:15px;
            width: 100%;
            color:#666;
            font-weight: 200;
            position:fixed;
            top:0;
            z-index: 11;
            background:#eee;
            i{
                font-size:20px;
            }
            span{
                margin-left:10px;
            }
        }
        .content{
            padding-top:60px;
            margin-left:10px;
            ul{
                li{
                    display: flex;
                    margin-top:10px;
                    img{
                        height: 100px;
                        width: 100px;
                    }
                }
                .right{
                        color:#999;
                        font-size:13px;
                        ul{
                            margin-left: 15px;
                            li{
                                i{
                                    margin-right: 10px;
                                }
                                line-height: 20px;
                            }
                        }
                }
            }
        }
    }

</style>