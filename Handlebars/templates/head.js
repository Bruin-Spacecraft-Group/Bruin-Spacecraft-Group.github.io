var context = {
  "animate": `${links.css}/animate.css`,
  "main": `${links.css}/design.min.css`,
  "favicon":links.favicon,
  'theme_color': '#000'
}

var templateScript = Handlebars.templates.head(context);

$(document.head).append(templateScript);
