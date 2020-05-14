default:
	@echo "Compiling Handlebars templates..."
	handlebars templates/ -f templates/templatesCompiled.js
	@echo "Compiling SASS stylesheets..."
	sass css/sass:css/compiled
	@echo "Minifying CSS files..."
	uglifycss css/compiled/*.css > css/design.min.css
	@echo "    Done!"
