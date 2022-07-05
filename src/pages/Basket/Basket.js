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
      <div className={styles.content_left}>
        <h1 className={styles.basket_title}>My shopping bag</h1>
        <h4 className={styles.basket_subtitle}>Your items</h4>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div className={styles.item} key={item.id}>
              <img
                className={styles.image}
                src={item.images}
                alt={item.title}
              />
              <div className={styles.product_info}>
                <div className={styles.subtitle}>#{item.id}</div>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.text}>${item.price}</div>
                <div className={styles.title}>${item.price * item.count}</div>
                <button
                  className={styles.remove_btn}
                  onClick={() => {
                    handleFullRemoveItem(item);
                  }}
                >
                  Remove
                </button>
              </div>
              <div className={styles.product_quantity}>
                <div className={styles.subtitle}>{item.count}</div>
                <div>
                  <div className={styles.btn_block}>
                    <button
                      className={styles.count_btn}
                      onClick={() => {
                        handleRemoveItem(item);
                      }}
                    >
                      -
                    </button>
                    <button
                      className={styles.count_btn}
                      onClick={() => {
                        handleAddItem(item);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.content_left}>
            <h4 className={styles.title}>Your basket is currently empty.</h4>
            <Link className={styles.remove_btn} to={'/home'}>
              Continue shopping
            </Link>
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className={styles.content_right}>
          <h4 className={styles.order_subtitle}>Order total</h4>
          <div className={styles.order_title}>
            $
            {cart.reduce(
              (previous, item) => (previous += item.price * item.count),
              0
            )}
          </div>
          <button className={styles.submit_btn} disabled={true}>
            Proceed to checkout
          </button>
          <button className={styles.cancel_btn} onClick={handleClearCart}>
            Clear
          </button>
          <Link className={styles.remove_btn} to={'/home'}>
            Continue shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
