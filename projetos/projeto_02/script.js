const listaPalavras = [
"CASAS",
"CARRO",
"MORAR"
];


const tabuleiro = document.querySelector(".jmTermo");

const inputText = document.querySelector(".jmInput");

const btnEnviar = document.querySelector(".jmBtnEnviar");

const contador = document.querySelector(".jmH1");

const btnReset = document.querySelector(".jmReset");

const modalVitoria = document.querySelector(".jmModalVitoria");

const modalDerrota = document.querySelector(".jmModalDerrota");

const botoesFechar = document.querySelectorAll(".jmFecharModal");


let palavraCorreta =
listaPalavras[Math.floor(Math.random() * listaPalavras.length)];

let tentativaAtual = 0;



function criarTabuleiro() {

const antigo = document.querySelector(".jmQuadrado");

if (antigo) {
    antigo.remove();
}


const quadrado = document.createElement("div");

quadrado.classList.add("jmQuadrado");


for (let i = 0; i < 6; i++) {

    const linha = document.createElement("div");

    linha.classList.add("linhaTabuleiro");


    for (let j = 0; j < 5; j++) {

        const casa = document.createElement("div");

        casa.classList.add("casa");

        linha.appendChild(casa);
    }


    quadrado.appendChild(linha);
}


tabuleiro.appendChild(quadrado);


}



function atualizarContador() {

contador.innerHTML =
    `<span class="jmGreen">${tentativaAtual}</span>/6`;


}



function abrirModal(modal) {

modal.classList.add("is-active");


}



function fecharModais() {

modalVitoria.classList.remove("is-active");

modalDerrota.classList.remove("is-active");


}


function finalizarJogo() {

btnEnviar.disabled = true;

inputText.disabled = true;

btnEnviar.style.opacity = "0.5";

inputText.style.opacity = "0.5";


}



function verificarPalavra() {


if (tentativaAtual >= 6) {
    return;
}


const palavra =
    inputText.value.trim().toUpperCase();



if (palavra.length !== 5) {

    alert("Digite uma palavra com 5 letras.");

    inputText.focus();

    return;
}


const linhas =
    document.querySelectorAll(".linhaTabuleiro");

const linhaAtual =
    linhas[tentativaAtual];

const casas =
    linhaAtual.children;




for (let i = 0; i < 5; i++) {

    casas[i].textContent = palavra[i];


    if (palavra[i] === palavraCorreta[i]) {

        casas[i].classList.add("certo");

    } else if (palavraCorreta.includes(palavra[i])) {

        casas[i].classList.add("presente");

    } else {

        casas[i].classList.add("erro");
    }
}


tentativaAtual++;

atualizarContador();




if (palavra === palavraCorreta) {

    finalizarJogo();

    setTimeout(() => {
        abrirModal(modalVitoria);
    }, 300);

    return;
}



if (tentativaAtual === 6) {

    finalizarJogo();

    setTimeout(() => {
        abrirModal(modalDerrota);
    }, 300);

    return;
}




inputText.value = "";

inputText.focus();


}



function reiniciarJogo() {

palavraCorreta =
    listaPalavras[
        Math.floor(Math.random() * listaPalavras.length)
    ];


tentativaAtual = 0;


atualizarContador();


btnEnviar.disabled = false;

inputText.disabled = false;


btnEnviar.style.opacity = "1";

inputText.style.opacity = "1";


inputText.value = "";

fecharModais();

criarTabuleiro();

inputText.focus();


}



btnEnviar.addEventListener(
"click",
verificarPalavra
);

inputText.addEventListener(
"keydown",
(e) => {

    if (e.key === "Enter") {

        verificarPalavra();
    }
}


);

btnReset.addEventListener(
"click",
reiniciarJogo
);



botoesFechar.forEach(
(botao) => {

    botao.addEventListener(
        "click",
        reiniciarJogo
    );
}


);



criarTabuleiro();

inputText.focus();

