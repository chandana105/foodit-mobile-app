import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {CDN_URL} from '../../utils/constants';
import {incrementQuantity, decrementQuantity} from '../../store/cartSlice';

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

  return (
    <View className="flex-row items-center space-x-3 bg-white py-3 px-5">
      <Image
        source={{
          uri: `${CDN_URL}${info?.imageId}`,
        }}
        className="w-10 h-10 rounded-full"
      />
      <Text className="flex-1">{info?.name}</Text>
      <View className="flex-row items-center justify-between py-2 bg-white rounded-md border border-gray-200 border-solid">
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
      <Text className="text-black">
        ₹{((info?.price || info?.defaultPrice) / 100) * quantity}
      </Text>
    </View>
  );
}
