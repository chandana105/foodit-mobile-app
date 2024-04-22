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

  const {resList, filteredResList, setFilteredResList} = useRestaurantsList();

  const handleFilterTopRatedRestaurants = () => {
    const filteredList = resList.filter(list => list.info.avgRating > 4.4);
    setFilteredResList(filteredList);
  };

  if (!resList.length) {
    return <RestaurantListShimmerUI />;
  }

  return (
    <>
      <SearchBar
        resList={resList}
        filteredResList={filteredResList}
        setFilteredResList={setFilteredResList}
      />
      <TouchableOpacity
        className="bg-orange-600 m-auto rounded-lg p-3   "
        onPress={handleFilterTopRatedRestaurants}>
        <Text className="text-white font-medium text-base">
          Top Rated Restaurants
        </Text>
      </TouchableOpacity>
      <RestaurantList
        filteredResList={filteredResList}
        restaurantCardDetails={restaurantCardDetails}
      />
    </>
  );
}
