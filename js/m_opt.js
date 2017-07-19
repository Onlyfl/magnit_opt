	$(document).ready(function () {
	$('.slides_main').slick({
		dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1
});
	});
	
	$(document).on('click','.closfon', function() {
        $('.wrapper_filter').fadeOut('slow');
		
    });
	
	$(document).on('click','.top_subscribe', function() {
        $('#form2').fadeIn('slow');

    });
	


	
	