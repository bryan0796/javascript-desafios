const addItems = document.querySelector(".add-items");
const listaItens = document.querySelector(".pratos");
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(event) {
  event.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, listaItens);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(items = [], listaItens) {
  listaItens.innerHTML = items.map((prato, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${prato.done ? 'checked' : ''} />
        <label for="item${i}">${prato.text}</label>
      </li>
    `
  }).join('');
}

function toggleDone(event) {
  console.log(event.target)
  if (!event.target.matches('input')) return;
  const element = event.target;
  const index = element.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, listaItens);
}

addItems.addEventListener('submit', addItem);
listaItens.addEventListener('click', toggleDone);

populateList(items, listaItens);
