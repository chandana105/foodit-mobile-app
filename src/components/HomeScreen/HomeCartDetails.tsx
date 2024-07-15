import {View, Text, Image, Pressable} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CDN_URL} from '../../utils/constants';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/appStore';
import {calculateTotalQuantity} from '../../utils/helper';

type HomeCartDetailsProps = PropsWithChildren<{
  toggleModal: () => void;
}>;

export default function HomeCartDetails({toggleModal}: HomeCartDetailsProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const cart = useSelector((state: RootState) => state?.cart);

  const totalQuantity = calculateTotalQuantity(cart.items);

  if (totalQuantity === 0) {
    return null;
  }

  return (
    <View className="absolute bottom-2 left-0 right-0 z-50 px-3 py-5 rounded-xl border border-gray-200 bg-white shadow-lg flex-row justify-between items-center space-x-2">
      <Image
        source={{
          uri: `${CDN_URL}${cart?.resImage}`,
        }}
        className="w-12 h-12 rounded-full"
      />
      <View className="flex-1 mx-3  ">
        <Text
          className="text-black font-semibold text-base truncate"
          numberOfLines={1}>
          {cart?.restaurantName}
        </Text>
        <Pressable
          onPress={() =>
            navigation.navigate('RestaurantDetails', {
              resId: cart?.resId,
              cloudinaryImageId: '',
            })
          }>
          <Text className="underline text-gray-700 ">View Full Menu</Text>
        </Pressable>
      </View>
      <Pressable
        className="flex-col bg-green-600 py-2 px-4 rounded-lg items-center"
        onPress={() => navigation.navigate('Cart')}>
        <Text className="text-white font-semibold text-base">
          {totalQuantity} {totalQuantity > 1 ? 'Items' : 'Item'} | ₹
          {cart.orderTotal.toFixed(2)}
        </Text>
        <Text className="text-white font-bold text-base">Checkout</Text>
      </Pressable>
      <Pressable
        className="bg-red-100 h-full p-2 rounded-lg flex items-center justify-center"
        onPress={toggleModal}>
        <Icon name="delete" size={25} color="#c00" />
      </Pressable>
    </View>
  );
}
