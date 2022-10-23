import Mock from 'mockjs'

let news = Mock.mock({
	'news|10': [{
		'id|+1': 1,
		'title': '@ctitle',
		'content|1-5': '<p> @cparagraph </p>'
	}]
})
// mock拦截器 访问 '/newslist' 接口时 被拦截
Mock.mock('/newslist', news) // 读取新闻列表
// 匹配路径拦截 `/news?id=1`
Mock.mock(/\/news\?id=\d+/, 'get', (option) => {
	// 通过回调函数 的option参数截取 id
	let id = option.url.split('?')[1].split('=')[1]
	// 返回匹配的数据
	return news.news.filter(item => `${item.id}` === id)[0]
}) // 读取单个新闻