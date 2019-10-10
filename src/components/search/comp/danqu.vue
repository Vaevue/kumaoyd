<template>
    <div class ='danquContainer'>
        <v-loading v-show ='danqu.length == 0'></v-loading>
            <v-gequ :list = 'danqu'></v-gequ>
    </div>
</template>

<script>
import vGequ from '../../../common/gequ'
import vLoading from '../../../common/loading'
export default {
    props:['danqu'],
    components:{vGequ,vLoading},
    data(){
        return {
            list : []
        }
    },
    methods:{
    },
    created(){
        console.log(111)
        console.log(this.danqu)
    },    
}
</script>

<style lang="less" scoped>
    
</style>