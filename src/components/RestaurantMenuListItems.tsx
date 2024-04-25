import {View, Text, FlatList} from 'react-native';
import React from 'react';

export default function RestaurantMenuListItems({item}: any) {
  return (
    <FlatList
      data={item?.card?.card.itemCards}
      keyExtractor={item1 => item1?.card?.info.id}
      className="my-4"
      renderItem={({item}) => (
        <View
          key={item?.card?.info.id}
          //   style={{display: index !== activeIndex ? 'flex' : 'none'}}
        >
          <Text className=" text-orange-700">{item?.card?.info.name}</Text>
          {/* inke beeech mein item sep lgana hai */}
        </View>
      )}
    />
  );
}
