import React, { useState } from 'react';
import styles from './Form.module.css';
import Input from '../Input/Input';

const Form = ({ logIn }) => {
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      event.target.username.value === 'test@gmail.com' &&
      event.target.password.value === '12345678'
    ) {
      logIn();
      setError('');
    } else {
      setError('Please check your username and/or password');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Log in</h1>
      <p className={styles.instruction}>All fields are required.</p>
      <Input
        name='username'
        type='text'
        placeholder='test@gmail.com'
        required
        autoComplete={'on'}
      />
      <Input name='password' type='password' placeholder='12345678' required />
      <div className={styles.error}>{error}</div>
      <button className={styles.submit_btn} type='submit'>
        Sign In
      </button>
    </form>
  );
};

export default Form;
