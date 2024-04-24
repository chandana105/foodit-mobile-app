import {FlatList, Platform, Pressable, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import useRestaurantMenu from '../hooks/useRestaurantMenu';
import RestaurantListShimmerUI from '../components/RestaurantListShimmerUI';
import RestaurantDetailsHeader from '../components/RestaurantDetailsHeader';

type RestaurantDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'RestaurantDetails'
>;

export default function RestaurantDetails({
  navigation,
  route,
}: RestaurantDetailsProps) {
  const {resId} = route.params;

  const resInfo = useRestaurantMenu(resId);

  useEffect(() => {
    if (resInfo !== null) {
      const {cloudinaryImageId} = resInfo?.cards[2]?.card?.card?.info;

      navigation.setParams({
        cloudinaryImageId: cloudinaryImageId,
      });
    }
  }, [navigation, resInfo]);

  if (resInfo === null) {
    return <RestaurantListShimmerUI />;
  }

  let cardsIndex = 0;
  if (Platform.OS === 'android') {
    cardsIndex = 4;
  } else if (Platform.OS === 'ios') {
    cardsIndex = 5;
  }

  const categoryList = resInfo?.cards[
    cardsIndex
  ]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (category: any) =>
      category?.card?.card?.['@type'] ===
      'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
  );

  console.log(JSON.stringify(categoryList[0]?.card?.card?.title, null, 2));

  return (
    <View>
      <RestaurantDetailsHeader resInfo={resInfo} />
      {/* Menu */}
      <Text className="text-center text-xl font-semibold">Menu</Text>
      {/* <Text>{categoryList[0]?.card?.card.title}</Text>
      {/* categroy title ki flatlist krni */}
      {/* <Text>{categoryList[0]?.card?.card.itemCards[0]?.card?.info?.name}</Text>  */}

      <FlatList
        data={categoryList}
        keyExtractor={item => item?.card?.card.title}
        className="my-4"
        renderItem={({item}) => (
          <View key={item?.card?.card.title}>
            <Text className="text-lg">{item?.card?.card.title}</Text>
            {/* render another flatlist contoaning itemcards info */}
            {/* <Text>{item?.card?.card.itemCards[0]?.card?.info?.name}</Text> */}

            <FlatList
              data={item?.card?.card.itemCards}
              keyExtractor={item1 => item1?.card?.info.id}
              className="my-4"
              renderItem={({item}) => (
                <View key={item?.card?.info.id}>
                  <Text className=" text-orange-700">
                    {item?.card?.info.name}
                  </Text>
                </View>
              )}
            />
          </View>
        )}
      />
    </View>
  );
}

/**
 * resInfo card
 * resMenu categories
 *  - category flatlist rendering
 *    - individual categories food items flatlist
 */

// const categoryList =
//   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
//     category =>
//       category?.card?.card?.['@type'] ===
//       'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
//   );

// console.log(
//   JSON.stringify(resInfo?.cards[2]?.card?.card?.info, null, 2),
//   'here',
// );
