import styled from 'styled-components';

import { useState, useEffect } from 'react';

import { getLivros } from '../../services/livros';

import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';

import imagemLivro from '../../imgs/livro.png';

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  cursor: pointer;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 25%;
    margin-bottom: 15px;
  }
`;

const UltimosLancamentos = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchLivros();
  }, []);

  const fetchLivros = async () => {
    const livrosAPI = await getLivros();
    setLivros(livrosAPI);
  };

  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#eb9b00" alinhamentoDoTexto="center" tamanhoFonte="36px">
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <div>
            <img src={imagemLivro} />
            <p>{livro.nome}</p>
          </div>
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
};

export default UltimosLancamentos;
