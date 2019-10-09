<template>
    <div class ='mrtjContainer'>
        <div class="topan">
            <span class="back fa fa-arrow-left" @click ='back'></span>
            <div class="name" >每日推荐</div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        back(){
            // this.$router.back()
            this.getmrtj()
        },
        getmrtj(){
             console.log(111)
            this.$ajax.get('api/recommend/resource').then((res) => {
                console.log(res)
            })
           
        },
        created(){
            this.getmrtj()
        }
    }
}
</script>

<style lang="less">
    .mrtjContainer{
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color: #eee;
        .topan{
            height: 50px;
            display:flex;
            width: 100%;
            align-items:center;
            padding:0 20px;
            span{
                font-size:20px;
                color:#999;
                padding-right: 20px;
            }
            .name{
                opacity: 0;
            }
        }
    }
</style>