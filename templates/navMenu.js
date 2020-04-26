var context = {
  'links': [
       {'element':
    `<li class='mob-nav__item'>
      <button type='button' class='mob-nav__trigger mob-nav__trigger--parent link' data-menu='menu3' onclick='toggleMenu("menu3")'>
        About Us
        <svg xmlns='http://www.w3.org/2000/svg' width='15' height='11.4' viewBox='0 0 15 11.4' class='svg-mobile-nav-right'>
          <path d='M0 6.2h12.9l-4.4 4.4.7.8L15 5.7 9.2 0l-.7.7 4.4 4.5H0'></path>
        </svg>
      </button>
    </li>`
    },
      {'element':
      `<li class='mob-nav__item'>
        <button type='button' class='mob-nav__trigger mob-nav__trigger--parent link' data-menu='menu1' onclick='toggleMenu("menu1")'>
          Projects
          <svg xmlns='http://www.w3.org/2000/svg' width='15' height='11.4' viewBox='0 0 15 11.4' class='svg-mobile-nav-right'>
            <path d='M0 6.2h12.9l-4.4 4.4.7.8L15 5.7 9.2 0l-.7.7 4.4 4.5H0'></path>
          </svg>
        </button>
      </li>`
      },
      {'element':
      `<li class='mob-nav__item'>
        <button type='button' class='mob-nav__trigger mob-nav__trigger--parent link' data-menu='menu2' onclick='toggleMenu("menu2")'>
          Resources
          <svg xmlns='http://www.w3.org/2000/svg' width='15' height='11.4' viewBox='0 0 15 11.4' class='svg-mobile-nav-right'>
            <path d='M0 6.2h12.9l-4.4 4.4.7.8L15 5.7 9.2 0l-.7.7 4.4 4.5H0'></path>
          </svg>
        </button>
      </li>`
      },
      {'element':
      `<li class='mob-nav__item'>
        <a href='${links.join}' class='mob-nav__link link'>Join</a>
      </li>`
      },
      {'element':
      `<li class='mob-nav__item'>
        <a href='${links.sponsor}' class='mob-nav__link link'>Sponsor Us</a>
      </li>`
      }
  ],
  'subMenus': [
    {'id': 'menu1', 'subMenuLinks':[
      {'element':
      `<li class='mob-nav__back'>
        <button type='button' class='mob-nav__trigger mob-nav__trigger--back' onclick='toggleMenu("menu1")'>
          Projects
          <svg xmlns='http://www.w3.org/2000/svg' width='15' height='11.4' viewBox='0 0 15 11.4' class='svg-mobile-nav-left'>
            <path d='M15 5.2H2.1L6.5.8 5.8 0 0 5.7l5.8 5.7.7-.7-4.4-4.5H15'></path>
          </svg>
        </button>
      </li>`
      },
      {'element':
      `<li class='mob-nav__item'>
        <a href='${links.overseer}' class='mob-nav__link link'>Overseer</a>
      </li>`
      },
      {'element':
      `<li class='mob-nav__item'>
        <a href='${links.reach}' class='mob-nav__link link'>Reach</a>
      </li>`
      },
      {'element':
      `<li class='mob-nav__item'>
        <a href='${links.rapid}' class='mob-nav__link link'>Rapid</a>
      </li>`
      },
      // {'element':
      // `<li class='mob-nav__item'>
      //   <a href='${links.sandbox}' class='mob-nav__link link'>Sandbox</a>
      // </li>`
      // },
      {'element':
      `<li class='mob-nav__item'>
        <a href='${links.forge}' class='mob-nav__link link'>Forge</a>
      </li>`
      },
      {'element':
      `<li class='mob-nav__item'>
        <a href='${links.endeavour}' class='mob-nav__link link'>Endeavour</a>
      </li>`
      }
    ]},
    {'id': 'menu2', 'subMenuLinks':[
      {'element':
      `<li class='mob-nav__back'>
        <button type='button' class='mob-nav__trigger mob-nav__trigger--back' onclick='toggleMenu("menu2")'>
          Resources
          <svg xmlns='http://www.w3.org/2000/svg' width='15' height='11.4' viewBox='0 0 15 11.4' class='svg-mobile-nav-left'>
            <path d='M15 5.2H2.1L6.5.8 5.8 0 0 5.7l5.8 5.7.7-.7-4.4-4.5H15'></path>
          </svg>
        </button>
      </li>`
      },
      {'element':
      `<li class='mob-nav__item'>
        <a href='${links.calendar}' class='mob-nav__link link'>Calendar</a>
      </li>`
      },
      {'element':
      `<li class='mob-nav__item'>
        <a href='${links.forms}' class='mob-nav__link link'>Forms</a>
      </li>`
      }]
        },
    {'id': 'menu3', 'subMenuLinks':[
      {'element':
      `<li class='mob-nav__back'>
        <button type='button' class='mob-nav__trigger mob-nav__trigger--back' onclick='toggleMenu("menu2")'>
          About Us
          <svg xmlns='http://www.w3.org/2000/svg' width='15' height='11.4' viewBox='0 0 15 11.4' class='svg-mobile-nav-left'>
            <path d='M15 5.2H2.1L6.5.8 5.8 0 0 5.7l5.8 5.7.7-.7-4.4-4.5H15'></path>
          </svg>
        </button>
      </li>`
      },
      {'element':
      `<li class='mob-nav__item'>
        <a href='${links.our_team}' class='mob-nav__link link'>Our Team</a>
      </li>`
      },
      {'element':
      `<li class='mob-nav__item'>
        <a href='${links.our_mascot}' class='mob-nav__link link'>Our Mascot</a>
      </li>`
      }]
    }
  ]
}

var templateScript = Handlebars.templates.navMenu(context);

$('#mob-nav__container').append(templateScript);
