import {View} from 'react-native';
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

  return (
    <View>
      <RestaurantDetailsHeader resInfo={resInfo} />
    </View>
  );
}

/**
 * resInfo card
 * resMenu categories
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
