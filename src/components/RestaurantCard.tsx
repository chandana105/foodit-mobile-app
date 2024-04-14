import {Image, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconDot from 'react-native-vector-icons/Entypo';
import IconLabel from 'react-native-vector-icons/MaterialIcons';

import {CDN_URL} from '../utils/constants';

type RestaurantCardProps = PropsWithChildren<{
  resItem: RestaurantItem;
}>;

export default function RestaurantCard({resItem}: RestaurantCardProps) {
  const {
    name,
    avgRating,
    cuisines,
    sla,
    costForTwo,
    cloudinaryImageId,
    avgRatingString,
  } = resItem.info;
  return (
    <View className="m-4 p-1 py-2 flex-1 flex-row h-48 rounded-lg border-[0.5px] border-slate-200 shadow-sm bg-white ">
      <View>
        <Image
          source={{
            uri: `${CDN_URL}${cloudinaryImageId}`,
          }}
          className="w-40 h-full rounded-lg"
        />
      </View>
      <View className="px-2 gap-1 flex-1">
        <Text className="font-bold text-base text-black">{name}</Text>
        <View className="flex flex-row items-center">
          {avgRating ? (
            <>
              <Icon name="star-circle" size={25} color="#040" />
              <Text className="font-bold text-black ml-1 text-sm">
                {avgRating}
              </Text>
            </>
          ) : (
            <>
              <IconLabel name="label-important" size={25} color="#fa0" />
              <Text className="font-bold text-black ml-1 text-sm">
                {avgRatingString}
              </Text>
            </>
          )}
          <IconDot name="dot-single" size={25} color="#000" />
          <Text className="font-bold text-black text-sm">{sla.slaString}</Text>
        </View>
        <Text className="font-medium text-black text-sm">
          {cuisines.join(', ')}
        </Text>
        <Text className="font-semibold text-black text-sm">{costForTwo}</Text>
      </View>
    </View>
  );
}

/**
 * cardbody
 *  - cardimg
 *  - carddetials
 */
