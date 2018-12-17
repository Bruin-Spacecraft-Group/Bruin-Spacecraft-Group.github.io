var context = {
  "project": "endeavour",
  "project_title": "Space Research",
  "project_subtitle":"A platform for student led research into space phenomenon.",
  "logo":`${links.logos}/Endeavour Photo.png`,
  "project_description":"Many projects under Bruin Spacecraft Group build spacecraft and scientific payloads with an understanding of engineering principles. The goal of Endeavour is to apply this engineering ethos to more theoretical projects, harnessing Bruin Space’s available talent in physics, data science, and more. Our projects are motivated by academic curiosity, but we are constantly looking towrads the needs of the rest of the Bruin Space community for our research questions.",
  "team_description":"",
  "team_photo":`${links.endeavour_photos}/endeavour_team.jpg`,
  "pm": {
    "name":"Dan Callos",
    "major":"Physics",
    "year":"3rd Year",
    "email":"d.callos@outlook.com"
  },
  "mission": {
    "title":"Fredholm",
    "subtitle":"",
    "description":`<div class="text-image__container light text-left">
      <div class="text-image image-left">
        <img src="../images/Endeavour/Fredholm.jpeg">
        <div class="paragraph-container">
          <p>
            Throughout the upcoming quarters we will work on such projects as the analysis and visualization of space weather data to answer a research question, the use of software to numerically solve and visualize problems of celestial mechanics, and the study of magnetohydrodynamics (MHD) and its applications to space missions engineering; in particular, we will be using ANSYS to simulate MHD pump behaviour.
          </p>
        </div>
      </div>
    </div>
    <div class="text-image__container dark">
      <div class="text-image">
        <img src="../images/Endeavour/python.png">
        <div class="paragraph-container">
          <p>
            Our team prides itself on offering expertise in the fields of physics, applied mathematics, and mechanical/aerospace engineering. Those interested in joining should come with an understanding of elementary linear algebra and differential equations, and possess coding experience in Python, MATLAB, Mathematica, or similar.
          </p>
        </div>
      </div>
    </div>
    <div class="text-image__container light">
      <div class="text-image">
        <img src="../images/Endeavour/solarWind.png">
        <div class="paragraph-container">
          <p>
            Project Fredholm will focus on the interactions between solar wind and the Earth’s magnetic field. We will use live data available from the National Oceanic and Atmospheric Administration (NOAA), along with literature on space physics to formulate and investigate a research question
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
