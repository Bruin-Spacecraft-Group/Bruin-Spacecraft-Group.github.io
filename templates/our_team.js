var context = {
  'officers':[
    {
      'name':     'Karthik Pullela',
      'position': 'President',
      'picture':  `${links.people}/karthik.jpg`,
      'about':    '<p>Third Year, Computer Science and Engineering</p><p>I have a passion for space opera, can read 9 different languages, and I love The Expanse, calligraphy and food.</p>',
      'link': 'https://www.linkedin.com/in/karthikpullela/',
      'icon': `${links.icons}/linkedin.png`
    },
    {
      'name':     'Kyle Johnson',
      'position': 'Internal Vice President',
      'picture':  `${links.people}/kyle.jpg`,
      'about':    '<p>Fourth Year, Aerospace Engineering</p><p>I enjoy working with space technology, collegiate debate, and cycling.</p>',
      'link': 'http://www.linkedin.com/in/kylerobertjohnson',
      'icon': `${links.icons}/linkedin.png`
    },
    {
      'name':     'Hirday Gupta',
      'position': 'External Vice President',
      'picture':  `${links.people}/kyle.jpg`,
      'about':    '<p>Third Year, Computer Science</p><p>I enjoy working with space technology, collegiate debate, and cycling.</p>',
      'link': 'http://www.linkedin.com/in/kylerobertjohnson',
      'icon': `${links.icons}/linkedin.png`
    },
    {
      'name':     'Maria Vincent',
      'position': 'Vice President of Marketing',
      'picture':  `${links.people}/owen.jpg`,
      'about':    '<p>Fourth Year, Geophysics?</p>',
      'link': 'https://www.linkedin.com/company/bruin-spacecraft-group-at-ucla/',
      'icon': `${links.icons}/linkedin.png`
    },
    {
      'name':     'Oscar Pham',
      'position': 'Vice President of Finance',
      'picture':  `${links.people}/daniel.jpg`,
      'about':    '<p>Second Year, Economics</p><p>I am interested in accounting and finance.</p>',
      'link': 'https://www.linkedin.com/in/danielwilsonhu/',
      'icon': `${links.icons}/linkedin.png`
    }
  ],
  'projects': [
    {
      'title': "Overseer",
      'PM': 'Dacheng Li',
      'PM_description': '3rd year Physics, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'CE': 'Taylor Lonner',
      'CE_description': '4th year planetary physics, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'image':  "https://previews.123rf.com/images/imtmphoto/imtmphoto1304/imtmphoto130400011/19334761-asian-businessman-and-businesswoman-standing-back-to-back-making-a-fist.jpg"
      //'image': `${links.projectManagement}/overseerLeads.png`
    },
    {
      'title': "Endeavour",
      'PM': 'Rebecca Lewis',
      'PM_description': '4th year Physics',
      'image':  "https://media.gettyimages.com/photos/colleagues-problem-solving-at-computer-together-picture-id1028772240?s=2048x2048"
      //'image': `${links.projectManagement}/endeavourLeads.png`
    },
    {
      'title': "Reach",
      'PM': 'idk',
      'PM_description': 'something',
      'CE': 'Zefyr Scott',
      'CE_description': '4th year Electrical Engineering',
      'image':  "http://www.best-norman-rockwell-art.com/images/1920-10-09-Saturday-Evening-Post-Norman-Rockwell-cover-Man-and-Woman-Seated-Back-to-Back-no-logo-400-Digimarc.jpg"
      //'image': `${links.projectManagement}/reachLeads.png`
    },
    {
      'title': "Rapid",
      'PM': 'Shubhra Singh',
      'PM_description': '4th year Mechanical Engineering',
      'CE': 'Andrew Evans',
      'CE_description': '4th year Aerospace Engineering',
      'image':  "https://media.gettyimages.com/photos/studio-shot-of-couple-standing-back-to-back-picture-id73782602?s=612x612"
      //'image': `${links.projectManagement}/rapidLeads.png`
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
