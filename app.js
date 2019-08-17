//========================================APP DEPENDENCIES===============================================

const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(
	bodyParser.urlencoded({
		extended: true
	})
)
//==========================================SERVER CONNECTION============================================

app.listen(process.env.PORT || 3000, function() {
	console.log('Server started at 3000')
})