const timeNodes = [...document.querySelectorAll('[data-time]')];

const segundos = 
  timeNodes.map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, segs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + segs;
  })
  .reduce((total, vidSegundos) => total + vidSegundos);

let segundosFaltantes = segundos;
const hours = Math.floor(segundosFaltantes / 3600);
segundosFaltantes = segundosFaltantes % 3600;  

const mins = Math.floor(segundosFaltantes / 60);
segundosFaltantes = segundosFaltantes % 60;

const total = `Tempo total dos vídeos: ${hours} : ${mins} : ${segundosFaltantes}`;
console.log(total)
const paragrafo = document.createElement('p');
paragrafo.textContent = total;
document.body.appendChild(paragrafo)

