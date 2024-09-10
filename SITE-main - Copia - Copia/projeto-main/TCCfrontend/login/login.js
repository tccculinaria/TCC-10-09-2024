// Selecione o botão pelo ID
let btnAcessar = document.getElementById('btnAcessar');

// Adicione um ouvinte de evento para o clique no botão
btnAcessar.addEventListener('click', function() {
    // Pegue o valor do email inserido
    let email = document.getElementById('email').value;
    // Pegue o valor da senha inserida
    let senha = document.getElementById('senha').value;

    // Expressão regular para validar o formato do email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifique se o email inserido corresponde ao formato esperado e se a senha não está vazia
    if (emailRegex.test(email) && senha.trim() !== "") {
        // Redirecione para a URL desejada
        window.location.href = "tcc.html";
    } else {
        // Se o email não for coerente ou a senha estiver vazia, exiba uma mensagem de erro
        alert("Por favor, insira um email válido e uma senha.");
    }
});
