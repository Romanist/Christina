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

	var owlProd = $('.slider_main .owl-carousel').owlCarousel({
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

	var owlProd = $('.shop_slider__wr .owl-carousel').owlCarousel({
		items: 2,
		loop: false,
		dots: true,
	  nav: true,
	  responsive: {
	  	768:{
	  		items: 3
	  	},
	  	1024:{
	  		items: 3
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

	var owlUniqHist = $('.news_slider__wr').owlCarousel({
		items: 1,
		loop: false,
		dots: false,
	  nav: true,
	  responsive: {
	  	768:{
	  		items: 2
	  	}
	  }
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

	owlSliderMob.on('resize.owl.carousel', function (e) {
		console.log($(window).width())
		if (($(window).width() <=1023) && ($(window).width() >=767)) {
			return false
		}
		if ($(window).width() <=767) {
			owlSliderMob.trigger('refresh.owl.carousel')
		}
		if ($(window).width() > 1024) {
			$('.columns__mob_owl.owl-carousel').trigger('destroy.owl.carousel').addClass('off')
		}		
	});

	owlUniqNews.on('resize.owl.carousel', function (e) {
		if (($(window).width() <=1023) && ($(window).width() >=767)) {
			return false
		}
		if ($(window).width() <=767) {
			owlUniqNews.trigger('refresh.owl.carousel')
		}
		if ($(window).width() > 1024) {
			return false
		}		
	});

	// owlUniqHist.on('resize.owl.carousel', function (e) {
	// 	if (($(window).width() <=1023) && ($(window).width() >=767)) {
	// 		return false
	// 	}
	// 	if ($(window).width() <=767) {
	// 		owlUniqHist.trigger('refresh.owl.carousel')
	// 	}
	// 	if ($(window).width() > 1024) {
	// 		$('.columns__mob_owl.owl-carousel').trigger('destroy.owl.carousel').addClass('off')
	// 	}		
	// });

	sliderCreateMob();
	$(window).resize(sliderCreateMob);

	if (owlSliderMob2) {
		owlSliderMob2.on('dragged.owl.carousel', function (e) {
			owlSliderMob.trigger('to.owl.carousel', e.item.index)
		})
	}

	function sliderCreateMob () {
		if ($(window).width() <=1006) {
			owlSliderMob2 = $('.columns__mob_owl.owl-carousel').owlCarousel({
				items: 1,
				loop: false,
				dots: false,
			  nav: false
			});
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
	});

	$('.columns__column:nth-child(2)').hover(function () {
		if ($(window).width() >= 1024) {
			$('.columns__title_cont.left .columns__title').toggleClass('hover');
		}
	});

	$('.columns__column:nth-child(3)').hover(function () {
		if ($(window).width() >= 1024) {
			$('.columns__title_cont.right .columns__title').toggleClass('hover');
		}
	});

	$(".scroll_HDIW__scroll").mCustomScrollbar({
		axis:"x",
		mouseWheel:{ enable: false },
		callbacks:{
        whileScrolling: function(){
          btnManage(this);
        }
    }
	});

	function btnManage (el) {
		var percentPos = el.mcs.leftPct
		if (percentPos >= 50) {
			$('.scroll_HDIW__link').removeClass('active');
			$('.scroll_HDIW__link:nth-child(2)').addClass('active')
		}
		else{
			$('.scroll_HDIW__link').removeClass('active');
			$('.scroll_HDIW__link:nth-child(1)').addClass('active')
		}
	}

	$('.scroll_HDIW__link:nth-child(1)').click(function () {
		$(".scroll_HDIW__scroll").mCustomScrollbar('scrollTo', 'left');
		return false;
	});

	$('.scroll_HDIW__link:nth-child(2)').click(function () {
		$(".scroll_HDIW__scroll").mCustomScrollbar('scrollTo', 'right');
		return false;
	});

	$('.shop__toggle').click(function () {
		$('.shop__filters').toggleClass('open')
	});
})