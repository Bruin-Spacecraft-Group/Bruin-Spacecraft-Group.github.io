(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['head'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <script type=\"text/javascript\" src="
    + container.escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"link","hash":{},"data":data}) : helper)))
    + "></script>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<title>Bruin Spacecraft Group</title>\r\n\r\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\">\r\n\r\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\" integrity=\"sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T\" crossorigin=\"anonymous\"></script>\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\r\n<link href=\"https://fonts.googleapis.com/css?family=Montserrat|Oswald|Roboto\" rel=\"stylesheet\">\r\n<!--\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.scripts : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "-->\r\n\r\n<link rel=\"stylesheet\" href=\"css/animate.css\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"css/design.min.css\">\r\n\r\n<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"images/favicon/apple-touch-icon.png\">\r\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"images/favicon/favicon-32x32.png\">\r\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"images/favicon/favicon-16x16.png\">\r\n<link rel=\"manifest\" href=\"images/favicon/site.webmanifest\">\r\n<link rel=\"mask-icon\" href=\"images/favicon/safari-pinned-tab.svg\" color=\"#5bbad5\">\r\n\r\n<meta charset=\"utf-8\">\r\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n<meta name=\"viewport\" content=\"width=device-width, height=device-height, initial-scale=1\">\r\n<meta name=\"theme-color\" content="
    + container.escapeExpression(((helper = (helper = helpers.theme_color || (depth0 != null ? depth0.theme_color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"theme_color","hash":{},"data":data}) : helper)))
    + "/>\r\n";
},"useData":true});
templates['navMenu'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      "
    + ((stack1 = ((helper = (helper = helpers.element || (depth0 != null ? depth0.element : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"element","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <ul id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"mob-nav__menu mob-nav__menu--children mob-nav__menu--closed\" data-parent=\"MobNavMain\" data-menu=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.subMenuLinks : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        "
    + ((stack1 = ((helper = (helper = helpers.element || (depth0 != null ? depth0.element : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"element","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<nav class=\"mob-nav mob-nav--closed\" id=\"MobMenu\">\r\n  <ul id=\"MobNavMain\" data-menu=\"menu0\" class=\"mob-nav__menu mob-nav__menu--parent\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.links : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.subMenus : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</nav>\r\n";
},"useData":true});
templates['test'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div>\r\nMy name is "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + ". I am a "
    + alias4(((helper = (helper = helpers.occupation || (depth0 != null ? depth0.occupation : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"occupation","hash":{},"data":data}) : helper)))
    + "\r\n</div>\r\n";
},"useData":true});
})();