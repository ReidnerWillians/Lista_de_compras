function adicionarProduto() {

    //recebe o vallor do input do usuário
    let inputCompra = document.getElementById("inputCompra");
    let compra = inputCompra.value;

    //cria novo item (li) e insere na lista de compras) (ul)
    let listaDeCompras = document.getElementById("listaDeCompras");
    let novaCompra = document.createElement("li");
    novaCompra.textContent = compra;
    listaDeCompras.appendChild(novaCompra);

    //Mensagem de compra adicionada com sucesso
    let mensagem = "Produto adicionado com sucesso!"
    document.getElementById("mensagem").textContent = mensagem;
    
    //Limpa o campo de input do usuário
    inputCompra.value = "";
}

