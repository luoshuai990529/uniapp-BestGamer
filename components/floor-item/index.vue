<template>
	<view class="floor-inner" v-if="floorChildren.length>0">
		<block  v-for="(item,index) in flatArr" :key="item.commentId">
			<view class="reply-item" v-if="!item.replyName && index<2">
				<text class="reply-name">
					<text class="pname">{{item.name}}</text>
					<!-- <text class="icon" v-if="!item.replyName">：</text> -->
					<!-- <text class="by-reply" v-if="item.replyName">回复 {{item.replyName}}：</text> -->
				</text>
				<text class="reply-con">{{item.replyContent}}</text>
			</view>
		</block>
		<view class="check-all" v-if="flatArr.length>2" @click="jumpToReply">
			查看全部{{flatArr.length}}条评论 <icon class="iconfont icon-xiangyou"></icon>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			floorChildren: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				flatArr: []
			}
		},
		mounted() {
			console.log(this.floorChildren)
		},
		mounted() {
			this.flatChildren(this.floorChildren)
		},
		methods: {
			flatChildren(children) {
				// if(this.flatArr.length==2) return

				children.forEach(item => {
					this.flatArr.push(item)
					if (item.children.length > 0) {
						setTimeout(() => {
							this.flatChildren(item.children)
						}, 0)
					}
				})
			},
			jumpToReply(){
				this.$emit('sendToReply')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../static/iconfont/iconfont.css';
	.floor-inner {
		margin-top: 10rpx;
		padding: 12rpx 20rpx;
		background-color: #f5f5f5;

		.reply-item {
			font-size: 28rpx;
			margin-top: 10rpx;
			.reply-name {
				.pname {
					color: #4884d4;

					&::after {
						content: "：";
					}
				}

				.icon {
					color: #4884d4;
				}

				.by-reply {
					// padding-left: 4rpx;
					margin-left: 5rpx;
				}
			}

			.reply-con {}
		}

		.check-all {
			font-size: 28rpx;
			color: #a1a1a1;
			vertical-align: middle;
			margin-top: 10rpx;
			.icon-xiangyou {
				font-size: 24rpx;
				margin-left: 10rpx;
			}
		}
	}
</style>
