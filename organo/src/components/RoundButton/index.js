import './RoundButton.scss';

const RoundButton = (props) => {
  return (
    <button onClick={props.onClick} className="roundButton">
      <img src={props.img} alt={props.img} />
    </button>
  );
};

export default RoundButton;
