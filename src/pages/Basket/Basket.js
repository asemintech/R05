import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Basket.module.css';
import {
  addItem,
  removeItem,
  fullRemoveItem,
  clearCart,
} from '../../store/cartSlice';
import { getCart } from '../../store/selectors';

const Cart = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const handleFullRemoveItem = (item) => {
    dispatch(fullRemoveItem({ id: item.id }));
  };

  const handleRemoveItem = (item, countItem = 1) => {
    dispatch(removeItem({ item: item, count: countItem }));
  };

  const handleAddItem = (item, countItem = 1) => {
    dispatch(addItem({ item: item, count: countItem }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <h1 className={styles.basketTitle}>My shopping bag</h1>
        <h4 className={styles.basketSubtitle}>My items</h4>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div className={styles.item} key={item.id}>
              <img
                className={styles.image}
                src={item.images}
                alt={item.title}
              />
              <div className={styles.info}>
                <div className={styles.tag}>#{item.id}</div>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.text}>${item.price}</div>
                <div className={styles.subtitle}>${item.price * item.count}</div>
                <button
                  className={styles.removeBtn}
                  onClick={() => {
                    handleFullRemoveItem(item);
                  }}
                >
                  Remove
                </button>
              </div>
              <div className={styles.quantity}>
                <div className={styles.text}>Qty: {item.count}</div>
                <div className={styles.countBtns}>
                  <button
                    className={styles.countBtn}
                    onClick={() => {
                      handleRemoveItem(item);
                    }}
                  >
                    -
                  </button>
                  <button
                    className={styles.countBtn}
                    onClick={() => {
                      handleAddItem(item);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.left}>
            <h4 className={styles.subtitle}>Your basket is currently empty.</h4>
            <Link className={styles.removeBtn} to={'/'}>
              Continue shopping
            </Link>
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className={styles.right}>
          <h4 className={styles.basketSubtitle}>Order total</h4>
          <div className={styles.subtitle}>
            $
            {cart.reduce(
              (previous, item) => (previous += item.price * item.count),
              0
            )}
          </div>
          <button className={styles.submitBtn} disabled={true}>
            Proceed to checkout
          </button>
          <button className={styles.cancelBtn} onClick={handleClearCart}>
            Clear
          </button>
          <Link className={styles.removeBtn} to={'/'}>
            Continue shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
