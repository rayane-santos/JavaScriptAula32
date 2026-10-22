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

let contador = 20;

while (contador >= 0) {
    console.log(contador);
    contador -= 2; // Diminui 2 a cada volta para pegar apenas os pares
}