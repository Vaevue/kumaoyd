<template>
    <div class ='searchContainer'>
        <div class="topsearch">
            <div class="back" @click ='back'>
                <span class ='fa fa-arrow-left'></span>
            </div>
            <div class="input">
                <input type="text" v-model="keyword" :placeholder="placeholder">
            </div>
            <div class="user">
                <span class ='fa fa-user-circle'></span>
            </div>
        </div>
        <div class="searchbox" v-show ='keyword'>
            <ul>
                <li style ='color:#31c27c;'>搜索 "{{keyword}}"</li>
                <li v-for ='item in list ' :key ='item.id' @click ='info(item)'>
                    <span class ='fa fa-search'></span>
                    {{item.name}}
                </li>
                <li>
                    <v-loading v-show ='list.length == 0'></v-loading>
                </li>
            </ul>
        </div>
        <v-searchinfo v-if ='flag' :infos ='infos' :searchWord ='searchWord'></v-searchinfo>
        <div class="hottop" v-show ='!flag'>
                <h6>热搜榜</h6>
             <ul>
                <li v-for ='(item,index) in hotsearch' :key ='item.content' @click ='keywords(item)'>
                    <i class="index">{{index+1}}</i>
                    <div class="name">
                        <p>{{item.searchWord}}</p>
                        <p>{{item.content}}</p>
                    </div>
                    <span class="cont">{{item.score}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import vScroll from '../../common/scroll'
import vSearchinfo from './searchinfo'
import vLoading from '../../common/loading'
export default {
    components:{vScroll,vSearchinfo,vLoading},
    data(){
        return {
            hotsearch: [],
            keyword:'',
            flag:false,
            type:100,
            list:[],
            searchWord:'',
            types:1018,
            infos:[],
            placeholder:''
        }
    },
    methods:{
        gethotsearch(){
            this.$ajax.get('http://140.143.128.100:3000/search/hot/detail').then((res) => {
                this.hotsearch = res.data.data
            })
        },
        back(){
            console.log(111)
            this.$router.back()
        },
                getsearch(){
                    console.log(this.keyword)
                    console.log(this.types)
         this.$ajax.get('http://140.143.128.100:3000/search',{
                    params:{
                        limit:10,
                        keywords :this.searchWord,
                        type:this.types
                    }
                }).then((res) => {
                    this.infos = res.data.result
                  console.log(res.data.result)
                })
        },
        info(item){
            this.searchWord = item.name
            this.getsearch()
            this.flag = true
            
            this.keyword = ''
           
        },
        keywords(it){
            console.log(it.searchWord)
            this.searchWord = it.searchWord 
            this.getsearch()
            this.flag = true
        },
        getmoren(){
            this.$ajax.get('http://140.143.128.100:3000/search/default').then((res)=>{
               this.placeholder =  res.data.data.showKeyword
            })
        }
    },
    created(){
        this.gethotsearch()
        this.getmoren()
    },
    mounted(){
        document.getElementsByTagName('input')[0].addEventListener('keyup',()=>{
            setTimeout(()=>{
                this.$ajax.get('http://140.143.128.100:3000/search',{
                    params:{
                        keywords : this.keyword,
                        limit:10,
                        type:this.type
                    }
                }).then((res) => {
                    console.log(res.data.result)
                  this.list =  res.data.result.artists
                })
            },1000)
        })
    }
}
</script>

<style lang="less">

    .searchContainer{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color: #eee;
        .topsearch{
            display:flex;
            width: 100%;
            height: 40px;
            align-items: center;
            background:#eee;
            span{
                text-align: center;
                font-size:20px;
                color:#333;
            }
            .back{
                width: 20px;
                text-align: center;
                padding-left:20px;
            }
            .input{
                width: 100%;
                margin:0 20px;
                input{
                    width: 100%;
                    height: 30px;
                    border:none;
                    border-bottom:1px solid #000;
                    background:#eee;
                }
            }
            .user{
                width: 20px;
                text-align:center;
                margin-right: 10px;
            }
        }
        .searchbox{
                position: absolute;
                width: 293px;
                top: 50px;
                left: 30px;
                z-index: 600;
                background-color: #fff;
                box-shadow:0 0 rgb(230,230,230);
                ul{
                    color:#999;
                    li{
                        line-height: 40px;
                        border-bottom:1px solid rgb(230,230,230);
                        padding: 0 20px;
                    }
                }
        }
        .hottop{
            padding:0 20px;
            h6{
            background: #eee;
            width: 100%;
        margin-top:20px;
            }

            ul{
                li{
                    display: flex;
                    align-items: center;
                    margin-top:20px;
                    .index{
                        width: 20px;
                        margin-right: 20px;
                    }
                    .name{
                        font-size:12px;
                        color:#999;
                        margin-right:auto;
                        p:first-child{
                            color:#000;
                            padding-bottom: 5px;
                            font-size:15px;
                        }
                    }
                    .cont{
                      min-width: 20px;
                      padding:0 10px;
                      color:#999;
                      font-size:13px;
                    }
                }
            }
        }
    }
</style>