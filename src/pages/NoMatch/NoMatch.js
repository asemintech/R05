import React from 'react';
import styles from './NoMatch.module.css';

const NoMatch = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Page not found.</p>
    </div>
  );
};

export default NoMatch;
