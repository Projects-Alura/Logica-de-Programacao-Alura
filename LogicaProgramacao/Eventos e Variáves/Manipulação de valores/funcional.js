const input = document.getElementById("numero1");

function getNumero() {
    const n = parseInt(input.value, 10);
    return Number.isNaN(n) ? 0 : n;
}

function atualizarNumero(n) {
    input.value = n;
    console.log(n);
}

function aumentarNumero() {
    let numero = getNumero();
    if (numero < 10) {
        numero++;
        atualizarNumero(numero);
    }else {
        alert("Número máximo atingido!");
    }
}

function diminuirNumero() {
    let numero = getNumero();
    if (numero > 0) {
        numero--;
        atualizarNumero(numero);
    }else {
        alert("Número mínimo atingido!");
    }
}