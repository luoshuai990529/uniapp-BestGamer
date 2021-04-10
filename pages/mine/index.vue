<template>
	<view class="mine">
		<view class="mine-bg">
		</view>
		<view class="login">
			<view class="title">
				登录后，体验精彩功能
			</view>
			<button @click="login" type="default" class="login-btn">去登录</button>
			<!-- <button open-type="getUserInfo" @getuserinfo="getUserInfo" size="default" type="">
				获取用户信息
			</button> -->
			<!-- <button @click="getMessage" size="default" class="get-message">
				获取订阅消息权限
			</button> -->
			<!-- <open-data type="userAvatarUrl"></open-data>
			<open-data type="userNickName"></open-data> -->
		</view>
	</view>
</template>

<script>
	import {
		createNamespacedHelpers
	} from 'vuex'
	const {
		mapState
	} = createNamespacedHelpers('user')
	import axios  from '../../utils/http.js'
	export default {
		data() {
			return {
				tempId1:'o83z2xzB_xSqdBckSWLFe_0R70hG3qSADjplgZLGCJQ' //模板ID
			}
		},
		components: {},
		computed: {
			...mapState(['isLogin'])
		},
		mounted() {
			console.log('当前登录状态：', this.isLogin)
		},
		methods: {
			getMessage() {
				uni.requestSubscribeMessage({
					tmplIds: [this.tempId1],
					success:(res)=> {
						console.log('订阅消息结果：',res[this.tempId1])
					}
				})
			},
			login(){
				uni.login({
					timeout: 5000,
					success:async (data)=> {
						const {
							errMsg,
							code
						} = data
						console.log('code:', code)
						// 获取access_token
						// const res = await axios.get('http://127.0.0.1:7001/getAccessToken')
						// const {access_token} = res.data.data
						// console.log('获取accessToken',access_token)
						// 登录页接口 通过code 获取 openId session_key
						// const data1 = {
						// 				appid: '',
						// 				secret: '',
						// 				js_code: code,
						// 				grant_type: 'authorization_code'
						// 			}
						// const res2 = await axios.get('http://127.0.0.1:7001/login',data1)
						// const {openid,session_key} = res2.data.data
						
					}
				})
			},
			getUserInfo(data) {
				console.log('用户信息：',data.detail)
			}
		}
	}
</script>

<style lang="scss">
	.mine {
		height: 100vh;

		.mine-bg {
			height: 400rpx;
			background-image: linear-gradient(to right, #b810ff, #0066ff);
		}

		.login {
			text-align: center;

			.title {
				margin-top: 60rpx;
				font-size: 24rpx;
				color: #828282;
			}

			button {
				width: 70%;
				color: #fff;
				margin-top: 30rpx;
				font-size: 28rpx;
				line-height: 64rpx;
				background-image: linear-gradient(to left, #b810ff, #0066ff);
			}
			.login-btn{
				margin-top: 20rpx;
			}
			.get-message {
				margin-top: 20rpx;
			}
		}
	}
</style>
