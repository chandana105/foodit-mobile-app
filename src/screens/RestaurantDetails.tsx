import {Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type RestaurantDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'RestaurantDetails'
>;

export default function RestaurantDetails({route}: RestaurantDetailsProps) {
  const {productId} = route.params;

  return (
    <View>
      <Text>RestaurantDetails {productId}</Text>
    </View>
  );
}
