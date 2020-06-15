# Bruin-Spacecraft-Group.github.io

## Bruin Space's Website

Repository hosting the website for Bruin Spacecraft Group.

Bruin Spacecraft Group is a science and engineering organization at UCLA dedicated to space mission engineering. For more information, check out [bruinspace.com](https://bruinspace.com)

## Developer Notes
 - If you are trying to work with the CSS, you'll need SASS. We use SASS to write our stylesheets as `.scss` files,
 which we then compile into minified CSS.
 - If you are trying to work with the HTML, you'll need Handlebars. We use Handlebars for its HTML templating,
 which means a lot less repeated elements. Handlebars content goes in `.handlebars` and `.js` files, which it then
loads into `.html` files via JavaScript.

### Installation
Download through NPM or elsewhere:
```
npm install -g uglifycss
npm install -g sass
npm install -g handlebars
```

### Compilation
Run `make` from root to do everything at once, or take a look at Handlebars/SASS docs for more options.
 - There may also packages for Atom/VSCode that do what you want.
