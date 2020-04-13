var context = {
  "video-link": `${links.videos}/launch.mp4`
}

var templateScript = Handlebars.templates.sponsor(context);

$('main').append(templateScript);
