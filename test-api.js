/**
 * baiyug
 * @authors veganQian (veganQian@163.com)
 * @date    2018-01-05 14:46:34
 * @version 1.0
 */
const axios = require('axios')
const cheerio = require('cheerio')

const url = 'http://www.iqiyi.com/v_19rretnoow.html'

const apiURL = 'http://api.baiyug.cn/vip/index.php?url=http://www.iqiyi.com/v_19rretnoow.html'

// axios.get(apiURL + url).then(res => {
// 	let $ = cheerio.load(res.data)
// 	console.log($('body').html())
// 	console.log($('#baiyug').attr('src'))
// 	let isrc = $('#baiyug').attr('src')
// })


const apiList = [
	{
		name: "VIP看看", 
		api: "http://v.72du.com/api/?url="
	},
	{
		name: "老司机", 
		api: "http://aikan-tv.com/tong.php?url="
	},
	{
		name: "VIP解析", 
		api: "http://www.vipjiexi.com/vip.php?url="
	},
	{
		name: "强强视频", 
		api: "http://000o.cc/jx/ty.php?url="
	},
	{
		name: "迷失之梦", 
		api: "http://yun.mt2t.com/yun?url="
	},
	{
		name: "无名小站", 
		api: "http://www.wmxz.wang/video.php?url="
	},
	{
		name: "百域阁", 
		api: "http://api.baiyug.cn/vip/index.php?url="
	}
]

apiList.forEach(item => {
	axios.get(item.api + url).then(res => {
		let $ = cheerio.load(res.data)
		console.log('\n\n\n\n\n\n\n')
		console.log(item.name)
		console.log($('body').html())
		console.log('\n\n\n\n\n\n\n')
	}).catch(e => {
		console.log(item.name, 'error')
	})
})