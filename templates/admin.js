var context = {
  "externalAffairs":`${links.pictures}/Welcome Day.jpg`,
  "internalAffairs":`${links.pictures}/meeting3.jpg`,
  "marketing":`${links.pictures}/It Takes All of US Final.jpg`,
  "finance":`${links.pictures}/purchases.png`
}

var templateScript = Handlebars.templates.admin(context);

$('main').append(templateScript);
