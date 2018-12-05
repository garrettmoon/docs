// data-md-component="toc"
document.addEventListener("DOMContentLoaded", function(event) {
	console.log(document);
	var toc_inner = document.querySelectorAll('[data-md-component=toc] .md-sidebar__inner')[0];
	var script = document.createElement("script");
	script.src = '//cdn.carbonads.com/carbon.js?serve=CK7DT2QW&placement=vaporcodes';
	script.type = 'text/javascript';
	script.id = '_carbonads_js';
	toc_inner.appendChild(script);
});