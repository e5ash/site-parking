$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (999) 999-99-99');

	var slider = $('.slider__list');
	slider.slick({
		fade: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3500
	});


	var reviews = $('.reviews__list'),
			reviewsArrows = $('.reviews__arrows');

	reviews.slick({
		slidesToShow: 2,
		appendArrows: reviewsArrows,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	var certificates = $('.certificates__list'),
			certificatesArrows = $('.certificates__arrows');

	certificates.slick({
		slidesToShow: 5,
		appendArrows: certificatesArrows,
		responsive: [{
			breakpoint: 1199,
			settings: {
				slidesToShow: 4
			}}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 2
			}}, {
			breakpoint: 450,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	new WOW().init();


	$('.form .btn').click(function(event) {
		event.preventDefault();
		var form = $(this).parents('form');
				inputsRequired = form.find('.input'),
				inputsRequiredLength = inputsRequired.length,
				counter = 0;

		inputsRequired.each(function(index, el) {
			if ($(this).find('input').val() == '') {
				$(this).addClass('input_error');
			} else {
				$(this).removeClass('input_error');
				counter++;
			}
		});

		if (counter == inputsRequiredLength) {
			$.ajax({
		    type: "POST",
		    url: "order.php",
		    data: form.serialize()
				}).done(function() {
			    $.fancybox.close();
					$.fancybox.open({src  : '#popup-thanks',type : 'inline'});
			});

		}
	});

});
