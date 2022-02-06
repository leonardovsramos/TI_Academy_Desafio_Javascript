function limparCampos() {
    document.getElementById("cep").value = ""
    document.getElementById("rua").value = ""
    document.getElementById("bairro").value = ""
    document.getElementById("cidade").value = ""
    document.getElementById("estado").value = ""
}

function callbackEncontrarCep(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById("rua").value = conteudo.logradouro
        document.getElementById("bairro").value = conteudo.bairro
        document.getElementById("cidade").value = conteudo.localidade
        document.getElementById("estado").value = conteudo.uf
    } else {
        limparCampos()
        alert("Atenção, CEP não encontrado!")
    }
}

function pesquisarCEP(cep) {

    // Substituir todos os caracteres que não são números
    let cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo != "") {
        let cepRegexp = /^[0-9]{8}$/;

        if (cepRegexp.test(cepLimpo)) {

            let script = document.createElement("script")
            script.src = "https://viacep.com.br/ws/" + cepLimpo + "/json/?callback=callbackEncontrarCep"
            document.body.appendChild(script)

        } else {
            limparCampos()
            alert("O cep informado está em um formato inválido!")
        }
    } else {
        limparCampos()
        alert("O cep informado está em um formato inválido!")
    }

}