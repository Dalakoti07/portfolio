import ProjectImage from '../static/media/dash.jpg'


function getTheProjects() {
    return [{
        "title":"Price Comparison App",
        "intro":"A kotlin based android app that does the price comparison of various products from different ecommerce sites.",
        "deployedUrl":null,
        "sourceCodeUrl":"https://github.com/Dalakoti07/daphnis-labs",
        "imageUrl":ProjectImage,
        "tags":["kotlin","android"]
    },{
        "title":"Predict the game",
        "intro":"A deep learning model which is based in Convolution neural Network, and tells what actually this game is?",
        "deployedUrl":"https://cob-07.herokuapp.com/",
        "sourceCodeUrl":"https://github.com/Dalakoti07/cricketVsBaseball",
        "imageUrl":ProjectImage,
        "tags":["python","deep learning","machine learning"]
    },{
        "title":"Music Player",
        "intro":"An Android Music Player App, can play music on your phones and the stream the songs from web, clean and better and sumptuous UI.",
        "deployedUrl":"https://play.google.com/store/apps/details?id=com.MSC.musicplayer",
        "sourceCodeUrl":null,
        "imageUrl":ProjectImage,
        "tags":["android","java"]
    },{
        "title":"Web Scrapper Django Rest API",
        "intro":"Production grade Full Restful Backend deployed in AWS EC2 with 2-way Authentication with API comparison motive.",
        "deployedUrl":null,
        "sourceCodeUrl":null,
        "imageUrl":ProjectImage,
        "tags":["python","django","rest-api"]
    },{
        "title":"Music Generator",
        "intro":"A deep learning model which generates the brand music, this uses RNN as a generation Model.",
        "deployedUrl":null,
        "sourceCodeUrl":"https://github.com/Dalakoti07/musicly",
        "imageUrl":ProjectImage,
        "tags":["python","deep learning","machine learning"]
    },{
        "title":"TV Script writer",
        "intro":"A deep learning model which generates the new comedy scripts, it uses RNN as generative model.",
        "deployedUrl":null,
        "sourceCodeUrl":"https://github.com/Dalakoti07/TwoAndHalfMenScriptGenerator",
        "imageUrl":ProjectImage,
        "tags":["python","deep learning","machine learning"]
    },{
        "title":"Book Mania",
        "intro":"A Flask based CRUD application, which allows you to view books, see their rating and review them.",
        "deployedUrl":"https://herokubookreview.herokuapp.com",
        "sourceCodeUrl":"https://github.com/Dalakoti07/BookMania",
        "imageUrl":ProjectImage,
        "tags":["python","flask","web"]
    },{
        "title":"Reminder C++ CLI",
        "intro":"The first project, because of this feature only it is making to this list",
        "deployedUrl":null,
        "sourceCodeUrl":"https://github.com/Dalakoti07/Reminder_Software",
        "imageUrl":ProjectImage,
        "tags":["c++","cli"]
    },{
        "title":"React JS Portfolio website",
        "intro":"React JS Project to build own portfolio website",
        "deployedUrl":"#",
        "sourceCodeUrl":null,
        "imageUrl":ProjectImage,
        "tags":["html-css","react"]
    },{
        "title":"Examination Solution for Covid",
        "intro":"A complete realtime web-app which enables teachers to take online-examination in best possible interactive way.",
        "deployedUrl":null,
        "sourceCodeUrl":null,
        "imageUrl":ProjectImage,
        "tags":["node js"]
    }]
}

function getTheTags() {
    return [
        "All","Django","Deep Learning","Android","Kotlin","Node JS"
    ]
}

function getProjectsByTag(tag) {
    tag=tag.toLowerCase();
    if(tag==='all')
        return getTheProjects();
    var filteredArray= getTheProjects().filter(project=> project.tags.includes(tag) );
    return filteredArray;
}

function getPastExperienceData(){
    return [{
        'company_name':'Intellify',
        'role_title':'Android Developer, December 2019 to March 2020 ',
        'description':["Intellify is an educational startup with keeping in mind the idea of making high quality education available to all people around India, irrespective of everything."
            ,'I worked on the android App, and implemented it with MVVM architecture and clean coding, using external libraries like Retrofit, Glide, etc.'],
        'link':'https://github.com/Dalakoti07/intellify'
    },{
        'company_name':'Daphnis labs',
        'role_title':'Android Developer, March 2020 to April 2020 ',
        'description':['Daphnis Lab is well known company in terms of mobile app developement with over 100 app published on playstore, the products speaks for themselves. '
            ,'I worked on the kotlin android App, and implemented it with MVVM architecture and beautiful UI,and using Android best practises in android developement, including RX Java, Android JetPack,etc.'],
        'link':'https://github.com/Dalakoti07/daphnis-labs'
    },{
        'company_name':'PayPad India',
        'role_title':'Android Developer, June 2020 to Aug 2020 ',
        'description':['PayPad is a startup that just kicked off with any intent toward modern security deposit alternative. Tenants can move in without paying high upfront costs and owners get the same security.  '
            ,'I worked on the android App, and implemented it with MVVM architecture and beautiful material Desing, and using Android best practises in android developement and using Firebase as a service.'],
        'link':null
    }]
}

function getTheSkillsList() {
    return [{
        'label':'HTML-CSS',
        'percentage':'80%'
    },{
        'label':'Android SDK',
        'percentage':'75%'
    },{
        'label':'Django',
        'percentage':'70%'
    },{
        'label':'Node JS',
        'percentage':'70%'
    },{
        'label':'C++',
        'percentage':'85%'
    },{
        'label':'GIT DVCS',
        'percentage':'80%'
    },{
        'label':'Machine-Learning/ Deep-Learning',
        'percentage':'60%'
    },{
        'label':'SQL',
        'percentage':'80%'
    }]
}

export {getTheProjects,getTheTags,getProjectsByTag,getPastExperienceData,getTheSkillsList};