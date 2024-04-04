import {Button, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  return (
    <View>
      <Button
        title="go to res details"
        onPress={() =>
          navigation.navigate('RestaurantDetails', {productId: '1'})
        }
      />
      <Text className="font-bold text-red-700">hllo</Text>
    </View>
  );
}
