<template>
	<div class="myContainer">
		<!-- <div class="wdl" v-if ='flag == false'>
				<ul>
					<li @click ='ss'>您还未登录</li>
					<li>登录倾听更多歌曲，享受更多特权</li>
					<li class='login' @click ='gologin'>立即登录</li>
				</ul>
		</div> -->
		<div class="ydl">
		<div class="me">
			<ul>
				<li @click ='golist'><i class ='fa fa-music'></i>最近播放<span>({{data.length}})</span></li>
				<li><i class ='fa fa-music'></i>我的电台<span>(0)</span></li>
				<li><i class ='fa fa-user-plus'></i>我的收藏<span>(专辑/歌手/视频/专栏/Mlog)</span></li>
			</ul>
		</div>
		<div class="cleateDj">
			<div class="top">
				<div class="left">
					<span class ='fa fa-angle-down'></span>
				创建的歌单({{gedan.length}})
				</div>
				<div class="right">
					<span @click ='tianjia' class ='fa fa-plus'></span>
				<span class ='fa fa-list'></span>
				</div>
			</div>
			<v-gedan :gedan = 'gedan'></v-gedan>
			<p class ='jietu'> <span class ='jiandao fa fa-scissors'></span> 截图导入歌单</p>
		</div>

		<div class="tjgd">
			<v-tj :result = 'result' title ='推荐歌单'></v-tj>
		</div>
		</div>
	</div>
</template>

<script>
import vGedan from '../search/comp/gedan'
import vTj from '../find/Recommend'
	export default {
		components:{
			vGedan,
			vTj
		},
		data(){
			return {
				user : [],
				gedan : [],
				result: [],
				data:[],
			}
		},
		methods : {
			ss(){
				console.log(this.flag)
			},
			gologin(){
				this.$router.push('/login')
			},
			getuserDj () {
	let data = JSON.parse(localStorage.getItem('user'))
	this.user = data.profile
	console.log(this.user.userId)
				this.$ajax.get('http://140.143.128.100:3000/user/playlist',{
				params:{
						uid : this.user.userId
				}
				}).then((res) => {
					this.gedan = res.data.playlist
				})
			},
			gettjgd(){

				this.$ajax.get('http://140.143.128.100:3000/personalized',{
					params:{
						limit:20
					}
				}).then((res)=>{
					this.result = res.data.result
				})
			},
			tianjia(){
	this.$ajax.get('http://140.143.128.100:3000/login/refresh').then((res)=>{
						console.log(res.data)
					})
				this.$ajax.get('http://140.143.128.100:3000/playlist/create',{
					params:{
						name : '测试歌单'
					}
				}).then((res) => {
					console.log(res.data)
				})
			},
			zjbf(){
				this.data = JSON.parse(localStorage.getItem('bflist') || [])
				console.log(this.data)
				console.log(111)
				console.log(222)
				
			},
			golist(){
				this.$router.push('/bflist')
			}
		},
		created(){
			this.getuserDj()
			this.gettjgd()
			this.zjbf()
			
		},
		watch : {
			
		}
	}
	

</script>

<style lang ='less' scoped>
.wdl{
	ul{
		li{
			width: 100%;
			text-align: center;
			line-height: 40px;
			color:#999;
			font-size: 15px;
		}
		.login {
			width: 150px;
			height: 40px;
			border:1px solid #999;
			margin:100px auto;
		}
	}
}
.tjgd{
	margin-top: 30px;
	padding: 0 20px;
}
.jietu{
	margin-top: 30px;
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align:center;
	border:1px dashed #999;
}
.jiandao{
	transform: rotate(-90deg);
	font-size: 20px;
}
	.myContainer{
	.me {
		ul {
			margin-left: 50px;
			li{
				line-height: 40px;
				font-size: 14px;
				span{
					font-size: 12px;
					color: #999;
					margin-left: 10px;
				}
				i{
					color: #999;
					margin-right: 20px;
					font-size: 20px;
				}
			}
		}
	}
	.cleateDj{
		padding: 0 20px;
		margin-top: 30px;
		.top{
			display: flex;
			justify-content: space-between;
			span{
				padding:  0 10px;
			}
		}
	}
	}
</style>