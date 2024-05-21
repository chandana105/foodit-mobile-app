import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {CDN_URL} from '../../utils/constants';

export default function CartItems({item}: any) {
  return (
    <View className="flex-row items-center space-x-3 bg-white py-3 px-5">
      <Image
        source={{
          uri: `${CDN_URL}${item?.card?.info?.imageId}`,
        }}
        className="w-10 h-10 rounded-full"
      />
      <Text className="flex-1">{item?.card?.info?.name}</Text>
      <View className="flex-row items-center justify-between  py-2 bg-white rounded-md border border-gray-200 border-solid ">
        <TouchableOpacity className="px-4">
          <Text className="text-green-600 text-lg uppercase font-bold">-</Text>
        </TouchableOpacity>
        <Text className="text-green-600 text-lg uppercase font-bold">1</Text>
        <TouchableOpacity className="px-4">
          <Text className="text-green-600 text-lg uppercase font-bold">+</Text>
        </TouchableOpacity>
      </View>
      <Text className="">
        {item?.card?.info?.price
          ? item?.card?.info?.price / 100
          : item?.card?.info?.defaultPrice / 100}
      </Text>
    </View>
  );
}
