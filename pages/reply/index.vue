<template>
	<view class="reply">
		<navbar :title="`回复`" :isBack="true">
			<icon @click="jumpToHome" class="iconfont icon-shouye1"></icon>
		</navbar>

		<replyinput :isFocus="isFocus" />
	</view>
</template>

<script>
	import { createNamespacedHelpers } from 'vuex'
	const { mapState } = createNamespacedHelpers('article')
	import navbar from '@/components/nav-bar/navbar.vue'
	import replyinput from '@/components/reply-input/index.vue'
	export default {
		props: {
			isFocus:{
				type:Boolean,
				default:false
			}
		},
		components: {
			navbar,
			replyinput
		},
		data() {
			return {}
		},
		computed:{
			...mapState(['articleId'])
		},
		onLoad(options) {
			console.log(`当前回复的commentId:${options.commentId},文章id：${this.articleId}` )
		},
		methods: {
			jumpToHome() {
				uni.switchTab({
					url: '../index/index'
				})
			},
			sendMessage() {
				if (!this.message) {
					return
				}

				console.log('发送消息：', this.message)
				this.message = ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../static/iconfont/iconfont.css';

	.icon-shouye1 {
		font-size: 38rpx;
		margin-left: 24rpx;
	}

	.reply {
		position: relative;
		min-height: 100vh;
		padding-bottom: 140rpx;
	}
</style>
