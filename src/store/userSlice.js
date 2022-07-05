import { createSlice } from '@reduxjs/toolkit';

export const initialState = true;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn() {
      return initialState;
    },
    logOut(state) {
      state = false;
      return state;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
