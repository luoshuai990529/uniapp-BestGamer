import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import article from './modules/article.js'
import user from './modules/user.js'
Vue.use(Vuex)
const store = new Vuex.Store({
	modules:{
		// 子模块   $store.state.article.
		article,
		user
	},
	getters
})

export default store