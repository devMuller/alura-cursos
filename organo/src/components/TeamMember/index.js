import './TeamMember.scss';

const TeamMember = (props) => {
  const styles = {
    background: `linear-gradient(to bottom, ${props.primaryColor} 50%, #fff 50%)`,
    backgroundSize: '100% 125%',
    backgroundPosition: 'right bottom',
  };

  return (
    <section style={styles} className="teamMember">
      <div className="container-img">
        <img
          src={props.img ? props.img : '/imgs/user.svg'}
          alt={props.name}
          style={{ width: props.img ? '100%' : '70%' }}
        />
      </div>
      <p className="name">{props.name}</p>
      <p className="cargo">{props.cargo}</p>
    </section>
  );
};

export default TeamMember;
