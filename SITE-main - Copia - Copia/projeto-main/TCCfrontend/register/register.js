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

async function enviar() {
    const form = document.querySelector('#formulario');
    form.addEventListener("submit", async event => {
        event.preventDefault();

        // Pegue os valores dos campos do formulário
        const email = document.querySelector('#email').value;
        const senha = document.querySelector('#senha').value;

        // Dados a serem enviados
        const baseData = {
            email: email,
            senha: senha
        };

        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(baseData).toString()
            };

            const response = await fetch("http://localhost:8080/gravador", requestOptions);

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);

            // Redirecionar após sucesso (opcional)
            //window.location.assign("tcc.html");

        } catch (error) {
            console.error('Erro:', error);
        }
    });
}

// Chama a função enviar quando o script é carregado
enviar();
