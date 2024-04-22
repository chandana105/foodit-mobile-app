import {Image, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconDot from 'react-native-vector-icons/Entypo';
import IconLabel from 'react-native-vector-icons/MaterialIcons';

import {CDN_URL} from '../utils/constants';

type RestaurantCardProps = PropsWithChildren<{
  resItem: RestaurantItem;
}>;

type RestaurantCardComponent = React.ComponentType<RestaurantCardProps>;

function RestaurantCard({resItem}: RestaurantCardProps) {
  const {
    name,
    avgRating,
    cuisines,
    sla,
    costForTwo,
    cloudinaryImageId,
    avgRatingString,
  } = resItem.info;

  console.log(JSON.stringify(resItem, null, 2));

  return (
    <View className="m-4 p-1 py-2  flex-row h-48 rounded-lg border-[0.5px] border-slate-200 shadow-sm bg-white ">
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
          {cuisines.slice(0, 3).join(', ')}
          {cuisines.length > 3 && ' ...'}
        </Text>
        <Text className="font-semibold text-black text-sm">{costForTwo}</Text>
      </View>
    </View>
  );
}

export const withVegLabel = (WrappedComponent: RestaurantCardComponent) => {
  return (props: RestaurantCardProps) => {
    return (
      <>
        <View className="absolute bg-green-700 text-white  mx-2 my-2 px-4 py-2 z-10 rounded-lg ">
          <Text className=" text-white font-bold">Veg</Text>
        </View>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default RestaurantCard;
