import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/appStore';

export default function CartFooter() {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <View className="p-5 bg-white mt-5 space-y-4">
      <View className="flex-row justify-between">
        <Text className="text-gray-400">Subtotal</Text>
        <Text className="text-gray-400">
          ₹{(cart.orderTotal - 20).toFixed(2)}
        </Text>
      </View>

      <View className="flex-row justify-between">
        <Text className="text-gray-400">Delivery fee</Text>
        <Text className="text-gray-400">₹20.00</Text>
      </View>

      <TouchableOpacity className="rounded-lg bg-green-600 p-4">
        <Text className="text-center text-white text-lg font-bold">
          Order Total : ₹{cart.orderTotal.toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
