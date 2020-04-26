var context = {
  "project": "sandbox",
  "project_title": "Technology Development",
  "project_subtitle": "A platform for exploring and prototyping potential space technologies.",
  "logo":`${links.logos}/Sandbox Photo 2.png`,
  "project_description": "The Sandbox Initiative was started with the intention of providing students with the opportunity for creative, individual, and exploratory work. While the other Bruin Space projects are firmly structured with deliverable schedules and annual goals, Sandbox is intentionally designed without strict expectations to give members access to an alternative work environment. Through Sandbox students are able engage in a variety of self-guided projects, including, but not limited to, NASA competitions, experiment proposals, and novel technological applications.",

  "team_description": "",
  "team_photo": `${links.sandbox_photos}/teamAtNBL.jpg`,
  "pm": {
    "name": "Maria Vincent",
    "major": "Geophysics/Astrophysics",
    "year": "3rd Year",
    "email": "mariavincent@ucla.edu"
  },
  "past_work": [
    {
      "title": "Micro-g NExt",
      "picture": `${links.sandbox_photos}/sandbox_at_nbl.jpg`,
      "description": "The past two years, Sandbox has sponsored teams to compete in NASA's Micro-g NExT challenge. Each year, NASA challenges college students across the country to design tools to assist astronauts. So far, we have sent three teams to NASA's Neutral buoyancy lab in Houston, Texas to test their designs for ISS leak repair and asteroid sampling."
    },
    {
      "title": "Sunsensor",
      "picture": `${links.sandbox_photos}/sunsensor.jpg`,
      "description": "Under a challenge by LENS Research & Development, we submitted a winning proposal for the novel application of a sunsenor. As the name suggests, a sunsensor is a finely tuned light sensor for orienting a spacecraft with respect to the sun. Our concept for use in spacecraft proximity operations is currently under development."
    }
  ],
/*  "project_timeline" : [
    {
      "title": "Fall quarter",
      "items": [
        {
          "item": "Research and trade studies partly based on citizen scientist challenges by NASA, such as application of limboids as well as CubeSat-compatible instruments in asteroid missions."
        },
        {
          "item": "Completing the connections of the sunsensor for programming and control, and programming it to work in test ground conditions to measure distances based on varying light intensity from a point source."
        }
      ]
    },
    {
      "title": "Winter, Spring Quarter",
      "items": [
        {
          "item": "Prototyping and exploratory engineering on two potential technologies applicable in CubeSat missions, based on the research from Fall quarter."
        }
      ]
    }
  ]*/
}

Handlebars.registerHelper('if_even', function(conditional, options) {
  if((conditional % 2) == 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
var templateScript = Handlebars.templates.project(context);
console.log(context)
$('main').append(templateScript);
