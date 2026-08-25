function criarTermo() {
    const jmTermo = document.querySelector(".jmTermo")

    for (let c = 1; c <= 5 ; c++) {
        for (let i = 1; i <= 5 ; i++) {
            let jmQuad = document.createElement("div")
            jmQuad.classList.add("casa")
            jmTermo.appendChild(casa)
        }
    }   
}

criarTabuleiro()