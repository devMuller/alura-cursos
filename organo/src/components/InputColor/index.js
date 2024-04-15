import { useState } from 'react';
import './InputColor.scss';
import Values from 'values.js';

const InputColor = (props) => {
  const [fgColor, setColor] = useState('#000000');

  const onChanged = (e) => {
    const newColor = new Values(e.target.value).rgb;

    if (newColor[0] < 200 && newColor[1] < 200 && newColor[2] < 200) {
      setColor('#FFFFFF');
    } else {
      setColor('#000000');
    }

    props.setValue(e.target.value);
  };
  return (
    <div className="inputcolor">
      <label htmlFor="color">
        {props.label}
        <div
          style={{
            backgroundColor: `${props.value ? props.value : '#FFFFFF'}`,
          }}
          className="color-selector"
        >
          <input
            type="color"
            id="color"
            value={props.value}
            onChange={onChanged}
            required={props.req}
          />
          <span style={{ color: fgColor }}>
            {props.value ? props.value : '#FFFFFF'}
          </span>
        </div>
      </label>
    </div>
  );
};

export default InputColor;
