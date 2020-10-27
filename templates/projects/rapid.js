var context = {
    "project": "rapid",
    "project_title": "CubeSat Development",
    "project_subtitle": " Developing the technology to facilitate space research.",
    "logo": `${links.logos}/Rapid Photo.png`,
    "project_description": "Project Rapid is dedicated to planning, structuring, and executing CubeSat missions " +
        "at UCLA. Rapid missions are intended to encompass any and all space opportunities, including scientific " +
        "investigations and technology demonstrations. They will be geared towards quick and efficient mission " +
        "development so that students involved will have the opportunity to experience a CubeSat program " +
        "end-to-end during their college career.",
    "team_description": "Under Project Rapid, students with the highest levels of engineering/management skills " +
        "and project experience will seek mission and flight opportunities that will incorporate UCLA researchers " +
        "and/or industry partnerships to develop CubeSats for launch.",
    "team_photo": `${links.pictures}/Rapid Team Photo.jpg`,
    "pm": {
        "name": 'Dacheng Li',
        "major": 'Physics',
        "year": "4th Year",
        "email": 'dacheng.li3@gmail.com',
    },
    "ce": {
        "name": 'Justin Neal',
        "major": 'Physics',
        "year": "4th Year",
        "email": '',
    },
    "mission": {
        "title": "URSa",
        "subtitle": "UCLA Reseach Satellite",
        "description": "Bruin Space is embarking on our first real spacecraft with URSa: a 3U CubeSat. Designed to " +
            "be a high power spacecraft bus, we will be supporting the research efforts of the " +
            `<a href="https://www.wirz.seas.ucla.edu/plasma">Plasma and Space Propulsion Lab at UCLA</a>.`,
        "description_2": "The UCLA Research Satellite (URSa) is a conceptualized 3U CubeSat capable of supporting " +
            "up to a 60W Electric Propulsion (EP) payload by switching between charging and thrusting modes. " +
            `<a href="https://www.cubesat.org/">The CubeSat standard</a>, which is built upon 10x10x10cm Units ` +
            "(U), provides a efficient platform for both design and launch. With a 40W solar array and a 50Whr " +
            "battery it is possible to supply an EP payload with high power for a variable interval of time before " +
            "needing to recharge. The spacecraft bus is able to provide command and data handling, attitude " +
            "control, and communications with 2U of space, leaving 1U for the payload.",
        "model": {
            "model_loader_js": `${links.js}/modelLoader.js`,
            "modelURL": `${links.models}/URSa.glb`,
            "modelAlt": "cube model",
            "annotations": [
                {
                        "slot":"hotspot-radio",
                        "position": "160 156 320",
                        "normal": "0 0 1",
                        "text": "Radio for S-band communications with the ground station"
                },
                {
                    "slot":"hotspot-computer",
                    "position": "160 138 263",
                    "normal": "-1 0 0",
                    "text": "Flight Computer to handle on-board processing and data storage"
                },
                {
                    "slot":"hotspot-adcs",
                    "position": "152 182 190",
                    "normal": "0 -1 0",
                    "text": "Attitude Determination and Control board for reorienting the spacecraft"
                },
                {
                    "slot":"hotspot-battery",
                    "position": "144 152 169",
                    "normal": "-0.5 0 0.87",
                    "text": "Battery to provide peak power to the engine and power the system through eclipse"
                },
                {
                    "slot":"hotspot-mixi",
                    "position": "161 153 12",
                    "normal": "0 0 -1",
                    "text": "The MiXI engine, capable of high efficiency in-space propulsion"
                },
                {
                    "slot":"hotspot-solar",
                    "position": "80 248 188",
                    "normal": "0.7 0.71 0",
                    "text": "Solar panels expand from the main body to provide plenty of power"
                },
            ],
        },
        "callToAction": "This is by far the most challenging project we have ever taken on here at Bruin Space, so " +
            "we are looking for the best of the best to make it happen. If you are interested in being a part of " +
            "the first entirely student designed and built satellite, reach out to the Project Manager on Slack. " +
            "Project Rapid has a rolling application, and will accept new members as necessary. See " +
            `<a href="${links.openings}">our openings page</a> for specific positions we are looking to fill.`,
    },
    "past_work": [
        {
            "title": "Blue Dawn: A study in magnetohydrodynamics",
            "picture": `${links.rapid_photos}/BlueDawnFinal.JPG`,
            "description": "In Fall 2017 Project Rapid kicked off its first mission, Blue Dawn. In collaboration " +
                "with space plasma physics researchers in UCLA's Department of Earth, Planetary, and Space " +
                "Sciences, this mission will explore the effectiveness of a Magnetohydrodynamic (MHD) pump in " +
                `microgravity. The experiment was selected by the <a href="https://www.asgsr.org/index.php/about/` +
                `awards/2084-ken-souza-spaceflight-competition-award">Ken Souza Memorial Student Spaceflight ` +
                "Competition</a> to fly on a Blue Origin test flight of the New Shepard rocket. Compartmentalized " +
                "into a 2U CubeSat form-factor, this mission will provide critical insight into the efficacy of a " +
                "technology that may have applications in space life support systems.",
        }
    ],
    "project_timeline" : [
        {
            "title": "Fall 2019",
            "items": [
                {
                    "item": 'Week 2: Mission Concept Review',
                },
                {
                    "item": 'Week 4: System Requriements Review',
                }
            ]
        },
        {
            "title": "Winter 2020",
            "items": [
                {
                    "item": 'Week 5: Peer Preliminary Design Review',
                }
            ]
        },
        {
            "title": "Spring 2020",
            "items": [
                {
                    "item": 'Week 1: Preliminary Design Review',
                },
                {
                    "item": 'Week 9: Prototype EPS Vacuum Test',
                }
            ]
        }
    ]
}

Handlebars.registerHelper('if_even', function(conditional, options) {
    if((conditional % 2) == 0) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context);
});

var templateScript = Handlebars.templates['projects/project'](context);

$('main').append(templateScript);
