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
