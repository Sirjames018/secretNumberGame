let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}

function mensagemInicial(){
exibirTextoNaTela("h1", "Secret number game");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentantivas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("h1","Acertou!");
        exibirTextoNaTela("p", mensagemTentantivas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p","O número secreto é menor");
        }
        else{
            exibirTextoNaTela("p","O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   
   if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
   }

   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio(); 
    }
    else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true)
}

















/*imC();

function imC(high,wheight){
high = prompt(`Qual a sua Altura? `);
wheight = prompt(`Qual o seu peso? `);

let imc =(wheight/(high*high)*10000).toFixed(2);
console.log(`Seu Imc é ${imc}`);
}
*/









/*function nome(nome){
   console.log(`Olá, ${nome}!`);
}

nome("Carlos");
*/

/*function valor(num1,num2,num3){
    parseInt(num4 = num1+num2+num3);
    parseInt(console.log(num4 = num4/3));
}
valor(4,5,6,);
*/

/*function maior(num1,num2){
    if(num1 > num2){
        console.log(num1);
    }
    else{
        console.log(num2);
    }
}
maior(9,8)
*/

/*function numPorNum(num1){
    parseInt(console.log(num2 = num1*num1));
}
numPorNum(7)
*/