$(function(){
	// Mobile view code
	var returns = false;
	$(".mobile-view i").click(function(){	
		if(returns == false){
			$(".mobile-view i").removeClass("icofont-navigation-menu");
			$(this).addClass("icofont-close");
			returns = true;
		}else{
			$(".mobile-view i").removeClass("icofont-close");
			$(this).addClass("icofont-navigation-menu");
			returns = false;
		}
	});
	// Mobile view responsive code
	var resMenu = false;
	$(".mobile-view i").click(function(){
		if(resMenu == false){
			$(".header-area").addClass("left");
			resMenu = true;
		}else{
			$(".header-area").removeClass("left");
			resMenu = false;
		}
	});
	// Animation
	 AOS.init({
	 	duration: 1000,
        easing: 'ease-in-out-back'
    });
	// Counter
    $(".count").counterUp({
    	delay: 10,
    	time: 1000
    });
    // Isotope Filtering class add remove
    $(".list-unstyled li").click(function(){
    	$(".list-unstyled li").removeClass("active");
    	$(this).addClass("active");
    });
    // Isotope
    var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		columnWidth: '.grid-item'
	  } 
	});
	// filter items on button click
	$('ul.list-unstyled li').click(function(){
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	// Magnific Popup
	$(".portfolio-gallery").magnificPopup({
		delegate: 'a.image',
		type: 'image',
		gallery: {
			enabled: true,
		}

	});

	// Owl Carousel
	$('.carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
	// SmoothScroll
	$("a").smoothScroll({
		speed: 1000
	});
	// Smooth Scroll Add Remove Class
	$(".nav-menu ul li").click(function(){
		$(".nav-menu ul li").removeClass("active");
		$(this).addClass("active");
		$(".header-area").removeClass("left");
		$(".mobile-view i").addClass("icofont-navigation-menu");
	});
	// Back to top
	$(window).scroll(function(){
		if($(this).scrollTop() > 500){
			$(".back-top").css({"opacity":"1"});
		}else{
			$(".back-top").css({"opacity":"0"});
		}
	});
	$(".back-top").click(function(){
		$("html,body").animate({scrollTop:0},1500);
	});
	// Contact
	$("#send-message").click(function(){
		var name    = $("input#name").val();
		var email   = $("input#email").val();
		var subject = $("input#subject").val();
		var message = $("textarea#message").val();

		$("input.form-control").css({ "border": "" });
		$("small.error-msg").text("");

		if(name == ""){
			$("input#name").css({"border":"1px solid red"});
			$("small.error-name").text("Please enter your name!!");
		}
		if(email == ""){
			$("input#email").css({"border":"1px solid red"});
			$("small.error-email").text("Please enter your valid email!!");
		}
		if(subject == ""){
			$("input#subject").css({"border":"1px solid red"});
			$("small.error-subject").text("Please enter your subject!!");
		}
		if(message == ""){
			$("textarea#message").css({"border":"1px solid red"});
			$("small.error-message").text("Please write something");
		}

		if(name != "" && email != "" && subject != "" && message != ""){
			$(".msg-loader img").css({"display":"block"});
			$(".contact-online .form-control").css({ "border": "" });
			$(".contact-online .form-control").val("");
			setTimeout(function(){
				$(".msg-loader img").css({ "display": "none" });
				$(".msg-loader .alert").css({ "display": "block" });
				setTimeout(function () {
					$(".msg-loader .alert").css({"display":"none"});
				}, 5000);
			},3000);
		}

		return false;
	});
});

// Typed
	var typed = new Typed('.typed', {
	  strings: [
			"Web Designer.",
			"Web Developer.",
			"Programer."
		],
		typeSpeed: 100,
		backSpeed: 100,
		loop: true
	});
// Preloader
	var load = document.querySelector(".preloader");
	function preloader(){
		load.style.display="none";
	}
	