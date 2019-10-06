<template>
  <transition name ='tli'>
    <div class ='toplistinfoContainer'>
       <div class="tops">
           <span class ='back fa fa-arrow-down' @click ='back'></span>
           <span class ='list'>{{name}}</span>
           <div class="bgc" :style ='styl'></div>
           <div class="bottom">
               <ul>
                   <li>
                       <p class ='fa fa-commenting-o'></p>
                       <p class ='nnn'>1.9万</p>
                   </li>

                    <li>
                       <p class ='fa fa-share-alt-square'></p>
                       <p class ='nnn'>下载</p>
                   </li>

                   <li>
                       <p class ='fa fa-share-alt'></p>
                       <p class ='nnn'>分享</p>
                   </li>

                   <li>
                       <p class ='fa fa-check-square'></p>
                       <p class ='nnn'>多选</p>
                   </li>
                   
               </ul>
           </div>
       </div>
      
       <div class="div">
           <v-gequlist  :list ='list'></v-gequlist>
       </div>
 <v-loging v-if ='list==""'></v-loging>
<div class="btm">
    <p>没有数据了</p>
</div>

    </div>
  </transition>
</template>

<script>
import vGequlist from '../../../common/gequlist'
import vLoging from '../../../common/loading'
export default {
    data(){
        return {
            list:[],
            img: ''
        }
    },
    computed: {
         styl(){
            if(this.list){
                return `background-image:url('${this.img}')`
            }
        }
    },
    mounted(){

    },
    props:['name','arr'],
    methods: {
        back(){
            this.$emit('bck',false)
        },
    },
    components:{vGequlist,vLoging},
    watch: {
        arr(newarr){
            this.list = newarr
            for(let i =0;i<this.list.length;i++){
                this.img = this.list[0].al.picUrl
            }
        }
    }
}
</script>

<style lang="less">
             
.btm{
position: absolute;
bottom: 30px;
left: 50%;
transform: translateX(-50%);
color: #999;
}
.tli-enter,
.tli-leave {
    transform: translateY(100%);
}
.tli-enter-active,
.tli-leave-active{
    transition:all .5s ease;
}
    .toplistinfoContainer{
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color: #fff;
        z-index: 120;
        .tops{
            height: 220px;
            width: 100%;
            font-size:13px;
            font-size:16px;
            color:#999;
            position:relative;
            .back{
               top:10px;
               left:10px;
               font-size:16px;
            }
            span{
                position:absolute;
                z-index: 12;
            }
            .list{
            top: 82px;
            font-size: 32px;
            left: 30px;
            color: #fff;
            font-weight: 600;
            }
            .bgc{
                height: 240px;
                width: 100%;
                background-size:100% 140%;
                position:absolute;
            }
            .bottom{
                position:absolute;
                bottom:20px;
                z-index:14;
                width: 100%;
                ul{
                    display: flex;
                    li{
                        width: 25%;
                        text-align:center;
                        line-height: 30px;
                        font-size:12px;
                        p:first-child{
                            font-size:15px;
                        }
                    }
                }
            }
        }
    }
</style>