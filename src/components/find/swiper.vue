<template>
    <div class ='swiperContainer'>
    <mt-swipe :auto="4000">  
    <mt-swipe-item v-for ='(item,index) in banners' :key = 'index'>
            <img :src="item.pic">
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
          this.$ajax.get('http://140.143.128.100:3000/banner',{
              params:{
                  type:1
              }
          }).then((res) => {
              this.banners = res.data.banners
              console.log(this.banners)
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