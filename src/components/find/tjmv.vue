<template>
    <div class = 'tjmvContainer'>
            <p class ='tit'>Mv排行</p>
            <div class="content">
              
<ul>
  <li  class="img" v-for ='item in mvl' :key = 'item.id'>
            <img :src="item.cover" alt="">
    <span class ='fonts fa fa-play-circle-o'></span>
    <div class="bottom">
        <div class="left">
            <span>{{item.name}}</span>
        </div>
        <div class="right">
        <img :src="item.cover" alt="">
        </div>
    </div>
   </li>
   <p class ='p' @click ='jiezhe'>查看更多</p>
</ul>
                </div>
            </div>
</template>

<script>
export default {
    data(){
        return {
            mvl:[],
            loading:false,
            page:1
        }
    },
    methods:{
        getmvtop(){
            this.$ajax.get('http://140.143.128.100:3000/top/mv',{
                params:{
                    limit:5,
                    offset : this.page * 5
                }
            }).then((res) => {
                this.mvl = res.data.data
            })
        },
        jiezhe(e){
            e.target.innerHTML = '加载更多数据中...'
            this.page++
            this.$ajax.get('http://140.143.128.100:3000/top/mv',{
                params:{
                    limit:5,
                    offset : this.page * 5
                }
            }).then((res) => {
                res.data.data.forEach((item)=>{
                        this.mvl.push(item)
                    e.target.innerHTML = '查看更多'
                })
            }).catch(()=>{
                e.target.innerHTML = '没有更多数据了...'
            })
        }
    },
    created(){
        this.getmvtop()
    }
}
</script>

<style lang="less">
.p{
    text-align: center;

margin-top: 20px;

color: #999;
}
    .tjmvContainer{
         margin:20px;
        border-top:1px solid rgb(233,233,233);
        .content{
            
            .top{
                line-height: 30px;
                font-size:15px;
                color:#999;
            }
            .img{
                margin-top:20px;
               position:relative;
                img{
                     border-radius: 15px;
                     border-bottom-right-radius: 0px;
                     border-bottom-left-radius: 0px;
                    height: 200px;
                    width: 100%;
                }
                .fonts{
                    position:absolute;
                    left:50%;
                    top:40%;
                    transform:translate(-50%,-50%);
                    font-size: 50px;
                    color:#fff;
                }
            }
            .bottom{
                display:flex;
                justify-content:space-between;
                align-items: center;
                height: 50px;
                background-color: #fff;
                padding:0 20px;
                border-bottom-right-radius: 15px;
                border-bottom-left-radius: 15px;
                .left{
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
                }
                .right{
                    img{
                        height: 50px;
                        width: 50px;
                        border-radius:50%;
                    }
                }
            }
        }
    }
</style>