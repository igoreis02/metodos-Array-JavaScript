let livros = [];
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscaLivrosDaAPI();

//Função assincrona 
async function getBuscaLivrosDaAPI() {
    const res = await fetch(endPointDaAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros)

    exibirOsLivrosNaTela(livrosComDesconto);
}

