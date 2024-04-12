import './RoundButton.scss';

const RoundButton = (props) => {
  return (
    <button className="roundButton">
      <img src={props.img} alt={props.img} />
    </button>
  );
};

export default RoundButton;
