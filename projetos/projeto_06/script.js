const inText = document.querySelector('.inText');
let btnEnviar = document.querySelector('.btnEnviar');
let lista = document.querySelector('.lista');
let tarefas = [];
let contadorId = 0;

btnEnviar.addEventListener('click', function(){
    adicionarTarefa();
})
inText.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        adicionarTarefa();
    }
})
function adicionarTarefa(){
    let texto = inText.value.trim();
    if(texto !== ''){
        contadorId++;
        tarefas.push({id: contadorId, tarefa: texto, concluido: false});
        inText.value = '';
        renderizar();
    }    
}
function renderizar(){
    lista.innerHTML = ''
    tarefas.forEach(function(item){
        let li = document.createElement('li')
        li.textContent = item.tarefa
        lista.appendChild(li)
        let btnEx = document.createElement('button')
        btnEx.innerText = '✕'
        li.appendChild(btnEx)
        btnEx.addEventListener('click', function(e){
            e.stopPropagation();
            tarefas = tarefas.filter(function(t){
                return t.id !== item.id
            })
            renderizar()
        })
    })
}
