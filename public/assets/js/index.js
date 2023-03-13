let usuarioLogado = sessionStorage.getItem('RecadOSLogado');
let listaUsuarios = JSON.parse(localStorage.getItem('RecadOSRegistros') || '[]');
let botaoLogin = document.getElementById('entradaBotao');
document.addEventListener('DOMContentLoaded', () => {
    if (usuarioLogado) {
        window.location.href = "recados.html";
    }
})
botaoLogin.addEventListener('click', () => {
    verificarLogin();
})
function verificarLogin() {
    let email = document.getElementById('entradaEmail');
    let senha = document.getElementById('entradaSenha');
    let usuario = listaUsuarios.find(
        (valor) => valor.email === email.value && valor.senha === senha.value);
    if (!usuario) {
        alert('E-mail ou Senha inválidos.');
        return;
    }
    salvarSession(email.value);
    window.location.href = "recados.html";
}
function salvarSession(data) {
    JSON.stringify(sessionStorage.setItem("RecadOSLogado", data));
}