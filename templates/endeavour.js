var context = {
  "project": "endeavour",
  "project_title": "Space Research",
  "project_subtitle":"A platform for student led research into space phenomenon.",
  "logo":`${links.logos}/Endeavour Photo.png`,
  "project_description":"Many projects under Bruin Spacecraft Group build spacecraft and scientific payloads with an understanding of engineering principles. The goal of Endeavour is to apply this engineering ethos to more theoretical projects, harnessing Bruin Space’s available talent in physics, data science, and more. Our projects are motivated by academic curiosity, but we are constantly looking towrads the needs of the rest of the Bruin Space community for our research questions.",
  "team_description":"",
  "team_photo":`${links.endeavour_photos}/endeavour_team.jpg`,
  "pm": {
    "name":"Raymond Ramlow",
    "major":"Physics",
    "year":"",
    "email":""
  },
  "mission": {
    "title":"Muon Detector",
    "subtitle":"Hands on experience building a scientific payload",
    "description_raw":`<div class="text-image__container light text-left">
      <div class="text-image image-left">
        <img src="../assets/images/Endeavour/hyperPhysicsMuon.gif">
        <div class="paragraph-container">
          <p>
            In collaboration with <a href="${links.overseer}">Project Overseer</a>, Endeavour is building a muon detector to collect samples at high altitudes and compare with ground measurements. Through this, the team will be recreating past experiments testing the principles of relativity.
          </p>
        </div>
      </div>
    </div>`,
    /*"scrollables":[
      {
        "title":
        "description":
        "picture":
      }
    ]*/
  }/*,
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
  ],*/
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
