var context = {
    'officers':[
        {
            'name':     'Sahil Gosain',
            'position': 'President',
            'picture':  `${links.people}/Sahil_Pres.jpg`,
            'about':    '<p>Third Year, Mechanical Engineering</p><p></p>',
            'link': 'https://www.linkedin.com/in/sahilgosain/',
            'icon': `${links.icons}/linkedin.png`
        },
        {
            'name':     'Seth Ferrel',
            'position': 'Internal Vice President',
            'picture':  `${links.people}/Seth_IVP.JPG`,
            'about':    '<p>Second Year, Computer Engineering</p><p></p>',
            'link': 'https://www.linkedin.com/in/sethmferrell/',
            'icon': `${links.icons}/linkedin.png`
        },
        {
            'name':     'Rit Agarwal',
            'position': 'External Vice President',
            'picture':  `${links.people}/rit_EVP.jpg`,
            'about':    '<p>Third Year, Computer Science</p><p></p>',
            'link': 'https://www.linkedin.com/in/ritagarwal/',
            'icon': `${links.icons}/linkedin.png`
        },
        {
            'name':     'Sonav Agarwal',
            'position': 'Vice President of Marketing',
            'picture':  `${links.pictures}/aurora.jpg`,
            'about':    '<p>Second Year, Computer Science</p><p></p>',
            'link': 'https://www.linkedin.com',
            'icon': `${links.icons}/linkedin.png`
        },
        {
            'name':     'Jack Shi',
            'position': 'Vice President of Finance',
            'picture':  `${links.pictures}/aurora.jpg`,
            'about':    '<p>Second Year, Business Economics</p><p></p>',
            'link': 'https://www.linkedin.com/in/catherine090chen/',
            'icon': `${links.icons}/linkedin.png`
        }
    ],
    'projects': [
        {
            'title': "Overseer",
            'PM': 'Taiga Asanuma',
            'PM_description': 'Fourth year Aerospace Engineering',
            'CE': 'Tejas Kamtam',
            'CE_description': 'Third year Computer Science',
            'image': `${links.people}/Taiga.jpg`,
            'image2': `${links.people}/Tejas.jpg`

        },
        {
            'title': "Forge",
            'PM': 'Hugo Onghai',
            'PM_description': 'Second Year, Materials Engineering',
            'image': `${links.people}/Hugo.jpg`

        },
        {
            'title': "Rapid",
            'PM': 'Ian Lee',
            'PM_description': 'Third year Mechanical Engineering',
            'CE': 'Randall Scharpf',
            'CE_description': 'Third Year, Computer Science',
            'image': `${links.people}/Ian.jpg`
        }
    ],
    /*'faculty': [
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
    ]*/
}

var templateScript = Handlebars.templates['info/our_team'](context);

$('main').append(templateScript);
