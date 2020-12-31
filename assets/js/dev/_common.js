(function () {
	const gnbDepth1On = () => {
		let path = location.pathname;
		path = path.split('/');
		path = path[2].split('.');
		path = path[0];
		
		const gnbDepth1s = document.querySelectorAll('#gnb .depth1_list .depth1');

		if (path === 'project') {
			gnbDepth1s[0].classList.add('on');
		} else if (path === 'profile') {
			gnbDepth1s[1].classList.add('on');
		}
	}
	gnbDepth1On();

	const projectSpecialMedal = () => {
		const projectConSpecial = document.querySelectorAll('.project_con.special');

		for (let i = 0; i < projectConSpecial.length; i++) {
			const specialMedal = document.createElement('div');
			specialMedal.classList.add('medal');
			specialMedal.innerHTML = '❤️';
			projectConSpecial[i].querySelector('.thumb').appendChild(specialMedal);
		}
	}
	projectSpecialMedal();

	const topBtn = () => {
		const top = document.querySelector('#footer .top');

		top.addEventListener('click', () => {
			window.scrollTo({top: 0, behavior: 'smooth'});
		});
	}
	topBtn();
})();