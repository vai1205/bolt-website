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
//=============================================GET REQUESTS==============================================

//Get request: HOME PAGE=============================================
app.get('/', function(req,res){
    res.render('home')
})

//==========================================SERVER CONNECTION============================================

app.listen(3000, function() {
	console.log('Server started at 3000')
})