const state = {
	articleId:null
}

const mutations = {
	setArticleId(state,articleId){
		state.articleId = articleId
	}
}

const actions = {
	async changeArticleId(context,articleId){ //data :参数
		// actions 修改state 必须通过mutations
		context.commit('setArticleId',articleId)
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
