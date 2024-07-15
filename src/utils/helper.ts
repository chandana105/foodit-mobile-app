import {CartItem} from '../store/cartSlice';

export const calculateTotalQuantity = (items: CartItem[]): number => {
  return items.reduce((acc, item) => acc + item.quantity, 0);
};

export const menuListItemFormatPrice = (price: number) => {
  return (price / 100).toFixed(2);
};

export const cartItemsFormatPrice = (price: number) => {
  return (Math.round(price * 100) / 100).toFixed(2);
};
