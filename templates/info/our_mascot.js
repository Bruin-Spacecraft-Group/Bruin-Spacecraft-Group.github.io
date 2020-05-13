var context = {
    "logo": `${links.pictures}/bru.PNG`,
    "project_description": "The most visible and powerful symbol of our vision is our mascot, Bru. The space bear " +
        "was inspired by UCLA's Bruin Bear and represents the university's heritage, school spirit, and all that " +
        "its student body embodies. Bru's space suit represents the club's focus on the various aspects of " +
        "research and developement in the realm of space science and technology, including but not limited to " +
        "scientific payloads, satelites, and radio communications. Bru in Space is a symbol of Bruin Space's " +
        "unique approach in space mission studies and design, combining well-focused projects within timelines " +
        "structured around the framework of the school year with a light-hearted and fun atmosphere for space " +
        "nerds to get creative and begin to sketch out and build their dream.",
}

Handlebars.registerHelper('if_even', function(conditional, options) {
    if((conditional % 2) == 0) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

var templateScript = Handlebars.templates['info/our_mascot'](context);

$('main').append(templateScript);
