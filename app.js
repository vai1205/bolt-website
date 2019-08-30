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
//==========================================VARIABLE DECLARATIONS==================================
var data
//=============================================GET REQUESTS==============================================

//Get request: HOME PAGE=============================================
app.get('/', (req,res)=>{
    res.render('home')
})
app.get('/mobileDevelopment', (req,res)=>{
	data = mobileDevelopment
	res.render('viewDetails',{
		data:data
	})
})
app.get('/webDevelopment', (req,res)=>{
	data = webDevelopment
	res.render('viewDetails',{
		data:data
	})
})
//=============================================PAGE DATA==============================================
const mobileDevelopment = {
	activeMobileDevelopment: 'active',
	activeWebDevelopment : ' ',
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
	androidHeadOne: 'Android App Development',
	androidPara: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, pariatur necessitatibus tempore, dolores vitae deserunt veritatis architecto quae, vel officiis iure magni hic iste explicabo itaque corrupti quisquam reprehenderit quidem!',
	liAndroidOne:'Android Smartphone Apps',
	liAndroidTwo: 'Android Tablet Apps',
	liAndroidThree: 'Android Wear Apps',
	liAndroidFour: 'Android TV Apps',
	crossPlatformHeadOne: 'Cross Platform Apps',
	crossPlatformPara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt excepturi, sequi doloremque aspernatur fuga cumque aut quibusdam beatae voluptates blanditiis, amet sit consequuntur vitae fugiat dignissimos officiis fugit perferendis!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, necessitatibus corporis? Cumque at ex officia sequi praesentium! Voluptatem obcaecati',
	crossIoneClass: 'fab fa-node-js tech-type',
	crossItwoClass: 'fab fa-node-js tech-type',
	crossIthreeClass: 'fab fa-node-js tech-type',
	crossIfourClass: 'fab fa-node-js tech-type',
	crossPlatformImg:'images/cross-platform-apps.jpg',
	cloudImg:'images/cloud-mobile-bg.jpg',
	cloudHead: 'Mobile Apps Driven by Cloud',
	cloudPara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores adipisci iusto officiis iure? In rem minima recusandae iusto quas, suscipit quisquam eius animi ex harum, repellat alias sapiente nesciunt voluptatem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, repellat quia corrupti natus eaque aspernatur.',
	cloudIoneclass: 'fab fa-node-js tech-type',
	cloudItwoclass: 'fab fa-node-js tech-type',
	cloudIthreeclass: 'fab fa-node-js tech-type',
	cloudIfourclass: 'fab fa-node-js tech-type',
	liCloudOne: 'Cloud Consulting',
	liCloudTwo: 'Migrate to Cloud',
	liCloudThree: 'Managed Cloud Services',
	liCloudFour: 'Content Delivery',
	workedHead: 'Worked with leading Industries',
	workedIoneClass: 'fas fa-anchor',
	workedItwoClass: 'fas fa-anchor',
	workedIthreeClass: 'fas fa-anchor',
	workedIfourClass: 'fas fa-anchor',
	workedIfiveClass: 'fas fa-anchor',
	workedIsixClass: 'fas fa-anchor',
	portfolioHead: 'Recent Projects',
	portfolioPara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia eius dolorem nesciunt, deleniti non iure nemo facere ab corrupti? Et error soluta saepe illo accusantium libero eos cum magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam temporibus odio dolor tempore earum adipisci nobis voluptate asperiores eius necessitatibus vero magnam assumenda, libero vel minima aliquid unde dolorem?',
	portfolioHead1: 'HELP',
	portfolioHead2: 'HELP',
	portfolioHead3: 'HELP',
	portfolioPara1: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum maiores culpa cumque cupiditate.',
	portfolioPara2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum maiores culpa cumque cupiditate.',
	portfolioPara3: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum maiores culpa cumque cupiditate.',
	portfolioImg1:'images/portfolio-image0.jpg',
	portfolioImg2:'images/portfolio-image0.jpg',
	portfolioImg3:'images/portfolio-image0.jpg',
	client1Img:'images/lady-img.jpg',
	client2Img:'images/lady-img.jpg',
	client1Feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam suscipit a minima sed! Ex sunt provident mollitia iste ab.',
	client2Feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam suscipit a minima sed! Ex sunt provident mollitia iste ab.'
}
const webDevelopment = {
	activeWebDevelopment : 'active',
	activeMobileDevelopment : ' ',
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
	hide: 'display:none;',
	cloudImg:'images/web/CMS-desktop.jpg',
	cloudHead: 'Mobile Apps Driven by Cloud',
	cloudPara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores adipisci iusto officiis iure? In rem minima recusandae iusto quas, suscipit quisquam eius animi ex harum, repellat alias sapiente nesciunt voluptatem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, repellat quia corrupti natus eaque aspernatur.',
	cloudIoneclass: 'fab fa-node-js tech-type',
	cloudItwoclass: 'fab fa-node-js tech-type',
	cloudIthreeclass: 'fab fa-node-js tech-type',
	cloudIfourclass: 'fab fa-node-js tech-type',
	liCloudOne: 'Cloud Consulting',
	liCloudTwo: 'Migrate to Cloud',
	liCloudThree: 'Managed Cloud Services',
	liCloudFour: 'Content Delivery',
	portfolioImg1:'images/portfolio-image0.jpg',
	portfolioImg2:'images/portfolio-image0.jpg',
	portfolioImg3:'images/portfolio-image0.jpg',
	workedHead: 'Worked with leading Industries',
	workedIoneClass: 'fas fa-anchor',
	workedItwoClass: 'fas fa-anchor',
	workedIthreeClass: 'fas fa-anchor',
	workedIfourClass: 'fas fa-anchor',
	workedIfiveClass: 'fas fa-anchor',
	workedIsixClass: 'fas fa-anchor',
	portfolioHead: 'Recent Projects',
	portfolioPara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia eius dolorem nesciunt, deleniti non iure nemo facere ab corrupti? Et error soluta saepe illo accusantium libero eos cum magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam temporibus odio dolor tempore earum adipisci nobis voluptate asperiores eius necessitatibus vero magnam assumenda, libero vel minima aliquid unde dolorem?',
	portfolioHead1: 'HELP',
	portfolioHead2: 'HELP',
	portfolioHead3: 'HELP',
	portfolioPara1: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum maiores culpa cumque cupiditate.',
	portfolioPara2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum maiores culpa cumque cupiditate.',
	portfolioPara3: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum maiores culpa cumque cupiditate.',
	client1Img:'images/lady-img.jpg',
	client2Img:'images/lady-img.jpg',
	client1Name: 'Beverly, Illinois',
	client2Name: 'Beverly, Illinois',
	client1Feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam suscipit a minima sed! Ex sunt provident mollitia iste ab.',
	client2Feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam suscipit a minima sed! Ex sunt provident mollitia iste ab.'
}
//==========================================SERVER CONNECTION============================================

app.listen(process.env.PORT||3000, function() {
	console.log('Server started at 3000')
})