$(document).ready(function(){
	
	$('.multiple') .owlCarousel({
    loop:true,
   margin:10,
    nav:true,
	navText: ['<i class="icofont-curved-left"></i>','<i class="icofont-curved-right"></i>'], 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.item').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: false,
  focusOnSelect: true,
  variableWidth: true,
  arrows: false,
  
dots: true,

});
	
	
})