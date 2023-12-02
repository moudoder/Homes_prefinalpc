$(document).ready(function () {
  let slider_reviews = $('.reviews-slider');

  for (let i = slider_reviews.length - 1; i >= 0; i--) {
  	let slider_now = slider_reviews[i];
  	let parent = $(slider_now).parent('.reviews-slider-wrapper');
  	let next_arrow = $(parent).find('.reviews-next');
  	let prev_arrow = $(parent).find('.reviews-prev');

  	$(slider_now).slick({
	  infinite: false,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  prevArrow: $(prev_arrow),
	  nextArrow: $(next_arrow),
	  dots: true,
	  swipe: false,
	});
  }
  



  $('.reviews-slider-main').slick({
	  infinite: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  swipe: true,
	  speed: 500,
      fade: true,
      cssEase: 'linear'
	});


  $('.reviews-nav-item').on('click', function() {
  	let index = $('.reviews-nav-item').index(this);
  	$('.reviews-nav-item').removeClass('active');
  	$(this).addClass('active');
  	$('.reviews-slider-main').slick('slickGoTo', index);
  	return false;
  })

  $('.team-slider').slick({
	  infinite: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  swipe: false,
	});

  $('.team-nav__item').on('click', function() {
  	let index = $('.team-nav__item').index(this);
  	$('.team-nav__item').removeClass('active');
  	$(this).addClass('active');
  	$('.team-slider').slick('slickGoTo', index);
  	return false;
  })
})