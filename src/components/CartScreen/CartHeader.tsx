import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/appStore';

export default function CartHeader() {
  const navigation = useNavigation();
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <View className="p-5 border-b border-red-100 bg-white shadow-xs">
      <View>
        <Text className="text-lg font-bold text-center text-black">Cart</Text>
        <Text className="text-center text-gray-400">{cart.restaurantName}</Text>
      </View>
      <TouchableOpacity
        className="rounded-full bg-gray-100 absolute top-3 right-5"
        onPress={() => navigation.goBack()}>
        <Icon name="close-circle" size={32} color="#B5B7BA" />
      </TouchableOpacity>
    </View>
  );
}
