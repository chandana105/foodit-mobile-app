import {Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import useRestaurantMenu from '../hooks/useRestaurantMenu';
import RestaurantListShimmerUI from '../components/RestaurantListShimmerUI';
import RestaurantDetailsHeader from '../components/RestaurantDetailsHeader';
import RestaurantMenuList from '../components/RestaurantMenuList';
import useRestaurantDetails from '../hooks/useRestaurantDetails';

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
