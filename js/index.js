window.onload = function() {
	const tabs= document.querySelectorAll('.tablink');
	const sliders = document.querySelectorAll('.slider');

	tabs.forEach((tab) => {
		tab.addEventListener('click', tabClickHandler);
	});

	function tabClickHandler(event){
		event.preventDefault();

		if(event.target.classList.contains('tablink')){
			tabs.forEach(tab => {
				tab.classList.remove('active-tab');
			});

			sliders.forEach(plane => {
				plane.classList.remove('slider-active');
			});

			const activeTab = Array.from(tabs).find(tab => {
				return tab.name === event.target.dataset.name
			});

			const activePlane = Array.from(sliders).find(plane => {
				return plane.id === event.target.dataset.name
			});

			activeTab.classList.add('active-tab');
			activePlane.classList.add('slider-active');
		}
	}
};
