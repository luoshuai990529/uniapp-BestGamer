const state = {
	isLogin:false,
	userInfo:{}
}

const mutations = {
	login(state,userInfo){
		state.isLogin=true;
		state.userInfo = userInfo
		// 把用户信息保存到本地
		uni.setStorage({
			key:'userInfo',
			data:userInfo
		})
	}
}

const actions = {
	async loginAction(context,userInfo){ //data :参数
		// actions 修改state 必须通过mutations
		context.commit('login',userInfo)
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
