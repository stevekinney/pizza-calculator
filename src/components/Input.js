import React from 'react';

const Input = ({ label, value, max, min, type, onChange }) => {
  return (
    <label>
      {label}
      <input
        value={value}
        type={type}
        max={max}
        min={min}
        placeholder={label}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
