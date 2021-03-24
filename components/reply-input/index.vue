<template>
	<view class="reply-input">
		<view class="input-el">
			<input type="text" :class="message?'active':''" v-model="message" @focus="()=>{this.isFocus=true}"
				@blur="()=>{this.isFocus=false}" :placeholder="placeholder" />
		</view>
		<view class="send-btn" v-show="isFocus">
			<view class="btn" @click="sendMessage">
				发送
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {

		},
		components: {

		},
		data() {
			return {
				isFocus: false,
				placeholder: "说说你的看法吧",
				message: ''
			}
		},
		methods: {
			sendMessage(){
				if(!this.message){
					return 
				}
				
				console.log('发送消息：',this.message)
				this.message=''
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../static/iconfont/iconfont.css';

	.reply-input {
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 14rpx 0;
		box-sizing: 10;
		box-shadow: 0px 20px 30px 6px #f1f1f1;
		background-color: #fff;
		display: flex;

		.input-el {
			flex: 8.5;
			padding: 0 40rpx 0 40rpx;

			input {
				font-size: 28rpx;
				padding-left: 24rpx;
				color: #999999;
				height: 84rpx;
				border-radius: 46rpx;
				background-color: #ecedef;
			}

			.active {
				color: #000000;
			}
		}

		.send-btn {
			flex: 1.5;
			padding: 10rpx 20rpx 10rpx 0;

			.btn {
				display: inline-block;
				height: 60rpx;
				min-width: 90rpx;
				color: #fff;
				font-size: 26rpx;
				padding: 10rpx 20rpx 0;
				border-radius: 3px;
				background-color: #3c76ff;
			}
		}
	}
</style>
