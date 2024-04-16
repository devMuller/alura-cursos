import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import TeamMemberForm from './components/TeamMemberForm';
import TeamForm from './components/TeamForm';
import Teams from './components/Teams';
import Footer from './components/Footer';
import Tabs from './components/Tabs';
import { v4 as uuid } from 'uuid';
import { getTeams, postTeam, putTeam } from './services/teams';
import { deleteMember, getMembers, postMember } from './services/members';

function App() {
  const [teams, setTeams] = useState([]);

  const newTeam = async (team) => {
    setTeams([...teams, team]);
    await postTeam(team);
  };

  const setTeamColor = async (color, id) => {
    let team = teams.find((team) => team.id === id);
    team.color = color;

    await putTeam(team);
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.color = color;
        }
        return team;
      }),
    );
  };

  const fetchTeams = async () => {
    const apiTeams = await getTeams();
    setTeams(apiTeams);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const [colaboradores, setColaboradores] = useState([]);

  const novoColaborador = async (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    await postMember(colaborador);
  };

  const deletarColaborador = async (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id),
    );
    await deleteMember(id);
  };

  const fetchMember = async () => {
    const apiMember = await getMembers();
    setColaboradores(apiMember);
  };

  useEffect(() => {
    fetchMember();
  }, []);

  const [showForm, setShowForm] = useState(true);

  const ShowForm = () => {
    setShowForm(!showForm);
  };

  const tabs = [
    {
      id: uuid(),
      name: 'Membro',
      tab: (
        <TeamMemberForm
          onSubmit={(colaborador) => novoColaborador(colaborador)}
          teams={teams}
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
