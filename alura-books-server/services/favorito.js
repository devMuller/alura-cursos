const fs = require('fs');

const getTodosFavoritos = () => {
  return JSON.parse(fs.readFileSync('./favoritos.json'));
};

const addFavorito = (id) => {
  const livros = JSON.parse(fs.readFileSync('./livros.json'));
  const favoritos = JSON.parse(fs.readFileSync('./favoritos.json'));
  const livroInserido = livros.find((livro) => livro.id === id);
  const novaListaDeFavoritos = [...favoritos, livroInserido];
  fs.writeFileSync('favoritos.json', JSON.stringify(novaListaDeFavoritos));
};

const deletaFavoritoPorId = (id) => {
  const livros = JSON.parse(fs.readFileSync('./favoritos.json'));
  const livroFiltrados = livros.filter((livro) => livro.id !== id);
  fs.writeFileSync('favoritos.json', JSON.stringify(livroFiltrados));
};

module.exports = {
  getTodosFavoritos,
  deletaFavoritoPorId,
  addFavorito,
};
