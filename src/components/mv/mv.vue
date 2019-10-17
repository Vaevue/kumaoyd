<template>
    <div class ='mvContainer'>
        <video :src="mvurl" autoplay controls></video>
        <div class="top">
            <p @click ='iii'>{{da.name}}</p>
            <span class ='fa fa-caret-down' @click ='sho'></span>
        </div>
        <div class="biaoqian">
            <ul class ='o' id ='ul'>
                <p>{{shijian(da.playCount)}}次观看</p>
                <li>简介 : </li>
                <li v-html ='da.desc'></li>
                <li>{{da.publishTime}}发布</li>
            </ul>
            <ul class="caozuo">
                <li>
                    <span class ='fa fa-thumbs-o-up'></span>
                    <p>{{da.likeCount}}</p>
                </li>


                <li>
                    <span class ='fa fa-folder-open-o'></span>
                    <p>{{da.subCount}}</p>
                </li>


                <li>
                    <span class ='fa fa-comments-o'></span>
                    <p>{{da.commentCount}}</p>
                </li>


                <li>
                    <span class ='fa fa-share-alt'></span>
                    <p>{{da.shareCount}}</p>
                </li>
            </ul>
        </div>
        <div class="pl">
            <v-pl :hotcomments ='hotcomments' :comments="comments" @loadgd ='load' :text ='text'></v-pl>
        </div>
        <div class="fh" @click ='back'>
            <span class ='fa fa-caret-left'></span>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
import vPl from '../../common/pinglun.vue'
export default {
    computed:{
        ...mapGetters(['mv'])
    },
    components:{vPl},
    data(){
        return {
            mvurl : '',
            da: [],
            xglist :[],
            hotcomments:[],
            comments:[],
            page : 1,
            text:'查看更多'
        }
    },
    methods: {
        sho(){
            let ul = document.getElementById('ul')
            if(ul.classList.contains('o')){
                ul.classList.remove('o')
            }else {
                ul.classList.add('o')
            }
        },
        back(){
            this.$router.back()
        },
        load(){
            this.text = '拼命加载中...'
            this.page++
        this.$ajax.get('http://140.143.128.100:3000/comment/mv',{
                params:{
                    id : this.mv.id,
                    limit:20,
                    offset: this.page * 20
                }
            }).then((res) => {
              let arr  =  res.data.comments
              for(let i =0;i<arr.length;i++){
                  this.comments.push(arr[i])
              }
            this.text = '查看更多'
            })
        },
        iii(){
            console.log(this.da)
            this.getxgvideo()
        },
        getmvurl(){
            console.log(this.mv)
            this.$ajax.get('http://140.143.128.100:3000/mv/detail',{
                params:{
                    mvid : this.mv.id
                }
            }).then((res) => {
                console.log(111)
                console.log(res.data.data.brs)
                if(res.data.data.brs[720]){
                     this.mvurl =   res.data.data.brs[720]
                }else if (res.data.data.brs[1080]){
                    this.mvurl =   res.data.data.brs[1080]
                }else if(res.data.data.brs[480]){
                    this.mvurl =res.data.data.brs[480]
                }
              
              this.da =  res.data.data
              console.log(this.da)
              this.getxgvideo()
            })
        },
        getpl(){
            this.$ajax.get('http://140.143.128.100:3000/comment/mv',{
                params:{
                    id : this.mv.id
                }
            }).then((res) => {
                console.log(res.data.hotComments)
                this.hotcomments = res.data.hotComments
                this.comments = res.data.comments
            })
        },
        getxgvideo(){
            this.$ajax.get('http://140.143.128.100:3000/related/allvideo',{
                params:{
                    id:this.da.id
                }
            }).then((res) => {
                this.xglist = res.data.data
            })
        },
        shijian(time){
            let length =(time+ '').length
            if(length > 4){
                return Math.floor(time / 10000) + '万'
            }else {
                return time
            }
        },
        ...mapMutations({
            setmv :　'SET_MV'
        })
    },
    created(){
        this.getmvurl()
        this.getpl()
    }
}
</script>

<style lang="less" scoped>
.fh{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #333;
    position:fixed;
    bottom:20px;
    right: 20px;
    font-size: 20px;
    color:#fff;
    line-height: 30px;
    text-align:center;
}
.pl{
    margin-top:30px;
}
.o {
    overflow:hidden;
     height: 30px;
     transition:all .3s linear;
}
    .mvContainer{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color: #fff;
        video{
            width: 100%;
            height: 210px;
            position: fixed;
            top:0px;
        }
        .top{
            padding: 0 20px;
            display:flex;
            justify-content: space-between;
            margin-top:225px;
            span{
                color:#999;
                font-size:23px;
            }
        }
        .biaoqian{
            padding: 0 20px;
            #ul{
                display:flex;
                flex-wrap:wrap;
               transition:all .3s linear;
                p{
                    color:#999;
                    font-size:13px;
                    margin-top:10px;
                }
                li{
                    min-width: 30px;
                    padding: 0 10px;
                    border-radius:15px;
                    color:#000;
                    font-size:12px;
                    line-height: 20px;
                    margin-left:20px;
                    margin-top:10px;
                }
            }
            .caozuo{
                display:flex;
                justify-content: space-between;
                padding: 0 30px;
                margin-top:20px;
                li{
                    color:#999;
                    p{
                        font-size:12px;
                    }
                    span{
                        font-size:20px;
                    }
                }
            }

        }
    }
</style>