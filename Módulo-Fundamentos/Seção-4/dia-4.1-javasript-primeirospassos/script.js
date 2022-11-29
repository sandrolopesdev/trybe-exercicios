//Exercício 1:
//Variáveis que armazenam os valores base de comparação
const a = 13;
const b = 22;

//Lógica que retorna o maior número de dois
if (a > b) {
  console.log(`O maior número é: ${a}`); //Utilização de template literals
}
else if (b > a) {
  console.log(`O maior número é: ${b}`); //Utilização de template literals
}

//Exercício 2:
//Variáveis que armazenam os valores a serem comparados
const a = 2;
const b = 2;
const c = 2;

//Lógica que irá comparar 3 valores e retrnar o mais deles
if (a > b && a > c) {
  console.log(`O número ${a} é o maior deles!`); //Utilização de template literals
} else if (b > a && b > c) {
  console.log(`O número ${b} é o maior deles!`); //Utilização de template literals
} else if (c > a && c > b) {
  console.log(`O número ${c} é o maior deles!`); //Utilização de template literals
} else {
  console.log(`Os valores são iguais`); //Utilização de template literals
}

//Exercício 3:
//Variáveis que armazenam os valores positivos e negativos a serem comparados
const a = 1.4;

//Utilizada arrow function para adequação aos padrões atuais
const compare = () => {
  if (a > 0) {  //Verifica se o valor da variável é maior que 0, caso retorne true é executado o bloco "Positive"
    console.log("Positive");
  } else if (a < 0) { //Verifica se o valor é menor do que 0, caso retorne trune é executado o bloco "Negative"
    console.log("Negative");
  } else { //Lógica que onde qualquer número que não seja positivo ou negativo execute o bloco "Zero"
    console.log("Zero");
  }
}
compare(); //Invoca função

//Exercício 4:
// Variáveis que armazenam os valores dos lados de um triângulo
const ladoA = 18;
const ladoB = 60;
const ladoC = 60;

//Função para verificar os ângulos de cada lado
const triangulo = () => {
  //Estrutura condicional que verifica se os lados são equivalentes
  if (ladoA === 60 && ladoB === 60 && ladoC === 60) {
    console.log("O conjunto de valores atribuídos às variáveis correspondem aos ângulos de um triángulo equilátero.");
  } else { //Qualquer valor que não seja equivalente ao grau de um dos lados do triângulo equilátero
    console.log("Os valores não correspondem aos ângulos de um triângulo equilátero!");
  }
}
triangulo(); //Invoca função

//Exercício 5:
//Variável que armazenará uma arrow function onde é executado um bloco switch/case
const checkMoviment = (piece) => {
  switch (piece.toLowerCase()) { //toLowerCase é o responsável por fazer a função reconhecer a string escrita de forma maiúscula
    case 'peão': //Cria o caso e retorna true caso a 
      console.log("Os peões se movem somente para frente, uma casa por vez, uma exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas.");
      break; //Interrompe a execução do bloco de código quando o case retorna true
    case 'bispo':
      console.log("O bispo se move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça.");
      break;
    case 'torre':
      console.log("A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.");
      break;
    case 'cavalo':
      console.log("O cavalo é a única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”.");
      break;
    case 'rainha':
      console.log("A rainha é considerada a peça mais poderosa do tabuleiro. Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.");
      break;
    case 'rei':
      console.log("O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente.");
    default:
      console.log("Peça inválida, por favor verificar a peça desejada.");
  }
}
checkMoviment('TORRE'); //Invoca a função e atribuiu um determina um parâmetro que será analisado dentro do switch

//Exercício 6:
//Variável que armazena a nota do aluno
const percentage = 49;
let note; //Variável que recebe a nota nota de acordo com o patamar

const finalNote = () => { //A cada patamar atingido a lógica dentro a arrow function reatribiu um novo valor a variável note
  if (percentage < 0 || percentage > 100) {
    note = 'Erro, insira um valor válido!';
  } else if (percentage >= 90) {
    note = 'A';
  } else if (percentage >= 80 && percentage < 90) {
    note = 'B';
  } else if (percentage >= 70 && percentage < 80) {
    note = 'C';
  } else if (percentage >= 60 && percentage < 70) {
    note = 'D';
  } else if (percentage >= 50 && percentage < 60) {
    note = 'E';
  } else {
    note = 'F';
  }
}
finalNote();
console.log(note);

//Exercício 7:
//Variável que será sobrescrita com true ou false a depender do retorno do bloco if
let isEven;

const whoIsEven = (a, b, c) => {
  if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) { //Caso somente um dos valores retorne true isEven será sobrescrito com true
    isEven = true;
  } else { //Caso todos os parâmetros retornem false, isEven será sobrescrito com false
    isEven = false;
  }
}
whoIsEven(3, 3, 3); //Invoca função
console.log(isEven);

//Exercício 8:
//Variável que será sobrescrita com true ou false a depender do retorno do bloco if
let isOdd;

const whoIsOdd = (a, b, c) => {
  if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) { //Caso somente um dos valores retorne true isOdd será sobrescrito com true
    isOdd = true;
  } else { //Caso todos os parâmetros retornem false, isOdd será sobrescrito com false
    isOdd = false;
  }
}
whoIsOdd(4, 4, 4); //Invoca função
console.log(isOdd);

//Exercício 9:
//Variáveis que receberam valores de custos
const productValue = 100; //Custo de compra do produto
const resaleValue = 145; //Valor de revenda do produto
const tax = 20; //Impostos
let finalValue;

const profitValue = () => { //Função que retorna a subtração do valor de revenda pelo valor do preço de compra e impostos
  finalValue = (resaleValue - productValue) - (tax * resaleValue) / 100;
}
profitValue(); //Invoca função
console.log(`O valor de lucro líquido após diluir o valor de compra e impostos é ${finalValue} reais`);
