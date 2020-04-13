var context = {
  "project": "FORGE",
  "project_title": "Educational Project",
  "project_subtitle": "Providing instruction for members in skills applicable to in-house projects.",
  "logo": `${links.logos}/Forgelogo.jpg`,
  "project_description": "Forge is the club's educational program which aims to provide instruction for members in skills applicable to in-house projects. We have workshops given by senior members of the club and guest lectures by industry professionals to train and cater to the excitement of the next generation of space scientists and engineers.",

  "team_description": "",
  "team_photo": `${links.pictures}/forgepeople.jpg`,
  "pm": {
    "name":"Justin Neal",
    "major":"Computer Science",
    "year":"3rd Year",
    "email":"",
  }
  /*,
  "mission": {
    "title":"",
    "subtitle":"",
    "description":"",
    "scrollables":[
      {
        "title":"",
        "description":"",
        "picture":"",
      }
    ]
  },
  "past_work": [
    {
      "title":"",
      "picture":"",
      "description":"",
    }
  ],
  "project_timeline" : [
    {
      "title":"",
      "items": [
        {
          "item":"",
        }
      ]
    }
  ],
  'missionWidgetJS': links.missionWidget*/
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
