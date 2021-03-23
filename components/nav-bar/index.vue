<template>
	<view class="nav-bar">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			
		},
		data() {
			return {}
		},
		onLoad() {
			
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.nav-bar {
		position: sticky;
		top: 0;
		z-index: 1000;
		text-align: center;
		background-color: #fff;
		line-height: 80rpx;
		padding-top: var(--status-bar-height);
	}
</style>
