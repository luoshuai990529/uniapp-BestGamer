<template>
	<view class="loading" >
		<view class="content">
			<view class="box">
				<view class="hollow">
					
				</view>
			</view>
			<view class="text">
				{{showText}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			showText:{
				type:String,
				default:'Loading...'
			}
		},
		data() {
			return {}
		},
	}
</script>

<style lang="scss" scoped>
	@keyframes whirl {
		100% {
			transform:translateX(-100%) rotateZ(90deg) ;
		}
	}

	.loading {
		margin: 40rpx 0;
		height: 260rpx;
		padding-top: 100rpx;
		text-align: center;
		.content{
			.box {
				// position: relative;
				display: inline-block;
				width: 70rpx;
				height: 70rpx;
				background-color: #000000;
				box-shadow: 0 0 6rpx #000000,
					0 0 12rpx #000000,
					0 0 24rpx #000000;
				animation: whirl .4s linear infinite;
				transform-origin: bottom right;
				&::after{
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					bottom: 0;
					right: 0;
					margin: auto;
					width: 64rpx;
					height: 64rpx;
					background-color: #ffffff;
					box-shadow:inset 0 0 6rpx #000000,
					inset	0 0 12rpx #000000,
					inset	0 0 24rpx #000000;
				}
			}
		}
		
	}
</style>
