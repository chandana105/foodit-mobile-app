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

  const {openCategories, categories, handleToggle} = useRestaurantDetails(
    resInfo,
    navigation,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearRestaurant());

    if (resInfo) {
      dispatch(setRestaurant(resInfo.cards[2].card.card.info));
    }

    return () => {
      dispatch(clearRestaurant());
    };
  }, [resId, resInfo, dispatch]);

  return !(resInfo && categories) ? (
    <RestaurantDetailsShimmerUI />
  ) : (
    <View className="flex-1">
      <RestaurantDetailsHeader resInfo={resInfo} />
      <Text className="text-center text-xl font-semibold text-black">Menu</Text>
      <RestaurantMenuList
        categoryList={categories}
        openCategories={openCategories}
        handleToggle={handleToggle}
      />
      <CartInfoFooter />
    </View>
  );
}
