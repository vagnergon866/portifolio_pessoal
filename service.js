// Função para limitar o campo Nome para aceitar no máximo 30 caracteres
function limitarNome() {
    const nome = document.getElementById("nome");
    if (nome.value.length > 30) {
        alert('O nome deve conter no máximo 30 caracteres.');
        nome.value = nome.value.substring(0, 30); // Remove caracteres extras
    }
}

// Função para validar que o E-mail possui o @
function validarEmail() {
    const validaEmail = document.getElementById('email');
    if (!validaEmail.value.includes('@')) {
        alert('Por favor, insira um e-mail válido com "@".');
    }
}

// Função para limitar o campo Mensagem para aceitar no máximo 100 caracteres
function limitarMensagem() {
    const mensagem = document.getElementById("mensagem");
    if(mensagem.value.length > 100) {
        alert('A mensagem deve conter no máximo 100 caracteres.');
        mensagem.value = mensagem.value.substring(0, 100);
    }     
}

// Funçao para emitir o alerta quando clicar no botão Enviar
function botaoAlerta() {
        alert("Mensagem enviada com sucesso!")
    }

