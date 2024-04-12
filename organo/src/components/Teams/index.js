import RoundButton from '../RoundButton';
import Team from '../Team';
import './Teams.scss';

const Teams = (props) => {
  return (
    <section className="teams">
      <div className="teams-header">
        <h2>Minha Organização:</h2>
        <RoundButton img="/imgs/add.svg" />
      </div>
      <div className="teams-body">
        {props.teams.map((team) => (
          <Team
            key={team.name}
            team={team}
            teamMembers={props.teamsMembers.filter(
              (teamMember) => teamMember.team === team.name,
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default Teams;
