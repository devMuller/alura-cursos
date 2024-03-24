const { Router } = require('express');
const {
  getFavorito,
  postFavorito,
  deleteFavorito,
} = require('../controllers/favorito');

const router = Router();

router.get('/', getFavorito);

router.post('/:id', postFavorito);

router.delete('/:id', deleteFavorito);

module.exports = router;
