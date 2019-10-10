<template>
    <div class ='shipinContainer'>
        <v-shipinlist :video ='video'></v-shipinlist>
    </div>
</template>

<script>
import vShipinlist from '../../../common/shipinlist'
export default {
    components:{vShipinlist},
    props:['videos'],
    data(){
        return {
            video : this.videos
        }
    },
    methods: {
    },
    watch: {
        videos(ss){
            this.video = ss
        }
    },
}
</script>

<style lang="less" scoped>
    
</style>