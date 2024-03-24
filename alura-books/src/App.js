//import './App.css';

import AppHeader from './components/AppHeader';
import Pesquisa from './components/Pesquisa';
import UltimosLancamentos from './components/UltimosLancamentos';

import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

function App() {
  return (
    <AppContainer>
      <AppHeader />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
