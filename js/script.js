jQuery("document").ready(function($){

	// Our Properties Dropdown Menu
    $('.menu__item--dropdown').mouseover(function () {
        $('.menu__dropdown').fadeIn('fast');
    });

    $('.menu__dropdown').mouseleave(function () {
        $('.menu__dropdown').fadeOut('fast');
    });

    // Autoscroll to Home Page map.
    $('.intro__button').click(function() {
   		$.scrollTo($('.cities').position().top - 220, 600);
	});

	// Autoscroll to Property Page map.
    $('.property__address').click(function() {
   		$.scrollTo($('#map').position().top - 75, 750);
	});

 
});
