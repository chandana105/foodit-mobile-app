import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {CDN_URL} from '../../utils/constants';
import {incrementQuantity, decrementQuantity} from '../../store/cartSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CartItems({item}: any) {
  const dispatch = useDispatch();
  const {item: cartItem, quantity} = item;
  const {card} = cartItem;
  const {info} = card;

  const handleIncrement = () => {
    dispatch(incrementQuantity(info.id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(info.id));
  };

  const formatPrice = (price: number) => {
    return (Math.round(price * 100) / 100).toFixed(2);
  };

  return (
    <View className="flex-row items-center bg-white py-3 px-5 space-x-2">
      {info?.imageId ? (
        <Image
          source={{
            uri: `${CDN_URL}${info?.imageId}`,
          }}
          className="w-10 h-10 rounded-full "
        />
      ) : (
        <View className="border border-gray-300 rounded-full w-10 h-10 items-center justify-center">
          <Icon name="hide-image" size={25} color="#040" />
        </View>
      )}

      <Text
        className="flex-1 text-gray-700 text-base mx-3 truncate"
        style={styles.itemName}>
        {info?.name}
      </Text>
      <View
        className="flex-row items-center justify-between py-2 bg-white rounded-md border border-gray-200"
        style={styles.buttonBox}>
        <TouchableOpacity className="px-4" onPress={handleDecrement}>
          <Text className="text-green-600 text-lg uppercase font-bold">-</Text>
        </TouchableOpacity>
        <Text className="text-green-600 text-lg uppercase font-bold">
          {quantity}
        </Text>
        <TouchableOpacity className="px-4" onPress={handleIncrement}>
          <Text className="text-green-600 text-lg uppercase font-bold">+</Text>
        </TouchableOpacity>
      </View>
      <Text
        className="text-black text-base font-semibold ml-3"
        style={styles.priceView}>
        ₹{formatPrice(((info?.price || info?.defaultPrice) / 100) * quantity)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemName: {
    maxWidth: '40%',
  },
  buttonBox: {
    width: 100,
  },
  priceView: {
    width: 80,
    textAlign: 'right',
  },
});
