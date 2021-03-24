<template>
	<view :class="showMask?'lock-page':''">
		<navbar :title="'Best Gamer'" :isBack="false"></navbar>
		<view class="home">
			<view class="top">
				<searchbar @clickInput="navigatorToSearch" />
				<listbar :listData="listData" :isUnfold="showMask" @sendPostType="getPostType" @sendUnfold="getUnfold" />
			</view>
			<scroll-view class="content" scroll-y="true" :scroll-top='scrollTop' @scroll="scrollHandle"
				scroll-with-animation="true">
				<loading v-if="postData.length===0"></loading>
				<block v-for="(item,index) in postData" :key="item.articelId"><list-item  :postData="item"></list-item ></block>
				<view v-show="showBackTop" class="go-top" @click="backTop">
					Top
				</view>
			</scroll-view>
			<view v-show="showMask" class="mask" @click="hideMask"></view>
		</view>
	</view>
</template>

<script>
	import searchbar from '@/components/search-bar'
	import listbar from '@/components/list-bar'
	import listItem from '@/components/list-item'
	import loading from '@/components/loading'
	import navbar from '@/components/nav-bar/navbar.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				listData: [
					'推荐',
					'攻略',
					'资讯',
					'抱团',
					'吐槽',
					'赛事',
					'新游',
					'栏目1',
					'栏目2'
				],
				showMask: false,
				showBackTop: false,
				scrollTop: 0,
				currentScrollTop: 0,
				postType:0,
				postData:[]
			}
		},
		components: {
			searchbar,
			listbar,
			navbar,
			listItem,
			loading
		},
		mounted() {
			this.getData()
		},
		methods: {
			getPostType(index){
				if(this.postType == index){
					return
				}
				this.postType = index
				console.log('选择的类别：',index)
				this.postData = []
				this.backTop() //每次选择之后 滚动条回到顶部
				setTimeout(()=>{
					this.postData=[{
						type:1,
						sortId:2,
						articelId:113,
						createTime:1615888353,
						replyTime:1615848353,
						uid:10086,
						header:'../../static/image/header.jpg',
						name:'我锤石你德玛',
						title:'国服后裔最细对线攻略来啦！楼下细说！',
						content:'',
						image:['../../static/image/houyi.jpg'],
						tag:'王者荣耀',
						comments:128,
						like:216
					},{
						type:2,
						sortId:1,
						articelId:114,
						createTime:1615898353,
						replyTime:1615868353,
						uid:10086,
						header:'../../static/image/header.jpg',
						name:'我锤石你德玛',
						title:'LOL14.1版本更新，限定皮肤等你来拿！',
						content:'',
						image:['../../static/image/lol1.jpg','../../static/image/wzry2.jpg','../../static/image/wzry.jpg','../../static/image/wzry3.jpg'],
						tag:'英雄联盟',
						comments:91,
						like:24
					},{
						type:1,
						sortId:3,
						articelId:115,
						createTime:1615398353,
						replyTime:1615448353,
						uid:10086,
						header:'../../static/image/header.jpg',
						name:'我锤石你德玛',
						title:'守望先锋暑期限时免费畅玩，让我们一起快乐暑期！',
						content:'',
						image:['../../static/image/swxf.jpg'],
						tag:'守望先锋',
						comments:21,
						like:50
					},{
						type:3,
						sortId:1,
						articelId:116,
						createTime:1615898353,
						replyTime:161598353,
						uid:10086,
						header:'../../static/image/header.jpg',
						name:'我锤石你德玛',
						title:'LPL春季赛揭幕战 FPX - IG，赛后分析',
						content:'随着各大战队的挖人大战之后，马上迎来了春季赛的揭幕战，两大世界冠军的对决，与往期阵容不同的时候FPX换上了LDL二队的北川打野选手，上单也来了一位新的世界冠军牛古力，而IG则换上了打野XUN，相信很多人都非常期待的是上路牛古力和shy哥到底会擦除怎样的火花呢',
						image:[],
						tag:'英雄联盟',
						comments:201,
						like:106
					},{
						type:4,
						sortId:4,
						articelId:117,
						createTime:1615898353,
						replyTime:161598353,
						uid:10086,
						header:'../../static/image/header.jpg',
						name:'我锤石你德玛',
						title:'新游速递《极品飞车5》',
						content:'极品飞车5全新新系列等你来玩，S级豪车注册即送',
						image:[],
						video:'https://xps08.xiaopeng.com/xp-ngp/acc-g3-1.mp4',
						videoTitle:'极品飞车5',
						tag:'极品飞车',
						comments:68,
						like:26
					}]
					
				},1000)
			},
			getData(){
				// promise方式
				setTimeout(()=>{
					this.postData=[{
						type:1,
						sortId:2,
						articelId:113,
						createTime:1615888353,
						replyTime:1615848353,
						uid:10086,
						header:'../../static/image/header.jpg',
						name:'我锤石你德玛',
						title:'国服后裔最细对线攻略来啦！楼下细说！',
						content:'有个明世隐就赢了',
						image:['../../static/image/houyi.jpg'],
						tag:'王者荣耀',
						comments:128,
						like:216
					},{
						type:2,
						sortId:1,
						articelId:114,
						createTime:1615898353,
						replyTime:1615868353,
						uid:10086,
						header:'../../static/image/header.jpg',
						name:'我锤石你德玛',
						title:'LOL14.1版本更新，限定皮肤等你来拿！',
						content:'',
						image:['../../static/image/lol1.jpg','../../static/image/wzry2.jpg','../../static/image/wzry.jpg','../../static/image/wzry3.jpg'],
						tag:'英雄联盟',
						comments:91,
						like:24
					},{
						type:1,
						sortId:3,
						articelId:115,
						createTime:1615398353,
						replyTime:1615448353,
						uid:10086,
						header:'../../static/image/header.jpg',
						name:'我锤石你德玛',
						title:'守望先锋暑期限时免费畅玩，让我们一起快乐暑期！',
						content:'',
						image:['../../static/image/swxf.jpg'],
						tag:'守望先锋',
						comments:21,
						like:50
					},{
						type:3,
						sortId:1,
						articelId:116,
						createTime:1615898353,
						replyTime:161598353,
						uid:10086,
						header:'../../static/image/header.jpg',
						name:'我锤石你德玛',
						title:'LPL春季赛揭幕战 FPX - IG，赛后分析',
						content:'随着各大战队的挖人大战之后，马上迎来了春季赛的揭幕战，两大世界冠军的对决，与往期阵容不同的时候FPX换上了LDL二队的北川打野选手，上单也来了一位新的世界冠军牛古力，而IG则换上了打野XUN，相信很多人都非常期待的是上路牛古力和shy哥到底会擦除怎样的火花呢',
						image:[],
						tag:'英雄联盟',
						comments:201,
						like:106
					},{
						type:4,
						sortId:4,
						articelId:117,
						createTime:1615898353,
						replyTime:161598353,
						uid:10086,
						header:'../../static/image/header.jpg',
						name:'我锤石你德玛',
						title:'新游速递《极品飞车5》',
						content:'极品飞车5全新新系列等你来玩，S级豪车注册即送',
						image:[],
						video:'https://xps08.xiaopeng.com/xp-ngp/acc-g3-1.mp4',
						videoTitle:'极品飞车5',
						tag:'极品飞车',
						comments:68,
						like:26
					}]
				},1000)
			},
			hideMask() {
				this.showMask = false
			},
			navigatorToSearch(){
				uni.navigateTo({
					url:'../search/index'
				})
			},
			getUnfold(isUnfold) {
				this.showMask = isUnfold
			},
			backTop() {
				this.scrollTop = this.currentScrollTop
				this.showBackTop = false
				setTimeout(() => {
					this.scrollTop = 0
				}, 0)
			},
			scrollHandle(e) {
				const {
					scrollTop
				} = e.detail
				this.currentScrollTop = scrollTop
				if (scrollTop > 150) {
					this.showBackTop = true
				} else {
					this.showBackTop = false
				}

			}
		}
	}
</script>

<style lang="scss">
	@import '../../static/iconfont/iconfont.css';
	image {
		will-change: transform
	}
	.lock-page {
		height: 100vh;
		overflow: hidden;
	}

	.home {
		.top {
			position: relative;
			z-index: 999;
			height: 160rpx;
		}

		.content {
			position: relative;
			// height:100%;
			// border: 1px solid black;
			height: calc(100vh - 302rpx);
			background-color: #f5f5f5; //内容背景颜色
			// border: 1px solid black;

			.go-top {
				z-index: 100;
				position: fixed;
				right: 24rpx;
				bottom: 24rpx;
				width: 100rpx;
				line-height: 100rpx;
				text-align: center;
				background-color: #fff;
				border-radius: 50%;
				border: 1px solid #d4d4d4;
			}

			
		}

		.mask {
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			opacity: .4;
			z-index: 100;
			background-color: #383838;
		}
	}

	
</style>
