<template>
    <div class ='swiperContainer'>
    <mt-swipe :auto="4000">  
    <mt-swipe-item v-for ='(item,index) in banners' :key = 'index'>
            <img :src="item.picUrl">
    </mt-swipe-item>  
    </mt-swipe> 
    </div>
</template>

<script>
export default {
    data(){
        return {
            banners : []
        }
    },
    methods:{
        getswiper () {
          this.$ajax.get('api/banner',{
              params:{
                  type:1
              }
          }).then((res) => {
              this.banners = res.data.banners
          })
        }
    },
    created(){
        this.getswiper()
    }
}
</script>

<style lang="less" scoped>
img{
    height: 150px;
    width:95%;
    margin:0 auto;
    display: block;
    border-radius:10px;
}
.swiperContainer{
    height: 150px;
}
</style>