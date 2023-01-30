// const removeTransition = (e) => {
//   if (e.propertyName !== 'transform') return;
//   e.target.classList.remove('playing');
// };

const playSound = (e) => {
  // const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  // const key = document.querySelector(`div[data-key="${e.code}"]`);
  const audio = document.querySelector(`audio.${e.code}`);
  const key = document.querySelector(`.${e.code}`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');

  window.addEventListener('keyup', (e) => {
    key.classList.remove('playing');
  });
};

window.addEventListener('keydown', playSound);
