import RoundButton from '../RoundButton';
import Team from '../Team';
import './Teams.scss';

import styled from 'styled-components';

const Erro = styled.div`
  text-align: center;
  padding: 25vh 0;
  h2 {
    font-size: 38px;
  }
  strong {
    font-size: 18px;
  }
`;

const Teams = (props) => {
  const TeamsList = props.teams.map((team) => {
    return (
      <Team
        changeColor={props.changeColor}
        key={team.id}
        team={team}
        teamMembers={props.teamsMembers.filter(
          (teamMember) => teamMember.team === team.id,
        )}
        onDelete={props.onDelete}
      />
    );
  });

  const ErroMessage = () => {
    return (
      <Erro>
        <h2>{`Não há Membros cadastrados  :'(`}</h2>
        <p>
          Cadastre no Formulário acima!   
          <strong>{`\\{^_^}/`}</strong>
        </p>
      </Erro>
    );
  };

  return (
    <section className="teams">
      <div className="teams-header">
        <h2>Minha Organização:</h2>
        <RoundButton onClick={(e) => props.showForm()} img="/imgs/add.svg" />
      </div>
      <div className="teams-body">
        {props.teamsMembers.length > 0 ? TeamsList : <ErroMessage />}
      </div>
    </section>
  );
};

export default Teams;
