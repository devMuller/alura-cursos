//import './style.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Opcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  min-width: 120px;
  font-size: 16px;
  text-align: center;
  align-items: center;
  padding: 0 5px;
  height: 100%;
`;

const OpcoesHaeder = ({ opcoes }) => {
  return (
    <Opcoes>
      {opcoes.map((opcao) => (
        <Link to={`${opcao.toLowerCase()}`}>
          <Opcao>
            <p>{opcao}</p>
          </Opcao>
        </Link>
      ))}
    </Opcoes>
  );
};

export default OpcoesHaeder;
