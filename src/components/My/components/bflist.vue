<template>
    <div class ='bflistContainer'>
        <div class="top">
            <span @click ='back' class ='fa fa-angle-left'></span>
            播放记录
        </div>
        <v-gequ :list ='list'></v-gequ>
    </div>
</template>

<script>
import vGequ from '../../../common/gequ'
export default {
    components:{vGequ},
    data(){
        return {
            list : []
        }
    },
    methods : {
        back(){
            this.$router.back()
        },
        lis () {
            let data = JSON.parse(localStorage.getItem('bflist'))
            console.log(data)
            this.list = data
        }
    },
    created(){
        this.lis()
    }
}
</script>

<style lang="less" scoped>
    .bflistContainer{
        position:absolute;
        top: 0;
        left:0;
        right: 0;
        bottom:0;
        background-color: #fff;
        .top{
        
            span {
                font-size: 30px;
            }
            font-size: 16px;
            padding: 20px 0 20px 20px;
        }
    }
</style>