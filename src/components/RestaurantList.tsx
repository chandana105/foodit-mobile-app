import {FlatList, Pressable} from 'react-native';
import React, {PropsWithChildren} from 'react';
import RestaurantCard from './RestaurantCard';

type RestaurantListProps = PropsWithChildren<{
  restaurantCardDetails: (item: RestaurantItem) => void;
  filteredResList: RestaurantItem[];
}>;

export default function RestaurantList({
  filteredResList,
  restaurantCardDetails,
}: RestaurantListProps) {
  // console.log(JSON.stringify(filteredResList, null, 2));

  return (
    <FlatList
      data={filteredResList}
      // extraData={filteredResList}
      keyExtractor={item => item?.info.id}
      className="my-4"
      renderItem={({item}) => (
        <Pressable
          onPress={() => restaurantCardDetails(item)}
          key={item.info.id}>
          <RestaurantCard resItem={item} />
        </Pressable>
      )}
      // contentContainerStyle={{paddingHorizontal: 16}}
      // onRefresh={() => filteredResList}
    />
  );
}
