import TeamMember from '../TeamMember';
import styled from 'styled-components';
import './Team.scss';
import Values from 'values.js';

const Title = styled.h3`
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  text-align: center;
  padding-bottom: 32px;
  &::after {
    content: '';
    border-bottom: 4px solid ${(props) => props.$color};
    display: block;
    width: 32px;
    margin: 0 auto;
  }
`;

const Team = (props) => {
  const team = props.team;
  return (
    props.teamMembers.length > 0 && (
      <section
        className="team"
        style={{
          backgroundColor: `#${new Values(team.color).tint(80).hex}`,
          backgroundImage: `url('/imgs/fundo.png')`,
        }}
      >
        <input
          type="color"
          className="input-color"
          value={team.color}
          onChange={(e) => props.changeColor(e.target.value, team.id)}
        />
        <Title $color={team.color}>{team.name}</Title>
        <div className="team-body">
          {props.teamMembers.map((member) => {
            return (
              <TeamMember
                key={member.id}
                member={member}
                color={team.color}
                onDelete={props.onDelete}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Team;
