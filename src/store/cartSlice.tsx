import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  resId: '',
  restaurantName: '',
  resImage: '',
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{restaurant: any; item: any}>) => {
      const {restaurant, item} = action.payload;

      state.resId = restaurant.id;
      state.restaurantName = restaurant.name;
      state.resImage = restaurant.cloudinaryImageId;
      state.items.push(item);
    },

    clearCart: () => initialState,
  },
});

export const {addItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
