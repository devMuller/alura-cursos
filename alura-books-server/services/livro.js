const fs = require('fs');

const getTodosLivros = () => {
  return JSON.parse(fs.readFileSync('./livros.json'));
};

const getLivroByID = (id) => {
  const livros = JSON.parse(fs.readFileSync('./livros.json'));
  return livros.filter((livro) => livro.id === id)[0];
};

const addLivro = (livroNovo) => {
  const livros = JSON.parse(fs.readFileSync('./livros.json'));
  const livrosNovos = [...livros, livroNovo];
  fs.writeFileSync('./livros.json', JSON.stringify(livrosNovos));
};

const modificaLivro = (modificacoes, id) => {
  let livros = JSON.parse(fs.readFileSync('./livros.json'));

  const indiceModificado = livros.findIndex((livro) => livro.id === id);

  const conteudoMudado = { ...livros[indiceModificado], ...modificacoes };

  livros[indiceModificado] = conteudoMudado;

  fs.writeFileSync('./livros.json', JSON.stringify(livros));
};

const deletaLivro = (id) => {
  let livros = JSON.parse(fs.readFileSync('./livros.json'));
  livros = livros.filter((livro) => livro.id !== id);
  fs.writeFileSync('./livros.json', JSON.stringify(livros));
};

module.exports = {
  getTodosLivros,
  getLivroByID,
  addLivro,
  modificaLivro,
  deletaLivro,
};
