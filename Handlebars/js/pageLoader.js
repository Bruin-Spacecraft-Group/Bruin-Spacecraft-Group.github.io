/*var pageLoader =
  `<div class="page-loader" id="PageLoader">
    <img class="page-loader__spinner" src="${links.icons}/pageSpinner2.png" alt="Page spinner">
  </div>`*/
var div = document.createElement('div')
div.classList.add("page-loader")
div.id = "PageLoader"
var img = document.createElement('img')
img.classList.add("page-loader__spinner")
img.src = `${links.icons}/pageSpinner2.png`
div.append(img)
document.body.append(div)

$(document).ready(function() {
  $(".page-loader").addClass("loaded")
})
