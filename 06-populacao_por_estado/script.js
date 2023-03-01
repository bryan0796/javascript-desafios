class PopulacaoPorEstado {
  constructor() {
    this.estados = [];
    this.populacao = [];
    this.idEstado;
    this.inputBusca = document.querySelector('.busca');
    this.resultados = document.querySelector('.resultados');
    this.fetchEstados = this.fetchEstados.bind(this);
  }

  init() {
    this.evento();
  }
  
  evento() {
    this.inputBusca.addEventListener('change', this.fetchEstados);
  }

  async fetchEstados() {
    await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response => response.json())
    .then(json => {
      this.estados.push(...json);
      this.buscarIdEstado();
    });
  }  

  buscarIdEstado() {
    const regex = new RegExp(this.inputBusca.value, 'gi');
    this.estados.map(estado => {
      if (estado.nome.match(regex)) {
        this.idEstado = estado.id;
      }
    });
    this.buscarPopulacao(this.idEstado);
  }

  buscarPopulacao(id) {
    fetch(`https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/${id}`)
      .then(response => response.json())
      .then(json => {
        this.populacao.push(json.projecao.populacao);
        this.mostrarDados();
      });
  }
  
  mostrarDados() {
    this.resultados.innerHTML = ` <li>População: ${this.populacao}</li>`;
    this.populacao.shift();
  }
}

const iniciar = new PopulacaoPorEstado;
iniciar.init();
