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
};
triangle(60, -14, 60);

//Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console: Bem-vinda, Margarida

console.log(`Bem-vinda, ${info.personagem}`);

// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:

info.recorrente = 'Sim';
console.log(info);

// Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

console.log(`RETORANDO SOMENTE AS CHAVES:`);
const iteraInfoKey = () => {
  for (let key in info) {
    console.log(key); // Retornando apenas as chaves
  }
};
iteraInfoKey();

// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

console.log(`RETORNANDO OS VALORES CONTIDOS NAS CHAVES:`);
const iteraInfoKeyValue = () => {
  for (let key in info) {
    console.log(info[key]); // Retornando somente os valores contidos nas chaves
  }
};
iteraInfoKeyValue();

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, 
// Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

const concat = () => {
  for (let keyInfo in info) {
    console.log(`${info[keyInfo]} e ${info2[keyInfo]}`);
  }
};
concat();


// ROCKET

// Usando o objeto abaixo, faça os exercícios a seguir:



let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

console.log(`'O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo}'`);

// Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:

leitor.livrosFavoritos.push(
  {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
  }
);
console.log(leitor);

// Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos.`);
