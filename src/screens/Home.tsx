import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import SearchBar from '../components/HomeScreen/SearchBar';
import RestaurantList from '../components/HomeScreen/RestaurantList';
import RestaurantListShimmerUI from '../components/HomeScreen/RestaurantListShimmerUI';
import useRestaurantsList from '../hooks/useRestaurantsList';
import HomeCartDetails from '../components/HomeScreen/HomeCartDetails';
import CartDeleteModal from '../components/HomeScreen/CartDeleteModal';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  const restaurantCardDetails = (item: RestaurantItem) =>
    navigation.navigate('RestaurantDetails', {
      resId: item.info.id,
      cloudinaryImageId: '',
    });

  const {resList, filteredResList, setFilteredResList} = useRestaurantsList();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleFilterTopRatedRestaurants = () => {
    const filteredList = resList.filter(list => list.info.avgRating > 4.4);
    setFilteredResList(filteredList);
  };

  if (!resList.length) {
    return <RestaurantListShimmerUI />;
  }

  return (
    <View className="flex-1">
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
      {/* here button method will go */}
      <HomeCartDetails toggleModal={toggleModal} />
      {/* herem Modal */}
      <CartDeleteModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </View>
  );
}
