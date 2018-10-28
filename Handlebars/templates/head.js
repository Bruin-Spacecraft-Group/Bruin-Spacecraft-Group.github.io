var context = {
  'scripts': [
    {'link': 'js/main.js'},
    {'link': 'js/config.js'},
  ],
  'theme_color': '#000'
}

var templateScript = Handlebars.templates.head(context);

$(document.head).append(templateScript);
