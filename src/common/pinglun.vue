<template>
	<div class="pinlunContainer">
		<!-- 热门评论 -->
		<div class="hotcomments">
			<p>精彩评论</p>
			<ul>
				<li v-for ='item in hotcomments' :key ='item.time'>
					<div class="top">
						<div class="name">
						<img v-lazy="item.user.avatarUrl" alt="">
							<p class="username">{{item.user.nickname}}</p>
							<p class="time">{{da(item.time)}}</p>
						</div>
						<div class="zan">
							666
						</div>
					</div>
					<div class="content">
						<p>{{item.content}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props:['hotcomments'],
		methods:{
			da(value){
					let date = new Date(value);
                    let y = date.getFullYear();// 年
                    let MM = date.getMonth() + 1;// 月
                    MM = MM < 10 ? ('0' + MM) : MM;
                    let d = date.getDate();// 日
                    d = d < 10 ? ('0' + d) : d;
                    let h = date.getHours();// 时
                    h = h < 10 ? ('0' + h) : h;
                    let m = date.getMinutes();// 分
                    m = m < 10 ? ('0' + m) : m;
                    let s = date.getSeconds();// 秒
                    s = s < 10 ? ('0' + s) : s;
                    return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
			}
		}
	}
</script>

<style lang ='less' scoped>
	.pinlunContainer{
		padding:  0 20px;
		background-color: #fff;
			.hotcomments{
				color: #999;
				p{
						font-size: 15px;
					}
				ul{
					margin-top: 20px;
					li{
						margin-top: 20px;
						.top{
							display: flex;
							justify-content: space-between;
							align-items: center;
							.name{
								width: 100%;
								img{
									width: 50px;
									height: 50px;
									border-radius: 50%;
									margin-right: 15px;
									float: left;
								}
								.username{
									font-size: 14px;
									color: #000;
								}
								.time{
									font-size: 12px;
								}
							}
						}
						.content{
							p{
							max-width: 234px;
						    overflow: hidden;
						    text-overflow: ellipsis;
						    display: -webkit-box;
						    -webkit-line-clamp: 3;
						    -webkit-box-orient: vertical;
						    display: inline-block;
						    margin-left: 64px;
						    word-wrap:break-word;
							}

						}
					}
				}
			}
	}
</style>