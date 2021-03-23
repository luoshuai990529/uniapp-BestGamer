<template>
	<view class="sort" :class="showOperator || isClear || recommendListisEmpty?'show-mask':''" >
		<navbar :title="'游戏专区'" :isBack="false"></navbar>
		<view class="operator-mask" v-show="showOperator" @click="closeOperator">
			
		</view>
		<view class="content" >
			<view class="top">
				<searchbar  @clickInput='navigatorToSearch' :borderRadius="'0rpx'" backgroundColor="'#fff'"></searchbar>
			</view>
			<view class="history" v-show="historyCache.length!==0">
				<view class="editor">
					<view class="title">
						最近浏览专区
					</view>
					<view class="menu">
						<view class="operatorBox" v-show="showOperator">
							<view class="editor-btn" @click="editorHandle">编辑</view>
							<view class="clear" @click="clearHandle">清空</view>
							<view class="hide" @click="hideHandle">隐藏</view>
						</view>
						<icon v-show="hideHistory" @click="()=>{this.hideHistory = false}" class="iconfont icon-biyan"></icon>
						<text class="complete" v-show="showDelete" @click="completeHandle">完成</text>
						<icon v-show="!showDelete && !hideHistory" class="iconfont icon-youcecaidan"  @click='unfoldToggle'></icon>
					</view>
				</view>
				<history @sendDelete="deleteHandle" :showDelete="showDelete" :hideHistory="hideHistory" :historyCache="historyCache"></history>
			</view>
			<view class="recommend">
				<view class="editor">
					<view class="title">
						游戏推荐
					</view>
					<view class="menu" @click="refreshHandle">
						<icon class="iconfont icon-0-49"></icon>
						<text>换一批</text>
					</view>
				</view>
				<loading v-if="recommendList.length===0"></loading>
				<view v-if="recommendList.length!==0" class="game-list">
					<view class="game-item" v-for="(item,index) in recommendList">
						<view class="left">
							<image :src="item.icon" mode="widthFix"></image>
							<view class="info">
								<view class="game-name">
									{{item.gameName}}
								</view>
								<view class="introduce">
									{{item.introduce}}
								</view>
							</view>
						</view>
						<view class="attention right">
							<view class="btn">
								关注
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<modal :isShow="isClear"  :hint="'确定清除全部历史数据?'" :title="'删除'" @confirmHandle="confirmHandle" @cancelHandle="cancelHandle"/>
	</view>
</template>

<script>
	import navbar from '@/components/nav-bar/navbar.vue'
	import searchbar from '@/components/search-bar'
	import modal from '@/components/modal'
	import loading from '@/components/loading'
	import history from '@/components/history-list'
	export default {
		components: {
			navbar,
			searchbar,
			modal,
			loading,
			history
		},
		data() {
			return {
				showOperator:false,
				showDelete:false,
				isEditor:false,
				hideHistory:false,
				isClear:false,
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
				],
				recommendList:[
					{
						gameName:'荒野大嫖客',
						icon:'../../static/image/t2.jpg',
						hot:'205w',
						introduce:"是由腾讯游戏天美工作室群模仿LOL开发并运行的一款运营在Android、IOS、NS平台上的MOBA类国产手游"
					},
					{
						gameName:'中国式家长',
						icon:'../../static/image/t3.jpg',
						hot:'311w',
						introduce:"是一款由VALVE与Hidden Path Entertainment合作开发、Valve Software发行的第一人称射击游戏"
					},
					{
						gameName:'DNF',
						icon:'../../static/image/t2.jpg',
						hot:'205w',
						introduce:"是由腾讯游戏开发并运行的一款运营在Android、IOS、NS平台上的MOBA类国产手游"
					},
					{
						gameName:'天涯明月刀OL',
						icon:'../../static/image/t1.jpg',
						hot:'405w',
						introduce:"是由美国拳头游戏（Riot Games）开发、中国内地腾讯游戏代理运营的英雄对战MOBA竞技网游。游戏里拥有数百个个性英雄，并拥有排位系统、符文系统等特色养成系统。"
					},
					{
						gameName:'逆水寒',
						icon:'../../static/image/t4.jpg',
						hot:'187w',
						introduce:"由Rockstar Games游戏公司出版发行的一款围绕犯罪为主题的开放式动作冒险游戏。"
					}
				]
			}
		},
		onLoad() {

		},
		computed:{
			recommendListisEmpty(){
				return this.recommendList.length == 0
			}
		},
		methods: {
			closeOperator(){
				this.showOperator=false
			},
			unfoldToggle(){
				this.showOperator = !this.showOperator
			},
			completeHandle(){
				this.showDelete = false
			},
			editorHandle(){
				this.showOperator=false
				this.showDelete = true
			},
			clearHandle(){
				this.isClear =true
				this.showOperator=false
			},
			hideHandle(){
				this.showOperator=false
				this.hideHistory = true
			},
			deleteHandle(gid){
				this.historyCache = this.historyCache.filter(item=>{
					return item.gid !== gid
				})
			},
			confirmHandle(){
				this.historyCache = []
				this.isClear=false
			},
			cancelHandle(){
				this.isClear=false
			},
			navigatorToSearch(){
				uni.navigateTo({
					url:'../search/index'
				})
			},
			refreshHandle(){
				this.recommendList = []
				setTimeout(()=>{
					this.recommendList = [
					{
						gameName:'荒野大嫖客',
						icon:'../../static/image/t2.jpg',
						hot:'205w',
						introduce:"是由腾讯游戏天美工作室群模仿LOL开发并运行的一款运营在Android、IOS、NS平台上的MOBA类国产手游"
					},
					{
						gameName:'中国式家长',
						icon:'../../static/image/t3.jpg',
						hot:'311w',
						introduce:"是一款由VALVE与Hidden Path Entertainment合作开发、Valve Software发行的第一人称射击游戏"
					},
					{
						gameName:'DNF',
						icon:'../../static/image/t2.jpg',
						hot:'205w',
						introduce:"是由腾讯游戏开发并运行的一款运营在Android、IOS、NS平台上的MOBA类国产手游"
					},
					{
						gameName:'天涯明月刀OL',
						icon:'../../static/image/t1.jpg',
						hot:'405w',
						introduce:"是由美国拳头游戏（Riot Games）开发、中国内地腾讯游戏代理运营的英雄对战MOBA竞技网游。游戏里拥有数百个个性英雄，并拥有排位系统、符文系统等特色养成系统。"
					},
					{
						gameName:'逆水寒',
						icon:'../../static/image/t4.jpg',
						hot:'187w',
						introduce:"由Rockstar Games游戏公司出版发行的一款围绕犯罪为主题的开放式动作冒险游戏。"
					}
				]
				},600)
			}
		}
	}
</script>

<style lang="scss">
	@import '../../static/iconfont/iconfont.css';
	.show-mask{
		height: 100vh;
		overflow: hidden;
	}
	.sort {
		position: relative;
		.operator-mask{
			position: absolute;
			z-index: 98;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			background-color: #555555;
			opacity: 0;
		}
		.content {
			min-height: 100vh;
			padding: 20rpx;
			background-color: #f5f5f5;

			.editor {
				display: flex;
				justify-content: space-between;

				.title {
					font-size: 32rpx;
				}

				.menu {
					position: relative;
					color: #999999;
					.complete{
						color: #3388ff;
					}
					.icon-0-49 {
						font-size: 40rpx;
						vertical-align: middle;
					}

					.icon-biyan{
						font-size: 44rpx;
					}
					.icon-youcecaidan {
						transform: rotate(90deg);
						font-size: 44rpx;
					}


					text {
						vertical-align: middle;
						font-size: 28rpx;
					}
					.operatorBox{
						z-index: 99;
						position: absolute;
						right: 0rpx;
						top: 40rpx;
						width: 210rpx;
						border: 1px solid #f5f5f5;
						background-color: #fff;
						view{
							color: black;
							font-size: 28rpx;
							line-height: 70rpx;
							text-align: center;
							&:not(:first-child){
								border-top: 1px solid #f5f5f5;
							}
						}
						
					}
				}
			}

			// 最近浏览记录
			.history {
				margin-top: 20rpx;

				
			}

			// 推荐游戏
			.recommend {
				margin-top: 30rpx;
				.game-list {
					position: relative;
					margin-top: 20rpx;
					border-radius: 10rpx;
					background-color: #fff;
					padding: 20rpx;
					.game-item{
						display: flex;
						&:not(:first-child){
							margin-top: 36rpx;
						}
						.left{
							display: flex;
							flex: 7;
							image{
								width: 110rpx;
								height: 110rpx;
								border-radius: 20rpx;
							}
							.info{
								margin-left: 14rpx;
								padding-top: 16rpx;
								width: 340rpx;
								font-size: 28rpx;
								.game-name{
									font-size: 28rpx;
								}
								.introduce{
									color: #ababab;
									width: 100%;
									overflow: hidden;
									text-overflow:ellipsis; 
									white-space: nowrap;
								}
							}
						}
						.right{
							flex: 2;
							text-align: center;
							padding-top: 24rpx;
							.btn{
								font-size: 24rpx;
								padding: 12rpx 22rpx;
								color:#3c76ff;
								border: 1px solid #3c76ff
							}
						}
					}
					
				}
			}
		}
	}
</style>
