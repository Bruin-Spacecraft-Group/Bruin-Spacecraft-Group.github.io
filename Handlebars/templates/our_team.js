var context = {
  "officers":[
    {
      "name": "Andrew Evans",
      "position": "President",
      "picture": `${links.pictures}/andrew.jpg`,
      "about": `<p>Yeah, I basically do everything, so that's fun</p>`
    },
    {
      "name": "Andrew Evans",
      "position":"Internal Vice President",
      "picture":`${links.pictures}/andrew.jpg`,
      "about":""
    },
    {
      "name": "Andrew Evans",
      "position":"External Vice President",
      "picture":`${links.pictures}/andrew.jpg`,
      "about":""
    },
    {
      "name": "Andrew Evans",
      "position":"Vice President of Marketing",
      "picture":`${links.pictures}/andrew.jpg`,
      "about":""
    },
    {
      "name":"Daniel Hu",
      "position":"Vice President of Finance",
      "picture":`${links.pictures}/stick_figure.jpeg`,
      "about":"<p>My only friend</p>"
    }
  ],
  "teams": [
    {

    }
  ]

}

var templateScript = Handlebars.templates.our_team(context);

$('main').append(templateScript);
