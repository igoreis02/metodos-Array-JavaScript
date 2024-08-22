// const btnFiltrarLivroDeFront = document.getElementById('btnFiltrarLivrosFront');
// const btnFiltrarLivrosBack = document.getElementById('btnFiltrarLivrosBack');
// const btnFiltrarLivrosDados = document.getElementById('btnFiltrarLivrosDados');

//btnFiltrarLivroDeFront.addEventListener('click', filtrarLivros)

const btn = document.querySelectorAll('.btn')

//aqui com o forEach esta vendo qual o botao esta sendo clicado
btn.forEach(btn => btn.addEventListener('click',filtrarLivros))



function filtrarLivros(){
    const elementoBotao = document.getElementById(this.id);
    const categoria = elementoBotao.value;
    let livrosFiltrados = categoria === 'disponivel' ? filtralPorDisponibilidade() : filtrarporCategoria(categoria);
    exibirOsLivrosNaTela(livrosFiltrados);  
    if (categoria === 'disponivel'){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLIvrosNaTela(valorTotal)
    }
}

function filtrarporCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtralPorDisponibilidade() {
    return livros.filter(livros => livros.quantidade > 0);
}

function exibirValorTotalDosLIvrosNaTela(valorTotal){
    elementoComValorTotalDeLivrosDsiponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
}