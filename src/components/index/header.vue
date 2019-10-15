<template>
<div>
        <div class ='headerContainer'>
        <ul>
            <li @click ='flagss'><span class ='fa fa-navicon'></span></li>
            <router-link tag ='li' to="/My">我的</router-link>
            <router-link tag ='li' to="/find">发现</router-link> 
            <router-link tag ='li' to="/yuncun">电台</router-link>
            <router-link tag ='li' to="/video">视频</router-link>
            <router-link tag ='li' to='/search'><span class ='fa fa-search'></span></router-link>
        </ul>

    </div>
        <transition name ='box'>
                <div class="leftaas" v-show ='flag'>
                <div class="user">
                    <div class="img">
                        <img src="http://b-ssl.duitang.com/uploads/item/201708/08/20170808120640_xdnMs.thumb.700_0.jpeg">
                        <p>前端仔</p>
                    </div>
                </div>
              <div class="kait">
                  <div class="tleft">
                    <p>开通黑椒VIP</p>
                    <p>新客仅5元</p>
                  </div>
                  <div class="tright">
                      <p>黑椒新客首月5元</p>
                  </div>
              </div>
              <div class="hee">
                  <ul>
                      <li>
                          <span class ='fa fa-envelope-o'></span>
                          <p>我的信息</p>
                      </li>
                      <li>
                          <span class ='fa fa-user-o'></span>
                         <p> 我的好友</p>
                      </li>
                      <li>
                          <span class ='fa fa-microphone'></span>
                          <p>听歌识曲</p>
                      </li>
                      <li>
                          <span class ='fa fa-trademark'></span>
                      </li>
                  </ul>
              </div>
              <div class="li">
                  <ul>
                      <li>
                          <div class="left">
                              <span class ='fa fa-ticket'></span>
                              演出
                          </div>
                      </li>


                      <li>
                          <div class="left">
                              <span class ='fa fa-shopping-cart'></span>
                              商城
                          </div>
                      </li>


                        <li>
                          <div class="left">
                              <span class ='fa fa-location-arrow'></span>
                              附近的人
                          </div>
                      </li>


                        <li>
                          <div class="left">
                              <span class ='fa fa-gamepad'></span>
                              游戏推荐
                          </div>
                      </li>


                        <li>
                          <div class="left">
                              <span class ='fa fa-bell'></span>
                              口袋彩铃
                          </div>
                      </li>


                        <li>
                          <div class="left">
                              <span class ='fa fa-clock-o'></span>
                              定时关闭音乐
                          </div>
                      </li>
                  </ul>
              </div>
              <div class="close" @click ='flagss'>
                  <p><span class= 'fa fa-close'></span></p>
              </div>
        </div>
        </transition>
</div>
</template>

<script>
export default {
    name : 'header',
    data(){
        return {
            flag : false
        }
    },
    methods:{
        flagss(){
            this.flag = !this.flag
        }
    }
}
</script>
<style lang="less">
.box-enter,
.box-leave-to{
    transform: translateX(-100%);
}
.box-enter-active,
.box-leave-active{
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.close{
    position:absolute;
    bottom: 20px;
    right: 20px;
    font-size: 30px;
    color:#999;
}
.leftaas{
    position:fixed;
    top:0;
    right: 40%;
    left:0;
    bottom:0;
    background-color: #fff;
    z-index: 999;

    }
    .li{
        ul{
            li{
                line-height: 40px;
                padding-left: 20px;
                font-size: 13px;
                color:#888;
                span{
                    font-size: 20px;
                }
            }
        }
    }
    .hee{
        margin: 20px 10px 20px 10px;
        ul{
            display: flex;
            justify-content: space-between;
            text-align: center;
            li{
                display: block;
                text-align: center;
                font-size:12px;
                span{
                    font-size: 20px;
                    color:rgb(255,58,58);
                    margin-bottom: 5px;
                }
            }
        }
    }
    .user{
        .img{
            border-bottom: 1px solid #898989;
            padding-bottom: 20px;
            img{
                width: 100px;
                height: 100px;
                border-radius: 50%;
                display:block;
                margin:0 auto;
            }
            p{
                text-align:center;
                color:#999;
            }
        }
    }
    .kait{
        margin-top: 20px;
        display:flex;
        height: 50px;
        width: 100%;
        background: rgb(35,35,35);
        border-radius:5px;
        .tleft{
            margin-top: 5px;
            margin-left: 5px;
            border-right:1px solid rgb(97,97,97);
            padding-right: 8px;
            p:first-child{
                color:rgb(217,193,190);
            }
             p:last-child{
                font-size:12px;
                color:rgb(163,163,163);
            }
        }
        .tright{
            color:rgb(255,255,255);
            font-size:12px;
            line-height: 50px;
            padding-left: 10px;
        }
    }

.router-link-active{
    color:#000;
}
    .headerContainer{
        height: 70px;
        ul{
            height: 100%;
            display:flex;
            font-size:15px;
            align-items:center;
            justify-content:space-between;
            color:rgb(177,177,177);
            }
            li{
                width: 25%;
                text-align:center;
            }
    }
</style>