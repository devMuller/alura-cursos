//import './style.css';
import styled from 'styled-components';

import logo from '../../imgs/logo.svg';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImg = styled.img`
  margin-right: 10px;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="logo" />
      <p>
        <strong>Alura</strong>Books
      </p>
    </LogoContainer>
  );
};

export default Logo;
