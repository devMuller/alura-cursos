//import './style.css';
import styled from 'styled-components';

import Logo from '../Logo';
import OpcoesHaeder from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';

import perfil from '../../imgs/perfil.svg';
import sacola from '../../imgs/sacola.svg';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
const icones = [perfil, sacola];

const Header = styled.header`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppHeader = () => {
  return (
    <Header>
      <Logo />
      <OpcoesHaeder opcoes={textoOpcoes} />
      <IconesHeader icones={icones} />
    </Header>
  );
};

export default AppHeader;
