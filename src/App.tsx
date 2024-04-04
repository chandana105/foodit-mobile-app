import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import RestaurantDetails from './screens/RestaurantDetails';
import {Image} from 'react-native';
import {LOGO_URL} from './utils/constants';
import Icon from 'react-native-vector-icons/FontAwesome6';

export type RootStackParamList = {
  Home: undefined;
  RestaurantDetails: {productId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Logo = () => <Image source={{uri: LOGO_URL}} className="w-10 h-10" />;

const Profile = () => <Icon name="circle-user" size={25} color="#000" />;

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
            headerLeft: Logo,
            headerRight: Profile,
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
