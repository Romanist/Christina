$(document).ready(function () {
	$('.navigation_wr__toggler').click(function () {
		$('.navigation_wr').toggleClass('open')
	});


	var owl = $('.smpl_btn_cont.owl-carousel').owlCarousel({
		items: 1,
		loop: false,
		dots: true,
	  nav: true
	});

	var owlProd = $('.slider .owl-carousel').owlCarousel({
		items: 2,
		loop: false,
		dots: true,
	  nav: true,
	  responsive: {
	  	768:{
	  		items: 3
	  	},
	  	1024:{
	  		items: 4
	  	}
	  }
	});
})