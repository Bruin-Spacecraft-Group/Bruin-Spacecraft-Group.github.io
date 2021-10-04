var context = {
    'video-link': `${links.videos}/background.mp4`,
    "slides": [
        {
            "active": "active",
            "image": `${links.pictures}/earth.jpg`,
            "title": "Articles!",
            "subtitle": "Link to cool article",
            "link": `${links.articles}/articlesHome.html`
        },
        {
            "image": `${links.pictures}/jupiter.jpg`,
            "title": "Calm down",
            "subtitle": "it's a placeholder okay",
            "link": `${links.articles}/articlesHome.html`
        },
        {
            "image": `${links.pictures}/saturn.jpg`,
            "title": "Calm down",
            "subtitle": "it's a placeholder okay",
            "link": `${links.articles}/articlesHome.html`
        }
    ],
    "cards": [
        {
            "title":"Project Rapid",
            "subtitle":"CubeSat Development",
            "link":links.rapid,
            "image":`${links.pictures}/Rapid.png`,
            "logo":`${links.logos}/Rapid Outline.png`
        },
        {
            "title":"Project Overseer",
            "subtitle":"High Altitude Balloons",
            "link":links.overseer,
            "image":`${links.pictures}/OverseerPortrait.jpg`,
            "logo":`${links.logos}/Overseer Outline.png`
        },
        {
            "title":"Project Forge",
            "subtitle":"Educational Program",
            "link":links.forge,
            "image":`${links.pictures}/Forge.jpg`,
            "logo":`${links.logos}/Forge Outline.PNG`
        }
    ],
    "join": links.join,
    "sponsors": [
        {
            "company": "Millennium Space Systems",
            "url": "https://www.millennium-space.com/",
            "logo": `${links.sponsor_logos}/millennium-space-systems-logo-blue.png`
        },
        {
            "company": "Tyvak Nano-Satellite Systems",
            "url": "https://www.tyvak.com",
            "logo": `${links.sponsor_logos}/Tyvak_Logo_Color.png`
        }
    ]
}

var templateScript = Handlebars.templates.index(context);

$('main').append(templateScript);
