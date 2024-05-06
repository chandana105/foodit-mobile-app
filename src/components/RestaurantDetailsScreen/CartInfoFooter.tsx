import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export default function CartInfoFooter() {
  return (
    <View className="absolute bottom-2 left-0 right-0 z-50 px-1 py-6 rounded-lg border border-gray-200 bg-white shadow-lg">
      <View className="rounded-2xl bg-green-600 py-5 px-5 flex-row justify-between ">
        <Text className="text-white font-semibold text-lg">1 Item added</Text>
        <View className="flex-row items-center">
          <Text className="text-white font-semibold text-lg">View Cart </Text>
          <Icon name="right" size={18} color="#fff" />
        </View>
      </View>
    </View>
  );
}
