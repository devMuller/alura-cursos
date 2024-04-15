import './TeamMember.scss';
import { TiDelete } from 'react-icons/ti';

const TeamMember = (props) => {
  const styles = {
    backgroundImage: `linear-gradient(to bottom, ${props.color} 50%, #fff 50%) `,
    backgroundSize: '100% 125%',
    backgroundPosition: 'bottom right',
  };

  return (
    <section style={styles} className="teamMember">
      <TiDelete
        size={25}
        className="delete"
        onClick={(e) => props.onDelete(props.member.id)}
      />
      <div className="container-img">
        <img
          src={props.member.img ? props.member.img : '/imgs/user.svg'}
          alt={props.member.name}
          style={{ width: props.member.img ? '100%' : '70%' }}
        />
      </div>
      <p className="name">{props.member.name}</p>
      <p className="cargo">{props.member.cargo}</p>
    </section>
  );
};

export default TeamMember;
