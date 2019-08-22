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
//=============================================VARIABLE DECLARATIONS==============================================
var data
//=============================================GET REQUESTS==============================================

//Get request: HOME PAGE=============================================
app.get('/', function(req,res){
    res.render('home')
})
app.get('/view', function(req,res){
    res.render('viewDetails',{
		data:data
	})
})

//=============================================POST REQUESTS==============================================

app.post('/viewPath', function(req,res){
	var viewName = req.body.viewName
	if (viewName === 'mobileDevelopment'){
		data = mobileDevelopment
		res.redirect('/view')
	} else if (viewName === 'webDevelopment'){
		data = webDevelopment
		res.redirect('/view')
	}
})

//=============================================PAGE DATA==============================================
const mobileDevelopment = {
	topBannerImage:'images/mobile-banner.jpg',
	imgDesktop:'images/mobile-background-desktop.jpg',
	imgMobile: 'images/mobile-background-mobile.jpg',
	nav2head: 'Lorem ipsum dolor, sit amet.',
	nav2para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita laborum facere, impedit vitae reprehenderit porro voluptas? Vel ab laudantium dolorem suscipit officiis delectus sint? Fugiat reiciendis vitae impedit temporibus corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam ea eveniet deleniti fuga voluptatem dolorum similique hic. ',
	appsForImg: 'images/mobile-apps-for-bg.jpg',
	appsForHead: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	appsForIoneClass:'fab fa-instagram',
	appsForH3one: 'Heading 1',
	appsForPone:'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	appsForItwoClass:'fab fa-twitter',
	appsForH3two: 'Heading 2',
	appsForPtwo: 'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	appsForIthreeClass:'fab fa-instagram',
	appsForH3three: 'Heading 3',
	appsForPthree: 'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	iosImgDesktop: 'images/ios-apps-desktop.jpg',
	iosHeadOne: 'iOS Apps Development',
	iosImgMobile: 'images/ios-apps-mobile.jpg',
	iosHeadTwo: 'iOS Apps Development',
	iosPara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias sit natus, sed ut iste ullam quod facilis debitis suscipit nemo officia perspiciatis, asperiores quae, quibusdam eius nisi! Repellendus, dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam officiis ipsa hic voluptatem autem Lorem ipsum.',
	liIosOne: 'iPhone App Development',
	liIosTwo:'iPad App Development',
	liIosThree:'Apple Watch Development',
	liIosFour:'Apple TV Apps',
	androidAppsPart1DesktopImg: 'images/android-apps-part-1-desktop.jpg',
	androidAppsPart1MobileImg:'images/android-apps-part-1-mobile.jpg',
	androidAppsPart2DesktopImg: 'images/android-apps-part-2-desktop.jpg',
	androidAppsPart2MobileImg:'images/android-apps-part-2-mobile.jpg',
	crossPlatformImg:'images/cross-platform-apps.jpg',
	cloudImg:'images/cloud-mobile-bg.jpg',
	portfolioImg1:'images/portfolio-image0.jpg',
	portfolioImg2:'images/portfolio-image0.jpg',
	portfolioImg3:'images/portfolio-image0.jpg',
	client1Img:'images/lady-img.jpg',
	client2Img:'images/lady-img.jpg'
}
const webDevelopment = {
	topBannerImage: 'images/web/web-banner.jpg',
	imgDesktop:'images/web/custom-web-development-desktop.jpg',
	imgMobile: 'images/web/custom-web-development-mobile.jpg',
	nav2head: 'Lorem ipsum dolor, sit amet.',
	nav2para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita laborum facere, impedit vitae reprehenderit porro voluptas? Vel ab laudantium dolorem suscipit officiis delectus sint? Fugiat reiciendis vitae impedit temporibus corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam ea eveniet deleniti fuga voluptatem dolorum similique hic. ',
	appsForImg: 'images/web/e-Commerce-desktop.jpg',
	appsForHead: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	appsForIoneClass:'fab fa-instagram',
	appsForH3one: 'Heading 1',
	appsForPone:'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	appsForItwoClass:'fab fa-twitter',
	appsForH3two: 'Heading 2',
	appsForPtwo: 'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	appsForIthreeClass:'fab fa-instagram',
	appsForH3three: 'Heading 3',
	appsForPthree: 'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	iosImgDesktop: 'images/web/Backend-&-APIs-desktop.jpg',
	iosHeadOne: 'iOS Apps Development',
	iosImgMobile: 'images/web/Backend-&-APIs-mobile.jpg',
	iosHeadTwo: 'iOS Apps Development',
	iosPara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias sit natus, sed ut iste ullam quod facilis debitis suscipit nemo officia perspiciatis, asperiores quae, quibusdam eius nisi! Repellendus, dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam officiis ipsa hic voluptatem autem Lorem ipsum.',
	liIosOne: 'iPhone App Development',
	liIosTwo:'iPad App Development',
	liIosThree:'Apple Watch Development',
	liIosFour:'Apple TV Apps',
	androidAppsPart1DesktopImg: 'images/android-apps-part-1-desktop.jpg',
	androidAppsPart1MobileImg:'images/android-apps-part-1-mobile.jpg',
	androidAppsPart2DesktopImg: 'images/android-apps-part-2-desktop.jpg',
	androidAppsPart2MobileImg:'images/android-apps-part-2-mobile.jpg',
	crossPlatformImg:'images/cross-platform-apps.jpg',
	cloudImg:'images/web/CMS-desktop.jpg',
	portfolioImg1:'images/portfolio-image0.jpg',
	portfolioImg2:'images/portfolio-image0.jpg',
	portfolioImg3:'images/portfolio-image0.jpg',
	client1Img:'images/lady-img.jpg',
	client2Img:'images/lady-img.jpg'
}
//==========================================SERVER CONNECTION============================================

app.listen(process.env.PORT||3000, function() {
	console.log('Server started at 3000')
})