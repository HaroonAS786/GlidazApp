import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isOnBoard: true,
  isBottomSheet: true,
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action) => {},
    setIsBottomSheet: (state, action) => {
      state.isBottomSheet = action.payload.isBottomSheet;
    },
  },
});

export const {setUserData, setIsBottomSheet} = auth.actions;
export default auth;
