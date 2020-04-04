//========================================APP DEPENDENCIES===============================================
const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const upload = require('express-fileupload')
const ejs = require('ejs')
const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(
	bodyParser.urlencoded({
		extended: true
	})
)
app.use(upload({
	limits: { fileSize: 5 * 1024 * 1024 }
  }))
//==========================================LOCALIZATION IMPORTS==================================
const mobileDevelopment = require ('./Localization/mobileDevelopment.js')
const webDevelopment = require ('./Localization/webDevelopment.js')
const graphicsDesign = require ('./Localization/graphicsDesign.js')
const mobileGames = require ('./Localization/mobileGames.js')
const customizedSoftware = require ('./Localization/customizedSoftware.js')
const learnMoreIphone = require ('./Localization/learnMoreIphone.js')
const learnMoreAndroid = require ('./Localization/learnMoreAndroid.js')
const learnMoreCloud = require ('./Localization/learnMoreCloud.js')
const learnMoreWebDev = require ('./Localization/learnMoreWebDev.js')
const learnMoreDesign = require ('./Localization/learnMoreDesign.js')
const learnMoreGames = require ('./Localization/learnMoreGames.js')
const learnMoreSoftware = require ('./Localization/learnMoreSoftware.js')
const about = require ('./Localization/about.js')
const whatWeDo = require ('./Localization/whatWeDo.js')
const ourWork = require ('./Localization/ourWork.js')
const careers = require ('./Localization/careers.js')
const workshops = require ('./Localization/workshops.js')
const products = require ('./Localization/products.js')
const blogs = require ('./Localization/blogs.js')
const schoolManagementSystem = require ('./Localization/schoolManagementSystem.js')

//==========================================VARIABLE DECLARATIONS==================================
var data, learnMoreData, pageTemplateData
// ======== default pageTemplateData ========
const defaultPageTemplateData = {
	activeAbout : ' ',
	activeWhatWeDo : ' ',
	activeBlogs : ' ',
	activeOurWork : ' ',
	activeCareers : ' ',	
}
//=============================================GET REQUESTS==============================================
//Get request: HOME PAGE=============================================
app.get('/', (req,res)=>{
    res.render('home')
})
app.get('/mobileDevelopment', (req,res)=>{
	data = mobileDevelopment
	pageTemplateData = defaultPageTemplateData
	res.render('viewDetails',{
		data:data,
		pageTemplateData:pageTemplateData
	})
})
app.get('/webDevelopment', (req,res)=>{
	data = webDevelopment
	pageTemplateData = defaultPageTemplateData
	res.render('viewDetails',{
		data:data,
		pageTemplateData:pageTemplateData
	})
})
app.get('/graphicsDesign', (req,res)=>{
	data = graphicsDesign
	pageTemplateData = defaultPageTemplateData
	res.render('viewDetails',{
		data:data,
		pageTemplateData:pageTemplateData
	})
})
app.get('/mobileGames', (req,res)=>{
	data = mobileGames
	pageTemplateData = defaultPageTemplateData
	res.render('viewDetails',{
		data:data,
		pageTemplateData:pageTemplateData
	})
})
app.get('/customizedSoftware', (req,res)=>{
	data = customizedSoftware
	pageTemplateData = defaultPageTemplateData
	res.render('viewDetails',{
		data:data,
		pageTemplateData:pageTemplateData
	})
})
app.get('/learnMoreIphone', (req,res)=>{
	learnMoreData = learnMoreIphone
	pageTemplateData = defaultPageTemplateData
	res.render('learnMore',{
		learnMoreData:learnMoreData,
		pageTemplateData:pageTemplateData
	})
})
app.get('/learnMoreAndroid', (req,res)=>{
	learnMoreData = learnMoreAndroid
	pageTemplateData = defaultPageTemplateData
	res.render('learnMore',{
		learnMoreData:learnMoreData,
		pageTemplateData:pageTemplateData
	})
})
app.get('/learnMoreCloud', (req,res)=>{
	learnMoreData = learnMoreCloud
	pageTemplateData = defaultPageTemplateData
	res.render('learnMore',{
		learnMoreData:learnMoreData,
		pageTemplateData:pageTemplateData
	})
})
app.get('/learnMoreWebDev', (req,res)=>{
	learnMoreData = learnMoreWebDev
	pageTemplateData = defaultPageTemplateData
	res.render('learnMore',{
		learnMoreData:learnMoreData,
		pageTemplateData:pageTemplateData
	})
})
app.get('/learnMoreDesign', (req,res)=>{
	learnMoreData = learnMoreDesign
	pageTemplateData = defaultPageTemplateData
	res.render('learnMore',{
		learnMoreData:learnMoreData,
		pageTemplateData:pageTemplateData
	})
})
app.get('/learnMoreGames', (req,res)=>{
	learnMoreData = learnMoreGames
	pageTemplateData = defaultPageTemplateData
	res.render('learnMore',{
		learnMoreData:learnMoreData,
		pageTemplateData:pageTemplateData
	})
})
app.get('/learnMoreSoftware', (req,res)=>{
	learnMoreData = learnMoreSoftware
	pageTemplateData = defaultPageTemplateData
	res.render('learnMore',{
		learnMoreData:learnMoreData,
		pageTemplateData:pageTemplateData
	})
})
app.get('/contactUs', (req,res)=>{
	pageTemplateData = defaultPageTemplateData
	res.render('contactUs',{
		pageTemplateData:pageTemplateData
	})
})
app.get('/about', (req,res)=>{
	pageTemplateData = about
	res.render('pageTemplate', {
		pageTemplateData:pageTemplateData
	})
})
app.get('/whatWeDo', (req,res)=>{
	pageTemplateData = whatWeDo
	res.render('pageTemplate', {
		pageTemplateData:pageTemplateData
	})
})
app.get('/blogs', (req,res)=>{
	pageTemplateData = blogs
	res.render('blogs',{
		pageTemplateData:pageTemplateData	
	})
})
app.get('/thanks', (req,res)=>{
	pageTemplateData = defaultPageTemplateData
	res.render('thanks',{
		pageTemplateData:pageTemplateData	
	})
})
app.get('/resumeSubmitted', (req,res)=>{
	pageTemplateData = defaultPageTemplateData
	res.render('resumeSubmitted',{
		pageTemplateData:pageTemplateData	
	})
})
app.get('/ourWork', (req,res)=>{
	pageTemplateData = ourWork
	res.render('pageTemplate', {
		pageTemplateData:pageTemplateData
	})
})
app.get('/careers', (req,res)=>{
	pageTemplateData = careers
	res.render('pageTemplate', {
		pageTemplateData:pageTemplateData
	})
})
app.get('/workshops', (req,res)=>{
	pageTemplateData = workshops
	res.render('pageTemplate', {
		pageTemplateData:pageTemplateData
	})
})
app.get('/schoolManagementSystem', (req,res)=>{
	pageTemplateData = schoolManagementSystem
	res.render('pageTemplate', {
		pageTemplateData:pageTemplateData
	})
})
app.get('/products', (req,res)=>{
	pageTemplateData = defaultPageTemplateData
	res.render('learnMore',{
		learnMoreData:products,
		pageTemplateData:pageTemplateData
	})
})

app.get('/eshop/:shopId',(req,res)=>{
	let name = req.params.shopId.toUpperCase()
	let heading = ''
	let qr = ''
	let hideIt = ''
	let code = ''
	let subheading = "Get Item Deliver at your Doorstep"
	let shopFound = true
	switch (name){
		case 'VISHALBBK' :
			name = "Vishal Mega Mart"
			qr = "/images/vishal/VISHALBBK.png"
			code = "VISHALBBK"
			break
		case 'EASYDAYBBK' :
			name = "Easy Day"
			qr = "/images/easyDay/EASYDAYBBK.png"
			code = "EASYDAYBBK"
			break
		case 'SEVENBBK' :
			name = "Seven Eleven Mart"
			qr = "/images/seven/SEVENBBK.png"
			code = "SEVENBBK"
			break
		case 'OJOYBBK' :
			name = "O-Joy!"
			qr = "/images/ojoy/OJOYBBK.png"
			code = "OJOYBBK"
			break
		case 'VMARTBBK' :
			name = "V-Mart"
			qr = "/images/vmart/VMARTBBK.png"
			code = "VMARTBBK"
			break
		case 'SAGARBBK' :
			name = "Sagar Family Mart"
			qr = "/images/sagar/SAGARBBK.png"
			code = "SAGARBBK"
			break
		default:
			shopFound = false
	}
	if (shopFound){
		heading = `Welcome to ${name}, Barabanki`
		subheading = 'Get Item Deliver at your Doorstep'
	} else {
		heading = "Please Find your Store Code"
		subheading = "Whatsapp us at +91-9140473141 or drop an Email to support@boltinfotech.com"
		hideIt = "display:none"
	}
	res.render('appDownload',{
		pageTemplateData:defaultPageTemplateData,
		heading, subheading, qr, hideIt, code
	})
})

app.get('/eshop', (req,res)=>{
	res.redirect('/eshop/default')
})

//======================================== Email Configurations ==================================
const transporter = nodemailer.createTransport({
	service : 'gmail',
	auth : {
		user : 'enquiry.boltinfotech@gmail.com',
		pass : process.env.GMAIL_PASS
	}
})
//=============================================POST REQUESTS==============================================
//contact form for share idea
app.post('/contact', (req,res)=>{
	const mailOptionsForClient = {
		from : 'enquiry.boltinfotech@gmail.com',
		to : req.body.clientEmail,
		subject : 'Your Idea is worth Millions!',
		html : '<h4 style="text-align: center;">&nbsp;</h4><table style="height: 204px;" width="628"><tbody><tr><td style="width: 618px; border-color: red; background-color: #f7f7f7;"><h2 style="text-align: center;"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://cdn1.imggmi.com/uploads/2019/9/4/e219c92cddcfee450817a8dec9462382-full.png" alt="" width="156" height="78" /><strong>We appreciate your <span style="color: #ff0000;">interest</span> in our Services.</strong></h2><p style="text-align: center;">Thanks for contacting us. We will be in touch with you soon!</p></td></tr></tbody></table>',
	}
	transporter.sendMail(mailOptionsForClient,(err, info)=>{
		if (err){
			console.log(err);	
		} else {
			console.log('Email 1 sent' + info.response)
		}
	})
	const mailOptionsForBolt = {
		from : 'enquiry.boltinfotech@gmail.com',
		to : 'support@boltinfotech.com',
		subject : 'Enquiry data : From Website',
		html : '<b><li> Name : </b>'+ req.body.clientName + '<br />' + '<b><li> Topic :</b> ' + req.body.topic + '<br />' + '<b><li> Email : </b>' + req.body.clientEmail + '<br />' + '<b><li> Mobile : </b>' + req.body.clientMobile + '<br />' + '<b><li> Company : </b>' + req.body.company + '<br />' + '<b><li> Idea : </b>' + req.body.idea
	}
	transporter.sendMail(mailOptionsForBolt,(err, info)=>{
		if (err){
			console.log(err);	
		} else {
			console.log('Email 2 sent' + info.response)
		}
	})
	res.redirect('/thanks')
})
// contact form for free consultation
app.post('/freeConsultation', (req,res)=>{
	const mailOptionsForClient = {
		from : 'enquiry.boltinfotech@gmail.com',
		to : req.body.clientEmail,
		subject : 'Your Idea is worth Millions!',
		html : '<h4 style="text-align: center;">&nbsp;</h4><table style="height: 204px;" width="628"><tbody><tr><td style="width: 618px; border-color: red; background-color: #f7f7f7;"><h2 style="text-align: center;"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://cdn1.imggmi.com/uploads/2019/9/4/e219c92cddcfee450817a8dec9462382-full.png" alt="" width="156" height="78" /><strong>We appreciate your <span style="color: #ff0000;">interest</span> in our Services.</strong></h2><p style="text-align: center;">Thanks for contacting us. We will be in touch with you soon!</p></td></tr></tbody></table>',
	}
	transporter.sendMail(mailOptionsForClient,(err, info)=>{
		if (err){
			console.log(err);	
		} else {
			console.log('Email 1 sent' + info.response)
		}
	})
	const mailOptionsForBolt = {
		from : 'enquiry.boltinfotech@gmail.com',
		to : 'support@boltinfotech.com',
		subject : 'Enquiry data : Free Consultation',
		html : '<b><li> Name : </b>'+ req.body.clientName + '<br />' + '<b><li> Email : </b>' + req.body.clientEmail + '<br />' + '<b><li> Mobile : </b>' + req.body.clientMobile + '<br />'  + '<b><li> Idea : </b>' + req.body.idea
	}
	transporter.sendMail(mailOptionsForBolt,(err, info)=>{
		if (err){
			console.log(err);	
		} else {
			console.log('Email 2 sent' + info.response)
		}
	})
	res.redirect('/thanks')
})
//contact form for resume upload
app.post('/upload',(req,res)=>{
	if (req.files){
		//console.log (req.files)
		const file = req.files.fileName, name = file.name, type = file.mimetype
		file.mv('public/uploads/resume'+name, (err)=>{
			if (err){
				console.log(err)
				res.send ('sorry. please try again')
			}
			else{
				res.redirect('/resumeSubmitted')
				const mailOptionsForBolt = {
					from : 'enquiry.boltinfotech@gmail.com',
					to : 'support@boltinfotech.com',
					subject : 'Candidate application on website',
					text : 'Resume file as uploaded by the candidate',
					attachments : [
						{
							filename : 'resume'+name,
							path : 'public/uploads/resume'+name
						}
					]
				}
				transporter.sendMail(mailOptionsForBolt,(err, info)=>{
					if (err){
						console.log(err);	
					} else {
						console.log('Email of resume sent' + info.response)
					}
				})
			}
		})
	}
})
//==========================================SERVER CONNECTION============================================

app.listen(process.env.PORT||3000, function() {
	console.log('Server started at 3000')
})