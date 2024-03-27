import styled from 'styled-components';

export const Titulo = styled.h2`
  width: 100%;
  padding: ${(props) => props.padding || '30px 0'};
  background-color: ${(props) => props.backgroudColor || '#fff'};
  color: ${(props) => props.cor || '#000'};
  font-size: ${(props) => props.tamanhoFonte || '36px'};
  text-align: ${(props) => props.alinhamento || 'center'};
  margin: 0;
`;
