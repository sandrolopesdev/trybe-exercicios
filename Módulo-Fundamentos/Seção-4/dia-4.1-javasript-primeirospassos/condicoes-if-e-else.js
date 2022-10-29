// Criar estruturas condicionais com operadores if/else e operadores lógicos será algo muito 
// comum na sua carreira de pessoa desenvolvedora. Então vamos praticar essa habilidade tão importante?

// Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
let desafioTecnico = 76;

// Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. 
// Para isso, considere as seguintes informações:
// /°Se a nota for maior ou igual a 80, imprima “Parabéns, você foi aprovada(o)!”
// /°Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera”
// /°Se a nota for menor que 60, imprima “Você foi reprovada(o)”
const notaCorte = 80;
const listaEspera = 60;

if (desafioTecnico >= notaCorte) {
    console.log('Parabéns, você foi aprovado!');
}
else if (desafioTecnico >= listaEspera && desafioTecnico < notaCorte) {
    console.log('Você está na lista de espera!');
}
else {
    console.log('Você foi reprovado!');
}


// OBS: preferi atribuir os valores das notas de corte em constantes pois são valores que não sofrerão alteração.
