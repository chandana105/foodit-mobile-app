import {createSlice} from '@reduxjs/toolkit';

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurant: {},
  },
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    clearRestaurant: state => {
      state.restaurant = {};
    },
  },
});

export const {setRestaurant, clearRestaurant} = restaurantSlice.actions;

export default restaurantSlice.reducer;
