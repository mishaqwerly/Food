$('body').addClass('o-hidden');

$(document).ready(function() {

	// preloader
	setTimeout(function() {
		$('.preloader').addClass('preloader-done');
		$('body').removeClass('o-hidden');
	}, 2000);


	// header-fixed
	$(document).scroll(function () {
		if ($(document).scrollTop() > 64) {
			$('.header').addClass('header-fixed');
		} else{
			$('.header').removeClass('header-fixed');
		}
	});


	// scroll-top-btn
	$(document).scroll(function () {
		if ($(document).scrollTop() > 300) {
			$('.scroll-top-btn').addClass('scroll-top-btn-active');
		} else{
			$('.scroll-top-btn').removeClass('scroll-top-btn-active');
		}
	});

	$('.scroll-top-btn').click(function () {
		$('html').animate({'scrollTop': 0}, 1000);
	});


	// open-left-sidebar
	$('.open-left-sidebar').click(function (e) {
		e.preventDefault();
		$('body').addClass('o-hidden');
		$('.modal').addClass('modal-open');
		$('.left-sidebar').addClass('left-sidebar-open');
	});


	// modal-close
	$('.close-left-sidebar-btn, .modal-close').click(function (e) {
		e.preventDefault();
		$('.left-sidebar').removeClass('left-sidebar-open');
		$('.modal').removeClass('modal-open');
		$('body').removeClass('o-hidden');
	});


	// mob-menu
	$('.mob-menu-btn').click(function (e) {
		e.preventDefault();
		$('.open-submenu-btn').not(this).next('.submenu').slideUp(500);
		$('.insubmenu').slideUp(500);
		$('.nav').slideToggle(500);
	});


	// open-submenu
	$('.open-submenu-btn').click(function (e) {
		e.preventDefault();
		$('.open-submenu-btn').not(this).next('.submenu').slideUp(500);
		$('.insubmenu').slideUp(500);
	 	$(this).next('.submenu').slideToggle(500);
	});


	//open-insubmenu
	$('.open-insubmenu-btn').click(function (e) {
		e.preventDefault();
		$('.open-insubmenu-btn').not(this).next('.insubmenu').slideUp(500);
	 	$(this).next('.insubmenu').slideToggle(500);
	});


	//switch-color-open
	$('.switch-color-btn').click(function (e) {
		$('.switch-color').toggleClass('switch-color-open');
	});


	//switch-color
	$('.color-box-item').click(function (e) {
	   	var currentBgc = $(this).css("background-color");
	   $('body').css('--switch-color', currentBgc);
	});


	// main-slider
	$(".main-slider").owlCarousel({
	    margin:0,
	    nav:true,
	    dots:true,
	    loop:true,
	    mouseDrag:false,
	    autoplay:true,
	    animateIn: 'fadeIn',
	    animateOut: 'fadeOut',
	    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});


	// articles-slider
	$(".articles-slider").owlCarousel({
	    margin:20,
	    nav:false,
	    dots:false,
	    loop:true,
	    mouseDrag:true,
	    autoplay:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:4
	        }
	    }
	});


	//slider-inst
	$(".slider-inst").owlCarousel({
	    margin:1,
	    nav:false,
	    dots:false,
	    loop:true,
	    mouseDrag:true,
	    autoplay:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:6
	        }
	    }
	});

});

