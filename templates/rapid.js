var context = {
  "project": "rapid",
  "project_title": "CubeSat Development",
  "project_subtitle": " Developing the technology to facilitate space research.",
  "logo": `${links.logos}/Rapid Photo.png`,
  "project_description":"Project Rapid is dedicated to planning, structuring, and executing future CubeSat programs at UCLA. Rapid missions are intended to encompass any and all space opportunities, including scientific investigations and technology demonstrations. They will be geared towards quick and efficient mission development so that students involved will have the opportunity to experience a CubeSat program end-to-end during their college career.",
  "team_description":"Under Project Rapid, students with the highest levels of engineering/management skills and project experience will seek mission and flight opportunities that will incorporate UCLA researchers and/or industry partnerships to develop CubeSats for launch.",
  "team_photo": `${links.pictures}/Rapid Team Photo.jpg`,
  "pm": {
    "name": "Shubhra Singh",
    "major": "Mechanical Engineering",
    "year": "4th Year",
    "email": ""
  },
  "ce": {
    "name": "Andrew Evans",
    "major": "Aerospace Engineering",
    "year": "4th Year",
    "email": "andrewevans@engineering.ucla.edu"
  },
  "mission": {
    "title": "URSa",
    "subtitle":"UCLA Reseach Satellite",
    "description":`Bruin Space is embarking on our first real spacecraft with URSa: a 3U CubeSat. Designed to be a high power spacecraft bus, we will be supporting the research efforts of the <a href="wirz.seas.ucla.edu/plasma">Plasma and Space Propulsion Lab at UCLA</a>. <br><br>This is by far the most challenging project we have ever taken on here at Bruin Space, so we are looking for the best of the best to make it happen. If you are interested in being a part of the first entirely student designed and built satellite, reach out to the Project Manager on slack. Project Rapid has a rolling application, and will accept new members as necessary. See <a href="${links.openings}">our openings page</a> for specific positions we are looking to fill.`,
  },
  "past_work": [
    {
      "title": "Blue Dawn: A study in magnetohydrodynamics",
      "picture": `${links.rapid_photos}/BlueDawnFinal.JPG`,
      "description":`In Fall 2017 Project Rapid kicked off its first mission, Blue Dawn. In collaboration with space plasma physics researchers in UCLA’s Department of Earth, Planetary, and Space Sciences, this mission will explore the effectiveness of a Magnetohydrodynamic (MHD) pump in microgravity. The experiment was selected by the <a href="https://www.asgsr.org/index.php/about/awards/2084-ken-souza-spaceflight-competition-award">Ken Souza Memorial Student Spaceflight Competition</a> to fly on a Blue Origin test flight of the New Shepard rocket. Compartmentalized into a 2U CubeSat form-factor, this mission will provide critical insight into the efficacy of a technology that may have applications in space life support systems.`
    }
  ],
  "project_timeline" : [
    {
      "title": "Fall 2019",
      "items": [
        {
          "item": 'Week 2: Mission Concept Review',
        },
        {
          "item": 'Week 4: System Requriements Review',
        },
        {
          "item": 'Week 9: Preliminary Design Review',
        }
      ]
    },
    {
      "title": "Winter 2020",
      "items": [
        {
          "item": 'Week 7: Critical Design Review',
        }
      ]
    },
    {
      "title": "Spring 2020",
      "items": [
        {
          "item": 'Week 2: System Integration Review/Test Readiness Review',
        }
      ]
    }
  ]
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
