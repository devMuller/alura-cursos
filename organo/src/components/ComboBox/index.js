import './ComboBox.scss';

const ComboBox = (props) => {
  const onChanged = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];

    props.setValue({ id: el.getAttribute('id'), name: e.target.value });
  };

  return (
    <div className="combobox">
      <label htmlFor="">{props.label}</label>
      <select value={props.value} onChange={onChanged} required={props.req}>
        <option value=""></option>
        {props.options.map((option) => {
          return (
            <option key={option.id} id={option.id}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ComboBox;
