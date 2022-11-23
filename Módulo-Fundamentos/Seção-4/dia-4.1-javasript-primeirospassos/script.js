//Exercício 1:
//Variáveis que armazenam os valores base de comparação
const a = 13;
const b = 22;

//Lógica que retorna o maior número de dois
if (a > b) {
  console.log(`O maior número é: ${a}`); //Utilização e template literals
}
else if (b > a) {
  console.log(`O maior número é: ${b}`); //Utilização e template literals
}

//Exercício 2:
//Variáveis que armazenam os valores a serem comparados
const a = 2;
const b = 2;
const c = 2;

//Lógica que irá comparar 3 valores e retrnar o mais deles
if (a > b && a > c) {
  console.log(`O número ${a} é o maior deles!`); //Utilização e template literals
} else if (b > a && b > c) {
  console.log(`O número ${b} é o maior deles!`); //Utilização e template literals
} else if (c > a && c > b) {
  console.log(`O número ${c} é o maior deles!`); //Utilização e template literals
} else {
  console.log(`Os valores são iguais`); //Utilização e template literals
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