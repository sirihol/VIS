
$(document).ready(function(){  
	$('[data-toggle=offcanvas]').click(function() {
	    $('.row-offcanvas').toggleClass('active');
  });

	$(function() {
    	$('a.fullsizable').fullsizable();
  });

});