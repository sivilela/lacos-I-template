// let voltas = 0
// while (voltas < 3) {
//   console.log(voltas);
//   voltas ++
 
// }
// console.log("fim da corrida");


//While = Enquanto
// let resposta = prompt("Qual a fruta cítrica verde e azeda?")

// while(resposta.toLowerCase() !== 'limão'){
//   console.log(`Errou!!! ${resposta}`);
//   resposta = prompt("Qual a fruta cítrica verde e azeda?")
// }
// console.log(`Acertou, é!!!${resposta}`);

// for(let i = 1; i <=10; i++){
//   console.log(`1 X ${i} = ${1*i}`);
//   console.log(`2 X ${i} = ${2*i}`);
//   console.log(`3 X ${i} = ${3*i}`);
//   console.log(`4 X ${i} = ${4*i}`);
//   console.log(`5 X ${i} = ${5*i}`);
//   console.log(`6 X ${i} = ${6*i}`);
//   console.log(`7 X ${i} = ${7*i}`);
//   console.log(`8 X ${i} = ${8*i}`);
//   console.log(`9 X ${i} = ${9*i}`);
//   console.log(`10 X ${i} = ${10*i}`);
//   console.log("**************************");
// }



// for(let i = 1; i <10; i++){
//   console.log(`6 X ${i} = ${6*i}`);
// }

//// Laço for percorrendo arrays
 //const meuArray = [2,4,6,8,10,12]

// for (let i = 0; i < meuArray.length; i++){
//   console.log(meuArray[i]);
// }
// console.log("Sai do laço");

//console.log(meuArray[1]);

// SONDAGEM
// PRÁTICA GUIADA (Errado, refazer)
// 01
// let numero = Number(prompt("Informe um número: "))
// let soma = 0
// while (numero !== 0) {
//   soma = soma+numero
//   console.log(`Número informado ${numero}`);
//   numero = Number(prompt("Informe outro número"))
// }
// console.log(`O número informado foi zero, soma ${soma}`);

// 02
// let numero = Number(prompt("Informe um número: "))
// for(let i = 0; i <= numero; i++){
//   console.log(i);
// }

// 03
// const meuArray = [5,3,1,8,9,7,7]

// for(let i = 0; i < meuArray.length; i++){
//   console.log(`O elemento de indice ${i} é ${meuArray[i]}`);
// }

// 01 - Para guardar na cabeça

// let tipoUsuario = prompt("Informe seu usuário: ").toLocaleUpperCase()

// while(tipoUsuario !== 'A'){
//     console.log("Acesso negado!");
//     tipoUsuario = prompt("Informe seu usuário: ").toLocaleUpperCase()
// }
// console.log("Boas vindas, admin!");

// 02 - Para guardar na cabeça
// const tabuada = 2

// for(let i = 1; i <= 10; i++){
//   console.log(`${tabuada} * ${i} = ${tabuada*i}`);
// }

// 03 - Para guardar na cabeça
// const arrayDeStrings = ["bala", "chocolate", "pirulito"]
// for(let i = 0; i < arrayDeStrings.length; i++){
//   console.log(arrayDeStrings[i].toLocaleUpperCase());
// }

// Tabuada gerada a partir de um número escolhido pelo usuário
// let tabuada = Number(prompt("Digite um número para exibir a tabuada: "))

// for (let i = 1; i <=10; i++){
//   console.log(`${tabuada} X ${i} = ${tabuada*i}`);
// }

