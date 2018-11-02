var context = {
  'socialMedia': [
    {'element':`<a href="https://www.facebook.com/uclaBruinSpace/" target="_blank"><img src="${links.Icons}/facebook.png"></a>`},
    {'element':`<a href="https://www.instagram.com/uclabruinspace/" target="_blank"><img src="${links.Icons}/instagram.png"></a>`},
    {'element':`<a href="https://twitter.com/uclabruinspace" target="_blank"><img src="${links.Icons}/twitter.png"></a>`},
    {'element':`<a href="https://www.linkedin.com/company/bruin-spacecraft-group-at-ucla/" target="_blank"><img src="${links.Icons}/linkedin.png"></a>`}
  ]
}

var templateScript = Handlebars.templates.footer(context);

$('footer').append(templateScript);
