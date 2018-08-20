$(document).ready(function () {
	$('.navigation_wr__toggler').click(function () {
		$('.navigation_wr').toggleClass('open')
	});

	$('.half_slider__contr_minus').click(function (e) {
		e.preventDefault();
		$(this).closest('.half_slider__item').removeClass('plus');
	});

	$('.half_slider__contr_plus').click(function (e) {
		e.preventDefault();
		$(this).closest('.half_slider__item').addClass('plus');
	})


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

	var owlSlider = $('.half_slider__owl.owl-carousel').owlCarousel({
		items: 1,
		loop: false,
		dots: false,
	  nav: true
	});
	
	var owlUniqNews = $('.uniq_news .owl-carousel.uniq_news__owl').owlCarousel({
		items: 2,
		loop: false,
		dots: false,
	  nav: false
	  // autoWidth: true
	});

	var owlUniqHist = $('.uniq_history .owl-carousel.uniq_news__owl').owlCarousel({
		items: 2,
		loop: false,
		dots: true,
	  nav: true
	});

	var owlSliderMob = $('.columns__mob_slider_img.owl-carousel').owlCarousel({
		items: 1,
		loop: false,
		dots: false,
	  nav: false
	});

	var owlSliderMob2;

	owlSliderMob.on('dragged.owl.carousel', function (e) {
		owlSliderMob2.trigger('to.owl.carousel', e.item.index)
	});

	sliderCreateMob();
	$(window).resize(sliderCreateMob);

	if (owlSliderMob2) {
		owlSliderMob2.on('dragged.owl.carousel', function (e) {
			owlSliderMob.trigger('to.owl.carousel', e.item.index)
		})
	}

	function sliderCreateMob () {
		if ($(window).width() <=1023) {
			owlSliderMob2 = $('.columns__mob_owl.owl-carousel').owlCarousel({
				items: 1,
				loop: false,
				dots: false,
			  nav: false
			});
			console.log('heh?')
		}
		else{
			$('.columns__mob_owl.owl-carousel').trigger('destroy.owl.carousel').addClass('off')
		}
	}

	function navigator (_this) {
		var scrollPos = $(_this).data('pos');
		$('html, body').animate({
        scrollTop: $(scrollPos).offset().top
    }, 2000);
	}

	$('.navigator__btn_wr').click(function (e) {
		e.preventDefault();
		var _this = this;
		navigator (_this);
	})	
})