# Handlebars Templates

This is the folder all our Handlebars templates live in. Because of that it's also the place most of the website
content is written -- edit the `.handlebars` files to change page structure and page-specific content, and edit
the corresponding `.js` files to edit the templated content.

Don't edit `templatesCompiled.js` manually -- that file is what everything ends up depending on, but it's
automatically generated (run `make` in the root directory to do so).
