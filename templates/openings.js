var colorReach = '#F74049'
var colorRapid = '#16293E'
var colorOverseer = '#2CE993'
var colorAdmin = '#7CA2B5'

var context = {
  'jobs':[
    {
      'title': 'DCIU Development',
      'tags': [
        {
          'text': 'Rapid',
          'color': colorRapid
        }
      ],
      'description': 'Develop the critical elec tronics for a student-built, plasma-propelled CubeSat! The Digital Control Interface Unit (DCIU) is the "brains" of the propulsion system, translating commands from the craft Command and Data Handling (CDH) system into power supply commands for the ion thruster and managing the operation, startup, and shutdown of the thruster system.',
      'link': 'https://forms.gle/uiJ2M4FUsc6AanTz5',
      'linkText': 'Apply Here',
      'required-skills':[
        {'skill': 'Ability to work and pull weight in a team'},
        {'skill': 'Communication skills and self-motivation'},
        {'skill': 'Prior Arduino/embedded systems design strongly encouraged'}
      ],
      'recommended-skills':[
        {'skill': 'Embedded systems programming and design (Atmega, PIC, etc.)'},
        {'skill': 'PCB design and layout'},
        {'skill': 'Soldering'}
      ]
    },
    {
      'title': 'PPU Development',
      'tags': [
        {
          'text': 'Rapid',
          'color': colorRapid
        }
      ],
      'description': 'Develop the critical electronics for a student-built, plasma-propelled CubeSat! The Power Processing Unit (PPU) is the set of power supplies that converts the low-voltage (typically 5-20 V) power from the craft into the high voltages needed for ion thruster operation (200-1000 V). ',
      'link': 'https://forms.gle/uiJ2M4FUsc6AanTz5',
      'linkText': 'Apply Here',
      'required-skills':[
        {'skill': 'Ability to work and pull weight in a team'},
        {'skill': 'Communication skills and self-motivation'},
        {'skill': 'Basic electronics knowledge'}
      ],
      'recommended-skills':[
        {'skill': 'Power Electronics Design (switching mode power supplies, DC-DC conversion, etc)'},
        {'skill': 'PCB design and layout'},
        {'skill': 'Soldering'},
        {'skill': 'High voltage design'}
      ]
    },
    {
      'title': 'Prop Management Engineer',
      'tags': [
        {
          'text': 'Rapid',
          'color': colorRapid
        }
      ],
      'description': 'Develop flight hardware for a miniature ion propulsion system! The propellant management system precisely controls the flow of gas to the ion thruster in microgravity using a series of pressure regulators, valves, and precisely calibrated orifices.',
      'link': 'https://forms.gle/uiJ2M4FUsc6AanTz5',
      'linkText': 'Apply Here',
      'required-skills':[
        {'skill': 'Ability to work and pull weight in a team'},
        {'skill': 'Communication skills and self-motivation'}
      ],
      'recommended-skills':[
        {'skill': 'Fluid systems design, analysis, and simulation'},
        {'skill': 'Environmental analysis (shock/vibe)'},
        {'skill': 'CAD and manufacturing skills'}
      ]
    },
    {
      'title': 'Flight Software Engineer',
      'tags': [
        {
          'text': 'Reach',
          'color': colorReach
        }
      ],
      'description': 'C and C++ based software development controlling power distribution and data collection',
      'link': links.reach,
      'linkText': 'Learn More'
    },
    {
      'title': 'Flight Software Engineer',
      'tags': [
        {
          'text': 'Overseer',
          'color': colorOverseer
        }
      ],
      'description': 'Python based software development controlling power distribution, data collection, and failsafe operation',
      'link': links.reach,
      'linkText': 'Learn More'
    },
    {
      'title': 'Electical Engineer',
      'tags': [
        {
          'text': 'Overseer',
          'color': colorOverseer
        },
        {
          'text': 'Reach',
          'color': colorReach
        },
        {
          'text': 'Rapid',
          'color': colorRapid
        }
      ],
      'description': 'Design power systems, sensor interfaces, and custom printed circuit boards.',
      'link': links.reach,
      'linkText': 'Learn More'
    },
    {
      'title': 'Operations Software Engineer',
      'tags': [
        {
          'text': 'Rapid',
          'color': colorRapid
        },
        {
          'text': 'Reach',
          'color': colorReach
        }
      ],
      'description': 'Python and web based operational software development, focused on providing a user interface to the spacecraft',
      //'link': links.rapid,
      //'linkText': 'Learn More'
    },
    {
      'title': 'Mechanical Engineer',
      'tags': [
        {
          'text': 'Rapid',
          'color': colorRapid
        }
      ],
      'description': 'Chassis and deployable element design, simulation analysis. CAD experience required.',
      'link': 'https://forms.gle/uiJ2M4FUsc6AanTz5',
      'linkText': 'Apply Here',
    },
    {
      'title': 'Thermal Engineer',
      'tags': [
        {
          'text': 'Rapid',
          'color': colorRapid
        }
      ],
      'description': 'Assist in design of spacecraft thermal control system, perform calculations, and run simulations with industry software Thermal Desktop.',
      'link': 'https://forms.gle/uiJ2M4FUsc6AanTz5',
      'linkText': 'Apply Here',
    },
    {
      'title': 'Mechanical Engineer',
      'tags': [
        {
          'text': 'Reach',
          'color': colorReach
        },
        {
          'text': 'Overseer',
          'color': colorOverseer
        }
      ],
      'description': 'Design of main chassis, harnessing of components',
      //'link': links.reach,
      //'linkText': 'Learn More'
    },
    {
      'title': 'Systems Engineer',
      'tags': [
        {
          'text': 'Rapid',
          'color': colorRapid
        },
        {
          'text': 'Reach',
          'color': colorReach
        },
        {
          'text': 'Overseer',
          'color': colorOverseer
        }
      ],
      'description': 'Development and verification of requirements, resource allocation and numerical system analysis.',
      //'link': links.reach,
      //'linkText': 'Learn More'
    },
    {
      'title': 'Model Based Systems Engineer',
      'tags': [
        {
          'text': 'Rapid',
          'color': colorRapid
        }
      ],
      'description': 'Support Model Based Systems Engineering efforts working with industry leading modeling software Cameo Enterprise Architect. Design system-describing diagrams in accordance with the Unified Architecture Framework.',
      'link': 'https://forms.gle/uiJ2M4FUsc6AanTz5',
      'linkText': 'Apply Here',
    },
    {
      'title': 'Finance Team Member',
      'tags': [
        {
          'text': 'Admin',
          'color': colorAdmin
        }
      ],
      'description': 'Manage club accounts, secure funds, and complete purchase orders in support of Bruin Space',
      //'link': links.reach,
      //'linkText': 'Learn More'
    },
    {
      'title': 'Marketing Team Member',
      'tags': [
        {
          'text': 'Admin',
          'color': colorAdmin
        }
      ],
      'description': 'Manage social media accounts, design graphics, promote the Bruin Space brand.',
      //'link': links.reach,
      //'linkText': 'Learn More'
    },
    {
      'title': 'Webmaster',
      'tags': [
        {
          'text': 'Admin',
          'color': colorAdmin
        }
      ],
      'description': 'Manage website content, develop new website features, working with Handlebars templating framework, SASS, and javascript.',
      //'link': links.reach,
      //'linkText': 'Learn More'
    },
    {
      'title': 'Lab Manager',
      'tags': [
        {
          'text': 'Admin',
          'color': colorAdmin
        }
      ],
      'description': 'Handle lab related purchases and optimize organization of tools, equipment, and hardware.',
      //'link': links.reach,
      //'linkText': 'Learn More'
    }
  ]

}

var templateScript = Handlebars.templates.openings(context);

$('main').append(templateScript);

$('.job-card').click(function(e) {
  console.log(e.currentTarget.id)
  let number = e.currentTarget.id.split("-")[1]
  console.log(number)
  $("#job-"+number+"-modal").show()
})

$('.job-card-modal').click(function(e) {
  console.log(e.target.nodeName.toLowerCase())
  if (e.target.nodeName.toLowerCase() === "a") {
    console.log("YOOO")
    return;
  }
  // console.log(e.currentTarget.id)
  // let number = e.currentTarget.id.split("-")[1]
  // console.log(number)
  // $("#job-"+number+"-modal").hide()
  $("#"+e.currentTarget.id).hide()
})
