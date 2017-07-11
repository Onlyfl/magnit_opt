	$(document).ready(function () {
	$('.slider_2_item ul').slick({
		dots: false,
  infinite: true,
  slidesToShow: 2,
  
  slidesToScroll: 2
});
	})
	

	$(document).ready(function () {
	$('.slider_6_item ul').slick({
		dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
	})
	
$(document).ready(function () {
	$('.slider_3_item ul').slick({
		dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
	})
		 				
$(document).ready(function () {
	$('.footer_slider_block ul').slick({
		dots: true,
  infinite: true
});
	});
	
	$(document).on('click',".reinit2",function(e) {
		 $('#menu66').resize();
		
		 $('#menu66').slick('setPosition', 0);
		 
    });
	
$(document).on('click','.main_region_body_list_opened', function() {
		  $('.main_region_body_list_opened').animate({ marginTop: '0'}, "slow");
		   $('.main_region_body_list_opened').addClass('opened');

    });
	
	$(document).on('click','.opened', function() {
		   $('.main_region_body_list_opened').removeClass('opened');
		   $('.main_region_body_list_opened').animate({ marginTop: '-120px'}, "slow");

    });
	
	



	
	
	

	
	