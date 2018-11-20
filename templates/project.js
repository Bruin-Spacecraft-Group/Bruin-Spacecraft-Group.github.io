var context = {
  "wrapper": "",
  "project": "",
  "project_title": "",
  "project_subtitle":
  "logo":
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

var templateScript = Handlebars.templates.project(context);

$(document.main).append(templateScript);
