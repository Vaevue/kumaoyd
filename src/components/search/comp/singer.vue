<template>
    <div class ='singerContainer'>
        <v-scroll :data ='singerlist'>
        <div class="wrapper">
            <ul>
            <li v-for ='list in singerlist' :key ='list.id' @click ='gosingerinfo(list)'>
                <img v-lazy='list.img1v1Url'>
                <span>{{list.name}}</span>
            </li>
        </ul>
        </div>
        </v-scroll>
        <router-view></router-view>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import vScroll from '../../../common/scroll'
export default {
    components:{vScroll},
    props:['singerlist'],
    methods: {
       gosingerinfo(list){
        this.setsinger(list)
           this.$router.push({
               path:`/singer/${list.id}`
           })
       },
       ...mapMutations({
           setsinger : 'SET_SINGER'
       })
    },
}
</script>

<style lang="less" scoped>
.wrapper{
    position:absolute;
}
    .singerContainer{
        padding: 0 20px;
        background-color: #fff;
        ul{
            li{
                display: flex;
                align-items: center;
                margin-top:30px;
                img{
                    width: 70px;
                    height: 70px;
                    border-radius:50%;
                    margin-right: 30px;
                }
            }
        }
    }
</style>