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
  ],
  'faculty': [
    {
      'title': "Faculty Advisor: Richard Wirz, Ph.D.",
      'picture': `${links.people}/wirz.jpg`,
      'description': `<p>Richard Wirz is a Professor in the Mechanical and Aerospace Engineering Department at UCLA and holds a joint appointment in JPL's Electric Propulsion Group at JPL. He is the Director of the <a href="http://www.wirz.seas.ucla.edu/plasma">UCLA Plasma & Space Propulsion Laboratory</a> and the <a href="http://www.wirz.seas.ucla.edu/energy">UCLA Energy Innovation Laboratory</a>. His plasma and space related research focuses on advance propulsion concepts and the plasma science relevant to these devices. His energy research currently focuses on new approaches to solar thermal energy storage and wind energy capture.</p><p>Learn more about the lab at <a href="http://www.wirz.seas.ucla.edu">wirz.seas.ucla.edu</a> or check out their <a href="https://www.youtube.com/channel/UCtzw4kAF1nivHlxdNbF4OOQ/featured">YouTube channel.</a>`
    }
  ]

}

var templateScript = Handlebars.templates.our_team(context);

$('main').append(templateScript);
