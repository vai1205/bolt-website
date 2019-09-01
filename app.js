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
var data, learnMoreData
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
app.get('/graphicsDesign', (req,res)=>{
	data = graphicsDesign
	res.render('viewDetails',{
		data:data
	})
})
app.get('/mobileGames', (req,res)=>{
	data = mobileGames
	res.render('viewDetails',{
		data:data
	})
})
app.get('/customizedSoftware', (req,res)=>{
	data = customizedSoftware
	res.render('viewDetails',{
		data:data
	})
})
app.get('/learnMoreIphone', (req,res)=>{
	learnMoreData = learnMoreIphone
	res.render('learnMore',{
		learnMoreData:learnMoreData
	})
})
app.get('/contactUs', (req,res)=>{
	res.render('contactUs')
})
app.get('/pageTemplate', (req,res)=>{
	res.render('pageTemplate')
})

//=============================================PAGE DATA==============================================
// ========mobileDevelopment========
const mobileDevelopment = {
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
	learnMorePath : '/learnMoreIphone',
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
 liHead2 : 'iOS App Customization',
 liHead3 : 'iOS App Customization',
 liHead4 : 'iOS App Customization',
 liPara1 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
 liPara2 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
 liPara3 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',
 liPara4 : 'Get a customized iOS app with attractive UI and enhanced security for addressing business requirements while targeting niche iOS device users',

}
//==========================================SERVER CONNECTION============================================

app.listen(process.env.PORT||3000, function() {
	console.log('Server started at 3000')
})