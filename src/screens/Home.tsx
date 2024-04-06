import {ScrollView, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  const restaurantCardDetails = () =>
    navigation.navigate('RestaurantDetails', {productId: '1'});

  return (
    <ScrollView>
      <SearchBar />
      <TouchableOpacity className="bg-blue-700 m-auto rounded-lg p-3   ">
        <Text className="text-white font-medium text-base">
          Top Rated Restaurants
        </Text>
      </TouchableOpacity>

      {/* render map ie flatlist for restuarnat cards */}
      <RestaurantList restaurantCardDetails={restaurantCardDetails} />
    </ScrollView>
  );
}
