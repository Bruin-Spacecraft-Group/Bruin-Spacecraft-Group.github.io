var context = {
    'officers':[
        {
            'name':     'Karthik Pullela',
            'position': 'President',
            'picture':  `${links.people}/newkarthik.jpg`,
            'about':    '<p>Third Year, Computer Science and Engineering</p><p>I have a passion for space opera, ' +
                        'can read 9 different languages, and I love The Expanse, calligraphy and food.</p>',
            'link': 'https://www.linkedin.com/in/karthikpullela/',
            'icon': `${links.icons}/linkedin.png`
        },
        {
            'name':     'Kyle Johnson',
            'position': 'Internal Vice President',
            'picture':  `${links.people}/newkyle.HEIC`,
            'about':    '<p>Fourth Year, Aerospace Engineering</p><p>I enjoy working with space technology, ' +
                        'collegiate debate, and cycling.</p>',
            'link': 'http://www.linkedin.com/in/kylerobertjohnson',
            'icon': `${links.icons}/linkedin.png`
        },
        {
            'name':     'Hirday Gupta',
            'position': 'External Vice President',
            'picture':  `${links.people}/newhirday.jpg`,
            'about':    '<p>Third Year, Computer Science</p><p>I have been passionate about space since I was ' +
                        'little and Bruin Space\'s mission of making space travel more accessible really resonated ' +
                        'with me.</p>',
            'link': 'http://www.linkedin.com/in/hirday-gupta',
            'icon': `${links.icons}/linkedin.png`
        },
        {
            'name':     'Maria Vincent',
            'position': 'Vice President of Marketing',
            'picture':  `${links.people}/newmaria.jpeg`,
            'about':    '<p>Fourth Year, Geophysics/Astrophysics</p><p>I am passionate about planetary science, ' +
                        'and a bibliophile with a love for writing, instrumental music, education, and public ' +
                        'outreach.</p>',
            'link': 'https://www.linkedin.com/in/maria-vincent',
            'icon': `${links.icons}/linkedin.png`
        },
        {
            'name':     'Oscar Pham',
            'position': 'Vice President of Finance',
            'picture':  `${links.people}/newoscar.jpg`,
            'about':    '<p>Second Year, Economics</p><p>I am interested in accounting and finance.</p>',
            'link': 'https://www.linkedin.com/in/oscarpham08',
            'icon': `${links.icons}/linkedin.png`
        }
    ],
    'projects': [
        {
            'title': "Overseer",
            'PM': 'Lorraine Nicholson',
            'PM_description': 'Second year Astrophysics',
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
            'PM': 'Justin Neal',
            'PM_description': 'Fourth year Physics',
            'image': `${links.people}/newjustin.HEIC`

        },
        {
            'title': "Reach",
            'PM': 'Harrison Cassar',
            'PM_description': 'Third year Computer Science',
            'CE': 'Zefyr Scott',
            'CE_description': 'Fourth year Electrical Engineering',
            'image': `${links.people}/newharrison.JPEG`,
            'image2': `${links.people}/newzefyr.JPEG`

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
