<template>
    <div class ='indexContainer'>
       <v-header></v-header>
       <router-view></router-view>
    </div>
</template>

<script>
import vHeader from './header'
export default {
    components : {vHeader}
}


</script>
<style lang="less" scoped>
.indexContainer{

}
</style>