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

export {getTheProjects,getTheTags,getProjectsByTag};