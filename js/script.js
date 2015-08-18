jQuery("document").ready(function($){

	// Our Properties Dropdown Menu
    $('.menu__item--dropdown').mouseover(function () {
        $('.menu__dropdown').fadeIn('fast');
    });

    $('.menu__dropdown').mouseleave(function () {
        $('.menu__dropdown').fadeOut('fast');
    });

    // Mobile Navigation
    $('.menu__mobile').click(function () {
        $('.menu__dropdown--mobile').toggle();
    });

    // Autoscroll to Home Page Map
    $('.intro__button').click(function() {
   		$.scrollTo($('.cities').position().top - 220, 600);
	});

	// Autoscroll to Property Page Map
    $('.property__address').click(function() {
   		$.scrollTo($('#map').position().top - 75, 750);
	});

});
