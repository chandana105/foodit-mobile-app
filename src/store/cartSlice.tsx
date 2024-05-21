import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface CartItem {
  item: any;
  quantity: number;
}

interface Cart {
  resId: string;
  restaurantName: string;
  resImage: string;
  items: CartItem[];
  orderTotal: number;
}

const initialState: Cart = {
  resId: '',
  restaurantName: '',
  resImage: '',
  items: [],
  orderTotal: 0,
};

const calculateOrderTotal = (items: CartItem[]) => {
  const subtotal = items.reduce((acc, item) => {
    const price = item.item.card.info.price || item.item.card.info.defaultPrice;
    return acc + (price * item.quantity) / 100;
  }, 0);
  const deliveryFee = 20;
  return subtotal + deliveryFee;
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
      const existingItemIndex = state.items.findIndex(
        (cartItem: any) => cartItem.item.card.info.id === item.card.info.id,
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push({item, quantity: 1});
      }
      state.orderTotal = calculateOrderTotal(state.items);
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.items.find(
        cartItem => cartItem.item.card.info.id === itemId,
      );
      if (item) {
        item.quantity += 1;
      }
      state.orderTotal = calculateOrderTotal(state.items);
    },

    decrementQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.items.find(
        cartItem => cartItem.item.card.info.id === itemId,
      );
      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          state.items = state.items.filter(
            cartItem => cartItem.item.card.info.id !== itemId,
          );
        }
      }
      state.orderTotal = calculateOrderTotal(state.items);
    },

    clearCart: () => initialState,
  },
});

export const {addItem, clearCart, incrementQuantity, decrementQuantity} =
  cartSlice.actions;

export default cartSlice.reducer;
