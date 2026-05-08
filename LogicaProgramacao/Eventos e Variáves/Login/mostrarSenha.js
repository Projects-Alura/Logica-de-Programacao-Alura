var senha = document.getElementById('senha');
var botaoMostrar = document.getElementById('seeSenha');

function mostrarSenha(){

    if (senha.type === "password"){
        senha.type = "text";
        document.getElementById('seeSenha').textContent = "Ocultar senha";
    }else{
        senha.type = "password";
        document.getElementById('seeSenha').textContent = "Mostrar senha";
    }

}