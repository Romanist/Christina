$(document).ready(function () {
	$('.navigation_wr__toggler').click(function () {
		$('.navigation_wr').toggleClass('open')
	});


	var owl = $('.smpl_btn_cont').owlCarousel({
		items: 1,
		loop: false,
		dots: true,
	  	nav: true
	});
})