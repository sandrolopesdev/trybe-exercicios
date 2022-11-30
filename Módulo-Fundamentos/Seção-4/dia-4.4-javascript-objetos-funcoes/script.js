// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)


const addition = (a, b) => {
  return a + b;
};
console.log(addition(28, 10));


const subtraction = (a, b) => {
  return a - b;
}
console.log(subtraction(28, 10));


const multiplication = (a, b) => {
  return a * b;
}
console.log(multiplication(28, 10));


const division = (a, b) => {
  return a / b;
}
console.log(division(28, 10));


const mod = (a, b) => {
  return a % b;
}
console.log(mod(28, 10));

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

const highestValue = (num1, num2) => {
  if (num1 > num2) {
    console.log(`${num1} é o maior valor!`);
  } else if (num1 < num2) {
    console.log(`${num2} é o maior valor!`);
  } else {
    console.log(`Os valores são idênticos!`);
  }
};
highestValue(14, 41);

//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const highestValueOfThree = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} é o maior dos três valores!`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} é o maior dos três valores!`);
  } else if (num3 > num1 && num3 > num1) {
    console.log(`${num3} é o maior dos três valores!`);
  } else {
    console.log(`Os valores são idênticos!`);
  }
};
highestValueOfThree(15, 15, 15);

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

const positiveOrNegative = (num) => {
  if (num > 0) {
    console.log(`Positive`);
  } else if (num < 0) {
    console.log(`Negative`);
  } else {
    console.log(`Zero`);
  }
};
positiveOrNegative(17.333);

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo 
// e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

const triangle = (leftAngle, rightAngle, base) => {
  let anglesValues = leftAngle + rightAngle + base;

  if (anglesValues === 180) {
    console.log(`true`);
  } else if (anglesValues < 180) {
    console.log(`false`);
  } else {
    console.log(`Error!`);
  }
}
triangle(60, -14, 60);