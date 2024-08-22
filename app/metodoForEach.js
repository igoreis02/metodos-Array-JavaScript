const elementoParaInseriLivro = document.getElementById('livros');
const elementoComValorTotalDeLivrosDsiponiveis = document.getElementById('valor_total_livros_disponiveis');



function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorTotalDeLivrosDsiponiveis.innerHTML = '';
    elementoParaInseriLivro.innerHTML = ''
    listaDeLivros.forEach(livro => {
        // let disponibilidade = verificarDisponibilidadeDosLivros(livro);
        let disponibilidade = livro.quantidade > 0 ? 'livro_imagens' : 'livro_imagens indisponivel'
        elementoParaInseriLivro.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
        ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco}</p>
        <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
    });
}

function livrosDisponiveis (livro){
    // if (livro.quantidade > 0){
    //     return 'livro_imagens'
    // }else{
    //     return 'livro_imagens indisponivel'
    // }

    
}