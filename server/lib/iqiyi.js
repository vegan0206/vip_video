/**
 * aqiyi视频
 * @authors veganQian (veganQian@163.com)
 * @date    2017-12-28 16:05:57
 * @version 1.0
 */
const cheerio = require('cheerio')
const axios = require('axios')

// 电视剧
axios.get('http://list.iqiyi.com/www/2/----------2-2017--4-1-1-iqiyi--.html').then(res => {
	let $ = cheerio.load(res.data)
	console.log($('ul.site-piclist').html())
}).catch(e => {
	console.log(e)
})

// 电影
axios.get('http://list.iqiyi.com/www/1/----------2-2017--11-1-1-iqiyi--.html').then(res => {
	let $ = cheerio.load(res.data)
	console.log($('ul.site-piclist').find('li').eq(0).text())
}).catch(e => {
	console.log(e)
})
