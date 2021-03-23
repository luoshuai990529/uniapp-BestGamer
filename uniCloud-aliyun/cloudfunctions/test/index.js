'use strict';
// {spaceId: '9c32ca13-d941-4f04-a5bd-7e1d037d6262'}
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const collection = db.collection('test') // 获取表'bestgamer-test'的集合对象
	const res = await collection.limit(10).get() // 获取表中的10条数据，结果为json格式
	return res // 返回json给客户端
};
