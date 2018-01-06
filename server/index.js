const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression');
const api = require('./api/index.js')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

app.use(compression())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Access-Control-Allow-Origi
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "X-Requested-With");  
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");   
  res.header("Content-Type", "application/json;charset=utf-8");
  next();  
});
// add router
api(app)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
