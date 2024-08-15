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
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    exibirOsLivrosNaTela(livrosFiltrados)  
}