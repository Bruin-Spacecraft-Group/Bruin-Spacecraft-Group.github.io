(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <a href="
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":3,"column":16},"end":{"line":3,"column":24}}}) : helper)))
    + " target=\"_blank\">\r\n            <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":4,"column":21},"end":{"line":4,"column":29}}}) : helper)))
    + ">\r\n        </a>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"social-media-links\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"socialMedia") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":6,"column":13}}})) != null ? stack1 : "")
    + "</div>\r\n<!-- Begin MailChimp Signup Form -->\r\n<div id=\"mc_embed_signup\">\r\n    <form action=\"https://facebook.us14.list-manage.com/subscribe/post?u=a0f4954a051d300244e35603a&amp;id=635c5f1926\"\r\n        method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\"\r\n        target=\"_blank\" novalidate>\r\n        <h3>Don't get lost in orbit! Sign up for our newsletter: </h3>\r\n        <div id=\"mc_embed_signup_scroll\">\r\n            <!---\r\n            <div class=\"mc-field-group\">\r\n                <label for=\"mce-EMAIL\">Email Address </label>\r\n                <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\">\r\n            </div>\r\n            <div id=\"mce-responses\" class=\"clear\">\r\n                <div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\r\n                <div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\r\n            </div>\r\n            -->\r\n            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\r\n            <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\"\r\n                name=\"b_a0f4954a051d300244e35603a_fafda91946\" tabindex=\"-1\" value=\"\"></div>\r\n            <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\"\r\n                class=\"button\"></div>\r\n        </div>\r\n        <div class=\"contact\">\r\n            <h3>Questions?</h3>\r\n            <p>Contact us on <a href=\"https://www.facebook.com/uclaBruinSpace/\">Facebook</a>, at\r\n                <a href=\"mailto:bruinspace@g.ucla.edu\">bruinspace@g.ucla.edu</a>, or come visit our lab\r\n                in Boelter 8761!</p>\r\n        </div>\r\n    </form>\r\n</div>\r\n<!--End mc_embed_signup-->\r\n";
},"useData":true});
templates['head'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <script type=\"text/javascript\" src="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"link","hash":{},"data":data,"loc":{"start":{"line":16,"column":37},"end":{"line":16,"column":45}}}) : helper)))
    + "></script>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<title>Bruin Spacecraft Group</title>\r\n\r\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\"\r\n    integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\"\r\n    crossorigin=\"anonymous\">\r\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"\r\n    integrity=\"sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T\"\r\n    crossorigin=\"anonymous\"></script>\r\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"\r\n    integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\"\r\n    crossorigin=\"anonymous\">\r\n<link href=\"https://fonts.googleapis.com/css?family=Montserrat|Oswald|Roboto\" rel=\"stylesheet\">\r\n\r\n<!--\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"scripts") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":17,"column":9}}})) != null ? stack1 : "")
    + "-->\r\n\r\n<link rel=\"stylesheet\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"animate") || (depth0 != null ? lookupProperty(depth0,"animate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"animate","hash":{},"data":data,"loc":{"start":{"line":20,"column":29},"end":{"line":20,"column":40}}}) : helper)))
    + "\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"main") || (depth0 != null ? lookupProperty(depth0,"main") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"main","hash":{},"data":data,"loc":{"start":{"line":21,"column":45},"end":{"line":21,"column":53}}}) : helper)))
    + "\">\r\n\r\n<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"favicon") || (depth0 != null ? lookupProperty(depth0,"favicon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data,"loc":{"start":{"line":23,"column":51},"end":{"line":23,"column":62}}}) : helper)))
    + "/apple-touch-icon.png\">\r\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"favicon") || (depth0 != null ? lookupProperty(depth0,"favicon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data,"loc":{"start":{"line":24,"column":54},"end":{"line":24,"column":65}}}) : helper)))
    + "/favicon-32x32.png\">\r\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"favicon") || (depth0 != null ? lookupProperty(depth0,"favicon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data,"loc":{"start":{"line":25,"column":54},"end":{"line":25,"column":65}}}) : helper)))
    + "/favicon-16x16.png\">\r\n<link rel=\"manifest\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"favicon") || (depth0 != null ? lookupProperty(depth0,"favicon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data,"loc":{"start":{"line":26,"column":27},"end":{"line":26,"column":38}}}) : helper)))
    + "/site.webmanifest\">\r\n<link rel=\"mask-icon\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"favicon") || (depth0 != null ? lookupProperty(depth0,"favicon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data,"loc":{"start":{"line":27,"column":28},"end":{"line":27,"column":39}}}) : helper)))
    + "/safari-pinned-tab.svg\" color=\"#5bbad5\">\r\n\r\n<meta charset=\"utf-8\">\r\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n<meta name=\"viewport\" content=\"width=device-width, height=device-height, initial-scale=1\">\r\n<meta name=\"theme-color\" content="
    + alias4(((helper = (helper = lookupProperty(helpers,"theme_color") || (depth0 != null ? lookupProperty(depth0,"theme_color") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theme_color","hash":{},"data":data,"loc":{"start":{"line":32,"column":33},"end":{"line":32,"column":48}}}) : helper)))
    + "/>\r\n";
},"useData":true});
templates['index'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <li data-target=\"#myCarousel\" data-slide-to=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":57,"column":69},"end":{"line":57,"column":79}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"active") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":81},"end":{"line":57,"column":116}}})) != null ? stack1 : "")
    + "></li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "class=\"active\"";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"carousel-item "
    + alias4(((helper = (helper = lookupProperty(helpers,"active") || (depth0 != null ? lookupProperty(depth0,"active") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"active","hash":{},"data":data,"loc":{"start":{"line":63,"column":46},"end":{"line":63,"column":56}}}) : helper)))
    + "\">\r\n                        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":64,"column":34},"end":{"line":64,"column":43}}}) : helper)))
    + "\">\r\n                        <div class=\"carousel-caption\">\r\n                            <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":66,"column":32},"end":{"line":66,"column":41}}}) : helper)))
    + "</h2>\r\n                            <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":67,"column":37},"end":{"line":67,"column":45}}}) : helper)))
    + "\"><h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"subtitle") || (depth0 != null ? lookupProperty(depth0,"subtitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtitle","hash":{},"data":data,"loc":{"start":{"line":67,"column":51},"end":{"line":67,"column":63}}}) : helper)))
    + "</h3></a>\r\n                        </div>\r\n                    </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a class=\"card\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":86,"column":38},"end":{"line":86,"column":46}}}) : helper)))
    + "\">\r\n                    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":87,"column":30},"end":{"line":87,"column":39}}}) : helper)))
    + "\">\r\n                    <div class=\"card-container\">\r\n                        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":89,"column":34},"end":{"line":89,"column":42}}}) : helper)))
    + "\"></img>\r\n                        <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":90,"column":28},"end":{"line":90,"column":37}}}) : helper)))
    + "</h3>\r\n                        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"subtitle") || (depth0 != null ? lookupProperty(depth0,"subtitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtitle","hash":{},"data":data,"loc":{"start":{"line":91,"column":27},"end":{"line":91,"column":39}}}) : helper)))
    + "</p>\r\n                    </div>\r\n                </a>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div>\r\n                        <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":139,"column":33},"end":{"line":139,"column":40}}}) : helper)))
    + "\" target=\"_blank\">\r\n                            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":140,"column":38},"end":{"line":140,"column":46}}}) : helper)))
    + "\">\r\n                        </a>\r\n                    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"index-wrapper\">\r\n    <div class=\"video\">\r\n        <div style=\"position:relative;height:100%;z-index:-1\">\r\n            <!--\r\n            <iframe width=\"100%\"\r\n                src=\"https://www.youtube.com/embed/QGWQyhOfZBY?autoplay=1;rel=0&amp;controls=0&amp;showinfo=0\"\r\n                frameborder=\"0\" allow=\"autoplay; encrypted-media\"\r\n                style=\"position:absolute;width:100%;height:100%;left:0\" allowfullscreen></iframe>\r\n            -->\r\n            <!--\r\n            <iframe width=\"100%\"\r\n                src=\"https://www.youtube.com/embed/OGKqUmk_g-0?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0&amp;mute=1&amp;loop=1&playlist=OGKqUmk_g-0\"\r\n                frameborder=\"0\" allow=\"autoplay; encrypted-media\" style=\"width:100%;\" allowfullscreen></iframe>\r\n            -->\r\n            <video width=\"100%\" autoplay muted loop>\r\n                <source src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"video-link") || (depth0 != null ? lookupProperty(depth0,"video-link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"video-link","hash":{},"data":data,"loc":{"start":{"line":16,"column":29},"end":{"line":16,"column":43}}}) : helper)))
    + "\" type=\"video/mp4\">\r\n                HTML video is not supported by your browser.\r\n            </video>\r\n\r\n        </div>\r\n        <div class=\"caption__container\">\r\n            <div class=\"caption\">\r\n                <h1>Welcome</h1>\r\n                <h3>to Bruin Spacecraft Group</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"scrollDown\" onclick=\"scrollDown()\">	\r\n            <svg class=\"arrows\">\r\n                <path class=\"a1\" d=\"M0 0 L30 20 L60 0\"></path>\r\n                <path class=\"a2\" d=\"M0 15 L30 35 L60 15\"></path>\r\n                <path class=\"a3\" d=\"M0 30 L30 50 L60 30\"></path>\r\n            </svg>\r\n        </div>\r\n        <script>\r\n            function scrollDown(){\r\n                //console.log(\"HELP\")\r\n                $(\"html, body\").animate({\r\n                    scrollTop: $('#mission').offset().top}, 1000)\r\n            }\r\n        </script>\r\n    </div>\r\n\r\n    <div class=\"main-content-wrapper\">\r\n        <div id=\"mission\" class=\"paragraph-container light\">\r\n            <h1>Our Mission</h1>\r\n            <p>Bruin Spacecraft Group was founded with the intent of providing a creative and supportive environment\r\n                for space mission design and development at UCLA. Here, students of all backgrounds can come together,\r\n                united by a passion for space, to do something amazing. Here, we aim to give students the opportunity\r\n                to acquire the skills necessary to become leaders in the space industry.</p>\r\n        </div>\r\n        <!-- NOT READY\r\n        <div class=\"carousel-wrapper\">\r\n            <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                <!-- Indicators >\r\n                <ul class=\"carousel-indicators\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"slides") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":20},"end":{"line":58,"column":29}}})) != null ? stack1 : "")
    + "                </ul>\r\n                <!-- Slides TODO: add img alts?>\r\n                <div class=\"carousel-inner\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"slides") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":16},"end":{"line":70,"column":25}}})) != null ? stack1 : "")
    + "                </div>\r\n                <!-- Left and right controls >\r\n                <a class=\"carousel-control-prev\" href=\"#myCarousel\" data-slide=\"prev\">\r\n                    <span class=\"carousel-control-prev-icon\"></span>\r\n                </a>\r\n                <a class=\"carousel-control-next\" href=\"#myCarousel\" data-slide=\"next\">\r\n                    <span class=\"carousel-control-next-icon\"></span>\r\n                </a>\r\n            </div>\r\n        </div> -->\r\n\r\n        <div id=\"whatWeDo\" class=\"dark\">\r\n            <h1 class=\"title\">What We Do</h1>\r\n            <div class=\"flex-container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"cards") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":16},"end":{"line":94,"column":25}}})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n        <div class=\"parallax-image-header parallax-image\"></div>\r\n        <div id=\"counters\" class=\"dark paragraph-container\">\r\n            <div class=\"countBox\">\r\n                <div id=\"memberCounter\" class=\"counter\"></div>\r\n                <h2>Members</h2>\r\n            </div>\r\n            <div class=\"countBox\">\r\n                <div id=\"projectCounter\" class=\"counter\"></div>\r\n                <h2>Projects</h2>\r\n            </div>\r\n            <div class=\"countBox\">\r\n                <div id=\"ageCounter\" class=\"counter\"></div>\r\n                <h2>Age of Organization</br>(Years)</h2>\r\n            </div>\r\n        </div>\r\n        <div class=\"parallax-image-header__follow parallax-image\"></div>\r\n        <div id=\"join\" class=\"paragraph-container light\">\r\n            <h1>How to Join</h1>\r\n            <p>\r\n                Bruin Spacecraft Group is open to any and all majors and minors. All we ask is you come with a\r\n                passion for space!\r\n            </p>\r\n            <p>\r\n                You don't need to be an engineer to be on a project, and you don't need to study economics to join\r\n                the finance team.\r\n            </p>\r\n            <p>\r\n                If you want to join us here at Bruin Space, check out the <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"join") || (depth0 != null ? lookupProperty(depth0,"join") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"join","hash":{},"data":data,"loc":{"start":{"line":124,"column":83},"end":{"line":124,"column":91}}}) : helper)))
    + "\">Join</a> page for\r\n                more information.\r\n            </p>\r\n        </div>\r\n        <div class=\"parallax-image-2 parallax-image\"></div>\r\n        <div id=\"sponsors\" class=\"paragraph-container light\">\r\n            <h1>Our Sponsors</h1>\r\n            <p>\r\n                The work we do at Bruin Space is made possible in part due to our generous sponsors:\r\n            </p>\r\n            <div class=\"sponsor-logos\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"sponsors") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":137,"column":16},"end":{"line":143,"column":25}}})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n        <div class=\"parallax-image-2__follow parallax-image\"></div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
templates['mailingListModal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"mailing-list\">\r\n    <div id=\"myBtn\" class=\"mailing-list-icon\">\r\n        <img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":3,"column":18},"end":{"line":3,"column":26}}}) : helper)))
    + "\" alt=\"thing\">\r\n    </div>\r\n    <!-- The Modal -->\r\n    <div id=\"myModal\" class=\"mailing-list-modal\">\r\n\r\n        <!-- Modal content -->\r\n        <div class=\"mailing-list-modal-content\">\r\n            <div class=\"mailing-list-modal-header\">\r\n                <span class=\"mailing-list-close\">&times;</span>\r\n                <h2>Don't get lost in orbit!</h2>\r\n            </div>\r\n            <div class=\"mailing-list-modal-body\">\r\n                <p>Join our mailing list and stay up to date on all Bruin Space club happenings!</p>\r\n                <form action=\"https://facebook.us14.list-manage.com/subscribe/post?u=a0f4954a051d300244e35603a&amp;id=635c5f1926\"\r\n                    method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\"\r\n                    target=\"_blank\" novalidate>\r\n                    <div id=\"mc_embed_signup_scroll\">\r\n                        <div class=\"mc-field-group\">\r\n                            <label for=\"mce-EMAIL\">Email Address </label>\r\n                            <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\">\r\n                        </div>\r\n                        <div id=\"mce-responses\" class=\"clear\">\r\n                            <div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\r\n                            <div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\r\n                        </div>\r\n                        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\r\n                        <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\"\r\n                            name=\"b_a0f4954a051d300244e35603a_fafda91946\" tabindex=\"-1\" value=\"\"></div>\r\n                        <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\"\r\n                            id=\"mc-embedded-subscribe\" class=\"button\"></div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n";
},"useData":true});
templates['navBar'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"element") || (depth0 != null ? lookupProperty(depth0,"element") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"element","hash":{},"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a class=\"brand\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"home") || (depth0 != null ? lookupProperty(depth0,"home") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home","hash":{},"data":data,"loc":{"start":{"line":1,"column":23},"end":{"line":1,"column":31}}}) : helper)))
    + "\">\r\n    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":2,"column":14},"end":{"line":2,"column":22}}}) : helper)))
    + "\">\r\n</a>\r\n<nav class=\"site-nav\" role=\"navigation\">\r\n    <ul class=\"site-nav__list\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"links") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":8,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\r\n</nav>\r\n<button class=\"mob-nav__burger\" id=\"MobMenuToggle\" onclick=\"\">\r\n    <img id=\"burger\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"burger") || (depth0 != null ? lookupProperty(depth0,"burger") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"burger","hash":{},"data":data,"loc":{"start":{"line":12,"column":26},"end":{"line":12,"column":36}}}) : helper)))
    + "\">\r\n</button>\r\n";
},"useData":true});
templates['navMenu'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"element") || (depth0 != null ? lookupProperty(depth0,"element") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"element","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <ul id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":8,"column":16},"end":{"line":8,"column":22}}}) : helper)))
    + "\" class=\"mob-nav__menu mob-nav__menu--children mob-nav__menu--closed\"\r\n            data-parent=\"MobNavMain\"data-menu=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":9,"column":47},"end":{"line":9,"column":53}}}) : helper)))
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"subMenuLinks") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":12,"column":21}}})) != null ? stack1 : "")
    + "        </ul>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"element") || (depth0 != null ? lookupProperty(depth0,"element") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"element","hash":{},"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":11,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<nav class=\"mob-nav mob-nav--closed\" id=\"MobMenu\">\r\n    <ul id=\"MobNavMain\" data-menu=\"menu0\" class=\"mob-nav__menu mob-nav__menu--parent\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"links") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":5,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"subMenus") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":14,"column":13}}})) != null ? stack1 : "")
    + "</nav>\r\n";
},"useData":true});
templates['notif'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"notif-banner\">\r\n    <span id=\"close-banner\" onclick=\"close_notif()\">&times;</span>\r\n    <script>\r\n        function close_notif() {\r\n            document.getElementsByClassName('notif-banner')[0].style.display = \"none\";\r\n        }\r\n    </script>\r\n    <div class=\"notif-container\">\r\n        <p class=\"notif-text\">\r\n            Reminder: Don't miss our first General Meeting <a href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"notif-link") || (depth0 != null ? lookupProperty(depth0,"notif-link") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"notif-link","hash":{},"data":data,"loc":{"start":{"line":10,"column":68},"end":{"line":10,"column":82}}}) : helper)))
    + "\">Wedensday, October 2nd</a>!\r\n        </p>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
templates['_404'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"_404-wrapper\">\r\n    <h1>Oops... Looks like the page you are searching for does not exist!</h1>\r\n    <h2>Let's get you back to <a href=\"http://bruinspace.com\">safety</a></h2>\r\n</div>\r\n";
},"useData":true});
templates['articles/articlesHome'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"article-preview dark\">\r\n            <div class=\"article-preview__text\">\r\n                <a href="
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":9,"column":24},"end":{"line":9,"column":34}}}) : helper)))
    + "><h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":9,"column":39},"end":{"line":9,"column":48}}}) : helper)))
    + "</h2></a>\r\n                <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":10,"column":20},"end":{"line":10,"column":30}}}) : helper)))
    + "</h3>\r\n                <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"preview") || (depth0 != null ? lookupProperty(depth0,"preview") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"preview","hash":{},"data":data,"loc":{"start":{"line":11,"column":19},"end":{"line":11,"column":30}}}) : helper)))
    + "</p>\r\n            </div>\r\n            <div class=\"article-preview__image\">\r\n                <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"picture") || (depth0 != null ? lookupProperty(depth0,"picture") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"picture","hash":{},"data":data,"loc":{"start":{"line":14,"column":26},"end":{"line":14,"column":37}}}) : helper)))
    + "\">\r\n            </div>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"page-header\">\r\n    <h1>Articles Home</h1>\r\n    <h3>Check out these cool articles on space policy</h3>\r\n</div>\r\n<div class=\"article-list\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"articles") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":17,"column":13}}})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});
templates['info/admin'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"admin-wrapper\" class=\"parallax-wrapper\">\r\n    <div class=\"project-header\">\r\n        <div class=\"parallax-image-header parallax-image\"></div>\r\n        <div class=\"project-header__title\">\r\n            <h1>Admin</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"project-intro dark\">\r\n        <h1>Go behind the scenes</h1>\r\n        <p>Our science and engineering projects wouldn't be possible without the incredible work put in by our admin\r\n            teams: internal affairs, external affairs, finance, and marketing. These teams not only enable the\r\n            projects to thrive, but they facilitate communication and help us engage with our community.</p>\r\n    </div>\r\n    <div class=\"parallax-image-header__follow parallax-image\"></div>\r\n    <div class=\"text-image__container light text-left\">\r\n        <h1 class=\"title\" id=\"marketing\">Marketing</h1>\r\n        <div class=\"text-image image-left\">\r\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"marketing") || (depth0 != null ? lookupProperty(depth0,"marketing") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"marketing","hash":{},"data":data,"loc":{"start":{"line":18,"column":22},"end":{"line":18,"column":35}}}) : helper)))
    + "\">\r\n            <div class=\"paragraph-container\">\r\n                <p>Our marketing team focuses on brand management and content generation, working to make the\r\n                    science and engineering accessible to the public. We hope to share our passion for space\r\n                    in a way that inspires and excites those around us.</p>\r\n                <p>Responsibilities</p>\r\n                <ul>\r\n                    <li>Manage social media accounts</li>\r\n                    <li>Graphic design and media creation</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"text-image__container dark\">\r\n        <h1 class=\"title\" id=\"finance\">Finance</h1>\r\n        <div class=\"text-image\">\r\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"finance") || (depth0 != null ? lookupProperty(depth0,"finance") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"finance","hash":{},"data":data,"loc":{"start":{"line":34,"column":22},"end":{"line":34,"column":33}}}) : helper)))
    + "\">\r\n            <div class=\"paragraph-container\">\r\n                <p>Our finance team tracks the organization's accounts and works to secure additional funding.</p>\r\n                <p>Responsibilities</p>\r\n                <ul>\r\n                    <li>Manage accounts with internal spreadsheets and communicate with campus account offices</li>\r\n                    <li>Draft funding proposals</li>\r\n                    <li>Communicate with cooroprate sponsors and facilitate donations</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"text-image__container light\">\r\n        <h1 class=\"title\" id=\"internalAffairs\">Internal Affairs</h1>\r\n        <div class=\"text-image image-left\">\r\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"internalAffairs") || (depth0 != null ? lookupProperty(depth0,"internalAffairs") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalAffairs","hash":{},"data":data,"loc":{"start":{"line":49,"column":22},"end":{"line":49,"column":41}}}) : helper)))
    + "\">\r\n            <div class=\"paragraph-container\">\r\n                <p>Our internal affairs team, under the direction of the Internal Vice President, seeks to facilitate\r\n                    social and developmental programs within the organization.</p>\r\n                <p>In addition to creating a workshop curriculum for incoming members, the team organizes social\r\n                    events like BBQs and rocket launch viewing parties.</p>\r\n                <p>Responsibilities</p>\r\n                <ul>\r\n                    <li>Coordinating large groups of people</li>\r\n                    <li>Creating interest forms and engaging members</li>\r\n                    <li>Organizing educational workshops</li>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"text-image__container dark\">\r\n        <h1 class=\"title\" id=\"externalAffairs\">External Affairs</h1>\r\n        <div class=\"text-image\">\r\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"externalAffairs") || (depth0 != null ? lookupProperty(depth0,"externalAffairs") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"externalAffairs","hash":{},"data":data,"loc":{"start":{"line":66,"column":22},"end":{"line":66,"column":41}}}) : helper)))
    + "\">\r\n            <div class=\"paragraph-container\">\r\n                <p>The external affairs team is focused on corporate outreach, community engagement, and\r\n                    recruitment.</p>\r\n                <p>Responsibilities</p>\r\n                <ul>\r\n                    <li>Contacting professionals in the aerospace industry and building mutually beneficial\r\n                        relationships</li>\r\n                    <li>Coordinating with UCLA organizations to participate in public outreach events such as\r\n                        Exploring Your Universe, Engineer's Week, and more.</li>\r\n                    <li>Passing out flyers and stationing booths at recruitment events like the Enormous Activities\r\n                        Fair</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
templates['info/forms'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <a class=\"form-card\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":15,"column":39},"end":{"line":15,"column":47}}}) : helper)))
    + "\">\r\n                <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":16,"column":26},"end":{"line":16,"column":35}}}) : helper)))
    + "\">\r\n                <div class=\"card-container\">\r\n                    <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":18,"column":24},"end":{"line":18,"column":33}}}) : helper)))
    + "</h3>\r\n                </div>\r\n            </a>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<main class=\"animatedSlow fadeIn\">\r\n    <div id=\"forms-wrapper\">\r\n        <div class=\"project-header\">\r\n            <div class=\"parallax-image-header parallax-image\"></div>\r\n            <div class=\"project-header__title\">\r\n                <h1>Forms</h1>\r\n            </div>\r\n        </div>\r\n        <div class=\"project-intro dark\">\r\n            <h1>For all your Bruin Space related forms!</h1>\r\n        </div>\r\n        <div class=\"parallax-image-header__follow parallax-image\"></div>\r\n        <div class=\"form-cards__container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"forms") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":21,"column":21}}})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</main>\r\n";
},"useData":true});
templates['info/join'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"team-wrapper\" class=\"parallax-wrapper\">\r\n    <div class=\"project-header\">\r\n        <div class=\"parallax-image-header parallax-image\"></div>\r\n        <div class=\"project-header__title\">\r\n            <h1>Join the Team</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"project-intro dark\">\r\n        <h1>Learn how you can get involved</h1>\r\n        <p>Scientist or artist, policy-maker or engineer, our only requirement is a passion for space.</p>\r\n    </div>\r\n    <div class=\"parallax-image-header__follow parallax-image\"></div>\r\n    <div class=\"text-image__container dark text-left\">\r\n        <h1 class=\"title\">Find your Place</h1>\r\n        <div class=\"text-image image-left\">\r\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"yourPlace") || (depth0 != null ? lookupProperty(depth0,"yourPlace") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"yourPlace","hash":{},"data":data,"loc":{"start":{"line":16,"column":22},"end":{"line":16,"column":35}}}) : helper)))
    + "\">\r\n            <div class=\"paragraph-container\">\r\n                <p>There are many opportunities at Bruin Space, ranging from science and engineering to finance, art,\r\n                    and public relations.</p>\r\n                <ul>\r\n                    <li>For those interested in spacecraft engineering, consider joining "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"overseer") || (depth0 != null ? lookupProperty(depth0,"overseer") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"overseer","hash":{},"data":data,"loc":{"start":{"line":21,"column":89},"end":{"line":21,"column":103}}}) : helper))) != null ? stack1 : "")
    + "\r\n                        or "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"rapid") || (depth0 != null ? lookupProperty(depth0,"rapid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rapid","hash":{},"data":data,"loc":{"start":{"line":22,"column":27},"end":{"line":22,"column":38}}}) : helper))) != null ? stack1 : "")
    + ".</li>\r\n                    <li>If you want to develop industry contacts, handle corporate relations, and public outreach\r\n                        efforts, consider our "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"externalAffairs") || (depth0 != null ? lookupProperty(depth0,"externalAffairs") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"externalAffairs","hash":{},"data":data,"loc":{"start":{"line":24,"column":46},"end":{"line":24,"column":67}}}) : helper))) != null ? stack1 : "")
    + " team.</li>\r\n                    <li>For experience managing accounts and applying for funds, join the "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"finance") || (depth0 != null ? lookupProperty(depth0,"finance") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"finance","hash":{},"data":data,"loc":{"start":{"line":25,"column":90},"end":{"line":25,"column":103}}}) : helper))) != null ? stack1 : "")
    + " team.</li>\r\n                    <li>If you are looking for a way to express your passion for space through art or share your\r\n                        excitement with the world, check out our "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"marketing") || (depth0 != null ? lookupProperty(depth0,"marketing") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"marketing","hash":{},"data":data,"loc":{"start":{"line":27,"column":65},"end":{"line":27,"column":80}}}) : helper))) != null ? stack1 : "")
    + " team.</li>\r\n                </ul>\r\n<!--                <a class=\"openings-link\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"openingsLink") || (depth0 != null ? lookupProperty(depth0,"openingsLink") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"openingsLink","hash":{},"data":data,"loc":{"start":{"line":29,"column":51},"end":{"line":29,"column":67}}}) : helper)))
    + "\">-->\r\n<!--                    Click here to see specific roles we are looking to fill.-->\r\n<!--                </a>-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"text-image__container light\">\r\n        <h1 class=\"title\">How to Join</h1>\r\n        <div class=\"text-image\">\r\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"join") || (depth0 != null ? lookupProperty(depth0,"join") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"join","hash":{},"data":data,"loc":{"start":{"line":38,"column":22},"end":{"line":38,"column":30}}}) : helper)))
    + "\">\r\n            <div class=\"paragraph-container\">\r\n                <p>Here are a few things you need to do to get started:</p>\r\n                <ul>\r\n                    <li>Join our <a href=\"https://discord.gg/wxWUtke3D5\">Discord server</a>, and consider downloading\r\n                        <a href=\"https://discord.com/\">the app</a>.</li>\r\n                    <!--li>Join our <a href=\"#mc_embed_signup\">mailing list</a>, for biweekly updates and\r\n                        opportunities.</li-->\r\n                    <li>Complete our <a href = \"https://forms.gle/y9a8RuiReU9ELpbu9\">interest form</a></li>\r\n                    <li>Complete <a href=\"https://worksafe.ucla.edu/UCLA/Programs/Standard/Control/elmLearner.wml?portalid=Learnerweb\">\r\n                            lab safety training\r\n                        </a> through UCLA's EH&amp;S department.</li>\r\n                    <li>Attend a meeting!\r\n                        <ul>\r\n                            <li>General meetings are a perfect introduction to the organization as a whole, but we\r\n                                encourage you to attend a project meeting and get a firsthand look at what it is we do.</li>\r\n                            <li>For a schedule of all Bruin Space meetings, check out our "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"calendar") || (depth0 != null ? lookupProperty(depth0,"calendar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"calendar","hash":{},"data":data,"loc":{"start":{"line":54,"column":90},"end":{"line":54,"column":104}}}) : helper))) != null ? stack1 : "")
    + ".</li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
templates['info/openings'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div id=\"job-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":32,"column":33},"end":{"line":32,"column":43}}}) : helper)))
    + "\" class=\"job-card\">\r\n                        <div class=\"job-card-header\">\r\n                            <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":34,"column":32},"end":{"line":34,"column":41}}}) : helper)))
    + "</h2>\r\n                            <div class=\"tags\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"tags") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":32},"end":{"line":38,"column":41}}})) != null ? stack1 : "")
    + "                            </div>\r\n                        </div>\r\n                        <div class=\"job-card-content\">\r\n                            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":42,"column":31},"end":{"line":42,"column":46}}}) : helper)))
    + "</p>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"job-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":45,"column":33},"end":{"line":45,"column":43}}}) : helper)))
    + "-modal\" class=\"job-card-modal\">\r\n                        <div class=\"job-card-header\">\r\n                            <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":47,"column":32},"end":{"line":47,"column":41}}}) : helper)))
    + "</h2>\r\n                            <div class=\"tags\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"tags") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":32},"end":{"line":51,"column":41}}})) != null ? stack1 : "")
    + "                            </div>\r\n                        </div>\r\n                        <div class=\"job-card-content\">\r\n                            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":55,"column":31},"end":{"line":55,"column":46}}}) : helper)))
    + "</p>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"required-skills") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":28},"end":{"line":65,"column":35}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"required-skills") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":28},"end":{"line":75,"column":35}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"link") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":76,"column":28},"end":{"line":80,"column":35}}})) != null ? stack1 : "")
    + "                        </div>\r\n                    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <div style=\"background-color:"
    + alias4(((helper = (helper = lookupProperty(helpers,"color") || (depth0 != null ? lookupProperty(depth0,"color") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data,"loc":{"start":{"line":37,"column":65},"end":{"line":37,"column":74}}}) : helper)))
    + "\"><p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":37,"column":79},"end":{"line":37,"column":87}}}) : helper)))
    + "</p></div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <div class=\"job-card-required-skills\">\r\n                                    <h3>Required Skills</h3>\r\n                                    <ul>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"required-skills") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":40},"end":{"line":62,"column":49}}})) != null ? stack1 : "")
    + "                                    </ul>\r\n                                </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                            <li>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"skill") || (depth0 != null ? lookupProperty(depth0,"skill") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"skill","hash":{},"data":data,"loc":{"start":{"line":61,"column":48},"end":{"line":61,"column":57}}}) : helper)))
    + "</li>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <div class=\"job-card-reccomended-skills\">\r\n                                    <h3>Recommended Skills (or skills you will learn)</h3>\r\n                                    <ul>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"recommended-skills") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":40},"end":{"line":72,"column":49}}})) != null ? stack1 : "")
    + "                                    </ul>\r\n                                </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <div class=\"job-card-link\">\r\n                                    <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":78,"column":45},"end":{"line":78,"column":53}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"linkText") || (depth0 != null ? lookupProperty(depth0,"linkText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkText","hash":{},"data":data,"loc":{"start":{"line":78,"column":55},"end":{"line":78,"column":67}}}) : helper)))
    + "</a>\r\n                                </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"openings-wrapper\" class=\"parallax-wrapper\">\r\n    <div class=\"project-header\">\r\n        <div class=\"parallax-image-header parallax-image\"></div>\r\n        <div class=\"project-header__title\">\r\n            <h1>Open Positions</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"project-intro dark\">\r\n        <h1>These are the roles we are looking to fill</h1>\r\n        <p>If interested, please reach out to the listed point of contact or follow the link to apply.</p>\r\n    </div>\r\n    <div class=\"parallax-image-header__follow parallax-image\"></div>\r\n    <div class=\"project-description light\">\r\n        <div class=\"job-search-container\">\r\n            <div class=\"job-search-header\">\r\n                <h2>Positions</h2>\r\n                <!-- <div class=\"filter-container\"> -->\r\n                    <div class=\"select-div\" style=\"width:200px;\">\r\n                        <select name=\"Project\">\r\n                            <option value=\"all\">All</option>\r\n                            <option value=\"reach\">Reach</option>\r\n                            <option value=\"rapid\">Rapid</option>\r\n                            <option value=\"overseer\">Overseer</option>\r\n                            <option value=\"admin\">Admin</option>\r\n                        </select>\r\n                    </div>\r\n                    <!-- <div class=\"clear-filter\" id=\"clear\">&times;</div> -->\r\n                <!-- </div> -->\r\n            </div>\r\n            <div class=\"job-card-container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"jobs") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":16},"end":{"line":83,"column":25}}})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
templates['info/our_mascot'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"mascot-wrapper\" class=\"parallax-wrapper\">\r\n    <div class=\"project-header\">\r\n        <div class=\"parallax-image-header parallax-image\"></div>\r\n        <div class=\"project-header__title\">\r\n            <h1>Our Mascot</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"project-intro dark\">\r\n        <h1>Bru in Space</h1>\r\n    </div>\r\n    <div class=\"parallax-image-header__follow parallax-image\"></div>\r\n    <div class=\"project-description dark\">\r\n        <h1 class=\"title\"></h1>\r\n        <div class=\"project-description__content\">\r\n            <div class=\"image-container\"><img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":15,"column":51},"end":{"line":15,"column":59}}}) : helper)))
    + "\"></div>\r\n            <p class=\"paragraph-container\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"project_description") || (depth0 != null ? lookupProperty(depth0,"project_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_description","hash":{},"data":data,"loc":{"start":{"line":16,"column":44},"end":{"line":16,"column":67}}}) : helper)))
    + " </p>\r\n        </div>\r\n        <div class=\"team-description light\">\r\n            <p class=\"title\">\r\n                \"The creation of Bru was actually an accident, just like many other wonderful space discoveries!\r\n                They were supposed to be a funny little background doodle in presentation slide backgrounds, but\r\n                once the marketing team realized how adorable the character was, I had to evolve this little bear\r\n                into a full character. The name Bru was chosen because it is a pun for the name of the club (Bru\r\n                in Space). And now they reside, surrounded by stars and endless possibility, discovering and\r\n                learning just like the Bruins on Earth.'' -Jeanine Lee, Creator\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
templates['info/our_team'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"officer-card dark\">\r\n                    <div class=\"card-cover\">\r\n                        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"picture") || (depth0 != null ? lookupProperty(depth0,"picture") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"picture","hash":{},"data":data,"loc":{"start":{"line":27,"column":34},"end":{"line":27,"column":45}}}) : helper)))
    + "\"></img>\r\n                        <div class=\"card-caption\">\r\n                            <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":29,"column":32},"end":{"line":29,"column":40}}}) : helper)))
    + "</h3>\r\n                            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"position") || (depth0 != null ? lookupProperty(depth0,"position") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data,"loc":{"start":{"line":30,"column":31},"end":{"line":30,"column":43}}}) : helper)))
    + "</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-detail\">\r\n                        <h2>About Me</h2>\r\n                        <div class=\"officer-about\">\r\n                            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"about") || (depth0 != null ? lookupProperty(depth0,"about") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"about","hash":{},"data":data,"loc":{"start":{"line":36,"column":28},"end":{"line":36,"column":39}}}) : helper))) != null ? stack1 : "")
    + "\r\n                        </div>\r\n                        <a href="
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":38,"column":32},"end":{"line":38,"column":40}}}) : helper)))
    + " target=\"_blank\">\r\n                            <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":39,"column":37},"end":{"line":39,"column":45}}}) : helper)))
    + ">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"project-leads-card light\">\r\n                    <div class=\"title\">\r\n                        <h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":59,"column":28},"end":{"line":59,"column":37}}}) : helper)))
    + "</h1>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <div class=\"person dark\">\r\n                            <h3>Project Manager</h3>\r\n                            <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"PM") || (depth0 != null ? lookupProperty(depth0,"PM") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PM","hash":{},"data":data,"loc":{"start":{"line":64,"column":32},"end":{"line":64,"column":38}}}) : helper)))
    + "</h2>\r\n                            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"PM_description") || (depth0 != null ? lookupProperty(depth0,"PM_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PM_description","hash":{},"data":data,"loc":{"start":{"line":65,"column":31},"end":{"line":65,"column":49}}}) : helper)))
    + "</p>\r\n                        </div>\r\n                        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":67,"column":34},"end":{"line":67,"column":43}}}) : helper)))
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"CE_description") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":68,"column":24},"end":{"line":78,"column":31}}})) != null ? stack1 : "")
    + "                        </div>\r\n                    </div>\r\n                </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"card-content\">\r\n                        <div class=\"person dark\">\r\n                            <h3>Chief Engineer</h3>\r\n                            <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"CE") || (depth0 != null ? lookupProperty(depth0,"CE") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CE","hash":{},"data":data,"loc":{"start":{"line":72,"column":32},"end":{"line":72,"column":38}}}) : helper)))
    + "</h2>\r\n                            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"CE_description") || (depth0 != null ? lookupProperty(depth0,"CE_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CE_description","hash":{},"data":data,"loc":{"start":{"line":73,"column":31},"end":{"line":73,"column":49}}}) : helper)))
    + "</p>\r\n                        </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"image2") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":75,"column":24},"end":{"line":77,"column":31}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"image2") || (depth0 != null ? lookupProperty(depth0,"image2") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"image2","hash":{},"data":data,"loc":{"start":{"line":76,"column":38},"end":{"line":76,"column":48}}}) : helper)))
    + "\">\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"project-description light\">\r\n                <h1 class=\"title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":96,"column":34},"end":{"line":96,"column":43}}}) : helper)))
    + "</h1>\r\n                <div class=\"project-description__content\">\r\n                    <div class=\"image-container\">\r\n                        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"picture") || (depth0 != null ? lookupProperty(depth0,"picture") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"picture","hash":{},"data":data,"loc":{"start":{"line":99,"column":34},"end":{"line":99,"column":45}}}) : helper)))
    + "\">\r\n                    </div>\r\n                    <div class=\"paragraph-container\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":102,"column":24},"end":{"line":102,"column":41}}}) : helper))) != null ? stack1 : "")
    + "\r\n                    </div>\r\n                </div>\r\n            </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"team-wrapper\" class=\"parallax-wrapper\">\r\n    <div class=\"project-header\">\r\n        <div class=\"project-header__title\">\r\n            <h1>Our Team</h1>\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <div class=\"project-intro dark\">\r\n        <h1>Who makes up Bruin Space?</h1>\r\n        <p>It takes all backgrounds to build a spacecraft, and with over 60 members, we've got a wide variety.</p>\r\n    </div>\r\n    <div class=\"project-description light\">\r\n        <h1 class=\"title\">The Officers</h1>\r\n        <div class=\"project-description__content\">\r\n            <!--<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"officersPhoto") || (depth0 != null ? lookupProperty(depth0,"officersPhoto") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"officersPhoto","hash":{},"data":data,"loc":{"start":{"line":17,"column":26},"end":{"line":17,"column":43}}}) : helper)))
    + "\">-->\r\n            <p class=\"paragraph-container\">\r\n                Bruin Space is run by a board of five officers: President, Interal Vice President, External Vice\r\n                President, Vice President of Marketing, and Vice President of Finance.\r\n            </p>\r\n        </div>\r\n        <div class=\"officer-cards__container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"officers") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":43,"column":21}}})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n\r\n    <div class=\"project-description dark\">\r\n        <h1 class=\"title\">Project Leadership</h1>\r\n        <div class=\"project-description__content\">\r\n            <!--<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"officersPhoto") || (depth0 != null ? lookupProperty(depth0,"officersPhoto") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"officersPhoto","hash":{},"data":data,"loc":{"start":{"line":50,"column":26},"end":{"line":50,"column":43}}}) : helper)))
    + "\">-->\r\n            <p class=\"paragraph-container\">\r\n                Each of our projects are guided by a Project Manager, often in conjunction with a Chief Engineer.\r\n            </p>\r\n        </div>\r\n        <div class=\"project-leads-cards__container light\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"projects") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":12},"end":{"line":82,"column":21}}})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n\r\n    <!---/*<div class=\"faculty_support-wrapper\">\r\n        <h1 class=\"title\">Faculty Support</h1>\r\n        <div class=\"project-description__content\">\r\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"officersPhoto") || (depth0 != null ? lookupProperty(depth0,"officersPhoto") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"officersPhoto","hash":{},"data":data,"loc":{"start":{"line":89,"column":22},"end":{"line":89,"column":39}}}) : helper)))
    + "\">\r\n            <p class=\"paragraph-container\">\r\n                And of course, Bruin Space could not exist without tremendous support from the university.\r\n            </p>\r\n        </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"faculty") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":94,"column":8},"end":{"line":106,"column":17}}})) != null ? stack1 : "")
    + "    </div>-->\r\n</div>\r\n";
},"useData":true});
templates['info/sponsor'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"sponsor-wrapper\" class=\"parallax-wrapper\">\r\n    <div class=\"project-header\">\r\n        <div class=\"parallax-image-header parallax-image\"></div>\r\n        <div class=\"project-header__title\">\r\n            <h1>Sponsor Us</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"project-intro dark\">\r\n        <h1>Help us take this to the next level</h1>\r\n    </div>\r\n    <div class=\"parallax-image-header__follow parallax-image\"></div>\r\n    <div class=\"text-image__container light\">\r\n        <h1 class=\"title\">Why Bruin Space?</h1>\r\n        <div class=\"text-image\">\r\n            <video width=\"100%\" autoplay muted loop>\r\n                <source src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"video-link") || (depth0 != null ? lookupProperty(depth0,"video-link") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"video-link","hash":{},"data":data,"loc":{"start":{"line":16,"column":29},"end":{"line":16,"column":43}}}) : helper)))
    + "\" type=\"video/mp4\">\r\n                HTML video is not supported by your browser.\r\n            </video>\r\n            <div class=\"paragraph-container\">\r\n                <ul>\r\n                    <li>We are a young organization, looking for companies to build lasting relationships with.</li>\r\n                    <li>We are rapidly expanding, getting more students involved from all over campus.</li>\r\n                    <li>Plus, space is cool! Help us share our passion!</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"paragraph-container dark\">\r\n        <h1 class=\"title\">Here are the details</h1>\r\n        <div class=\"paragraph-container\">\r\n            <p>Donations to the Bruin Spacecraft Group are tax deductible and are accompanied with the following\r\n                benefits:</p>\r\n            <ul>\r\n                <li>Donors can choose for their gift to be made to a specific project or to Bruin Space directly</li>\r\n                <li>Hardware donations will be assigned a monetary value based off the average market price for the\r\n                    item, and will count towards the donors’ gift total</li>\r\n                <li>Donation totals for funding levels (below) are considered by academic year</li>\r\n                <li>Donors will be given priority for campus events (talks, info-sessions, resume collections,\r\n                    tech-talks, etc.)</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"paragraph-container light\">\r\n        <h3>Bruin Space has five funding levels, each with distinct benefits. Each level also includes benefits of\r\n            those above it.</h3>\r\n    </div>\r\n    <div class=\"sponsorship-level\">\r\n        <h2 class=\"title\"><span style=\"font-weight:bold\">Nova </span> $1 - $999</h2>\r\n        <ul>\r\n            <li>Branding on website, social media and marketing materials</li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"sponsorship-level\">\r\n        <h2 class=\"title\"><span style=\"font-weight:bold\">Nebula </span> $1000 - $2,499</h2>\r\n        <ul>\r\n            <li>Exclusive recruiting access to top students attending UCLA's globally acclaimed engineering school</li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"sponsorship-level\">\r\n        <h2 class=\"title\"><span style=\"font-weight:bold\">Galaxy </span> $2,500 - $4,999</h2>\r\n        <ul>\r\n            <li>Company exclusive recruiting events and info sessions</li>\r\n            <li>Project Updates</li>\r\n            <li>Access to BruinSpace resume books</li>\r\n            <li>Company speaker series</li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"sponsorship-level\">\r\n        <h2 class=\"title\"><span style=\"font-weight: bold\">Cosmos </span> $5,000 - $9,999</h2>\r\n        <ul>\r\n            <li>Lab tours</li>\r\n            <li>design reviews</li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"sponsorship-level\">\r\n        <h2 class=\"title\"><span style=\"font-weight: bold\">Universe </span> $10,000+</h2>\r\n        <ul>\r\n            <li>Logo on select flight hardware</li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"paragraph-container dark\">\r\n        <a class=\"button\" href=\"https://giving.ucla.edu/campaign/donate.aspx?Fund=63852O&Code=M-8295&AutoFN=Y\"\r\n            target=\"_blank\">Become a Sponsor!</a>\r\n        <p>For any inquiries, contact bruinspace@g.ucla.edu to get in touch with us, and we would be happy to\r\n            negotiate the terms of your sponsorship.</p>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
templates['projects/project'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<h2>Chief Engineer</h2>\r\n				<p>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"ce") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</p>\r\n				<p>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"ce") : depth0)) != null ? lookupProperty(stack1,"major") : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"ce") : depth0)) != null ? lookupProperty(stack1,"year") : stack1), depth0))
    + "</p>\r\n				<a href=\"mailto:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"ce") : depth0)) != null ? lookupProperty(stack1,"email") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"ce") : depth0)) != null ? lookupProperty(stack1,"email") : stack1), depth0))
    + "</a>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<div class=\"mission-wrapper\" id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "\">\r\n		<div class=\"title\">\r\n			<h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</h1>\r\n			<h2>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"subtitle") : stack1), depth0))
    + "</h2>\r\n		</div>\r\n		<div class=\"mission-description\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"description_raw") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":51,"column":3},"end":{"line":57,"column":10}}})) != null ? stack1 : "")
    + "		</div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"scrollables") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":2},"end":{"line":78,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"model") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":79,"column":2},"end":{"line":89,"column":9}}})) != null ? stack1 : "")
    + "		<div class=\"mission-description\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"description_2_raw") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":91,"column":3},"end":{"line":97,"column":10}}})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"description_raw") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<p class=\"paragraph-container\">\r\n					"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"description") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n				</p>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div class=\"scrollable-content\">\r\n			<div class=\"scrollable-content__textboxes\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"scrollables") : stack1),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":4},"end":{"line":69,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n			<div class=\"scrollable-content__images\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"scrollables") : stack1),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":72,"column":4},"end":{"line":74,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n			<script type=\"text/javascript\" src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"missionWidgetJS") || (depth0 != null ? lookupProperty(depth0,"missionWidgetJS") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"missionWidgetJS","hash":{},"data":data,"loc":{"start":{"line":76,"column":39},"end":{"line":76,"column":58}}}) : helper)))
    + "\"></script>\r\n		</div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div id=\"mission"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":63,"column":21},"end":{"line":63,"column":31}}}) : helper)))
    + "\" class=\"scrollable-content__textbox\" data-image=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":63,"column":81},"end":{"line":63,"column":91}}}) : helper)))
    + "\">\r\n						<h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":64,"column":10},"end":{"line":64,"column":19}}}) : helper)))
    + "</h2>\r\n						<p>\r\n							"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":66,"column":7},"end":{"line":66,"column":22}}}) : helper)))
    + "\r\n						</p>\r\n					</div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<img id=\"mission"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":73,"column":21},"end":{"line":73,"column":31}}}) : helper)))
    + "_image\" data-image=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":73,"column":51},"end":{"line":73,"column":61}}}) : helper)))
    + "\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"picture") || (depth0 != null ? lookupProperty(depth0,"picture") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"picture","hash":{},"data":data,"loc":{"start":{"line":73,"column":68},"end":{"line":73,"column":79}}}) : helper)))
    + "\">\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<script type=\"module\" src=\"https://unpkg.com/@google/model-viewer/dist/model-viewer.js\"></script>\r\n        <script nomodule src=\"https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js\"></script>\r\n		<script type=\"text/javascript\" src=\""
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"model") : stack1)) != null ? lookupProperty(stack1,"model_loader_js") : stack1), depth0))
    + "\"></script>\r\n		<div class=\"model-container\" style=\"height: 50vh;\">\r\n			<button class=\"button\" onclick=\"load_model("
    + alias1((lookupProperty(helpers,"json")||(depth0 && lookupProperty(depth0,"json"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"model") : stack1),{"name":"json","hash":{},"data":data,"loc":{"start":{"line":84,"column":46},"end":{"line":84,"column":68}}}))
    + ")\">\r\n				<p>Load Model</p>\r\n				<p class=\"warning\">(warning, large file size)</p>\r\n				</button>\r\n		</div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"description_2_raw") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<p class=\"paragraph-container\">\r\n					"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"description_2") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n				</p>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"callToAction_raw") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<p class=\"paragraph-container\">\r\n				"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"callToAction") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n			</p>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div class=\"past-projects dark\">\r\n			<h1 class=\"title\">Past Work</h1>\r\n			<div class=\"past-projects__content\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"past_work") : depth0),{"name":"each","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":116,"column":4},"end":{"line":126,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"text-image__container light "
    + ((stack1 = (lookupProperty(helpers,"if_even")||(depth0 && lookupProperty(depth0,"if_even"))||alias2).call(alias1,(data && lookupProperty(data,"index")),{"name":"if_even","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(27, data, 0),"data":data,"loc":{"start":{"line":117,"column":45},"end":{"line":117,"column":103}}})) != null ? stack1 : "")
    + "\">\r\n				    <h1 class=\"title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":118,"column":26},"end":{"line":118,"column":35}}}) : helper)))
    + "</h1>\r\n				    <div class=\"text-image "
    + ((stack1 = (lookupProperty(helpers,"if_even")||(depth0 && lookupProperty(depth0,"if_even"))||alias2).call(alias1,(data && lookupProperty(data,"index")),{"name":"if_even","hash":{},"fn":container.program(29, data, 0),"inverse":container.program(31, data, 0),"data":data,"loc":{"start":{"line":119,"column":31},"end":{"line":119,"column":91}}})) != null ? stack1 : "")
    + "\">\r\n				      <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"picture") || (depth0 != null ? lookupProperty(depth0,"picture") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"picture","hash":{},"data":data,"loc":{"start":{"line":120,"column":20},"end":{"line":120,"column":31}}}) : helper)))
    + "\">\r\n				      <div class=\"paragraph-container\">\r\n				        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":122,"column":12},"end":{"line":122,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\r\n				      </div>\r\n				    </div>\r\n				  </div>\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "text-left";
},"27":function(container,depth0,helpers,partials,data) {
    return "text-right";
},"29":function(container,depth0,helpers,partials,data) {
    return "image-left";
},"31":function(container,depth0,helpers,partials,data) {
    return "image-right";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"project") || (depth0 != null ? lookupProperty(depth0,"project") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":20}}}) : helper)))
    + "-wrapper\" class=\"parallax-wrapper\">\r\n	<div class=\"project-header\">\r\n		<div class=\"parallax-image-header parallax-image\"></div>\r\n		<div class=\"project-header__title\">\r\n			<h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"project") || (depth0 != null ? lookupProperty(depth0,"project") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project","hash":{},"data":data,"loc":{"start":{"line":5,"column":7},"end":{"line":5,"column":18}}}) : helper)))
    + "</h1>\r\n		</div>\r\n	</div>\r\n	<div class=\"project-intro dark\">\r\n		<h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_title") || (depth0 != null ? lookupProperty(depth0,"project_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_title","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":23}}}) : helper)))
    + "</h1>\r\n		<p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_subtitle") || (depth0 != null ? lookupProperty(depth0,"project_subtitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_subtitle","hash":{},"data":data,"loc":{"start":{"line":10,"column":5},"end":{"line":10,"column":25}}}) : helper)))
    + "</p>\r\n	</div>\r\n	<div class=\"parallax-image-header__follow parallax-image\"></div>\r\n	<div class=\"project-description dark\">\r\n		<h1 class=\"title\">The Project</h1>\r\n		<div class=\"project-description__content\">\r\n			<div class=\"image-container\">\r\n				<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":17,"column":14},"end":{"line":17,"column":22}}}) : helper)))
    + "\">\r\n			</div>\r\n			<p class=\"paragraph-container\">\r\n				"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_description") || (depth0 != null ? lookupProperty(depth0,"project_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_description","hash":{},"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":20,"column":27}}}) : helper)))
    + "\r\n			</p>\r\n		</div>\r\n	</div>\r\n	<div class=\"team-description light\">\r\n		<h1 class=\"title\">The Team</h1>\r\n		<div class=\"team-description__content\">\r\n			<div class=\"image-container\">\r\n				<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"team_photo") || (depth0 != null ? lookupProperty(depth0,"team_photo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"team_photo","hash":{},"data":data,"loc":{"start":{"line":28,"column":14},"end":{"line":28,"column":28}}}) : helper)))
    + "\">\r\n			</div>\r\n			<div class=\"pm-bio paragraph-container\">\r\n				<h2>Project Manager</h2>\r\n				<p>"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"pm") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</p>\r\n				<p>"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"pm") : depth0)) != null ? lookupProperty(stack1,"major") : stack1), depth0))
    + ", "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"pm") : depth0)) != null ? lookupProperty(stack1,"year") : stack1), depth0))
    + "</p>\r\n				<a href=\"mailto:"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"pm") : depth0)) != null ? lookupProperty(stack1,"email") : stack1), depth0))
    + "\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"pm") : depth0)) != null ? lookupProperty(stack1,"email") : stack1), depth0))
    + "</a>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ce") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":4},"end":{"line":40,"column":11}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"mission") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":1},"end":{"line":100,"column":8}}})) != null ? stack1 : "")
    + "	<div class=\"parallax-image-2 parallax-image\"></div>\r\n	<div class=\"call-to-action light\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"callToAction_raw") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data,"loc":{"start":{"line":103,"column":2},"end":{"line":109,"column":9}}})) != null ? stack1 : "")
    + "	</div>\r\n	<div class=\"parallax-image-2__follow parallax-image\"></div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"past_work") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":112,"column":1},"end":{"line":129,"column":8}}})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});
templates['test/test'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"description_raw") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <p class=\"paragraph-container\">\r\n                "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"description") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n            </p>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <button slot=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"slot") || (depth0 != null ? lookupProperty(depth0,"slot") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slot","hash":{},"data":data,"loc":{"start":{"line":53,"column":30},"end":{"line":53,"column":38}}}) : helper)))
    + "\" data-position=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"position") || (depth0 != null ? lookupProperty(depth0,"position") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data,"loc":{"start":{"line":53,"column":55},"end":{"line":53,"column":67}}}) : helper)))
    + "\" data-normal=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"normal") || (depth0 != null ? lookupProperty(depth0,"normal") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"normal","hash":{},"data":data,"loc":{"start":{"line":53,"column":82},"end":{"line":53,"column":92}}}) : helper)))
    + "\">\r\n                    <div id=\"annotation\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":54,"column":41},"end":{"line":54,"column":49}}}) : helper)))
    + "</div>\r\n                </button>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"mission-wrapper\" id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "\">\r\n    <div class=\"title\">\r\n        <h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</h1>\r\n        <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"subtitle") : stack1), depth0))
    + "</p>\r\n    </div>\r\n    <div class=\"mission-description\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"description_raw") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":13,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n    <script type=\"module\" src=\"https://unpkg.com/@google/model-viewer/dist/model-viewer.js\"></script>\r\n    <script nomodule src=\"https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js\"></script>\r\n    <style>\r\n        button{\r\n            display: block;\r\n            width: 20px;\r\n            height: 20px;\r\n            border-radius: 10px;\r\n            border: none;\r\n            background-color: blue;\r\n            box-sizing: border-box;\r\n        }\r\n\r\n        button[slot=\"hotspot-hand\"]{\r\n            --min-hotspot-opacity: 0;\r\n            background-color: red;\r\n        }\r\n\r\n        button[slot=\"hotspot-foot\"]:not([data-visible]) {\r\n            background-color: transparent;\r\n            border: 3px solid blue;\r\n        }\r\n\r\n        #annotation{\r\n            background-color: #888888;\r\n            position: absolute;\r\n            transform: translate(10px, 10px);\r\n            border-radius: 10px;\r\n            padding: 10px;\r\n        }\r\n        /* This keeps child nodes hidden while the element loads */\r\n        :not(:defined) > * {\r\n            display: none;\r\n        }\r\n        </style>\r\n    <div class=\"model-container\" style=\"height: 50vh;justify-content:center;\">\r\n        <model-viewer camera-controls src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"modelURL") : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"modelAlt") : stack1), depth0))
    + "\" style=\"width: 100%; height:100%;\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"annotations") : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":12},"end":{"line":56,"column":21}}})) != null ? stack1 : "")
    + "        </model-viewer>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
})();