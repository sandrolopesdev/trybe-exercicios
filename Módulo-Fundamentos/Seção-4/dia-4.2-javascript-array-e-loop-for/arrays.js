// Criando um laço de repetição.

// Crie um laço de repetiçao do array abaixo:

let pizzas = ['Frango com Catupiry', 'Palmito', 'Calabreza', 'Atum'];

for (let index = 0; index < pizzas.length; index += 1) {
    console.log(pizzas[index]);
}

// Adicione um item na última posição do array:

pizzas.push('Margerita');
console.log(pizzas);

// Adicione um item na primeira posição do array:

pizzas.unshift('Queijo');
console.log(pizzas);

// Remova a última posição do array:

pizzas.pop();
console.log(pizzas);

// Remova a primeira posição do array:

pizzas.shift();
console.log(pizzas);

// Descubra qual o índice de "Palmito" no array:

let index = pizzas.indexOf('Palmito');
console.log(index);

// PARA FIXAR;

/// Obtenha o valor “Serviços” do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

/// Procure o índice do valor “Portfólio” do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOf = menu.indexOf('Portfólio');

console.log(indexOf);

/// Adicione o valor “Contato” no final do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');

console.log(menu);