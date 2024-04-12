import './ComboBox.scss';

const ComboBox = (props) => {
  const onChanged = (e) => {
    props.setValue(e.target.value);
  };

  return (
    <div className="combobox">
      <label htmlFor="">{props.label}</label>
      <select value={props.value} onChange={onChanged} required={props.req}>
        <option value=""></option>
        {props.options.map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default ComboBox;
