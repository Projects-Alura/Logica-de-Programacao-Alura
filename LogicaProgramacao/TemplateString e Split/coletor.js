function enviarDados() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var email = document.getElementById('email').value;

    console.log('Nome:', nome);
    console.log('Sobrenome:', sobrenome);
    console.log('Email:', email);


}

function alterarTexto(){
    var texto = document. getElementById('textoAlterado').textContent;
    var novoTexto = prompt('Digite o novo texto:');
    console.log('Texto antigo:', texto);
    console.log('Novo texto:', novoTexto);
    document.getElementById('textoAlterado').textContent = novoTexto;
}

function separarValores(){
    var email = document.getElementById('email').value;
    var partes = email.split('@');
    var nomeUsario = partes[0];
    var dominio = partes[1];
    console.log('Nome de usuário:', nomeUsario);
    console.log('Domínio:', dominio);
    document.getElementById('resultadoEmail').textContent = `Nome de Usuário: ${nomeUsario} / Domínio: ${dominio}`;
}