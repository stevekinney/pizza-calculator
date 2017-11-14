import React from 'react';

const Input = ({ label, value, max, min, type, onChange }) => {
  const handleChange = event => {
    const value = parseInt(event.target.value, 10);
    onChange(value);
  };

  return (
    <label>
      {label}
      <input
        value={value}
        type={type}
        max={max}
        min={min}
        placeholder={label}
        onChange={handleChange}
      />
    </label>
  );
};

export default Input;
