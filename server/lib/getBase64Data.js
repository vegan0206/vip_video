/**
 * 获取图片base64编码
 * @authors veganQian (veganQian@163.com)
 * @date    2018-01-06 23:47:39
 * @version $Id$
 */

const http = require('http');
const getBase64Data = (url) => {
	return new Promise((rs, rj) => {
		http.get(url, (res) => {
			let chunks = [];
			let size = 0;
			res.on('data', (chunk) => {
	　　　　chunks.push(chunk);　
	　　　　size += chunk.length;
	　　});
			res.on('end', (err) => {
				if(err) {
					rj(err)
				}
				else {
					let data = Buffer.concat(chunks, size);
					let base64Img = data.toString('base64');
					rs('data:image/png;base64,' + base64Img)				
				}
			});
		});
	})
}

module.exports = getBase64Data
