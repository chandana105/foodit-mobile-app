import {Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLabel from 'react-native-vector-icons/MaterialIcons';
import IconDot from 'react-native-vector-icons/Entypo';

export default function RestaurantDetailsHeader({resInfo}: any) {
  const {
    name,
    cuisines,
    avgRating,
    avgRatingString,
    sla,
    areaName,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info;

  console.log(JSON.stringify(resInfo?.cards[2]?.card?.card, null, 2));

  return (
    <View className="m-4 px-2 py-4 flex-row justify-between items-baseline rounded-xl border-[0.5px] border-slate-200 shadow-sm bg-white ">
      {/* description */}
      <View className="px-2 gap-1 flex-1">
        <Text className="font-bold text-lg text-black">{name}</Text>
        <View className="flex-row items-center">
          <Text className="font-semibold text-black text-sm">
            {sla.slaString}
          </Text>
          <IconDot name="dot-single" size={25} color="#000" />
          <Text className="font-semibold text-black text-sm">{areaName}</Text>
        </View>
        <Text className="font-medium text-gray-500 text-sm">
          {cuisines.join(', ')}
        </Text>
      </View>
      {/* rating */}
      <View className="flex-col gap-1 px-1">
        <View className="flex flex-row items-center">
          {avgRating ? (
            <View className="flex-row items-center bg-green-800 p-1 px-2 rounded-lg">
              <Icon name="star" size={15} color="#fff" />
              <Text className="font-bold text-white ml-1 text-sm">
                {avgRating}
              </Text>
            </View>
          ) : (
            <>
              <IconLabel name="label-important" size={25} color="#fa0" />
              <Text className="font-bold text-black ml-1 text-sm">
                {avgRatingString}
              </Text>
            </>
          )}
        </View>
        <Text className="text-xs text-gray-500">{totalRatingsString}</Text>
      </View>
    </View>
  );
}
