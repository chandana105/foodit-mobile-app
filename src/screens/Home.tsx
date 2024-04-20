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
    navigation.navigate('RestaurantDetails', {
      resId: item.info.id,
      cloudinaryImageId: '',
    });

  const {resList, filteredResList, setFilteredResList} = useRestaurantsList();

  const handleFilterTopRatedRestaurants = () => {
    const filteredList = resList.filter(list => list.info.avgRating >= 4.4);
    setFilteredResList(filteredList); // Create a new array using spread syntax
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
        className="bg-blue-700 m-auto rounded-lg p-3   "
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

/**
 * reslist yhaan chajye for loader ,toh that means props passing hogi
 * 
 * we cant do this 
 *  const handleFilterTopRatedRestaurants = () => {
    console.log('here');
    return resList.filter(item => item.info.avgRating > 4.2);
  };
  as if we are making changes in reslist so we nedto rneder it also with new lsit of res
 */

// setFilteredResList(prevState => {
//   console.log('State before:\n', JSON.stringify(prevState, null, 2));
//   const topRatedRestaurantsList = prevState.filter(
//     list => list.info.avgRating > 4.4,
//   );
//   console.log(
//     'State After:\n',
//     JSON.stringify(topRatedRestaurantsList, null, 2),
//   );
//   return [...topRatedRestaurantsList];
// });
