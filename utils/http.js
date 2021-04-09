/**
 *   5.1 封装网络请求工具
 * 		5.1.1 URL统一管理
 * 		5.1.2 满足不同的请求方式，GET POST
 * 		5.1.3 数据异常的时候，在网络层统一处理
 * 		5.1.4 增加request方法，减少重复代码
 */
const BASE_URL = ''

/**
 * url: 表示请求的地址
 * data: 表示请求参数
 * success: 请求成功回调
 */
const request = (url, data, method = 'GET', token) => {
	return new Promise((reslove, reject) => {
		uni.request({
			url,
			data,
			method,
			success(res) {
				// 异常逻辑的处理
				if (res.statusCode !== 200) {
					reject(res.errMsg)
				} else {
					reslove(res)
				}
			}
		})
	})
}


const get = (url,data,token) => {
	return request(url, data, 'GET', token)
}

const post = (url,data,token) => {
	return request(url, data, 'POST', token)
}


const axios = {
	get,
	post
}
export default axios
