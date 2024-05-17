import {View, Text, FlatList, Pressable} from 'react-native';
import React, {memo} from 'react';
import RestaurantMenuListItems from './RestaurantMenuListItems';
import Icon from 'react-native-vector-icons/AntDesign';

const RestaurantMenuList = memo(
  ({categoryList, activeIndex, setActiveIndex, resId}: any) => {
    return (
      <FlatList
        data={categoryList}
        keyExtractor={item => item?.card?.card.title}
        className="my-2"
        ListFooterComponent={<View className="h-48" />}
        renderItem={({item, index}) => (
          <View
            key={item?.card?.card.title}
            className="my-2 px-3 py-4 flex-col justify-between rounded-md bg-white  ">
            <Pressable
              className="flex-row justify-between items-center "
              onPress={() => setActiveIndex(index)}>
              <Text className="text-2xl text-black font-bold  flex-1">
                {item?.card?.card.title} ({item?.card?.card.itemCards.length}){' '}
              </Text>
              <Text className="text-lg">
                {activeIndex.includes(index) ? (
                  <Icon name="up" size={25} color="#000" />
                ) : (
                  <Icon name="down" size={25} color="#000" />
                )}
              </Text>
            </Pressable>
            {activeIndex.includes(index) && (
              <RestaurantMenuListItems item={item} resId={resId} />
            )}
          </View>
        )}
      />
    );
  },
);

export default RestaurantMenuList;
