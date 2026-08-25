const frases = [
  "Acredite em você e no seu potencial.",
  "Cada dia é uma nova oportunidade para recomeçar.",
  "Você é capaz de superar qualquer desafio.",
  "Pequenos passos também levam a grandes conquistas.",
  "Não desista, seu esforço valerá a pena.",
  "A persistência transforma sonhos em realidade.",
  "Confie no processo e continue avançando.",
  "Você é mais forte do que imagina.",
  "O sucesso começa quando você decide não desistir.",
  "Faça hoje algo pelo qual seu futuro agradecerá.",
];
const frase = document.querySelector('.frase')
const btnFrase = document.querySelector('.btnFrase')

function mostrarFrase(){
    frase.textContent 
    let indice = Math.floor(Math.random() * frases.length)
    frase.textContent = frases[indice];
}
btnFrase.addEventListener('click', function(){
    mostrarFrase()
})