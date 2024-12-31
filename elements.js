const html = document.querySelector('html');
const button = document.querySelector('.bx-sun');

button.addEventListener('click', () => {
  html.classList.toggle('light');
});

import { startGrav, stopGrav } from './gravador.js';
const btPlay = document.querySelector('.bx-play-circle');
const btStop = document.querySelector('.bx-stop-circle');

btPlay.addEventListener('click', startGrav);
btStop.addEventListener('click', stopGrav);
