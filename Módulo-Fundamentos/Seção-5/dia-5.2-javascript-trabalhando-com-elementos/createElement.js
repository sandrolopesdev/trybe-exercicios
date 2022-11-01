    // Crie um irmão para `elementoOndeVoceEsta`.

// Passo a passo:

// 1. Recupere o elemento pai com querySelect;
// 2. Crie o novo elemento com createElement;
// 3. Dê um nome para o elemento usando o .id ou .className;
// 4. Relacione o elemento pai com o novo elemento filho com appenChild.


const pai = document.querySelector('#pai');
const quintoFilho = document.createElement('section');
quintoFilho.id = 'quintoFilho'
pai.appendChild(quintoFilho);

// Crie um filho para elementoOndeVoceEsta.


const filhoDoPai = document.querySelector('#elementoOndeVoceEsta');
const terceiroFilhoDoFilho = document.createElement('section');
terceiroFilhoDoFilho.id = 'terceiroFilhoDoFilho';
filhoDoPai.appendChild(terceiroFilhoDoFilho);

// Crie um filho para primeiroFilhoDoFilho.

const filhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
const filhoDoBisneto = document.createElement('section');
filhoDoBisneto.id = 'primeiroFilhoDoFilhoDoFilho';
filhoDoFilho.appendChild(filhoDoBisneto);

// A partir desse filho criado, acesse terceiroFilho.

