/**
 * aqiyi视频
 * @authors veganQian (veganQian@163.com)
 * @date    2017-12-28 16:05:57
 * @version 1.0
 */
const cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')
const getBase64Data = require('./getBase64Data.js')
// 爱奇艺电视剧URL
const iqiyiURL_0 = 'http://list.iqiyi.com/www/2/----------2-2017--4-1-1-iqiyi--.html'
// 电视剧
axios.get(iqiyiURL_0).then(res => {
	let $ = cheerio.load(res.data)
	let $el = $('ul.site-piclist').find('li')
	let data = []
	let names = []
	let promiseAll = []
	$el.each((i, item) => {
		let name = $(item).find('a').attr('title').trim()
		let img = $(item).find('a').find('img')[0].attribs['data-lazy'] || $(item).find('a img').attr('src')
		if(img && names.indexOf(name) == -1) {
			names.push(name)	
			let promise = getBase64Data(img)
				.then(img => {				
					data.push({
						name,
						img,
						url: $(item).find('a').attr('href')
					})
				})
				.catch(e => {				
					data.push({
						name,
						img,
						url: $(item).find('a').attr('href')
					})
				})
			promiseAll.push(promise)
		}
	})
	// 获取集数
	let getlist = (obj) => {
		return axios.get(obj.url).then(res => {
			let $ = cheerio.load(res.data)
			let $el = $('ul.site-piclist').find('li')
			let list = []
			$el.each((i, item) => {
				let $a = $(item).find('.site-piclist_info').find('a').eq(0)
				let name = $a.text().trim()
				// 不包含预告
				if(/^第\d+集$/.test(name)) {
					list.push({
						name,
						url: $a.attr('href')
					})
				}
			})
			return Object.assign(obj, {list})
		})
	} 
	// 保存数据
	let fileData = []

	let start = (i = 0) => {
		getlist(data[i]).then(result => {
			if(result.list.length == 0) {
				console.log(result)
			}
			fileData.push(result)
			if(i == data.length -1) {
				fs.writeFileSync('../data/iqiyi_dianshi.json', JSON.stringify(fileData))
				console.log(`all done`)
			}
			else{
				console.log(`${i} done`)
				start(++i)
			}
		})
	}
	Promise.all(promiseAll).then(() => {
		start()
	})
}).catch(e => {
	console.log(e)
})

// 电影


