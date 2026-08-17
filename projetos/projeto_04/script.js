
const btn = document.querySelector('.btnEnviar')
const senhaCorreta = '12345'

btn.addEventListener('click', function(){
    verificar();
})

function verificar() {
    const input = document.querySelector('.inSenha')
    let inValue = input.value

    const senha = document.querySelector('.senha')
for(let i = 0; i< 5; i ++ ){
    let number = senha.children[i]
    number.textContent = inValue[i]

    if(inValue[i] == senhaCorreta[i]){
        number.classList.add('certo')
    }else{
        number.classList.add('erro')
    }
}
}

