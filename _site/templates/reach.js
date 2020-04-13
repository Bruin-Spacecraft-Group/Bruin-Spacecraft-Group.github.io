var context = {
  "project": "reach",
  "project_title": "Rocket Payloads",
  "project_subtitle": "Developing amateur rocket payloads in CubeSat form factor.",
  "logo": `${links.logos}/Reach Photo 2.png`,
  "project_description": "Project Reach is intended to develop scientific and engineering payloads to be flown on amateur rockets. Reach provides a unique platform for addressing several goals, including the opportunity for high altitude research, rapid prototyping of payload in CubeSat or similar form factor, and potential external collaborations. Reach provides an opportunity for students with mid to high levels of engineering experience an opportunity to develop functional payloads while learning skills that are in demand in today's aerospace industry.",

  "team_description": "It cool.",
  "team_photo": `${links.pictures}/working_on_sentinel.jpg`,
  "pm": {
    "name":"Harrison Cassar",
    "major":"Computer Science",
    "year":"2nd Year",
    "email":"",
  },
  "ce": {
    "name":"Zefyr Scott",
    "major":"Electrical Engineering",
    "year":"4th Year",
    "email":"",
  }/*,
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
