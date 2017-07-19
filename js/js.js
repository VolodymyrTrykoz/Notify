 $(document).ready(function(){
	 $('.pict_slider').slick({
	  infinite: true,
	  slidesToShow: 19,
  	  slidesToScroll: 10,
	});//end slick 
	$(function (){
		$('.menuToggle').on('click', function(){

			$('.menu').slideToggle(300, function(){

				if($(this).css('display') === 'none') {
						$(this).removeAttr('style');
				}; // end this
			}); // end slideToggle
		}); // end menuToggle
	}); // end function

	$('.green').hover(function(){
		$(this).css('opacity','0.5')
	}, function (){
		$(this).css('opacity','0')
	}); // end hover

});//end ready


