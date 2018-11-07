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
      "title":"Project Reach",
      "subtitle":"Rocket Payloads",
      "link":links.reach,
      "image":`${links.pictures}/Reach.JPG`,
      "logo":`${links.logos}/Reach Outline.png`
    },
    {
      "title":"Project Overseer",
      "subtitle":"High Altitude Balloons",
      "link":links.overseer,
      "image":`${links.pictures}/OverseerPortrait.JPG`,
      "logo":`${links.logos}/Overseer Outline.png`
    },
    {
      "title":"Project Sandbox",
      "subtitle":"Technology Development",
      "link":links.sandbox,
      "image":`${links.pictures}/Sandbox.jpg`,
      "logo":`${links.logos}/Sandbox Outline.png`
    },
    {
      "title":"Project Endeavour",
      "subtitle":"Scientific Research",
      "link":links.endeavour,
      "image":`${links.pictures}/Endeavour.jpg`,
      "logo":`${links.logos}/Endeavour Outline.png`
    }
  ],
  "join":links.join
}

var templateScript = Handlebars.templates.index(context);

$('main').append(templateScript);
