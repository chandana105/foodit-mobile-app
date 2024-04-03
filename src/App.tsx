import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import RestaurantDetails from './screens/RestaurantDetails';

export type RootStackParamList = {
  Home: undefined;
  RestaurantDetails: {productId: string}; //not using here product : whole prodcut
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Restaurants List',
          }}
        />
        <Stack.Screen
          name="RestaurantDetails"
          component={RestaurantDetails}
          options={{
            title: 'Restaurant Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
