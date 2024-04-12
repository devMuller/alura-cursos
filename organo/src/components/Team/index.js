import TeamMember from '../TeamMember';
import styled from 'styled-components';
import './Team.scss';

const Title = styled.h3`
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  &::after {
    content: '';
    border-bottom: 4px solid ${(props) => props.$primaryColor};
    display: block;
    width: 32px;
    margin: 0 auto;
  }
`;

const Team = (props) => {
  const team = props.team;
  return (
    props.teamMembers.length > 0 && (
      <section className="team" style={{ background: team.secondaryColor }}>
        <div className="team-header">
          <Title $primaryColor={team.primaryColor}>{team.name}</Title>
        </div>
        <div className="team-body">
          {props.teamMembers.map((member) => (
            <TeamMember
              key={member.name}
              img={member.img}
              name={member.name}
              cargo={member.cargo}
              primaryColor={team.primaryColor}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
