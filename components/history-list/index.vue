<template>
	<scroll-view v-show="!hideHistory" class="scroll-content" scroll-x="true" show-scrollbar="true">
		<view class="game-item" v-for="(item,index) in historyCache" :key="item.gameName">
			<view class="delete" @click="deleteHandle(item.gid)" v-show="showDelete">
				<view class="delete-icon"></view>
			</view>
			<image :src="item.icon" mode="widthFix"></image>
			<view class="game-name">
				{{item.gameName}}
			</view>
			<view class="introduce">
				{{item.introduce}}
			</view>
			<view class="hot">
				{{item.hot}}
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		props: {
			hideHistory: {
				type: Boolean,
				default: false
			},
			historyCache: {
				type: Array,
				default: []
			},
			showDelete:{
				type:Boolean,
				default:false
			}
		},
		
		methods: {
			deleteHandle(gid){
				this.$emit('sendDelete',gid)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.scroll-content {
		height: 320rpx;
		padding: 10rpx 0;
		margin-top: 20rpx;
		white-space: nowrap;

		.game-item {
			position: relative;
			display: inline-block;
			width: 220rpx;
			height: 300rpx;
			padding: 30rpx 8rpx;
			text-align: center;
			border-radius: 6rpx;
			background-color: #fff;
			box-shadow: 2rpx 2rpx 8rpx 0px #dadada;

			&:first-child {
				margin-left: 10rpx;
			}

			&:not(:first-child) {
				margin-left: 20rpx;
			}

			image {
				width: 80rpx;
				height: 80rpx;
				border-radius: 12rpx;
			}

			.game-name {
				margin-top: 10rpx;
				font-size: 28rpx;
				color: #474747;
			}

			.introduce {
				font-size: 24rpx;
				color: #a1a1a1;
				margin-top: 8rpx;
				white-space: pre-wrap;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}

			.hot {
				font-size: 24rpx;
				color: #a1a1a1;
				margin-top: 4rpx;
			}

			.delete {
				width: 40rpx;
				height: 40rpx;
				position: absolute;
				right: 0rpx;
				top: 0rpx;
				border-radius: 50%;
				background-color: #f14e19;
				z-index: 100;
				text-align: center;

				.delete-icon {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 24rpx;
					border: 3rpx solid #fff;
					background-color: #fff;
				}
			}
		}
	}
</style>
