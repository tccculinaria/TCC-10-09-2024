// Função para alternar entre modos e salvar a preferência no localStorage
function toggleModo() {
    const body = document.body;

    // Adiciona a classe de transição antes de mudar o modo
    body.classList.add('transicao');

    // Alterna entre modo claro e escuro
    body.classList.toggle('modo-claro');
    body.classList.toggle('modo-escuro');

    // Salva a preferência no localStorage
    if (body.classList.contains('modo-escuro')) {
        localStorage.setItem('modo', 'escuro');
    } else {
        localStorage.setItem('modo', 'claro');
    }
}

// Carrega a preferência do modo do localStorage ao carregar a página
function carregarModo() {
    const modo = localStorage.getItem('modo');
    if (modo === 'escuro') {
        document.body.classList.add('modo-escuro');
        document.body.classList.remove('modo-claro');
    } else {
        document.body.classList.add('modo-claro');
        document.body.classList.remove('modo-escuro');
    }

    // Remover a transição ao carregar a página
    setTimeout(() => {
        document.body.classList.remove('transicao');
    }, 10); // Remoção imediata da classe de transição
}

// Associa a função ao evento de clique do botão
document.getElementById('toggleModo').addEventListener('click', toggleModo);

// Carrega o modo preferido ao carregar a página
window.addEventListener('load', carregarModo);
