const inputs = document.querySelectorAll('.controls input');

function handleUpdate(event) {
  let unidade;
  if (event.target.id === 'padding' || event.target.id === 'blur') {
    unidade = 'px';
  } else {
    unidade = '';
  }
  
  document.documentElement.style.setProperty(`--${this.name}`, this.value + unidade);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
