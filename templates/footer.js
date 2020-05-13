var context = {
    'socialMedia': [
        {
            'link': 'https://www.facebook.com/uclaBruinSpace/',
            'icon': `${links.icons}/facebook.png`,
        }, {
            'link': 'https://www.instagram.com/uclabruinspace/',
            'icon': `${links.icons}/instagram.png`,
        }, {
            'link': 'https://twitter.com/uclabruinspace',
            'icon': `${links.icons}/twitter.png`,
        }, {
            'link': 'https://www.linkedin.com/company/bruin-spacecraft-group-at-ucla/',
            'icon': `${links.icons}/linkedin.png`,
        },
    ],
};

var templateScript = Handlebars.templates.footer(context);

$('footer').append(templateScript);
