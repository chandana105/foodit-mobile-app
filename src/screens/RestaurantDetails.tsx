import {Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import useRestaurantMenu from '../hooks/useRestaurantMenu';
import RestaurantDetailsHeader from '../components/RestaurantDetailsScreen/RestaurantDetailsHeader';
import RestaurantMenuList from '../components/RestaurantDetailsScreen/RestaurantMenuList';
import useRestaurantDetails from '../hooks/useRestaurantDetails';
import RestaurantDetailsShimmerUI from '../components/RestaurantDetailsScreen/RestaurantDetailsShimmerUI';

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

  const {categoryListRef, activeIndex, setActiveIndexProps} =
    useRestaurantDetails(resInfo, navigation);

  return !categoryListRef.current.length ? (
    <RestaurantDetailsShimmerUI />
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
