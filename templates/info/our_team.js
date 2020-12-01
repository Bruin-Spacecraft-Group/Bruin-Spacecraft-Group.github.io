var context = {
    'officers':[
        {
            'name':     'Christopher Clavelli',
            'position': 'President',
            'picture':  `${links.pictures}/aurora.jpg`,
            'about':    '<p>Third Year, Aerospace Engineering</p><p></p>',
            'link': 'https://www.linkedin.com/in/cclavelli/',
            'icon': `${links.icons}/linkedin.png`
        },
        {
            'name':     'Justin Neal',
            'position': 'Internal Vice President',
            'picture':  `${links.people}/newjustin.HEIC`,
            'about':    '<p>Fourth Year, Aerospace Engineering</p><p></p>',
            'link': 'http://www.linkedin.com/in/justinrneal',
            'icon': `${links.icons}/linkedin.png`
        },
        {
            'name':     'Yuchen Chen',
            'position': 'External Vice President',
            'picture':  `${links.pictures}/aurora.jpg`,
            'about':    '<p>Third Year, Computer Science</p><p></p>',
            'link': 'http://www.linkedin.com',
            'icon': `${links.icons}/linkedin.png`
        },
        {
            'name':     'Jeanine Lee and Angela Zheng',
            'position': 'Vice President of Marketing',
            'picture':  `${links.pictures}/aurora.jpg`,
            'about':    '<p>Third Year</p><p></p>',
            'link': 'https://www.linkedin.com',
            'icon': `${links.icons}/linkedin.png`
        },
        {
            'name':     'Liana Huang',
            'position': 'Vice President of Finance',
            'picture':  `${links.pictures}/aurora.jpg`,
            'about':    '<p>Third Year, Economics</p><p></p>',
            'link': 'https://www.linkedin.com',
            'icon': `${links.icons}/linkedin.png`
        }
    ],
    'projects': [
        {
            'title': "Overseer",
            'PM': 'Lorraine Nicholson',
            'PM_description': 'Third year Astrophysics',
            'CE': 'Ethan Salter',
            'CE_description': 'Second year Bioengineering',
            'image': `${links.people}/lorraine.png`,
            'image2': `${links.people}/ethan.png`

        },
        {
            'title': "Endeavour",
            'PM': 'Raymond Ramlow',
            'PM_description': 'Physics',
            'image': `${links.people}/newraymond.HEIC`

        },
        {
            'title': "Forge",
            'PM': 'Zefyr Scott',
            'PM_description': 'Fourth year Physics',
            'image': `${links.people}/newzefyr.HEIC`

        },
        {
            'title': "Reach",
            'PM': 'Harrison Cassar',
            'PM_description': 'Third year Computer Science',
            'CE': 'Andy Peng',
            'CE_description': 'Third year Computer Science',
            'image': `${links.people}/newharrison.JPEG`,
            'image2': `${links.pictures}/aurora.jpg`

        },
        {
            'title': "Rapid",
            'PM': 'Dacheng Li',
            'PM_description': 'Fourth year Physics',
            'CE': 'Justin Neal',
            'CE_description': 'Fourth year Physics',
            'image': `${links.people}/newdacheng.jpeg`,
            'image2': `${links.people}/newjustin.HEIC`
        }
    ],
    'faculty': [
        {
            'title': "Faculty Advisor: Richard Wirz, Ph.D.",
            'picture': `${links.people}/wirz.jpg`,
            'description': "<p>Richard Wirz is a Professor in the Mechanical and Aerospace Engineering Department " +
                "at UCLA and holds a joint appointment in JPL's Electric Propulsion Group at JPL. He is the " +
                `Director of the <a href="http://www.wirz.seas.ucla.edu/plasma">UCLA Plasma & Space Propulsion ` +
                `Laboratory</a> and the <a href="http://www.wirz.seas.ucla.edu/energy">UCLA Energy Innovation ` +
                "Laboratory</a>. His plasma and space related research focuses on advance propulsion concepts and " +
                "the plasma science relevant to these devices. His energy research currently focuses on new " +
                "approaches to solar thermal energy storage and wind energy capture.</p><p>Learn more about the " +
                `lab at <a href="http://www.wirz.seas.ucla.edu">wirz.seas.ucla.edu</a> or check out their <a ` +
                `href="https://www.youtube.com/channel/UCtzw4kAF1nivHlxdNbF4OOQ/featured">YouTube channel.</a>`,
        }
    ]
}

var templateScript = Handlebars.templates['info/our_team'](context);

$('main').append(templateScript);
