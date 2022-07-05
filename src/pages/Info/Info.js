import React from 'react';
import styles from './Info.module.css';
import cover from './cover.jpg';

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <div className={styles.content}>
          <img className={styles.image} src={cover} alt='Cover' />
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>Welcome to ECOMMERCE</h1>
        <p className={styles.text}>
          Since its launch in June 2022, ECOMMERCE delivers the ultimate
          curation of product and content through its website and shopping app,
          speaking to a monthly audience of over a million via a global,
          multi-channel ecosystem and providing a seamless shopping experience
          across mobile, tablet and desktop.
        </p>
      </div>
    </div>
  );
};

export default Info;
