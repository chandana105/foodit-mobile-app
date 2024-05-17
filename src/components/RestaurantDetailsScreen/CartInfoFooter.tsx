import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default function CartInfoFooter() {
  const navigation = useNavigation();
  return (
    <View className="absolute bottom-2 left-0 right-0 z-50 px-1 py-6 rounded-lg border border-gray-200 bg-white shadow-lg">
      <View className="rounded-2xl bg-green-600 py-5 px-5 flex-row justify-between ">
        <Text className="text-white font-semibold text-lg">1 Item added</Text>
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
