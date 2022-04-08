(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['_404'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"_404-wrapper\">\n    <h1>Oops... Looks like the page you are searching for does not exist!</h1>\n    <h2>Let's get you back to <a href=\"http://bruinspace.com\">safety</a></h2>\n</div>\n";
},"useData":true});
templates['footer'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <a href="
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":3,"column":16},"end":{"line":3,"column":24}}}) : helper)))
    + " target=\"_blank\">\n            <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":4,"column":21},"end":{"line":4,"column":29}}}) : helper)))
    + ">\n        </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"social-media-links\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"socialMedia") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":6,"column":13}}})) != null ? stack1 : "")
    + "</div>\n<!-- Begin MailChimp Signup Form -->\n<div id=\"mc_embed_signup\">\n    <form action=\"https://facebook.us14.list-manage.com/subscribe/post?u=a0f4954a051d300244e35603a&amp;id=635c5f1926\"\n        method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\"\n        target=\"_blank\" novalidate>\n        <h3>Don't get lost in orbit! Sign up for our newsletter: </h3>\n        <div id=\"mc_embed_signup_scroll\">\n            <!---\n            <div class=\"mc-field-group\">\n                <label for=\"mce-EMAIL\">Email Address </label>\n                <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\">\n            </div>\n            <div id=\"mce-responses\" class=\"clear\">\n                <div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\n                <div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\n            </div>\n            -->\n            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n            <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\"\n                name=\"b_a0f4954a051d300244e35603a_fafda91946\" tabindex=\"-1\" value=\"\"></div>\n            <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\"\n                class=\"button\"></div>\n        </div>\n        <div class=\"contact\">\n            <h3>Questions?</h3>\n            <p>Contact us on <a href=\"https://www.facebook.com/uclaBruinSpace/\">Facebook</a>, at\n                <a href=\"mailto:uclaBruinSpace@gmail.com\">uclaBruinSpace@gmail.com</a>, or come visit our lab\n                in Boelter 8761!</p>\n        </div>\n    </form>\n</div>\n<!--End mc_embed_signup-->\n";
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
    + "></script>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<title>Bruin Spacecraft Group</title>\n\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\"\n    integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\"\n    crossorigin=\"anonymous\">\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"\n    integrity=\"sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T\"\n    crossorigin=\"anonymous\"></script>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"\n    integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\"\n    crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/css?family=Montserrat|Oswald|Roboto\" rel=\"stylesheet\">\n\n<!--\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"scripts") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":17,"column":9}}})) != null ? stack1 : "")
    + "-->\n\n<link rel=\"stylesheet\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"animate") || (depth0 != null ? lookupProperty(depth0,"animate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"animate","hash":{},"data":data,"loc":{"start":{"line":20,"column":29},"end":{"line":20,"column":40}}}) : helper)))
    + "\">\n<link rel=\"stylesheet\" type=\"text/css\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"main") || (depth0 != null ? lookupProperty(depth0,"main") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"main","hash":{},"data":data,"loc":{"start":{"line":21,"column":45},"end":{"line":21,"column":53}}}) : helper)))
    + "\">\n\n<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"favicon") || (depth0 != null ? lookupProperty(depth0,"favicon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data,"loc":{"start":{"line":23,"column":51},"end":{"line":23,"column":62}}}) : helper)))
    + "/apple-touch-icon.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"favicon") || (depth0 != null ? lookupProperty(depth0,"favicon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data,"loc":{"start":{"line":24,"column":54},"end":{"line":24,"column":65}}}) : helper)))
    + "/favicon-32x32.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"favicon") || (depth0 != null ? lookupProperty(depth0,"favicon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data,"loc":{"start":{"line":25,"column":54},"end":{"line":25,"column":65}}}) : helper)))
    + "/favicon-16x16.png\">\n<link rel=\"manifest\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"favicon") || (depth0 != null ? lookupProperty(depth0,"favicon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data,"loc":{"start":{"line":26,"column":27},"end":{"line":26,"column":38}}}) : helper)))
    + "/site.webmanifest\">\n<link rel=\"mask-icon\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"favicon") || (depth0 != null ? lookupProperty(depth0,"favicon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favicon","hash":{},"data":data,"loc":{"start":{"line":27,"column":28},"end":{"line":27,"column":39}}}) : helper)))
    + "/safari-pinned-tab.svg\" color=\"#5bbad5\">\n\n<meta charset=\"utf-8\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n<meta name=\"viewport\" content=\"width=device-width, height=device-height, initial-scale=1\">\n<meta name=\"theme-color\" content="
    + alias4(((helper = (helper = lookupProperty(helpers,"theme_color") || (depth0 != null ? lookupProperty(depth0,"theme_color") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"theme_color","hash":{},"data":data,"loc":{"start":{"line":32,"column":33},"end":{"line":32,"column":48}}}) : helper)))
    + "/>\n";
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
    + "></li>\n";
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
    + "\">\n                        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":64,"column":34},"end":{"line":64,"column":43}}}) : helper)))
    + "\">\n                        <div class=\"carousel-caption\">\n                            <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":66,"column":32},"end":{"line":66,"column":41}}}) : helper)))
    + "</h2>\n                            <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":67,"column":37},"end":{"line":67,"column":45}}}) : helper)))
    + "\"><h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"subtitle") || (depth0 != null ? lookupProperty(depth0,"subtitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtitle","hash":{},"data":data,"loc":{"start":{"line":67,"column":51},"end":{"line":67,"column":63}}}) : helper)))
    + "</h3></a>\n                        </div>\n                    </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a class=\"card\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":86,"column":38},"end":{"line":86,"column":46}}}) : helper)))
    + "\">\n                    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":87,"column":30},"end":{"line":87,"column":39}}}) : helper)))
    + "\">\n                    <div class=\"card-container\">\n                        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":89,"column":34},"end":{"line":89,"column":42}}}) : helper)))
    + "\"></img>\n                        <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":90,"column":28},"end":{"line":90,"column":37}}}) : helper)))
    + "</h3>\n                        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"subtitle") || (depth0 != null ? lookupProperty(depth0,"subtitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtitle","hash":{},"data":data,"loc":{"start":{"line":91,"column":27},"end":{"line":91,"column":39}}}) : helper)))
    + "</p>\n                    </div>\n                </a>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div>\n                        <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":137,"column":33},"end":{"line":137,"column":40}}}) : helper)))
    + "\" target=\"_blank\">\n                            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":138,"column":38},"end":{"line":138,"column":46}}}) : helper)))
    + "\">\n                        </a>\n                    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"index-wrapper\">\n    <div class=\"video\">\n        <div style=\"position:relative;height:100%;z-index:-1\">\n            <!--\n            <iframe width=\"100%\"\n                src=\"https://www.youtube.com/embed/QGWQyhOfZBY?autoplay=1;rel=0&amp;controls=0&amp;showinfo=0\"\n                frameborder=\"0\" allow=\"autoplay; encrypted-media\"\n                style=\"position:absolute;width:100%;height:100%;left:0\" allowfullscreen></iframe>\n            -->\n            <!--\n            <iframe width=\"100%\"\n                src=\"https://www.youtube.com/embed/OGKqUmk_g-0?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0&amp;mute=1&amp;loop=1&playlist=OGKqUmk_g-0\"\n                frameborder=\"0\" allow=\"autoplay; encrypted-media\" style=\"width:100%;\" allowfullscreen></iframe>\n            -->\n            <video width=\"100%\" autoplay muted loop>\n                <source src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"video-link") || (depth0 != null ? lookupProperty(depth0,"video-link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"video-link","hash":{},"data":data,"loc":{"start":{"line":16,"column":29},"end":{"line":16,"column":43}}}) : helper)))
    + "\" type=\"video/mp4\">\n                HTML video is not supported by your browser.\n            </video>\n\n        </div>\n        <div class=\"caption__container\">\n            <div class=\"caption\">\n                <h1>Welcome</h1>\n                <h3>to Bruin Spacecraft Group</h3>\n            </div>\n        </div>\n        <div class=\"scrollDown\" onclick=\"scrollDown()\">	\n            <svg class=\"arrows\">\n                <path class=\"a1\" d=\"M0 0 L30 20 L60 0\"></path>\n                <path class=\"a2\" d=\"M0 15 L30 35 L60 15\"></path>\n                <path class=\"a3\" d=\"M0 30 L30 50 L60 30\"></path>\n            </svg>\n        </div>\n        <script>\n            function scrollDown(){\n                //console.log(\"HELP\")\n                $(\"html, body\").animate({\n                    scrollTop: $('#mission').offset().top}, 1000)\n            }\n        </script>\n    </div>\n\n    <div class=\"main-content-wrapper\">\n        <div id=\"mission\" class=\"paragraph-container light\">\n            <h1>Our Mission</h1>\n            <p>Bruin Spacecraft Group was founded with the intent of providing a creative and supportive environment\n                for space mission design and development at UCLA. Here, students of all backgrounds can come together,\n                united by a passion for space, to do something amazing. Here, we aim to give students the opportunity\n                to acquire the skills necessary to become leaders in the space industry.</p>\n        </div>\n        <!-- NOT READY\n        <div class=\"carousel-wrapper\">\n            <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n                <!-- Indicators >\n                <ul class=\"carousel-indicators\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"slides") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":20},"end":{"line":58,"column":29}}})) != null ? stack1 : "")
    + "                </ul>\n                <!-- Slides TODO: add img alts?>\n                <div class=\"carousel-inner\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"slides") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":16},"end":{"line":70,"column":25}}})) != null ? stack1 : "")
    + "                </div>\n                <!-- Left and right controls >\n                <a class=\"carousel-control-prev\" href=\"#myCarousel\" data-slide=\"prev\">\n                    <span class=\"carousel-control-prev-icon\"></span>\n                </a>\n                <a class=\"carousel-control-next\" href=\"#myCarousel\" data-slide=\"next\">\n                    <span class=\"carousel-control-next-icon\"></span>\n                </a>\n            </div>\n        </div> -->\n\n        <div id=\"whatWeDo\" class=\"dark\">\n            <h1 class=\"title\">What We Do</h1>\n            <div class=\"flex-container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"cards") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":16},"end":{"line":94,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n        <div class=\"parallax-image-header parallax-image\"></div>\n        <div id=\"counters\" class=\"dark paragraph-container\">\n            <div class=\"countBox\">\n                <div id=\"memberCounter\" class=\"counter\"></div>\n                <h2>Members</h2>\n            </div>\n            <div class=\"countBox\">\n                <div id=\"projectCounter\" class=\"counter\"></div>\n                <h2>Projects</h2>\n            </div>\n            <div class=\"countBox\">\n                <div id=\"ageCounter\" class=\"counter\"></div>\n                <h2>Age of Organization</br>(Years)</h2>\n            </div>\n        </div>\n        <div class=\"parallax-image-header__follow parallax-image\"></div>\n        <div id=\"join\" class=\"paragraph-container light\">\n            <h1>How to Join</h1>\n            <p>\n                Bruin Spacecraft Group is open to any and all majors and minors. All we ask is you come with a\n                passion for space!\n            </p>\n            <p>\n                You don't need to be an engineer to be on a project, and you don't need to study economics to join\n                the finance team.\n            </p>\n            <p>\n                If you want to join us here at Bruin Space, check out the <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"join") || (depth0 != null ? lookupProperty(depth0,"join") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"join","hash":{},"data":data,"loc":{"start":{"line":124,"column":83},"end":{"line":124,"column":91}}}) : helper)))
    + "\">Join</a> page for\n                more information.\n            </p>\n        </div>\n        <div class=\"parallax-image-2 parallax-image\"></div>\n        <div id=\"sponsors\" class=\"paragraph-container light\">\n            <h1>Our Sponsors</h1>\n            <p>\n                The work we do at Bruin Space is made possible in part due to our generous sponsors:\n            </p>\n            <div class=\"sponsor-logos\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"sponsors") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":135,"column":16},"end":{"line":141,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n        <div class=\"parallax-image-2__follow parallax-image\"></div>\n    </div>\n</div>\n";
},"useData":true});
templates['mailingListModal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"mailing-list\">\n    <div id=\"myBtn\" class=\"mailing-list-icon\">\n        <img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":3,"column":18},"end":{"line":3,"column":26}}}) : helper)))
    + "\" alt=\"thing\">\n    </div>\n    <!-- The Modal -->\n    <div id=\"myModal\" class=\"mailing-list-modal\">\n\n        <!-- Modal content -->\n        <div class=\"mailing-list-modal-content\">\n            <div class=\"mailing-list-modal-header\">\n                <span class=\"mailing-list-close\">&times;</span>\n                <h2>Don't get lost in orbit!</h2>\n            </div>\n            <div class=\"mailing-list-modal-body\">\n                <p>Join our mailing list and stay up to date on all Bruin Space club happenings!</p>\n                <form action=\"https://facebook.us14.list-manage.com/subscribe/post?u=a0f4954a051d300244e35603a&amp;id=635c5f1926\"\n                    method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\"\n                    target=\"_blank\" novalidate>\n                    <div id=\"mc_embed_signup_scroll\">\n                        <div class=\"mc-field-group\">\n                            <label for=\"mce-EMAIL\">Email Address </label>\n                            <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\">\n                        </div>\n                        <div id=\"mce-responses\" class=\"clear\">\n                            <div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\n                            <div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\n                        </div>\n                        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n                        <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\"\n                            name=\"b_a0f4954a051d300244e35603a_fafda91946\" tabindex=\"-1\" value=\"\"></div>\n                        <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\"\n                            id=\"mc-embedded-subscribe\" class=\"button\"></div>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n    </div>\n</div>\n";
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
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a class=\"brand\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"home") || (depth0 != null ? lookupProperty(depth0,"home") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home","hash":{},"data":data,"loc":{"start":{"line":1,"column":23},"end":{"line":1,"column":31}}}) : helper)))
    + "\">\n    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":2,"column":14},"end":{"line":2,"column":22}}}) : helper)))
    + "\">\n</a>\n<nav class=\"site-nav\" role=\"navigation\">\n    <ul class=\"site-nav__list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"links") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":8,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\n</nav>\n<button class=\"mob-nav__burger\" id=\"MobMenuToggle\" onclick=\"\">\n    <img id=\"burger\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"burger") || (depth0 != null ? lookupProperty(depth0,"burger") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"burger","hash":{},"data":data,"loc":{"start":{"line":12,"column":26},"end":{"line":12,"column":36}}}) : helper)))
    + "\">\n</button>\n";
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
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <ul id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":8,"column":16},"end":{"line":8,"column":22}}}) : helper)))
    + "\" class=\"mob-nav__menu mob-nav__menu--children mob-nav__menu--closed\"\n            data-parent=\"MobNavMain\"data-menu=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":9,"column":47},"end":{"line":9,"column":53}}}) : helper)))
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"subMenuLinks") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":12,"column":21}}})) != null ? stack1 : "")
    + "        </ul>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"element") || (depth0 != null ? lookupProperty(depth0,"element") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"element","hash":{},"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":11,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<nav class=\"mob-nav mob-nav--closed\" id=\"MobMenu\">\n    <ul id=\"MobNavMain\" data-menu=\"menu0\" class=\"mob-nav__menu mob-nav__menu--parent\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"links") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":5,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"subMenus") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":14,"column":13}}})) != null ? stack1 : "")
    + "</nav>\n";
},"useData":true});
templates['notif'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"notif-banner\">\n    <span id=\"close-banner\" onclick=\"close_notif()\">&times;</span>\n    <script>\n        function close_notif() {\n            document.getElementsByClassName('notif-banner')[0].style.display = \"none\";\n        }\n    </script>\n    <div class=\"notif-container\">\n        <p class=\"notif-text\">\n            Reminder: Don't miss our first General Meeting <a href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"notif-link") || (depth0 != null ? lookupProperty(depth0,"notif-link") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"notif-link","hash":{},"data":data,"loc":{"start":{"line":10,"column":68},"end":{"line":10,"column":82}}}) : helper)))
    + "\">Wedensday, October 2nd</a>!\n        </p>\n    </div>\n</div>\n";
},"useData":true});
templates['articles/articlesHome'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"article-preview dark\">\n            <div class=\"article-preview__text\">\n                <a href="
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":9,"column":24},"end":{"line":9,"column":34}}}) : helper)))
    + "><h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":9,"column":39},"end":{"line":9,"column":48}}}) : helper)))
    + "</h2></a>\n                <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":10,"column":20},"end":{"line":10,"column":30}}}) : helper)))
    + "</h3>\n                <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"preview") || (depth0 != null ? lookupProperty(depth0,"preview") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"preview","hash":{},"data":data,"loc":{"start":{"line":11,"column":19},"end":{"line":11,"column":30}}}) : helper)))
    + "</p>\n            </div>\n            <div class=\"article-preview__image\">\n                <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"picture") || (depth0 != null ? lookupProperty(depth0,"picture") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"picture","hash":{},"data":data,"loc":{"start":{"line":14,"column":26},"end":{"line":14,"column":37}}}) : helper)))
    + "\">\n            </div>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"page-header\">\n    <h1>Articles Home</h1>\n    <h3>Check out these cool articles on space policy</h3>\n</div>\n<div class=\"article-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"articles") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":17,"column":13}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
templates['info/admin'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"admin-wrapper\" class=\"parallax-wrapper\">\n    <div class=\"project-header\">\n        <div class=\"parallax-image-header parallax-image\"></div>\n        <div class=\"project-header__title\">\n            <h1>Admin</h1>\n        </div>\n    </div>\n    <div class=\"project-intro dark\">\n        <h1>Go behind the scenes</h1>\n        <p>Our science and engineering projects wouldn't be possible without the incredible work put in by our admin\n            teams: internal affairs, external affairs, finance, and marketing. These teams not only enable the\n            projects to thrive, but they facilitate communication and help us engage with our community.</p>\n    </div>\n    <div class=\"parallax-image-header__follow parallax-image\"></div>\n    <div class=\"text-image__container light text-left\">\n        <h1 class=\"title\" id=\"marketing\">Marketing</h1>\n        <div class=\"text-image image-left\">\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"marketing") || (depth0 != null ? lookupProperty(depth0,"marketing") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"marketing","hash":{},"data":data,"loc":{"start":{"line":18,"column":22},"end":{"line":18,"column":35}}}) : helper)))
    + "\">\n            <div class=\"paragraph-container\">\n                <p>Our marketing team focuses on brand management and content generation, working to make the\n                    science and engineering accessible to the public. We hope to share our passion for space\n                    in a way that inspires and excites those around us.</p>\n                <p>Responsibilities</p>\n                <ul>\n                    <li>Manage social media accounts</li>\n                    <li>Graphic design and media creation</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"text-image__container dark\">\n        <h1 class=\"title\" id=\"finance\">Finance</h1>\n        <div class=\"text-image\">\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"finance") || (depth0 != null ? lookupProperty(depth0,"finance") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"finance","hash":{},"data":data,"loc":{"start":{"line":34,"column":22},"end":{"line":34,"column":33}}}) : helper)))
    + "\">\n            <div class=\"paragraph-container\">\n                <p>Our finance team tracks the organization's accounts and works to secure additional funding.</p>\n                <p>Responsibilities</p>\n                <ul>\n                    <li>Manage accounts with internal spreadsheets and communicate with campus account offices</li>\n                    <li>Draft funding proposals</li>\n                    <li>Communicate with cooroprate sponsors and facilitate donations</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"text-image__container light\">\n        <h1 class=\"title\" id=\"internalAffairs\">Internal Affairs</h1>\n        <div class=\"text-image image-left\">\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"internalAffairs") || (depth0 != null ? lookupProperty(depth0,"internalAffairs") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalAffairs","hash":{},"data":data,"loc":{"start":{"line":49,"column":22},"end":{"line":49,"column":41}}}) : helper)))
    + "\">\n            <div class=\"paragraph-container\">\n                <p>Our internal affairs team, under the direction of the Internal Vice President, seeks to facilitate\n                    social and developmental programs within the organization.</p>\n                <p>In addition to creating a workshop curriculum for incoming members, the team organizes social\n                    events like BBQs and rocket launch viewing parties.</p>\n                <p>Responsibilities</p>\n                <ul>\n                    <li>Coordinating large groups of people</li>\n                    <li>Creating interest forms and engaging members</li>\n                    <li>Organizing educational workshops</li>\n            </div>\n        </div>\n    </div>\n    <div class=\"text-image__container dark\">\n        <h1 class=\"title\" id=\"externalAffairs\">External Affairs</h1>\n        <div class=\"text-image\">\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"externalAffairs") || (depth0 != null ? lookupProperty(depth0,"externalAffairs") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"externalAffairs","hash":{},"data":data,"loc":{"start":{"line":66,"column":22},"end":{"line":66,"column":41}}}) : helper)))
    + "\">\n            <div class=\"paragraph-container\">\n                <p>The external affairs team is focused on corporate outreach, community engagement, and\n                    recruitment.</p>\n                <p>Responsibilities</p>\n                <ul>\n                    <li>Contacting professionals in the aerospace industry and building mutually beneficial\n                        relationships</li>\n                    <li>Coordinating with UCLA organizations to participate in public outreach events such as\n                        Exploring Your Universe, Engineer's Week, and more.</li>\n                    <li>Passing out flyers and stationing booths at recruitment events like the Enormous Activities\n                        Fair</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n";
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
    + "\">\n                <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":16,"column":26},"end":{"line":16,"column":35}}}) : helper)))
    + "\">\n                <div class=\"card-container\">\n                    <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":18,"column":24},"end":{"line":18,"column":33}}}) : helper)))
    + "</h3>\n                </div>\n            </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<main class=\"animatedSlow fadeIn\">\n    <div id=\"forms-wrapper\">\n        <div class=\"project-header\">\n            <div class=\"parallax-image-header parallax-image\"></div>\n            <div class=\"project-header__title\">\n                <h1>Forms</h1>\n            </div>\n        </div>\n        <div class=\"project-intro dark\">\n            <h1>For all your Bruin Space related forms!</h1>\n        </div>\n        <div class=\"parallax-image-header__follow parallax-image\"></div>\n        <div class=\"form-cards__container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"forms") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":21,"column":21}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</main>\n";
},"useData":true});
templates['info/join'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"team-wrapper\" class=\"parallax-wrapper\">\n    <div class=\"project-header\">\n        <div class=\"parallax-image-header parallax-image\"></div>\n        <div class=\"project-header__title\">\n            <h1>Join the Team</h1>\n        </div>\n    </div>\n    <div class=\"project-intro dark\">\n        <h1>Learn how you can get involved</h1>\n        <p>Scientist or artist, policy-maker or engineer, our only requirement is a passion for space.</p>\n    </div>\n    <div class=\"parallax-image-header__follow parallax-image\"></div>\n    <div class=\"text-image__container dark text-left\">\n        <h1 class=\"title\">Find your Place</h1>\n        <div class=\"text-image image-left\">\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"yourPlace") || (depth0 != null ? lookupProperty(depth0,"yourPlace") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"yourPlace","hash":{},"data":data,"loc":{"start":{"line":16,"column":22},"end":{"line":16,"column":35}}}) : helper)))
    + "\">\n            <div class=\"paragraph-container\">\n                <p>There are many opportunities at Bruin Space, ranging from science and engineering to finance, art,\n                    and public relations.</p>\n                <ul>\n                    <li>For those interested in spacecraft engineering, consider joining "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"overseer") || (depth0 != null ? lookupProperty(depth0,"overseer") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"overseer","hash":{},"data":data,"loc":{"start":{"line":21,"column":89},"end":{"line":21,"column":103}}}) : helper))) != null ? stack1 : "")
    + "\n                        or "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"rapid") || (depth0 != null ? lookupProperty(depth0,"rapid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rapid","hash":{},"data":data,"loc":{"start":{"line":22,"column":27},"end":{"line":22,"column":38}}}) : helper))) != null ? stack1 : "")
    + ".</li>\n                    <li>If you want to develop industry contacts, handle corporate relations, and public outreach\n                        efforts, consider our "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"externalAffairs") || (depth0 != null ? lookupProperty(depth0,"externalAffairs") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"externalAffairs","hash":{},"data":data,"loc":{"start":{"line":24,"column":46},"end":{"line":24,"column":67}}}) : helper))) != null ? stack1 : "")
    + " team.</li>\n                    <li>For experience managing accounts and applying for funds, join the "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"finance") || (depth0 != null ? lookupProperty(depth0,"finance") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"finance","hash":{},"data":data,"loc":{"start":{"line":25,"column":90},"end":{"line":25,"column":103}}}) : helper))) != null ? stack1 : "")
    + " team.</li>\n                    <li>If you are looking for a way to express your passion for space through art or share your\n                        excitement with the world, check out our "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"marketing") || (depth0 != null ? lookupProperty(depth0,"marketing") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"marketing","hash":{},"data":data,"loc":{"start":{"line":27,"column":65},"end":{"line":27,"column":80}}}) : helper))) != null ? stack1 : "")
    + " team.</li>\n                </ul>\n<!--                <a class=\"openings-link\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"openingsLink") || (depth0 != null ? lookupProperty(depth0,"openingsLink") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"openingsLink","hash":{},"data":data,"loc":{"start":{"line":29,"column":51},"end":{"line":29,"column":67}}}) : helper)))
    + "\">-->\n<!--                    Click here to see specific roles we are looking to fill.-->\n<!--                </a>-->\n            </div>\n        </div>\n    </div>\n    <div class=\"text-image__container light\">\n        <h1 class=\"title\">How to Join</h1>\n        <div class=\"text-image\">\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"join") || (depth0 != null ? lookupProperty(depth0,"join") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"join","hash":{},"data":data,"loc":{"start":{"line":38,"column":22},"end":{"line":38,"column":30}}}) : helper)))
    + "\">\n            <div class=\"paragraph-container\">\n                <p>Here are a few things you need to do to get started:</p>\n                <ul>\n                    <li>Join our <a href=\"https://discord.gg/jqGc7pt\">Discord server</a>, and consider downloading\n                        <a href=\"https://discord.com/\">the app</a>.</li>\n                    <!--li>Join our <a href=\"#mc_embed_signup\">mailing list</a>, for biweekly updates and\n                        opportunities.</li-->\n                    <li>Complete <a href=\"https://worksafe.ucla.edu/UCLA/Programs/Standard/Control/elmLearner.wml?portalid=Learnerweb\">\n                            lab safety training\n                        </a> through UCLA's EH&amp;S department.</li>\n                    <li>Attend a meeting!\n                        <ul>\n                            <li>General meetings are a perfect introduction to the organization as a whole, but we\n                                encourage you to attend a project meeting and get a firsthand look at what it is we do.</li>\n                            <li>For a schedule of all Bruin Space meetings, check out our "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"calendar") || (depth0 != null ? lookupProperty(depth0,"calendar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"calendar","hash":{},"data":data,"loc":{"start":{"line":53,"column":90},"end":{"line":53,"column":104}}}) : helper))) != null ? stack1 : "")
    + ".</li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n";
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
    + "\" class=\"job-card\">\n                        <div class=\"job-card-header\">\n                            <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":34,"column":32},"end":{"line":34,"column":41}}}) : helper)))
    + "</h2>\n                            <div class=\"tags\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"tags") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":32},"end":{"line":38,"column":41}}})) != null ? stack1 : "")
    + "                            </div>\n                        </div>\n                        <div class=\"job-card-content\">\n                            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":42,"column":31},"end":{"line":42,"column":46}}}) : helper)))
    + "</p>\n                        </div>\n                    </div>\n                    <div id=\"job-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":45,"column":33},"end":{"line":45,"column":43}}}) : helper)))
    + "-modal\" class=\"job-card-modal\">\n                        <div class=\"job-card-header\">\n                            <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":47,"column":32},"end":{"line":47,"column":41}}}) : helper)))
    + "</h2>\n                            <div class=\"tags\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"tags") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":32},"end":{"line":51,"column":41}}})) != null ? stack1 : "")
    + "                            </div>\n                        </div>\n                        <div class=\"job-card-content\">\n                            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":55,"column":31},"end":{"line":55,"column":46}}}) : helper)))
    + "</p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"required-skills") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":28},"end":{"line":65,"column":35}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"required-skills") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":28},"end":{"line":75,"column":35}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"link") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":76,"column":28},"end":{"line":80,"column":35}}})) != null ? stack1 : "")
    + "                        </div>\n                    </div>\n";
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
    + "</p></div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <div class=\"job-card-required-skills\">\n                                    <h3>Required Skills</h3>\n                                    <ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"required-skills") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":40},"end":{"line":62,"column":49}}})) != null ? stack1 : "")
    + "                                    </ul>\n                                </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                            <li>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"skill") || (depth0 != null ? lookupProperty(depth0,"skill") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"skill","hash":{},"data":data,"loc":{"start":{"line":61,"column":48},"end":{"line":61,"column":57}}}) : helper)))
    + "</li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <div class=\"job-card-reccomended-skills\">\n                                    <h3>Recommended Skills (or skills you will learn)</h3>\n                                    <ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"recommended-skills") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":40},"end":{"line":72,"column":49}}})) != null ? stack1 : "")
    + "                                    </ul>\n                                </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <div class=\"job-card-link\">\n                                    <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":78,"column":45},"end":{"line":78,"column":53}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"linkText") || (depth0 != null ? lookupProperty(depth0,"linkText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkText","hash":{},"data":data,"loc":{"start":{"line":78,"column":55},"end":{"line":78,"column":67}}}) : helper)))
    + "</a>\n                                </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"openings-wrapper\" class=\"parallax-wrapper\">\n    <div class=\"project-header\">\n        <div class=\"parallax-image-header parallax-image\"></div>\n        <div class=\"project-header__title\">\n            <h1>Open Positions</h1>\n        </div>\n    </div>\n    <div class=\"project-intro dark\">\n        <h1>These are the roles we are looking to fill</h1>\n        <p>If interested, please reach out to the listed point of contact or follow the link to apply.</p>\n    </div>\n    <div class=\"parallax-image-header__follow parallax-image\"></div>\n    <div class=\"project-description light\">\n        <div class=\"job-search-container\">\n            <div class=\"job-search-header\">\n                <h2>Positions</h2>\n                <!-- <div class=\"filter-container\"> -->\n                    <div class=\"select-div\" style=\"width:200px;\">\n                        <select name=\"Project\">\n                            <option value=\"all\">All</option>\n                            <option value=\"reach\">Reach</option>\n                            <option value=\"rapid\">Rapid</option>\n                            <option value=\"overseer\">Overseer</option>\n                            <option value=\"admin\">Admin</option>\n                        </select>\n                    </div>\n                    <!-- <div class=\"clear-filter\" id=\"clear\">&times;</div> -->\n                <!-- </div> -->\n            </div>\n            <div class=\"job-card-container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"jobs") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":16},"end":{"line":83,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
templates['info/our_mascot'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"mascot-wrapper\" class=\"parallax-wrapper\">\n    <div class=\"project-header\">\n        <div class=\"parallax-image-header parallax-image\"></div>\n        <div class=\"project-header__title\">\n            <h1>Our Mascot</h1>\n        </div>\n    </div>\n    <div class=\"project-intro dark\">\n        <h1>Bru in Space</h1>\n    </div>\n    <div class=\"parallax-image-header__follow parallax-image\"></div>\n    <div class=\"project-description dark\">\n        <h1 class=\"title\"></h1>\n        <div class=\"project-description__content\">\n            <div class=\"image-container\"><img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":15,"column":51},"end":{"line":15,"column":59}}}) : helper)))
    + "\"></div>\n            <p class=\"paragraph-container\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"project_description") || (depth0 != null ? lookupProperty(depth0,"project_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_description","hash":{},"data":data,"loc":{"start":{"line":16,"column":44},"end":{"line":16,"column":67}}}) : helper)))
    + " </p>\n        </div>\n        <div class=\"team-description light\">\n            <p class=\"title\">\n                \"The creation of Bru was actually an accident, just like many other wonderful space discoveries!\n                They were supposed to be a funny little background doodle in presentation slide backgrounds, but\n                once the marketing team realized how adorable the character was, I had to evolve this little bear\n                into a full character. The name Bru was chosen because it is a pun for the name of the club (Bru\n                in Space). And now they reside, surrounded by stars and endless possibility, discovering and\n                learning just like the Bruins on Earth.'' -Jeanine Lee, Creator\n            </p>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
templates['info/our_team'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"officer-card dark\">\n                    <div class=\"card-cover\">\n                        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"picture") || (depth0 != null ? lookupProperty(depth0,"picture") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"picture","hash":{},"data":data,"loc":{"start":{"line":26,"column":34},"end":{"line":26,"column":45}}}) : helper)))
    + "\"></img>\n                        <div class=\"card-caption\">\n                            <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":28,"column":32},"end":{"line":28,"column":40}}}) : helper)))
    + "</h3>\n                            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"position") || (depth0 != null ? lookupProperty(depth0,"position") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data,"loc":{"start":{"line":29,"column":31},"end":{"line":29,"column":43}}}) : helper)))
    + "</p>\n                        </div>\n                    </div>\n                    <div class=\"card-detail\">\n                        <h2>About Me</h2>\n                        <div class=\"officer-about\">\n                            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"about") || (depth0 != null ? lookupProperty(depth0,"about") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"about","hash":{},"data":data,"loc":{"start":{"line":35,"column":28},"end":{"line":35,"column":39}}}) : helper))) != null ? stack1 : "")
    + "\n                        </div>\n                        <a href="
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":37,"column":32},"end":{"line":37,"column":40}}}) : helper)))
    + " target=\"_blank\">\n                            <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":38,"column":37},"end":{"line":38,"column":45}}}) : helper)))
    + ">\n                        </a>\n                    </div>\n                </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"project-leads-card light\">\n                    <div class=\"title\">\n                        <h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":58,"column":28},"end":{"line":58,"column":37}}}) : helper)))
    + "</h1>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"person dark\">\n                            <h3>Project Manager</h3>\n                            <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"PM") || (depth0 != null ? lookupProperty(depth0,"PM") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PM","hash":{},"data":data,"loc":{"start":{"line":63,"column":32},"end":{"line":63,"column":38}}}) : helper)))
    + "</h2>\n                            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"PM_description") || (depth0 != null ? lookupProperty(depth0,"PM_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"PM_description","hash":{},"data":data,"loc":{"start":{"line":64,"column":31},"end":{"line":64,"column":49}}}) : helper)))
    + "</p>\n                        </div>\n                        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":66,"column":34},"end":{"line":66,"column":43}}}) : helper)))
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"CE_description") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":67,"column":24},"end":{"line":76,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"person dark\">\n                            <h3>Chief Engineer</h3>\n                            <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"CE") || (depth0 != null ? lookupProperty(depth0,"CE") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CE","hash":{},"data":data,"loc":{"start":{"line":70,"column":32},"end":{"line":70,"column":38}}}) : helper)))
    + "</h2>\n                            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"CE_description") || (depth0 != null ? lookupProperty(depth0,"CE_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CE_description","hash":{},"data":data,"loc":{"start":{"line":71,"column":31},"end":{"line":71,"column":49}}}) : helper)))
    + "</p>\n                        </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"image2") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":73,"column":24},"end":{"line":75,"column":31}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"image2") || (depth0 != null ? lookupProperty(depth0,"image2") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"image2","hash":{},"data":data,"loc":{"start":{"line":74,"column":38},"end":{"line":74,"column":48}}}) : helper)))
    + "\">\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"project-description light\">\n                <h1 class=\"title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":93,"column":34},"end":{"line":93,"column":43}}}) : helper)))
    + "</h1>\n                <div class=\"project-description__content\">\n                    <div class=\"image-container\">\n                        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"picture") || (depth0 != null ? lookupProperty(depth0,"picture") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"picture","hash":{},"data":data,"loc":{"start":{"line":96,"column":34},"end":{"line":96,"column":45}}}) : helper)))
    + "\">\n                    </div>\n                    <div class=\"paragraph-container\">\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":99,"column":24},"end":{"line":99,"column":41}}}) : helper))) != null ? stack1 : "")
    + "\n                    </div>\n                </div>\n            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"team-wrapper\" class=\"parallax-wrapper\">\n    <div class=\"project-header\">\n        <div class=\"parallax-image-header parallax-image\"></div>\n        <div class=\"project-header__title\">\n            <h1>Our Team</h1>\n        </div>\n    </div>\n    <div class=\"project-intro dark\">\n        <h1>Who makes up Bruin Space?</h1>\n        <p>It takes all backgrounds to build a spacecraft, and with over 60 members, we've got a wide variety.</p>\n    </div>\n    <div class=\"parallax-image-header__follow parallax-image\"></div>\n    <div class=\"project-description light\">\n        <h1 class=\"title\">The Officers</h1>\n        <div class=\"project-description__content\">\n            <!--<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"officersPhoto") || (depth0 != null ? lookupProperty(depth0,"officersPhoto") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"officersPhoto","hash":{},"data":data,"loc":{"start":{"line":16,"column":26},"end":{"line":16,"column":43}}}) : helper)))
    + "\">-->\n            <p class=\"paragraph-container\">\n                Bruin Space is run by a board of five officers: President, Interal Vice President, External Vice\n                President, Vice President of Marketing, and Vice President of Finance.\n            </p>\n        </div>\n        <div class=\"officer-cards__container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"officers") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":12},"end":{"line":42,"column":21}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n\n    <div class=\"project-description dark\">\n        <h1 class=\"title\">Project Leadership</h1>\n        <div class=\"project-description__content\">\n            <!--<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"officersPhoto") || (depth0 != null ? lookupProperty(depth0,"officersPhoto") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"officersPhoto","hash":{},"data":data,"loc":{"start":{"line":49,"column":26},"end":{"line":49,"column":43}}}) : helper)))
    + "\">-->\n            <p class=\"paragraph-container\">\n                Each of our projects are guided by a Project Manager, often in conjunction with a Chief Engineer.\n            </p>\n        </div>\n        <div class=\"project-leads-cards__container light\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"projects") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":55,"column":12},"end":{"line":79,"column":21}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n\n    <div class=\"faculty_support-wrapper\">\n        <h1 class=\"title\">Faculty Support</h1>\n        <div class=\"project-description__content\">\n            <!--<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"officersPhoto") || (depth0 != null ? lookupProperty(depth0,"officersPhoto") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"officersPhoto","hash":{},"data":data,"loc":{"start":{"line":86,"column":26},"end":{"line":86,"column":43}}}) : helper)))
    + "\">-->\n            <p class=\"paragraph-container\">\n                And of course, Bruin Space could not exist without tremendous support from the university.\n            </p>\n        </div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"faculty") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":91,"column":8},"end":{"line":103,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n</div>\n";
},"useData":true});
templates['info/sponsor'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"sponsor-wrapper\" class=\"parallax-wrapper\">\n    <div class=\"project-header\">\n        <div class=\"parallax-image-header parallax-image\"></div>\n        <div class=\"project-header__title\">\n            <h1>Sponsor Us</h1>\n        </div>\n    </div>\n    <div class=\"project-intro dark\">\n        <h1>Help us take this to the next level</h1>\n    </div>\n    <div class=\"parallax-image-header__follow parallax-image\"></div>\n    <div class=\"text-image__container light\">\n        <h1 class=\"title\">Why Bruin Space?</h1>\n        <div class=\"text-image\">\n            <video width=\"100%\" autoplay muted loop>\n                <source src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"video-link") || (depth0 != null ? lookupProperty(depth0,"video-link") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"video-link","hash":{},"data":data,"loc":{"start":{"line":16,"column":29},"end":{"line":16,"column":43}}}) : helper)))
    + "\" type=\"video/mp4\">\n                HTML video is not supported by your browser.\n            </video>\n            <div class=\"paragraph-container\">\n                <ul>\n                    <li>We are a young organization, looking for companies to build lasting relationships with.</li>\n                    <li>We are rapidly expanding, getting more students involved from all over campus.</li>\n                    <li>Plus, space is cool! Help us share our passion!</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"paragraph-container dark\">\n        <h1 class=\"title\">Here are the details</h1>\n        <div class=\"paragraph-container\">\n            <p>Donations to the Bruin Spacecraft Group are tax deductible and are accompanied with the following\n                benefits:</p>\n            <ul>\n                <li>Donors can choose for their gift to be made to a specific project or to Bruin Space directly</li>\n                <li>Hardware donations will be assigned a monetary value based off the average market price for the\n                    item, and will count towards the donors’ gift total</li>\n                <li>Donation totals for funding levels (below) are considered by academic year</li>\n                <li>Donors will be given priority for campus events (talks, info-sessions, resume collections,\n                    tech-talks, etc.)</li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"paragraph-container light\">\n        <h3>Bruin Space has four funding levels, each with distinct benefits. Each level also includes benefits of\n            those underneath.</h3>\n    </div>\n    <div class=\"sponsorship-level\">\n        <h2 class=\"title\"><span style=\"font-weight:bold\">Voyager </span> $5000 and up</h2>\n        <ul>\n            <li>Publicized recruiting event</li>\n            <li>Logo on select flight hardware</li>\n        </ul>\n    </div>\n    <div class=\"sponsorship-level\">\n        <h2 class=\"title\"><span style=\"font-weight:bold\">Pioneer </span> $2500 - $4999</h2>\n        <ul>\n            <li>Posts on social media</li>\n        </ul>\n    </div>\n    <div class=\"sponsorship-level\">\n        <h2 class=\"title\"><span style=\"font-weight:bold\">Mariner </span> $500 - $2499</h2>\n        <ul>\n            <li>Access to the Bruin Space resume book</li>\n            <li>Swag distributed in the Bruin Space lab</li>\n        </ul>\n    </div>\n    <div class=\"sponsorship-level\">\n        <h2 class=\"title\"><span style=\"font-weight: bold\">Explorer </span> Up to $499</h2>\n        <ul>\n            <li>Recruiting post in the Bruin Space newsletter</li>\n            <li>Logo on the Bruin Space website</li>\n        </ul>\n    </div>\n    <div class=\"paragraph-container dark\">\n        <a class=\"button\" href=\"https://drive.google.com/file/d/1FrhBgh3YwD9OpEmQoXfNsleSXdl2-K2m/view\"\n            target=\"_blank\">Become a Sponsor!</a>\n        <p>For any inquiries, contact uclabruinspace@gmail.com to get in touch with us, and we would be happy to\n            negotiate the terms of your sponsorship.</p>\n    </div>\n</div>\n";
},"useData":true});
templates['projects/project'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<h2>Chief Engineer</h2>\n				<p>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"ce") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</p>\n				<p>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"ce") : depth0)) != null ? lookupProperty(stack1,"major") : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"ce") : depth0)) != null ? lookupProperty(stack1,"year") : stack1), depth0))
    + "</p>\n				<a href=\"mailto:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"ce") : depth0)) != null ? lookupProperty(stack1,"email") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"ce") : depth0)) != null ? lookupProperty(stack1,"email") : stack1), depth0))
    + "</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<div class=\"mission-wrapper\" id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "\">\n		<div class=\"title\">\n			<h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</h1>\n			<h2>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"subtitle") : stack1), depth0))
    + "</h2>\n		</div>\n		<div class=\"mission-description\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"description_raw") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":51,"column":3},"end":{"line":57,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"scrollables") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":2},"end":{"line":78,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"model") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":79,"column":2},"end":{"line":89,"column":9}}})) != null ? stack1 : "")
    + "		<div class=\"mission-description\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"description_2_raw") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":91,"column":3},"end":{"line":97,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"description_raw") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<p class=\"paragraph-container\">\n					"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"description") : stack1), depth0)) != null ? stack1 : "")
    + "\n				</p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div class=\"scrollable-content\">\n			<div class=\"scrollable-content__textboxes\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"scrollables") : stack1),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":4},"end":{"line":69,"column":13}}})) != null ? stack1 : "")
    + "			</div>\n			<div class=\"scrollable-content__images\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"scrollables") : stack1),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":72,"column":4},"end":{"line":74,"column":13}}})) != null ? stack1 : "")
    + "			</div>\n			<script type=\"text/javascript\" src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"missionWidgetJS") || (depth0 != null ? lookupProperty(depth0,"missionWidgetJS") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"missionWidgetJS","hash":{},"data":data,"loc":{"start":{"line":76,"column":39},"end":{"line":76,"column":58}}}) : helper)))
    + "\"></script>\n		</div>\n";
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
    + "\">\n						<h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":64,"column":10},"end":{"line":64,"column":19}}}) : helper)))
    + "</h2>\n						<p>\n							"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":66,"column":7},"end":{"line":66,"column":22}}}) : helper)))
    + "\n						</p>\n					</div>\n";
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
    + "\">\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<script type=\"module\" src=\"https://unpkg.com/@google/model-viewer/dist/model-viewer.js\"></script>\n        <script nomodule src=\"https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js\"></script>\n		<script type=\"text/javascript\" src=\""
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"model") : stack1)) != null ? lookupProperty(stack1,"model_loader_js") : stack1), depth0))
    + "\"></script>\n		<div class=\"model-container\" style=\"height: 50vh;\">\n			<button class=\"button\" onclick=\"load_model("
    + alias1((lookupProperty(helpers,"json")||(depth0 && lookupProperty(depth0,"json"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"model") : stack1),{"name":"json","hash":{},"data":data,"loc":{"start":{"line":84,"column":46},"end":{"line":84,"column":68}}}))
    + ")\">\n				<p>Load Model</p>\n				<p class=\"warning\">(warning, large file size)</p>\n				</button>\n		</div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"description_2_raw") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<p class=\"paragraph-container\">\n					"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"description_2") : stack1), depth0)) != null ? stack1 : "")
    + "\n				</p>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"callToAction_raw") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<p class=\"paragraph-container\">\n				"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"callToAction") : stack1), depth0)) != null ? stack1 : "")
    + "\n			</p>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div class=\"past-projects dark\">\n			<h1 class=\"title\">Past Work</h1>\n			<div class=\"past-projects__content\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"past_work") : depth0),{"name":"each","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":116,"column":4},"end":{"line":126,"column":13}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"text-image__container light "
    + ((stack1 = (lookupProperty(helpers,"if_even")||(depth0 && lookupProperty(depth0,"if_even"))||alias2).call(alias1,(data && lookupProperty(data,"index")),{"name":"if_even","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(27, data, 0),"data":data,"loc":{"start":{"line":117,"column":45},"end":{"line":117,"column":103}}})) != null ? stack1 : "")
    + "\">\n				    <h1 class=\"title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":118,"column":26},"end":{"line":118,"column":35}}}) : helper)))
    + "</h1>\n				    <div class=\"text-image "
    + ((stack1 = (lookupProperty(helpers,"if_even")||(depth0 && lookupProperty(depth0,"if_even"))||alias2).call(alias1,(data && lookupProperty(data,"index")),{"name":"if_even","hash":{},"fn":container.program(29, data, 0),"inverse":container.program(31, data, 0),"data":data,"loc":{"start":{"line":119,"column":31},"end":{"line":119,"column":91}}})) != null ? stack1 : "")
    + "\">\n				      <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"picture") || (depth0 != null ? lookupProperty(depth0,"picture") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"picture","hash":{},"data":data,"loc":{"start":{"line":120,"column":20},"end":{"line":120,"column":31}}}) : helper)))
    + "\">\n				      <div class=\"paragraph-container\">\n				        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":122,"column":12},"end":{"line":122,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\n				      </div>\n				    </div>\n				  </div>\n";
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
    + "-wrapper\" class=\"parallax-wrapper\">\n	<div class=\"project-header\">\n		<div class=\"parallax-image-header parallax-image\"></div>\n		<div class=\"project-header__title\">\n			<h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"project") || (depth0 != null ? lookupProperty(depth0,"project") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project","hash":{},"data":data,"loc":{"start":{"line":5,"column":7},"end":{"line":5,"column":18}}}) : helper)))
    + "</h1>\n		</div>\n	</div>\n	<div class=\"project-intro dark\">\n		<h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_title") || (depth0 != null ? lookupProperty(depth0,"project_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_title","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":23}}}) : helper)))
    + "</h1>\n		<p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_subtitle") || (depth0 != null ? lookupProperty(depth0,"project_subtitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_subtitle","hash":{},"data":data,"loc":{"start":{"line":10,"column":5},"end":{"line":10,"column":25}}}) : helper)))
    + "</p>\n	</div>\n	<div class=\"parallax-image-header__follow parallax-image\"></div>\n	<div class=\"project-description dark\">\n		<h1 class=\"title\">The Project</h1>\n		<div class=\"project-description__content\">\n			<div class=\"image-container\">\n				<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":17,"column":14},"end":{"line":17,"column":22}}}) : helper)))
    + "\">\n			</div>\n			<p class=\"paragraph-container\">\n				"
    + alias4(((helper = (helper = lookupProperty(helpers,"project_description") || (depth0 != null ? lookupProperty(depth0,"project_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"project_description","hash":{},"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":20,"column":27}}}) : helper)))
    + "\n			</p>\n		</div>\n	</div>\n	<div class=\"team-description light\">\n		<h1 class=\"title\">The Team</h1>\n		<div class=\"team-description__content\">\n			<div class=\"image-container\">\n				<img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"team_photo") || (depth0 != null ? lookupProperty(depth0,"team_photo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"team_photo","hash":{},"data":data,"loc":{"start":{"line":28,"column":14},"end":{"line":28,"column":28}}}) : helper)))
    + "\">\n			</div>\n			<div class=\"pm-bio paragraph-container\">\n				<h2>Project Manager</h2>\n				<p>"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"pm") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</p>\n				<p>"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"pm") : depth0)) != null ? lookupProperty(stack1,"major") : stack1), depth0))
    + ", "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"pm") : depth0)) != null ? lookupProperty(stack1,"year") : stack1), depth0))
    + "</p>\n				<a href=\"mailto:"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"pm") : depth0)) != null ? lookupProperty(stack1,"email") : stack1), depth0))
    + "\">"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"pm") : depth0)) != null ? lookupProperty(stack1,"email") : stack1), depth0))
    + "</a>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ce") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":4},"end":{"line":40,"column":11}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n	</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"mission") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":1},"end":{"line":100,"column":8}}})) != null ? stack1 : "")
    + "	<div class=\"parallax-image-2 parallax-image\"></div>\n	<div class=\"call-to-action light\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"callToAction_raw") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data,"loc":{"start":{"line":103,"column":2},"end":{"line":109,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n	<div class=\"parallax-image-2__follow parallax-image\"></div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"past_work") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":112,"column":1},"end":{"line":129,"column":8}}})) != null ? stack1 : "")
    + "</div>\n";
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
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <p class=\"paragraph-container\">\n                "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"description") : stack1), depth0)) != null ? stack1 : "")
    + "\n            </p>\n";
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
    + "\">\n                    <div id=\"annotation\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":54,"column":41},"end":{"line":54,"column":49}}}) : helper)))
    + "</div>\n                </button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"mission-wrapper\" id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "\">\n    <div class=\"title\">\n        <h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</h1>\n        <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"subtitle") : stack1), depth0))
    + "</p>\n    </div>\n    <div class=\"mission-description\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"description_raw") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":13,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n    <script type=\"module\" src=\"https://unpkg.com/@google/model-viewer/dist/model-viewer.js\"></script>\n    <script nomodule src=\"https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js\"></script>\n    <style>\n        button{\n            display: block;\n            width: 20px;\n            height: 20px;\n            border-radius: 10px;\n            border: none;\n            background-color: blue;\n            box-sizing: border-box;\n        }\n\n        button[slot=\"hotspot-hand\"]{\n            --min-hotspot-opacity: 0;\n            background-color: red;\n        }\n\n        button[slot=\"hotspot-foot\"]:not([data-visible]) {\n            background-color: transparent;\n            border: 3px solid blue;\n        }\n\n        #annotation{\n            background-color: #888888;\n            position: absolute;\n            transform: translate(10px, 10px);\n            border-radius: 10px;\n            padding: 10px;\n        }\n        /* This keeps child nodes hidden while the element loads */\n        :not(:defined) > * {\n            display: none;\n        }\n        </style>\n    <div class=\"model-container\" style=\"height: 50vh;justify-content:center;\">\n        <model-viewer camera-controls src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"modelURL") : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"modelAlt") : stack1), depth0))
    + "\" style=\"width: 100%; height:100%;\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"mission") : depth0)) != null ? lookupProperty(stack1,"annotations") : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":12},"end":{"line":56,"column":21}}})) != null ? stack1 : "")
    + "        </model-viewer>\n    </div>\n</div>\n";
},"useData":true});
})();