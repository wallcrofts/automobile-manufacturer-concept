const swiper = new Swiper('.swiper-container', {
	//effect: 'coverflow',
	//centeredSlides: true,
	slidesPerView: 4,
	//initialSlide: 1,
	loop: true,
	speed: 600,
	
	/* 
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 0,
		modifier: 2,
		//slideShadows: true,
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
	},*/
	



	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	on: {
		init: function () {
		  $('.swiper-slide-next .article-content').addClass('active');
		},
		transitionStart: function() {
		  $('.article-content').removeClass('active');
		},
		transitionEnd: function(swiper) {
		  $('.swiper-slide-next .article-content').addClass('active');
		}
	  }
});