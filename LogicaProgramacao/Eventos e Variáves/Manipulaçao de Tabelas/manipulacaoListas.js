function cadastrarAluno(){
    var nomeAluno = document.getElementById("nomeAluno").value;
    var matriculaAluno = document.getElementById("matriculaAluno").value;
    var emailAluno = document.getElementById("emailAluno").value;

    const tabelaCadastro = document.getElementById("tabelaCadastro").getElementsByTagName("tbody")[0];
    const novoCadastro = tabelaCadastro.insertRow();

    const celulaNome = novoCadastro.insertCell(0);
    const celulaMatricula = novoCadastro.insertCell(1);
    const celulaEmail = novoCadastro.insertCell(2);

    celulaNome.textContent = nomeAluno;
    celulaMatricula.textContent = matriculaAluno;
    celulaEmail.textContent = emailAluno;

    console.log(celulaNome);
    console.log(celulaMatricula);
    console.log(celulaEmail);

    document.getElementById("nomeAluno").value = "";
    document.getElementById("matriculaAluno").value = "";
    document.getElementById("emailAluno").value = "";

    const celulaAcoes = novoCadastro.insertCell(3);

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.style.backgroundColor = "#ff4d4d"; // Vermelho
    btnExcluir.onclick = function() {
        const linha = this.parentNode.parentNode;
        linha.remove();
    };

    celulaAcoes.appendChild(btnExcluir);

}

function trocarFundo(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

