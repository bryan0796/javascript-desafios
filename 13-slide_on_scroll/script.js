function debounce(callback, delay = 20) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}

const slideImagens = document.querySelectorAll('.slide-in');

function checkSlide(event) {
  slideImagens.forEach(image => {
    // metade da imagem
    const slideEm = (window.scrollY + window.innerHeight) - image.height / 2;
    // base da imagem
    const baseDaImagem = image.offsetTop + image.height;
    const isHalfShow = slideEm > image.offsetTop;
    const isNotScrolledPast = window.screenY < baseDaImagem;
    if (isHalfShow && isNotScrolledPast) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide));
