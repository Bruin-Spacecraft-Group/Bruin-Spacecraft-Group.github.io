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
      'name':     'Karthik Pullela',
      'position': 'Internal Vice President',
      'picture':  `${links.people}/karthik.jpg`,
      'about':    '<p>Second Year, Computer Science and Engineering</p><p>I have a passion for space opera, can read 9 different languages, and I love The Expanse, calligraphy and food.</p>',
      'link': 'https://www.linkedin.com/in/karthikpullela/',
      'icon': `${links.icons}/linkedin.png`
    },
    {
      'name':     'Kyle Johnson',
      'position': 'External Vice President',
      'picture':  `${links.people}/kyle.jpg`,
      'about':    '<p>Third Year, Aerospace Engineering</p><p>I enjoy working with space technology, collegiate debate, and cycling.</p>',
      'link': 'http://www.linkedin.com/in/kylerobertjohnson',
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
      'about':    '<p>Third Year, Economics</p><p>I am interested in accounting and finance.</p>',
      'link': 'https://www.linkedin.com/in/danielwilsonhu/',
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
