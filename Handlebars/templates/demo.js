/*//Retrieve the template data from the HTML .
var template = $('#handlebars-demo').html();

var context = { "name" : "Andrew", "occupation" : "piece of garbage" };

//Compile the template data into a function
var templateScript = Handlebars.compile(template);

var html = templateScript(context);
//html = 'My name is Ritesh Kumar . I am a developer.'

//$(document.body).append(html);
$("#handlebars-demo").html = html
*/
var context = {
  "name" : "Ritesh Kumar",
  "occupation" : "developer"
}

var templateScript = Handlebars.templates.test(context);

$(document.body).append(templateScript);
