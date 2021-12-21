jQuery(document).ready(function ($) {

	var lastScrollTop = 0;
	$(window).scroll(function (event) {
		
		var st = $(this).scrollTop();
		
		if (st > 20) {
			if (st > lastScrollTop) {
				// downscroll code
				$('#header').removeClass('state-down');
				$('#header').removeClass('state-partially');
				$('#header').addClass('state-up')
				$('#introduction-section').addClass('remove-margin')
				$('.inner-page-spacing').addClass('remove-margin')

			} else {
				// uproll code
				$('#header').removeClass('state-down');
				$('#header').removeClass('state-up');
				$('#header').addClass('state-partially')
			}
		} else {
			$('#header').removeClass('state-up');
			$('#header').removeClass('state-partially');
			$('#header').addClass('state-down')
			$('#introduction-section').removeClass('remove-margin')
			$('.inner-page-spacing').removeClass('remove-margin')
			
			
		}
		lastScrollTop = st;
	});
	

 

});

jQuery(window).load(function(){
            
    var productSlider = jQuery('.landing-slider .slider-holder ul');
	productSlider.owlCarousel({
		items: 1,
		merge: true,
		loop: true,
		mergeFit: false,
		center: true,
		autoWidth: false,
		autoHeight: false,
		nav: true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: false,
		navSpeed: 1000,
		autoplaySpeed: 1000,
		dotsSpeed: 1000,
		slideBy: 1,
		navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
    
		
	});
	
	
	

});

jQuery(window).resize(function() {



});
