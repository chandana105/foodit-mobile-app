import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import SearchBar from '../components/HomeScreen/SearchBar';
import RestaurantList from '../components/HomeScreen/RestaurantList';
import RestaurantListShimmerUI from '../components/HomeScreen/RestaurantListShimmerUI';
import useRestaurantsList from '../hooks/useRestaurantsList';
import HomeCartDetails from '../components/HomeScreen/HomeCartDetails';
import CartDeleteModal from '../components/HomeScreen/CartDeleteModal';
import Icon from 'react-native-vector-icons/Ionicons';
import useHomeScreen from '../hooks/useHomeScreen';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  const restaurantCardDetails = (item: RestaurantItem) =>
    navigation.navigate('RestaurantDetails', {
      resId: item.info.id,
      cloudinaryImageId: '',
    });
  const {resList, filteredResList, setFilteredResList} = useRestaurantsList();

  const {
    isFilterOn,
    isModalVisible,
    handleFilter,
    handleFilterTopRatedRestaurants,
    handleCloseFilter,
    toggleModal,
    handleCancelReplace,
    handleConfirmReplace,
  } = useHomeScreen(resList, setFilteredResList);

  if (!resList.length) {
    return <RestaurantListShimmerUI />;
  }

  return (
    <View className="flex-1">
      <SearchBar handleFilter={handleFilter} />
      <TouchableOpacity
        className="bg-orange-600 m-auto rounded-lg p-3 flex-row justify-between items-center  "
        onPress={handleFilterTopRatedRestaurants}>
        <Text className="text-white font-medium text-base">
          Top Rated Restaurants
        </Text>
        {isFilterOn && (
          <TouchableOpacity
            className=" bg-white ml-3"
            onPress={handleCloseFilter}>
            <Icon name="close-circle" size={20} color="#111" />
          </TouchableOpacity>
        )}
      </TouchableOpacity>

      <RestaurantList
        filteredResList={filteredResList}
        restaurantCardDetails={restaurantCardDetails}
      />

      <HomeCartDetails toggleModal={toggleModal} />

      <CartDeleteModal
        isModalVisible={isModalVisible}
        onCancel={handleCancelReplace}
        onConfirm={handleConfirmReplace}
      />
    </View>
  );
}
