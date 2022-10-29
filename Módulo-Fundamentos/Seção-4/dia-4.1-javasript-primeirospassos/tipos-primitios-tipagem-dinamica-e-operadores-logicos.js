// No exemplo abaixo, temos as informações de um paciente. Utilize o operador typeof para imprimir qual o tipo das variáveis patientId, 
// isEnrolled, patientInfo e patientEmail. Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão? Exemplo: 
// console.log(typeof patientId) retornará number.

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
// <--!Resposta-->
console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

// O que aconteceria se tentássemos checar qual o tipo da variável patientAge?
console.log(typeof patientAge);

// Experimente também trocar o valor de patientId = 50 para patientId = '50'
patientId = '50';

// Execute novamente um console.log() para imprimir o tipo dessa variável após a modificação.
console.log(typeof patientId);

// PARA FIXAR

// Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.
// Crie uma constante chamada base e atribua a ela o valor 5.
const base = 5;

// Crie uma constante uma chamada heigth e atribua a ela o valor 8.
const heigth = 8;

// Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela heigth. 
// Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
const area = base * heigth;
console.log(area);

// Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
const perimeter = (base * 2) + (heigth * 2);
console.log(perimeter);