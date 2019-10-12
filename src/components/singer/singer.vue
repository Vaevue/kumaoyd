<template>
   <transition name ='sin'>
    <div class ='singername'>
        <div class="tops">
            <span class ='back fa fa-chevron-left' @click ='back()'></span>
            歌手榜
        </div>
        <div class="content">
            <v-singer :singerlist ='list'></v-singer>
        </div>
        <div class="rightlist">
            <ul id ='ul'>
                <li class='active'>热门</li>
                <li v-for ='item in zimu' :key ='item'>{{item}}</li>
            </ul>
        </div>
    </div>
   </transition>
</template>

<script>
import vSinger from '../search/comp/singer'
export default {
    components:{vSinger},
    data(){
        return {
            inits : '',
            cat : 1001,
            list: [],
            zimu : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        }
    },
    methods: {
        back(){
            this.$router.back()
        },
        getsingerlist(){
            this.$ajax.get('http://140.143.128.100:3000/artist/list',{
                params:{
                    initial:this.inits,
                    cat : this.cat
                }
            }).then((res)=>{
                this.list = res.data.artists
                console.log(this.list)
            })
        },
        getactive(){
            let ul = document.getElementById('ul');
            let li = ul.children
            let that = this
            for(let i = 0;i<li.length;i++){
                li[i].addEventListener('click',function(){
                 for(let j = 0;j<li.length;j++){
                       li[j].classList.remove('active')
                   }
                   this.classList.add('active')
                   if(this.innerText == '热门'){
                      that.inits = ''
                      that.getsingerlist()
                      return 
                   }
                   that.inits =  this.innerText
                   that.getsingerlist()
                })
            }
        },

    },
    created() {
        this.getsingerlist()
    },
    mounted(){
        this.getactive()
    }
}
</script>

<style lang="less" scoped>
.sin-enter,
.sin-leave-to {
    transform: translateX(-100%)
}
.sin-enter-active,
.sin-leave-active {
    transition:all .5s ease;
}
.active {
    color:#31c27c;
}
    .singername {
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color: #fff;
        .tops{
            line-height: 30px;
            color:#999;
            span{
                font-size:20px;
                margin-right: 20px;
            }
        }
        .rightlist {
            ul{
                position: fixed;
                color: #999;
                right: 20px;
                font-size: 13px;
                top: 50%;
                transform: translateY(-50%);
                li{
                    line-height: 20px;
                    min-width: 20px;
                    text-align:center;
                }
            }
        }
    }
</style>