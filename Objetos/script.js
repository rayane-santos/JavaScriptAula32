const motorista = {
    idade: 18,
    temCNH: true,
    temCarro: false
}

console.log(motorista)

motorista.idade += 1;
motorista.temCNH = false;
motorista.temCarro = true;

console.log(motorista.idade)

//laço de repetição
for(let contador = 0; contador < 67667; contador++){
    console.log(contador)
}


//laço de repetição
let numero = 5;
for( let contador = 1; contador <= 10; contador++){
    console.log( `${contador} x ${numero} = ${contador * numero} `)
}

let contador = 1;
let numeroWhile = 12;

 while(contador <= 10){
    console.log(contador * numeroWhile)
    contador++;

 }

 for (let i = 20; i >= 0; i -= 2) {
    console.log(i);
}


// exiba os números em ordem decrescente.
let number = 20

while(number >= 0){
 console.log(number);
 number -= 2
}

let number2 = 0
do{
    console.log(`do while: ${number2}`)
    number2 -=2
}while(number >= 0);


//tabuada

let variavel = 6;
for( let contador = 1; contador <= 10; contador++){
    console.log( `${contador} x ${variavel} = ${contador * variavel} `)
}


//contagem regressiva
let pares = 20;

while (pares >= 0) {
  console.log(pares);
  pares -= 2;
}


//contagem regressiva.

for (let inteiros = 10; inteiros >= 1; inteiros--) {
  console.log(inteiros);
}
console.log("fim de contagem");

//lista

const frutas = ["Maçã", "Banana", "Uva", "morango", "Kiwi"];

frutas[0] = "pêra";

console.log(frutas)

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

console.log(frutas.length); 

frutas.push("Manga");

console.log(frutas)

frutas.pop()

console.log(frutas)

frutas.sort()

console.log(frutas)

//funções 
function somar(numero1, numero2){
return numero1 + numero2;
}

const soma = somar(1,1);
console.log(soma);

console.log(6,7);

function dividir(numero1, numero2){
    console.log(`${numero1} / ${numero2} = ${numero1/numero2}`)
}
dividir(100,2);


//01-adicionando elementos

const jogos = ["pou, tom, angela"];

//adicionando mais dois...
jogos.push("Hollow Knight", "Stardew Valley");

console.log(jogos);

//02-removendo o último item

const materiais = ["caderno, cola, borracha, tesoura, caneta"];

materiais.pop()

console.log(materiais);

console.log(materiais.length); 

["caderno, cola, borracha, tesoura"];

4