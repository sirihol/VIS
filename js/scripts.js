
$(document).ready(function(){  
	$('[data-toggle=offcanvas]').click(function() {
	    $('.row-offcanvas').toggleClass('active');
	});

	$(function() {
    	$('a.fullsizable').fullsizable();
    });
	
	$('body').scrollspy({
		target: '.bs-docs-sidebar', offset: 80
	});
	$('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top -50
            }, 600);
        }
    });

});