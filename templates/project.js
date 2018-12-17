var context = {
  "project": "",
  "project_title": "",
  "project_subtitle":"",
  "logo":`${links.logos}/`,
  "project_description":
  "team_description":
  "team_photo":
  "pm": {
    "name":
    "major":
    "year":
    "email":
  },
  "mission": {
    "title":
    "subtitle":
    "description":
    "scrollables":[
      {
        "title":
        "description":
        "picture":
      }
    ]
  },
  "past_work": [
    {
      "title":
      "picture":
      "description":
    }
  ],
  "project_timeline" : [
    {
      "title":
      "items": [
        {
          "item":
        }
      ]
    }
  ],
  'missionWidgetJS': links.missionWidget
}

Handlebars.registerHelper('if_even', function(conditional, options) {
  if((conditional % 2) == 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

var templateScript = Handlebars.templates.project(context);

$('main').append(templateScript);
