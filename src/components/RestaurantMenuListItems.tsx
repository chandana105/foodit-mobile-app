import {FlatList, View} from 'react-native';
import React from 'react';

import MenuListItem from './MenuListItem';

const ItemSeperator = () => {
  return <View className="h-[0.5] bg-gray-300" />;
};

export default function RestaurantMenuListItems({item}: any) {
  return (
    <FlatList
      data={item?.card?.card.itemCards}
      keyExtractor={item1 => item1?.card?.info.id}
      className="my-4"
      ItemSeparatorComponent={() => ItemSeperator()}
      renderItem={({item}) => <MenuListItem item={item} />}
    />
  );
}
