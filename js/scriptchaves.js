let codigoGerado = null; 

function gerarCodigo(tamanho) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const caracteresEspeciais = '!@#$%&';

    let codigo = Array.from({ length: tamanho }, () =>
        caracteres[Math.floor(Math.random() * caracteres.length)]
    );

    const posicaoAleatoria = Math.floor(Math.random() * tamanho);
    codigo[posicaoAleatoria] = caracteresEspeciais[Math.floor(Math.random() * caracteresEspeciais.length)];

    return codigo.join('');
}

function mostrarCodigo() {
    if (!codigoGerado) {  
        codigoGerado = gerarCodigo(25);  
    }
    document.getElementById("codigoGerado").textContent = codigoGerado;
}

function copiarCodigo() {
    const codigo = document.getElementById("codigoGerado").textContent;
    if (codigo) {
        navigator.clipboard.writeText(codigo);
    }
}
