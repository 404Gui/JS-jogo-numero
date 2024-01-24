let listaDeNumerosSorteado = [];
let numeroLimite = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Joguinho do número secreto');
    exibirTextoNaTela('p', 'Escolha seu número da sorte');
    
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = ('h1', `Você descobriu o número secreto com ${tentativas} tentativas`);
        exibirTextoNaTela('h1', 'Voce acertou!!!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'o número secreto é menor')
        } else {
            exibirTextoNaTela('p', 'o número secreto é maior')
    }   tentativas++;
        limparCampo();
}
    } 

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteado.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteado = [];
    }


    if (listaDeNumerosSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }   else {
        listaDeNumerosSorteado.push(numeroEscolhido);
        console.log(listaDeNumerosSorteado);
        return numeroEscolhido;
    }
     
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}