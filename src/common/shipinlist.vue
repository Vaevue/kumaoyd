<template>
    <div class ='shipinlistContainer'>
            <ul>
                <v-loading v-show="video.length == 0"></v-loading>
                <li v-for ='item in video' :key ='item.id'>
                    <div class="img">
                        <img v-lazy="item.imgurl" alt="">
                    </div>
                    <div class="context">
                        <p class ='title'>{{item.name}}</p>
                        <p class="name">{{item.publishTime}}  BY {{item.artist.name}}</p>
                    </div>
                </li>
            </ul>
    </div>
</template>

<script>
import vLoading from './loading'
export default {
    components:{vLoading},
    props:['video'],
    data(){
        return {
            videos : this.video
        }
    },
    methods: {
    },
}
</script>

<style lang="less" scoped>
    .shipinlistContainer{
        padding: 0 20px;
            ul{
                li{
                    display:flex;
                    align-items: center;
                    margin-top: 20px;
                    img{
                        width: 150px;
                        height: 100px;
                        border-radius:10px;
                    }
                    .img{
                        position:relative;
                    }
                    .context {
                        margin-left: 20px;
                       .title{
                           font-size:15px;
                           width: 180px;
                           overflow: hidden;
                           text-overflow: ellipsis;
                           white-space:nowrap;
                       }
                       .name{
                           margin-top:10px;
                           font-size:12px;
                           color:#999;
                       } 
                    }
                }
            }
    }
</style>