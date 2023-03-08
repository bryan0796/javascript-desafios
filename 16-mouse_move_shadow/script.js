const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function sombra(event) {
  const { offsetWidth: width, offsetHeight: heigth } = hero;
  let { offsetX: x, offsetY: y} = event;

  if (this !== event.target) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / heigth * walk) - (walk / 2));

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(0,0,0,.7)`;
}

hero.addEventListener('mousemove', sombra);