default:
	handlebars templates/ -f templates/templatesCompiled.js
	sass css/design.scss css/design.css
	uglifycss css/design.css > css/design.min.css
