<template>
	<view class="list-bar">
		<view class="list">
			<scroll-view class="container" scroll-x="true" @scroll="scrollHandle"  :scroll-left="scrollLeft"
				scroll-with-animation="true">
				<text class="scroll-item" v-for="(item,index) in listData" :key="item" @click="selectColumn(index)"
					:class="selectIndex==index?'active':''">{{item}}</text>
			</scroll-view>
			<view class="shrink-btn" @click="unfoldHandle">
				<icon class="iconfont" :class="isUnfold?'icon-xiangshang':'icon-xiangxia'"></icon>
			</view>
		</view>
		<view :class="isUnfold?'unfold':'hidden'">
			<text v-for="(item,index) in listData" :key="item" @click="selectColumn(index)"
				:class="selectIndex==index?'active':''">{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			listData: {
				type: Array,
				required: true
			},
			isUnfold:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				selectIndex: 0,
				scrollLeft:0,
				currentScrollLeft:0
			}
		},
		watch:{
			isUnfold(val){
				this.$emit('sendUnfold',val)
			}
		},
		methods: {
			selectColumn(index) {
				this.selectIndex = index
				const currentPostion = index * 55 -20
				// console.log('选择的边距：',currentPostion,this.currentScrollLeft)
				// 选中listbar选项 视觉优化
				if(currentPostion<this.currentScrollLeft || currentPostion>this.currentScrollLeft+320){
					this.scrollLeft = this.currentScrollLeft
					setTimeout(()=>{
						this.scrollLeft = currentPostion
						this.currentScrollLeft = this.scrollLeft
					},0)
				}
				this.$emit('sendUnfold',false)
				this.$emit('sendPostType',index)
			},
			unfoldHandle(){
				this.$emit('sendUnfold',!this.isUnfold)
			},
			scrollHandle(e){
				// console.log('横向滚动：',e.detail.scrollLeft)
				this.currentScrollLeft = e.detail.scrollLeft
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/static/iconfont/iconfont.css';

	.list-bar {
		.list {
			position: relative;
			background-color: #fff;
			color: #666666;
			padding-top: 5rpx;
			line-height: 68rpx;
			overflow: hidden;

			.container {
				white-space: nowrap;
				width: calc(100vw - 72rpx);
				padding: 0 10rpx;

				.scroll-item {
					font-size: 32rpx;
					margin: 0 20rpx;
				}

				.scroll-item.active {
					color: black;
					font-size: 36rpx;
				}
			}

			.shrink-btn {
				position: absolute;
				right: 0;
				top: 0;
				background-color: #fff;
				width: 72rpx;
				line-height: 68rpx;
				text-align: center;
				overflow-y: hidden;
				box-shadow: -2px 0px 22px 10px #fff;

				.iconfont {
					margin-top: 4rpx;
					font-size: 42rpx;
				}
			}

		}
		.hidden{
			display: none;
		}
		.unfold {
			position: absolute;
			// top: 68rpx;
			z-index: 999;
			width: 100%;
			min-height: 200rpx;
			padding: 20rpx 20rpx;
			background-color: #fff;
			display: flex;
			flex-wrap: wrap;

			>text {
				color: #6e6e6e;
				font-size: 24rpx;
				margin-left: 18rpx;
				margin-top: 14rpx;
				width: 146rpx;
				text-align: center;
				padding: 16rpx 0rpx;
				border: 1px solid #999999;
				border-radius: 3px;
			}

			>text.active {
				color: #2b80ff;
				border-color: #2b80ff;
			}
		}
	}
</style>
