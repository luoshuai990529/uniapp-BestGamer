import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import article from './modules/article.js'
Vue.use(Vuex)
const store = new Vuex.Store({
	modules:{
		// 子模块   $store.state.article.
		article
	},
	getters
})

export default store