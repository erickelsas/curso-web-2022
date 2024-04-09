window.objetos = [
    'Cadeira',
    'Impressora',
    'Garfo'
]

const campo = document.getElementById('text');

const add = document.getElementById('add');
const ord = document.getElementById('ord');

add.addEventListener('click', () => {
    conteudo = campo.value;
    if(conteudo == ''){
        alert('Informe um valor válido!');
    } else {
        if(window.objetos.indexOf(conteudo) != -1){
            alert('Objeto já foi adicionado!');
            campo.value = '';
            campo.focus();
        } else{
            window.objetos.push(conteudo);
            console.log(window.objetos);
            campo.value = '';
            campo.focus();
        }
    }
})

ord.addEventListener('click', () => {
    window.objetos.sort();
    console.log(window.objetos);
})