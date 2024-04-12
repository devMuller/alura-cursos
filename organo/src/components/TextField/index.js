import './TextField.scss';

const TextField = (props) => {
  const onChanged = (e) => {
    props.setValue(e.target.value);
  };

  return (
    <div className="textField">
      <label htmlFor="">{props.label}</label>
      <input
        value={props.value}
        onChange={onChanged}
        required={props.req}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextField;
