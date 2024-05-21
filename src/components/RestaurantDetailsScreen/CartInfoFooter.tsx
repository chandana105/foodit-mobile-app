import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/appStore';
import {RootStackParamList} from '../../App';

export default function CartInfoFooter() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const cart = useSelector((state: RootState) => state.cart);

  // Calculate total quantity of items in the cart
  const totalQuantity = cart.items.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  if (totalQuantity === 0) {
    return null;
  }

  return (
    <View className="absolute bottom-2 left-0 right-0 z-50 px-1 py-6 rounded-lg border border-gray-200 bg-white shadow-lg">
      <View className="rounded-2xl bg-green-600 py-5 px-5 flex-row justify-between ">
        <Text className="text-white font-semibold text-lg">
          {totalQuantity} {totalQuantity > 1 ? 'Items' : 'Item'} added
        </Text>
        <Pressable
          className="flex-row items-center"
          onPress={() => navigation.navigate('Cart')}>
          <Text className="text-white font-semibold text-lg">View Cart </Text>
          <Icon name="right" size={18} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}
