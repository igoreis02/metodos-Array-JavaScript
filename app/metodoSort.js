let btsOrdenarPorPreco =  document.getElementById('btnOrdenarPorPreco');

btsOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreço);


function ordenarLivrosPorPreço(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco); //ordenando pelo preço 
    exibirOsLivrosNaTela(livrosOrdenados);
}
