<template>
    <div class ='singerContainer'>
        <ul>
            <li v-for ='list in singerlist' :key ='list.id'>
                <img v-lazy='list.img1v1Url'>
                <span>{{list.name}}<small>({{list.alia[0]}})</small></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['singerlist'],
    methods: {
       
    },
}
</script>

<style lang="less" scoped>
    .singerContainer{
        padding: 0 20px;
        ul{
            li{
                display: flex;
                align-items: center;
                margin-top:30px;
                img{
                    width: 70px;
                    height: 70px;
                    border-radius:50%;
                    margin-right: 30px;
                }
            }
        }
    }
</style>