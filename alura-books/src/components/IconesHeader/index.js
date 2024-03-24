//import './style.css';
import styled from 'styled-components';

const Icones = styled.ul`
  display: flex;
`;

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const IconesHeader = ({ icones }) => {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone>
          <img src={icone} />
        </Icone>
      ))}
    </Icones>
  );
};

export default IconesHeader;
