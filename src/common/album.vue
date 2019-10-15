<template>
    <div class ='albumContainer'>
      <div class="ss">
           <div class="bg"></div>
      </div>
        <div class="nn">
            <div class="top">
            <div class="let">
                <span class = 'fa fa-arrow-left'></span>
                专辑
            </div>
            <span class ='fa fa-share-alt'></span>
        </div>
        <div class="cd">
            <img src="https://p2.music.126.net/BUFZLieG5a6E3ZVpkHP6fA==/109951163402069754.jpg">
            <div class="right">
                   <div class="rtop">
                     <p>寻宝游戏</p>
                    <p>许嵩</p>
                   </div>
                   <div class="rbottom">
                       <p>发行时间:2019-5-5</p>
                       <p>2018年许嵩发表最新专辑寻宝游戏</p>
                   </div>
                    
            </div>
        </div>
        <ul>
            <li>
                <span class ='fa fa-comment-o'></span>
            </li>
            <li>
                <span class ='fa fa-download'></span>
            </li>
            <li>
                <span class ='fa fa-share-alt'></span>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters(['album'])
    },
    data(){
        return {
            album:[]
        }
    },
    methods: {
        getlist(){
            console.log(this.album)
            this.$ajax.get('http://140.143.128.100:3000/album',{
                params:{
                    id : this.album.id
                }
            }).then((res) => {
                console.log(res.data)
                
            })
        },
    },
    created(){
        this.getlist()
    }
}
</script>

<style lang="less" scoped>
    .albumContainer{
        background:#fff;
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        .nn{
            position:absolute;
            width: 100%;
            z-index: 100;
        }
        .bg{
            position:absolute;
            top:0;
            height: 200px;
            width: 100%;
            background-image: url('https://p2.music.126.net/BUFZLieG5a6E3ZVpkHP6fA==/109951163402069754.jpg');
            background-repeat:no-repeat;
            background-size:cover;
            filter: blur(50px);
            background-position-y: -143px;
        }
        .top{
            color:#999;
            display: flex;
            height: 30px;
            justify-content: space-between;
            align-items:center;
            padding: 0 20px;
        }
        .cd{
            display:flex;
            font-size:12px;
            margin: 50px;
            margin-bottom:10px;
            color:#aaa;
            img{
                width: 100px;
                height: 100px;
                display:block;
            }
            .right{
                margin-left: 20px;
                .rtop{
                    margin-bottom:20px;
                    font-size: 14px;
                    color:#f5f5f5;
                }
                p{
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                }
            }
        }
        ul{
            display:flex;
            justify-content: space-between;
            height: 30px;
            align-items:center;
            color:#fff;
            padding:0 20px;
            font-size:20px;
        }
        }
</style>