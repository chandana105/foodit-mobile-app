import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CartFooter() {
  return (
    <View className="p-5 bg-white mt-5  space-y-4">
      <View className="flex-row justify-between">
        <Text className="text-gray-400">Subtotal</Text>
        <Text className="text-gray-400">₹200</Text>
      </View>

      <View className="flex-row justify-between">
        <Text className="text-gray-400">Delivery fee</Text>
        <Text className="text-gray-400">₹20</Text>
      </View>

      <View className="flex-row justify-between">
        <Text className="text-black">Order Total</Text>
        <Text className="text-black font-extrabold">₹220</Text>
      </View>

      <TouchableOpacity className="rounded-lg bg-green-600 p-4">
        <Text className="text-center text-white text-lg font-bold">
          Place Order
        </Text>
      </TouchableOpacity>
    </View>
  );
}
