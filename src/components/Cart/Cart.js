import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Cart.module.css';
import { getCart } from '../../store/selectors';

const Cart = () => {
  const cart = useSelector(getCart);

  return (
    <div className={styles.cart}>
      <img
        className={styles.icon}
        src='https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-shopping-bag-interface-kiranshastry-lineal-kiranshastry.png'
        alt='Cart'
      />
      <span className={styles.subtitle}>
        {cart.reduce((previous, item) => (previous += item.count), 0)}
      </span>
      <div className={styles.text}>
        $
        {cart.reduce(
          (previous, item) => (previous += item.price * item.count),
          0
        )}
      </div>
    </div>
  );
};

export default Cart;
