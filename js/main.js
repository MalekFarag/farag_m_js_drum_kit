(() => {
	console.log('JS Fired.');

	function playDrumSound(e){
		let audio = document.querySelector(`audio[data-key='${e.keyCode}']`);

		if (!audio) { return; }

		audio.currentTime = 0;
		audio.loop = true;
		audio.play();
	}

	window.addEventListener('keydown', playDrumSound);
		}

)();