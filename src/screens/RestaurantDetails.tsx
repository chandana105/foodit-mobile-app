import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import useRestaurantMenu from '../hooks/useRestaurantMenu';
import RestaurantDetailsHeader from '../components/RestaurantDetailsScreen/RestaurantDetailsHeader';
import RestaurantMenuList from '../components/RestaurantDetailsScreen/RestaurantMenuList';
import useRestaurantDetails from '../hooks/useRestaurantDetails';
import RestaurantDetailsShimmerUI from '../components/RestaurantDetailsScreen/RestaurantDetailsShimmerUI';
import CartInfoFooter from '../components/RestaurantDetailsScreen/CartInfoFooter';
import {clearRestaurant, setRestaurant} from '../store/restaurantSlice';
import {useDispatch} from 'react-redux';

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

  const dispatch = useDispatch();

  useEffect(() => {
    // Clear the restaurant details when component mounts
    dispatch(clearRestaurant());

    // Set the new restaurant details
    if (resInfo) {
      dispatch(setRestaurant(resInfo.cards[2].card.card.info));
    }

    // Cleanup when component unmounts or resId changes
    return () => {
      dispatch(clearRestaurant());
    };
  }, [resId, resInfo, dispatch]);

  return !categoryListRef.current.length ? (
    <RestaurantDetailsShimmerUI />
  ) : (
    <View className="flex-1">
      <RestaurantDetailsHeader resInfo={resInfo} />
      <Text className="text-center text-xl font-semibold text-black">Menu</Text>
      <RestaurantMenuList
        categoryList={categoryListRef.current}
        activeIndex={activeIndex}
        setActiveIndex={(index: any) => setActiveIndexProps(index)}
      />
      <CartInfoFooter />
    </View>
  );
}
