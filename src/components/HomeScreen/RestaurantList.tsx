import {FlatList, Pressable, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import RestaurantCard, {withVegLabel} from './RestaurantCard';

type RestaurantListProps = PropsWithChildren<{
  restaurantCardDetails: (item: RestaurantItem) => void;
  filteredResList: RestaurantItem[];
}>;

export default function RestaurantList({
  filteredResList,
  restaurantCardDetails,
}: RestaurantListProps) {
  const RestaurantCardWithVeg = withVegLabel(RestaurantCard);

  return (
    <FlatList
      data={filteredResList}
      keyExtractor={item => item?.info.id}
      className="my-4"
      ListEmptyComponent={
        <View className="h-48 p-4 mx-auto">
          <Text className="text-2xl text-black">No Restaurants</Text>
        </View>
      }
      renderItem={({item}) => (
        <Pressable
          onPress={() => restaurantCardDetails(item)}
          key={item.info.id}>
          {item?.info?.veg ? (
            <RestaurantCardWithVeg resItem={item} />
          ) : (
            <RestaurantCard resItem={item} />
          )}
        </Pressable>
      )}
      // onRefresh={() => filteredResList}
    />
  );
}
