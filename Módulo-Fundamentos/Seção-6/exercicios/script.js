const cabecalho = document.querySelector('.cabecalho');
const form = document.querySelector('#form');

function header() {
  const criaParagrafo = document.createElement('h2');
  criaParagrafo.innerHTML = '<strong>Concorra a melhor viagem da sua vida!</strong>';
  criaParagrafo.className = 'descricao';
  cabecalho.appendChild(criaParagrafo);
}
header();

const destinos = ['Selecione', 'Cidade', 'Campo', 'Praia', 'Montanhas'];
const recuperaDestinos = document.querySelector('#destinos');

function listaDestinos () {
  for (let index = 0; index < destinos.length; index += 1) {
    const listaDeDestinos = destinos[index];
    const criaOpcoes = document.createElement('option');
    criaOpcoes.innerText = listaDeDestinos;
    criaOpcoes.className = 'opcoes-destinos';
    recuperaDestinos.appendChild(criaOpcoes);
  }
}
listaDestinos();

