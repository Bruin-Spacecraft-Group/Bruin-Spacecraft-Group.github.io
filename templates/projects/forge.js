var context = {
    "project": "FORGE",
    "project_title": "Educational Project",
    "project_subtitle": "Providing instruction for members in skills applicable to in-house projects.",
    "logo": `${links.logos}/Forgelogo.jpg`,
    "project_description": "Forge is the education and development program of Bruins Spacecraft Group. We are dedicated to developing the skills of club members to increase the overall skill level of the organization. \
    Intro Series is a series of workshops intended to give new members the skills they need to be productive members of a project. \
    Forge also hosts workshops on varying subjects to develop skills that are in high demand within the organization.",
    
    "team_description": "",
    "team_photo": `${links.pictures}/forgepeople.JPG`,
    "pm": {
        "name": "Justin Neal",
        "major": 'Physics',
        "year": '4th Year',
        "email": '',
    },
    /*
    "mission": {
        "title":"",
        "subtitle":"",
        "description":"",
        "scrollables":[
            {
                "title":"",
                "description":"",
                "picture":"",
            }
        ]
    },
    "past_work": [
        {
            "title":"",
            "picture":"",
            "description":"",
        }
    ],
    "project_timeline" : [
        {
            "title":"",
            "items": [
                {
                    "item":"",
                }
            ]
        }
    ],
    'missionWidgetJS': links.missionWidget,
    */
}

Handlebars.registerHelper('if_even', function(conditional, options) {
    if((conditional % 2) == 0) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

var templateScript = Handlebars.templates['projects/project'](context);

$('main').append(templateScript);
