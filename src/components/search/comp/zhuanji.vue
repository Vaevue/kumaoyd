<template>
    <div class ='zhuanjiContainer'>
            <ul>
                <v-loading v-show ='album.length == 0'></v-loading>
                <li v-for ='item in album' :key ='item.id' @click ='goalbuminfo(item)'>
                    <div class="img">
                        <img v-lazy="item.picUrl" alt="">
                    </div>
                    <div class="name">
                        <p>{{item.name}}</p>
                        <p class ='singer'><span>{{item.artist.name}}</span>{{item.subType}}</p>
                    </div>
                </li>
            </ul>
    </div>
</template>

<script>
import vLoading from '../../../common/loading'
import {mapMutations} from 'vuex'
export default {
    props : ['album'],
    components:{vLoading},
    methods : {
       goalbuminfo(item){
           this.setalbum(item)
           this.$router.push('/album')
       },
       ...mapMutations({
           setalbum : 'SET_ALBUM'
       })
    }
}
</script>

<style lang="less" scoped>
    .zhuanjiContainer{
        padding: 0 20px;
        ul{
            li{
                display:flex;
                align-items:center;
                margin-top:10px;
                img{
                    width: 50px;
                    height:50px;
                    border-radius:5px;
                   
                }
                .img{
                    background-image: url('https://s2.music.126.net/style/web2/img/coverall.png?d12cfe06ba9290d83e349c5a9d9b2e0f');
                    background-repeat: no-repeat;
                    background-position: -250px -251px;
                    width: 67px;
                    height: 52px;
                }
                .name {
                    margin-left: 15px;
                    font-size:12px;
                    p:first-child{
                        font-size:15px;
                    }
                    span{
                        color:#31c27c;
                        padding-right: 5px;
                    }
                }
            }
        }
    }
</style>