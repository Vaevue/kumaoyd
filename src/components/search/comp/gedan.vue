<template>
    <div class ='gedanContainer'>
        <ul>
            <v-loading v-show ='gedan.length == 0'></v-loading>
            <li v-for ='item in gedan' :key ='item.id'>
                <img v-lazy="item.coverImgUrl">
                <div class="jieshao">
                    <p class ='title'>{{item.name}}</p>
                    <p class ='user'> by <span>{{item.creator.nickname}}</span></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import vLoading from '../../../common/loading'
export default {
    props: ['gedan'],
    components:{vLoading},
    methods: {

    },
}
</script>

<style lang="less" scoped>
    .gedanContainer{
        ul{
            li{
                display:flex;
                align-items:center;
                margin-top:15px;
                img{
                    width: 50px;
                    height: 50px;
                    border-radius:5px;
                }
                .jieshao{
                    font-size:14px;
                    color:#999;
                    padding-left: 10px;
                    .title{
                        width: 300px;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                    }
                    .user{
                        span{
                            font-size:12px;
                            color:#31c27c;
                        }
                        padding-top:5px;
                    }
                }
            }
        }
    }
</style>