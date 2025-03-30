document.addEventListener("DOMContentLoaded", function () {
    const inputCartao = document.getElementById("numero");

    inputCartao.addEventListener("input", function (e) {
        let valor = e.target.value.replace(/\D/g, ''); 
        valor = valor.replace(/(\d{4})/g, '$1 ').trim(); 
        e.target.value = valor;
    });
});