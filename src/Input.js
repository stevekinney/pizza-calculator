import React from 'react';

const styles = {
  label: {
    display: 'block',
    margin: '10px',
  },
  input: {
    marginLeft: '10px',
  },
};

const Input = ({ label, value, type, onChange }) => {
  return (
    <label style={styles.label}>
      {label}
      <input
        value={value}
        type={type}
        placeholder={label}
        onChange={onChange}
        style={styles.input}
      />
    </label>
  );
};

export default Input;
