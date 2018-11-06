var context = {
  'officers':[
    {
      'name':     'Andrew Evans',
      'position': 'President',
      'picture':  `${links.people}/andrew.jpg`,
      'about':    `<p>Yeah, I basically do everything, so that's fun</p>`
    },
    {
      'name':     'Nadine Tabucol',
      'position': 'Internal Vice President',
      'picture':  `${links.people}/nadine.jpg`,
      'about':    ''
    },
    {
      'name':     'Eva Abramson',
      'position': 'External Vice President',
      'picture':  `${links.people}/eva.jpg`,
      'about':    ''
    },
    {
      'name':     'Hanphenie Zhou',
      'position': 'Vice President of Marketing',
      'picture':  `${links.people}/hanphenie.jpg`,
      'about':    ''
    },
    {
      'name':     'Daniel Hu',
      'position': 'Vice President of Finance',
      'picture':  `${links.people}/stick_figure.jpeg`,
      'about':    '<p>My only friend</p>'
    }
  ],
  'teams': [
    {

    }
  ]

}

var templateScript = Handlebars.templates.our_team(context);

$('main').append(templateScript);
