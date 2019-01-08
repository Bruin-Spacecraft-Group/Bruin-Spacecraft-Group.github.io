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

var img = document.createElement('img')
img.classList.add("page-loader__spinner")
img.src = `${links.icons}/pageSpinner2.png`
img.style.position = 'fixed'
let h = screen.height,
w = screen.width
if (screen.width > 760) {
  img.style.width = '180px'
  img.style.height = '180px'
  img.style.top = `${h/2 - 90}px`
  img.style.left = `${w/2 - 90}px`
}
else {
  img.style.width = '140px'
  img.style.height = '140px'
  img.style.top = `${h/2 - 70}px`
  img.style.left = `${w/2 - 70}px`
}

div.append(img)
document.body.append(div)

$(document).ready(function() {
  document.getElementById('PageLoader').classList.add("loaded")
  document.getElementById('page-wrapper').style.display = ''
})
