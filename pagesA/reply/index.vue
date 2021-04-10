<template>
	<view class="reply">
		<navbar :title="`回复`" :isBack="true">
			<icon @click="jumpToHome" class="iconfont icon-shouye1"></icon>
		</navbar>

		<replyinput
		@clearCommentId='clearCommentId' 
		:replyCommentId="replyCommentId" 
		:placeholder="placeholder" 
		:isFocus="isFocus" 
		@sendFocusEvent='focusHandle' 
		@sendBlurEvent='blurHandle'/>
	</view>
</template>

<script>
	import { createNamespacedHelpers } from 'vuex'
	const { mapState } = createNamespacedHelpers('article')
	import navbar from '@/components/nav-bar/navbar.vue'
	import replyinput from '@/components/reply-input/index.vue'
	export default {
		props: {
			
		},
		components: {
			navbar,
			replyinput
		},
		data() {
			return {
				replyCommentId:0,
				isFocus:false,
				placeholder:'说说你的看法吧',
				commentInfo:{}
			}
		},
		computed:{
			...mapState(['articleId'])
		},
		onLoad(options) {
			console.log(`当前回复的commentId:${options.commentId},文章id：${this.articleId}` )
			this.replyCommentId = options.commentId
			setTimeout(()=>{
				this.commentInfo = {
						uid:3,
						name: '萨斯给',
						header: '../../static/image/zuozhu.jpg',
						level:1,
						like:21,
						replyName:null,
						commentId:1,
						replyTime:1615948353,
						replyContent:'赞一个！这篇文章不错,希望楼主把具体铭文配置也截图发出来',
						children:[
							{
								uid:2,
								name: '叶良辰',
								header: '../../static/image/head2.jpg',
								level:0,
								like:24,
								replyName:null,
								commentId:2,
								replyTime:1615959353,
								replyContent:'我也觉得',
								children:[{
									uid:1,
									name: '我锤石你德玛',
									header: '../../static/image/header.jpg',
									level:0,
									like:1,
									replyName:'叶良辰',
									commentId:3,
									replyTime:1615962353,
									replyContent:'谢谢支持~',
									identify:'author',
									children:[]
								}]
							},
							{
								uid:1,
								name: '我锤石你德玛',
								header: '../../static/image/header.jpg',
								level:0,
								like:2,
								replyName:null,
								commentId:4,
								replyTime:1615960353,
								replyContent:'后期继续更新！',
								identify:'author',
								children:[{
									uid:2,
									name: '叶良辰',
									header: '../../static/image/head2.jpg',
									level:0,
									like:0,
									replyName:'我锤石你德玛',
									commentId:5,
									replyTime:1615961353,
									replyContent:'催更催更',
									children:[{
										uid:1,
										name: '我锤石你德玛',
										header: '../../static/image/header.jpg',
										level:0,
										like:6,
										replyName:'叶良辰',
										commentId:6,
										replyTime:1615962353,
										replyContent:'这周事情比较多，所以时间比较少，下周一继续~',
										identify:'author',
										children:[]
									}]
								}]
							},
							{
								uid:4,
								name: '那路多',
								header: '../../static/image/mingren.jpg',
								level:0,
								like:21,
								replyName:null,
								commentId:1,
								replyTime:1615949353,
								replyContent:'要是辅助不配合怎么办 ~.~',
								children:[]
							}
						]
					}
				this.placeholder = `回复：${this.commentInfo.name}`
			},500)
		},
		methods: {
			jumpToHome() {
				uni.switchTab({
					url: '../../pages/index/index'
				})
			},
			sendMessage() {
				if (!this.message) {
					return
				}

				console.log('发送消息：', this.message)
				this.message = ''
			},
			focusHandle(){
				this.isFocus = true	
			},
			blurHandle(){
				this.isFocus = false
			},
			clearCommentId(){
				
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
