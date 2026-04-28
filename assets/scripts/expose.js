// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.querySelector('select');
  const hornImage = document.querySelector('img');
  const hornSound = document.querySelector('audio');
  const volumeSlider = document.querySelector('input[type="range"]');
  const volumeImage = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;

    if (selectedHorn === 'air-horn') {
      hornImage.src = 'assets/images/air-horn.svg';
      hornSound.src = 'assets/audio/air-horn.mp3';
    } else if (selectedHorn === 'car-horn') {
      hornImage.src = 'assets/images/car-horn.svg';
      hornSound.src = 'assets/audio/car-horn.mp3';
    } else if (selectedHorn === 'party-horn') {
      hornImage.src = 'assets/images/party-horn.svg';
      hornSound.src = 'assets/audio/party-horn.mp3';
    }
  });

  volumeSlider.addEventListener('input', () => {
    const volume = Number(volumeSlider.value);

    hornSound.volume = volume / 100;

    if (volume === 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeImage.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeImage.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeImage.src = 'assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click', () => {
    hornSound.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}