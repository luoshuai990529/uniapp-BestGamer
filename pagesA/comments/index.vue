<template>
	<view class="comments">
		<view class="comment-mask" @click="hideSelector" v-show="showSelector"></view>
		<navbar :title="`评论`" :isBack="true">
			<icon @click="jumpToHome" class="iconfont icon-shouye1"></icon>
		</navbar>
		<view class="comment-top">
			<view class="left">
				<view class="all-reply" @click="()=>{this.readIndex=0}" :class="readIndex==0?'active':''">全部回复</view>
				<view class="only-author" @click="()=>{this.readIndex=1}" :class="readIndex==1?'active':''">只看作者</view>
			</view>
			<view class="right" @click="unfoldHandle">
				<view class="current">
					{{sortType[sortordIndex].desc}}
					<icon class="iconfont icon-xiangxia" :class="showSelector?'active':''"></icon>
				</view>
				<view class="selector" v-show="showSelector">
					<view class="order-type" @click="secOrderHandle(index)" :class="sortordIndex==index?'active':''" v-for="(item,index) in sortType" :key="item.type">
						{{item.desc}}
					</view>
				</view>
			</view>
		</view>
		<view class="comment-details">
			<reviewlist 
			@sendFocusHandle='replyUser' 
			:showLimit="false" 
			:commentList="commentList" />
		</view>
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
	import navbar from '@/components/nav-bar/navbar.vue'
	import reviewlist from '@/components/review-list/index.vue'
	import replyinput from '@/components/reply-input/index.vue'
	export default {
		props: {

		},
		components: {
			navbar,
			reviewlist,
			replyinput
		},
		data() {
			return {
				readIndex: 0, //看全部还是看作者
				sortordIndex: 0, //时间顺序
				showSelector:false, //是否显示时间顺序选择
				replyCommentId:0, //回复的评论id
				isFocus:false, //输入框是否聚焦
				placeholder:"说说你的看法吧", //输入框提示内容
				sortType: [
					{type: 1,desc: "时间正序"},
					{type: 2,desc: "时间倒序"}
				],
				commentList:[
					{
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
					},
					{
						uid:2,
						name: '叶良辰',
						header: '../../static/image/head2.jpg',
						level:2,
						like:1,
						replyName:null,
						commentId:7,
						replyTime:1616148353,
						replyContent:'沙发',
						children:[]
					},
					{
						uid:2,
						name: '叶良辰',
						header: '../../static/image/head2.jpg',
						level:3,
						like:1,
						replyName:null,
						commentId:8,
						replyTime:1616358353,
						replyContent:'3楼继续！沙发',
						children:[]
					},
					{
						uid:1,
						name: '我锤石你德玛',
						header: '../../static/image/header.jpg',
						level:4,
						like:2,
						replyName:null,
						commentId:9,
						replyTime:1616460353,
						identify:'author',
						replyContent:'装备可以根据对局灵活选择变通！',
						children:[
							{
								uid:4,
								name: '那路多',
								header: '../../static/image/mingren.jpg',
								level:0,
								like:0,
								replyName:null,
								commentId:11,
								replyTime:1616462353,
								replyContent:'细节~',
								children:[]
							}
						]
					},
					{
						uid:4,
						name: '那路多',
						header: '../../static/image/mingren.jpg',
						level:5,
						like:9,
						replyName:null,
						commentId:10,
						replyTime:1616549353,
						replyContent:'顶顶顶',
						children:[]
					}
				]
			}
		},
		watch:{
			readIndex(val){
				console.log('readIndex变化：',val)
				if(val == 1){
					this.commentList = this.commentList.filter(item=>{
						return item.identify == 'author'
					})
				}else{
					this.commentList = [
						{
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
						},
						{
							uid:2,
							name: '叶良辰',
							header: '../../static/image/head2.jpg',
							level:2,
							like:1,
							replyName:null,
							commentId:7,
							replyTime:1616148353,
							replyContent:'沙发',
							children:[]
						},
						{
							uid:2,
							name: '叶良辰',
							header: '../../static/image/head2.jpg',
							level:3,
							like:1,
							replyName:null,
							commentId:8,
							replyTime:1616358353,
							replyContent:'3楼继续！沙发',
							children:[]
						},
						{
							uid:1,
							name: '我锤石你德玛',
							header: '../../static/image/header.jpg',
							level:4,
							like:2,
							replyName:null,
							commentId:9,
							replyTime:1616460353,
							identify:'author',
							replyContent:'装备可以根据对局灵活选择变通！',
							children:[
								{
									uid:4,
									name: '那路多',
									header: '../../static/image/mingren.jpg',
									level:0,
									like:0,
									replyName:null,
									commentId:11,
									replyTime:1616462353,
									replyContent:'细节~',
									children:[]
								}
							]
						},
						{
							uid:4,
							name: '那路多',
							header: '../../static/image/mingren.jpg',
							level:5,
							like:9,
							replyName:null,
							commentId:10,
							replyTime:1616549353,
							replyContent:'顶顶顶',
							children:[]
						}
						]
				}
			}
		},
		onLoad(options) {
			this.isFocus = options.isFocus == 'true'
			// this.isFocus = options.isFocus
		},
		methods: {
			jumpToHome() {
				uni.switchTab({
					url: '../index/index'
				})
			},
			unfoldHandle(){
				this.showSelector = !this.showSelector
			},
			hideSelector(){
				this.showSelector = false
			},
			secOrderHandle(index){
				this.sortordIndex = index
			},
			replyUser(userInfo){
				this.isFocus = true
				this.placeholder = `回复：${userInfo.name}`
				this.replyCommentId = userInfo.commentId
				console.log(`回复名字：${userInfo.name},回复id${userInfo.uid},评论Id${userInfo.commentId}`)
			},
			focusHandle(){
				this.isFocus = true	
			},
			blurHandle(){
				this.isFocus = false
				this.placeholder = '说说你的看法吧'
			},
			clearCommentId(){
				this.replyCommentId = 0
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../static/iconfont/iconfont.css';

	.comments {
		position: relative;
		min-height: 100vh;
		padding-bottom: 140rpx;
		.comment-mask{
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			z-index: 99;
		}
		.icon-shouye1 {
			font-size: 38rpx;
			margin-left: 24rpx;
		}

		.comment-top {
			display: flex;
			justify-content: space-between;
			padding: 0rpx 20rpx;
			color: #545454;
			background-color: #fff;
			.left {
				font-size: 30rpx;
				display: flex;

				.all-reply {}

				.only-author {
					margin-left: 40rpx;
				}

				.active {
					font-size: 32rpx;
					color: #000000;
					font-weight: 600;
				}
			}

			.right {
				position: relative;
				.current {
					position: relative;
					font-size: 26rpx;
					padding-top: 6rpx;
					padding-right: 40rpx;
					.icon-xiangxia {
						position: absolute;
						right: 8rpx;
						top: -10rpx;
						color: #acacac;
						transition: .5s all;
						transform: rotate(0deg);
						transform-origin: 50% 65% ;
					}
					.active{
						transform: rotate(180deg);
					}
				}
				.selector{
					position: absolute;
					z-index: 100;
					top: 52rpx;
					left: -18rpx;
					border-radius: 3px;
					background-color: #fff;
					box-shadow: 0px 0px 12px -4px #cacaca;
					.order-type{
						padding: 20rpx;
						font-size: 26rpx;
						&:not(:nth-child(1)){
							border-top: 1px solid #f0f0f0;
						}
					}
					.active{
						color: #3385ff;
					}
				}
			}
		}
		.comment-details{
			margin-top: 30rpx;
		}
		
	}
</style>
