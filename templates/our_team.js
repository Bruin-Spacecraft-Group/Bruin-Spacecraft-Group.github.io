var context = {
  'officers':[
    {
      'name':     'Andrew Evans',
      'position': 'President',
      'picture':  `${links.people}/andrew.jpg`,
      'about':    `<p>Third Year, Aerospace Engineering</p>
      <p>I joined this club my freshman year, working on the Ops team for Project Reach. This is now my second year as president, and I'm still learning something new everyday.</p>
      <p>I am passionate about science and engineering, and just generally building cool things!</p>`,
      'link': 'https://linkedin.com/in/andrew-evans/',
      'icon': `${links.icons}/linkedin.png`
    },
    {
      'name':     'Nadine Tabucol',
      'position': 'Internal Vice President',
      'picture':  `${links.people}/nadine.jpg`,
      'about':    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis sollicitudin leo, a luctus nisi. Proin placerat nec velit nec fringilla. Etiam mollis nulla ut nibh venenatis, ac efficitur nisl aliquet. Nunc pharetra rhoncus purus eget ullamcorper. Donec vel massa eu leo pellentesque mattis. Etiam lorem augue, iaculis sit amet metus sed, placerat tempus felis. Ut id elit magna. Cras elementum nunc euismod, ultricies elit vitae, suscipit lectus. Pellentesque ante elit, bibendum porta mauris non, luctus placerat magna.</p>',
      'link': 'https://www.linkedin.com/company/bruin-spacecraft-group-at-ucla/',
      'icon': `${links.icons}/linkedin.png`
    },
    {
      'name':     'Eva Abramson',
      'position': 'External Vice President',
      'picture':  `${links.people}/eva.jpg`,
      'about':    '',
      'link': 'https://www.linkedin.com/company/bruin-spacecraft-group-at-ucla/',
      'icon': `${links.icons}/linkedin.png`
    },
    {
      'name':     'Owen Weitzel',
      'position': 'Vice President of Marketing',
      'picture':  `${links.people}/owen.jpg`,
      'about':    '',
      'link': 'https://www.linkedin.com/company/bruin-spacecraft-group-at-ucla/',
      'icon': `${links.icons}/linkedin.png`
    },
    {
      'name':     'Daniel Hu',
      'position': 'Vice President of Finance',
      'picture':  `${links.people}/daniel.jpg`,
      'about':    '<p>My only friend</p>',
      'link': 'https://www.linkedin.com/company/bruin-spacecraft-group-at-ucla/',
      'icon': `${links.icons}/linkedin.png`
    }
  ],
  'teams': [
    {

    }
  ]

}

var templateScript = Handlebars.templates.our_team(context);

$('main').append(templateScript);
