import {Platform, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import useRestaurantMenu from '../hooks/useRestaurantMenu';
import RestaurantListShimmerUI from '../components/RestaurantListShimmerUI';
import RestaurantDetailsHeader from '../components/RestaurantDetailsHeader';
import RestaurantMenuList from '../components/RestaurantMenuList';

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

  let cardsIndex = 0;
  if (Platform.OS === 'android') {
    cardsIndex = 4;
  } else if (Platform.OS === 'ios') {
    cardsIndex = 5;
  }

  const categoryListRef = useRef<any[]>([]);

  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  useEffect(() => {
    if (resInfo !== null) {
      const {cloudinaryImageId} = resInfo?.cards[2]?.card?.card?.info;

      navigation.setParams({
        cloudinaryImageId: cloudinaryImageId,
      });

      if (
        categoryListRef.current.length !==
        resInfo?.cards[cardsIndex]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ?.length
      ) {
        categoryListRef.current = resInfo?.cards[
          cardsIndex
        ]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (category: any) =>
            category?.card?.card?.['@type'] ===
            'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
        );

        setActiveIndex(
          Array.from({length: categoryListRef.current.length}, (_, i) => i),
        );
      }
    }
  }, [navigation, resInfo, cardsIndex]);

  // console.log({activeIndex});

  const setActiveIndexProps = (index: number) => {
    if (activeIndex.includes(index)) {
      setActiveIndex(activeIndex.filter(i => i !== index));
    } else {
      setActiveIndex([...activeIndex, index]);
    }
  };
  return resInfo === null ? (
    <RestaurantListShimmerUI />
  ) : (
    <View>
      <RestaurantDetailsHeader resInfo={resInfo} />
      {/* Menu */}
      <Text className="text-center text-xl font-semibold text-black">Menu</Text>
      <RestaurantMenuList
        categoryList={categoryListRef.current}
        activeIndex={activeIndex}
        setActiveIndex={(index: any) => setActiveIndexProps(index)}
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
