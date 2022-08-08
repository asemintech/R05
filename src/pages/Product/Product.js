import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Product.module.css';
import { getUser } from '../../store/selectors';
import { addItem } from '../../store/cartSlice';

const Product = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [countItem, setCountItem] = useState(0);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const decrementCount = () => {
    return countItem > 0 ? setCountItem(countItem - 1) : setCountItem(0);
  };

  const incrementCount = () => {
    setCountItem(countItem + 1);
  };

  const handleAddItem = (item, countItem = 1) => {
    dispatch(addItem({ item: item, count: countItem }));
  };

  const onClickAddItem = () => {
    handleAddItem(item, countItem);
  };

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => response.json())
      .then((item) => {
        setItem(item);
      });
  }, [id]);

  return (
    <div className={styles.item} key={item.id}>
      <div className={styles.left}>
        <img className={styles.image} src={item.images} alt={item.title} />
      </div>
      <div className={styles.right}>
        <p className={styles.tag}>#{item.id}</p>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.text}>${item.price}</p>
        {user ? (
          <div className={styles.block}>
            <div className={styles.countBtns}>
              <button className={styles.countBtn} onClick={decrementCount}>
                -
              </button>
              <button className={styles.countBtn} onClick={incrementCount}>
                +
              </button>
            </div>
            <button className={styles.addBtn} onClick={onClickAddItem}>
              Add to cart: {countItem}
            </button>
          </div>
        ) : (
          <p className={styles.info}>Log in to add an item to your cart.</p>
        )}
      </div>
    </div>
  );
};

export default Product;
