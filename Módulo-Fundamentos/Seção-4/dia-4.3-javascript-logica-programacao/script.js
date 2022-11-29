let fruits = [3, 4, 10, 1, 12];
let sum = 0;
//percorrer

//somar

//condição se maior que 15

//condição se menor que 15

const frutas = () => {
  for (let index = 0; index < fruits.length; index += 1) {
    sum = sum += fruits[index];
  }
  if (sum > 15) {
    console.log(`${sum} é maior de 15!`);
  } else {
    console.log(`${sum} é menor do que 15!`);
  }
}
frutas();