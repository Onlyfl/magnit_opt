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
	$(document).on('click',".single-item-count .plus",function(e) {
        var $input, $this, val;
        $this = $(this);
        $input = $this.parent().children('input[name="quantity"]');
        val = parseInt($input.val());
        val++;
        return $input.val(val);
    });

     $(document).on('click',".single-item-count .minus",function(e) {
        var $input, $this, val;
        $this = $(this);
        $input = $this.parent().children('input[name="quantity"]');
        val = parseInt($input.val());
        val--;
        if (val < 1) {
            val = 1;
        }
        return $input.val(val);
    });
	
	


	
	