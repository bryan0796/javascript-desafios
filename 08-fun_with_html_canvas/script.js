const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function drawnTouch(event) {
  
  event.preventDefault();
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 60%)`;
  ctx.beginPath();
  [lastX, lastY] = [event.touches[0].clientX, event.touches[0].clientY];
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(event.touches[0].clientX, event.touches[0].clientY);
  ctx.stroke();
  [lastX, lastY] = [event.touches[0].clientX, event.touches[0].clientY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }

}

function drawn(event) {
  if (!isDrawing) return; // para a função quando o mouse não estiver pressionado
  ctx.strokeStyle = `hsl(${hue}, 100%, 60%)`;
  ctx.beginPath();
  // começa de
  ctx.moveTo(lastX, lastY);
  // vai para
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 0 || ctx.lineWidth <= 20) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousedown", (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});

canvas.addEventListener("mousemove", drawn);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

canvas.addEventListener("touchstart", (event) => {
  ctx.lineWidth = 30;
  isDrawing = true;
  [lastX, lastY] = [event.touches[0].clientX, event.touches[0].clientY];
});
canvas.addEventListener("touchmove", drawnTouch)
canvas.addEventListener("touchend", () => (isDrawing = false));
canvas.addEventListener("touchcancel", () => (isDrawing = false));
