<template>
	<view class="review">
		<block  v-for="(item,index) in commentList" :key="item.level">
			<view class="floor-item" v-if="showLimit?index<2:true">
				<view class="user-info">
					<image :src="item.header" mode="widthFix"></image>
					<view class="user-name">
						<view class="text-name">{{item.name}} <text class="identify" v-if="item.identify && item.identify=='author'">作者</text></view>
						<view class="text-time">第{{item.level}}楼 | {{item.replyTime | formatTime}}</view>
					</view>
					<view class="like-count">
						<icon class="iconfont icon-like"><text>{{item.like}}</text></icon>
					</view>
				</view>
				<view class="floor-content">
					<view class="current-reply" @click="focusReplyInput(item.name,item.uid,item.commentId)">
						{{item.replyContent}}
					</view>
					<flooritem @sendToReply="jumpToReply(item.commentId)" :floorChildren="item.children"></flooritem>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import {
		formatTime
	} from '../../utils/index.js'
	import flooritem from '../floor-item/index.vue'
	export default {
		props: {
			commentList: {
				type: Array,
				default: []
			},
			showLimit: {
				type: Boolean,
				default: true
			}
		},
		components: {
			flooritem
		},
		filters: {
			formatTime
		},
		methods:{
			jumpToReply(commentId){
				uni.navigateTo({
					url:`../../pages/reply/index?commentId=${commentId}`
				})
			},
			focusReplyInput(name,uid,commentId){
				this.$emit('sendFocusHandle',{name,uid,commentId})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../static/iconfont/iconfont.css';

	.review {

		.floor-item {
			padding: 10rpx 30rpx;
			margin-top: 10rpx;
			.user-info {
				position: relative;
				display: flex;

				image {
					vertical-align: middle;
					width: 70rpx;
					height: 70rpx;
					border-radius: 50%;
				}

				.user-name {
					margin-left: 40rpx;
					font-size: 24rpx;

					.text-name {
						font-size: 28rpx;
						font-weight: 600;
						.identify{
							font-weight: 400;
							color: #b8b8b8;
							margin-left: 20rpx;
						}
					}

					.text-time {
						color: #a1a1a1;
					}
				}

				.like-count {
					position: absolute;
					right: 0rpx;
					top: 0rpx;
					min-width: 80rpx;
					text-align: left;

					text {
						font-size: 24rpx;
					}
				}

			}

			.floor-content {
				// border: 1px solid black;
				padding: 10rpx 0 10rpx 110rpx;

				.current-reply {
					font-size: 32rpx;
				}

			}
		}
	}
</style>
