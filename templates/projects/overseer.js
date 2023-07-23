var context = {
    "project": "overseer",
    "project_title": "High Altitude Balloons",
    "project_subtitle": "Developing a platform for high altitude research.",
    "logo": `${links.logos}/Overseer Photo 2.png`,
    "project_description": "Project Overseer is a quarterly project to develop a reliable platform for scientific " +
        "payload and technology demonstrations through the use of high altitude balloon launches. Our goal is to" +
        "provide students who have limited or no engineering experience with an opportunity to develop and enhance skills" +
        "useful in increasingly complex projects. We aim to provide a cost efficient and accessible resource for" +
        "UCLA researchers seeking to perform experiments or increase hardware TRLs.",
    "team_description": `<p class="paragraph-container">
        Project Overseer is composed of 4 different subteams, each working towards a series of successful, quarterly launches and interfacing with external parties in hopes of providing UCLA with a regular high altitude launch provider.
    </p>
    <ul>
        <li><span class="larger">Mechanical</span> - responsible for design and fabrication of the chassis and support structures as well as general harnessing</li>
        <li><span class="larger">Electrical</span> - responsible for electrical design and wiring</li>
        <li><span class="larger">Software</span> - responsible for building scripts to control all Overseer functions</li>
        <li><span class="larger">Tracking</span> - responsible for designing and implementing radio technologies to track the balloon during its flight, ensuring reliable recovery</li>
    </ul>`,

    "team_photo":`${links.overseer_photos}/23Team.JPG`,
    "pm": {
        "name": 'Taiga Asanuma',
        "major": 'Aerospace Engineering',
        "year": '3rd Year',
        "email": 'tasanuma@g.ucla.edu',
    },
    "ce": {
        "name": 'Tejas Kamtam',
        "major": 'Computer Science',
        "year": '3rd Year',
        "email": 'tejaskamtam@g.ucla.edu',
    },
    "mission": {
        "title": "Overseer",
        "subtitle": "Overseer 2023",
        "description": "Overseer is designed as a broad multi-mission launch platform to support the launch and recovery of scientific instruments and incorporates many internal subsystems to make this goal a reality. While this is by no means a complete diagram, these pictures give a broad look at how Overseer’s components fit within its bus and how the internal volume of our missions is allocated.",
        "scrollables":[{
                "title": "Overview",
                "description":"Building on the lessons learned in previous years, we have embarked on a soft redesign of our system. With the focus now on redundancy, we aim to build a versatile platform capable of supporting multiple missions and faster intermission turnaround.",
                "picture":`${links.overseer_photos}/full.jpg`
            }, {
                "title": "Mechanical Structure",
                "description": "To ensure the safety of our components and to facilitate assembly of the system, we have designed a 3D printed support structure. The racks are modular, allowing for multi-mission compatibility and interchangeability.",
                "picture":`${links.overseer_photos}/Mech.jpg`
            }, {
                "title": "Electrical System",
                "description": "Our system would not function without our electrical backbone, visualized here by the Raspberry Pi 3B and the location of some battery holders. This configuration is designed to give Overseer a wealth of computational power and a deep stock of battery power. However, given the modular design, it is simple to insert more battery packs for longer duration or missions requiring additional power.",
                "picture":`${links.overseer_photos}/Elec.jpg`
            }, {
                "title": "Telemetry and Tracking",
                "description": "To keep track of our system after it has risen out of view, we have one tracking module: The Pi in the Sky. Operating on HAM frequencies, the PITS transmit GPS data for us to follow, facilitating successful recovery of the payload. Additionally, our XBee (not pictured) module allows us to send data back to our ground stations, allowing for mission success even in the face of a loss in payload.",
                "picture":`${links.overseer_photos}/Comm.jpg`
            }, {
                "title": "Software",
                "description": "To collect data during flight, we use software to automate flight processes for when our system exits manual operations range. By running this code on our flight computer and XBee systems, we can ensure proper system functionality throughout launch duration.",
                "picture":`${links.overseer_photos}/Comm.jpg`
            },
        ]
    }
    /*,
    "past_work": [
        {
            "title": "",
            "picture": "",
            "description": "",
        }
    ],
    "project_timeline" : [
        {
            "title": "",
            "items": [
                {
                    "item": "",
                }
            ]
        }
    ],
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
