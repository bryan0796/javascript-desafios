window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interinResults = true;
recognition.lang = 'pt-br';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', event => {
  const transcricao = Array.from(event.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join(''); 
 
  if (event.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }  
})

recognition.addEventListener('end', recognition.start);

recognition.start();
