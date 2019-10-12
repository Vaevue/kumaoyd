<template>
    <div class ='singerinfoContainer'>
        <div class="bg" :style ='background' @click ='ss'>
            <div class="top">
                <span class="bk fa fa-arrow-left"></span>
                <span class="fx fa fa-share-alt"></span>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {

        }
    },
    computed: {
        ...mapGetters(['singer']),
        background(){
            return `background-image:url('${this.singer.img1v1Url}')`
        }
    },
    methods: {
        ss(){
            console.log(this.singer)
        }
    },
}
</script>

<style lang="less" scoped>
     .singerinfoContainer{
         position:absolute;
         top:0;
         left:0;
         right:0;
         bottom:0;
         background-color: #fff;
         z-index: 10;
         .bg{
             width: 100%;
             height: 330px;
             .top{
                 font-size:20px;
                 color:rgb(255,255,255);
                 display:flex;
                 justify-content: space-between;
             }
         }
     }
</style>