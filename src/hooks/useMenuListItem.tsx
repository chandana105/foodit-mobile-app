import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/appStore';
import {
  addItem,
  clearCart,
  decrementQuantity,
  incrementQuantity,
} from '../store/cartSlice';

const useMenuListItem = (item: any) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart);
  const restaurant = useSelector(
    (state: RootState) => state?.restaurant?.restaurant,
  );

  const cartItem = cart.items.find(
    itemInCart => itemInCart.item.card.info.id === item.card.info.id,
  );
  const quantity = cartItem ? cartItem.quantity : 0;

  const descriptionText = item?.card?.info?.description;
  const isTruncated = descriptionText?.length > 100;
  const truncatedDescription = descriptionText?.substring(0, 100) + '...';

  const toggleDescriptionExpansion = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const handleAddItem = () => {
    if (cart.resId && cart.resId !== restaurant?.id) {
      setModalVisible(true);
    } else {
      dispatch(addItem({restaurant, item}));
    }
  };

  const handleConfirmReplace = () => {
    dispatch(clearCart());
    dispatch(addItem({restaurant, item}));
    setModalVisible(false);
  };

  const handleCancelReplace = () => {
    setModalVisible(false);
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(item.card.info.id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(item.card.info.id));
  };

  return {
    isTruncated,
    isModalVisible,
    quantity,
    truncatedDescription,
    isDescriptionExpanded,
    descriptionText,
    toggleDescriptionExpansion,
    handleAddItem,
    handleCancelReplace,
    handleConfirmReplace,
    handleIncrement,
    handleDecrement,
  };
};

export default useMenuListItem;
