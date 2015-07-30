jQuery("document").ready(function($){

	// Our Properties Dropdown Menu
    $('.menu__item--dropdown').hover(function(){
        $('.menu__dropdown').fadeIn(200)
    },function(){
        $('.menu__dropdown').fadeOut(200)
    })

    // Autoscroll to Home Page map.
    $('.intro__button').click(function() {
   		$.scrollTo($('.cities').position().top - 220, 750);
	});

	// Autoscroll to Property Page map.
    $('.property__address').click(function() {
   		$.scrollTo($('#map').position().top - 75, 750);
	});

 
});
