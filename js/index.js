const tabs= document.querySelectorAll('.tablinks');
const planes = document.querySelectorAll('.about');

tabs.forEach((tab) => {
	tab.addEventListener('click', tabClickHandler)
});

function tabClickHandler(event){
	event.preventDefault();
	
	if(event.target.classList.contains('tablinks')){
		tabs.forEach(tab => {
			tab.classList.remove('active');
		});

		planes.forEach(plane => {
			plane.classList.remove('active_plane');
		});

		const activeTab = Array.from(document.querySelectorAll('.tablinks')).find(tab => {
			return tab.name === event.target.dataset.name
		})

		const activePlane = Array.from(document.querySelectorAll('.about')).find(plane => {
			return plane.id === event.target.dataset.name
		})

		console.log(activePlane)

		activeTab.classList.add('active');
		activePlane.classList.add('active_plane');
	}
}

$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		easing: 'ease',
		infinite: true,
		initialSlide: 0,
		autoplay: false,
		autoplaySpeed: 2000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: false,  //перетащить мышкой
		swipe: false, // откл на тел.
		touchMove: true,
		centerMode: false,
		variableWidth: true,
		rows: 1,
		slidesPerRow: 1,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}],
		mobileFirst: true

	});	
});