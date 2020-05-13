var context = {
    "overseer": `<a href="${links.overseer}">Overseer</a>`,
    "reach": `<a href="${links.reach}">Reach</a>`,
    "rapid": `<a href="${links.rapid}">Rapid</a>`,
    "sandbox": `<a href="${links.sandbox}">Sandbox</a>`,
    "endeavour": `<a href="${links.endeavour}">Endeavour</a>`,
    "externalAffairs": `<a href="${links.admin}#externalAffairs">External Affairs</a>`,
    "finance": `<a href="${links.admin}#finance">Finance</a>`,
    "openingsLink": links.openings,
    "marketing":`<a href="${links.admin}#marketing">Marketing</a>`,
    "calendar": `<a href="${links.calendar}">calendar</a>`,

    "yourPlace":`${links.pictures}/meeting2.JPG`,
    "slack":`${links.pictures}/slack_rgb.png`
}

var templateScript = Handlebars.templates['info/join'](context);

$('main').append(templateScript);
