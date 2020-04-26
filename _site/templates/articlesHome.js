var context = {
  "articles": [
    {
      "title": "Space Policy Under the Trump Administration: Year One In Review and Lessons from the Obama Administration",
      "author": "Rebbeca Lewis",
      "preview": "One year into his presidency, President Donald Trump has expressed goals for his space policy that both conflict with and resemble those stated by the Obama administration with regards to the National Space Council, human exploration programs, and public-private partnerships with commercial spaceflight companies. Whether his programs succeed or not depends not only on his decision-making but also on outside forces...",
      "picture": `${links.logos}/Endeavour Photo.png`,
      "link": `${links.articles}/space_policy_under_the_trump_administration.html`
    },
    {
      "title": "Limitations of Space Disclosures",
      "author": "Hanphenie Zhou",
      "preview": "As the commercial aerospace industry takes off, it is necessary to evaluate the current regulations on spacecraft disclosures and address the concerns regarding a lack of transparency, especially with government spacecrafts...",
      "picture": `${links.logos}/Endeavour Photo.png`
    }
  ]
}

var templateScript = Handlebars.templates.articlesHome(context);

$('main').append(templateScript);
