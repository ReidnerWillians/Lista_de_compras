function adicionarProduto() {

    //recebe o vallor do input do usuário
    let inputCompra = document.getElementById("inputCompra");
    let compra = inputCompra.value;

    //cria novo item (li) e insere na lista de compras) (ul)
    let listaDeCompras = document.getElementById("listaDeCompras");
    let novaCompra = document.createElement("li");
    novaCompra.textContent = compra;
    listaDeCompras.appendChild(novaCompra);



    // Se o valor do input for vazio então mostre uma mensagem de erro para o usuário

    if (compra == "") {
        let mensagemErro = "Digite um produto para adicioná-lo a sua lista"
        mensagem.textContent = mensagemErro
    } else {
        let mensagemSucesso = "Produto adicionado com sucesso!"
        mensagem.textContent = mensagemSucesso;        
    }
    
    //Limpa o campo de input do usuário
    inputCompra.value = "";
}





