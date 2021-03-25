<template>
	<view class="reply-input" :class="isFocus?'focus':''">
		<view class="input-el">
			<input type="text" :focus="isFocus" :class="message?'active':''" v-model="message" @focus="focusHandler"
				@blur="blurHandler" :placeholder="placeholder" />
		</view>
		<view class="send-btn" v-show="isFocus">
			<view class="btn" @click="sendMessage">
				发送
			</view>
		</view>
	</view>
</template>

<script>
	import { createNamespacedHelpers } from 'vuex'
	const { mapState } = createNamespacedHelpers('article') // 单独某个子模块的辅助函数
	export default {
		props: {
			replyCommentId:{//回复评论的commentId
				type:Number,
				default:0
			},
			isFocus:{
				type:Boolean,
				default:false
			},
			placeholder:{
				type:String,
				default:'说说你的看法吧'
			}
		},
		computed:{
			...mapState(['articleId'])
		},
		data() {
			return {
				message: ''
			}
		},
		methods: {
			focusHandler(){
				this.$emit('sendFocusEvent')
			},
			blurHandler(){
				this.$emit('sendBlurEvent')
			},
			sendMessage(){
				if(!this.message){
					return 
				}
				console.log(`回复人replyCommentId：${this.replyCommentId}`)
				console.log(`评论文章ID:${this.articleId}发送消息：`,this.message)
				this.message=''
				
				this.$emit('clearCommentId')
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
		height: 112rpx;
		padding: 14rpx 0 0;
		box-shadow:0px 0px 16px -4px #cccbcb;
		// border-top: 1px solid #e4e4e4;
		background-color: #fff;
		display: flex;
		overflow: hidden;
		&.focus{
			height: 126rpx;
			// bottom: 14rpx;
		}
		.input-el {
			flex: 8.5;
			padding: 0 40rpx 0 40rpx;
			margin-bottom: 14rpx;
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
			padding: 14rpx 20rpx 10rpx 0;

			.btn {
				display: inline-block;
				height: 60rpx;
				min-width: 90rpx;
				color: #fff;
				font-size: 26rpx;
				padding: 12rpx 20rpx 0;
				border-radius: 3px;
				background-color: #3c76ff;
			}
		}
	}
</style>
