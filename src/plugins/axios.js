import * as axios from 'axios'
const isProdMode = Object.is(process.env.NODE_ENV, 'production')

let options = {
	rejectUnauthorized: false,
	baseURL: isProdMode ? '' : 'http://127.0.0.1:3000'
}

export default axios.create(options)
