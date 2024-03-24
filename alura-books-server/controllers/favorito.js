const {
  getTodosFavoritos,
  addFavorito,
  deletaFavoritoPorId,
} = require('../services/favorito');

const getFavorito = (req, res) => {
  try {
    const favoritos = getTodosFavoritos();
    res.send(favoritos);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const postFavorito = (req, res) => {
  try {
    const id = req.params.id;

    if (id && !Number(id)) {
      res.status(422);
      res.send(`ID Invalido`);
      return;
    }

    addFavorito(id);
    res.status(201);
    res.send('Favorito inserido com sucesso!');
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteFavorito = (req, res) => {
  try {
    const id = req.params.id;
    if (id && !Number(id)) {
      res.status(422);
      res.send(`ID Invalido`);
      return;
    }
    deletaFavoritoPorId(id);

    res.send(`Favorito ${id} removido com sucesso`);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = {
  getFavorito,
  postFavorito,
  deleteFavorito,
};
