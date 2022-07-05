import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ active, setActive, children }) => {
  const onClickActive = () => setActive(false);
  const onClickStop = (event) => event.stopPropagation();

  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={onClickActive}
    >
      <div
        className={
          active ? `${styles.content} ${styles.active}` : styles.content
        }
        onClick={onClickStop}
      >
        <div className={styles.modal_content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
