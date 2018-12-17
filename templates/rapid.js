var context = {
  "project": "rapid",
  "project_title": "CubeSat Development",
  "project_subtitle": " Developing the technology to facilitate space research.",
  "logo": `${links.logos}/Rapid Photo.png`,
  "project_description":"Project Rapid is dedicated to planning, structuring, and executing future CubeSat programs at UCLA. Rapid missions are intended to encompass any and all space opportunities, including scientific investigations and technology demonstrations. They will be geared towards quick and efficient mission development so that students involved will have the opportunity to experience a CubeSat program end-to-end during their college career.",
  "team_description":"Under Project Rapid, students with the highest levels of engineering/management skills and project experience will seek mission and flight opportunities that will incorporate UCLA researchers and/or industry partnerships to develop CubeSats for launch.",
  "team_photo": `${links.pictures}/Rapid Team Photo.jpg`,
  "pm": {
    "name": "Lydia Bingley",
    "major": "Space Physics",
    "year": "5th Year PhD",
    "email": ""
  },
  "mission": {
    "title": "Blue Dawn",
    "subtitle":"A study in magnetohydrodynamics",
    "description":`In Fall 2017 Project Rapid kicked off its first mission, Blue Dawn. In collaboration with space plasma physics researchers in UCLA’s Department of Earth, Planetary, and Space Sciences, this mission will explore the effectiveness of a Magnetohydrodynamic (MHD) pump in microgravity. The experiment was selected by the <a href="https://www.asgsr.org/index.php/about/awards/2084-ken-souza-spaceflight-competition-award">Ken Souza Memorial Student Spaceflight Competition</a> to fly on a Blue Origin test flight of the New Shepard rocket. Compartmentalized into a 2U CubeSat form-factor, this mission will provide critical insight into the efficacy of a technology that may have applications in space life support systems.`,
    "scrollables":[
      {
        "title": "Overview",
        "description": "Pumps play a vital role in transporting fluids for waste management, thermal control systems, and life support systems. However, spacecraft currently rely on mechanical pumps, which contain physically degradable components and thus pose a threat to the longevity of life support systems. That's where our solution comes in: MHD pumps have the potential to be a great alternative since they have no moving parts; they may be more long-lasting and safer to use. If our experiment can demonstrate the operational ability of an MHD pump, it can be used for a number of space applications and will revolutionize fluid transport in space.",
        "picture": `${links.rapid_photos}/BlueDawnBase.JPG`
      },
      {
        "title": "Flight Computer",
        "description": "As part of the Rapid philosophy, we have choosen to build Blue Dawn with as many COTS parts as possible, such as the Arduino Uno. This both accelerates our development cycle and lets the team focus on bigger challenges.",
        "picture":`${links.rapid_photos}/BlueDawnFC.JPG`
      },
      {
        "title": "Avionics",
        "description": "During our ten minute flight, Blue Dawn will collect telemetry such as the acceleration and rotations experiences. This will help our researchers to characterize the fluid's motion and the effectiveness of our pump.",
        "picture":`${links.rapid_photos}/BlueDawnAvionics.JPG`
      },
      {
        "title": "The Payload",
        "description": "An MHD pump operates according to the fundamental physical principles that act to transport charged particles in the presence of an electric and magnetic field. In electromagnetism the force acting on a charged particle is proportional to the surrounding electric and magnetic fields, and this force influences a particle to travel with a certain velocity perpendicular to both fields. Blue Dawn applies this principle to a conductive fluid by constructing a pump with strong magnets adjacent to a pair of electrodes between which fluid can flow.",
        "picture": `${links.rapid_photos}/BlueDawnPayload.JPG`
      }
    ]
  }
  /*"past_work": [
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
