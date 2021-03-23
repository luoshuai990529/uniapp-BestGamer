<template>
	<block  >
		<view :style="!isShow?'display:none':`display:block`"  class="modal-mask" :class="showMask?'active':''"  @touchmove.stop.prevent="moveHandle"></view>
		<view :style="!isShow?'display:none':`display:block`"  class="modal" >
			<icon class="iconfont icon-quxiao" @click="cancelHandle"></icon>
			<view class="header">
				<view class="title">
					{{title}}
				</view>
			</view>
			<view class="hint">
				{{hint}}
			</view>
			<view class="operator-btn">
				<view class="confirm" @click="confirmHandle">
					确定
				</view>
				<view class="cancel" @click="cancelHandle">
					取消
				</view>
			</view>
		</view>
	</block>
</template>

<script>
	export default{
		props:{
			isShow:{
				type:Boolean,
				default:false
			},
			showMask:{
				type:Boolean,
				default:false
			},
			title:{
				type:String,
				default:''
			},
			hint:{
				type:String,
				default:'你确定要执行该操作吗'
			}
		},
		data(){
			return{}
		},
		methods:{
			moveHandle(){},
			cancelHandle(){
				this.$emit('cancelHandle')
			},
			confirmHandle(){
				this.$emit('confirmHandle')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.modal-mask{
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		height: 100vh;
		background-color: #555;             
		opacity: 0;
	}
	.modal-mask.active{
		opacity: .4;
	}
	.modal{
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 999;
		transform: translate(-50%,-50%);
		width: 78%;
		height: 420rpx;
		padding: 20rpx;
		border-radius: 4rpx;
		box-shadow: 0rpx 0rpx 20rpx #9c9c9c;
		background-color: #fbfbfb;	
		.icon-quxiao{
			position: absolute;
			top: 0rpx;
			right: 20rpx;
		}
		.header{
			font-size: 24rpx;
			.title{
			}
		}
		.hint{
			margin-top: 110rpx;
			text-align: center;
			font-size: 28rpx;
		}
		.operator-btn{
			position: absolute;
			bottom: 60rpx;
			display: flex;
			justify-content: space-around;
			width: 100%;
			margin-left: -20rpx;
			>view{
				width: 200rpx;
				line-height: 50rpx;
				text-align: center;
				border-radius: 6rpx;
			}
			.confirm{
				color: #fff;
				background-color: #07c160;
			}
			.cancel{
				color: #07c160;
				background-color: #f2f2f2;
			}
		}
	}
</style>
