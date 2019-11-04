<template>
	<div class ='loginContainer'>
			<p class="top">
				<span class="back fa fa-angle-left"></span>
				<span class='text'>登录</span>
			</p>
			<div class="center">
				<p class ='title'>未注册的手机号登录后将自动创建账号</p>
				<div class="label">
					<div class="input">
						<div class="tou">+86</div>
						<input type="text" placeholder="请输入手机号" v-model ='zh'>

					</div>

				</div>

				<input class ='psw' type="password" v-model ='psw' placeholder="请输入密码">

				<div class="submit" @click ='go'>
					登录
				</div>
			</div>


	</div>
</template>

<script>
import {Toast} from 'mint-ui'
	export default {
		data(){
			return　{
				flag : false,
				zh : '',
				psw : ''
			}
		},
		methods:{
			go(){
				this.$ajax.get('http://140.143.128.100:3000/login/cellphone',{
					params:{
						countrycode : 86,
						phone : this.zh,
						password : this.psw
					}
				}).then((res) => {
					console.log(res)
					let parse = res.data
					localStorage.setItem('user',JSON.stringify(parse))
					localStorage.setItem('loginType',true)
					this.$router.push('/')
					Toast('登录成功')

				})
			}
		}
	}
</script>

<style lang ='less' scoped>
.box{
	height: 100px;
	width: 100px;
	background-color: #fff;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}
.box-enter,
.box-leave-to{
	opacity: 0;
}
.box-enter-active,
.box-leave-active{
	transition: all .5s ease;
}
	.loginContainer{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fff;
		.top{
			font-size: 20px;
			text-align: center;
			.back {
				position: absolute;
				left: 20px;
				top: 5px;
			}
			.text{
				margin-top: 20px;
				font-size: 15px;
			}
		}
		.center{
			margin-top: 75px;
			padding: 0 20px;
			.title{
				color: #999;
				font-size: 13px;
			}
			.label {
				display: flex;
				height: 30px;
				line-height: 30px;
				border-bottom: 1px solid #999;
				margin:  30px 0;
				.input{
					display: flex;
					color: #999;
				}
				input{
					color: #999;
					border: none;
					height: 30px;
					line-height: 30px;
					padding-left: 20px;
				}
			}
			.psw{
					color: #999;
					border: none;
					height: 30px;
					width: 88%;
					line-height: 30px;
					padding:  0 20px;
					border-bottom: 1px solid #999;
					margin-bottom: 30px;
			}
			.submit{
				margin: 0 auto;
				width: 200px;
				height: 35px;
				line-height: 35px;
				text-align: center;
				color: #fff;
				background-color:red;
				border-radius: 30px;
			}
		}
	}
</style>