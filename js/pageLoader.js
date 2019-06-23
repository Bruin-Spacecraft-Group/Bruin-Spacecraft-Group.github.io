/*var pageLoader =
  `<div class="page-loader" id="PageLoader">
    <img class="page-loader__spinner" src="${links.icons}/pageSpinner2.png" alt="Page spinner">
  </div>`*/
var div = document.createElement('div')
//div.classList.add("page-loader")
div.id = "PageLoader"
div.style.position = 'fixed'
div.style.top = 0
div.style.left = 0
div.style.width = '100vw'
div.style.height = '100vh'
div.style.backgroundColor = 'black'
div.style.pointerEvents = 'none'
div.style.zIndex = 300

var style = document.createElement('style');
style.type = 'text/css';
var keyFrames = `
  @keyframes orbit {
    0% {
      transform: translateX(-2px) translateY(-14px) scale(1); opacity:1; }

    30% {
      transform: translateX(120px) translateY(-70px) scale(0.3); opacity:1;
    }
    40% {
      transform: translateX(120px) translateY(-70px) scale(0.2); opacity:0;
    }
    50% {
      transform: translateX(-125px) translateY(42px) scale(0.2); opacity:0;
    }
    60% {
      transform: translateX(-125px) translateY(42px) scale(0.3); opacity:1;
    }
    100% {
      transform: translateX(-2px) translateY(-14px) scale(1); opacity:1}
  }`
style.innerHTML = keyFrames
document.getElementsByTagName('head')[0].appendChild(style);

//img.src = `${links.icons}/pageSpinner2.png`

var background_img = document.createElement('div')
//background_img.classList.add("page-loader__planet")
background_img.style.position = 'fixed'
let h = screen.height,
w = screen.width
background_img.style.width = '250px'
background_img.style.height = '250px'
background_img.style.top = `${h/2 - 125}px`
background_img.style.left = `${w/2 - 125}px`
background_img.style.backgroundImage = `url(${links.icons}/background.png)`
background_img.style.backgroundSize = 'contain'
background_img.style.backgroundRepeat = 'no-repeat'
background_img.style.zIndex = '2'


var img = document.createElement('div')
//img.classList.add("page-loader__orbiter")
img.style.position = 'fixed'
img.style.width = '100px'
img.style.height = '100px'
img.style.top = `${h/2 - 50}px`
img.style.left = `${w/2 - 50}px`
img.style.backgroundImage = `url(${links.icons}/orbiter.png)`
img.style.backgroundSize = 'contain'
img.style.backgroundRepeat = 'no-repeat'
img.style.zIndex = '3'
img.style.animationName = 'orbit'
img.style.animationDuration = '4s'
img.style.animationIterationCount = '10'
img.style.animationTimingFunction = 'linear'

div.append(background_img)
div.append(img)
document.body.append(div)

$(document).ready(function() {
  document.getElementById('PageLoader').classList.add("loaded")
  document.getElementById('page-wrapper').style.display = ''
})
