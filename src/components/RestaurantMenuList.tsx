import {View, Text, FlatList, Pressable} from 'react-native';
import React from 'react';
import RestaurantMenuListItems from './RestaurantMenuListItems';

export default function RestaurantMenuList({
  categoryList,
  activeIndex,
  setActiveIndex,
}: any) {
  // console.log({activeIndex});

  return (
    <FlatList
      data={categoryList}
      keyExtractor={item => item?.card?.card.title}
      className="my-2"
      renderItem={({item, index}) => (
        <View
          key={item?.card?.card.title}
          className="my-4 px-2 py-4 flex-col justify-between rounded-md bg-white ">
          <Pressable
            className="flex-row justify-between"
            onPress={() => setActiveIndex(index)}>
            <Text className="text-lg text-black">
              {item?.card?.card.title} {item?.card?.card.itemCards.length}{' '}
            </Text>
            <Text className="text-lg">
              {activeIndex.includes(index) ? '⬇️' : '⬆️'}
            </Text>
          </Pressable>
          {activeIndex.includes(index) && (
            <RestaurantMenuListItems item={item} />
          )}
        </View>
      )}
    />
  );
}
