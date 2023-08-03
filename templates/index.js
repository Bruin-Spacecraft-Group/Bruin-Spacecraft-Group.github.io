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
            "logo": `${links.sponsor_logos}/Tyvak_Logo_Cgioolor.png`
        }
    ]
}

var templateScript = Handlebars.templates.index(context);

$('main').append(templateScript);

// // Get references to the necessary DOM elements
// const showPopupButton = document.getElementById('showPopup');
// const popupContainer = document.getElementById('popupContainer');

// // Google Form URL
// const googleFormUrl = 'https://forms.gle/TM17C2dVXRiEaCQj7';

// // Handle the click event for the "Show Popup" button
//     // Create the Google Form iframe
//     const googleFormIframe = document.createElement('iframe');
//     googleFormIframe.src = googleFormUrl;
//     googleFormIframe.width = '640';
//     googleFormIframe.height = '480';
//     googleFormIframe.frameborder = '0';
//     googleFormIframe.marginheight = '0';
//     googleFormIframe.marginwidth = '0';
//     googleFormIframe.style.border = 'none';

//     // Clear any previous content in the popup container
//     popupContainer.innerHTML = '';

//     // Append the Google Form iframe to the popup container
//     popupContainer.appendChild(googleFormIframe);

//     // Show the popup by setting its display style to 'block'
//     popupContainer.style.display = 'block';

// // Handle the click event outside of the popup to close it
// document.addEventListener('click', function(event) {
//     if (event.target.id !== 'showPopup' && !popupContainer.contains(event.target)) {
//         // Hide the popup by setting its display style to 'none'
//         popupContainer.style.display = 'none';
//     }
// });
