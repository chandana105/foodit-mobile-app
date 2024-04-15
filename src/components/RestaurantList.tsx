import {FlatList, Pressable} from 'react-native';
import React, {PropsWithChildren} from 'react';
import RestaurantCard from './RestaurantCard';

type RestaurantListProps = PropsWithChildren<{
  restaurantCardDetails: (item: RestaurantItem) => void;
  resList: RestaurantItem[];
}>;

export default function RestaurantList({
  resList,
  restaurantCardDetails,
}: RestaurantListProps) {
  return (
    <FlatList
      data={resList}
      keyExtractor={item => item?.info.id}
      className="my-4"
      renderItem={({item}) => (
        <Pressable onPress={() => restaurantCardDetails(item)}>
          <RestaurantCard resItem={item} />
        </Pressable>
      )}
    />
  );
}
