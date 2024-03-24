import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavoritos, deleteFavorito } from '../services/favoritos';
import { Titulo } from '../components/Titulo';
import livroSrc from '../imgs/livro.png';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    width: 200px;
    color: #fff;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  const fetchFavoritos = async () => {
    const favoritosDaAPI = await getFavoritos();
    setFavoritos(favoritosDaAPI);
  };

  const deletarFavorito = async (id) => {
    await deleteFavorito(id);
    await fetchFavoritos();
    alert(`Livro de id ${id} deletado!`);
  };

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <AppContainer>
      <div>
        <Titulo backgroudColor="transparent" cor="#fff">
          Aqui estão seus livros favoritos:
        </Titulo>
        <ResultadoContainer>
          {favoritos.length !== 0
            ? favoritos.map((favorito) => (
                <Resultado onClick={() => deletarFavorito(favorito.id)}>
                  <p>{favorito.nome}</p>
                  <img src={livroSrc} alt={favorito.nome} />
                </Resultado>
              ))
            : null}
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos;
