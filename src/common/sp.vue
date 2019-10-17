<template>
    <div class ='shipinlistContainer'>

                        <ul>
                <v-loading v-show="video.length == 0"></v-loading>
                <li v-for ='item in video' :key ='item.id' @click ='gomv(item)'>
                    <div class="img">
                        <img v-lazy="item.cover" alt="">
                    </div>
                    <div class="context">
                        <p class ='title'>{{item.name}}</p>
                        <p class="name">{{item.duration}}  BY {{item.artists[0].name}}</p>
                    </div>
                </li>
            </ul>
    </div>
</template>

<script>
import vLoading from './loading'
import {mapMutations} from 'vuex'
export default {
    components:{vLoading},
    props:['video'],
    data(){
        return {
            videos : this.video
        }
    },
    methods: {
        gomv(item){
            this.setmv(item)
            this.$router.push('/mv')
        },
        ...mapMutations({
            setmv : 'SET_MV'
        })
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