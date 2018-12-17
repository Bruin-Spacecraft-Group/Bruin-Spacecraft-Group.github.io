var context = {
  "project": "overseer",
  "project_title": "High Altitude Balloons",
  "project_subtitle":"Developing a platform for high altitude research.",
  "logo":`${links.logos}/Overseer Photo 2.png`,
  "project_description": "Project Overseer is a long term project to develop a reliable platform for scientific payload and technology demonstrations through the use of high altitude balloon launches. Our mission is to provide a cost efficient and easily accessible resource for UCLA researchers seeking to perform experiments or increase hardware TRLs. We want to provide students who have limited engineering experience with an opportunity to develop and enhance skills useful in increasingly complex projects.",
  "team_description": `<p class="paragraph-container">
    Project Overseer is composed of 4 different subteams, each working towards a series of successful, quarterly launches and interfacing with external parties in hopes of providing UCLA with a regular high altitude launch provider.
  </p>
  <ul>
    <li><span class="larger">Mechanical</span> - responsible for design and fabrication of the chassis and support structures as well as general harnessing</li>
    <li><span class="larger">Electrical</span> - responsible for electrical design and wiring</li>
    <li><span class="larger">Software</span> - responsible for building scripts to control all Overseer functions</li>
    <li><span class="larger">Tracking</span> - responsible for designing and implementing radio technologies to track the balloon during its flight, ensuring reliable recovery</li>
  </ul>`,

  "team_photo":`${links.overseer_photos}/Team Photo.JPG`,
  "pm": {
    "name":"Dacheng Li",
    "major":"Physics",
    "year":"2nd Year",
    "email":""
  },
  "mission": {
    "title": "Horizon",
    "subtitle": "Overseer 2.0",
    "description": "Overseer is designed as a broad multi-mission launch platform to support the launch and recovery of scientific instruments and incorporates many internal subsystems to make this dream a reality. While by no means a complete diagram, this picture gives a broad look at how its components fit within the bus and the internal volume of our missions in general through the lens of prototype designs.",
    "scrollables":[
      {
        "title": "Overview",
        "description":"Building on the lessons learned last year with Aperture, we have embarked on a redesign of our system. The focus is now on modular design, as we aim to build a versatile platform capable of supporting multiple missions.",
        "picture":`${links.overseer_photos}/proposed_overview.png`
      },
      {
        "title": "Electrical System",
        "description": "Our system would not function without our electrical backbone, visualized here by the Raspberry Pi 3B and the location of some AA battery holders. This configuration is designed to give Overseer a wealth of computational power and an acceptable level of battery power. However, given the modular design, it is simple to insert more battery packs for longer duration or higher power missions.",
        "picture":`${links.overseer_photos}/proposed_electrical.png`
      },
      {
        "title": "Multi-project Modularity",
        "description": "While our project does not feature much internal storage space, its multi-mission module (currently configured to support a GoPro-like camera) can be quickly swapped in for another module should the need arise, allowing for easy swapping and fast turnaround between missions.",
        "picture":`${links.overseer_photos}/proposed_payload.png`
      }
    ]
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
