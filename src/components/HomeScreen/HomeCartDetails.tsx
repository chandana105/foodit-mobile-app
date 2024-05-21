import {View, Text, Image, Pressable} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CDN_URL} from '../../utils/constants';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../App';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/appStore';

type HomeCartDetailsProps = PropsWithChildren<{
  toggleModal: () => void;
}>;

export default function HomeCartDetails({toggleModal}: HomeCartDetailsProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const cart = useSelector((state: RootState) => state?.cart);

  if (!cart?.items?.length) {
    return;
  }

  return (
    <View
      className="absolute bottom-2 left-0 right-0 z-50 px-3 py-5 rounded-xl border border-gray-200 bg-white shadow-lg
    flex-row justify-between items-center ">
      <Image
        source={{
          uri: `${CDN_URL}${cart?.resImage}`,
        }}
        className="w-12 h-12 rounded-full items-center "
      />
      <View className="flex-col items-center">
        <Text className="text-black font-semibold text-lg">
          {cart?.restaurantName}
        </Text>
        <Pressable
          onPress={() =>
            navigation.navigate('RestaurantDetails', {
              resId: cart?.resId,
              cloudinaryImageId: '',
            })
          }>
          <Text className="underline text-gray-700" numberOfLines={1}>
            View Full Menu
          </Text>
        </Pressable>
      </View>
      <Pressable
        className="flex-col bg-green-600 py-2 px-4 rounded-lg items-center"
        onPress={() => navigation.navigate('Cart')}>
        <Text className="text-white font-semibold text-base">
          {cart?.items?.length} {cart?.items?.length > 1 ? 'Items' : 'Item'} |
          ₹299
        </Text>
        <Text className="text-white font-bold text-lg">Checkout</Text>
      </Pressable>
      <Pressable
        className="bg-red-100 h-full p-2 rounded-lg flex items-center justify-center"
        onPress={toggleModal}>
        <Icon name="delete" size={25} color="#c00" />
      </Pressable>
    </View>
  );
}
