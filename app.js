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
var data, learnMoreData, pageTemplateData
// ======== default pageTemplateData ========
pageTemplateData = {
	activeAbout : ' ',
	activeWhatWeDo : ' ',
	activeBlogs : ' ',
	activeOurWork : '',
	activeCareers : ' ',	
}
//=============================================GET REQUESTS==============================================

//Get request: HOME PAGE=============================================
app.get('/', (req,res)=>{
    res.render('home')
})
app.get('/mobileDevelopment', (req,res)=>{
	data = mobileDevelopment
	res.render('viewDetails',{
		data:data,
		pageTemplateData:pageTemplateData
	})
})
app.get('/webDevelopment', (req,res)=>{
	data = webDevelopment
	res.render('viewDetails',{
		data:data,
		pageTemplateData:pageTemplateData
	})
})
app.get('/graphicsDesign', (req,res)=>{
	data = graphicsDesign
	res.render('viewDetails',{
		data:data,
		pageTemplateData:pageTemplateData
	})
})
app.get('/mobileGames', (req,res)=>{
	data = mobileGames
	res.render('viewDetails',{
		data:data,
		pageTemplateData:pageTemplateData
	})
})
app.get('/customizedSoftware', (req,res)=>{
	data = customizedSoftware
	res.render('viewDetails',{
		data:data,
		pageTemplateData:pageTemplateData
	})
})
app.get('/learnMoreIphone', (req,res)=>{
	learnMoreData = learnMoreIphone
	res.render('learnMore',{
		learnMoreData:learnMoreData,
		pageTemplateData:pageTemplateData
	})
})
app.get('/learnMoreAndroid', (req,res)=>{
	learnMoreData = learnMoreAndroid
	res.render('learnMore',{
		learnMoreData:learnMoreData,
		pageTemplateData:pageTemplateData
	})
})
app.get('/learnMoreCloud', (req,res)=>{
	learnMoreData = learnMoreCloud
	res.render('learnMore',{
		learnMoreData:learnMoreData,
		pageTemplateData:pageTemplateData
	})
})
app.get('/learnMoreWebDev', (req,res)=>{
	learnMoreData = learnMoreWebDev
	res.render('learnMore',{
		learnMoreData:learnMoreData,
		pageTemplateData:pageTemplateData
	})
})
app.get('/learnMoreDesign', (req,res)=>{
	learnMoreData = learnMoreDesign
	res.render('learnMore',{
		learnMoreData:learnMoreData,
		pageTemplateData:pageTemplateData
	})
})
app.get('/learnMoreGames', (req,res)=>{
	learnMoreData = learnMoreGames
	res.render('learnMore',{
		learnMoreData:learnMoreData,
		pageTemplateData:pageTemplateData
	})
})
app.get('/learnMoreSoftware', (req,res)=>{
	learnMoreData = learnMoreSoftware
	res.render('learnMore',{
		learnMoreData:learnMoreData,
		pageTemplateData:pageTemplateData
	})
})
app.get('/contactUs', (req,res)=>{
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

//=============================================PAGE DATA==============================================
// ========mobileDevelopment========
const mobileDevelopment = {
	btnHide : ' ',
	activeMobileDevelopment: 'active',
	activeWebDevelopment : ' ',
	activeGraphicsDesign : ' ',
	activeMobileGames: ' ',
	activeCustomizedSoftware : ' ',
	topBannerImage:'images/mobile-banner.jpg',
	imgDesktop:'images/mobile-background-desktop.jpg',
	imgMobile: 'images/mobile-background-mobile.jpg',
	nav2head: 'Mobile applications for your idea!',
	nav2para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita laborum facere, impedit vitae reprehenderit porro voluptas? Vel ab laudantium dolorem suscipit officiis delectus sint? Fugiat reiciendis vitae impedit temporibus corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam ea eveniet deleniti fuga voluptatem dolorum similique hic. ',
	appsForImg: 'images/mobile-apps-for-bg.jpg',
	appsForHead: 'We collaborate to develop high performence mobile apps for',
	appsForIoneClass:'fas fa-rocket',
	appsForH3one: 'Startups',
	appsForPone:'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	appsForItwoClass:'fas fa-city',
	appsForH3two: 'Industries',
	appsForPtwo: 'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	appsForIthreeClass:'fas fa-lightbulb',
	appsForH3three: 'Creators',
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
	learnMoreRouteIos : '/learnMoreIphone',
	learnMoreRouteAndroid : '/learnMoreAndroid',
	learnMoreRouteCloud : '/learnMoreCloud',
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
	workedHead: 'Developed Mobile Apps of Different Categories',
	workedIoneClass: 'fas fa-water',
	workedItwoClass: 'fas fa-clinic-medical',
	workedIthreeClass: 'fas fa-cookie-bite',
	workedIfourClass: 'fas fa-home',
	workedIfiveClass: 'fas fa-headphones',
	workedIsixClass: 'fas fa-book-open',
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
// ========webDevelopment========
const webDevelopment = {
	learnMoreRouteCloud : '/learnMoreWebDev',
	btnHide : 'display:none;',
	hide: 'display:none;',
	activeWebDevelopment : 'active',
	activeMobileDevelopment : ' ',
	activeGraphicsDesign : ' ',
	activeMobileGames: ' ',
	activeCustomizedSoftware : ' ',
	topBannerImage: 'images/web/web-banner.jpg',
	imgDesktop:'images/web/custom-web-development-desktop.jpg',
	imgMobile: 'images/web/custom-web-development-mobile.jpg',
	nav2head: 'We Develop user friendly Web Apps',
	nav2para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita laborum facere, impedit vitae reprehenderit porro voluptas? Vel ab laudantium dolorem suscipit officiis delectus sint? Fugiat reiciendis vitae impedit temporibus corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam ea eveniet deleniti fuga voluptatem dolorum similique hic. ',
	appsForImg: 'images/web/e-Commerce-desktop.jpg',
	appsForHead: 'We collaborate to develop SEO friendly Web Apps for',
	appsForIoneClass:'fas fa-user',
	appsForH3one: 'Individuals',
	appsForPone:'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	appsForItwoClass:'fas fa-city',
	appsForH3two: 'Organizations',
	appsForPtwo: 'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	appsForIthreeClass:'fas fa-lightbulb',
	appsForH3three: 'Creators',
	appsForPthree: 'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	iosImgDesktop: 'images/web/Backend-&-APIs-desktop.jpg',
	iosHeadOne: 'Backend-&-APIs',
	iosImgMobile: 'images/web/Backend-&-APIs-mobile.jpg',
	iosHeadTwo: 'Backend-&-APIs',
	iosPara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias sit natus, sed ut iste ullam quod facilis debitis suscipit nemo officia perspiciatis, asperiores quae, quibusdam eius nisi! Repellendus, dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam officiis ipsa hic voluptatem autem Lorem ipsum.',
	liIosOne: 'Mobile CMS',
	liIosTwo:'Authentication Services',
	liIosThree:'Web app servers',
	liIosFour:'App Engagements with push',
	cloudImg:'images/web/CMS-desktop.jpg',
	cloudHead: 'Content Management Systems',
	cloudPara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores adipisci iusto officiis iure? In rem minima recusandae iusto quas, suscipit quisquam eius animi ex harum, repellat alias sapiente nesciunt voluptatem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, repellat quia corrupti natus eaque aspernatur.',
	cloudIoneclass: 'fab fa-wordpress tech-type',
	cloudItwoclass: 'fab fa-joomla tech-type',
	cloudIthreeclass: 'fab fa-drupal tech-type',
	cloudIfourclass: 'fab fa-typo3 tech-type',
	liCloudOne: 'Wordpress',
	liCloudTwo: 'Joomla',
	liCloudThree: 'Drupal',
	liCloudFour: 'TYPO3',
	portfolioImg1:'images/portfolio-image0.jpg',
	portfolioImg2:'images/portfolio-image0.jpg',
	portfolioImg3:'images/portfolio-image0.jpg',
	workedHead: 'Developed Web Apps of Different Categories',
	workedIoneClass: 'fas fa-water',
	workedItwoClass: 'fas fa-clinic-medical',
	workedIthreeClass: 'fas fa-cookie-bite',
	workedIfourClass: 'fas fa-home',
	workedIfiveClass: 'fas fa-headphones',
	workedIsixClass: 'fas fa-book-open',
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
// ========graphicsDesign========
const graphicsDesign = {
	learnMoreRouteCloud : '/learnMoreDesign',
	btnHide : 'display:none;',
	hide: 'display:none;',
	activeWebDevelopment : ' ',
	activeMobileDevelopment : ' ',
	activeGraphicsDesign : 'active',
	activeMobileGames: ' ',
	activeCustomizedSoftware : ' ',
	topBannerImage: 'images/graphics/design-banner.jpg',
	imgDesktop:'images/graphics/graphic-background-desktop.jpg',
	imgMobile: 'images/graphics/graphic-background-mobile.jpg',
	nav2head: 'First Impression should be the best!',
	nav2para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita laborum facere, impedit vitae reprehenderit porro voluptas? Vel ab laudantium dolorem suscipit officiis delectus sint? Fugiat reiciendis vitae impedit temporibus corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam ea eveniet deleniti fuga voluptatem dolorum similique hic. ',
	appsForImg: 'images/graphics/2 real.jpg',
	appsForHead: 'User Interface of the apps speak and express!',
	appsForIoneClass:'fas fa-bolt',
	appsForH3one: 'Clear',
	appsForPone:'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	appsForItwoClass:'far fa-grin-stars',
	appsForH3two: 'Attractive',
	appsForPtwo: 'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	appsForIthreeClass:'fas fa-tablet-alt',
	appsForH3three: 'Responsive',
	appsForPthree: 'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	iosImgDesktop: 'images/graphics/3.jpg',
	iosHeadOne: 'We take care when we desgin',
	iosImgMobile: 'images/graphics/3-mobile-.jpg',
	iosHeadTwo: 'We take care when we DESIGN',
	iosPara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias sit natus, sed ut iste ullam quod facilis debitis suscipit nemo officia perspiciatis, asperiores quae, quibusdam eius nisi! Repellendus, dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam officiis ipsa hic voluptatem autem Lorem ipsum.',
	liIosOne: 'Concise',
	liIosTwo:'Consistent',
	liIosThree:'Efficient',
	liIosFour:'Familiar',
	cloudImg:'images/graphics/4.jpg',
	cloudHead: 'Experience, not just Interface!',
	cloudPara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores adipisci iusto officiis iure? In rem minima recusandae iusto quas, suscipit quisquam eius animi ex harum, repellat alias sapiente nesciunt voluptatem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, repellat quia corrupti natus eaque aspernatur.',
	cloudIoneclass: 'fas fas fa-tape tech-type',
	cloudItwoclass: 'fas fa-pencil-ruler tech-type',
	cloudIthreeclass: 'fas fa-ruler-combined tech-type',
	cloudIfourclass: 'fas fa-crop-alt tech-type',
	liCloudOne: 'Low Fidelity Wireframe',
	liCloudTwo: 'High Fidelity Wireframe',
	liCloudThree: 'UI',
	liCloudFour: 'UX',
	portfolioImg1:'images/portfolio-image0.jpg',
	portfolioImg2:'images/portfolio-image0.jpg',
	portfolioImg3:'images/portfolio-image0.jpg',
	workedHead: 'Designed for apps of Different Categories',
	workedIoneClass: 'fas fa-water',
	workedItwoClass: 'fas fa-clinic-medical',
	workedIthreeClass: 'fas fa-cookie-bite',
	workedIfourClass: 'fas fa-home',
	workedIfiveClass: 'fas fa-headphones',
	workedIsixClass: 'fas fa-book-open',
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
// ========mobileGames========
const mobileGames = {
	learnMoreRouteCloud : '/learnMoreGames',
	btnHide : 'display:none;',
	hide: 'display:none;',
	activeWebDevelopment : ' ',
	activeMobileDevelopment : ' ',
	activeGraphicsDesign : ' ',
	activeMobileGames: 'active',
	activeCustomizedSoftware : ' ',
	topBannerImage: 'images/games/game-banner.jpg',
	imgDesktop:'images/games/1.jpg',
	imgMobile: 'images/games/1-mobile.jpg',
	nav2head: 'Game that feels real!',
	nav2para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita laborum facere, impedit vitae reprehenderit porro voluptas? Vel ab laudantium dolorem suscipit officiis delectus sint? Fugiat reiciendis vitae impedit temporibus corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam ea eveniet deleniti fuga voluptatem dolorum similique hic. ',
	appsForImg: 'images/games/2.jpg',
	appsForHead: 'Games that are developed not just to play but to experience!',
	appsForIoneClass:'fas fa-dice',
	appsForH3one: '2D Games',
	appsForPone:'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	appsForItwoClass:'fas fa-gamepad',
	appsForH3two: '3D Games',
	appsForPtwo: 'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	appsForIthreeClass:'fas fa-gavel',
	appsForH3three: 'VR Games',
	appsForPthree: 'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	iosImgDesktop: 'images/games/3.jpg',
	iosHeadOne: 'VR Games',
	iosImgMobile: 'images/games/3-mobile.jpg',
	iosHeadTwo: 'VR Games',
	iosPara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias sit natus, sed ut iste ullam quod facilis debitis suscipit nemo officia perspiciatis, asperiores quae, quibusdam eius nisi! Repellendus, dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam officiis ipsa hic voluptatem autem Lorem ipsum.',
	liIosOne: 'Believable',
	liIosTwo:'Interactive',
	liIosThree:'Explorable',
	liIosFour:'Immersive',
	cloudImg:'images/games/4.jpg',
	cloudHead: 'Efficient tools, for best results',
	cloudPara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores adipisci iusto officiis iure? In rem minima recusandae iusto quas, suscipit quisquam eius animi ex harum, repellat alias sapiente nesciunt voluptatem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, repellat quia corrupti natus eaque aspernatur.',
	cloudIoneclass: 'fas fa-dice-d6 tech-type',
	cloudItwoclass: 'fas fa-puzzle-piece tech-type',
	cloudIthreeclass: 'fas fa-hand-scissors tech-type',
	cloudIfourclass: 'fas fa-headset tech-type',
	liCloudOne: 'Unity',
	liCloudTwo: 'SpriteKit',
	liCloudThree: 'Corona',
	liCloudFour: 'Cocos2D',
	portfolioImg1:'images/portfolio-image0.jpg',
	portfolioImg2:'images/portfolio-image0.jpg',
	portfolioImg3:'images/portfolio-image0.jpg',
	workedHead: 'Designed for apps of Different Categories',
	workedIoneClass: 'fas fa-water',
	workedItwoClass: 'fas fa-clinic-medical',
	workedIthreeClass: 'fas fa-cookie-bite',
	workedIfourClass: 'fas fa-home',
	workedIfiveClass: 'fas fa-headphones',
	workedIsixClass: 'fas fa-book-open',
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
// ========customizedSoftware========
const customizedSoftware = {
	learnMoreRouteCloud : '/learnMoreSoftware',
	btnHide : 'display:none;',
	hide: 'display:none;',
	activeWebDevelopment : ' ',
	activeMobileDevelopment : ' ',
	activeGraphicsDesign : ' ',
	activeMobileGames: ' ',
	activeCustomizedSoftware : 'active',
	topBannerImage: 'images/customized/custom-banner.jpg',
	imgDesktop:'images/customized/1.jpg',
	imgMobile: 'images/customized/1-mobile.jpg',
	nav2head: 'System tailored as per your needs',
	nav2para: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita laborum facere, impedit vitae reprehenderit porro voluptas? Vel ab laudantium dolorem suscipit officiis delectus sint? Fugiat reiciendis vitae impedit temporibus corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam ea eveniet deleniti fuga voluptatem dolorum similique hic. ',
	appsForImg: 'images/customized/2.jpg',
	appsForHead: 'Sofware that makes your business and work convinient.',
	appsForIoneClass:'fas fa-smile-beam',
	appsForH3one: 'User Friendly',
	appsForPone:'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	appsForItwoClass:'fas fa-dumbbell',
	appsForH3two: 'Robust',
	appsForPtwo: 'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	appsForIthreeClass:'fas fa-tools',
	appsForH3three: 'Maintainable',
	appsForPthree: 'Numquam, voluptas aut ratione impedit animi veritatis ducimus eaque sit consequatur sequi officia, repellat quo soluta cupiditate praesentium et autem magni eos!',
	iosImgDesktop: 'images/customized/3.jpg',
	iosHeadOne: 'Software for your organization',
	iosImgMobile: 'images/customized/3-mobile.jpg',
	iosHeadTwo: 'Software for your organization',
	iosPara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias sit natus, sed ut iste ullam quod facilis debitis suscipit nemo officia perspiciatis, asperiores quae, quibusdam eius nisi! Repellendus, dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam officiis ipsa hic voluptatem autem Lorem ipsum.',
	liIosOne: 'School Management System',
	liIosTwo:'Accounts Management System',
	liIosThree:'GST and Taxations',
	liIosFour:'Custom ERP',
	cloudImg:'images/customized/4.jpg',
	cloudHead: 'Efficient tools, for best results',
	cloudPara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores adipisci iusto officiis iure? In rem minima recusandae iusto quas, suscipit quisquam eius animi ex harum, repellat alias sapiente nesciunt voluptatem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, repellat quia corrupti natus eaque aspernatur.',
	cloudIoneclass: 'fab fa-microsoft tech-type',
	cloudItwoclass: 'fab fa-node tech-type',
	cloudIthreeclass: 'fab fa-php tech-type',
	cloudIfourclass: 'fab fa-python tech-type',
	liCloudOne: '.NET',
	liCloudTwo: 'NodeJS',
	liCloudThree: 'php',
	liCloudFour: 'Python',
	portfolioImg1:'images/portfolio-image0.jpg',
	portfolioImg2:'images/portfolio-image0.jpg',
	portfolioImg3:'images/portfolio-image0.jpg',
	workedHead: 'Designed for apps of Different Categories',
	workedIoneClass: 'fas fa-water',
	workedItwoClass: 'fas fa-clinic-medical',
	workedIthreeClass: 'fas fa-cookie-bite',
	workedIfourClass: 'fas fa-home',
	workedIfiveClass: 'fas fa-headphones',
	workedIsixClass: 'fas fa-book-open',
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
// ======== learnMoreIphone ========
const learnMoreIphone = {
 topBannerImage : 'images/learnMore/top-banner.jpg',
 topHead : 'Give Your Business App an iOS Advantage',
 topPara : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur enim totam sapiente maiores, quia, at iusto placeat nesciunt amet ipsa pariatur commodi suscipit eaque vero consequatur velit perferendis odio adipisci.',
 hireImg: 'images/learnMore/middle-upper.png',
 hireHead : 'Hire our iOS developers',
 hirePara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat facere optio sint quidem fugiat laudantium ipsam ducimus! Adipisci, delectus. Corrupti aliquid laborum deserunt ducimus molestiae repellendus consequatur quos explicabLorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis placeat neque error autem, a animi nesciunt quisquam cumque et at labore sint cupiditate? Quaerat dignissimos laudantium cum ipsa, earum voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat odit hic, ducimus delectus adipisci nemo aspernatur architecto optio impedit distinctio mollitia aperiam asperiores. Voluptatum, totam quo sed dolor doloribus non!',
 liImg1 :'images/learnMore/1.png',
 liImg2 :'images/learnMore/2.png',
 liImg3 :'images/learnMore/3.png',
 liImg4 :'images/learnMore/4.png',
 liHead1 : 'iOS App Customization',
 liHead2 : 'Reach Elite Class',
 liHead3 : 'Get the Latest App',
 liHead4 : 'Attractive AI, Ultimate UX',
 liPara1 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
 liPara2 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
 liPara3 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
 liPara4 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users'
}
// ======== learnMoreAndroid ========
const learnMoreAndroid = {
	topBannerImage : 'images/learnMoreAndroid/android-banner.jpg',
	topHead : 'Give Your Business App an iOS Advantage',
	topPara : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur enim totam sapiente maiores, quia, at iusto placeat nesciunt amet ipsa pariatur commodi suscipit eaque vero consequatur velit perferendis odio adipisci.',
	hireImg: 'images/learnMoreAndroid/middle-upper.png',
	hireHead : 'Hire our Android developers',
	hirePara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat facere optio sint quidem fugiat laudantium ipsam ducimus! Adipisci, delectus. Corrupti aliquid laborum deserunt ducimus molestiae repellendus consequatur quos explicabLorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis placeat neque error autem, a animi nesciunt quisquam cumque et at labore sint cupiditate? Quaerat dignissimos laudantium cum ipsa, earum voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat odit hic, ducimus delectus adipisci nemo aspernatur architecto optio impedit distinctio mollitia aperiam asperiores. Voluptatum, totam quo sed dolor doloribus non!',
	liImg1 :'images/learnMore/1.png',
	liImg2 :'images/learnMore/2.png',
	liImg3 :'images/learnMore/3.png',
	liImg4 :'images/learnMore/4.png',
	liHead1 : 'iOS App Customization',
	liHead2 : 'Reach Elite Class',
	liHead3 : 'Get the Latest App',
	liHead4 : 'Attractive AI, Ultimate UX',
	liPara1 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
	liPara2 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
	liPara3 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
	liPara4 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users'
   }
// ======== learnMoreCloud ========
const learnMoreCloud = {
	topBannerImage : 'images/learnMoreCloud/cloud--banner.jpg',
	topHead : 'Give Your Business App an iOS Advantage',
	topPara : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur enim totam sapiente maiores, quia, at iusto placeat nesciunt amet ipsa pariatur commodi suscipit eaque vero consequatur velit perferendis odio adipisci.',
	hireImg: 'images/learnMoreCloud/middle-upper.png',
	hireHead : 'Hire our Back-End developers',
	hirePara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat facere optio sint quidem fugiat laudantium ipsam ducimus! Adipisci, delectus. Corrupti aliquid laborum deserunt ducimus molestiae repellendus consequatur quos explicabLorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis placeat neque error autem, a animi nesciunt quisquam cumque et at labore sint cupiditate? Quaerat dignissimos laudantium cum ipsa, earum voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat odit hic, ducimus delectus adipisci nemo aspernatur architecto optio impedit distinctio mollitia aperiam asperiores. Voluptatum, totam quo sed dolor doloribus non!',
	liImg1 :'images/learnMore/1.png',
	liImg2 :'images/learnMore/2.png',
	liImg3 :'images/learnMore/3.png',
	liImg4 :'images/learnMore/4.png',
	liHead1 : 'iOS App Customization',
	liHead2 : 'Reach Elite Class',
	liHead3 : 'Get the Latest App',
	liHead4 : 'Attractive AI, Ultimate UX',
	liPara1 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
	liPara2 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
	liPara3 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
	liPara4 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users'
   }
// ======== learnMoreWebDev ========
const learnMoreWebDev = {
	topBannerImage : 'images/learnMoreWebDev/web-banner.jpg',
	topHead : 'Give Your Business App an iOS Advantage',
	topPara : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur enim totam sapiente maiores, quia, at iusto placeat nesciunt amet ipsa pariatur commodi suscipit eaque vero consequatur velit perferendis odio adipisci.',
	hireImg: 'images/learnMoreWebDev/middle-upper.png',
	hireHead : 'Hire our Back-End developers',
	hirePara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat facere optio sint quidem fugiat laudantium ipsam ducimus! Adipisci, delectus. Corrupti aliquid laborum deserunt ducimus molestiae repellendus consequatur quos explicabLorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis placeat neque error autem, a animi nesciunt quisquam cumque et at labore sint cupiditate? Quaerat dignissimos laudantium cum ipsa, earum voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat odit hic, ducimus delectus adipisci nemo aspernatur architecto optio impedit distinctio mollitia aperiam asperiores. Voluptatum, totam quo sed dolor doloribus non!',
	liImg1 :'images/learnMore/1.png',
	liImg2 :'images/learnMore/2.png',
	liImg3 :'images/learnMore/3.png',
	liImg4 :'images/learnMore/4.png',
	liHead1 : 'iOS App Customization',
	liHead2 : 'Reach Elite Class',
	liHead3 : 'Get the Latest App',
	liHead4 : 'Attractive AI, Ultimate UX',
	liPara1 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
	liPara2 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
	liPara3 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
	liPara4 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users'
   }
// ======== learnMoreDesign ========
const learnMoreDesign = {
	topBannerImage : 'images/learnMoreDesign/design-banner.jpg',
	topHead : 'Give Your Business App an iOS Advantage',
	topPara : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur enim totam sapiente maiores, quia, at iusto placeat nesciunt amet ipsa pariatur commodi suscipit eaque vero consequatur velit perferendis odio adipisci.',
	hireImg: 'images/learnMoreDesign/middle-upper.png',
	hireHead : 'Hire our Back-End developers',
	hirePara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat facere optio sint quidem fugiat laudantium ipsam ducimus! Adipisci, delectus. Corrupti aliquid laborum deserunt ducimus molestiae repellendus consequatur quos explicabLorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis placeat neque error autem, a animi nesciunt quisquam cumque et at labore sint cupiditate? Quaerat dignissimos laudantium cum ipsa, earum voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat odit hic, ducimus delectus adipisci nemo aspernatur architecto optio impedit distinctio mollitia aperiam asperiores. Voluptatum, totam quo sed dolor doloribus non!',
	liImg1 :'images/learnMore/1.png',
	liImg2 :'images/learnMore/2.png',
	liImg3 :'images/learnMore/3.png',
	liImg4 :'images/learnMore/4.png',
	liHead1 : 'iOS App Customization',
	liHead2 : 'Reach Elite Class',
	liHead3 : 'Get the Latest App',
	liHead4 : 'Attractive AI, Ultimate UX',
	liPara1 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
	liPara2 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
	liPara3 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
	liPara4 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users'
   }
// ======== learnMoreGames ========
const learnMoreGames = {
	topBannerImage : 'images/learnMoreGames/banner.jpg',
	topHead : 'Give Your Business App an iOS Advantage',
	topPara : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur enim totam sapiente maiores, quia, at iusto placeat nesciunt amet ipsa pariatur commodi suscipit eaque vero consequatur velit perferendis odio adipisci.',
	hireImg: 'images/learnMoreGames/middle-upper.png',
	hireHead : 'Hire our Back-End developers',
	hirePara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat facere optio sint quidem fugiat laudantium ipsam ducimus! Adipisci, delectus. Corrupti aliquid laborum deserunt ducimus molestiae repellendus consequatur quos explicabLorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis placeat neque error autem, a animi nesciunt quisquam cumque et at labore sint cupiditate? Quaerat dignissimos laudantium cum ipsa, earum voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat odit hic, ducimus delectus adipisci nemo aspernatur architecto optio impedit distinctio mollitia aperiam asperiores. Voluptatum, totam quo sed dolor doloribus non!',
	liImg1 :'images/learnMore/1.png',
	liImg2 :'images/learnMore/2.png',
	liImg3 :'images/learnMore/3.png',
	liImg4 :'images/learnMore/4.png',
	liHead1 : 'iOS App Customization',
	liHead2 : 'Reach Elite Class',
	liHead3 : 'Get the Latest App',
	liHead4 : 'Attractive AI, Ultimate UX',
	liPara1 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
	liPara2 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
	liPara3 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
	liPara4 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users'
   }
// ======== learnMoreSoftware ========
const learnMoreSoftware = {
	topBannerImage : 'images/learnMoreSoftware/custom-banner.jpg',
	topHead : 'Give Your Business App an iOS Advantage',
	topPara : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur enim totam sapiente maiores, quia, at iusto placeat nesciunt amet ipsa pariatur commodi suscipit eaque vero consequatur velit perferendis odio adipisci.',
	hireImg: 'images/learnMoreSoftware /middle-upper.png',
	hireHead : 'Hire our Back-End developers',
	hirePara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat facere optio sint quidem fugiat laudantium ipsam ducimus! Adipisci, delectus. Corrupti aliquid laborum deserunt ducimus molestiae repellendus consequatur quos explicabLorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis placeat neque error autem, a animi nesciunt quisquam cumque et at labore sint cupiditate? Quaerat dignissimos laudantium cum ipsa, earum voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat odit hic, ducimus delectus adipisci nemo aspernatur architecto optio impedit distinctio mollitia aperiam asperiores. Voluptatum, totam quo sed dolor doloribus non!',
	liImg1 :'images/learnMore/1.png',
	liImg2 :'images/learnMore/2.png',
	liImg3 :'images/learnMore/3.png',
	liImg4 :'images/learnMore/4.png',
	liHead1 : 'iOS App Customization',
	liHead2 : 'Reach Elite Class',
	liHead3 : 'Get the Latest App',
	liHead4 : 'Attractive AI, Ultimate UX',
	liPara1 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
	liPara2 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
	liPara3 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
	liPara4 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users'
   }
// ======== about ========
const about = {
	//section or element hide data
	btnHide : 'display:none;',
	feature1Hide : ' ',
	feature2Hide : ' ',
	feature3Hide : 'display:none;',
	feature4Hide : 'display:none;',
	feature5Hide : 'display:none;',
	//navbar active
	activeAbout : 'active',
	activeWhatWeDo : '',
	activeBlogs : '',
	activeOurWork : '',
	activeCareers : '',
	//display data
	bannerImg: 'images/about/banner.png',
	bannerTextPart1 : 'Because we love',
	bannerTextPart2 : ' what we do',
	bannerSideHead : 'Our Mission',
	bannerSidePara : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ea amet sequi a cum totam illum, ex voluptas nobis, odit repudiandae excepturi at, adipisci vitae repellendus doloribus esse quaerat eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi iusto illo repudiandae, reprehenderit quisquam aspernatur at eligendi laudantium dolores, nisi quam cum qui eaque nesciunt, ducimus a esse modi!',
	feature1Img : 'images/about/1.png',
	feature2Img : 'images/about/2.png',
	feature3Img : 'images/about/3.png',
	feature4Img : 'images/about/4.png',
	feature5Img : 'images/about/5.png',
	feature1HeadPart1 : 'First featurette heading.',
	feature1HeadPart2 : 'It’ll blow your mind.',
	feature2HeadPart1 : 'First featurette heading.',
	feature2HeadPart2 : 'It’ll blow your mind.',
	feature3HeadPart1 : 'First featurette heading.',
	feature3HeadPart2 : 'It’ll blow your mind.',
	feature4HeadPart1 : 'First featurette heading.',
	feature4HeadPart2 : 'It’ll blow your mind.',
	feature5HeadPart1 : 'First featurette heading.',
	feature5HeadPart2 : 'It’ll blow your mind.',
	feature1Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	feature2Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	feature3Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	feature4Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	feature5Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	cardHeadPart1 : 'Why ',
	cardHeadPart2 : 'BOLT?',
	card1Img: 'images/about/6.png',
	card2Img: 'images/about/7.png',
	card3Img: 'images/about/8.png',
	card1HeadPart1: 'Client ',
	card1HeadPart2: 'First Always',
	card2HeadPart1: 'Our People ',
	card2HeadPart2 : 'Our Strength',
	card3HeadPart1: 'Quality Policy ',
	card3HeadPart2: 'Not Negotiable',
	card1Para: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
	card2Para: 'This card has supporting text below as a natural lead-in to additional content.',
	card3Para : 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'
}
// ======== what we do ========
const whatWeDo = {
	//section or element hide data
	btnHide : ' ',
	feature1Hide : ' ',
	feature2Hide : ' ',
	feature3Hide : ' ',
	feature4Hide : ' ',
	feature5Hide : ' ',
	//navbar active
	activeAbout : ' ',
	activeWhatWeDo : 'active',
	activeBlogs : '',
	activeOurWork : '',
	activeCareers : '',
	//button route
	btn1route : '/mobileDevelopment',
	btn2route : '/webDevelopment',
	btn3route : '/graphicsDesign',
	btn4route : '/mobileGames',
	btn5route : '/customizedSoftware',
	//button text
	btn1text : 'Learn More',
	btn2text : 'Learn More',
	btn3text : 'Learn More',
	btn4text : 'Learn More',
	btn5text : 'Learn More',
	//display data
	bannerImg: 'images/whatWeDo/banner.png',
	bannerTextPart1 : 'Going on all day,',
	bannerTextPart2 : 'Going on all night!',
	bannerSideHead : 'We Work',
	bannerSidePara : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ea amet sequi a cum totam illum, ex voluptas nobis, odit repudiandae excepturi at, adipisci vitae repellendus doloribus esse quaerat eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi iusto illo repudiandae, reprehenderit quisquam aspernatur at eligendi laudantium dolores, nisi quam cum qui eaque nesciunt, ducimus a esse modi!',
	feature1Img : 'images/whatWeDo/1.png',
	feature2Img : 'images/whatWeDo/2.png',
	feature3Img : 'images/whatWeDo/3.png',
	feature4Img : 'images/whatWeDo/4.png',
	feature5Img : 'images/whatWeDo/5.png',
	feature1HeadPart1 : 'Mobile',
	feature1HeadPart2 : 'Development',
	feature2HeadPart1 : 'Web',
	feature2HeadPart2 : 'Development',
	feature3HeadPart1 : 'Graphics',
	feature3HeadPart2 : 'Design',
	feature4HeadPart1 : 'Mobile',
	feature4HeadPart2 : 'Games.',
	feature5HeadPart1 : 'Customized',
	feature5HeadPart2 : 'Software',
	feature1Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	feature2Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	feature3Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	feature4Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	feature5Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	cardHeadPart1 : 'Why ',
	cardHeadPart2 : 'BOLT?',
	card1Img: 'images/whatWeDo/6.png',
	card2Img: 'images/whatWeDo/7.png',
	card3Img: 'images/whatWeDo/8.png',
	card1HeadPart1: 'Client ',
	card1HeadPart2: 'First Always',
	card2HeadPart1: 'Our People ',
	card2HeadPart2 : 'Our Strength',
	card3HeadPart1: 'Quality Policy ',
	card3HeadPart2: 'Not Negotiable',
	card1Para: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
	card2Para: 'This card has supporting text below as a natural lead-in to additional content.',
	card3Para : 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'
}
// ======== our work ========
const ourWork = {
	//section or element hide data
	btnHide : 'display:none',
	feature1Hide : ' ',
	feature2Hide : ' ',
	feature3Hide : ' ',
	feature4Hide : ' ',
	feature5Hide : 'display:none',
	//navbar active
	activeAbout : ' ',
	activeWhatWeDo : ' ',
	activeBlogs : '',
	activeOurWork : 'active',
	activeCareers : '',
	//display data
	bannerImg: 'images/ourWork/banner.png',
	bannerTextPart1 : 'Whatever',
	bannerTextPart2 : 'IT takes!',
	bannerSideHead : 'Recent Developments',
	bannerSidePara : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ea amet sequi a cum totam illum, ex voluptas nobis, odit repudiandae excepturi at, adipisci vitae repellendus doloribus esse quaerat eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi iusto illo repudiandae, reprehenderit quisquam aspernatur at eligendi laudantium dolores, nisi quam cum qui eaque nesciunt, ducimus a esse modi!',
	feature1Img : 'images/ourWork/1.png',
	feature2Img : 'images/ourWork/2.png',
	feature3Img : 'images/ourWork/3.png',
	feature4Img : 'images/ourWork/4.png',
	feature1HeadPart1 : 'Project',
	feature1HeadPart2 : 'HELP',
	feature2HeadPart1 : 'Project',
	feature2HeadPart2 : 'COZY',
	feature3HeadPart1 : 'Project',
	feature3HeadPart2 : 'BYEPLASTIK',
	feature4HeadPart1 : 'Project',
	feature4HeadPart2 : 'MATHPIX',
	feature1Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	feature2Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	feature3Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	feature4Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	feature5Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	cardHeadPart1 : 'Why ',
	cardHeadPart2 : 'BOLT?',
	card1Img: 'images/whatWeDo/6.png',
	card2Img: 'images/whatWeDo/7.png',
	card3Img: 'images/whatWeDo/8.png',
	card1HeadPart1: 'Client ',
	card1HeadPart2: 'First Always',
	card2HeadPart1: 'Our People ',
	card2HeadPart2 : 'Our Strength',
	card3HeadPart1: 'Quality Policy ',
	card3HeadPart2: 'Not Negotiable',
	card1Para: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
	card2Para: 'This card has supporting text below as a natural lead-in to additional content.',
	card3Para : 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'
}
// ======== careers ========
const careers = {
	//section or element hide data
	btnHide : ' ',
	feature1Hide : ' ',
	feature2Hide : ' ',
	feature3Hide : ' ',
	feature4Hide : ' ',
	feature5Hide : 'display:none',
	//navbar active
	activeAbout : ' ',
	activeWhatWeDo : ' ',
	activeBlogs : '',
	activeOurWork : '',
	activeCareers : 'active',
	//button route
	btn1route : ' ',
	btn2route : '/webDevelopment',
	btn3route : '/graphicsDesign',
	btn4route : '/mobileGames',
	btn5route : '/customizedSoftware',
	//button text
	btn1text : 'Get Hired!',
	btn2text : 'Get Hired!',
	btn3text : 'Get Hired!',
	btn4text : 'Get Hired!',
	btn5text : 'Get Hired!',
	//display data
	bannerImg: 'images/whatWeDo/banner.png',
	bannerTextPart1 : 'Whatever',
	bannerTextPart2 : 'IT takes!',
	bannerSideHead : 'Recent Developments',
	bannerSidePara : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ea amet sequi a cum totam illum, ex voluptas nobis, odit repudiandae excepturi at, adipisci vitae repellendus doloribus esse quaerat eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi iusto illo repudiandae, reprehenderit quisquam aspernatur at eligendi laudantium dolores, nisi quam cum qui eaque nesciunt, ducimus a esse modi!',
	feature1Img : 'images/whatWeDo/1.png',
	feature2Img : 'images/whatWeDo/2.png',
	feature3Img : 'images/whatWeDo/3.png',
	feature4Img : 'images/whatWeDo/4.png',
	feature5Img : 'images/whatWeDo/5.png',
	feature1HeadPart1 : 'Project',
	feature1HeadPart2 : 'HELP',
	feature2HeadPart1 : 'Project',
	feature2HeadPart2 : 'COZY',
	feature3HeadPart1 : 'Project',
	feature3HeadPart2 : 'BYEPLASTIK',
	feature4HeadPart1 : 'Project',
	feature4HeadPart2 : 'MATHPIX',
	feature5HeadPart1 : 'Customized',
	feature5HeadPart2 : 'Software',
	feature1Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	feature2Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	feature3Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	feature4Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	feature5Para : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab enim ratione exercitationem nihil, reprehenderit iure inventore. Expedita et eum nam illo cupiditate aut possimus veniam, commodi voluptatum, ducimus, natus illum.',
	cardHeadPart1 : 'Why ',
	cardHeadPart2 : 'BOLT?',
	card1Img: 'images/whatWeDo/6.png',
	card2Img: 'images/whatWeDo/7.png',
	card3Img: 'images/whatWeDo/8.png',
	card1HeadPart1: 'Client ',
	card1HeadPart2: 'First Always',
	card2HeadPart1: 'Our People ',
	card2HeadPart2 : 'Our Strength',
	card3HeadPart1: 'Quality Policy ',
	card3HeadPart2: 'Not Negotiable',
	card1Para: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
	card2Para: 'This card has supporting text below as a natural lead-in to additional content.',
	card3Para : 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'
}
// ======== blogs ========
const blogs = {
	//navbar active
	activeAbout : ' ',
	activeWhatWeDo : ' ',
	activeBlogs : 'active',
	activeOurWork : '',
	activeCareers : ' ',	
}

//==========================================SERVER CONNECTION============================================

app.listen(process.env.PORT||3000, function() {
	console.log('Server started at 3000')
})