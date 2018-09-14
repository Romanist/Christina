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
	});

	$(document).on ('click', '.table__remove', function () {
		$(this).closest('tr').remove();
		$(this).closest('.basket_table__row').remove();
		return false;
	});

	$('.adress__btn').click(function () {
		var index = $('#index').val();
		var city = $('#city').val();
		var adress = $('#adress').val();
		var trigger = true;
		var changeTrig = false;

		if ($(this).hasClass('changing')) changeTrig = true;

		$('.adress .input').each(function( index ) {
			var _this = this;
			if (!validate(_this, trigger)) {
				$(this).closest('.input_wr').addClass('wrong');
				trigger = false;
			}
		});

		if ((trigger == true) && (!changeTrig)) {
			$('.adress__table tbody').append('<tr><td class="table__left"><p data-form="#city" class="table__bold">' + city + '</p><p data-form="#index" class="table__op">' + index + '</p><p data-form="#adress">' + adress + '</p></td><td class="table__center"><a href="#" class="table__link w_arr">Изменить</a></td><td class="table__right"><a href="#" class="table__remove"><span></span><span></span></a></td></tr>');
			$('.adress .input').val('').removeClass('has_cont');
			$('.input_wr').removeClass('wrong');
		}

		if ((changeTrig) && (trigger == true)) {
			$('.adress .input').each(function( index ) {
				var dataVal = $(this).data('form');
				$('tr.changing').find('p[data-form="' + dataVal + '"]').text($(this).val());
			});
			$('.adress .input').val('').removeClass('has_cont');
			$('.input_wr').removeClass('wrong');
			$('tr').removeClass('changing');
			$('.adress__btn').removeClass('changing');
		}

		return false;
	});

	$('.common .btn').click(function () {
		$('.input_wr').removeClass('wrong');
		var trigger = true;


		$('.common__form .input').each(function( index ) {
			var _this = this;
			if (!validate(_this, trigger)) {
				$(this).closest('.input_wr').addClass('wrong');
				trigger = false;
			}
		});

		if (!trigger) {
			return false;
		}
	});

	$(document).on('click', '.adress .table__link', function () {
		$(this).closest('tr').addClass('changing');
		$('.adress .adress__btn').addClass('changing');
		$(this).closest('tr').find('.table__left p').each(function (index) {
			var dataForm = $(this).data('form');
			var valueForm = $(this).text();
			$(dataForm).val(valueForm).addClass('has_cont');
		});
		return false;
	});

	$('.input').focusout(function () {
		$(this).removeClass('has_cont');
		if ($(this).val()) {
			$(this).addClass('has_cont');
		}
	});

	function minHeightPers (elem1, elem2) {
		elem1.addClass('min_height');
		elem2.addClass('min_height');
		elem1.on('transitionend, webkitTransitionEnd', function () {
			elem1.removeClass('min_height');
			elem2.removeClass('min_height');
		});
	}

	function person (_this) {
		if (!$(_this).hasClass('past')) {
			$('.active').removeClass('active').addClass('past');
			$(_this).removeClass('past').addClass('active');
			minHeightPers($('.active'), $(_this));
		}
		else {
			$('.active').removeClass('active');
			$(_this).removeClass('past').addClass('active');
			minHeightPers($('.active'), $(_this));
		}
	}

	$('.perNavBtn').click(function (e) {
		var _this = $(this).data('pos');
		person(_this);
		$('.perNavBtn').removeClass('active');
		$(this).addClass('active');
		return false;
	});

	function navigator (_this) {
		var scrollPos = $(_this).data('pos');
		$('html, body').animate({
        scrollTop: $(scrollPos).offset().top
    }, 2000);
	}

	$('.navigator__btn_wr:not(.perNavBtn)').click(function (e) {
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
		$('.shop__filters').toggleClass('open');
	});
		
	$('.propeel_half2__click').click(function () {
		if ($(this).closest('.propeel_half2__item').hasClass('opened')) {
			$(this).closest('.propeel_half2__item').removeClass('opened');
		}
		else {
			$('.propeel_half2__item').removeClass('opened');
			$(this).closest('.propeel_half2__item').addClass('opened');			
		}		
		return false;
	});

	$('.counter__btn').click(function () {
		var sign = $(this).data('sign');
		var count = $(this).closest('.prod_inf__counter').find('.counter__number').data('counter');
		if (sign == "+") {
			$(this).closest('.prod_inf__counter').find('.counter__number').text(count + 1);
			$(this).closest('.prod_inf__counter').find('.counter__number').data('counter', count + 1);
		}
		else {
			if (!count) return false;
			$(this).closest('.prod_inf__counter').find('.counter__number').text(count - 1);
			$(this).closest('.prod_inf__counter').find('.counter__number').data('counter', count - 1);
		}
		return false;
	});

	if (($(".person")) && ($(window).width() < 1024)) {
		$(".person .navigator__menu").mCustomScrollbar({
			axis:"x",
			mouseWheel:{ enable: true }
		});
	}

	$('.review__rait img').click(function () {
		var ratingComp = $(this).index();
		var ratingClick = $(this).index() + 1;
		var imgSrc = $(this).attr('src');
		for (var i = 0; i <= ratingComp; i++) {
			$(this).closest('.review__rait').find('img').eq(i).attr('src', '../images/rat_icon.svg')
		}
		for (var i = ratingClick; i <= 5; i++) {
			$(this).closest('.review__rait').find('img').eq(i).attr('src', '../images/rat_icon_empty.svg')
		}
	});

	$('.input').on('input', function () {
		$(this).closest('.input_wr').removeClass('wrong');
	});

	$('.basket_form .check_hid').change(function () {
		$('.check_hid').prop('checked', false);
		$(this).prop('checked', true);
	});


	// validation

	function validate (_this, trigger) {
		var ck_name = /^[А-Яа-яA-Za-z\s]{1,20}$/;
	    var ck_text = /^[А-Яа-яA-Za-z0-9,.!?\s]{1,5000}$/;
	    var ck_tel = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
	    var ck_number = /^\d+$/;
	    var ck_date = /^(\d{1,2}).(\d{1,2}).(\d{2}|\d{4})$/;
	    var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

	    var type = $(_this).attr('name');
	    console.log(type)
	    if (type == 'number') {
	    	if (!ck_number.test($(_this).val())){
	    		return false;
	    	}
	    	else {
	    		return true;
	    	}
	    }
	    if (type == 'text') {
	    	if (!ck_text.test($(_this).val())){
	    		return false;
	    	}
	    	else {
	    		return true;
	    	}
	    }
	    if (type == 'date') {
	    	if (!ck_date.test($(_this).val())){
	    		return false;
	    	}
	    	else {
	    		return true;
	    	}
	    }
	    if (type == 'mail') {
	    	if (!ck_email.test($(_this).val())){
	    		return false;
	    	}
	    	else {
	    		return true;
	    	}
	    }
	    if (type == 'tel') {
	    	if (!ck_tel.test($(_this).val())){
	    		return false;
	    	}
	    	else {
	    		return true;
	    	}
	    }
	    if (type == 'name') {
	    	if (!ck_name.test($(_this).val())){
	    		return false;
	    	}
	    	else {
	    		return true;
	    	}
	    }
	}


	// sliders

	function createSlider () {
		// console.log($(window).width())
		if (($(window).width() <=1023) && ($(window).width() >=751) && ($('.shop_results__wr'))){
			var owlShopResults = $('.shop_results__wr').owlCarousel({
				items: 3,
				loop: false,
				dots: false,
			  nav: true
			});
		}	
		if ($(window).width() < 751) {
			$('.shop_results__wr').trigger('destroy.owl.carousel').addClass('off')
		}
		if ($(window).width() > 1024) {
			$('.shop_results__wr').trigger('destroy.owl.carousel').addClass('off')
		}	
	}

	$('.consult_wr__trigger').click(function () {
		$(this).closest('.comment').toggleClass('close');
		return false;
	});

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

	var owlProd = $('.slider_propeel .owl-carousel').owlCarousel({
		items: 2,
		loop: true,
		dots: true,
	  nav: true,
	  responsive: {
	  	768:{
	  		items: 3,
				loop: false
	  	},
	  	1024:{
	  		items: 4,
				loop: false
	  	}
	  }
	});

	var owlProd = $('.shop_slider__wr .owl-carousel').owlCarousel({
		items: 1,
		loop: false,
		dots: true,
	  nav: true,
	  responsive: {
	  	768:{
	  		items: 2
	  	},
	  	1024:{
	  		items: 3
	  	}
	  }
	});	

	var owlProdSlider = $('.prod_slider').owlCarousel({
		items: 1,
		loop: false,
		dots: true,
	  nav: false
	});	

	var owlSlider = $('.half_slider__owl.owl-carousel').owlCarousel({
		items: 1,
		loop: false,
		dots: false,
	  nav: true
	});

	$(window).resize(createSlider);
	createSlider();
	
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

	var owlSliderProdPage = $('.prod_comments__slider').owlCarousel({
		items: 1,
		loop: true,
		dots: false,
	  nav: true
	});	

	var owlSliderMob2;
	// sliderCreateMob();

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

	// owlUniqNews.on('resize.owl.carousel', function (e) {
	// 	if (($(window).width() <=1023) && ($(window).width() >=767)) {
	// 		return false
	// 	}
	// 	if ($(window).width() <=767) {
	// 		owlUniqNews.trigger('refresh.owl.carousel')
	// 	}
	// 	if ($(window).width() > 1024) {
	// 		return false
	// 	}		
	// });

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

	// owlSliderMob2.on('dragged.owl.carousel', function (e) {
	// 	owlSliderMob.trigger('to.owl.carousel', e.item.index)
	// });

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
			owlSliderMob2.on('dragged.owl.carousel', function (e) {
				owlSliderMob.trigger('to.owl.carousel', e.item.index)
			})
		}
		else{
			$('.columns__mob_owl.owl-carousel').trigger('destroy.owl.carousel').addClass('off')
		}
	}

	if ($(".scroll_HDIW__scroll")) {
		$(".scroll_HDIW__scroll").mCustomScrollbar({
			axis:"x",
			mouseWheel:{ enable: false },
			callbacks:{
	        whileScrolling: function(){
	          btnManage(this);
	        }
	    }
		});
	}
})