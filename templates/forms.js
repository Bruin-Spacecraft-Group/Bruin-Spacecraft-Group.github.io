var context = {
  'forms': [
    {
      'image': `${links.pictures}/purchases.png`,
      'title': 'Purchase Order Form',
      'link': 'https://docs.google.com/forms/d/e/1FAIpQLScZ5uatHmh6bb7-8RkvBOOeeQTw83b5FI6Rf7osE4lRFus53A/viewform'
                + '?c=0&w=1&fbzx=7913873291654657134',
    }, {
      'image': `${links.pictures}/grant.png`,
      'title': 'Bruin Space Grant Request',
      'link': 'https://docs.google.com/forms/d/e/1FAIpQLSficA0T7jHE7NNTk2J3FwvL82elk-DUuh0Qn9FqM-GLFkY6BA/viewform'
                + '?c=0&w=1',
    }, {
      'image': `${links.pictures}/W6YRA.png`,
      'title': 'Lab Purchase Request',
      'link': 'https://docs.google.com/forms/d/e/1FAIpQLSeFM9pYp6UMF26-2qEJn81u1ZQ3LvgY3P8LKXgkMEFZkI-jrQ/viewform'
                + '?c=0&w=1',
    }, {
      'image': `${links.pictures}/grant.png`,
      'title': 'Lab Safety Training',
      'link': 'https://docs.google.com/forms/d/e/1FAIpQLSdfGFAjF5FvRt_spjQvUoyOliU3z6YtXTU7sm5Jp3qRt94q2w/viewform'
                + '?c=0&w=1',
    },
  ],
};

var templateScript = Handlebars.templates.forms(context);

$('main').append(templateScript);
