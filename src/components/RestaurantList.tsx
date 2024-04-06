import {FlatList, Pressable} from 'react-native';
import React, {PropsWithChildren} from 'react';
import RestaurantCard from './RestaurantCard';

const list = {
  id: '1',
  name: 'Burger King',
  rating: '4.4',
  time: '30-35 mins',
  description: 'Burgers, American, Chinese',
  costForTwo: '₹ 350 for two',
};

const restItems = Array.from({length: 10}, () => ({...list}));

console.log({restItems});

type RestaurantListProps = PropsWithChildren<{
  restaurantCardDetails: () => void;
}>;

export default function RestaurantList({
  restaurantCardDetails,
}: RestaurantListProps) {
  return (
    <FlatList
      data={restItems}
      keyExtractor={item => item.id + 1}
      renderItem={item => (
        <Pressable onPress={restaurantCardDetails}>
          <RestaurantCard />
          {/* will put item as argument later */}
        </Pressable>
      )}
    />
  );
}

// here we ll render map (flatlist) on restuarnat cards
