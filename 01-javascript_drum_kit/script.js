 function playSound (event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');  
};

function playSoundTouch (event) {
  const audio = document.querySelector(`audio[data-index="${event.target.innerText}"]`);
  const key = document.querySelector(`.key[data-index="${event.target.innerText}"]`)
  console.log(key)
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');  
};

function removeTransition(event) {
  if(event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

const arrayKey = [...keys];
console.log(arrayKey)

window.addEventListener('keydown' , playSound);
keys.forEach((key) => {
  key.addEventListener('touchstart', playSoundTouch);
})

keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
})


