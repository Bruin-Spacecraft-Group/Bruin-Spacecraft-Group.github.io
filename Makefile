default:
	# Compile all the Handlebars templates into templatesCompiled.js
	handlebars templates/ -f templates/templatesCompiled.js
	# Compile all the SASS stylesheets into the folder css/compiled
	sass css/sass:css/compiled
	# Minify all the compiled CSS files into design.min.css
	uglifycss css/compiled/*.css > css/design.min.css
