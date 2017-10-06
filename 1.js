webpackJsonp([1],{

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var nunjucks = __webpack_require__(1);
var env;
if (!nunjucks.currentEnv){
	env = nunjucks.currentEnv = new nunjucks.Environment([], { autoescape: true });
} else {
	env = nunjucks.currentEnv;
}
var dependencies = nunjucks.webpackDependencies || (nunjucks.webpackDependencies = {});




var shim = __webpack_require__(0);


(function() {(nunjucks.nunjucksPrecompiled = nunjucks.nunjucksPrecompiled || {})["partials/menu.en.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<nav id=\"mainmenu\" class=\"navbar\tnavbar-inverse\">\n\t<div class=\"container-fluid\">\n\t\t<!-- Brand and toggle get grouped for better mobile display -->\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t</button>\n\t\t\t<a class=\"navbar-brand\" href=\"#\">South American's Secret</a>\n\t\t</div>\n\n\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\".\">Home</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Tours of Peru <span class=\"caret\"></span></a>\n\t\t\t\t\t<ul class=\"dropdown-menu multi-column columns-3\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<ul class=\"multi-column-dropdown\">\n\t\t\t\t\t\t\t\t\t<li><span class=\"navbar-text\">Coast of Peru</span></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"tourslima.html\">Tours in Lima</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"toursparacas.html\">Paracas & Islas Ballestas</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"toursica.html\">Ica & Huacachina</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"toursnasca.html\">Nazca Lines</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"toursnorth.html\">North Coast Tours</a></li>\n\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<ul class=\"multi-column-dropdown\">\n\t\t\t\t\t\t\t\t\t<li><span class=\"navbar-text\">The Highlands</span></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"toursarequipa.html\">Arequipa</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"tourspuno.html\">Lake Titicaca</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"tourscuzco.html\">Cuzco</a></li>\n\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<ul class=\"multi-column-dropdown\">\n\t\t\t\t\t\t\t\t\t<li><span class=\"navbar-text\">Rainforest</span></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"toursiquitos.html#tambopata-reserve\">Tambopata Rainforest</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"toursiquitos.html#manu-reserve\">Manu Reserve</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Activities Peru<span class=\"caret\"></span></a>\n\t\t\t\t \t<ul class=\"dropdown-menu multi-column columns-2\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<ul class=\"multi-column-dropdown\">\n\t\t\t\t\t\t\t\t\t<li><span class=\"navbar-text\">Paracas</span></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"activities-paracas.html#biking-paracas-reserve\">Biking Paracas Reserve</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"activities-paracas.html#kayak-paracas-bay\">Kayak Paracas Bay</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"activities-paracas.html#islas-ballestas\">Islas Ballestas</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"activities-paracas.html#dune-buggy-sandboard\">Dunebuggy Sandboarding</a></li>\n\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<ul class=\"multi-column-dropdown\">\n\t\t\t\t\t\t\t\t\t<li><span class=\"navbar-text\">Cusco</span></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"activities-cuzco.html#inca-bike-jungle-trek\">Inca Bike & Jungle Trek</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"activities-cuzco.html#inca-trail-classic-trek\">Inca Trail Classic Trek</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"activities-cuzco.html#inca-trail-salkantay-trek\">Inca Salkantay Trek</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"activities-cuzco.html#white-water-rafting\">Urubamba White Water Rafting</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Peru Packages <span class=\"caret\"></span></a>\n\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"packagecoast.html#package-mystery-south-coast\">Mysteries of the South Coast (2 days / 1 night)</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\n\t\t\t\t<li><a href=\"articles.html\">Articles</a></li>\n\t\t\t\t<li><a href=\"contact.html\">Contact</a></li>\n\t\t\t</ul>\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t<li>\n\t\t\t\t\t<a id=\"change-language-link\" href=\"#\" title=\"Español\" data-lng=\"es\">\n\t\t\t\t\t\t<span id=\"language-span\">Spanish</span>\n\t\t\t\t\t\t<img id=\"language-icon\" src='images/spain_flag.png' width='25px' height='25px'/>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div><!-- /.navbar-collapse -->\n\t</div><!-- /.container-fluid -->\n</nav>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();



module.exports = shim(nunjucks, env, nunjucks.nunjucksPrecompiled["partials/menu.en.njk"] , dependencies)

/***/ })

});
//# sourceMappingURL=1.js.map