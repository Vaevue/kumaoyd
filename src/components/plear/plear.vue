<template>
    <transition name ='plear' v-show="playlist.length>0">
    <div class ='plearContainer'>
        <div class="bigplear" v-show = 'playcontent'>
            <div class="top">
                <span class="back fa fa-chevron-down"></span>
                <span class="gequname">{{currentSong.songname}}</span>  
                <span class='singername'>{{currentSong.singername}}</span>
            </div>
        </div>
        <div class="smallplear" v-show ='playcontent == false'>
            小播放器
        </div>
         <audio :src="currentSong.url" autoplay></audio>
    </div>
   
    </transition>
</template>  

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters(['playcontent','playlist','currentSong'])
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