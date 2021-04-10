<template>
	<view class="search-bar">
		<view @click="clickInputHandle" class="search-input" :style="{width,borderRadius,backgroundColor}">
			<view class="search-mask" v-show="!allowFocus"></view>
			<icon class="iconfont icon-huaban"></icon>
			<input @input="inputChange"  :focus="autoFocus" type="text" @focus="focusHandle" v-model="inpVal" placeholder="输入关键词搜索" />
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			allowFocus:{
				type:Boolean,
				default:false
			},
			autoFocus: {
				type: Boolean,
				default: false
			},
			borderRadius: {
				type: String,
				default: '32rpx'
			},
			width: {
				type: String,
				default: '92%'
			},
			backgroundColor: {
				type: String,
				default: '#f5f5f5'
			},
			currentSearch:{
				type:String,
				default:''
			}
		},
		data() {
			return {
				inpVal:''
			}
		},
		mounted() {
			this.inpVal = this.currentSearch?this.currentSearch:this.inpVal
		},
		methods: {
			inputChange(e){
				this.$emit('getInputValue',e.detail.value)
			},
			focusHandle() {
				this.$emit('focusEvent')
			},
			clickInputHandle(){
				this.$emit('clickInput')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/static/iconfont/iconfont.css';

	.search-bar {
		width: 100%;
		// padding-top: 14rpx;
		background-color: #fff;

		.search-input {
			position: relative;
			display: flex;
			padding: 10rpx 0 10rpx 60rpx;
			margin: auto;
			.search-mask{
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				z-index: 10;
				background-color: #666666;
				opacity: 0;
			}
			icon {
				position: absolute;
				left: 20rpx;
				top: 0px;
				color: #9e9e9e;
				vertical-align: text-top;
			}

			input {
				width: 90%;
				color: #161616;
				text-indent: 10rpx;
				vertical-align: middle;
			}
		}
	}
</style>
