<template>
	<view class="details">
		<navbar @titleClick="jumpToArea" :title="`${sortName} >`" :isBack="true">
			<icon @click="jumpToHome" class="iconfont icon-shouye1"></icon>
		</navbar>
		<view class="details-content">
			<view class="author">
				<image :src="articelData.header" mode="widthFix"></image>
				<view class="author-name">
					<view class="text-name">{{articelData.name}}</view>
					<view class="text-time">{{articelData.createTime | formatTime}}</view>
				</view>
			</view>
			<view class="main-body ">
				<view class="title">
					文章内容~~~
					<!-- {{articelData.title}} -->
				</view>
			</view>
		</view>
		<view class="comment">
			<view class="top">
				评论
			</view>
			<reviewlist :commentList="articelData.commentList"></reviewlist>
		</view>
		<view class="check-all" @click="jumpToComment(false)">
			查看全部{{articelData.commentList.length}}条评论
		</view>
		<view class="reply"> 
			<view class="reply-input" @click="jumpToComment(true)">
				评论一句,前排打call
			</view>
			<view class="revert" @click="jumpToComment(false)">
				<icon class="iconfont icon-huifu">
					<text class="num">{{articelData.comments}}</text>
				</icon>
			</view>
			<view class="star">
				<icon class="iconfont icon-shoucang" :class="isStar?'active':''" @click="starHandle"></icon>
			</view>
			<view class="share">
				<icon class="iconfont icon-icon--1"></icon>
			</view>
		</view>
	</view>
</template>

<script>
	import { createNamespacedHelpers } from 'vuex'
	const { mapActions } = createNamespacedHelpers('article')
	import navbar from '@/components/nav-bar/navbar.vue'
	import reviewlist from '@/components/review-list/index.vue'
	import {
		formatTime
	} from '../../utils/index.js'
	export default {
		components: {
			navbar,
			reviewlist
		},
		filters: {
			formatTime
		},
		data() {
			return {
				sortId: '',
				sortName: '',
				isStar:false,
				articelData: {
					type: 1,
					sortId: 2,
					articelId: 113,
					createTime: 1615888353,
					replyTime: 1615848353,
					uid: 10086,
					header: '../../static/image/header.jpg',
					name: '我锤石你德玛',
					title: '国服后裔最细对线攻略来啦！下面细说！',
					content: '有个明世隐就赢了',
					image: ['../../static/image/houyi.jpg'],
					tag: '王者荣耀',
					comments: 128,
					like: 216,
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
			}
		},
		onLoad(option) {
			console.log(`获取articelId：${option.articelId}修改 vuex状态，并获取文章数据`)
			this.changeArticleId(option.articelId) //修改vuex的状态
			this.getData(option.articelId)
		},
		methods: {
			...mapActions(['changeArticleId']),
			getData(articelId) {
				this.sortId = 2
				this.sortName = '王者荣耀'
				this.isStar = false
			},
			jumpToHome() {
				uni.switchTab({
					url: '../index/index'
				})
			},
			jumpToArea() {
				if (this.sortId) {
					console.log(`跳转对应${this.sortId}专区`)
				}
			},
			jumpToComment(isFocus = false){
				uni.navigateTo({
					url:`../../pagesA/comments/index?isFocus=${isFocus}`
				})
			},
			starHandle(){
				this.isStar = !this.isStar
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../static/iconfont/iconfont.css';
	.details {
		position: relative;
		padding-bottom: 200rpx;
		.icon-shouye1 {
			font-size: 38rpx;
			margin-left: 24rpx;
		}

		.details-content {
			padding: 20rpx 30rpx 14rpx;

			.author {
				display: flex;

				image {
					vertical-align: middle;
					width: 70rpx;
					height: 70rpx;
					border-radius: 50%;
				}

				.author-name {
					margin-left: 40rpx;
					font-size: 24rpx;

					.text-name {
						font-size: 28rpx;
					}

					.text-time {
						color: #a1a1a1;
					}
				}

			}

			.main-body {
				min-height: 400rpx;
				margin-top: 40rpx;
				
				.title {
					font-weight: 600;
				}
			}
		}
		.comment {
			margin-top: 40rpx;
			border-top: 5px solid #f5f5f5;
		
			.top {
				font-size: 28rpx;
				padding: 20rpx 30rpx;
			}
		}
		.check-all{
			line-height: 84rpx;
			text-align: center;
			color: #fff;
			font-size: 28rpx;
			width: 90%;
			margin:80rpx auto 0rpx;
			border-radius: 40rpx;
			background-image: linear-gradient(to left,#2b8cff,#2bb8ff);
		}
		.reply{
			display: flex;
			justify-content: space-around;
			position: fixed;
			bottom: 0;
			right: 0;
			left: 0;
			z-index: 99;
			background-color: #fff;
			padding: 0 20rpx ;
			border-top: 1px solid #f1f1f1;
			box-shadow: 0px 20px 30px 6px #f1f1f1;
			.iconfont{
				font-size: 46rpx;
			}
			.icon-shoucang{
				color: #bab8ba;
			}
			>view{
				text-align: center;
			}
			.reply-input{
				flex: 8;
				text-align: left;
				font-size: 28rpx;
				height: 60rpx;
				margin-top: 16rpx;
				padding-top: 10rpx;
				// line-height: 50rpx;
				padding-left: 10px;
				color: #a8a8a8;
				background-color: #ecedef;
				border-radius: 40rpx;
			}
			.revert{
				position: relative;
				line-height: 92rpx;
				flex: 1.5;
				
				.num{
					display: inline-block;
					position: absolute;
					right: -22rpx;
					top: 10rpx;
					line-height: 30rpx;
					border-radius: 20rpx;
					padding: 0 12rpx;
					min-width: 50rpx;
					font-size: 24rpx;
					background-color: #f34f18;
					color: #fff;
					text-align: center;
				}
			}
			.star{
				line-height: 92rpx;
				flex: 1.5;
				.iconfont.active{
					color: #ffda20;
				}
			}
			.share{
				line-height: 92rpx;
				flex:1.5;
			}
		}

	}
</style>
