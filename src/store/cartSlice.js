import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const addToCart = (cart, item, count = 1) => {
  let index = cart.findIndex((element) => {
    return element.id === item.id;
  });

  if (index === -1) {
    cart.push({ ...item, count: count });
  } else {
    cart[index].count += count;
  }

  return cart;
};

const removeFromCart = (cart, item, count) => {
  let index = cart.findIndex((element) => {
    return element.id === item.id;
  });

  if (index === -1) {
    cart.push({ ...item, count: count });
  } else {
    cart[index].count > 0
      ? (cart[index].count -= count)
      : (cart[index].count = 0);
  }

  return cart;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const { item, count } = action.payload;
      state = addToCart(state, item, count);
    },
    removeItem(state, action) {
      const { item, count } = action.payload;
      state = removeFromCart(state, item, count);
    },
    fullRemoveItem(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearCart() {
      return initialState;
    },
  },
});

export const { addItem, removeItem, fullRemoveItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
