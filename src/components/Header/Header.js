import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.css';
import { getUser } from '../../store/selectors';
import { logIn, logOut } from '../../store/userSlice';
import Cart from '../Cart/Cart';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';

const Header = () => {
  const [modalActive, setModalActive] = useState(true);
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const onClickLogIn = () => dispatch(logIn());
  const onClickLogOut = () => dispatch(logOut());

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link className={styles.item} to='/home'>
          Home
        </Link>
        <Link className={styles.item} to='/info'>
          About us
        </Link>
      </div>
      <div className={styles.center}>
        <h1 className={styles.logo}>eCommerce</h1>
      </div>
      {user ? (
        <div className={styles.right}>
          <button
            className={styles.logout_btn}
            onClick={() => {
              onClickLogOut();
            }}
          >
            Log out
          </button>
          <Link className={styles.cart} to='/basket'>
            <Cart />
          </Link>
        </div>
      ) : (
        <div className={styles.right}>
          <button
            className={styles.login_btn}
            onClick={() => setModalActive(true)}
          >
            <img
              className={styles.icon}
              src='https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-user-interface-kiranshastry-lineal-kiranshastry-1.png'
              alt='Log in'
            />
          </button>
          <Modal
            className={styles.modal}
            active={modalActive}
            setActive={setModalActive}
          >
            <Form
              logIn={() => {
                onClickLogIn();
              }}
            />
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Header;
