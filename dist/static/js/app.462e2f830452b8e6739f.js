webpackJsonp([1],{"6j92":function(t,s){},"6kgt":function(t,s){},AbAj:function(t,s){},C74v:function(t,s){},"G+D5":function(t,s,a){t.exports=a.p+"static/img/jzz.dd49967.gif"},GhnU:function(t,s){},I1Rb:function(t,s){},KXmW:function(t,s){},Khe3:function(t,s,a){t.exports=a.p+"static/img/jzsb.ef414af.jpeg"},L8Lp:function(t,s){},LbvW:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("7+uW"),e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"headerContainer"},[a("ul",[t._m(0),t._v(" "),a("router-link",{attrs:{tag:"li",to:"/My"}},[t._v("我的")]),t._v(" "),a("router-link",{attrs:{tag:"li",to:"/find"}},[t._v("发现")]),t._v(" "),a("router-link",{attrs:{tag:"li",to:"/yuncun"}},[t._v("电台")]),t._v(" "),a("router-link",{attrs:{tag:"li",to:"/video"}},[t._v("视频")]),t._v(" "),t._m(1)],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("span",{staticClass:"fa fa-navicon"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("span",{staticClass:"fa fa-plus"})])}]};var n={components:{vHeader:a("VU/8")({name:"header"},e,!1,function(t){a("T7fC")},null,null).exports}},l={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"indexContainer"},[s("v-header"),this._v(" "),s("router-view")],1)},staticRenderFns:[]};var r={name:"App",components:{vIndex:a("VU/8")(n,l,!1,function(t){a("AbAj")},"data-v-09ba5c87",null).exports}},o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("v-index")],1)},staticRenderFns:[]};var c=a("VU/8")(r,o,!1,function(t){a("KXmW")},null,null).exports,v=a("7LQH"),u={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"swiperContainer"},[s("mt-swipe",{attrs:{auto:4e3}},this._l(this.banners,function(t,a){return s("mt-swipe-item",{key:a},[s("img",{attrs:{src:t.picUrl}})])}),1)],1)},staticRenderFns:[]};var f={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"RecommendContainer"},[a("div",{staticClass:"top"},[a("p",{ref:"ttt",staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),a("p",{staticClass:"smtitle"},[t._v(t._s(t.smalltitle))])]),t._v(" "),a("div",{staticClass:"content"},[a("ul",t._l(t.result,function(s){return a("li",{key:s.id},[a("div",{staticClass:"img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.picUrl,expression:"item.picUrl"}],attrs:{alt:""}})]),t._v(" "),a("div",{staticClass:"text"},[a("p",{domProps:{innerHTML:t._s(s.name)}})])])}),0)])])},staticRenderFns:[]};var p={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tjmvContainer"},[a("p",{staticClass:"tit"},[t._v("Mv排行")]),t._v(" "),a("div",{staticClass:"content"},t._l(t.mvl,function(s){return a("div",{key:s.id,staticClass:"img"},[a("img",{attrs:{src:s.cover,alt:""}}),t._v(" "),a("span",{staticClass:"fonts fa fa-play-circle-o"}),t._v(" "),a("div",{staticClass:"bottom"},[a("div",{staticClass:"left"},[a("span",[t._v(t._s(s.name))])]),t._v(" "),a("div",{staticClass:"right"},[a("img",{attrs:{src:s.cover,alt:""}})])])])}),0)])},staticRenderFns:[]};var d={data:function(){return{title:"推荐歌单",smalltitle:"歌单广场",result:[],smalltitle2:"更多新碟",title2:'<p style ="font-size:15px; color:#999;"><span data-id = "1" class ="tj font">新碟</span> <span data-id = "2"  class ="new">新歌</span> </p>',result2:[]}},methods:{getgedan:function(){var t=this;this.$ajax.get("api/personalized",{params:{limit:6}}).then(function(s){t.result=s.data.result})},cld:function(t){var s=this;0==t?(this.result2=[],this.$ajax.get("api/top/album",{params:{limit:3}}).then(function(t){s.result2=t.data.albums}),this.smalltitle2="更多新碟"):1==t&&(this.$ajax.get("api/top/song",{params:{type:0}}).then(function(t){var a=t.data.data;s.result2=[];for(var i=0;i<a.length;i++)if(i<=2){var e=[];e.push(a[i]);for(var n=0;n<e.length;n++){var l={id:a[i].id,picUrl:a[i].album.picUrl,name:a[i].name};s.result2.push(l)}}}),this.smalltitle2="更多新歌")},clds:function(){var t=this;this.$ajax.get("api/top/album",{params:{limit:3}}).then(function(s){t.result2=s.data.albums})}},created:function(){this.getgedan(),this.clds()},components:{vSwiper:a("VU/8")({data:function(){return{banners:[]}},methods:{getswiper:function(){var t=this;this.$ajax.get("api/banner",{params:{type:1}}).then(function(s){t.banners=s.data.banners})}},created:function(){this.getswiper()}},u,!1,function(t){a("6kgt")},"data-v-56132261",null).exports,vRecommend:a("VU/8")({props:["title","smalltitle","result"],data:function(){return{}},methods:{qiehuan:function(){var t=this,s=this;this.$refs.ttt&&function(){for(var a=t.$refs.ttt.children[0].children,i=function(t){a[t].onclick=function(){s.$emit("cld",t),a[0].classList.remove("font"),a[1].classList.remove("font"),this.classList.add("font")}},e=0;e<a.length;e++)i(e)}()}},mounted:function(){this.qiehuan()}},f,!1,function(t){a("GhnU")},null,null).exports,vTjmv:a("VU/8")({data:function(){return{mvl:[]}},methods:{getmvtop:function(){var t=this;this.$ajax.get("api/top/mv",{params:{limit:5}}).then(function(s){t.mvl=s.data.data})}},created:function(){this.getmvtop()}},p,!1,function(t){a("LbvW")},null,null).exports}},_={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"findContainer"},[a("v-swiper"),t._v(" "),a("div",{staticClass:"fenlei"},[a("ul",[t._m(0),t._v(" "),t._m(1),t._v(" "),a("router-link",{attrs:{to:"/toplist",tag:"li"}},[a("p",[a("span",{staticClass:"fa fa-list-ol"})]),t._v(" "),a("p",[t._v("排行榜")])]),t._v(" "),t._m(2),t._v(" "),t._m(3)],1)]),t._v(" "),a("v-recommend",{attrs:{title:t.title,result:t.result,smalltitle:t.smalltitle}}),t._v(" "),a("v-recommend",{attrs:{result:t.result2,title:t.title2,smalltitle:t.smalltitle2},on:{cld:t.cld}}),t._v(" "),a("v-tjmv")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("span",{staticClass:"fa fa-calendar-o"})]),this._v(" "),s("p",[this._v("每日推荐")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("span",{staticClass:"fa fa-music"})]),this._v(" "),s("p",[this._v("歌单")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("span",{staticClass:"fa fa-tv"})]),this._v(" "),s("p",[this._v("视频")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("span",{staticClass:"fa fa-podcast"})]),this._v(" "),s("p",[this._v("电台")])])}]};var m=a("VU/8")(d,_,!1,function(t){a("a5BY")},"data-v-330f4b7c",null).exports,h=a("GQaK"),g={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},listenScroll:{type:Boolean,default:!1},data:{type:Array,default:null},pullup:{type:Boolean,default:!1},beforeScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:200}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){var t=this;if(this.$refs.wrapper){if(this.scroll=new h.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click}),this.listenScroll){var s=this;this.scroll.on("scroll",function(t){s.$emit("scroll",t)})}this.pullup&&this.scroll.on("scrollEnd",function(){t.scroll.y<=t.scroll.maxScrollY+50&&t.$emit("scrollToEnd")}),this.scroll.on("scroll",function(s){t.$emit("scroll",s)}),this.beforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("beforeScrolls")})}},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},300)}}},C={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrapper"},[this._t("default")],2)},staticRenderFns:[]};var y=a("VU/8")(g,C,!1,function(t){a("C74v")},"data-v-733f4818",null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"loading"},[s("div",{staticClass:"s"},[s("span",{staticClass:"fa fa-spinner"})])])}]};var w=a("VU/8")(null,b,!1,function(t){a("L8Lp")},null,null).exports,$={props:["list"],data:function(){return{}},components:{vScroll:y},methods:{gogogo:function(t){},scroll:function(t){if(console.log(t.y),t.y>-274){console.log(111);var s=document.getElementById("tonav");s.style.transform="translateY(-100%)",s.style.opacity=0}if(t.y<-274){console.log(222);var a=document.getElementById("tonav");a.style.transform="translateY(0)",a.style.opacity=1}}},mounted:function(){var t=this;setTimeout(function(){t.$refs.wwww._initScroll()},200)},watch:{}},k={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"gequlistContainer"},[a("div",{staticClass:"to to2",attrs:{id:"tonav"}},[a("div",{staticClass:"vleft"},[a("span",{staticClass:"play fa fa-play-circle-o"}),t._v(" "),a("span",[t._v("播放全部 "),a("small",[t._v("(共"+t._s(t.list.length)+"首歌)")])])]),t._v(" "),t._m(0)]),t._v(" "),a("v-scroll",{ref:"wwww",attrs:{data:t.list},on:{scroll:t.scroll}},[a("div",{ref:"wrp",staticClass:"wrappers"},[a("div",{ref:"cont",staticClass:"contents"},[a("div",{staticClass:"to"},[a("div",{staticClass:"vleft"},[a("span",{staticClass:"play fa fa-play-circle-o"}),t._v(" "),a("span",[t._v("播放全部 "),a("small",[t._v("(共"+t._s(t.list.length)+"首歌)")])])]),t._v(" "),a("div",{staticClass:"vright"},[a("span",{staticClass:"fa fa-plus"}),t._v("\n                        收藏(23.3万)\n                    ")])]),t._v(" "),a("div",{staticClass:"lists"},[a("ul",t._l(t.list,function(s){return a("li",{key:s.id,on:{click:function(a){return t.gogogo(s)}}},[a("div",{staticClass:"name"},[a("p",{staticClass:"gequname"},[t._v(t._s(s.name))]),t._v(" "),a("p",{staticClass:"singername"},[t._v(t._s(s.ar[0].name))])]),t._v(" "),a("p",{staticClass:"pright"},[a("span",{staticClass:"video fa fa-youtube-play"}),t._v(" "),a("span",{staticClass:"gengduo fa fa-ellipsis-v"})])])}),0),t._v(" "),a("ul",[a("li",{on:{click:t.gogogo}},[t._v("1111111111111")]),t._v(" "),a("li",[t._v("1111111111111")]),t._v(" "),a("li",[t._v("1111111111111")]),t._v(" "),a("li",[t._v("1111111111111")]),t._v(" "),a("li",[t._v("1111111111111")]),t._v(" "),a("li",[t._v("1111111111111")]),t._v(" "),a("li",[t._v("1111111111111")]),t._v(" "),a("li",[t._v("1111111111111")]),t._v(" "),a("li",[t._v("1111111111111")]),t._v(" "),a("li",[t._v("1111111111111")]),t._v(" "),a("li",[t._v("1111111111111")]),t._v(" "),a("li",[t._v("1111111111111")]),t._v(" "),a("li",[t._v("1111111111111")])])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vright"},[s("span",{staticClass:"fa fa-plus"}),this._v("\n                        收藏(23.3万)\n                    ")])}]};var x={data:function(){return{list:[],img:""}},computed:{styl:function(){if(this.list)return"background-image:url('"+this.img+"')"}},mounted:function(){console.log(window)},props:["name","arr"],methods:{back:function(){this.$emit("bck",!1)}},components:{vGequlist:a("VU/8")($,k,!1,function(t){a("I1Rb")},null,null).exports,vLoging:w},watch:{arr:function(t){this.list=t;for(var s=0;s<this.list.length;s++)this.img=this.list[0].al.picUrl}}},E={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("transition",{attrs:{name:"tli"}},[a("div",{staticClass:"toplistinfoContainer"},[a("div",{staticClass:"tops"},[a("span",{staticClass:"back fa fa-arrow-down",on:{click:t.back}}),t._v(" "),a("span",{staticClass:"list"},[t._v(t._s(t.name))]),t._v(" "),a("div",{staticClass:"bgc",style:t.styl}),t._v(" "),a("div",{staticClass:"bottom"},[a("ul",[a("li",[a("p",{staticClass:"fa fa-commenting-o"}),t._v(" "),a("p",{staticClass:"nnn"},[t._v("1.9万")])]),t._v(" "),a("li",[a("p",{staticClass:"fa fa-share-alt-square"}),t._v(" "),a("p",{staticClass:"nnn"},[t._v("下载")])]),t._v(" "),a("li",[a("p",{staticClass:"fa fa-share-alt"}),t._v(" "),a("p",{staticClass:"nnn"},[t._v("分享")])]),t._v(" "),a("li",[a("p",{staticClass:"fa fa-check-square"}),t._v(" "),a("p",{staticClass:"nnn"},[t._v("多选")])])])])]),t._v(" "),a("div",{staticClass:"div"},[a("v-gequlist",{attrs:{list:t.list}})],1),t._v(" "),""==t.list?a("v-loging"):t._e(),t._v(" "),a("div",{staticClass:"btm"},[a("p",[t._v("没有数据了")])])],1)])},staticRenderFns:[]};var T={components:{vScroll:y,vLoading:w,vToplistinfo:a("VU/8")(x,E,!1,function(t){a("YdNk")},null,null).exports},data:function(){return{lists:[[],[],[]],flag:!1,toplistFlag:!1,name:"",arr:[]}},methods:{back:function(){this.$router.back()},bak:function(t){this.toplistFlag=t},gotoplist:function(t){this.name=t.name;var s=t.id;this.getlist(s),console.log(t),this.toplistFlag=!0},gettoplist:function(){var t=this;this.$ajax.get("api/toplist").then(function(s){var a=s.data.list;a&&(t.flag=!0);for(var i=0;i<a.length;i++)i<9?t.lists[0].push(a[i]):i>9&&i<19?t.lists[1].push(a[i]):t.lists[2].push(a[i])})},getlist:function(t){var s=this;this.$ajax.get("api/playlist/detail",{params:{id:t,limit:10}}).then(function(t){s.arr=t.data.playlist.tracks})},timestampToTime:function(t){var s=new Date(t),a=s.getFullYear()+"/",i=(s.getMonth()+1<10?"0"+(s.getMonth()+1):s.getMonth()+1)+"/",e=s.getDate()+" ";e=e>10?e:"0"+e;var n=s.getHours()+":",l=s.getMinutes()+":",r=s.getSeconds();return a+i+e+n+l+(r=r>10?r:"0"+r)}},created:function(){this.gettoplist()}},U={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("transition",{attrs:{name:"top"}},[a("div",{staticClass:"toplistContainer"},[a("div",{staticClass:"top"},[a("i",{staticClass:" fa fa-arrow-left",on:{click:t.back}}),t._v(" "),a("span",[t._v("排行榜")])]),t._v(" "),a("v-scroll",{attrs:{data:t.lists}},[a("div",{staticClass:"wrapper"},[0==t.flag?a("v-loading"):t._e(),t._v(" "),a("div",{staticClass:"ccc"},t._l(t.lists,function(s,i){return a("div",{key:i,staticClass:"content"},[a("p",{on:{click:t.gotoplist}},[t._v("211")]),t._v(" "),t._l(s,function(s){return a("ul",{key:s.id,on:{click:function(a){return t.gotoplist(s)}}},[a("li",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.coverImgUrl,expression:"list.coverImgUrl"}]}),t._v(" "),a("div",{staticClass:"right"},[a("ul",[a("li",[t._v(t._s(s.name))]),t._v(" "),a("li",[t._v(t._s(s.updateFrequency))]),t._v(" "),a("li",[t._v("最近更新("+t._s(t.timestampToTime(s.updateTime))+")")])])])])])})],2)}),0)],1)]),t._v(" "),a("v-toplistinfo",{directives:[{name:"show",rawName:"v-show",value:t.toplistFlag,expression:"toplistFlag"}],attrs:{name:t.name,arr:t.arr},on:{bck:t.bak}})],1)])},staticRenderFns:[]};var j=a("VU/8")(T,U,!1,function(t){a("6j92")},null,null).exports;i.default.use(v.a);var F=new v.a({routes:[{path:"/",redirect:"/find"},{path:"/find",component:m},{path:"/toplist",component:j}]}),R=(a("tb/R"),a("Muz9")),L=a.n(R),S=(a("rx0o"),a("uxEr"),a("wSez")),z=a.n(S);i.default.use(z.a),i.default.use(S.Lazyload,{preLoad:1.3,error:a("Khe3"),loading:a("G+D5"),attempt:1,observe:!0}),i.default.prototype.$ajax=L.a,i.default.use(v.a),new i.default({el:"#app",components:{App:c},template:"<App/>",router:F})},T7fC:function(t,s){},YdNk:function(t,s){},a5BY:function(t,s){},rx0o:function(t,s){},"tb/R":function(t,s){},uxEr:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.462e2f830452b8e6739f.js.map