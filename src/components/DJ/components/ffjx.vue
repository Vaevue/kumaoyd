<template>
    <div class ='ffjxContainer'>
       <div class="top">
            <span class ='fa fa-arrow-left' @click ='fh'></span>
        付费精品
       </div>
       <div class="cont">
           <ul>
               <li v-for ='item in aarr' :key ='item.id'>
                   <img v-lazy="item.picUrl">
                   <div class="right">
                       <p class="name">{{item.name}}</p>
                       <p class="jieshao">{{item.lastProgramName}}</p>
                       <p class="money">￥{{item.programCount}}</p>
                   </div>
               </li>
           </ul>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            page:1,
            aarr:[]
        }
    },
    methods: {
        fh(){
            this.$emit('fh')
        },
        getffjp () {
            this.$ajax.get('http://140.143.128.100:3000/dj/paygift',{
                params:{
                    limit: 20 ,
                    offset : this.page * 20
                }
            }).then((res) => {
                console.log(res.data.data.list)
                this.aarr = res.data.data.list
            })
        }
    },
    created() {
        this.getffjp()
    },
}
</script>

<style lang="less" scoped>
    .ffjxContainer{
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #fff;
        top: 0;
        
        .cont{
            padding: 0 20px;
            background-color: #fff;
            ul{
                li{
                    display:flex;
                    background: #fff;
                     padding-top: 23px;
                    img{
                        min-width: 150px;
                        min-height: 200px;
                        max-width: 150px;
                        max-height: 200px;
                    }
                    .right{
                        margin-left:20px;
                        font-size: 12px;
                        p{
                        padding: 20px 0;
                        }
                        .name{
                            font-size: 15px;
                        }
                        .jieshao{
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                        color:#999;
                        }
                        p:last-child{
                            color:red;
                        }
                    }
                    
                }
            }
        }
    }
</style>