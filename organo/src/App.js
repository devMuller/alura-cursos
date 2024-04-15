import { useState } from 'react';
import Banner from './components/Banner';
import TeamMemberForm from './components/TeamMemberForm';
import TeamForm from './components/TeamForm';
import Teams from './components/Teams';
import Footer from './components/Footer';
import Tabs from './components/Tabs';

import { v4 as uuid } from 'uuid';

function App() {
  const [showForm, setShowForm] = useState(true);

  const ShowForm = () => {
    setShowForm(!showForm);
  };

  const [teams, setTeams] = useState([
    {
      id: uuid(),
      name: 'Programação',
      color: '#57C278',
    },
    {
      id: uuid(),
      name: 'Front-End',
      color: '#82CFFA',
    },
    {
      id: uuid(),
      name: 'Data-Science',
      color: '#A6D157',
    },
    {
      id: uuid(),
      name: 'DevOps',
      color: '#E06B69',
    },
    {
      id: uuid(),
      name: 'UX e Design',
      color: '#DB6EBF',
    },
    {
      id: uuid(),
      name: 'Mobile',
      color: '#FFBA05',
    },
    {
      id: uuid(),
      name: 'Inovação e Gestão',
      color: '#FF8A29',
    },
  ]);

  const newTeam = (team) => {
    setTeams([...teams, team]);
  };

  const [colaboradores, setColaboradores] = useState([]);

  const novoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const deletarColaborador = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id),
    );
  };

  const setTeamColor = (color, id) => {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.color = color;
        }
        return team;
      }),
    );
  };

  const tabs = [
    {
      id: uuid(),
      name: 'Membro',
      tab: (
        <TeamMemberForm
          onSubmit={(colaborador) => novoColaborador(colaborador)}
          teams={teams.map((team) => team.name)}
        />
      ),
    },
    {
      id: uuid(),
      name: 'Equipe',
      tab: <TeamForm onSubmit={(team) => newTeam(team)} />,
    },
  ];

  return (
    <div className="App">
      <Banner />
      {showForm ? <Tabs tabs={tabs} /> : ''}
      <Teams
        teams={teams}
        teamsMembers={colaboradores}
        onDelete={deletarColaborador}
        changeColor={setTeamColor}
        showForm={ShowForm}
      />
      <Footer />
    </div>
  );
}

export default App;
