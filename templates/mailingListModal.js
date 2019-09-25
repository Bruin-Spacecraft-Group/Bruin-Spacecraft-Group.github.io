var context = {
  'icon': `${links.icons}/arrowLeft.png`
};

var templateScript = Handlebars.templates.mailingListModal(context);

$('main').append(templateScript);
