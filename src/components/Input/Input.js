import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, name, type, value, onChange, placeholder }) => {
  return (
    <div className={styles.group}>
      <label className={styles.label}>{label}</label>
      <div className={styles.field}>
        <input
          className={styles.control}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
