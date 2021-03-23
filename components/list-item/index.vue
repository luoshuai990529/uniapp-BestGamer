<template>
	<block>
		<view class="list-item" v-if="postData.type==1">
			<view class="author" @click="navigateToDetails(postData.articelId)">
				<image :src="postData.header" mode="widthFix"></image>
				<text class="author-name">{{postData.name}}</text>
			</view>
			<view class="article">
				<view class="title" @click="navigateToDetails(postData.articelId)">{{postData.title?postData.title:postData.content}}</view>
				<image @click="showImage" :src="postData.image[0]" mode="widthFix"></image>
			</view>
			<view class="tag" @click="navigateToDetails(postData.articelId)">{{postData.tag}}</view>
			<view class="operation">
				<icon class="iconfont icon-fenxiang"><text>分享</text></icon>
				<icon class="iconfont icon-pinglun" @click="navigateToDetails(postData.articelId)"><text>{{postData.comments}}</text></icon>
				<icon class="iconfont icon-like"><text>{{postData.like}}</text></icon>
			</view>
		</view>
		<view class="list-item" v-if="postData.type==2">
			<view class="author" @click="navigateToDetails(postData.articelId)">
				<image :src="postData.header" mode="widthFix"></image>
				<text class="author-name">{{postData.name}}</text>
			</view>
			<view class="article" >
				<view class="title" @click="navigateToDetails(postData.articelId)">{{postData.title?postData.title:postData.content}}</view>
				<block v-for="(item,index) in postData.image" :key="index"><image v-if="index<3" @click="showImage(index)" class="three-image"  :src="item" mode="scaleToFill"></image></block>
			</view>
			<view class="tag" @click="navigateToDetails(postData.articelId)">{{postData.tag}}</view>
			<view class="operation">
				<icon class="iconfont icon-fenxiang"><text>分享</text></icon>
				<icon class="iconfont icon-pinglun" @click="navigateToDetails(postData.articelId)"><text>{{postData.comments}}</text></icon>
				<icon class="iconfont icon-like"><text>{{postData.like}}</text></icon>
			</view>
		</view>
		<view class="list-item" v-if="postData.type==3">
			<view class="author" @click="navigateToDetails(postData.articelId)">
				<image :src="postData.header" mode="widthFix"></image>
				<text class="author-name">{{postData.name}}</text>
			</view>
			<view class="article" @click="navigateToDetails(postData.articelId)">
				<view class="title">
					<view class="theme">
						{{postData.title}}
					</view>
					<text>
						{{postData.content}}
					</text>
				</view>
			</view>
			<view class="tag" @click="navigateToDetails(postData.articelId)">{{postData.tag}}</view>
			<view class="operation">
				<icon class="iconfont icon-fenxiang"><text>分享</text></icon>
				<icon class="iconfont icon-pinglun" @click="navigateToDetails(postData.articelId)"><text>{{postData.comments}}</text></icon>
				<icon class="iconfont icon-like"><text>{{postData.like}}</text></icon>
			</view>
		</view>
		<view class="list-item" v-if="postData.type==4">
			<view class="author" @click="navigateToDetails(postData.articelId)">
				<image :src="postData.header" mode="widthFix"></image>
				<text class="author-name">{{postData.name}}</text>
			</view>
			<view class="article" @click="navigateToDetails(postData.articelId)">
				<view class="item-mask"></view>
				<view  class="title">{{postData.title?postData.title:postData.content}}</view>
				<video :src="postData.video" :title="postData.videoTitle"  show-center-play-btn='true' :controls='false'></video>
			</view>
			<view class="tag" @click="navigateToDetails(postData.articelId)">{{postData.tag}}</view>
			<view class="operation">
				<icon class="iconfont icon-fenxiang"><text>分享</text></icon>
				<icon class="iconfont icon-pinglun" @click="navigateToDetails(postData.articelId)"><text>{{postData.comments}}</text></icon>
				<icon class="iconfont icon-like"><text>{{postData.like}}</text></icon>
			</view>
		</view>
	</block>
</template>

<script>
	export default {
		props:{
			postData:{
				type:Object,
				required:true
			}
		},
		data(){
			return {
			}
		},
		methods:{
			showImage(index){
				const current = index?index:''
				uni.previewImage({
					current,
					urls:this.postData.image
				})
			},
			navigateToDetails(articelId){
				uni.navigateTo({
				    url: `../../pages/details/index?articelId=${articelId}`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list-item {
		margin: 20rpx 0 20rpx;
		// border: 1px solid hotpink;
		padding: 20rpx 20rpx;
		background-color: #fff;
		// padding-right: 20rpx;
		
		.author {
			image {
				vertical-align: middle;
				width: 70rpx;
				height: 70rpx;
				border-radius: 50%;
			}
	
			.author-name {
				margin-left: 20rpx;
				font-weight: 600;
			}
	
		}
		.article{
			position: relative;
			margin-top: 18rpx;
			.item-mask{
				position:absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				z-index: 99;
			}
			.title{
				font-weight: 600;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3;
				overflow: hidden;
				>text{
					font-weight: 400;
				}
			}
			image{
				margin-top: 18rpx;
				border-radius: 8rpx;
				max-height: 400rpx;
			}
			.three-image{
				width: 32%;
				height: 240rpx;
				&:not(:nth-child(1)){
					margin-left: 1%;
				}
			}
			>video{
				width: 100%;
				margin-top: 10rpx;
			}
		}
		.tag{
			display: inline-block;
			margin-top: 10rpx;
			font-size: 24rpx;
			background-color: #e6ebfa;
			padding: 6rpx 16rpx;
		}
		.operation{
			margin-top: 14rpx;
			padding-right: 20rpx;
			.iconfont{
				font-size: 32rpx;
				text{
					font-size: 24rpx;
					margin-left: 6rpx;
				}
			}
			.icon-like{
				float: right;
			}
			.icon-pinglun{
				margin-left: 40rpx;
			}
		}	
	}
</style>
