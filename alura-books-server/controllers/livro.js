const {
  getTodosLivros,
  getLivroByID,
  addLivro,
  modificaLivro,
  deletaLivro,
} = require('../services/livro');

const getLivros = (req, res) => {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getLivro = (req, res) => {
  try {
    const id = req.params.id;

    if (id && !Number(id)) {
      res.status(422);
      res.send(`ID Invalido`);
      return;
    }
    const livro = getLivroByID(id);
    res.send(livro);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const postLivro = (req, res) => {
  try {
    if (!req.body.nome) {
      res.status(422);
      res.send(`Campo nome obrigatorio`);
      return;
    }

    const livroNovo = req.body;
    addLivro(livroNovo);
    res.status(201);
    res.send('Livro inserido com sucesso!');
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const patchLivro = (req, res) => {
  try {
    const id = req.params.id;

    if (id && !Number(id)) {
      res.status(422);
      res.send(`ID Invalido`);
      return;
    }
    const body = req.body;
    modificaLivro(body, id);
    res.send(`Livro ${id} modificado com sucesso`);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteLivro = (req, res) => {
  try {
    const id = req.params.id;
    if (id && !Number(id)) {
      res.status(422);
      res.send(`ID Invalido`);
      return;
    }
    deletaLivro(id);

    res.send(`Livro ${id} removido com sucesso`);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};
