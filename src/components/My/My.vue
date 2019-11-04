<template>
	<div class="myContainer">
		<div class="me">
			<ul>
				<li><i class ='fa fa-music'></i>最近播放<span>(0)</span></li>
				<li><i class ='fa fa-music'></i>我的电台<span>(0)</span></li>
				<li><i class ='fa fa-user-plus'></i>我的收藏<span>(专辑/歌手/视频/专栏/Mlog)</span></li>
			</ul>
		</div>
		<div class="cleateDj">
			<div class="top">
				<div class="left">
					<span class ='fa fa-angle-down'></span>
				创建的歌单(1)
				</div>
				<div class="right">
					<span class ='fa fa-plus'></span>
				<span class ='fa fa-list'></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang ='less' scoped>
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