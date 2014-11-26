$(document).ready(function() {
	$('.hamburger').on('click', function() {
		$('ul.mobile').toggle();
	});
	$('ul.mobile li a').on('click', function() {
		$('ul.mobile').hide();
	});
	$('a').smoothScroll();
});