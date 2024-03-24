import styled from 'styled-components';
import Input from '../Input';
import { useEffect, useState } from 'react';
import { getLivros } from '../../services/livros';
import { postFavorito, getFavoritos } from '../../services/favoritos';
import imagemLivro from '../../imgs/livro.png';

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const SubTitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 400px;
  margin: 0 auto auto auto;
  background-color: #ebecee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  position: relative;
  border-radius: 5px;

  cursor: pointer;
  p {
    width: 200px;
    color: black;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const Pesquisa = () => {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchLivros();
  }, []);

  const fetchLivros = async () => {
    const livrosAPI = await getLivros();
    setLivros(livrosAPI);
  };

  const [favoritos, setFavoritos] = useState([]);

  const fetchFavoritos = async () => {
    const favoritosDaAPI = await getFavoritos();
    setFavoritos(favoritosDaAPI);
  };

  useEffect(() => {
    fetchFavoritos();
  }, []);

  const insertFavorito = async (id) => {
    if (favoritos.filter((favorito) => favorito.id === id).length > 0) {
      alert(`O livro de id: ${id} ja esta nos favoritos`);
      return;
    }
    await postFavorito(id);
    alert(`Livro de id: ${id} inserido`);

    fetchFavoritos();
  };

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <SubTitulo>Encontre seu livro em nossa estante</SubTitulo>
      <Input
        type="text"
        placeholder="Escreva sua próxima leitura"
        onBlur={(e) => {
          const textoDigitado = e.target.value.toLowerCase();

          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.toLowerCase().includes(textoDigitado),
          );
          if (e.target.value != '') {
            setLivrosPesquisados(resultadoPesquisa);
          } else {
            setLivrosPesquisados([]);
          }
        }}
      />
      {livrosPesquisados.map((livro) => (
        <Resultado onClick={() => insertFavorito(livro.id)}>
          <p>{livro.nome}</p>
          <img src={imagemLivro} alt={livro.nome} />
        </Resultado>
      ))}
    </PesquisaContainer>
  );
};

export default Pesquisa;
