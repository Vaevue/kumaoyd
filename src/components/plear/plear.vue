<template>
    <transition name ='plear' v-show="playlist.length>0">
    <div class ='plearContainer'>
        <div class="bigplear" v-show = 'playcontent'>
            大播放器
        </div>
        <div class="smallplear">
            小播放器
        </div>
    </div>
    </transition>
</template>  

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters(['playcontent','playlist'])
    },
    mounted(){
        console.log(this.playcontent)
    }
}
</script>

<style lang="less">
.plear-enter,
.plear-leave-to {
    transform: scale(1);
}

.plear-enter-active,
.plear-leave-active{
    transition: all .5s ease;
}
    .plearContainer{
            position:fixed;
            top:0;
            left:0;
            right:0;
            bottom:0;
            z-index: 1000;
            background-color: #eee;
    }
</style>