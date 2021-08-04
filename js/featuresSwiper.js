const swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	speed: 600,
	spaceBetween: 20,
 	autoplay: {
		delay: 3000,
 	},
	
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 0,
		modifier: 2,
		slideShadows: true,
	},
	
	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		560: {
			slidesPerView: 3,
		},
		990: {
			slidesPerView: 4,
		}
	},



	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});