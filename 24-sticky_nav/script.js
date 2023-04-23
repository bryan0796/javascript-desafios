const nav = document.querySelector('#main');
const topNav = nav.offsetTop;
const heightNav = nav.offsetHeight;

function fixNav() {
  if (window.scrollY >= topNav) {
    document.body.style.paddingTop = heightNav + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav)