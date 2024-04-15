import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';
import RestaurantListShimmerUI from '../components/RestaurantListShimmerUI';
import useRestaurantsList from '../hooks/useRestaurantsList';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  const restaurantCardDetails = (item: RestaurantItem) =>
    navigation.navigate('RestaurantDetails', {productId: item.info.id});

  const {resList} = useRestaurantsList();

  if (!resList.length) {
    return <RestaurantListShimmerUI />;
  }

  return (
    <>
      <SearchBar />
      <TouchableOpacity className="bg-blue-700 m-auto rounded-lg p-3   ">
        <Text className="text-white font-medium text-base">
          Top Rated Restaurants
        </Text>
      </TouchableOpacity>
      <RestaurantList
        resList={resList}
        restaurantCardDetails={restaurantCardDetails}
      />
    </>
  );
}

/**
 * reslist yhaan chajye for loader ,toh that means props passing hogi
 */
