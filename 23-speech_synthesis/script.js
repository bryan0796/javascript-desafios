const msg = new SpeechSynthesisUtterance();
let vozes = [];
const listaDeVozes = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const botaoFalar = document.querySelector("#speak");
const botaoParar = document.querySelector("#stop");

msg.text = document.querySelector('[name="text"]').value;

function adicionarVozes() {
  vozes = this.getVoices();
  listaDeVozes.innerHTML = vozes
    .filter((voz) => voz.lang.includes("pt") || voz.lang.includes("en"))
    .map(
      (voz) => `<option value="${voz.name}">${voz.name} (${voz.lang})</option>`
    )
    .join("");
}

function escolherVoz() {
  msg.voice = vozes.find((voz) => voz.name === this.value);
  mudar();
}

function mudar(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  msg[this.name] = this.value;
  mudar();
}

speechSynthesis.addEventListener("voiceschanged", adicionarVozes);

listaDeVozes.addEventListener("change", escolherVoz);

options.forEach((option) => option.addEventListener("change", setOption));

botaoFalar.addEventListener("click", mudar);
botaoParar.addEventListener("click", () => mudar(false));
