import React, {useState, memo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CDN_URL} from '../../utils/constants';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/appStore';
import {
  addItem,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from '../../store/cartSlice';
import CartReplaceModal from './CartReplaceModal';

const MenuListItem = memo(({item}: any) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);
  const restaurant = useSelector(
    (state: RootState) => state?.restaurant?.restaurant,
  );
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  // Get the quantity from the cart
  const cartItem = cart.items.find(
    cartItem => cartItem.item.card.info.id === item.card.info.id,
  );
  const quantity = cartItem ? cartItem.quantity : 0;

  const toggleDescriptionExpansion = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const descriptionText = item?.card?.info?.description;
  const isTruncated = descriptionText?.length > 100;
  const truncatedDescription = descriptionText?.substring(0, 100) + '...';

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

  return (
    <>
      <View className="flex-row rounded-lg h-auto py-4 gap-4">
        <View className="gap-1 flex-1">
          <Text className="font-bold text-lg text-black">
            {item?.card?.info?.name}
          </Text>

          <Text className="font-bold text-black text-base">
            ₹
            {item.card.info.price
              ? item.card.info.price / 100
              : item.card.info.defaultPrice / 100}
          </Text>

          {item.card.info.ratings.aggregatedRating?.rating && (
            <View className="flex-row items-center">
              <Icon name="star" size={19} color="#060" />
              <Text className="font-bold ml-1 text-sm text-green-800">
                {item.card.info.ratings.aggregatedRating.rating}
              </Text>
            </View>
          )}

          {isTruncated ? (
            <Text
              numberOfLines={isDescriptionExpanded ? undefined : 2}
              className="font-normal text-gray-600 text-sm">
              <Text onPress={toggleDescriptionExpansion}>
                {isDescriptionExpanded ? descriptionText : truncatedDescription}
              </Text>
            </Text>
          ) : (
            <Text className="font-normal text-gray-600 text-sm">
              {descriptionText}
            </Text>
          )}
          {isTruncated && (
            <TouchableOpacity onPress={toggleDescriptionExpansion}>
              <Text className="font-semibold text-gray-700 text-sm">
                {isDescriptionExpanded ? 'less' : 'more'}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Second view */}
        {item?.card?.info?.imageId ? (
          <View>
            <Image
              source={{
                uri: `${CDN_URL}${item?.card?.info?.imageId}`,
              }}
              className="w-40 h-32 rounded-lg"
            />
            {quantity > 0 ? (
              <View className="-mt-5 flex-row items-center justify-between py-2 bg-white rounded-md border border-gray-200 border-solid">
                <TouchableOpacity className="px-4" onPress={handleDecrement}>
                  <Text className="text-green-600 text-lg uppercase font-bold">
                    -
                  </Text>
                </TouchableOpacity>
                <Text className="text-green-600 text-lg uppercase font-bold">
                  {quantity}
                </Text>
                <TouchableOpacity className="px-4" onPress={handleIncrement}>
                  <Text className="text-green-600 text-lg uppercase font-bold">
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <TouchableOpacity
                  className="-mt-5 flex items-center justify-center mx-auto px-10 py-2 bg-white rounded-md border border-gray-200 border-solid shadow-lg"
                  onPress={handleAddItem}>
                  <Text className="text-green-600 text-lg uppercase font-bold">
                    Add
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ) : (
          <View className="w-40">
            {quantity > 0 ? (
              <View className="-mt-5 flex-row items-center justify-between py-2 bg-white rounded-md border border-gray-200 border-solid">
                <TouchableOpacity className="px-4" onPress={handleDecrement}>
                  <Text className="text-green-600 text-lg uppercase font-bold">
                    -
                  </Text>
                </TouchableOpacity>
                <Text className="text-green-600 text-lg uppercase font-bold">
                  {quantity}
                </Text>
                <TouchableOpacity className="px-4" onPress={handleIncrement}>
                  <Text className="text-green-600 text-lg uppercase font-bold">
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                className="flex items-center justify-center mx-auto px-10 py-2 bg-white rounded-md border border-gray-200 border-solid shadow-lg"
                onPress={handleAddItem}>
                <Text className="text-green-600 text-lg uppercase font-bold">
                  Add
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
      <CartReplaceModal
        isModalVisible={isModalVisible}
        onCancel={handleCancelReplace}
        onConfirm={handleConfirmReplace}
        replacingRestaurantName={restaurant?.name}
      />
    </>
  );
});

export default MenuListItem;
