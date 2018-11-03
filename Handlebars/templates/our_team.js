var context = {
  "officers":[
    {
      "name": "Andrew Evans",
      "position": "President",
      "picture": `${links.pictures}/andrew.jpg`,
      "about": `<p>Yeah, I basically do everything, so that's fun</p>`
    },
    {
      "name":":(",
      "position":"Internal Vice President",
      "picture":"",
      "about":""
    },
    {
      "name":":(",
      "position":"External Vice President",
      "picture":"",
      "about":""
    },
    {
      "name":":(",
      "position":"Vice President of Marketing",
      "picture":"",
      "about":""
    },
    {
      "name":"Daniel Hu",
      "position":"Vice President of Finance",
      "picture":"",
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
