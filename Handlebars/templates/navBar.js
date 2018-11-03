var context = {
  "home":links.index,
  "logo":`${links.logos}/logo.png`,
  'links': [
    {'element':
      `<li class="site-nav__item">
        <a href="${links.our_team}" class="site-nav__link site-nav__link--link">Our Team</a>
      </li>`
    },
    {'element':
      `<li class="site-nav__item site-nav__item--parent">
        <p class="site-nav__item site-nav__link site-nav__link--link">Resources</p>
        <ul class="site-nav__dropdown" >
          <li class="site-nav__dropdown-item">
            <a class="site-nav__dropdown-link" href="${links.calendar}">Calendar</a>
          </li>
          <li class="site-nav__dropdown-item">
            <a class="site-nav__dropdown-link" href="${links.forms}">Forms</a>
          </li>
        </ul>
      </li>`
    },
    {'element':
      `<li class="site-nav__item site-nav__item--parent">
        <p class="site-nav__item site-nav__link site-nav__link--link">Projects</p>
        <ul class="site-nav__dropdown" >
          <li class="site-nav__dropdown-item">
            <a class="site-nav__dropdown-link" href="${links.overseer}">Overseer</a>
          </li>
          <li class="site-nav__dropdown-item">
            <a class="site-nav__dropdown-link" href="${links.reach}">Reach</a>
          </li>
          <li class="site-nav__dropdown-item">
            <a class="site-nav__dropdown-link" href="${links.rapid}">Rapid</a>
          </li>
          <li class="site-nav__dropdown-item">
            <a class="site-nav__dropdown-link" href="${links.sandbox}">Sandbox</a>
          </li>
          <li class="site-nav__dropdown-item">
            <a class="site-nav__dropdown-link" href="${links.endeavour}">Endeavour</a>
          </li>
        </ul>
      </li>`
    },
    {'element':
      `<li class="site-nav__item">
        <a href="${links.join}" class="site-nav__link site-nav__link--link">Join</a>
      </li>`
    },
    {'element':
      `<li class="site-nav__item">
        <a href="${links.sponsor}" class="site-nav__link site-nav__link--link">Sponsor Us</a>
      </li>`
    }],
    "burger": `${links.icons}/burger.png`
}

var templateScript = Handlebars.templates.navBar(context);

$('#SiteHeader').append(templateScript);
