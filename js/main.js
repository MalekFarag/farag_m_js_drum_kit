(() => {
	console.log('JS Fired.');

	function playDrumSound(e){
		let audio = document.querySelector(`audio[data-key='${e.keyCode}']`);

		if (!audio) { return; }

		audio.currentTime = 0;
		//audio.loop = true;
		audio.play();

		let key = document.querySelector(`div[data-key='${e.keyCode}']`);
		key.classList.add('playing')
	}

	function removePlayingClass(e) {
		//removing css class in order to transition back
		
		if (e.propertyName !== 'transform') {
			return;
		} else {
			console.log('Transition Ended.')
		}
	e.currentTarget.classList.remove('playing')
	}

	window.addEventListener('keydown', playDrumSound);

	const keys = Array.from(document.querySelectorAll('.key'));



	keys.forEach(key => key.addEventListener('transitionend', removePlayingClass))
		}

)();