<template>
    <div class ='flContainer'>
            <div class="top">
                <span class ='fa fa-arrow-left'></span>
                电台分类
            </div>
            <div class="cont">
                <ul>
                    <li v-for ='item in fls' :key ='item.id' @click ='fldj(item)'>
                            <img :src="item.pic56x56Url">
                            <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            fls:[]
        }
    },
        methods: {
            fl(){
                this.$ajax.get('http://140.143.128.100:3000/dj/catelist')
                .then((res) =>{
                    this.fls = res.data.categories
                })
            },
            fldj(item){
                this.$emit('fldj',item)
            }
        },
    created(){
        this.fl()
    }
}
</script>

<style lang="less" scoped>
    .flContainer{
        padding: 0 20px;
        position:fixed;
        left :0;
        right: 0;
        bottom:0;
        top:0;
        background-color: #fff;
        .cont{
            margin-top: 30px;
            ul{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                li{
                    margin-top: 20px;
                    img{
                        height: 30px;
                        width: 30px;
                        display: block;
                        margin: 0 auto;
                    }
                    p{
                        width: 100px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        margin-top: 10px;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>