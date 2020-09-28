import ProjectImage from '../static/media/dash.jpg'


function getTheProjects() {
    return [{
        "title":"Price Comparison App",
        "intro":"A kotlin based android app that does the price comparison of various products from different ecommerce sites",
        "deployedUrl":null,
        "sourceCodeUrl":"https://github.com/Dalakoti07/daphnis-labs",
        "imageUrl":ProjectImage
    },{
        "title":"Predict the game",
        "intro":"A deep learning model which is based in Convolution neural Network, and tells what actually this game is?",
        "deployedUrl":"https://cob-07.herokuapp.com/",
        "sourceCodeUrl":"https://github.com/Dalakoti07/cricketVsBaseball",
        "imageUrl":ProjectImage
    }]
}

export default getTheProjects;