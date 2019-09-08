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
	nav2para: 'The smartphone Apps have changed the definition of every day activity in human life. It has been an essential part of our lives and why not? We do almost everything with the help an app. The world is connected with mobile apps. In this really techie era, Hyperlink Infosystem can help you to craft some excellent mobile application for your business & start-ups.',
	appsForImg: 'images/mobile-apps-for-bg.jpg',
	appsForHead: 'We collaborate to develop high performence mobile apps for',
	appsForIoneClass:'fas fa-rocket',
	appsForH3one: 'Startups',
	appsForPone:'We can let you to take your startup to new heights with the help of your dream mobile app. Our Mobile app can also increase the productivity and help you to utilize the resources.',
	appsForItwoClass:'fas fa-city',
	appsForH3two: 'Industries',
	appsForPtwo: 'Our app developers will walk you through the steps to bring your product to life. From paper napkin to software design, we will ensure your project has a road-map that is clear.',
	appsForIthreeClass:'fas fa-lightbulb',
	appsForH3three: 'Creators',
	appsForPthree: 'We build mobile app for creators. We will help you take your creativity to global level with most advanced and pocket friendly mobile app.',
	iosImgDesktop: 'images/ios-apps-desktop.jpg',
	iosHeadOne: 'iOS Apps Development',
	iosImgMobile: 'images/ios-apps-mobile.jpg',
	iosHeadTwo: 'iOS Apps Development',
	iosPara: "Our iPhone app developers are well equipped with the latest iOS technologies and versions and have a strong platform experience too. Our team of experts will put your concept into the real app to meet consumer'sdemand or your business objectives..Our focus is on iOS app development, launch and deployment – we are responsible for your success.",
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
	androidPara: 'The key to making a great Android app is to find programmers with both technical and artistic skills. This means your preferred programmer should know all aspects of using the Android OS but still be able to render artistic design for the app.',
	liAndroidOne:'Android Smartphone Apps',
	liAndroidTwo: 'Android Tablet Apps',
	liAndroidThree: 'Android Wear Apps',
	liAndroidFour: 'Android TV Apps',
	crossPlatformHeadOne: 'Cross Platform Apps',
	crossPlatformPara: "A cross-channel mobility strategy and a goal of faster time to market on iOS and Android mobile app platforms have one thing in common: Hybrid Mobile Frameworks provide a strong alternative to native development. We provide reliable & robust hybrid mobile application development services.Our expert hybrid mobile app developers build your iOS & Android applications in an industry-leading framework.",
	crossIoneClass: 'fab fa-react tech-type',
	crossItwoClass: 'fab fa-node-js tech-type',
	crossIthreeClass: 'fab fa-node-js tech-type',
	crossIfourClass: 'fab fa-node-js tech-type',
	crossPlatformImg:'images/cross-platform-apps.jpg',
	cloudImg:'images/cloud-mobile-bg.jpg',
	cloudHead: 'Mobile Apps Driven by Cloud',
	cloudPara: 'The cloud computing market has been growing rapidly over the past several years. The numbers generated by IDC are proof of this as they predict that worldwide spending on public cloud services is expected to cross $141 billion by 2019. Code and integrate Cloud based applications through our team that will help you navigate Cloud apps to get you to the best solution for you.',
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
	portfolioPara: 'We are an elite team of product managers, software architects, and developers who partner with business executives to build their next successful product. Whether you are engineering a new product or reinventing an existing one, we can help bring your vision to life. Your idea deserves the very best chance of success. This means having excellent aesthetics combined with functional, scalable, and maintainable code. Why compromise?',
	portfolioHead1: 'HELP',
	portfolioHead2: 'COZY',
	portfolioHead3: 'GURU',
	portfolioPara1: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum maiores culpa cumque cupiditate.',
	portfolioPara2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum maiores culpa cumque cupiditate.',
	portfolioPara3: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum maiores culpa cumque cupiditate.',
	portfolioImg1:'images/p1.png',
	portfolioImg2:'images/p2.png',
	portfolioImg3:'images/p3.png',
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
	nav2para: 'Count on our talented team with exceptional web development experience to establish your brand, automatize processes, collaboration or just about anything that you can think on the web. We hand-hold you at every single step while we create custom web solutions for you – be it during discovery, definition, design, development or deployment.',
	appsForImg: 'images/web/e-Commerce-desktop.jpg',
	appsForHead: 'We collaborate to develop SEO friendly Web Apps for',
	appsForIoneClass:'fas fa-user',
	appsForH3one: 'Individuals',
	appsForPone:'We provide you Services bringing the most satisfactory outcomes and help your business to grow, creating most interactive websites in minimum time.',
	appsForItwoClass:'fas fa-city',
	appsForH3two: 'Organizations',
	appsForPtwo: 'We work with numerous enterprise technologies to provide highly customized, scalable and integrated solutions to digitally transform your business.',
	appsForIthreeClass:'fas fa-lightbulb',
	appsForH3three: 'Creators',
	appsForPthree: 'We design cost-effective web solutions for you so that you get a better chance to showcase your skills digitally and can make the most productive outcome of it.',
	iosImgDesktop: 'images/web/Backend-&-APIs-desktop.jpg',
	iosHeadOne: 'Backend-&-APIs',
	iosImgMobile: 'images/web/Backend-&-APIs-mobile.jpg',
	iosHeadTwo: 'Backend-&-APIs',
	iosPara: 'Back-end acts as an invisible backbone that connects various critical parts of an application while integrating the entire application together. For us, the key priorities for web backend development are security, accuracy, redundancy, and of course performance! We provide comprehensive back-end development expertise, which makes sure your foundation holds strong.',
	liIosOne: 'Mobile CMS',
	liIosTwo:'Authentication Services',
	liIosThree:'Web app servers',
	liIosFour:'App Engagements with push',
	cloudImg:'images/web/CMS-desktop.jpg',
	cloudHead: 'Content Management Systems',
	cloudPara: 'Content management systems (CMS) that we deliver are easy to update and manage. Without any technical knowledge, you can update your website easily. You can update the content, images and almost everything on your website. We make sure that you get full control over your website. ',
	cloudIoneclass: 'fab fa-wordpress tech-type',
	cloudItwoclass: 'fab fa-joomla tech-type',
	cloudIthreeclass: 'fab fa-drupal tech-type',
	cloudIfourclass: 'fab fa-typo3 tech-type',
	liCloudOne: 'Wordpress',
	liCloudTwo: 'Joomla',
	liCloudThree: 'Drupal',
	liCloudFour: 'TYPO3',
	portfolioImg1:'images/p1.png',
	portfolioImg2:'images/p2.png',
	portfolioImg3:'images/p3.png',
	workedHead: 'Developed Web Apps of Different Categories',
	workedIoneClass: 'fas fa-water',
	workedItwoClass: 'fas fa-clinic-medical',
	workedIthreeClass: 'fas fa-cookie-bite',
	workedIfourClass: 'fas fa-home',
	workedIfiveClass: 'fas fa-headphones',
	workedIsixClass: 'fas fa-book-open',
	portfolioHead: 'Recent Projects',
	portfolioPara: 'We are an elite team of product managers, software architects, and developers who partner with business executives to build their next successful product. Whether you are engineering a new product or reinventing an existing one, we can help bring your vision to life. Your idea deserves the very best chance of success. This means having excellent aesthetics combined with functional, scalable, and maintainable code. Why compromise?',
	portfolioHead1: 'HELP',
	portfolioHead2: 'COZY',
	portfolioHead3: 'GURU',
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
	nav2para: "There's no limit to what you can get designed at Bolt Infotech. Whether you're looking for a spectacular new logo or Ui Ux design or some stunning flyers, the talented community of designers here can make it happen. We have high quality designers who deliver only the best graphic design services. Find the right design service for you below and get design you'll love today!",
	appsForImg: 'images/graphics/2 real.jpg',
	appsForHead: 'User Interface of the apps speak and express!',
	appsForIoneClass:'fas fa-bolt',
	appsForH3one: 'Clear',
	appsForPone:'Our community of professional designers are ready to create the perfect graphic for you. Simply, start a graphic design project today and get a graphic you’ll love.',
	appsForItwoClass:'far fa-grin-stars',
	appsForH3two: 'Attractive',
	appsForPtwo: 'Receive unique designs from around the world within hours. Select and approve your favorite design. Tell us what you need, complete your creative brief in a matter of minutes.',
	appsForIthreeClass:'fas fa-tablet-alt',
	appsForH3three: 'Responsive',
	appsForPthree: 'We take the essence of your business and delivers it to a whole new level of importance—unrestrained by convention. UI which we design are always suitable for maximum devices around.',
	iosImgDesktop: 'images/graphics/3.jpg',
	iosHeadOne: 'We take care when we desgin',
	iosImgMobile: 'images/graphics/3-mobile-.jpg',
	iosHeadTwo: 'We take care when we DESIGN',
	iosPara: "Need to make a lasting impression? The right combination of colors, shapes and words will define your brand. Get the perfect logo and ensure your branding hits the spot with these services.Looking to make a mark on the world wide web? Whether you need a new design for a custom built website or a design for a popular CMS platform you'll find the perfect web design with our design services.",
	liIosOne: 'Concise',
	liIosTwo:'Consistent',
	liIosThree:'Efficient',
	liIosFour:'Familiar',
	cloudImg:'images/graphics/4.jpg',
	cloudHead: 'Experience, not just Interface!',
	cloudPara: "Really need some design inspiration? Someone who can use their creative skills to make a design that will really pop? These graphic design services may be just what you're looking for.Need some walking advertising? A little promotional gear for the team manning the tradeshow booth? Get custom apparel, mugs or caps from our professional designers.",
	cloudIoneclass: 'fas fas fa-tape tech-type',
	cloudItwoclass: 'fas fa-pencil-ruler tech-type',
	cloudIthreeclass: 'fas fa-ruler-combined tech-type',
	cloudIfourclass: 'fas fa-crop-alt tech-type',
	liCloudOne: 'Low Fidelity Wireframe',
	liCloudTwo: 'High Fidelity Wireframe',
	liCloudThree: 'UI',
	liCloudFour: 'UX',
	portfolioImg1:'images/p1.png',
	portfolioImg2:'images/p2.png',
	portfolioImg3:'images/p3.png',
	workedHead: 'Designed for apps of Different Categories',
	workedIoneClass: 'fas fa-water',
	workedItwoClass: 'fas fa-clinic-medical',
	workedIthreeClass: 'fas fa-cookie-bite',
	workedIfourClass: 'fas fa-home',
	workedIfiveClass: 'fas fa-headphones',
	workedIsixClass: 'fas fa-book-open',
	portfolioHead: 'Recent Projects',
	portfolioPara: 'We are an elite team of product managers, software architects, and developers who partner with business executives to build their next successful product. Whether you are engineering a new product or reinventing an existing one, we can help bring your vision to life. Your idea deserves the very best chance of success. This means having excellent aesthetics combined with functional, scalable, and maintainable code. Why compromise?',
	portfolioHead1: 'HELP',
	portfolioHead2: 'COZY',
	portfolioHead3: 'GURU',
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
	nav2para: 'Our expert  developers follow some of the newest development methodologies for delivering next level mobile gaming experience. We also know the vital of UI/UX designing when it comes to mobile games development. That is why our UI/UX professionals pay special focus for offering mobile game designs that can improve the complete look and feel of the game on the mobile devices.',
	appsForImg: 'images/games/2.jpg',
	appsForHead: 'Games that are developed not just to play but to experience!',
	appsForIoneClass:'fas fa-dice',
	appsForH3one: '2D Games',
	appsForPone:'With a dedicated team of game developers, concept artists, we assists you in all range of gaming requirements. We can develop completely engaging app that requires 100% commitment.',
	appsForItwoClass:'fas fa-gamepad',
	appsForH3two: '3D Games',
	appsForPtwo: 'With a dedicated team of game developers, concept artists, we assists you in all range of gaming requirements. We can develop completely engaging app.',
	appsForIthreeClass:'fas fa-gavel',
	appsForH3three: 'VR Games',
	appsForPthree: 'Our VR developers can bring your VR game app ideas to life, boosting marketing opportunities, in-app purchases, and ads to monetize via games.',
	iosImgDesktop: 'images/games/3.jpg',
	iosHeadOne: 'VR Games',
	iosImgMobile: 'images/games/3-mobile.jpg',
	iosHeadTwo: 'VR Games',
	iosPara: 'VR is a disruptive technology proving to be a powerful sales and marketing tool for all industries. We have highly skilled and experienced VR app developers who can create experiences and environments that don’t even exist, making you feel as if you really are ‘within’ that world. Our VR studio team is a combination of creative staff and technical professionals.',
	liIosOne: 'Believable',
	liIosTwo:'Interactive',
	liIosThree:'Explorable',
	liIosFour:'Immersive',
	cloudImg:'images/games/4.jpg',
	cloudHead: 'Efficient tools, for best results',
	cloudPara: 'Gaming and entertainment has become an essential part in mobile and web industry, turning into a rapidly growing industry worth billions of dollars globally. Millions of smartphone users and tech-savvy people spend their time playing games on their mobiles, laptops or tablets. Developing unique and memorable games requires technical expertise and creative minds.',
	cloudIoneclass: 'fas fa-dice-d6 tech-type',
	cloudItwoclass: 'fas fa-puzzle-piece tech-type',
	cloudIthreeclass: 'fas fa-hand-scissors tech-type',
	cloudIfourclass: 'fas fa-headset tech-type',
	liCloudOne: 'Unity',
	liCloudTwo: 'SpriteKit',
	liCloudThree: 'Corona',
	liCloudFour: 'Cocos2D',
	portfolioImg1:'images/p1.png',
	portfolioImg2:'images/p2.png',
	portfolioImg3:'images/p3.png',
	workedHead: 'Designed for apps of Different Categories',
	workedIoneClass: 'fas fa-water',
	workedItwoClass: 'fas fa-clinic-medical',
	workedIthreeClass: 'fas fa-cookie-bite',
	workedIfourClass: 'fas fa-home',
	workedIfiveClass: 'fas fa-headphones',
	workedIsixClass: 'fas fa-book-open',
	portfolioHead: 'Recent Projects',
	portfolioPara: 'We are an elite team of product managers, software architects, and developers who partner with business executives to build their next successful product. Whether you are engineering a new product or reinventing an existing one, we can help bring your vision to life. Your idea deserves the very best chance of success. This means having excellent aesthetics combined with functional, scalable, and maintainable code. Why compromise?',
	portfolioHead1: 'HELP',
	portfolioHead2: 'COZY',
	portfolioHead3: 'GURU',
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
	nav2para: 'We provide high quality, cost-effective and reliable software development services that match your specific needs, budget and timeframe. From simple customizations to full-cycle software development that matches your vision, Orient Software has the experience to deliver.No matter what type of your work you do, Bolt Infotech’s customized software development will fulfill your needs.',
	appsForImg: 'images/customized/2.jpg',
	appsForHead: 'Sofware that makes your business and work convinient.',
	appsForIoneClass:'fas fa-smile-beam',
	appsForH3one: 'User Friendly',
	appsForPone:'Our software confidently works across all popular browsers, OSes and mobile platforms, scales to millions of users and delivers immaculate UX through a clear, logical layout.',
	appsForItwoClass:'fas fa-dumbbell',
	appsForH3two: 'Robust',
	appsForPtwo: 'Tell us your needs, desired functionality, the business methods used, and we can build you the software solutions. Our software is scalable and flexible enough for you to easily adapt down the road.',
	appsForIthreeClass:'fas fa-tools',
	appsForH3three: 'Maintainable',
	appsForPthree: 'We begin every relationship with an in-depth discussion about the short and long-term desires for your project and take its all responsibility',
	iosImgDesktop: 'images/customized/3.jpg',
	iosHeadOne: 'Software for your organization',
	iosImgMobile: 'images/customized/3-mobile.jpg',
	iosHeadTwo: 'Software for your organization',
	iosPara: 'Let’s begin a conversation about your new ideas or on-going projects that need the fresh and innovative touch of our expert developers. This ranges from simple custom app development to complicated, long-term contracts. We assist clients throughout the product development lifecycle, from product research and new product development to quality assurance.',
	liIosOne: 'School Management System',
	liIosTwo:'Accounts Management System',
	liIosThree:'GST and Taxations',
	liIosFour:'Custom ERP',
	cloudImg:'images/customized/4.jpg',
	cloudHead: 'Efficient tools, for best results',
	cloudPara: 'Our Custom Software Development Services leverage the technical expertise of our professionals who are empowered with latest technology software and tools, to offer customized applications of various flavours including business intelligence solutions, e-business solutions, custom application development and CRM solutions.',
	cloudIoneclass: 'fab fa-microsoft tech-type',
	cloudItwoclass: 'fab fa-node tech-type',
	cloudIthreeclass: 'fab fa-php tech-type',
	cloudIfourclass: 'fab fa-python tech-type',
	liCloudOne: '.NET',
	liCloudTwo: 'NodeJS',
	liCloudThree: 'php',
	liCloudFour: 'Python',
	portfolioImg1:'images/p1.png',
	portfolioImg2:'images/p2.png',
	portfolioImg3:'images/p3.png',
	workedHead: 'Designed for apps of Different Categories',
	workedIoneClass: 'fas fa-water',
	workedItwoClass: 'fas fa-clinic-medical',
	workedIthreeClass: 'fas fa-cookie-bite',
	workedIfourClass: 'fas fa-home',
	workedIfiveClass: 'fas fa-headphones',
	workedIsixClass: 'fas fa-book-open',
	portfolioHead: 'Recent Projects',
	portfolioPara: 'We are an elite team of product managers, software architects, and developers who partner with business executives to build their next successful product. Whether you are engineering a new product or reinventing an existing one, we can help bring your vision to life. Your idea deserves the very best chance of success. This means having excellent aesthetics combined with functional, scalable, and maintainable code. Why compromise?',
	portfolioHead1: 'HELP',
	portfolioHead2: 'COZY',
	portfolioHead3: 'GURU',
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
 topPara : 'Our extremely experienced iOS development team specializes in producing custom & secure iPhone app solutions according to market requirements and measure to meet user demands. Our expert developers know the critical aspects of iPhone app development and can help your dreams come true.',
 hireImg: 'images/learnMore/middle-upper.png',
 hireHead : 'Hire our iOS developers',
 hirePara: 'Our iPhone app developers are well equipped with the latest iOS technologies and versions and have a strong platform experience too. We deliver custom applications that are tailored to fit the different requirements of the clients. Our developers are known for  innovation and creativity for apps developed on iOS that has transformed the commercial landscapes as enterprises over the world. The iPhone applications developed are extremely scalable and strong to enable global businesses for optimal productivity. We follow global iOS development processes to produce a broad range of iPhone, iWatch, iPad based mobile applications for diverse business verticals.',
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
	topHead : 'Smart and scalable Adnroid App Development Solutions',
	topPara : 'The key to making a great Android app is to find programmers with both technical and artistic skills. This means your preferred programmer should know all aspects of using the Android OS but still be able to render artistic design for the app. Build apps fast and easy with us.',
	hireImg: 'images/learnMoreAndroid/middle-upper.png',
	hireHead : 'Hire our Android developers',
	hirePara: 'As the stellar android mobile app development company, we analyze and deliver intelligent solutions to help bring startups and enterprises vision to life. With a team of premier android app developers having strong command on Java, HTML, C, C++, Kotlin and other technologies, receive high-end apps for all smart devices powered with Android.So whether you want an app for health enthusiasts, photo & video sharing, education & learning, food delivery, or a child-friendly social media app, rest assured, we got you covered. Phenomenal android app development services at your request all-time, every time! Shall we begin?',
	liImg1 :'images/learnMore/1.png',
	liImg2 :'images/learnMore/2.png',
	liImg3 :'images/learnMore/3.png',
	liImg4 :'images/learnMore/4.png',
	liHead1 : 'Core Developers',
	liHead3 : 'Deployment on Google Play',
	liHead2 : 'In-House Coding',
	liHead4 : 'Agile Dev Process',
	liPara1 : 'We only assign core Android app developers for your business projects. They hold extensive experience in building applications for all Android smart devices.',
	liPara2 : 'All project-related codes are built, tested, and delivered from our advanced development center. We never outsource the codes to any third party developers, ever.',
	liPara3 : 'Our dedicated team handles the custom application submission to the Google Play Store. Our services include app listing, icons, descriptions, and more.',
	liPara4 : 'To minimize project risks & uncertainty and maximize performance efficiency, we incorporate & follow a custom agile process.'
   }
// ======== learnMoreCloud ========
const learnMoreCloud = {
	topBannerImage : 'images/learnMoreCloud/cloud--banner.jpg',
	topHead : 'Cloud-based solutions that best suit clients requirements',
	topPara : 'We can help you know the basic features of cloud computing and the advantages of migrating to cloud with a positive impact on the entire business. Our deep commitment to our customers defines the way we do business and it forms the basis of our customer satisfaction.',
	hireImg: 'images/learnMoreCloud/middle-upper.png',
	hireHead : 'Hire our Back-End developers',
	hirePara: 'We have trusted expert for designing & building scalable & robust Cloud based applications for startups and enterprises across the globe.Build large-scale solutions and server-side applications that take full advantage of the hardware & location abstraction provided by modern cloud providers, giving your users a consistent and reliable experience across the globe. Net Solutions has the experience and expertise to design, build, maintain, and help you grow your cloud-based business.We take special care to sensitise our cloud application developers to industry-leading application security practices. We have very flexible terms of engagement that are designed for maximum client benefit.',
	liImg1 :'images/learnMore/1.png',
	liImg2 :'images/learnMore/2.png',
	liImg3 :'images/learnMore/3.png',
	liImg4 :'images/learnMore/4.png',
	liHead1 : 'Cloud App Development',
	liHead2 : 'Migration Services',
	liHead3 : 'Cloud App Containerization',
	liHead4 : 'Multi-Cloud Programming',
	liPara1 : 'We combine mobile-first design techniques with inscrutable server-side programming and rich database functionality to create high-performance enterprise cloud apps',
	liPara2 : "We'll work closely with your IT team and managed service providers to migrate apps, workflows and whole enterprise infrastructures to the cloud",
	liPara3 : 'We provide app containerization services, abstracting operation system kernels so multiple cloud applications can perform consistently.',
	liPara4 : 'To guard against disastrous system outages or data losses, we can construct community-based, distributed, inter-cloud and multi-cloud solutions.'
   }
// ======== learnMoreWebDev ========
const learnMoreWebDev = {
	topBannerImage : 'images/learnMoreWebDev/web-banner.jpg',
	topHead : 'Delivering Right Web Development Solutions',
	topPara : 'The outputs of our web development services are creating lasting impressions, both visually and interactively. It can transcend the physical and start to connect with people in a way that is transformational on the web. Typically, we build dynamic experiences and a wide variety of web development.',
	hireImg: 'images/learnMoreWebDev/middle-upper.png',
	hireHead : 'Hire our Web developers',
	hirePara: 'We design functional interfaces for an engaging and secure digital experience that helps to boost the brand’s performance. Each website and app relies on an instinctive UX/UI design which helps in increasing the user traffic. We are sensitive to the latest trends and as responsive as our design – helping you to engage the users in a digital landscape. We work with close-coordination with the customers, to ensure flexible & cost effective web development services. Our web designers after a thorough analysis of your business, will provide you with a customized web design and development solution which will meet your business requirements.',
	liImg1 :'images/learnMore/1.png',
	liImg2 :'images/learnMore/2.png',
	liImg3 :'images/learnMore/3.png',
	liImg4 :'images/learnMore/4.png',
	liHead1 : 'Agile development',
	liHead2 : 'Full commitmen',
	liHead3 : 'Coding on your budget',
	liHead4 : 'Extended Support',
	liPara1 : 'Following the standards of agile development, we hold regular meetings and provide you with everything on a daily basis. You have full control over the procedure.',
	liPara2 : 'Majority of our business originates from referrals. We will strive to get another satisfied client and we trust that you will remain with us for a long period of time.',
	liPara3 : 'Regardless of the phenomenal quality, the expenses are much lower. Furthermore, we update you with the detailed budget, so you can recognize precisely, what you are paying for.',
	liPara4 : 'Our technical team will make sure that you never come across any issues after completion of the project. In case you face any issue, we are just a tap away.'
   }
// ======== learnMoreDesign ========
const learnMoreDesign = {
	topBannerImage : 'images/learnMoreDesign/design-banner.jpg',
	topHead : 'Your Marketing Need Through Innovative Graphic',
	topPara : 'Websites, businesses and brands are all much more than just words and products – they’re also images and art. Graphic design is an integral part of any business and that’s as true for your company’s image and your marketing. Attracting visitors and converting sales is often influenced by graphics.',
	hireImg: 'images/learnMoreDesign/middle-upper.png',
	hireHead : 'Hire our Graphics Designers',
	hirePara: 'Working with our talented designers and developers, you can create eye-catching designs for your site that will help tell the story of your products. Colorful, high-resolution images, engaging videos and illustrative graphics can help potential buyers better understand your products and services and help them see – literally – the benefits they offer. Success online is multifaceted in the modern age. While sites rich in text can help you be found within search results, attracting visitors and converting sales is often influenced by the audio-visual impact.Graphic design is an integral part of any business and that’s as true for your company’s image and your marketing.',
	liImg1 :'images/learnMore/1.png',
	liImg2 :'images/learnMore/2.png',
	liImg3 :'images/learnMore/3.png',
	liImg4 :'images/learnMore/4.png',
	liHead1 : 'Logo & Branding',
	liHead2 : 'Web Design Services',
	liHead3 : 'Art & Illustration',
	liHead4 : 'Print Design Services',
	liPara1 : 'The right combination of colors, shapes and words will define your brand. Get the perfect logo and ensure your branding hits the spot with these services.',
	liPara2 : "Whether you need a new design for a custom built website or a design for a popular CMS platform you'll find the perfect web design with these design services.",
	liPara3 : "Whether you need a mascot designed for your sporting team or a piece of custom wall art you'll find what you need with these design services.",
	liPara4 : "Don't make the mistake of having a mistake - get the design right the first time, whether it's a flyer, poster or sticker. Check out all our print design services."
   }
// ======== learnMoreGames ========
const learnMoreGames = {
	topBannerImage : 'images/learnMoreGames/banner.jpg',
	topHead : 'Highly Engaging Game Design and Development',
	topPara : 'We offer comprehensive solutions to help you design, develop and market your game from start to finish. We specialize in providing comprehensive end-to-end solutions for affordable game development company.We provide comprehensive development services for pre-production, production and post-production.',
	hireImg: 'images/learnMoreGames/middle-upper.png',
	hireHead : 'Hire our Game Developers',
	hirePara: 'Do you need game developers for your next mobile or online project? Then, you are at the right place! Made up of expert mobile developers, game designers, UI designers and project managers, Panacea can help you to build a highly engaging and interactive gaming application that offer a seamless gaming experience. Our end-to-end game development services help you at every stage from game design to usability testing and final release to support and maintenance.By leveraging the power of HTML5 and Flash, we develop games that run smoothly on mobile and desktop. We can build fully customized games across iOS, Android and Window platforms with our mobile game development services.',
	liImg1 :'images/learnMore/1.png',
	liImg2 :'images/learnMore/2.png',
	liImg3 :'images/learnMore/3.png',
	liImg4 :'images/learnMore/4.png',
	liHead1 : 'Concept Art',
	liHead2 : 'Asset Production',
	liHead3 : 'Testing',
	liHead4 : 'Support',
	liPara1 : 'A full-fledged art & design team including artists, level designers and UI specialists to make your games as engaging and user-friendly as possible.',
	liPara2 : 'End to end 2D & 3D asset production services to bring your ideas to life, including illustration, modeling, texturing, animation, rigging and lighting.',
	liPara3 : 'Rigorous QA and performance testing for device compatibility and superior user experience.',
	liPara4 : 'Content updates, bug fixes, maintenance and game release support along with support for marketing, launches, ad creation, app store optimization etc.'
   }
// ======== learnMoreSoftware ========
const learnMoreSoftware = {
	topBannerImage : 'images/learnMoreSoftware/custom-banner.jpg',
	topHead : 'Top-Grade Custom Software Development',
	topPara : 'We build frontline software solutions that enable enterprises to unlock innovation and make a difference in the tech world. Leverage our low-risk approach and development accelerators to propel your digital transformation and ensure a competitive edge.',
	hireImg: 'images/learnMoreSoftware/middle-upper.png',
	hireHead : 'Hire our Back-End developers',
	hirePara: "In today's dynamic and fast changing world, every company wishes to stay ahead or at least on par with its competitors. This is possible only if the businesses have the right strategies and systems in place. Custom software applications automate and streamline the processes in an organization, thus saving a huge amount of time and cost while increasing efficiency. From concept to code, development to deployment, we provides custom IT solutions that accelerate workflows, optimize operations and boost revenues. Whether you're looking to develop a new app for your business or improve your existing software environment, we offer the bespoke software development services you require.",
	liImg1 :'images/learnMore/1.png',
	liImg2 :'images/learnMore/2.png',
	liImg3 :'images/learnMore/3.png',
	liImg4 :'images/learnMore/4.png',
	liHead1 : 'Result-Driven Approach',
	liHead2 : 'Value Proposition',
	liHead3 : 'Custom-Built Solutions',
	liHead4 : 'Cost-Effective Service',
	liPara1 : 'We strategize result-driven solutions with advanced and proven methodologies.',
	liPara2 : 'The end-product is assured to add value to your business and deliver it to users.',
	liPara3 : 'For every unique idea, we offer flexibility to suit your business needs.',
	liPara4 : 'Be it a low-budget startup or a billion-dollar venture, we ensure cost-effectiveness.'
   }
// ======== about ========
const about = {
	//section or element hide data
	btnHide : 'display:none;',
	modalBtnHide : 'display:none;',
	sectionHide : ' ',
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
	bannerSidePara : 'We aim to help the clients create the future. We succeed when we make our clients successful. We innovate to find a better way—for the clients who depend on us, the customers who rely on them and the communities who count on us all. At Bolt Infotech, we develop innovative and creative products and services that provide total communication and information solutions.',
	feature1Img : 'images/about/1.png',
	feature2Img : 'images/about/2.png',
	feature3Img : 'images/about/3.png',
	feature4Img : 'images/about/4.png',
	feature5Img : 'images/about/5.png',
	feature1HeadPart1 : 'Provide cost effective and reliable IT support',
	feature1HeadPart2 : 'to the customers.',
	feature2HeadPart1 : 'We aim to be',
	feature2HeadPart2 : 'the preferred IT solution provider.',
	feature1Para :"We strive to provide the best in the market through always delivering consistent quality services that exceed our customer's expectations. We are proud to conduct our business with integrity, through operating with honesty and virtue.",
	feature2Para : 'We are conscious that our support impact your operations and take responsibility for our actions. We are committed to ensuring you can count on us to get any job done, anytime.  We are committed to delivering our best efforts in order to get a job done well.',
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
	card1Para: 'The goal is simple : relentlessly commit to your clients; be hardworking and humble; stay unconflicted in your work and uncompromising in your values. The rest will take care of itself.',
	card2Para: 'We believe that people are the key drivers of our success. Our HR Policies, therefore, focus on developing an environment that attracts and inspire excellence in people.',
	card3Para : 'Quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction and skillful execution; it represents the wise choice of many alternatives.'
}
// ======== what we do ========
const whatWeDo = {
	//section or element hide data
	modalBtnHide : 'display:none;',
	sectionHide : ' ',
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
	bannerSidePara : 'Solving complex, algorithmic, engineering problem is our passion. We follow traditional waterfall as well as agile development processes depending on the nature and the need of the project.Whether you are an established company or a start-up, with our skills, expertise and passion, we can definitely add a great value to your organization.',
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
	feature1Para : 'Mobile is becoming not only the new digital hub but also the bridge to the physical world. That’s why mobile will affect more than just your digital operations – it will transform your entire business.',
	feature2Para : 'Not every website is created equal. Building a website is easy, building an effective website that will help your business foster a pipeline of new leads and customers is a very difficult task.',
	feature3Para : 'There is no limit to what you can get designed at Bolt Infotech. Whether you are looking for a spectacular new logo or Ui Ux design or some stunning flyers, the talented community of designers here can make it happen.',
	feature4Para : 'Our expert developers follow some of the newest development methodologies for delivering next level mobile gaming experience. Creating fun games that never get old is our main focus! Everything else is just icing on the cake',
	feature5Para : 'Software is the magic thing whose importance only goes up over time. We love creating such magic factors. Solving complex, algorithmic, engineering problem is our passion.Our team of software engineers is always keen to take on the next challenge',
	cardHeadPart1 : 'We Elevate ',
	cardHeadPart2 : ' Your Brand!',
	card1Img: 'images/whatWeDo/6.png',
	card2Img: 'images/whatWeDo/7.png',
	card3Img: 'images/whatWeDo/8.png',
	card1HeadPart1: 'Speak ',
	card1HeadPart2: 'Your Culture',
	card2HeadPart1: 'Offer ',
	card2HeadPart2 : 'Full Support',
	card3HeadPart1: 'Pleasing ',
	card3HeadPart2: 'Customers',
	card1Para: 'Seeing the clients passionate about their idea makes us excited. We always look for new ways to provide solutions and create a better product',
	card2Para: 'Our expert team of advisors will identify and study the challenges, bringing solutions to ensure a smooth and efficient running of your business.',
	card3Para : 'Consumers drive the business. That’s why we take an extra leap to produce stunning apps and websites for your end users, focused towards increasing sales and brand visibility.'
}
// ======== our work ========
const ourWork = {
	//section or element hide data
	btnHide : 'display:none',
	modalBtnHide : 'display:none;',
	sectionHide : ' ',
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
	bannerSidePara : 'Our success lies in changing the game for our clients brands. By focusing on customer outcomes, we build beautiful, engaging experiences that drive real business results. We’re inspired by our clients and work to advance their business by innovating everything digital. We’re endless innovators, constantly looking for new ways to connect the dots and connect people.',
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
	feature4HeadPart2 : 'GURU',
	feature1Para : 'HELP, Smartphone application designed to improve the quality of life for you by providing household services ranging from caring (babies, toddlers, children, seniors and sick people), washing and ironing, cooking, shopping, driver, cleaning the house, gardening to carpentry .',
	feature2Para : 'COZY is a startup to help provide all the services needed on one platform, at the start of the service we provide services between restaurant owners, and anyone can become a chef (home cooking) and sell and promote their dishes to culinary lovers.',
	feature3Para : 'BYEPLASTIK is an environment-friendly project to reduce plastic waste in nature by reusing the plastic bottles. This is an e-commerce application where one can simply order the products and get it delivered right at their desired venue.',
	feature4Para : 'GURU is an application for the students to click the pictures of the questions they are having difficulty in and upload it to get its most appropriate solution in seconds. It also contains complete solution of all popular books and previous year question papers.',
	cardHeadPart1 : 'Work culture @ ',
	cardHeadPart2 : 'BOLT',
	card1Img: 'images/ourWork/6.png',
	card2Img: 'images/ourWork/7.png',
	card3Img: 'images/ourWork/8.png',
	card1HeadPart1: 'Experience  ',
	card1HeadPart2: '& Expertise',
	card2HeadPart1: 'Unparalleled ',
	card2HeadPart2 : 'Services',
	card3HeadPart1: 'Optimized ',
	card3HeadPart2: 'Results',
	card1Para: 'We are made up of bold and creative thinkers that from every walk of life. Our open culture drives success for our clients and our focus on company wide inclusion creates a great opportunity for our teams',
	card2Para: 'We’re inspired by our clients and work to advance their business by innovating everything digital. We’re endless innovators, constantly looking for new ways to connect the dots and connect people.',
	card3Para : 'Customer satisfaction, openness, innovation, teamwork and growth, are the core values behind our company, and continue to reflect who we are, how we work, and what we strive for.'
}
// ======== careers ========
const careers = {
	//section or element hide data
	btnHide : 'display:none;',
	sectionHide : 'display:none;',
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
	btn2route : ' ',
	btn3route : ' ',
	btn4route : ' ',
	btn5route : ' ',
	//button text
	btn1text : 'Get Hired!',
	btn2text : 'Get Hired!',
	btn3text : 'Get Hired!',
	btn4text : 'Get Hired!',
	btn5text : 'Get Hired!',
	//display data
	bannerImg: 'images/careers/banner.png',
	bannerTextPart1 : 'It starts with',
	bannerTextPart2 : 'ONE!',
	bannerSideHead : 'Passion to code? Come on!',
	bannerSidePara : "The secret of our success is the people we recruit – and we’re looking for the best. We’re always looking for people who can bring new perspectives to our teams. If you want to be part of a team that values your enthusiasm, passion, and creativity; if you’re seeking colleagues who are big thinkers, eager to take on fresh challenges as a team, apply below. Please don't forget to check on the tech stacks we are looking for; as of now in the list below.",
	feature1Img : 'images/careers/1.png',
	feature2Img : 'images/careers/2.png',
	feature3Img : 'images/careers/3.png',
	feature4Img : 'images/careers/4.png',
	feature5Img : 'images/careers/5.png',
	feature1HeadPart1 : 'Mobile',
	feature1HeadPart2 : 'DEVELOPER',
	feature2HeadPart1 : 'Web',
	feature2HeadPart2 : 'DEVELOPER',
	feature3HeadPart1 : 'Graphics',
	feature3HeadPart2 : 'DESIGNER',
	feature4HeadPart1 : 'Game',
	feature4HeadPart2 : 'DEVELOPER',
	feature5HeadPart1 : 'Back-end',
	feature5HeadPart2 : 'DEVELOPER',
	feature1Para : 'Have got amazing work experience on Android Development, iOS development, Java, Kotlin, Objective-C, Swift, Xcode, React Native or Flutter? Apply now! We will look into your past projects and knowledge base before giving you a call.',
	feature2Para : 'More than confident for coding backend APIs on ASP .NET, PHP, NodeJs, Python? Have you got knowledge of the latest front-end tech stacks including SASS, Advanced CSS, jQuery and HTML5? Love integrating CMS efficiently? Apply now!',
	feature3Para : 'The sky is the limit for your creativity? Have you got an amazing color sense and theming concepts? Got expertise working on Adobe CC applications? (Confident working on any one of them or more?) Provide links to your works in your Resume and Apply now!',
	feature4Para : 'Best aware of all technical aspects of the game development including challenges in implementing the core game mechanics, art, animation? Can optimize code for the best possible performance, quality, and responsiveness of games across platforms? Hit the button below.',
	cardHeadPart1 : 'Our People ',
	cardHeadPart2 : 'Philosophy',
	card1Img: 'images/careers/6.png',
	card2Img: 'images/careers/7.png',
	card3Img: 'images/careers/8.png',
	card1HeadPart1: 'Your ',
	card1HeadPart2: 'Canvas',
	card2HeadPart1: 'Tough ',
	card2HeadPart2 : 'Love',
	card3HeadPart1: 'Whole ',
	card3HeadPart2: 'Self',
	card1Para: 'Our work environment never restricts your creativity and we provide completely free canvas to you to paint and create your best picture!',
	card2Para: 'We ensure standing side by side with you with our team in all moments of Happiness and sorrow. We believe in woking togehter as a Family :)',
	card3Para : "We've built this business with the passion for innovation and a flexible approach in what we do. That's why we keep our eyes and ears open for smart people who get things done."
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