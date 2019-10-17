<template>
    <div class ='videoContainer'>
        <div class="topfl">
            <ul ref ='flul'>
                <li class= 'active'>全部</li>
                <li>内地</li>
                <li>港台</li>
                <li>欧美</li>
                <li>韩国</li>
            </ul>
        </div>
        <v-video :video ='list'></v-video>
        <p class ='text' @click ='jzgd'>换一换</p>
    </div>
</template>

<script>
import vVideo from '../../common/sp'
export default {
    components:{vVideo},
    data(){
        return {
            area : '全部',
            page : 1,
            list: []
        }
    },
    methods: {
        getul(){
            let ul = this.$refs.flul
            let li = ul.children
            let that = this
            for(let  i =0;i<li.length;i++){
                li[i].addEventListener('click',function(){
                        for(let j =0;j<li.length;j++){
                            li[j].classList.remove('active')
                        }
                        this.classList.add('active')
                        console.log(this.innerHTML)
                        that.area = this.innerHTML
                        that.getmv()
                })
            }
        },
        jzgd(){
            this.page++ 
            this.getmv()
        },
        getmv(){
            this.$ajax.get('http://140.143.128.100:3000/mv/all',{
                params:{
                    area : this.area,
                    limit:20,
                    offset: this.page * 20
                }
            }).then((res) => {
               this.list = res.data.data
               if(this.list){
                   this.list.concat(res.data.data)
               }else {
                   this.list = res.data.data
               }
            })
        },
    },
    mounted() {
        this.getul()
    },
    created(){
        this.getmv()
    }
}
</script>

<style lang="less" scoped>
.text{
    text-align:center;
    color:#999;
    padding: 20px 0;
}
    .videoContainer{
        .topfl{
            ul{
                display:flex;
                justify-content: space-between;
                height: 30px;
                align-items:center;
                padding: 0 20px;
                li{
                    font-size:13px;
                    color:#999;
                    padding-bottom: 10px;
                    border-bottom:2px solid transparent;
                }
                    .active{
        color:#31c27c;
        border-bottom:2px solid #31c27c;
    }
            }
        }
    }

</style>