var context = {
	'notif-link': links.calendar,
}

var templateScript = Handlebars.templates.notif(context);

$('#popup-notif').append(templateScript);
