<template>
	<view class="mine">
		<view class="mine-bg">
		</view>
		<view class="login">
			<view class="title">
				登录后，体验精彩功能
			</view>
			<button open-type="getUserInfo" @getuserinfo="getUserInfo" size="default" type="">
				登录
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		components: {},
		onLoad() {

		},
		methods: {
			getUserInfo(data){
				console.log(data)
			}
		}
	}
</script>

<style lang="scss">
	.mine {
		height: 100vh;

		.mine-bg {
			height: 400rpx;
			background-image: linear-gradient(to right, #b810ff, #0066ff);
		}

		.login {
			text-align: center;
			.title {
				margin-top: 60rpx;
				font-size: 24rpx;
				color: #828282;
			}
			button{
				width: 70%;
				color: #fff;
				margin-top: 30rpx;
				font-size: 28rpx;
				line-height: 64rpx;
				background-image: linear-gradient(to left, #b810ff, #0066ff);
			}
		}
	}
</style>
