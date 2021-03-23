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
					{{articelData.title}}
				</view>
			</view>
		</view>
		<view class="comment">
			<view class="top">
				评论
			</view>
		</view>
		<view class="reply">
			<view class="reply-input">
				评论一句,前排打call
			</view>
			<view class="revert">
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
	import navbar from '@/components/nav-bar/navbar.vue'
	import {
		formatTime
	} from '../../utils/index.js'
	export default {
		components: {
			navbar
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
					title: '国服后裔最细对线攻略来啦！楼下细说！',
					content: '',
					image: ['../../static/image/houyi.jpg'],
					tag: '王者荣耀',
					comments: 128,
					like: 216,
					commentList:[
						
					]
				}
			}
		},
		onLoad(option) {
			this.getData(option.articelId)
		},
		methods: {
			getData(articelId) {
				console.log(`根据articelId${articelId}获取数据`)
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
			starHandle(){
				this.isStar = !this.isStar
			}
		}
	}
</script>

<style lang="scss">
	@import '../../static/iconfont/iconfont.css';
	.details {
		position: relative;
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
				border: 1px solid black;
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
				// font-size: ;
				padding: 20rpx 30rpx;
			}
		}
		.reply{
			display: flex;
			justify-content: space-around;
			position: fixed;
			bottom: 0;
			right: 0;
			left: 0;
			z-index: 99;
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
