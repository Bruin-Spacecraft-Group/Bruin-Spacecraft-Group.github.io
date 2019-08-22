var colorReach = '#F74049'
var colorRapid = '#16293E'
var colorEndeavour = '#00EBFA'
var colorOverseer = '#2CE993'

var context = {
  'jobs':[
    {
      'title': 'Software Engineer',
      'tags': [
        {
          'text': 'Reach',
          'color': colorReach
        },
        {
          'text': 'Rapid',
          'color': colorRapid
        }
      ],
      'description': 'Ya gotta write code and stufff duhshhh fillings pacesnio iojcondes ioniohfnwioeuh iohfio nioweniowenf cuio',
      'link': links.reach,
      'linkText': 'Learn More'
    },
    {
      'title': 'Mechancial Engineer',
      'tags': [
        {
          'text': 'Rapid',
          'color': colorRapid
        }
      ],
      'description': 'Ya gotta write code and stufff duhshhh fillings pacesnio iojcondes ioniohfnwioeuh iohfio nioweniowenf cuio',
      'link': links.reach,
      'linkText': 'Learn More'
    },
    {
      'title': 'Mechancial Engineer',
      'tags': [
        {
          'text': 'Reach',
          'color': colorReach
        },
        {
          'text': 'Rapid',
          'color': colorRapid
        }
      ],
      'description': 'Ya gotta write code and stufff duhshhh fillings pacesnio iojcondes ioniohfnwioeuh iohfio nioweniowenf cuio',
      'link': links.reach,
      'linkText': 'Learn More'
    },
    {
      'title': 'Mechancial Engineer',
      'tags': [
        {
          'text': 'Reach',
          'color': colorReach
        }
      ],
      'description': 'Ya gotta write code and stufff duhshhh fillings pacesnio iojcondes ioniohfnwioeuh iohfio nioweniowenf cuio',
      'link': links.reach,
      'linkText': 'Learn More'
    },
    {
      'title': 'Software Engineer',
      'tags': [
        {
          'text': 'Reach',
          'color': colorReach
        },
        {
          'text': 'Rapid',
          'color': colorRapid
        }
      ],
      'description': 'Ya gotta write code and stufff duhshhh fillings pacesnio iojcondes ioniohfnwioeuh iohfio nioweniowenf cuio',
      'link': links.reach,
      'linkText': 'Learn More'
    }
  ]

}

var templateScript = Handlebars.templates.openings(context);

$('main').append(templateScript);
