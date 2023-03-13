const listaUsuarios = JSON.parse(localStorage.getItem('RecadOSRegistros') || '[]');
const usuarioLogado = sessionStorage.getItem('RecadOSLogado');
const formularioCadastro = document.getElementById('formCadastro');
document.addEventListener('DOMContentLoaded', () => {
    if (usuarioLogado) {
        window.location.href = "recados.html";
        return;
    }
})
formularioCadastro.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let nome = document.getElementById('cadastroNome').value;
    let email = document.getElementById('cadastroEmail').value;
    let senha1 = document.getElementById('cadastroSenha1').value;
    let senha2 = document.getElementById('cadastroSenha2').value;
    if (nome.length < 5) {
        alert('Nome deve ter no minimo 5 caracteres');
        return;
    }
    if (senha1 < 6 || senha2 < 6) {
        alert('Senha deve ter no minimo 6 caracteres');
        return;
    }
    if (senha1 !== senha2) {
        alert('Senhas não coincidem');
        return;
    }
    let usuarioExiste = listaUsuarios.some((valor) => valor.email === email)
    if (usuarioExiste) {
        alert('E-mail já cadastrado!');
        return
    }
    const dados = {
        nome: nome,
        email: email,
        senha: senha1,
        recados: []
    }
    listaUsuarios.push(dados);
    salvarLocal(listaUsuarios);
    alert('Usuário cadastrado com sucesso!');
    window.location.href = "index.html";
});
function salvarLocal(listaUsuarios) {
    localStorage.setItem('RecadOSRegistros', JSON.stringify(listaUsuarios));
};