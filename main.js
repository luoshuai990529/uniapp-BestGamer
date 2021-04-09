import Vue from 'vue'
import App from './App'
import store from './store'
// import cloudbase from '@cloudbase/js-sdk'

// cloudbase.init({
//  env: 'bestgamer-3grk81e635ca4b4d',//云开发环境ID
//  appSign: 'best-gamer-weixin',//凭证描述
//  region: "ap-guangzhou",
//  appSecret: {
//   appAccessKeyId: 1,//凭证版本
//   appAccessKey: '3bf5663c5dae7bb57b4bcf22be7a02cc'//凭证
//  }
// })

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
