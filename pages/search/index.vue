<template>
	<view class="search">
		<navbar :title="'搜索'" :isBack="true"><icon @click="jumpToHome" class="iconfont icon-shouye1"></icon></navbar>
		<view class="search-top">
			<searchbar class="search-wrap" :allowFocus="true" :autoFocus='true'  @focusEvent="focusHandle"/>
			<view class="cancel-btn" @click="cancelSearch">
				取消
			</view>
		</view>
		<view class="hot-record">
			<view class="title">
				热门搜索
			</view>
			<view class="hot-keywords">
				<view class="word" :class="item.hot===1?'active':''" v-for="(item,index) in hotKeywords" :key="item">
					{{item.text}}
				</view>
			</view>
		</view>
		<view class="history">
			<view class="history-top">
				<view class="title">
					最近浏览
				</view>
				<icon class="iconfont icon-qingchu" @click="clearHistory"></icon>
			</view>
			<view class="history-list">
				<historylist :historyCache="historyCache"></historylist>
			</view>
		</view>
		<modal :isShow="isClear"  :hint="'确定清除全部历史数据?'" :title="'删除'" @confirmHandle="confirmHandle" @cancelHandle="cancelHandle"/>
	</view>
</template>

<script>
	import navbar from '@/components/nav-bar/navbar.vue'
	import searchbar from '@/components/search-bar/index.vue'
	import historylist from '@/components/history-list/index.vue'
	import modal from '@/components/modal/index.vue'
	export default {
		data() {
			return {
				isClear:false,
				hotKeywords:[
					{text:'CSGO',hot:0},
					{text:'英雄联盟',hot:1},
					{text:'后裔出装对线攻略',hot:0},
					{text:'原神桶抢夺攻略',hot:0},
					{text:'副本通关攻略',hot:1}
				],
				historyCache:[
					{
						gid:1,
						gameName:'英雄联盟',
						icon:'../../static/image/t1.jpg',
						hot:'405w',
						introduce:"是由美国拳头游戏（Riot Games）开发、中国内地腾讯游戏代理运营的英雄对战MOBA竞技网游。游戏里拥有数百个个性英雄，并拥有排位系统、符文系统等特色养成系统。"
					},
					{
						gid:2,
						gameName:'王者荣耀',
						icon:'../../static/image/t2.jpg',
						hot:'205w',
						introduce:"是由腾讯游戏天美工作室群模仿LOL开发并运行的一款运营在Android、IOS、NS平台上的MOBA类国产手游"
					},
					{
						gid:3,
						gameName:'CSGO',
						icon:'../../static/image/t3.jpg',
						hot:'311w',
						introduce:"是一款由VALVE与Hidden Path Entertainment合作开发、Valve Software发行的第一人称射击游戏"
					},
					{
						gid:4,
						gameName:'GTA5',
						icon:'../../static/image/t4.jpg',
						hot:'187w',
						introduce:"由Rockstar Games游戏公司出版发行的一款围绕犯罪为主题的开放式动作冒险游戏。"
					}
				]
			}
		},
		components: {
			navbar,
			searchbar,
			historylist,
			modal
		},
		onLoad() {
			
		},
		methods: {
			jumpToHome(){
				uni.switchTab({
					url:'../index/index'
				})
			},
			clearHistory(){
				this.isClear = true
			},
			confirmHandle(){
				this.historyCache = []
				this.isClear = false
			},
			cancelHandle(){
				this.isClear = false
			},
			cancelSearch(){
				uni.navigateBack({
					
				})
			},
			focusHandle(){
				
			}
		}
	}
</script>

<style lang="scss">
	@import '../../static/iconfont/iconfont.css';
	.search{
		.icon-shouye1{
			font-size: 38rpx;
			margin-left: 24rpx;
		}
		.search-top{
			display: flex;
			justify-content: space-between;
			.search-wrap{
				flex: 7;
			}
			.cancel-btn{
				flex: 1;
				padding-top: 8rpx;
				color: #2b87ff;
			}
		}
		.hot-record{
			margin-top: 40rpx;
			padding: 0 40rpx;
			.title{
				font-size: 32rpx;
			}
			.hot-keywords{
				display: flex;
				margin-top: 20rpx;
				flex-wrap: wrap;
				.word{
					font-size: 28rpx;
					line-height: 50rpx;
					background-color: #f4f4f4;
					border-radius: 30rpx;
					padding: 8rpx 30rpx;
					margin-top: 20rpx;
					margin-right: 20rpx;
				}
				.word.active{
					color: #2f87fd;
				}
			}
		}
		.history{
			border-top: 5px solid #f5f5f5;
			margin-top: 30rpx;
			padding-top: 20rpx;
			.history-top{
				display: flex;
				justify-content: space-between;
				padding: 0 40rpx;
				.title{
					line-height: 54rpx;
					font-size: 32rpx;
				}
				.iconfont{
					padding-bottom: 10rpx;
				}
			}
			.history-list{
				padding: 0 40rpx;
			}
			
		}
	}
</style>
