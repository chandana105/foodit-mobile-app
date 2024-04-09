import {FlatList, Pressable, Text} from 'react-native';
import React, {PropsWithChildren} from 'react';
import RestaurantCard from './RestaurantCard';
import useRestaurantsList from '../hooks/useRestaurantsList';

type RestaurantListProps = PropsWithChildren<{
  restaurantCardDetails: (item: RestaurantItem) => void;
}>;

export default function RestaurantList({
  restaurantCardDetails,
}: RestaurantListProps) {
  const {resList} = useRestaurantsList();

  // console.log({resList}, 'list');

  console.log(JSON.stringify(resList, null, 2));

  return resList?.length === 0 ? (
    <Text>Loading</Text>
  ) : (
    <FlatList
      data={resList}
      keyExtractor={item => item?.info.id}
      renderItem={({item}) => (
        <Pressable onPress={() => restaurantCardDetails(item)}>
          <RestaurantCard resItem={item} />
        </Pressable>
      )}
    />
  );
}

// here we ll render map (flatlist) on restuarnat cards
