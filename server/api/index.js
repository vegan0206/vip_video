/**
 * router entry
 * @authors veganQian (veganQian@163.com)
 * @date    2017-12-30 18:49:42
 * @version $Id$
 */
const fs = require('fs')
const path = require('path')
const axios = require('axios')
const cheerio = require('cheerio')
const iqiyiDS = JSON.parse(fs.readFileSync('./data/iqiyi_dianshi.json'))
const api = 'http://api.baiyug.cn/vip/index.php?url='
module.exports = (app) => {
	// 获取电视列表
	app.get('/api/iqiyi/dianshi/list', (req, res) => {
		res.send(iqiyiDS)
	})
	// 获取电影列表
	app.get('/api/vip/get-url', (req, res) => {
		let {url} = req.query
		console.log(req.query)
		axios.post(api + url).then(body => {
			let $ = cheerio.load(body.data)
			let url = $('iframe').attr('src')

			console.log(url)
			res.send({url})
		}).catch(e => {
			console.log(e)
			res.send({url: ''})
		})
	})
}
