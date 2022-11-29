// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
const numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const arr1 = () => {
  for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]); //Estrutura que itera e imprime os valores do array
  }
}
arr1();

// Some todos os valores contidos no array e imprima o resultado;
const numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

const arr2 = () => {
  for (let index = 0; index < numbers2.length; index += 1) {
    sum += numbers2[index]; //Bloco de código responsável por realizar a operação aritimética
  }
}
arr2();
console.log(sum);

// Calcule e imprima a média aritmética dos valores contidos no array;

// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
const numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

const arr3 = () => {
  for (let index = 0; index < numbers3.length; index += 1) {
    sum += numbers3[index];
  }
}
arr3();
let result = sum / numbers3.length;
console.log(result);

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a 
// mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
const numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let result = 0;

const arr3 = () => {
  for (let index = 0; index < numbers3.length; index += 1) {
    result = (sum += numbers3[index] / numbers3.length).toFixed(2);
  }
  if (result > 20) {
    console.log("Valor maior que 20");
  } else {
    console.log("Valor menor ou igual a 20");
  }
}
arr3();
console.log(result);
