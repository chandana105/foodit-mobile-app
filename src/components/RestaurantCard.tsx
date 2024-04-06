import {Image, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconDot from 'react-native-vector-icons/Entypo';

export default function RestaurantCard() {
  return (
    <View className=" m-4 p-1 flex flex-row h-44 border-[0.5px] border-zinc-200 rounded-lg ">
      <View>
        <Image
          source={{
            uri: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf',
          }}
          className="w-40 h-full rounded-lg"
        />
      </View>
      <View className="px-2 gap-2">
        <Text className="font-bold text-xl text-black">Burger King</Text>
        <View className="flex flex-row items-center">
          <Icon name="star-circle" size={25} color="#040" />
          <Text className="font-bold text-black ml-1">4.4</Text>
          <IconDot name="dot-single" size={25} color="#000" />
          <Text className="font-bold text-black">30-35 mins</Text>
        </View>
        <Text className="font-medium text-black">
          Burgers, American, Chinese
        </Text>
        <Text className="font-medium text-black">₹ 350 for two</Text>
      </View>
    </View>
  );
}

/**
 * cardbody
 *  - cardimg
 *  - carddetials
 */
