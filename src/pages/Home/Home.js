import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Home.module.css';
import { getUser } from '../../store/selectors';
import { addItem } from '../../store/cartSlice';
// import { getItems } from '../../API';

const Home = () => {
  const [items, setItems] = useState([]);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=24')
      .then((response) => response.json())
      .then((items) => {
        setItems(items);
      });
  }, []);

  const handleAddItem = (item) => {
    dispatch(addItem({ item: item, count: 1 }));
  };

  // const onClickAddItem = (item) => {
  //   handleAddItem(item);
  // };

  return (
    <div className={styles.container}>
      {items.map((item) => {
        return (
          <div className={styles.card} key={item.id}>
            <img className={styles.image} src={item.images} alt={item.title} />
            <div className={styles.content_left}>
              <Link className={styles.subtitle} to={`/products/${item.id}`}>
                {item.title}
              </Link>
              <span className={styles.text}>{`${item.price}`}</span>
            </div>
            {user ? (
              <div className={styles.content_right}>
                <button
                  className={styles.buy_btn}
                  onClick={() => {
                    handleAddItem(item);
                  }}
                >
                  <img
                    className={styles.icon}
                    src='https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-shopping-bag-interface-kiranshastry-lineal-kiranshastry.png'
                    alt='Add'
                  />
                </button>
              </div>
            ) : (
              <div className={styles.content_right}>
                <p className={styles.info}>
                  Log in to add an item to your cart.
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
